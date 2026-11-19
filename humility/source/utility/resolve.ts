import { deserialize, serialize, env_file } from 'action/index'
import { read } from 'lib/file'

type key = raw | env

type raw = string
type env = {
  env: string
}

export async function resolve_env(key: key) {
  if (is(key, 'literal')) {
    return key
  } else {
    let env_var = key.env

    let current_env = deserialize(read(env_file))

    let raw = current_env[env_var]

    if (is(raw, 'absent')) {
      throw err(`env ${env_var} should exist`)
    }

    return raw
  }
}

type provider_model = colon_separated_provider_model | object_provider_model

type colon_separated_provider_model = string
type object_provider_model = {
  provider: string
  model: string
}

export async function resolve_provider_model(provider_model: provider_model): object_provider_model {
  if (is(provider_model, 'string')) {
    const [provider, model] = provider_model.split(':')

    return {
      provider,
      model,
    }
  } else {
    const { provider, model } = provider_model

    return { provider, model }
  }
}
