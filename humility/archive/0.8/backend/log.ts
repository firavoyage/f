import { append } from 'lib/file'
import { format_log } from 'lib/log'
import { get_message_log_file, get_thread_log_file, serialize, server_log_file } from 'action/index'
import { monotonic } from 'lib/time'

const { stringify } = JSON

export function append_thread_log(thread_id: id, action: action, payload) {
  append_json_log(get_thread_log_file(thread_id), action, payload)
}

export function append_message_log(message_id: id, action: action, payload) {
  append_json_log(get_message_log_file(message_id), action, payload)
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

export function append_server_log(message, payload?) {
  if (is(payload, 'present')) {
    append(server_log_file, `${format_log(message)}${serialize(payload)}`)
  } else {
    append(server_log_file, format_log(message))
  }
}
