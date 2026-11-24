import { append } from 'lib/file'
import { format_log } from 'lib/log'
import { serialize, server_log_file } from 'action/index'
import { monotonic } from 'lib/time'

const { stringify } = JSON

export function append_json_log(file, type, payload) {
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
