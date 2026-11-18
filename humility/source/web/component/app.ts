import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import { use_style } from 'lib/web/style'
import theme from 'web/design/utilitarian.yaml'
import 'web/design/utilitarian.css'

import { textarea } from './textarea'
import { scroll } from './scroll'
import { sidebar } from './sidebar'

// import { post } from 'lib/web/request'
import { copy } from 'lib/web/clipboard'
import { random, random_id } from 'lib/random'
const { stringify, parse } = JSON

import { marked } from 'marked'

const ws_retry_delay = 1000
const ws_max_jitter = 1000

const action_timeout = 1000
// const action_timeout = 10000

const max_title_length = 65 * 2

type thread_structure = {
  tree: Record<
    node,
    {
      children: node[]
      focus?: node
    }
  >
  messages: Record<id, message_structure>
  config?: {
    system_prompt: string
    model: string
    provider: string
  }
  roots?: number[]
}

type message_structure = {
  id: id
  role: role
  content: string
  reasoning?: string
  tools?: tool[]
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
  perf?: {
    tokens_per_second: number
    time_to_first_token: number
  }
  has_failed?: bool
  start_time: string
  end_time: string
  model?: string
}

type plain_message_structure = {
  role: role
  content: string
}

type tool = {
  tool: string
  args: Record<Key, any>
}

type thread_index = Record<
  id,
  {
    title: string
    folder: string
    is_hidden?: boolean
    creation_time?: number
    modification_time?: number
  }
>

export const use_display_thread = s(nil as id | nil, {
  url_param: 'thread',
})

export const use_thread = s(nil as id | nil)

export function app() {
  use_sync_theme('system')
  use_window_active()
  use_style(theme)

  const [prompt, set_prompt] = use_state('')

  const [folder, set_folder] = use_state('')
  const [thread_structure, set_thread_structure] = use_state<thread_structure>(
    empty_thread_structure(),
  )
  const [thread_index, set_thread_index] = use_state<thread_index>({})
  const [thread, set_thread] = use_thread()
  const [display_thread, set_display_thread] = use_display_thread()
  use_effect(() => {
    set_thread(display_thread ?? random_id())
  }, [display_thread])
  use_effect(() => {
    if (
      is(display_thread, 'absent') &&
      entries(thread_structure.messages).length > 0
    ) {
      set_display_thread(thread)
    } else {
      set_display_thread(nil)
    }
  }, [thread_structure.messages])

  const content = use_ref()
  const field = use_ref()

  let controls = {
    new_thread() {
      set_thread(random_id())
    },
    async send_prompt() {
      if (entries(thread_structure.messages).length == 0) {
        await perform('init', {
          thread,
        })
      }

      await perform('send', {
        thread,
        prompt,
        options: {},
      })

      await perform('generate', { thread })
    },
  }

  let broadcasts = {}

  // open websocket
  use_mount(() => {
    function receive(e) {
      const data = parse(e.data)

      const { type, payload } = data

      log('receive', payload)

      if (type == 'response') {
        const { request, action } = data

        pending_requests?.[request]?.(payload)
        pending_requests[request] = nil
      } else if (type == 'broadcast') {
        const { event } = data

        broadcasts[event](payload)
        // if (data.thread == thread) {
        //   broadcasts[action](payload)
        // }
      }
    }

    use({ receive })

    connect()
  })

  // list threads on sidebar
  use_mount(() => {
    set_thread_index(perform('list'))
    // set_threads(post('list'))
  })

  // subscribe broadcast of current thread
  use_effect(() => {
    if (!thread) {
      return
    }

    perform('subscribe', thread)

    return () => perform('unsubscribe', thread)
  }, [thread])

  // bind shortcuts
  use_keyboard('alt+n', controls.new_thread)

  return h(
    h('title.', 'Humility'),
    h(
      'app',
      h(
        sidebar,
        h(
          'button.nav_new_thread',
          {
            onclick: controls.new_thread,
          },
          'new thread',
        ),
        h(
          'threads',
          map(
            thread_index,
            ([current_thread, { title, is_hidden }]) =>
              !is_hidden &&
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
                    title || 'Untitled',
                  ),
                  h(
                    'button.threads_delete_thread',
                    {
                      async onclick() {
                        await perform('hide', current_thread)
                        if (thread == current_thread) {
                          controls.new_thread()
                        }
                        set_thread_index(perform('list'))
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
                map(current_messages(message_tree, message_dict), (message) =>
                  h(
                    'message',
                    { role: message?.role },
                    h(
                      'message_content',
                      h('message_prose', {
                        html: render(message?.content ?? ''),
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
                  autofocus: true,
                }),
              ),
            ),
          ),
          h(
            'button.prompt_send',
            {
              onclick: controls.send_prompt,
            },
            'send',
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

render = memoize(render)

let ws: WebSocket
let pending_actions: Set<fn> = set()
let pending_requests: Record<id, fn> = {}

function connect() {
  ws = new WebSocket('ws://localhost:8192/api/ws')

  ws.onopen = () => {
    log('Connected!')

    map(pending_actions, call)
  }

  ws.onmessage = receive

  ws.onclose = () => {
    log('Disconnected')

    const delay = ws_retry_delay + random() * ws_max_jitter

    set_timeout(function () {
      log('Reconnecting...')

      connect()
    }, delay)
  }
}

async function perform(
  action,
  payload?,
  timeout = action_timeout,
  request = random_id(),
): Promise<any> {
  if (!(ws?.readyState == WebSocket.OPEN)) {
    // log(`wait for ws to perform ${action}`)
    pending_actions.add(() => send(action, payload, request))
  } else {
    send(action, payload, request)
  }

  return new Promise((resolve, reject) => {
    pending_requests[request] = resolve

    set_timeout(function () {
      reject(
        err(`response for action ${action} should arrive within ${timeout}ms`),
      )
    }, timeout)
  })
}

async function send(action, payload, request) {
  const request_payload = {
    type: 'request',
    request,
    action,
    payload,
  }

  log('perform', action, payload)

  ws.send(stringify(request_payload))
}

function empty_thread_structure() {
  return {
    tree: {
      0: {
        children: [],
      },
    },
    messages: {},
  }
}

declare global {
  type id = string
  type node = number | id

  type role = 'system' | 'user' | 'assistant' | 'tool'
}
