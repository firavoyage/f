import { tool_instructions as tool_instruction_text } from './tools'

export function empty_thread_structure(): thread_structure {
  return {
    tree: {
      0: {
        children: [],
      },
    },
    roots: {
      0: {
        tools: ['bash'],
        pending_tools: {},
      },
    },
    messages: {},
  }
}

export function append_node(tree: thread_structure['tree'], message: id) {
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

export function build_context(thread_structure: thread_structure) {
  return build_path(thread_structure).map(
    (node) => thread_structure.messages[node],
  )
}

export function build_plain_context(thread_structure: thread_structure) {
  const root_config = thread_structure.roots[0] ?? {}
  const tool_instruction_list = (root_config.tools ?? [])
    .map((name) => tool_instruction_text[name])
    .filter(Boolean)
  const system_prompt = [root_config.system_prompt, ...tool_instruction_list]
    .filter(Boolean)
    .join('\n\n')

  const context: plain_message_structure[] = []

  if (system_prompt) {
    context.push({ role: 'system', content: system_prompt })
  }

  for (const node of build_path(thread_structure)) {
    const message = thread_structure.messages[node]
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

export function append_message(
  thread_structure: thread_structure,
  message: id,
  message_structure: Partial<message_structure>,
): thread_structure {
  append_node(thread_structure.tree, message)
  thread_structure.messages[message] = message_structure as message_structure

  return thread_structure
}

function build_path(thread_structure: thread_structure): node[] {
  const root: root = 0
  let node: node = thread_structure.roots[root]?.start ?? root
  const path: node[] = node == root ? [] : [node]

  while (thread_structure.tree[node]?.focus) {
    node = thread_structure.tree[node].focus!
    path.push(node)
  }

  return path
}
