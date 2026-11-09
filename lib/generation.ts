import { now } from 'lib/time'

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
}

export function chat(messages: message[], endpoint, key?) {

}

function generate_id() {
  return crypto.randomUUID()
}

function generateUUID() {
  return ('[1x10^7]+-1e3+-4e3+-8e3+-1e11').replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
}

console.log(generateUUID());
