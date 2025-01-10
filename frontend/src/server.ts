import express from "express";
import { createServer as createViteServer, ViteDevServer } from "vite";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

interface ServerEntryModule {
  render: (url: string) => Promise<string>;
}

const createServer = async () => {
    const app = express();
    const isProd = process.env.NODE_ENV === 'production';
    const root = resolve(__dirname, '..');

    let vite: ViteDevServer | undefined;
    if (!isProd) {
        vite = await createViteServer({
            server: { middlewareMode: true },
            appType: 'custom',
            root
        });
        app.use(vite.middlewares);
    }

    app.use(express.static(resolve(__dirname, '../dist/client')));

    app.use("*", async (req, res) => {
        const url = req.originalUrl;

        try {
            let template = readFileSync(
                isProd
                    ? resolve(__dirname, '../dist/client/index.html')
                    : resolve(__dirname, '../index.html'),
                'utf-8'
            );

            if (!isProd && vite) {
                template = await vite.transformIndexHtml(url, template);
            }

            let render: (url: string) => Promise<string>;
            if (isProd) {
                const serverEntry = await import('../dist/server/entry-server.js') as ServerEntryModule;
                render = serverEntry.render;
            } else {
                if (!vite) {
                    throw new Error('Vite server not initialized in development mode');
                }
                // Update this path to be relative to the root
                const serverEntry = await vite.ssrLoadModule('/src/entry-server.tsx') as ServerEntryModule;
                render = serverEntry.render;
            }

            const appHtml = await render(url);
            const html = template.replace('<!--ssr-outlet-->', appHtml);

            res.status(200).set({ "Content-Type": "text/html" }).end(html);
        } catch (error: unknown) {
            console.error('Render error:', error);
            const errorMessage = error instanceof Error ? error.stack : 'Unknown error occurred';
            res.status(500).end(errorMessage);
        }
    });

    return { app };
};

createServer().then(({ app }) => {
    app.listen(5173, () => {
        console.log('Server running at http://localhost:5173');
    });
}).catch((error: unknown) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});