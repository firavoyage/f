import { Hono } from 'hono'
import { serve, upgradeWebSocket } from '@hono/node-server'
import { WebSocketServer } from 'ws'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import { mkpath, read } from 'lib/file'
import { format_log } from 'lib/log'
import { parse_options } from 'lib/cli'
import { create_websocket_handlers } from './websocket'

const { port } = parse_options({
  port: {
    type: 'number',
    short: 'p',
    default: 8192,
  },
})

// source/serve -> source/web/build
const build_dir = '../web/build'

const app = new Hono()

app.use('*', cors())

// log requests
app.use('*', async (c, next) => {
  await next()
  log(format_log(`${c.req.method} ${c.req.path}`, 'info'))
})

mkpath(build_dir)
app.use('*', serveStatic({ root: build_dir }))

app.get(
  '/api/ws',
  upgradeWebSocket(() => create_websocket_handlers()),
)

app.get('*', (c) => {
  const html = handle(() => read('../web/build/index.html'))

  if (is_error(html)) {
    log('web/build/index.html should exist, run web build first')
    return c.text('')
  }

  return c.html(html)
})

const ws = new WebSocketServer({ noServer: true })

serve(
  {
    fetch: app.fetch,
    port,
    websocket: { server: ws },
  },
  ({ port }) => {
    log(`Serve on http://localhost:${port}`)
  },
)
