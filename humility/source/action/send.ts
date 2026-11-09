import { serialize, deserialize, config_file, thread_folder } from 'action/index'
import { chat } from 'lib/generation'
import { read, join } from 'lib/file'

type send = {
  message: string
  thread: string
  model?: string
}

export async function send(options: send) {
  const current_config = deserialize(read(config_file))

  const { providers, default_model } = current_config
  // providers must not be empty
  const { default_provider = entries(providers)[0][0] } = current_config

  let { message, thread, model = default_model } = options

  let provider = default_provider

  // provider name or model id must not include colon
  if (has(model, ':')) {
    ;[provider, model] = model.split(':')
  }

  const { key, endpoint } = providers[provider]

  const history = deserialize(parse())

  return chat({
    
  })
}
