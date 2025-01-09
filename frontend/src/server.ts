import express from "express";
import { createServer as createViteServer } from "vite";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const createServer = async () => {
    const app = express();
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "custom",
        root: resolve(__dirname, '..')
    });

    app.use(express.static(resolve(__dirname, '../public')));
    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
        const url = req.originalUrl;

        try {
            const template = readFileSync(
                resolve(__dirname, '../index.html'),
                'utf-8'
            );

            const transformedTemplate = await vite.transformIndexHtml(url, template);
            const { render } = await vite.ssrLoadModule(resolve(__dirname, "./entry-server.tsx"));
            const appHtml = await render(url);
            const html = transformedTemplate.replace(`<!--ssr-outlet-->`, appHtml);

            res.status(200)
                .set({ "Content-Type": "text/html" })
                .end(html);

        } catch (error) {
            vite.ssrFixStacktrace(error as Error);
            console.error('SSR Error:', error);
            res.status(500).end((error as Error).stack);
        }
    });

    return { app };
};

createServer().then(({ app }) => {
    app.listen(5173, () => {
        console.log('Server running at http://localhost:5173');
    });
}).catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});