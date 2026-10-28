import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { serveStatic } from '@hono/node-server/serve-static';
import { read, cwd, expand_path, does_exist, is_dir, parent, append } from 'lib/file'
import { format_log } from 'lib/log'
import { init_desktop, data, write } from 'lib/file'
const { stringify: serialize } = JSON

init_desktop('quote', false)

const port = 9005;
// const port = 0;

const app = new Hono();

app.use('*', cors());

// log requests
app.use('*', async (c, next) => {
  await next()
  log(format_log(`${c.req.method} ${c.req.path}`, 'info'))
})

app.post('/api/save_quote', async (c) => {
  const quotation = await c.req.json()

  log(quotation)

  append(data('quotes.jsonl'), `${serialize(quotation)}\n`)

  return c.json({})
})

// app.get('/)

serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    log(`Serve on http://localhost:${info.port}`)
  },
)