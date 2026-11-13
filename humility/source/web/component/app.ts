import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import { use_style } from 'lib/web/style'
import theme from 'web/design/utilitarian.yaml'
import 'web/design/utilitarian.css'
import { textarea } from './textarea'
import { scroll } from './scroll'
import { post } from 'lib/web/request'
import type { messages } from 'lib/generation'
import { sidebar } from './sidebar'
import { marked } from 'marked'
const { parse: render } = marked

const max_title_length = 65 * 2

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
  const [threads, set_threads] = use_state<Record<string, thread>>({})
  const [thread, set_thread] = use_thread()
  const [messages, set_messages] = use_state<messages>([])
  const [is_new_thread, set_is_new_thread] = use_state(false)

  use_effect(() => {
    set_threads(post('list'))
  }, [])

  use_effect(async () => {
    if (is_new_thread) {
      set_is_new_thread(false)
      return
    }

    if (!thread) {
      set_messages([])
      return
    }

    set_messages(post('read', thread))
  }, [thread])

  use_keyboard('enter', async () => {
    if (!prompt) {
      return
    }

    set_prompt('')

    let current_thread = thread

    if (messages.length == 0) {
      current_thread = await post('new_thread', {
        title: prompt,
        folder: '',
      })

      set_thread(current_thread)
      set_is_new_thread(true)

      set_threads(post('list'))
    }

    set_messages((messages) => {
      messages.push({
        role: 'user',
        content: prompt,
      })
    })

    set_messages(async (messages) => {
      messages.push(
        await post('send', {
          content: prompt,
          thread: current_thread,
        }),
      )
    })
  })

  use_keyboard('alt+n', new_thread)

  function new_thread() {
    set_thread('')
    // set_thread(post('new_thread'))
  }

  return h(
    h('title.', 'Humility'),
    h(
      'app',
      h(
        sidebar,
        h(
          'button.new_thread',
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
            h(
              'page_content',
              h(
                'messages',
                map(messages, (message) =>
                  h(
                    'messages_message',
                    { role: message.role },
                    h('messages_message_content', {
                      html: render(message.content),
                    }),
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
            h(
              scroll,
              h(
                'prompt_textarea',
                h(textarea, { value: prompt, set_value: set_prompt }),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}
