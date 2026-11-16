import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import { use_style } from 'lib/web/style'
import theme from 'web/design/utilitarian.yaml'
import 'web/design/utilitarian.css'
import { textarea } from './textarea'
import { scroll } from './scroll'
import { post } from 'lib/web/request'
import type { message, messages } from 'lib/generation'
import { sidebar } from './sidebar'
import { marked } from 'marked'
import { copy } from 'lib/web/clipboard'

const max_title_length = 65 * 2

type role = 'system' | 'user' | 'assistant' | 'tool'

type plain_message = {
  role: role
  content: string
  reasoning?: string
  tools?: any[]
}

type thread = {
  title: string
  folder: string
  creation_time: number
  is_hidden?: boolean
}

export const use_thread = s('', {
  url_param: 'thread',
})

export function app() {
  use_sync_theme('system')
  use_window_active()
  use_style(theme)

  const [prompt, set_prompt] = use_state('')
  // waiting for reply
  const [is_pending, set_is_pending] = use_state(false)

  const [folder, set_folder] = use_state('')
  const [threads, set_threads] = use_state<Record<string, thread>>({})
  const [thread, set_thread] = use_thread()

  const [message_tree, set_message_tree] = use_state({
    0: {
      children: ['foo'],
    },
    foo: {
      children: ['bar'],
    },
    bar: {
      children: [],
    },
  })

  const [message_dict, set_message_dict] = use_state<
    Record<string, plain_message>
  >({
    foo: {
      role: 'user',
      content: 'foo',
    },
    bar: {
      role: 'user',
      content: 'bar',
    },
  })

  let messages = [],
    current_node = 0
  while (true) {
    const { children = [], focus = children[0] } = message_tree[current_node]

    if (focus) {
      messages.push(message_dict[focus])
      current_node = focus
    } else {
      break
    } 
  }

  const content = use_ref()
  const field = use_ref()

  use_effect(() => {
    set_threads(post('list'))
  }, [])

  use_keyboard('alt+n', new_thread)

  function new_thread() {
    set_thread('')
    // set_thread(post('new_thread'))
  }

  function is_focused() {
    return document.activeElement == field.current
  }

  return h(
    h('title.', 'Humility'),
    h(
      'app',
      h(
        sidebar,
        h(
          'button.nav_new_thread',
          {
            onclick: new_thread,
          },
          'new thread',
        ),
        h(
          'threads',
          map(
            threads,
            ([current_thread, metadata]) =>
              !metadata.is_hidden &&
              h(
                h(
                  'threads_thread',
                  h(
                    'button.threads_set_thread',
                    {
                      onclick() {
                        set_thread(current_thread)
                        set_is_new_thread(false)
                      },
                    },
                    metadata.title || 'Untitled',
                    // metadata.title,
                  ),
                  h(
                    'button.threads_delete_thread',
                    {
                      async onclick() {
                        await post('hide', current_thread)
                        if (thread == current_thread) {
                          set_thread('')
                        }
                        set_threads(post('list'))
                      },
                    },
                    'delete',
                  ),
                ),
              ),
          ),
        ),
      ),
      h(
        'main',
        h(
          'page',
          h(
            scroll,
            { ref: content },
            h(
              'page_content',
              h(
                'messages',
                map(messages, (message) =>
                  h(
                    'message',
                    { role: message.role },
                    h(
                      'message_content',
                      h('message_prose', {
                        html: render(message.content),
                      }),
                      // h(
                      //   'button.message_copy',
                      //   {
                      //     onclick() {
                      //       copy(message.content)
                      //     },
                      //   },
                      //   'copy',
                      // ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        h(
          'prompt',
          h(
            'prompt_field',
            { empty: !prompt },
            h(
              scroll,
              h(
                'prompt_textarea',
                h(textarea, {
                  value: prompt,
                  set_value: set_prompt,
                  ref: field,
                  autofocus: true
                }),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}

function render(md: string) {
  return marked.parse(md, {
    gfm: true,
    breaks: true,
  })
}
