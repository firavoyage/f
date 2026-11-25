export type thread_hierarchy_item =
  | {
      type: 'file'
      label: string
      id: id
    }
  | {
      type: 'folder'
      label: string
      id: string
    }
  | {
      type: 'whitespace'
    }

type hierarchy_node = {
  type: 'file' | 'folder'
  label: string
  creation_time?: number
  children?: Record<string, hierarchy_node>
}

export function build_thread_index_hierarchy(
  thread_index: thread_index,
  expanded_folders: string[],
): thread_hierarchy_item[] {
  let threads = map(thread_index ?? {}, ([thread, thread_index_item]) => ({
    ...thread_index_item,
    id: thread,
  })).filter(({ is_hidden }) => !is_hidden)

  let root: Record<string, hierarchy_node> = {}

  for (const thread of threads) {
    let current_children = root
    let dirs = thread.folder.split('/').filter((dir) => dir != '')

    for (const dir of dirs) {
      if (!has(current_children, dir)) {
        current_children[dir] = {
          type: 'folder',
          label: dir,
          creation_time: thread.creation_time,
          children: {},
        }
      }

      current_children = current_children[dir].children!
    }

    current_children[thread.id] = {
      type: 'file',
      label: thread.title,
      creation_time: thread.creation_time,
    }
  }

  let whitespace: thread_hierarchy_item = {
    type: 'whitespace',
  }
  let items: thread_hierarchy_item[] = []

  function append_children(children: Record<string, hierarchy_node>, dir = '') {
    map(children, ([id, child]) => {
      const { type, label, children: child_nodes } = child

      if (type == 'file') {
        items.push({ type, label, id })
      } else {
        let folder_path = `${dir}${label}`

        items.push({ type, label, id: folder_path })

        if (has(expanded_folders, folder_path)) {
          append_children(child_nodes!, `${folder_path}/`)
        }

        items.push(whitespace)
      }
    })
  }

  append_children(root)

  return map(items, (item, index) => {
    if (item.type == 'whitespace' && items?.[index + 1]?.type == 'whitespace') {
      return
    }
    return item
  })
}
