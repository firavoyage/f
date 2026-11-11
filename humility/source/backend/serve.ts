import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { serveStatic } from '@hono/node-server/serve-static';
import { read } from 'lib/file'
import { format_log } from 'lib/log'
import { parse_options } from 'lib/cli'
import * as actions from 'action/index'

const { stringify: serialize } = JSON

const { port } = parse_options({
  port: {
    type: 'number',
    short: 'p',
    default: 8192
  }
})

const app = new Hono();

app.use('*', cors());

// log requests
app.use('*', async (c, next) => {
  await next()
  log(format_log(`${c.req.method} ${c.req.path}`, 'info'))
})

app.use('*', serveStatic({ root: '../web/build' }))

app.get('*', (c) => {
  const html = handle(() => read('../web/build/index.html'))

  if (is_error(html)) {
    log('web/build/index.html should exist, run web build first')

    return c.text('')
  }

  return c.html(html)
})

app.post('/api/:action{.+}', async (c) => {
  const action = c.req.param('action') 
  const payload = await c.req.json()

  const result = await actions[action](payload)
  
  return c.json(result ?? {})
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
