import { random, random_id } from 'lib/random'

const { stringify, parse } = JSON

const default_retry_delay = 1000
const default_max_jitter = 1000
const default_action_timeout = 1000

let socket: WebSocket
let pending_actions: Set<fn> = set()
let pending_requests: Record<id, fn> = {}

let __broadcasts: Record<string, fn>

export function connect(
  broadcasts: Record<string, fn>,
  { endpoint = 'ws://localhost:8192/api/ws',
    retry_delay = default_retry_delay,
    max_jitter = default_max_jitter
   } = {},
) {
  socket = new WebSocket(endpoint)

  socket.onopen = () => {
    // log('Connected!')
    map(pending_actions, call)
    pending_actions = set()
  }

  __broadcasts = broadcasts

  socket.onmessage = receive

  socket.onclose = () => {
    // log('Disconnected')

    const delay = retry_delay + random() * max_jitter

    set_timeout(function () {
      // log('Reconnecting...')
      connect(broadcasts, endpoint)
    }, delay)
  }
}

export function perform(
  action: action,
  payload?: object,
  timeout = default_action_timeout,
  request = random_id(),
): Promise<any> {
  return new Promise((resolve, reject) => {
    pending_requests[request] = resolve

    if (!(socket?.readyState == WebSocket.OPEN)) {
      pending_actions.add(() => send(action, payload, request))
    } else {
      send(action, payload, request)
    }

    set_timeout(() => {
      delete pending_requests[request]
      reject(
        err(`response for action ${action} should arrive within ${timeout}ms`),
      )
    }, timeout)
  })
}

function receive(e: MessageEvent) {
  const data = JSON.parse(e.data)

  const { type, payload } = data

  if (type == 'response') {
    log('receive', type, payload)

    const { request } = data

    pending_requests[request]?.(payload)
    delete pending_requests[request]

    return
  }

  if (type == 'broadcast') {
    const { event } = data

    log('receive', type, event, payload)

    if (!has(__broadcasts, event)) {
      warn(`handler for broadcast ${event} should exist`)
      return 
    }

    __broadcasts[event](payload)
  }
}

function send(action: action, payload: any, request: id) {
  const request_payload = {
    type: 'request',
    request,
    action,
    payload,
  }

  log('perform', action, payload)
  socket.send(stringify(request_payload))
}
