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

type action = 'subscribe' | 'unsubscribe' | 'init' | 'send' | 'generate'
// list hide
type event =
  | 'set_thread'
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

let subscribers: Record<id, Set<WebSocket>> = {}

let actions: Record<action, fn> = {
  ...action_index,
  subscribe() {},
  unsubscribe() {},
  init({ thread }) {
    let thread_structure = {
      tree: {
        0: {
          children: [],
        },
      },
      messages: {},
    }

    const threads = deserialize(read(thread_index_file))

    threads[thread] = {
      title: '',
      folder: '',
      creation_time: now().timestamp,
    }

    write(thread_index_file, serialize(threads))

    write(get_thread_file(thread), serialize(thread_structure))
  },
  send({ thread, prompt, options }) {
    // const thread_content = handle(() => read(get_thread_file(thread)))
    // if(is_error(thread_content)){
    //   return
    // }
    // const thread_structure = deserialize(thread_content)
    const thread_structure = deserialize(read(get_thread_file(thread)))

    let { tree, messages } = thread_structure

    const message_id = random_id()

    tree = append_node(tree, message_id)

    let message = {
      id: message_id,
      role: 'user',
      content: prompt,
      start_time: now().timestamp,
      end_time: now().timestamp,
    }

    messages[message_id] = message

    write(get_thread_file(thread), serialize({ tree, messages }))

    event(thread, 'set_tree', tree)
    event(thread, 'set_message', message)
  },
  generate({ thread }) {
    let reply_id = random_id()

    const thread_structure = deserialize(read(get_thread_file(thread)))

    let context = construct_context(thread_structure)

    let { tree, messages } = thread_structure
    tree = append_node(tree, reply_id)

    write(get_thread_file(thread), serialize({ tree, messages }))

    event('set_message', thread, {
      id: reply_id,
      role: 'assistant',
      content: '',
      reasoning: '',
      start_time: now().timestamp,
    })

    generate_mock(
      {
        context,
        id: reply_id,
      },
      (payload) => {
        if (payload.type == 'append') {
          event('append', thread, payload)
        } else {
          event('finish', thread, payload)
        }
      },
    )
  },
}

function broadcast(event: event, payload, client) {
  if (is(client, 'absent')) {
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

function respond(request, payload, client) {
  const ws = client

  ws.send(stringify({
    type: 'response',
    request,
    payload
  }))
}


app.get(
  '/api/ws',
  upgradeWebSocket(() => ({
    onOpen(_event, ws) {
      console.log('Client connected')
    },

    onMessage(event, ws) {
      const { request, action, payload }: request = parse(event.data)

      log(action, payload)

      send(
        stringify({
          type: 'response',
          request,
          payload: actions[action](payload),
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

async function generate_mock({ context }, receive: fn) {
  let content = ''

  for (const i of each(5)) {
    let delta = `reply for ${
      context.length
    }, ${now().format()} ${i} ${random()}\n`

    content += delta

    receive({
      type: 'append',
      content: delta,
      reasoning: '',
    })
    await sleep(1)
  }

  receive({
    type: 'finish',
    content,
    reasoning: '',
  })
}

function append_node(tree, message_id) {
  let last_message_id = 0
  while (true) {
    const { children = [], focus = children[0] } = tree[last_message_id]

    if (focus) {
      last_message_id = focus
    } else {
      break
    }
  }

  let last_node = tree[last_message_id]
  // if (is(last_node.children, 'absent')) {
  //   last_node.children = []
  // }
  last_node.children.push(message_id)
  last_node.focus = message_id

  tree[message_id] = {
    children: [],
  }

  return tree
}

