import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { serveStatic } from '@hono/node-server/serve-static';
import fs from 'node:fs'

import { chat } from 'action/chat';
import { branch } from 'action/branch';
import { export_to } from 'action/export';
import { list } from 'action/list';
import { new_thread } from 'action/new_thread';

/**
 * get port from env.json on project root or flag
 * 
 * for 0, generate one.
 * 
 * set to backend/port.json
 */
// const port_given = 0;
const port = 3000;
/**
 * there is nothing wrong to write the json after starting the server
 * 
 * you have nothing to do when it's not running.
 * 
 * actually it's better to run ui after starting the server. 
 * 
 * (wait... in prod the it serves both web and api. actually i does not need to do anything.)
 */

// 1. Initialize the Hono application instance
const app = new Hono();

/**
 * todo: specify
 */
app.use('*', cors());

// 2. Custom Application-Level Middleware (Logger)
app.use('*', async (c, next) => {
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
  chat, branch, export: export_to, list, new_thread
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

// 7. Start the native Node.js HTTP server
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port
}, (info) => {
  fs.writeFileSync('../web/port.json', `{"port":${info.port}}`)
});
