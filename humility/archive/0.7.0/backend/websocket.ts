import { get_thread_log_file } from 'action/index'
import { append_json_log, append_server_log } from './log'
import { actions, non_mutative_actions } from './actions'
import { respond } from './connections'
import type { request } from './protocol'

const { parse } = JSON

export function create_websocket_handlers() {
  return {
    onOpen() {
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
  }
}
