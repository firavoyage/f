import { deserialize, serialize, config_file, env_file } from 'action/index'
import { read } from 'lib/file'
import { generate } from 'utility/generate'
import { resolve_endpoint_model_key } from 'utility/resolve'

const config = deserialize(read(config_file))
const env = deserialize(read(env_file))

let result = await generate(
  {
    context: [
      {
        role: 'user',
        content: 'think about anything',
      },
    ],
    ...(await resolve_endpoint_model_key())
  },
  identity,
  log,
)

// let result = await generate(
//   {
//     context: [
//       {
//         role: 'user',
//         content: 'think about anything',
//       },
//     ],
//     endpoint: config.providers.openrouter.endpoint,
//     model: config.default_model.model,
//     key: env.openrouter,
//   },
//   identity,
//   log,
// )

// let result = await generate(
//   {
//     context: [
//       {
//         role: 'user',
//         content: 'hello world',
//       },
//     ],
//     endpoint: config.providers.openrouter.endpoint,
//     model: config.default_model.model,
//     key: env.openrouter,
//   },
//   identity,
//   log,
// )

// log(result)
