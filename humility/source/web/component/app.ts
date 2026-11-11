import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import { use_style } from 'lib/web/style'
import theme from 'web/design/utilitarian.yaml'
import 'web/design/utilitarian.css'
import { textarea } from './textarea'
import { scroll } from './scroll'
import { post } from 'lib/web/request'
import type { message } from 'lib/generation'
import { sidebar } from './sidebar'
import { marked } from 'marked'
const { parse: render } = marked

type thread = {
  title: string
  folder: string
  creation_time: number
  is_hidden?: boolean
}

export const use_thread = s('', {
  url_param: 'thread',
})

export function use_state<T>(
  initial_value?: T,
): [state: T, set_state: typeof set_state] {
  const [state, _set_state] = useState(initial_value)
  const update = use_update()

  function set_state(
    new_value:
      | T
      | Promise<T>
      | ((old_value: T) => T | Promise<T> | undefined) = toggle,
  ) {
    let prev_state = state
    // let new_state

    if (is(new_value, 'function')) {
      new_value = new_value(state)
    }
   
    if (is(new_value, 'undefined')) {
      return
    }

    if (is(new_value, 'literal') && new_value == prev_state) {
      return
    }

    if (is(new_value, Promise)) {
      new_value.then(set_state)
      return
    }

    _set_state(new_value)
    update()
  }

  return [state, set_state]
}

function use_update() {
  const [, update] = useState(false)

  return () => update((v) => !v)
}

function toggle(v: boolean) {
  return !v
}

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

  use_effect(async () => {
    if (!thread) {
      set_messages([])
      return
    }

    set_messages(post('read', thread))
  }, [thread])

  use_keyboard('enter', async () => {
    if (messages.length == 0) {
      const current_thread = await post('new_thread', {
        title: prompt,
        folder: '',
      })

      set_thread(current_thread)
      set_threads(post('list'))

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

      return
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
          thread,
        }),
      )
    })
  })

  use_effect(() => {
    log(messages)
  })

  return h(
    h('title.', 'Humility'),
    h(
      'app',
      h(
        sidebar,
        h(
          'button.new_thread',
          {
            onclick() {
              set_thread('')
              // set_thread(post('new_thread'))
            },
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
          scroll,
          h(
            'page',
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
