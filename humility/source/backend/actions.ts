import { list as action_list, hide, get_thread_file, serialize } from 'action/index'
import { now } from 'lib/time'
import { random_id } from 'lib/random'
import { append_message, empty_thread_structure } from 'utility/thread'
import { broadcast, is_thread_active, subscribe, unsubscribe } from './connections'
import { generate_thread } from './generation'
import { run_tool } from './tool_run'
import { mutate_thread, mutate_thread_index, read_thread_structure } from './thread_store'
import { write } from 'lib/file'
import type { action } from './protocol'
import type { tool_call as tool_call_structure } from 'utility/tools'

export let actions: Record<action, fn> = {
  list: action_list,
  hide,
  subscribe({ thread, client }) {
    subscribe(thread, client)

    const thread_structure = read_thread_structure(thread)
    broadcast(
      'set_thread_structure',
      {
        thread,
        thread_structure,
        is_active: is_thread_active(thread),
      },
      client,
    )
  },
  unsubscribe({ thread, client }) {
    unsubscribe(thread, client)
  },
  init({ thread, title = '', folder = '' }) {
    const thread_structure = empty_thread_structure()
    write_thread(thread, thread_structure)

    mutate_thread_index((thread_index: thread_index) => {
      thread_index[thread] = {
        title,
        folder,
        creation_time: now().timestamp,
      }
    })

    broadcast('set_thread_structure', {
      thread,
      thread_structure,
      is_active: is_thread_active(thread),
    })
  },
  send({ thread, prompt }) {
    const message = random_id()
    const message_structure: Partial<message_structure> = {
      role: 'user',
      content: prompt,
    }

    let tree
    mutate_thread(thread, (thread_structure: thread_structure) => {
      append_message(thread_structure, message, message_structure)
      ;({ tree } = thread_structure)
    })

    broadcast('set_message', {
      thread,
      message,
      message_structure,
    })
    broadcast('set_tree', { thread, tree })
  },
  generate({ thread }) {
    const thread_structure = read_thread_structure(thread)
    const pending_tools = thread_structure.roots[0]?.pending_tools ?? {}

    if (is_thread_active(thread) || Object.keys(pending_tools).length > 0) {
      return { started: false, is_active: is_thread_active(thread) }
    }

    void generate_thread(thread)
    return { started: true }
  },
  call_tool({ thread, tool_id }) {
    if (is_thread_active(thread)) {
      return { started: false, is_active: true }
    }

    let tool_call: tool_call_structure | undefined
    let pending_tools: Record<id, tool_call_structure> = {}

    mutate_thread(thread, (thread_structure: thread_structure) => {
      const root_config = thread_structure.roots[0]
      if (!root_config?.pending_tools?.[tool_id]) return

      tool_call = root_config.pending_tools[tool_id]
      delete root_config.pending_tools[tool_id]
      pending_tools = root_config.pending_tools
    })

    if (!tool_call) {
      return { started: false, is_active: is_thread_active(thread) }
    }

    void run_tool(thread, tool_call)
    broadcast('set_pending_tools', { thread, pending_tools })
    return { started: true }
  },
}

export const non_mutative_actions: action[] = ['subscribe', 'unsubscribe']

function write_thread(thread: id, thread_structure: thread_structure) {
  const file = get_thread_file(thread)
  write(file, serialize(thread_structure))
}
