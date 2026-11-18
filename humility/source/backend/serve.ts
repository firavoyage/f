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
    subscribers[thread].delete(client)
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
  generate({ thread, options }) {
    let message = random_id()

    let message_structure: Partial<message_structure> = {
      role: 'assistant',
      content: '',
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

    generate_mock(
      {
        context,
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

    onMessage(event, ws) {
      const { request, action, payload: _payload }: request = parse(event.data)

      let payload = { ..._payload }

      log(action, payload)

      if (action == 'subscribe' || action == 'unsubscribe') {
        payload.client = ws
      }

      respond(request, actions[action](payload), ws)
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

async function generate(
  { context, endpoint, model, key },
  append: append,
  finish: finish,
) {
  let start_time = now().timestamp,
    end_time
  let content = ''

  const response = await handle(() =>
    fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: context,
        stream: true,
      }),
    }),
  )
  if (is_error(response)) {
    finish(fail('network', response.message))
    return
  }

  if (!response.ok) {
    finish(
      fail(
        'endpoint',
        `${response.status} ${response.statusText}`,
        await handle(() => response.json()),
      ),
    )
    return
  }

  if (!response.body) {
    finish(
      fail(
        'endpoint',
        `endpoint should send response stream`,
        await handle(() => response.json()),
      ),
    )
    return
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()

  let buffer = ''

  while (true) {
    const { value, done } = await reader.read()

    if (done) break

    buffer += decoder.decode(value, { stream: true })

    const lines = buffer.split('\n')
    buffer = lines.pop() || ''

    for (const line of lines) {
      const trimmed = line.trim()

      // Ignore SSE comments and empty lines
      if (!trimmed || trimmed.startsWith(':')) continue

      if (!trimmed.startsWith('data:')) continue

      const data = trimmed.slice(5).trim()

      if (data == '[DONE]') {
        finish?.(content)
        return content
      }

      const parsed = JSON.parse(data)

      const new_content = parsed.choices?.[0]?.delta?.content

      if (new_content) {
        content += new_content

        let delta = {
          content: new_content,
        }

        append(delta)
      }
    }
  }

  // Flush any remaining decoder data
  buffer += decoder.decode()

  finish(content)

  function fail(
    type: 'network' | 'endpoint',
    message: string,
    payload = response,
  ) {
    end_time = now().timestamp

    return {
      has_failed: true,
      role: 'assistant' as const,
      content:
        content +
        '\n```chat_error\n' +
        serialize({
          type,
          message,
          payload,
        }) +
        '```\n',
      start_time,
      end_time,
      model,
    }
  }

  function complete() {
    end_time = now().timestamp

    return {
      role: 'assistant' as const,
      content,
      start_time,
      end_time,
      model,
    }
  }
}

async function generate_mock({ context }, append: append, finish: finish) {
  let content = ''

  for (const i of each(5)) {
    let delta = `reply for ${
      context.length
    } messages, ${now().format()} ${i} ${random()}\n`

    content += delta

    append({
      content: delta,
      reasoning: '',
    })
    await sleep(1)
  }

  finish({
    content,
    reasoning: '',
  })
}

type append = (delta: delta) => any
type finish = (message_structure: message_structure) => any

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
}
