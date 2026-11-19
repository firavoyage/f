import { deserialize, serialize, env_file, config_file } from 'action/index'
import { read } from 'lib/file'

type key = raw | env

type raw = string
type env = {
  env: string
}

export async function resolve_env(key: key): Promise<raw> {
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

export async function resolve_provider_model(
  provider_model: provider_model,
): Promise<object_provider_model> {
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

type config = {
  providers: Record<provider, provider_options>
  default_model: provider_model
}

type provider = string
type provider_options = {
  key?: key
  endpoint: string
}

export async function resolve_endpoint_model_key(
  provider_model?: provider_model,
) {
  let config: config = deserialize(read(config_file))

  if (is(provider_model, 'absent')) {
    provider_model = await resolve_provider_model(config.default_model)
  }

  const { provider, model } = provider_model

  let endpoint = config.providers[provider].endpoint

  let key = await resolve_env(
    config.providers[provider].key ?? {
      env: provider,
    },
  )

  return {
    endpoint,
    model,
    key,
  }
}
