import { text } from 'utility/text'
import { scroll } from './scroll'
import type { thread_hierarchy_item } from 'utility/thread_hierarchy'

type sidebar = {
  threads: thread_hierarchy_item[]
  current_thread: id
  on_new_thread: () => void
  on_select_thread: (thread: id) => void
  on_hide_thread: (thread: id) => void
  on_toggle_folder: (folder: string) => void
}

export function sidebar({
  threads,
  current_thread,
  on_new_thread,
  on_select_thread,
  on_hide_thread,
  on_toggle_folder,
}: sidebar) {
  return h(
    'sidebar',
    h(
      'nav',
      h(
        'button.nav_new_thread',
        {
          onclick: on_new_thread,
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
              { focus: current_thread == id },
              h(
                'button.threads_set_thread',
                {
                  onclick() {
                    on_select_thread(id)
                  },
                },
                label || 'Untitled',
              ),
              h(
                'button.threads_delete_thread',
                {
                  async onclick() {
                    on_hide_thread(id)
                  },
                },
                'delete',
              ),
            )
          }

          if (type == 'folder') {
            return h(
              'threads_folder',
              { focus: current_thread == id },
              h(
                'button.threads_toggle_folder',
                {
                  onclick() {
                    on_toggle_folder(id)
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
