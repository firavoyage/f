export type action =
  | 'subscribe'
  | 'unsubscribe'
  | 'init'
  | 'send'
  | 'generate'
  | 'call_tool'
  | 'list'
  | 'hide'

export type event =
  | 'set_thread_structure'
  | 'set_tree'
  | 'set_message'
  | 'set_pending_tools'
  | 'set_active'
  | 'append_message'
  | 'finish_message'

export type request = {
  type: 'request'
  request: id
  action: action
  payload: any
}

export type response = {
  type: 'response'
  request: id
  payload: any
}

export type broadcast = {
  type: 'broadcast'
  event: event
  payload: any
}
