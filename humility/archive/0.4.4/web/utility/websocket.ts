import { random, random_id } from 'lib/random'

const { stringify, parse } = JSON

const retry_delay = 1000
const max_jitter = 1000
const action_timeout = 1000

type websocket_client = {
  connect: (on_message: (event: MessageEvent) => void) => void
  receive_response: (request: id, payload: any) => void
  perform: (
    action: action,
    payload?: object,
    timeout?: number,
    request?: id,
  ) => Promise<any>
}

export function create_websocket_client(): websocket_client {
  let socket: WebSocket
  let pending_actions: Set<fn> = set()
  let pending_requests: Record<id, fn> = {}

  function connect(on_message: (event: MessageEvent) => void) {
    socket = new WebSocket('ws://localhost:8192/api/ws')

    socket.onopen = () => {
      log('Connected!')
      map(pending_actions, call)
      pending_actions = set()
    }

    socket.onmessage = on_message

    socket.onclose = () => {
      log('Disconnected')

      const delay = retry_delay + random() * max_jitter

      set_timeout(function () {
        log('Reconnecting...')
        connect(on_message)
      }, delay)
    }
  }

  function perform(
    action: action,
    payload?: object,
    timeout = action_timeout,
    request = random_id(),
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      pending_requests[request] = resolve

      if (!(socket?.readyState == WebSocket.OPEN)) {
        pending_actions.add(() => send(action, payload, request))
      } else {
        send(action, payload, request)
      }

      set_timeout(function () {
        delete pending_requests[request]
        reject(
          err(`response for action ${action} should arrive within ${timeout}ms`),
        )
      }, timeout)
    })
  }

  function receive_response(request: id, payload: any) {
    pending_requests[request]?.(payload)
    delete pending_requests[request]
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

  return {
    connect,
    perform,
    receive_response,
  }
}
