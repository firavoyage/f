import { random_id } from 'lib/random'
import { tool_instructions as tool_instruction_text } from './tools'

export function empty_thread(): thread {
  return {
    tree: {
      0: {
        children: [],
      },
    },
    roots: {
      0: {
        tools: [],
      },
    },
    messages: {},
  }
}

export function append_node(tree: thread['tree'], message: id) {
  let node: node = 0

  while (tree[node]?.focus) {
    node = tree[node].focus!
  }

  tree[node].children.push(message)
  tree[node].focus = message
  tree[message] = {
    children: [],
  }

  return tree
}

export function append_message(
  thread: thread,
  message: Partial<message>,
  message_id: id = random_id(),
): thread {
  append_node(thread.tree, message_id)
  thread.messages[message_id] = message

  return thread
}

export function render_conversation(thread: thread) {
  const { tree, messages } = thread

  const root = 0
  let node = root

  let conversation = []
  while (tree[node].focus) {
    let child = tree[node].focus

    conversation.push(messages[child])
    node = child
  }

  return conversation
}

export function build_context(thread: thread) {
  const root_config = thread.roots[0] ?? {}
  const tool_instruction_list = (root_config.tools ?? [])
    .map((name) => tool_instruction_text[name])
    .filter(Boolean)
  const system_prompt = [root_config.system_prompt, ...tool_instruction_list]
    .filter(Boolean)
    .join('\n\n')

  const context: plain_message[] = []

  if (system_prompt) {
    context.push({ role: 'system', content: system_prompt })
  }

  for (const node of build_path(thread)) {
    const message = thread.messages[node]
    if (!message) continue

    const role = message.role == 'tool' ? 'user' : message.role
    const previous = context.at(-1)

    if (previous?.role == role) {
      previous.content += `\n\n${message.content ?? ''}`
    } else {
      context.push({
        role,
        content: message.content ?? '',
      })
    }
  }

  return context
}

function build_path(thread: thread): node[] {
  const root: root = 0
  let node: node = thread.roots[root]?.start ?? root
  const path: node[] = node == root ? [] : [node]

  while (thread.tree[node]?.focus) {
    node = thread.tree[node].focus!
    path.push(node)
  }

  return path
}
