import { Hono } from 'hono'
import { serve, upgradeWebSocket } from '@hono/node-server'
import { WebSocketServer } from 'ws'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import { mkpath, read } from 'lib/file'
import { format_log } from 'lib/log'
import { parse_options } from 'lib/cli'
import { get_thread_log_file } from 'action/index'
import { append_json_log, append_server_log } from 'backend/log'
import { actions, non_mutative_actions } from 'backend/actions'
import { respond } from 'backend/connections'

const { parse } = JSON

type request = {
  type: 'request'
  request: id
  action: action
  payload: any
}

type response = {
  type: 'response'
  request: id
  payload: any
}

type broadcast = {
  type: 'broadcast'
  event: event
  payload: any
}

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
  upgradeWebSocket(() => ({
    onOpen() {
      log('Client connected')
      append_server_log('Client connected')
    },

    async onMessage(e, ws) {
      const { request, action, payload }: request = parse(e.data)

      log(action, payload)
      append_server_log(action, payload)

      if (has(payload, 'thread') && !has(non_mutative_actions, action)) {
        append_json_log(get_thread_log_file(payload.thread), action, payload)
      }

      if (action == 'subscribe' || action == 'unsubscribe') {
        payload.client = ws
      }

      respond(request, await actions[action](payload), ws)
    },

    onClose() {
      log('Client disconnected')
      append_server_log('Client disconnected')
    },
  })),
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
