import {
  serialize,
  deserialize,
  config_file,
  get_thread_file,
  get_log_file,
} from 'action/index'
import { chat } from 'lib/generation'
import { read, write } from 'lib/file'
import { random_id } from 'lib/random'

type send = {
  content: string
  thread: string
  model?: string
}

export async function send(options: send) {
  const current_config = deserialize(read(config_file))

  const { providers, default_model } = current_config
  // providers must not be empty
  const { default_provider = entries(providers)[0][0] } = current_config

  let { content, thread, model = default_model } = options

  let provider = default_provider

  // provider name or model id must not include colon
  if (has(model, ':')) {
    ;[provider, model] = model.split(':')
  }

  // must exist
  const { key, endpoint } = providers[provider]

  const thread_file = get_thread_file(thread)

  const history = deserialize(read(thread_file))

  const messages = [...history, user_message(content)]

  write(thread_file, serialize(messages))

  const request = {
    messages,
    model,
    endpoint,
  }

  const reply = await chat({
    ...request,
    key,
  })

  const { payload, ...reply_message } = reply

  const new_thread_content = [...messages, reply_message]

  const log_file = get_log_file(reply.id)

  write(log_file, serialize({ request, payload }))
  write(thread_file, serialize(new_thread_content))

  return reply_message
}

function user_message(content: string) {
  return {
    id: random_id(),
    role: 'user',
    content,
  }
}
