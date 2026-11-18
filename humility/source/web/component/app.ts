import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import { use_style } from 'lib/web/style'
import theme from 'web/design/utilitarian.yaml'
import 'web/design/utilitarian.css'
import { textarea } from './textarea'
import { scroll } from './scroll'
// import { post } from 'lib/web/request'
import type { message, messages } from 'lib/generation'
import { sidebar } from './sidebar'
import { marked } from 'marked'
import { copy } from 'lib/web/clipboard'
import { random, random_id } from 'lib/random'
const { stringify, parse } = JSON

const ws_retry_delay = 1000
const ws_max_jitter = 1000

const action_timeout = 1000
// const action_timeout = 10000

const max_title_length = 65 * 2

type id = string
type node = number | id

type thread_structure = {
  tree: Record<
    node,
    {
      children: node[]
      focus?: node
    }
  >
  message: Record<id, message_structure>
  config?: {
    system_prompt: string
    model: string
    provider: string
  }
  metadata?: {
    roots: number[]
  }
}

type message_structure = {
  id: id
  role: role
  content: string
  reasoning?: string
  
}

type plain_message_structure = {
  role: role
  content: string
  reasoning?: string
  tools?: any[]
}

type role = 'system' | 'user' | 'assistant' | 'tool'

type thread_index = Record<
  id,
  {
    title: string
    folder: string
    tags?: []
    creation_time: number
    // is_hidden?: boolean
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
  const [thread_structure, set_thread_structure] = use_state()
  const [thread_index, set_thread_index] = use_state<thread_index>({})
  const [thread, set_thread] = use_thread()
  const [display_thread, set_display_thread] = use_display_thread()
  use_effect(() => {
    set_thread(display_thread ?? random_id())
  }, [display_thread])
  use_effect(() => {
    if (
      is(display_thread, 'absent') &&
      entries(thread_structure.message).length > 0
    ) {
      set_display_thread(thread)
    }
  }, [thread_structure.message])

  const [message_tree, set_message_tree] = use_state({
    0: {
      children: [],
    },
  })

  const [message_dict, set_message_dict] = use_state<
    Record<string, plain_message>
  >({})

  const content = use_ref()
  const field = use_ref()

  let controls = {
    new_thread() {
      set_thread(nil)
    },
    async send_prompt() {
      let thread_id = thread
      if (is(thread, 'absent')) {
        thread_id = random_id()

        set_thread(thread_id)

        await perform('init', { thread: thread_id })
      }

      await perform('send', {
        thread: thread_id,
        prompt,
        options: {},
      })

      await perform('generate', { thread: thread_id })
    },
  }

  let broadcasts = {
    set_tree(payload) {
      set_message_tree(payload)
    },
    set_active_messages(payload) {
      set_active_messages(payload)
    },
    set_messages(payload) {
      set_message_dict(payload)
    },
    set_config() {
      throw err('todo')
    },
    set_metadata() {
      throw err('todo')
    },
    set_message(payload) {
      const { id } = payload

      set_message_dict((dict) => {
        dict[id] = payload
      })
    },
    append_message(payload) {
      const { id, content, reasoning } = payload

      message_dict[id].content += content
      message_dict[id].reasoning += reasoning
    },
    finish_message(payload) {
      message_dict[id] = merge(message_dict[id], payload)
    },
  }

  // open websocket
  use_mount(() => {
    function receive(event) {
      const response: {
        type: 'response' | 'broadcast'
        id?: string
        thread?: string
        action: string
        payload: any
      } = parse(event.data)

      const { type, id, action, payload } = response

      log('receive', action, payload)

      if (type == 'response') {
        pending_requests?.[id]?.(payload)
        pending_requests[id] = nil
      } else if (type == 'broadcast') {
        if (response.thread == thread) {
          broadcasts[action](payload)
        }
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
                        await perform('hide', current_thread)
                        // await post('hide', current_thread)
                        if (thread == current_thread) {
                          set_thread(nil)
                        }
                        set_thread_index(perform('list'))
                        // set_threads(post('list'))
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
