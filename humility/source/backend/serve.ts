import { Hono } from 'hono'
import { serve, upgradeWebSocket } from '@hono/node-server'
import { WebSocketServer } from 'ws'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import { children, read, write } from 'lib/file'
import { format_log } from 'lib/log'
import { parse_options } from 'lib/cli'
import * as action_index from 'action/index'
import {
  deserialize,
  get_thread_file,
  serialize,
  thread_index_file,
} from 'action/index'
import { now } from 'lib/time'
import { random, random_id } from 'lib/random'
import {
  append_message,
  build_plain_context,
  empty_thread_structure,
} from 'utility/thread'
import { generate, generate_mock } from 'utility/generate'
import { resolve_endpoint_model_key } from 'utility/resolve'

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

let subscribers: Record<id, Set<WebSocket>> = {}

let actions: Record<action, fn> = {
  ...action_index,
  subscribe({ thread, client }) {
    if (is(subscribers[thread], 'absent')) {
      subscribers[thread] = set(client)
    } else {
      subscribers[thread].add(client)
    }

    let thread_structure = handle(
      () => deserialize(read(get_thread_file(thread))),
      empty_thread_structure(),
    )

    // todo: ongoing messages
    broadcast('set_thread_structure', { thread, thread_structure })
  },
  unsubscribe({ thread, client }) {
    subscribers[thread]?.delete?.(client)
    // subscribers[thread].delete(client)
  },
  init({ thread, title = '', folder = '', options }) {
    let thread_structure = empty_thread_structure()
    write(get_thread_file(thread), serialize(thread_structure))

    mutate(thread_index_file, (thread_index: thread_index) => {
      thread_index[thread] = {
        title,
        folder,
        creation_time: now().timestamp,
      }
    })

    broadcast('set_thread_structure', { thread, thread_structure })
  },
  send({ thread, prompt, options }) {
    let message = random_id()

    let message_structure: Partial<message_structure> = {
      role: 'user',
      content: prompt,
    }

    let tree
    mutate(get_thread_file(thread), (thread_structure: thread_structure) => {
      append_message(thread_structure, message, message_structure)
      ;({ tree } = thread_structure)
    })

    broadcast('set_message', {
      thread,
      message,
      message_structure,
    })

    broadcast('set_tree', {
      thread,
      tree,
    })
  },
  async generate({ thread, options }) {
    let message = random_id()

    let message_structure: Partial<message_structure> = {
      role: 'assistant',
      content: '',
      reasoning: '',
      start_time: now().timestamp,
    }

    let context, tree

    mutate(get_thread_file(thread), (thread_structure: thread_structure) => {
      context = build_plain_context(thread_structure)

      append_message(thread_structure, message, message_structure)
      ;({ tree } = thread_structure)
    })

    broadcast('set_message', { thread, message, message_structure })

    broadcast('set_tree', {
      thread,
      tree,
    })

    generate(
      {
        context,
        ...(await resolve_endpoint_model_key())
      },
      append,
      finish,
    )

    function append(delta: delta) {
      broadcast('append_message', {
        thread,
        message,
        delta,
      })
    }

    function finish(message_structure: message_structure) {
      mutate(get_thread_file(thread), (thread_structure: thread_structure) => {
        thread_structure.messages[message] = message_structure
      })

      broadcast('finish_message', {
        thread,
        message,
        message_structure,
      })
    }
  },
}

function broadcast(
  event: event,
  payload: Extend<{
    thread: id
  }>,
  client?,
) {
  if (is(client, 'absent')) {
    if (is(payload.thread, 'absent')) {
      throw err(
        'it should either broadcast to subscribers of a thread or an explicit client',
      )
    }

    client = subscribers[payload.thread]
  }
  client = list(client)

  map(client, (ws) => {
    ws.send(
      stringify({
        type: 'broadcast',
        event,
        payload,
      }),
    )
  })
}

function respond(request: id, payload: any, client: WebSocket) {
  const ws = client

  ws.send(
    stringify({
      type: 'response',
      request,
      payload,
    }),
  )
}

function mutate(file, fn) {
  let file_structure = deserialize(read(file))

  let new_file_structure = fn(file_structure)
  if (is(new_file_structure, 'absent')) {
    // direct mutation
    new_file_structure = file_structure
  }

  write(file, serialize(new_file_structure))
}

app.get(
  '/api/ws',
  upgradeWebSocket(() => ({
    onOpen(_event, ws) {
      log('Client connected')
    },

    async onMessage(event, ws) {
      const { request, action, payload: _payload }: request = parse(event.data)

      let payload = { ..._payload }

      log(action, payload)

      if (action == 'subscribe' || action == 'unsubscribe') {
        payload.client = ws
      }

      respond(request, await actions[action](payload), ws)
    },

    onClose() {
      log('Client disconnected')
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
  (info) => {
    log(`Serve on http://localhost:${info.port}`)
  },
)

declare global {
  type action =
    | 'subscribe'
    | 'unsubscribe'
    | 'init'
    | 'send'
    | 'generate'
    | 'list'
    | 'hide'
  type event =
    | 'set_thread_structure'
    | 'set_tree'
    | 'set_message'
    | 'append_message'
    | 'finish_message'

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

  type append = (delta: delta) => any
  type finish = (message_structure: message_structure) => any
}
