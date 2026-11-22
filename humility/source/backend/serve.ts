import { Hono } from 'hono'
import { serve, upgradeWebSocket } from '@hono/node-server'
import { WebSocketServer } from 'ws'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import { append, read, write } from 'lib/file'
import { format_log } from 'lib/log'
import { parse_options } from 'lib/cli'
import { list as action_list, hide } from 'action/index'
import {
  deserialize,
  get_message_log_file,
  get_thread_file,
  get_thread_log_file,
  serialize,
  server_log_file,
  thread_index_file,
} from 'action/index'
import { monotonic, now } from 'lib/time'
import { random_id } from 'lib/random'
import {
  append_message,
  build_plain_context,
  empty_thread_structure,
} from 'utility/thread'
import { generate } from 'utility/generate'
import { resolve_endpoint_model_key } from 'utility/resolve'
import { parse_tool_calls, tool_registry } from './tools'
import type { tool_call as tool_call_structure } from 'utility/tools'

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

app.use('*', async (c, next) => {
  await next()
  log(format_log(`${c.req.method} ${c.req.path}`, 'info'))
})

app.use('*', serveStatic({ root: '../web/build' }))

let subscribers: Record<id, Set<WebSocket>> = {}
let ongoing_messages: Record<id, Set<id>> = {}

let actions: Record<action, fn> = {
  list: action_list,
  hide,
  subscribe({ thread, client }) {
    if (is(subscribers[thread], 'absent')) {
      subscribers[thread] = set(client)
    } else {
      subscribers[thread].add(client)
    }

    const thread_structure = read_thread_structure(thread)
    broadcast(
      'set_thread_structure',
      {
        thread,
        thread_structure,
        is_active: is_thread_active(thread),
      },
      client,
    )
  },
  unsubscribe({ thread, client }) {
    subscribers[thread]?.delete?.(client)
  },
  init({ thread, title = '', folder = '' }) {
    const thread_structure = empty_thread_structure()
    write(get_thread_file(thread), serialize(thread_structure))

    mutate(thread_index_file, (thread_index: thread_index) => {
      thread_index[thread] = {
        title,
        folder,
        creation_time: now().timestamp,
      }
    })

    broadcast('set_thread_structure', {
      thread,
      thread_structure,
      is_active: is_thread_active(thread),
    })
  },
  send({ thread, prompt }) {
    const message = random_id()
    const message_structure: Partial<message_structure> = {
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
    broadcast('set_tree', { thread, tree })
  },
  generate({ thread }) {
    const thread_structure = read_thread_structure(thread)
    const pending_tools = thread_structure.roots[0]?.pending_tools ?? {}

    if (is_thread_active(thread) || Object.keys(pending_tools).length > 0) {
      return { started: false, is_active: is_thread_active(thread) }
    }

    void generate_thread(thread)
    return { started: true }
  },
  call_tool({ thread, tool_id }) {
    if (is_thread_active(thread)) {
      return { started: false, is_active: true }
    }

    let tool_call: tool_call_structure | undefined
    let pending_tools: Record<id, tool_call_structure> = {}

    mutate(get_thread_file(thread), (thread_structure: thread_structure) => {
      const root_config = thread_structure.roots[0]
      if (!root_config?.pending_tools?.[tool_id]) return

      tool_call = root_config.pending_tools[tool_id]
      delete root_config.pending_tools[tool_id]
      pending_tools = root_config.pending_tools
    })

    if (!tool_call) {
      return { started: false, is_active: is_thread_active(thread) }
    }

    void run_tool(thread, tool_call)
    broadcast('set_pending_tools', { thread, pending_tools })
    return { started: true }
  },
}

let non_mutative_actions: action[] = ['subscribe', 'unsubscribe']

function read_thread_structure(thread: id): thread_structure {
  return handle(
    () => deserialize(read(get_thread_file(thread))),
    empty_thread_structure(),
  )
}

function is_thread_active(thread: id) {
  return (ongoing_messages[thread]?.size ?? 0) > 0
}

function begin_message(thread: id, message: id) {
  const was_active = is_thread_active(thread)
  ongoing_messages[thread] ??= set()
  ongoing_messages[thread].add(message)

  if (!was_active) {
    broadcast('set_active', { thread, is_active: true })
  }
}

function end_message(thread: id, message: id) {
  ongoing_messages[thread]?.delete(message)

  if (!is_thread_active(thread)) {
    delete ongoing_messages[thread]
    broadcast('set_active', { thread, is_active: false })
  }
}

async function generate_thread(thread: id) {
  const message = random_id()
  const start_time = now().timestamp
  const message_structure: Partial<message_structure> = {
    role: 'assistant',
    content: '',
    reasoning: '',
    start_time,
  }

  let context: plain_message_structure[] = []
  let provider_model: string | { provider: string; model: string } | undefined
  let tree

  mutate(get_thread_file(thread), (thread_structure: thread_structure) => {
    context = build_plain_context(thread_structure)
    provider_model = thread_structure.roots[0]?.model
    append_message(thread_structure, message, message_structure)
    ;({ tree } = thread_structure)
  })

  begin_message(thread, message)
  broadcast('set_message', { thread, message, message_structure })
  broadcast('set_tree', { thread, tree })

  let has_finished = false

  function append_delta(delta: delta) {
    broadcast('append_message', { thread, message, delta })
  }

  function finish(message_structure: message_structure) {
    if (has_finished) return
    has_finished = true

    const calls = message_structure.has_failed
      ? []
      : parse_tool_calls(message_structure.content ?? '')
    let pending_tools: Record<id, tool_call_structure> = {}

    mutate(get_thread_file(thread), (thread_structure: thread_structure) => {
      thread_structure.messages[message] = message_structure
      const root_config = thread_structure.roots[0]
      root_config.pending_tools ??= {}

      for (const call of calls) {
        root_config.pending_tools[random_id()] = call
      }

      pending_tools = root_config.pending_tools
    })

    broadcast('finish_message', { thread, message, message_structure })

    if (calls.length > 0) {
      broadcast('set_pending_tools', { thread, pending_tools })
    }

    append_json_log(get_thread_log_file(thread), 'finish_message', {
      message,
      ...message_structure,
    })
    end_message(thread, message)
  }

  try {
    const { endpoint, model, key } =
      await resolve_endpoint_model_key(provider_model)

    append_json_log(get_message_log_file(message), 'request', {
      context,
      endpoint,
      model,
    })

    const stream_text = await generate(
      { context, endpoint, model, key },
      append_delta,
      finish,
      (data) => append_json_log(get_message_log_file(message), 'data', data),
    )

    append_json_log(get_message_log_file(message), 'done', stream_text)
  } catch (error) {
    finish({
      role: 'assistant',
      content: `\n\nGeneration failed: ${error instanceof Error ? error.message : String(error)}`,
      start_time,
      end_time: now().timestamp,
      has_failed: true,
    })
  }
}

async function run_tool(thread: id, call: tool_call_structure) {
  const message = random_id()
  const start_time = now().timestamp
  const message_structure: Partial<message_structure> = {
    role: 'tool',
    content: '',
    start_time,
  }

  let tree
  mutate(get_thread_file(thread), (thread_structure: thread_structure) => {
    append_message(thread_structure, message, message_structure)
    ;({ tree } = thread_structure)
  })

  begin_message(thread, message)
  broadcast('set_message', { thread, message, message_structure })
  broadcast('set_tree', { thread, tree })

  let content = ''
  let has_finished = false

  function append_delta(delta: delta) {
    const addition = delta.content ?? ''
    content += addition
    broadcast('append_message', { thread, message, delta })
  }

  function finish(has_failed = false) {
    if (has_finished) return
    has_finished = true

    const finished_message: message_structure = {
      role: 'tool',
      content,
      start_time,
      end_time: now().timestamp,
      has_failed,
    }

    mutate(get_thread_file(thread), (thread_structure: thread_structure) => {
      thread_structure.messages[message] = finished_message
    })

    broadcast('finish_message', {
      thread,
      message,
      message_structure: finished_message,
    })
    append_json_log(get_thread_log_file(thread), 'finish_message', {
      message,
      ...finished_message,
    })
    end_message(thread, message)
  }

  try {
    const definition = tool_registry[call.tool]
    if (!definition) throw new Error(`Unknown tool: ${call.tool}`)

    const result = await definition.run(call.args, append_delta)
    if (!content && result) append_delta({ content: result })
    finish()
  } catch (error) {
    append_delta({
      content: `\nTool failed: ${error instanceof Error ? error.message : String(error)}`,
    })
    finish(true)
  }
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
  append_server_log('respond', payload)

  client.send(
    stringify({
      type: 'response',
      request,
      payload,
    }),
  )
}

function mutate(file, fn) {
  const file_structure = deserialize(read(file))
  let new_file_structure = fn(file_structure)

  if (is(new_file_structure, 'absent')) {
    new_file_structure = file_structure
  }

  write(file, serialize(new_file_structure))
}

app.get(
  '/api/ws',
  upgradeWebSocket(() => ({
    onOpen(_event, ws) {
      log('Client connected')
      append_server_log('Client connected')
    },

    async onMessage(event, ws) {
      const { request, action, payload }: request = parse(event.data)

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
    | 'call_tool'
    | 'list'
    | 'hide'

  type event =
    | 'set_thread_structure'
    | 'set_tree'
    | 'set_message'
    | 'set_pending_tools'
    | 'set_active'
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

function append_json_log(file, type, payload) {
  append(
    file,
    `${stringify({
      type,
      time: monotonic(),
      payload,
    })}\n`,
  )
}

function append_server_log(message, payload?) {
  if (is(payload, 'present')) {
    append(server_log_file, `${format_log(message)}${serialize(payload)}`)
  } else {
    append(server_log_file, format_log(message))
  }
}
