// @ts-nocheck
/* eslint-disable */

import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { serveStatic } from '@hono/node-server/serve-static';
import fs from 'node:fs'

const port = 0;
// const port = 3000;

const app = new Hono();

app.use('*', cors());

// log requests
app.use('*', async (c: any, next: any) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`[${c.req.method}] ${c.req.path} - ${c.res.status} (${ms}ms)`);
});

app.get('/', (c) => {
  return c.text('hello world');
});

const endpoints = {
  mock(payload: any) {
    return { response: payload }
  }
}

for (const [endpoint, endpoint_fn] of Object.entries(endpoints)) {
  app.post(`/api/${endpoint}`, async (c) => {
    const args = await c.req.json();

    const result = Array.isArray(args) ?
      await handle(() => endpoint_fn(...args)) :
      await handle(() => endpoint_fn(args))

    const json = JSON.stringify(result,
      (key, value) => typeof value == 'symbol' ? value.description : value
    );

    return c.body(json, 200, {
      'Content-Type': 'application/json'
    });
  });
}

// serve static resources (e.g. css, js, img)
app.use('*', serveStatic({ root: '../web/build' }));

// not found
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

app.notFound((c) => {
  return c.json({ success: false, message: 'not found' }, 404);
});

serve({
  fetch: app.fetch,
  port
}, (info) => {
  log(`Server is running on http://localhost:${info.port}`);

  fs.writeFileSync('../web/port.json', `{"port":${info.port}}`)
});
