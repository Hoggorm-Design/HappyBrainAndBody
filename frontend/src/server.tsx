import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";

async function createServer() {
    const app = express();

    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "custom",
    });

    app.use(vite.middlewares);

    app.use("*", async (req, res) => {
        try {
            const url = req.originalUrl;

            let template = fs.readFileSync(
                path.resolve(__dirname, "./index.html"),
                "utf-8"
            );

            template = await vite.transformIndexHtml(url, template);

            const { render } = await vite.ssrLoadModule("server.ts");

            const appHtml = render();

            // Inject the app HTML into the template
            const html = template.replace(`<!--ssr-outlet-->`, appHtml);

            res.status(200).set({ "Content-Type": "text/html" }).end(html);
        } catch (e) {
            vite.ssrFixStacktrace(e as Error);
            console.error(e);
            res.status(500).end(e);
        }
    });

    const port = 5173;
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

createServer();
