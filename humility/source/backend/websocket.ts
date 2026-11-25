import { append_thread_log, append_server_log } from 'backend/log'

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

export const websocket = {
  onOpen() {
    log('Client connected')
    append_server_log('Client connected')
  },

  async onMessage(e, ws) {
    const { request, action, payload }: request = parse(e.data)

    log(action, payload)
    append_server_log(action, payload)

    if (has(payload, 'thread_id') && !has(non_mutative_actions, action)) {
      append_thread_log(payload.thread_id, action, payload)
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
}
