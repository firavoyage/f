import { Hono } from 'hono'
import { serve, upgradeWebSocket } from '@hono/node-server'
import { WebSocketServer } from 'ws'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import { read, write } from 'lib/file'
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
import { generate } from 'action/generate'

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

    broadcast(thread, 'set_tree', tree)
    broadcast(thread, 'set_message', message)
  },
  generate({ thread }) {
    let reply_id = random_id()

    const thread_structure = deserialize(read(get_thread_file(thread)))

    let context = construct_context(thread_structure)

    let { tree, messages } = thread_structure
    tree = append_node(tree, reply_id)

    write(get_thread_file(thread), serialize({ tree, messages }))

    broadcast('set_message', {
      thread,
      payload: {
        id: reply_id,
        role: 'assistant',
        content: '',
        reasoning: '',
        start_time: now().timestamp,
      },
    })

    generate_mock(
      {
        context,
        id: reply_id,
      },
      (payload) => {
        broadcast('append', {
          thread,
          payload,
        })
      },
    )
  },
}

function broadcast(thread, action, payload) {
  map(subscribers[thread] ?? [], (send) => {
    send(
      stringify({
        type: 'broadcast',
        thread,
        action,
        payload,
      }),
    )
  })
}

app.get(
  '/api/ws',
  upgradeWebSocket(() => ({
    onOpen(_event, ws) {
      console.log('Client connected')
    },

    onMessage(event, ws) {
      const request: {
        type: 'request'
        id: string
        action: string
        payload: any
      } = parse(event.data)

      const { id, action, payload } = request

      log(action, payload)

      if (action == 'subscribe') {
        let thread = payload
        let send = ws.send

        if (has(subscribers, thread)) {
          subscribers[thread].add(send)
        } else {
          subscribers[thread] = set([send])
        }

        const thread_content = handle(() => read(get_thread_file(thread)))

        if (!is_error(thread_content)) {
          const { tree, messages } = deserialize(thread_content)

          send(
            stringify({
              type: 'broadcast',
              thread,
              action: 'set_tree',
              payload: tree,
            }),
          )

          send(
            stringify({
              type: 'broadcast',
              thread,
              action: 'set_messages',
              payload: messages,
            }),
          )
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

function construct_context(thread_structure) {
  const { tree, messages } = thread_structure

  let context = []

  let message_id = 0
  while (true) {
    const { children = [], focus = children[0] } = tree[message_id]

    if (focus) {
      message_id = focus

      context.push(messages[message_id])
    } else {
      break
    }
  }

  return context
}

async function generate_mock({ context, id = random_id() }, receive: fn) {
  for (const i of each(5)) {
    receive({
      id,
      content: `reply for ${context.length}, ${now().format()} ${random()}`,
      reasoning: '',
    })
    await sleep(1000)
  }
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
