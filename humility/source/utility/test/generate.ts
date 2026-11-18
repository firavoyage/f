import { deserialize, serialize, config_file, env_file } from 'action/index'
import { read } from 'lib/file'
import { generate } from 'utility/generate'

const config = deserialize(read(config_file))
const env = deserialize(read(env_file))

log(
  await generate(
    {
      context: [
        {
          role: 'user',
          content: 'hello world',
        },
      ],
      endpoint: config.providers.openrouter.endpoint,
      model: config.default_model,
      key: env.openrouter,
    },
    identity,
    log,
  ),
)
