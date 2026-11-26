import { text } from 'utility/text'
import { scroll } from './scroll'

export function sidebar({
  open,
  thread_hierarchy,
  thread_id,
  new_thread,
  select_thread,
  hide_thread,
  toggle_folder,
}) {
  return open && h(
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
        map(thread_hierarchy, ({ type, label, id }) => {
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
