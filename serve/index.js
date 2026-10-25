import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { serveStatic } from '@hono/node-server/serve-static';
import fs from 'node:fs'
import { read, cwd } from 'lib/file'

const { stringify: serialize } = JSON

const version = `serve 0.0 (2026.10.26)`

const help = `
Serve static pages

Usage: serve [file] [options]

Options:
  -p, --port [number]        Sets port on which the server will work (default: "8000")
  -h, --host [host]          Sets host on which the server will work (default: "0.0.0.0")
  -r, --root [path]          Set root folder for reletive paths
  -i, --index [file]         Page to serve
  -l, --log   Logs writing flag (default: false)
  --not-found [file]         Page to show when not found (default: index)
  -h, --help                 Print help
  -v, --version              Print version
`

const port = 0;
// const port = 3000;

const app = new Hono();

app.use('*', cors());

// Log Requests
app.use('*', async (c, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`[${c.req.method}] ${c.req.path} - ${c.res.status} (${ms}ms)`);
});

// // Show Hello World for Empty Path
// app.get('/', (c) => {
//   return c.text('hello world');
// });

// Serve Static Resources (e.g. css, js, img)
app.use('*', serveStatic({ root: '../web/build' }));

// Fallback to Not Found
app.get('*', (c) => {
  if (c.req.path.startsWith('/api')) {
    return c.json({ success: false, message: 'api endpoint not found' }, 404);
  } else {
    try {
      const html = fs.readFileSync('../web/build/index.html', 'utf-8');
      return c.html(html);
    } catch {
      return c.text('web/build/index.html missing. Run web build first.', 500);
    }
  }
});
// app.notFound((c) => {
//   return c.json({ success: false, message: 'not found' }, 404);
// });

serve({
  fetch: app.fetch,
  port
}, (info) => {
  log(`Server is running on http://localhost:${info.port}`);
});
