import { append_server_log } from './log'

const { stringify } = JSON

let subscribers: Record<id, Set<WebSocket>> = {}
let ongoing_messages: Record<id, Set<id>> = {}

export function subscribe(thread: id, client: WebSocket) {
  if (is(subscribers[thread], 'absent')) {
    subscribers[thread] = set(client)
  } else {
    subscribers[thread].add(client)
  }
}

export function unsubscribe(thread: id, client: WebSocket) {
  subscribers[thread]?.delete?.(client)
}

export function broadcast(event: event, payload: Extend<{ thread: id }>, client?) {
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

export function respond(request: id, payload: any, client: WebSocket) {
  append_server_log('respond', payload)

  client.send(
    stringify({
      type: 'response',
      request,
      payload,
    }),
  )
}

export function is_thread_active(thread: id) {
  return (ongoing_messages[thread]?.size ?? 0) > 0
}

export function begin_message(thread: id, message: id) {
  const was_active = is_thread_active(thread)
  ongoing_messages[thread] ??= set()
  ongoing_messages[thread].add(message)

  if (!was_active) {
    broadcast('set_active', { thread, is_active: true })
  }
}

export function end_message(thread: id, message: id) {
  ongoing_messages[thread]?.delete(message)

  if (!is_thread_active(thread)) {
    delete ongoing_messages[thread]
    broadcast('set_active', { thread, is_active: false })
  }
}
