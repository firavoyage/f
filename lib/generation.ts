import { now } from 'lib/time'
import { random_id } from 'lib/random'
import { parse as deserialize, stringify as serialize } from 'yaml'

type role = 'system' | 'user' | 'assistant'
// type role = 'system' | 'user' | 'assistant' | 'tool'

type message = {
  has_failed?: boolean
  id: string
  role: role
  content: string
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
  perf?: {
    tokens_per_second: number
    time_to_first_token: number
  }
  start_time: number
  end_time: number
  model?: string
  payload?
}

type plain_message = {
  role: role
  content: string
}

type chat = {
  messages: plain_message & Partial<message>[]
  model: string
  endpoint: string
  key?: string
}

export async function chat(options: chat): Promise<message> {
  let { messages, model, endpoint, key } = options

  messages = map(messages, (message, index) => {
    const { has_failed, role, content } = message

    if (has_failed || (role == 'user' && messages?.[index + 1]?.has_failed)) {
      return
    }

    return { role, content }
  })

  let id = random_id()

  let start_time = now().timestamp

  const response = await handle(() =>
    fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
      }),
    }),
  )

  let end_time = now().timestamp

  if (is_error(response)) {
    return {
      has_failed: true,
      id,
      role: 'assistant',
      content:
        '```chat error\n' +
        serialize({
          type: 'network',
          message: response.message,
          payload: response,
        }) +
        '```\n',
      start_time,
      end_time,
    }
  }

  if (!response.ok) {
    return {
      has_failed: true,
      id,
      role: 'assistant',
      content:
        '```chat error\n' +
        serialize({
          type: 'endpoint',
          message: `${response.status} ${response.statusText}`,
          payload: await handle(() => response.json()),
        }) +
        '```\n',
      start_time,
      end_time,
    }
  }

  let payload = await handle(() => response.json())

  if (is_error(payload)) {
    return {
      has_failed: true,
      id,
      role: 'assistant',
      content:
        '```chat error\n' +
        serialize({
          type: 'endpoint',
          message: `endpoint should return parsable json`,
          payload: response,
        }) +
        '```\n',
      start_time,
      end_time,
    }
  }

  const { role, content } = payload.choices[0].message

  const { prompt_tokens, completion_tokens, total_tokens } = payload.usage
  const usage = {
    prompt_tokens,
    completion_tokens,
    total_tokens,
  }
  // const { usage } = payload

  const perf = {
    tokens_per_second: usage.completion_tokens / (end_time - start_time),
    time_to_first_token: usage.completion_tokens / (end_time - start_time),
  }

  return {
    id,
    role,
    content,
    usage,
    perf,
    start_time,
    end_time,
    model,
    payload,
  }
}
