import { config_file, deserialize, env_file, serialize } from 'action/index'
import { read } from 'lib/file'

function base_url_model_key(provider = 'openrouter') {
  let config = deserialize(read(config_file))
  let env = deserialize(read(env_file))

  let { base_url, key = { env: provider } } = config.providers[provider]
  let model = config.default_model.model

  if (has(key, 'env')) {
    key = env[key.env]
  }

  return {
    base_url,
    key,
    provider,
    model,
  }
}

import { generate_stream_openai } from 'utility/generate'

generate_stream_openai(
  {
    messages: [
      {
        role: 'user',
        content: 'think hard about anything',
      },
    ],
    ...base_url_model_key(),
  },
  log,
  log,
  log,
)
// generate_stream_openai(
//   {
//     messages: [
//       {
//         role: 'user',
//         content: 'give me some random thoughts',
//       },
//     ],
//     ...base_url_model_key(),
//   },
//   log,
//   log,
// )
