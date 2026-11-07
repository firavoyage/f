import { parseArgs } from 'node:util'
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { serveStatic } from '@hono/node-server/serve-static';
import { read, cwd, expand_path, does_exist, is_dir, parent } from 'lib/file'
import { format_log } from 'lib/log'

const { stringify: serialize } = JSON

let {
  values: { port },
} = parseArgs({
  options: { port: { type: 'string', short: 'p', default: '8192' } },
  strict: false,
})
port = int(port)

const app = new Hono();

app.use('*', cors());

// log requests
app.use('*', async (c, next) => {
  await next()
  log(format_log(`${c.req.method} ${c.req.path}`, 'info'))
})

serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    log(`Serve on http://localhost:${info.port}`)
  },
)