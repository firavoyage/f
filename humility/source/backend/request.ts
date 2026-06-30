/**
 * you can request any standard js fn or supported web api (localhost or remote),
 * 
 * e.g as a param of openai_compatible
 * 
 * (normalize if needed, like openai change, claude code special tokens)
 * 
 * 
 */

import { does_exist, read, config } from 'lib/file';
import { parse } from 'yaml';

type request_params = { message: string }

async function mock({ message }: any) {
  // one param, no need to have obj params. no future proof.

  return `Respond to ${message.toLocaleLowerCase()}`
}

export async function openai_compatible({ message, model, url, key }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "user", content: message }
      ]
    })
  });

  // consider parse the response wrapper and convert to errors and discard
  return response.json()
}

/**
 * request models
 */
export async function request({ message, model, provider }: any) {
  // must exist. you should point to a mock file even if you wanna mock.
  const config_content = parse(await read(config('config.yaml')))
  // const config_content = await does_exist(config('config.yaml')) ? await read(config('config.yaml')) : {}
  const { url, key } = config_content[provider]

  await log_info('request started', { message, model, provider })

  const start_at = Date.now()

  const response = await handle(() => openai_compatible({ message, model, url, key }))

  const finish_at = Date.now()

  if(is_error(response)){
    await log_error('request failed', { response, start_at, finish_at })
    
    throw response
  }

  await log_info('request finished', { response, start_at, finish_at })

  return { response, start_at, finish_at }
}


