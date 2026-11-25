import { append_thread_log, append_server_log } from 'backend/log'
import { actions, non_mutative_actions } from 'backend/actions'
import { random_id } from 'lib/random'

const { parse, stringify } = JSON

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

// client <-> client id
let client_ids = dict()
let clients = dict()

export const websocket = {
  onOpen(e, client) {
    let client_id = random_id()

    log(`Client ${client_id} connected`)
    append_server_log(`Client ${client_id} connected`)

    client_ids.set(client, client_id)
    clients.set(client_id, client)
  },

  async onMessage(e, client) {
    const { request, action, payload }: request = parse(e.data)

    log(action, payload)
    append_server_log(action, payload)

    if (has(payload, 'thread_id') && !has(non_mutative_actions, action)) {
      append_thread_log(payload.thread_id, action, payload)
    }

    if (action == 'subscribe' || action == 'unsubscribe') {
      payload.client = client
    } 

    if (!has(actions, action)) {
      warn(`action ${action} should be handled`)
      return
    }

    respond(request, await actions[action](payload), client)
  },

  onClose(e, client) {
    let client_id = client_ids.get(client)

    log(`Client ${client_id} connected`)
    append_server_log(`Client ${client_id} connected`)

    clients.delete(client)
    client_ids.delete(client)
  },
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

export function broadcast(event: event, payload: any, clients: WebSocket) {
  append_server_log(`broadcast ${event}`, payload)

  clients = array(clients)

  map(clients, (client) => {
    client.send(
      stringify({
        type: 'broadcast',
        event,
        payload,
      }),
    )
  })
}
