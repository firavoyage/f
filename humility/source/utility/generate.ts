import { serialize, deserialize, config_file, env_file } from 'action/index'
import { random } from 'lib/random'
import { monotonic, now } from 'lib/time'

export async function generate(
  { context, endpoint, model, key },
  append: append,
  finish: finish,
) {
  let start_time = monotonic(),
    end_time
  let content = ''
  let usage = {}
  let first_append_time: number

  const response = await handle(() =>
    fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
    finish(fail('network', response.message))
    return
  }

  if (!response.ok) {
    finish(
      fail(
        'endpoint',
        `${response.status} ${response.statusText}`,
        await handle(() => response.json()),
      ),
    )
    return
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

  let buffer = ''

  while (true) {
    const { value, done } = await reader.read()

    if (done) break

    buffer += decoder.decode(value, { stream: true })

    const lines = buffer.split('\n')
    buffer = lines.pop() || ''

    for (const line of lines) {
      const trimmed = line.trim()

      // Ignore SSE comments and empty lines
      if (!trimmed || trimmed.startsWith(':')) continue

      if (!trimmed.startsWith('data:')) continue

      const data = trimmed.slice(5).trim()

      if (data == '[DONE]') {
        finish(complete())
        return content
      }

      const parsed = JSON.parse(data)

      const new_content = parsed.choices?.[0]?.delta?.content

      if (new_content) {
        if (is(first_append_time, 'absent')) {
          first_append_time = monotonic()
        }

        content += new_content

        let delta = {
          content: new_content,
        }

        append(delta)
      }

      // assume it works
      if (parsed.usage) {
        ;({ usage } = parsed)
      }
    }
  }

  // Flush any remaining decoder data
  buffer += decoder.decode()

  finish(complete())

  function fail(
    type: 'network' | 'endpoint',
    message: string,
    payload = response,
  ) {
    end_time = monotonic()

    return {
      has_failed: true,
      role: 'assistant' as const,
      content:
        content +
        '\n```chat_error\n' +
        serialize({
          type,
          message,
          payload,
        }) +
        '```\n',
      start_time,
      end_time,
      model,
    }
  }

  function complete() {
    end_time = monotonic()

    let duration = end_time - (first_append_time ?? start_time)

    let perf = {
      tokens_per_second: (usage?.total_tokens ?? 0) / duration,
      time_to_first_token: end_time - first_append_time,
    }

    return {
      role: 'assistant' as const,
      content,
      start_time,
      end_time,
      usage,
      perf,
      model,
    }
  }
}

export async function generate_mock(
  { context },
  append: append,
  finish: finish,
) {
  let content = ''

  for (const i of each(5)) {
    let delta = `reply for ${
      context.length
    } messages, ${now().format()} ${i} ${random()}\n`

    content += delta

    append({
      content: delta,
      reasoning: '',
    })
    await sleep(1)
  }

  finish({
    content,
    reasoning: '',
  })
}


