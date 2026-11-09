import { now } from 'lib/time'
import { random_id } from 'lib/random'

type message = {
  has_failed?: boolean
  id: string
  role: 'system' | 'user' | 'assistant'
  // role: 'system' | 'user' | 'assistant' | 'tool'
  content: string
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
  perf: {
    tokens_per_second: number
    time_to_first_token: number
  }
  start_time: number
  end_time: number
  payload?
}

type chat = {
  messages: message[]
  model: string
  endpoint: string
  key?: string
}

export async function chat(options: chat) {
  let { messages, model, endpoint, key } = options

  messages = map(messages, (message, index) => {
    const { has_failed, role, content } = message

    if (has_failed || (role == 'user' && messages?.[index + 1]?.has_failed)) {
      return
    }

    return { role, content }
  })

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
        messages: [
          { role: 'user', content: 'Write a short poem about coding.' },
        ],
      }),
    }),
  )

  let end_time = now().timestamp
}
