import { serialize } from 'action/index'
import { monotonic, now } from 'lib/time'

const { parse, stringify } = JSON

export async function generate(
  { context, endpoint, model, key },
  append: append,
  finish: finish,
  stream?: fn,
) {
  let start_time = monotonic(),
    end_time
  let content = '',
    reasoning = ''
  let usage = {}
  let first_append_time: number

  const response = await handle(() =>
    fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: stringify({
        model,
        messages: context,
        stream: true,
        stream_options: {
          include_usage: true,
        },
      }),
    }),
  )
  if (is_error(response)) {
    throw err({
      type: 'network',
      message: response.message,
    })
  }

  if (!response.ok) {
    throw err({
      type: 'endpoint',
      message: `${response.status} ${response.statusText}`,
    })
  }

  if (!response.body) {
    finish(
      fail(
        'endpoint',
        `endpoint should send response stream`,
        await handle(() => response.json()),
      ),
    )
    return
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()

  let stream_text = ''
  let buffer = ''

  while (true) {
    const { value, done } = await reader.read()

    if (done) break

    let current_value = decoder.decode(value, { stream: true })
    buffer += current_value
    stream_text += current_value

    const lines = buffer.split('\n')
    buffer = lines.pop() || ''

    for (let line of lines) {
      line = line.trim()

      // Ignore SSE comments and empty lines
      if (!line || line.startsWith(':')) continue

      if (!line.startsWith('data:')) continue

      const payload_text = line.slice(5).trim()

      if (payload_text == '[DONE]') {
        finish(complete())
        return stream_text
      }

      const payload = parse(payload_text)

      stream?.(payload)

      const new_content = payload.choices?.[0]?.delta?.content ?? ''
      const new_reasoning = payload.choices?.[0]?.delta?.reasoning ?? ''

      if (new_content || new_reasoning) {
        if (is(first_append_time, 'absent')) {
          first_append_time = monotonic()
        }

        content += new_content
        reasoning += new_reasoning

        let delta = {
          content: new_content,
          reasoning: new_reasoning,
        }

        append(delta)
      }

      if (payload.usage) {
        const { prompt_tokens, completion_tokens, total_tokens } = payload.usage
        usage = {
          prompt_tokens,
          completion_tokens,
          total_tokens,
        }
      }
    }
  }

  // Flush any remaining decoder data
  buffer += decoder.decode()

  finish(complete())

  function complete() {
    end_time = monotonic()

    let duration = end_time - (first_append_time ?? start_time)

    let perf = {
      tokens_per_second: (usage?.total_tokens ?? 0) / duration,
      time_to_first_token: first_append_time - start_time,
    }

    return {
      role: 'assistant' as const,
      content,
      reasoning,
      start_time,
      end_time,
      usage,
      perf,
      model,
    }
  }

  return stream_text
}
