import { text } from 'utility/text'
import { scroll } from './scroll'
import type { thread_hierarchy_item } from 'utility/thread_hierarchy'

type sidebar = {
  threads: thread_hierarchy_item[]
  thread_id: id
  new_thread: () => void
  select_thread: (thread: id) => void
  hide_thread: (thread: id) => void
  toggle_folder: (folder: string) => void
}

export function sidebar({
  threads,
  thread_id,
  new_thread,
  select_thread,
  hide_thread,
  toggle_folder,
}: sidebar) {
  return h(
    'sidebar',
    h(
      'nav',
      h(
        'button.link.nav_new_thread',
        {
          onclick: new_thread,
        },
        text('new_thread'),
      ),
    ),
    h(
      'threads',
      h(
        scroll,
        map(threads, ({ type, label, id }) => {
          if (type == 'file') {
            return h(
              'threads_thread',
              { focus: thread_id == id },
              h(
                'button.link.threads_set_thread',
                {
                  onclick() {
                    select_thread(id)
                  },
                },
                label || 'Untitled',
              ),
              h(
                'button.link.threads_delete_thread',
                {
                  async onclick() {
                    hide_thread(id)
                  },
                },
                'delete',
              ),
            )
          }

          if (type == 'folder') {
            return h(
              'threads_folder',
              { focus: thread_id == id },
              h(
                'button.threads_toggle_folder',
                {
                  onclick() {
                    toggle_folder(id)
                  },
                },
                label,
              ),
            )
          }

          return h('threads_whitespace')
        }),
      ),
    ),
  )
}
