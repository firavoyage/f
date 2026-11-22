import { get_thread_log_file } from 'action/index'
import { now } from 'lib/time'
import { random_id } from 'lib/random'
import { append_message } from 'utility/thread'
import { append_json_log } from './log'
import { begin_message, broadcast, end_message } from './connections'
import { mutate_thread } from './thread_store'
import { tool_registry } from './tools'
import type { tool_call as tool_call_structure } from 'utility/tools'

export async function run_tool(thread: id, call: tool_call_structure) {
  const message = random_id()
  const start_time = now().timestamp
  const message_structure: Partial<message_structure> = {
    role: 'tool',
    content: '',
    start_time,
  }

  let tree
  mutate_thread(thread, (thread_structure: thread_structure) => {
    append_message(thread_structure, message, message_structure)
    ;({ tree } = thread_structure)
  })

  begin_message(thread, message)
  broadcast('set_message', { thread, message, message_structure })
  broadcast('set_tree', { thread, tree })

  let content = ''
  let has_finished = false

  function append_delta(delta: delta) {
    const addition = delta.content ?? ''
    content += addition
    broadcast('append_message', { thread, message, delta })
  }

  function finish(has_failed = false) {
    if (has_finished) return
    has_finished = true

    const finished_message: message_structure = {
      role: 'tool',
      content,
      start_time,
      end_time: now().timestamp,
      has_failed,
    }

    mutate_thread(thread, (thread_structure: thread_structure) => {
      thread_structure.messages[message] = finished_message
    })

    broadcast('finish_message', {
      thread,
      message,
      message_structure: finished_message,
    })
    append_json_log(get_thread_log_file(thread), 'finish_message', {
      message,
      ...finished_message,
    })
    end_message(thread, message)
  }

  try {
    const definition = tool_registry[call.tool]
    if (!definition) throw new Error(`Unknown tool: ${call.tool}`)

    const result = await definition.run(call.args, append_delta)
    if (!content && result) append_delta({ content: result })
    finish()
  } catch (error) {
    append_delta({
      content: `\nTool failed: ${error instanceof Error ? error.message : String(error)}`,
    })
    finish(true)
  }
}
