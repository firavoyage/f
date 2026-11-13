import {
  serialize,
  deserialize,
  config_file,
  get_thread_file,
  get_log_file,
  env_file,
} from 'action/index'
import { chat } from 'lib/generation'
import { read, write } from 'lib/file'
import { random_id } from 'lib/random'

const env_prefix = 'env:'

type send = {
  content: string
  thread: string
  model?: string
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'max'
  [param: string]: any
}

export async function send(options: send) {
  const current_config = deserialize(read(config_file))
  const current_env = deserialize(read(env_file))

  // providers must not be empty
  const {
    providers,
    default_model,
    default_provider = entries(providers)[0][0],
  } = current_config

  let { content, thread, model = default_model, ...params } = options

  let provider = default_provider

  // provider name or model id must not include colon
  if (has(model, ':')) {
    ;[provider, model] = model.split(':')
  }

  // must exist
  let { key = `${env_prefix}${provider}`, endpoint } = providers[provider]

  if (key.startsWith(env_prefix)) {
    const env_var = key.slice(env_prefix.length)

    // must exist (otherwise just return an auth failure from endpoint)
    key = current_env[env_var]
  }

  const thread_file = get_thread_file(thread)

  const history = deserialize(read(thread_file))

  const messages = [...history, user_message(content)]

  write(thread_file, serialize(messages))

  const request = {
    messages,
    model,
    endpoint,
    ...params,
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
