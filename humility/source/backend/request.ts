/**
 * you can request any standard js fn or supported web api (localhost or remote),
 * 
 * e.g as a param of openai_compatible
 * 
 * (normalize if needed, like openai change, claude code special tokens)
 * 
 * 
 */

import { read, config } from 'lib/file';
import { fail } from 'node:assert';
import { stringify } from 'yaml';

/**
 * todo: specify
 */
type request_params = { context: any[], model: string, provider: string }

export async function openai_compatible({ context, model, url, key }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: context
    })
  });

  // consider parse the response wrapper and convert to errors and discard
  return response.json()
}

export const failed_to_import = 'failed_to_import'

async function dynamic_import(module: string) {
  const { request } = await handle_best_effort(() => import(config(module))) ??
    await handle_best_effort(() => import(module)) ??
    await handle_best_effort(() => import(`file://${module}`)) ??
    (() => { throw err({ type: failed_to_import, message: `failed to import ${module}` }) })()

  return request
}

/**
 * request models
 */
export async function request({ context, model, provider }: request_params) {
  // must exist. you should point to a mock file even if you wanna mock.
  const config_content = await read(config('config.yaml'))
  // const config_content = await does_exist(config('config.yaml')) ? await read(config('config.yaml')) : {}

  log(config_content)
  const { url, key, is_module } = config_content[provider]

  await log_info('request started', { context, model, provider })

  const start_at = Date.now()

  const response = is_module ?
    await handle(async () => (await dynamic_import(url))({ context })) :
    await handle(() => openai_compatible({ context, model, url, key }))

  // await log_info('request started', { context, model, provider })

  // const start_at = Date.now()

  // const response = await handle(() => mock({ context }))

  const finish_at = Date.now()

  if (is_error(response)) {
    await log_error('request failed', { response, start_at, finish_at })

    throw response
  }

  await log_info('request finished', { response, start_at, finish_at })

  /**
   * todo: separate response content and metadata cleanly
   */
  return { response: response.choices[0].message.content, start_at, finish_at }
}


