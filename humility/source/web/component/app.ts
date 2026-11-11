import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import { use_style } from 'lib/web/style'
import theme from 'web/design/utilitarian.yaml'
import 'web/design/utilitarian.css'
import { input } from './input'
import { textarea } from './textarea'
import { scroll } from './scroll'
import { post } from 'lib/web/request'
import type { message } from 'lib/generation'
import { sidebar } from './sidebar'

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
  const [messages, set_messages] = use_state<message[]>([])

  use_effect(() => {
    set_threads(post('list'))
  }, [])

  use_effect(() => {
    set_messages(post('read', thread))
  }, [thread])

  use_effect(() => {
    log(messages)
  }, [messages])

  return h(
    h('title.', 'Humility'),
    h(
      'app',
      h(
        sidebar,
        h(
          'threads',
          map(threads, ([thread, metadata]) =>
            h(
              'button.threads_thread',
              {
                onclick() {
                  set_thread(thread)
                },
              },
              metadata.title,
            ),
          ),
        ),
      ),
      h(
        'main',
        h(
          scroll,
          h(
            'page',
            h(
              'page_content',
              h(
                'messages',
                map(messages, (message) =>
                  h('messages_message',
                    { role: message.role },
                    h('messages_message_content', message.content),
                  )
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
  )
}
