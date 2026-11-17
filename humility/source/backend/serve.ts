import { Hono } from 'hono'
import { serve, upgradeWebSocket } from '@hono/node-server'
import { WebSocketServer } from 'ws'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import { read } from 'lib/file'
import { format_log } from 'lib/log'
import { parse_options } from 'lib/cli'
import * as action_index from 'action/index'
import { serialize } from 'action/index'

const { parse, stringify } = JSON

const { port } = parse_options({
  port: {
    type: 'number',
    short: 'p',
    default: 8192,
  },
})

const app = new Hono()

app.use('*', cors())

// log requests
app.use('*', async (c, next) => {
  await next()
  log(format_log(`${c.req.method} ${c.req.path}`, 'info'))
})

app.use('*', serveStatic({ root: '../web/build' }))

let subscribers = {}

let actions = {
  ...action_index,
}

function broadcast(thread, action, payload) {
  map(subscribers[thread] ?? [], (send) => {
    send({
      type: 'broadcast',
      action,
      payload,
    })
  })
}

app.get(
  '/api/ws',
  upgradeWebSocket(() => ({
    onOpen(_event, ws) {
      console.log('Client connected')

      ws.send(
        stringify({
          type: 'connected',
          message: 'Welcome!',
        }),
      )
    },

    onMessage(event, ws) {
      const request: {
        type: 'request'
        id: string
        action: string
        payload: any
      } = parse(event.data)

      const { id, action, payload } = request

      // log(request)

      if (action == 'subscribe') {
        let thread = payload
        let send = ws.send

        if (has(subscribers, thread)) {
          subscribers[thread].add(send)
        } else {
          subscribers[thread] = set([send])
        }
      }

      if (action == 'unsubscribe') {
        let thread = payload
        let send = ws.send

        subscribers?.[thread]?.delete(send)
      }

      ws.send(
        stringify({
          type: 'response',
          id,
          action,
          payload: actions?.[action]?.(payload),
        }),
      )
    },

    onClose() {
      console.log('Client disconnected')
    },

    onError(event) {
      console.error('WebSocket error:', event)
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

// app.post('/api/:action{.+}', async (c) => {
//   const action = c.req.param('action')
//   const payload = await c.req.json()

//   const result = await actions[action](payload)

//   return c.json(result ?? {})
// })

const ws = new WebSocketServer({ noServer: true })

serve(
  {
    fetch: app.fetch,
    port,
    websocket: { server: ws },
  },
  (info) => {
    log(`Serve on http://localhost:${info.port}`)
  },
)
