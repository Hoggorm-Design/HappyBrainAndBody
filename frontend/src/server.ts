import express from 'express';
import type { ViteDevServer } from 'vite';
import { createServer as createViteServer } from 'vite';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import helmet from "helmet";
import rateLimit from 'express-rate-limit';
import he from 'he';



const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 5173;

interface RenderFunction {
  (url: string): Promise<string>;
}

interface ServerEntry {
  render: RenderFunction;
}


async function createServer() {
  const app = express();

    app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "https://maps.googleapis.com",
          "https://*.google.com",
          "https://maps.gstatic.com"
        ],
        connectSrc: [
          "'self'",
          "ws://localhost:*",
          "https://maps.googleapis.com",
          "https://*.google.com",
          "https://maps.gstatic.com",
          "https://*.sanity.io",
          "https://*.apicdn.sanity.io"
        ],
        imgSrc: [
          "'self'",
          "data:",
          "https:",
          "blob:",
          "https://*.sanity.io",
          "https://*.apicdn.sanity.io"
        ],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://fonts.googleapis.com",
          "https://maps.googleapis.com"
        ],
        fontSrc: [
          "'self'",
          "https://fonts.gstatic.com",
          "data:"
        ],
        frameSrc: [
          "'self'",
          "https://www.google.com",
          "https://*.google.com",
          "https://maps.google.com",
          "https://open.spotify.com",
          "https://*.spotify.com"
        ],
        workerSrc: ["'self'", "blob:"],
        frameAncestors: ["'self'"],
        objectSrc: ["'none'"],
        manifestSrc: ["'self'"]
      }
    },
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" }
  })
);
   app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
      crossOriginOpenerPolicy: false,
      crossOriginResourcePolicy: { policy: "cross-origin" }
    })
  );
   let vite: ViteDevServer | undefined;

   app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
      return;
    }
    next();
  });

   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000,
     limit: 100,
   });

   app.use(limiter);


  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
      root: resolve(__dirname, '..'),
      logLevel: 'info'
    });
    app.use(vite.middlewares);

  } else {
    app.use(express.static(resolve(__dirname, '../dist/client'), {
      index: false,
      immutable: true,
      cacheControl: true,
      maxAge: '30d'
    }));
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {

      let template = readFileSync(
        isProduction
          ? resolve(__dirname, '../dist/client/index.html')
          : resolve(__dirname, '../index.html'),
        'utf-8'
      );

      if (!isProduction && vite) {
        template = await vite.transformIndexHtml(url, template);
      }

      let render: RenderFunction;
      if (isProduction) {
        // Type assertion for production build
        const serverEntry = (await import('../dist/server/entry-server.js')) as ServerEntry;
        render = serverEntry.render;
      } else {
        if (!vite) throw new Error('Vite server not initialized');
        // Type assertion for development build
        const serverEntry = (await vite.ssrLoadModule('/src/entry-server.tsx')) as ServerEntry;
        render = serverEntry.render;
      }

      const appHtml = await render(url);
      const html = template.replace('<!--ssr-outlet-->', appHtml);

      res
        .status(200)
        .set({ 'Content-Type': 'text/html' })
        .end(html);

    } catch (error) {
      if (isProduction) {
        next(error);
        return;
      }

      if (vite) {
        vite.ssrFixStacktrace(error as Error);
      }
      console.error('Error processing request:', error);
      res.status(500).end(error instanceof Error ? he.escape(error.stack) : 'Internal Server Error');
    }
  });

  app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Server error:', err);
    res.status(500).send('Internal Server Error');
  });

  return { app };
}

async function startServer() {
  try {
    const { app } = await createServer();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
      console.log(`Mode: ${isProduction ? 'production' : 'development'}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();