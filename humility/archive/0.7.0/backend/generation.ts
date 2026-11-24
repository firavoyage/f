import { get_message_log_file, get_thread_log_file } from 'action/index'
import { now } from 'lib/time'
import { random_id } from 'lib/random'
import { append_message, build_plain_context } from 'utility/thread'
import { generate } from 'utility/generate'
import { resolve_endpoint_model_key } from 'utility/resolve'
import { append_json_log } from './log'
import { begin_message, broadcast, end_message } from './connections'
import { mutate_thread } from './thread_store'
import { parse_tool_calls } from './tools'
import type { tool_call as tool_call_structure } from 'utility/tools'

export async function generate_thread(thread: id) {
  const message = random_id()
  const start_time = now().timestamp
  const message_structure: Partial<message_structure> = {
    role: 'assistant',
    content: '',
    reasoning: '',
    start_time,
  }

  let context: plain_message_structure[] = []
  let provider_model: string | { provider: string; model: string } | undefined
  let tree

  mutate_thread(thread, (thread_structure: thread_structure) => {
    context = build_plain_context(thread_structure)
    provider_model = thread_structure.roots[0]?.model
    append_message(thread_structure, message, message_structure)
    ;({ tree } = thread_structure)
  })

  begin_message(thread, message)
  broadcast('set_message', { thread, message, message_structure })
  broadcast('set_tree', { thread, tree })

  let has_finished = false

  function append_delta(delta: delta) {
    broadcast('append_message', { thread, message, delta })
  }

  function finish(message_structure: message_structure) {
    if (has_finished) return
    has_finished = true

    const calls = message_structure.has_failed
      ? []
      : parse_tool_calls(message_structure.content ?? '')
    let pending_tools: Record<id, tool_call_structure> = {}

    mutate_thread(thread, (thread_structure: thread_structure) => {
      thread_structure.messages[message] = message_structure
      const root_config = thread_structure.roots[0]
      root_config.pending_tools ??= {}

      for (const call of calls) {
        root_config.pending_tools[random_id()] = call
      }

      pending_tools = root_config.pending_tools
    })

    broadcast('finish_message', { thread, message, message_structure })

    if (calls.length > 0) {
      broadcast('set_pending_tools', { thread, pending_tools })
    }

    append_json_log(get_thread_log_file(thread), 'finish_message', {
      message,
      ...message_structure,
    })
    end_message(thread, message)
  }

  try {
    const { endpoint, model, key } =
      await resolve_endpoint_model_key(provider_model)

    append_json_log(get_message_log_file(message), 'request', {
      context,
      endpoint,
      model,
    })

    const stream_text = await generate(
      { context, endpoint, model, key },
      append_delta,
      finish,
      (data) => append_json_log(get_message_log_file(message), 'data', data),
    )

    append_json_log(get_message_log_file(message), 'done', stream_text)
  } catch (error) {
    finish({
      role: 'assistant',
      content: `\n\nGeneration failed: ${error instanceof Error ? error.message : String(error)}`,
      start_time,
      end_time: now().timestamp,
      has_failed: true,
    })
  }
}
