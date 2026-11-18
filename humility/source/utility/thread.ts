export function empty_thread_structure() {
  return {
    tree: {
      0: {
        children: [],
      },
    },
    messages: {},
  }
}

export function append_node(tree: thread_structure['tree'], message: id) {
  let node: node = 0
  while (true) {
    const { children, focus } = tree[node]

    if (focus) {
      node = focus
    } else {
      break
    }
  }

  tree[node].children.push(message)
  tree[node].focus = message

  return tree
}

// set focus

export function build_context(thread_structure: thread_structure) {
  let context = []

  const { tree, messages } = thread_structure

  let node: node = 0
  while (true) {
    const { children, focus } = tree[node]

    if (focus) {
      node = focus

      context.push(messages[node])
    } else {
      break
    }
  }

  return context
}

export function build_plain_context(thread_structure: thread_structure) {
  let context = []

  const { tree, messages } = thread_structure

  let node: node = 0
  while (true) {
    const { children, focus } = tree[node]

    if (focus) {
      node = focus

      const { role, content } = messages[node]

      let plain_message_structure: plain_message_structure = {
        role,
        content,
      }

      context.push(plain_message_structure)
    } else {
      break
    }
  }

  return context
}
