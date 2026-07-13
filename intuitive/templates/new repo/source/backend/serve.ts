import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { serveStatic } from '@hono/node-server/serve-static';
import fs from 'node:fs'

const port = 0;
// const port = 3000;

const app = new Hono();

app.use('*', cors());

app.use('*', async (c: any, next: any) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`[${c.req.method}] ${c.req.path} - ${c.res.status} (${ms}ms)`);
});

// 3. Simple Text Route
app.get('/', (c) => {
  return c.text('Welcome to Hono on Node.js!');
});

// 4. JSON Route with Dynamic Path Parameters
app.get('/api/users/:id', (c) => {
  const userId = c.req.param('id');

  return c.json({
    success: true,
    data: {
      id: userId,
      name: 'Jane Doe',
      role: 'Developer'
    }
  });
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
      /**
       * you would not have a key named error i guess
       * 
       * (can make it a hash for robustness if needed)
       */
      (key, value) => typeof value == 'symbol' ? value.description : value
    );

    return c.body(json, 200, {
      'Content-Type': 'application/json'
    });
  });
}

app.use('*', serveStatic({ root: '../web/build' }));

app.get('*', (c) => {
  // Prevent API requests from falling back to HTML if a route is misspelled
  if (c.req.path.startsWith('/api')) {
    return c.json({ success: false, message: 'API endpoint not found' }, 404);
  }

  try {
    // Read and serve the index.html file across Node, Bun, and Deno
    const html = fs.readFileSync('../web/build/index.html', 'utf-8');
    return c.html(html);
  } catch {
    return c.text('build/index.html missing. Run your frontend build first.', 500);
  }
});

// 6. Global 404 Error Handler
app.notFound((c) => {
  return c.json({ success: false, message: 'Resource not found' }, 404);
});

serve({
  fetch: app.fetch,
  port
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);

  fs.writeFileSync('../web/port.json', `{"port":${info.port}}`)
});
