import { Hono } from 'hono';
import { serve } from '@hono/node-server';

// 1. Initialize the Hono application instance
const app = new Hono();

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

// 5. POST Route with JSON Body Parsing
app.post('/api/users', async (c) => {
  // Parses application/json request bodies seamlessly
  const body = await c.req.json();
  
  if (!body.name) {
    return c.json({ success: false, error: 'Name is required' }, 400);
  }

  return c.json({
    success: true,
    message: 'User created successfully',
    receivedData: body
  }, 201);
});

// 6. Global 404 Error Handler
app.notFound((c) => {
  return c.json({ success: false, message: 'Resource not found' }, 404);
});

// 7. Start the native Node.js HTTP server
const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port: port
});
