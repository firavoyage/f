import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import 'web/design/app.css'
import 'web/design/utilitarian.css'

import { sidebar } from './sidebar'
import { conversation } from './conversation'
import { random, random_id } from 'lib/random'
const { stringify, parse } = JSON

import { build_context, empty_thread_structure } from 'utility/thread'
import { build_flat_hierarchy } from 'web/utility/thread_hierarchy'
import { text } from 'web/utility/text'
import { modal_prompt } from './modal_prompt'
import { modal_search } from './modal_search'
import { init_localstorage_prefix } from 'lib/web/state'

const ws_retry_delay = 1000
const ws_max_jitter = 1000

const action_timeout = 1000
// const action_timeout = 10000

const max_title_length = 65 * 2

init_localstorage_prefix('humility')

export const use_sidebar_open = s(false, {
  localstorage: 'sidebar',
})

export const use_display_thread = s(nil as id | nil, {
  url_param: 'thread',
})
export const use_thread = s(nil as id | nil)

export const use_folder = s('', {
  localstorage: 'folder',
  // localstorage: 'cwd',
})

export function app() {
  use_sync_theme('system')
  use_window_active()

  const [prompt, set_prompt] = use_state('')

  const [folder, set_folder] = use_folder()
  const [expanded_folders, set_expanded_folders] = use_state<string[]>([])
  const [thread_structure, set_thread_structure] = use_state<thread_structure>(
    empty_thread_structure(),
  )
  const [thread_index, set_thread_index] = use_state<thread_index | nil>(nil)
  const [thread, set_thread] = use_thread()
  const [display_thread, set_display_thread] = use_display_thread()

  const [should_show_reasoning, set_should_show_reasoning] = use_state(false)

  const [modal_prompt_open, set_modal_prompt_open] = use_state(false)

  const [should_use_vimium, set_should_use_vimium] = use_state(true)

  const [sidebar_open, set_sidebar_open] = use_sidebar_open()

  let is_new_thread = thread_index != nil && !has(thread_index, thread)

  const content = use_ref()
  const prompt_field = use_ref()

  const [modal_prompt_initial_value, set_modal_prompt_initial_value] =
    use_state()
  const modal_prompt_set_value = use_ref()
  const modal_prompt_placeholder = use_ref()

  function open_prompt_modal({ value, set_value, placeholder }) {
    set_modal_prompt_open(true)

    set_modal_prompt_initial_value(value)
    modal_prompt_set_value.current = set_value
    modal_prompt_placeholder.current = placeholder
  }

  function use_vimium(on) {
    const jk_scroll_distance = 60
    const du_scroll_percentage = 0.5
    const space_scroll_percentage = 0.9
    const distances = {
      j: jk_scroll_distance,
      k: -jk_scroll_distance,
      d: du_scroll_percentage,
      u: -du_scroll_percentage,
      space: space_scroll_percentage,
      'shift+space': -space_scroll_percentage,
    }
    const field_tags = ['input', 'textarea']

    function is_inserting() {
      return has(field_tags, document.activeElement?.tagName.toLowerCase())
    }

    use_keyboard(
      'esc',
      () => {
        document.activeElement?.blur()
      },
      {
        when: () => on && is_inserting(),
      },
    )

    use_keyboard('i', () => prompt_field?.current?.focus(), {
      when: () => on && !is_inserting(),
    })

    map(distances, ([key, distance]) =>
      use_keyboard(key, () => scroll_by(content, distance), {
        when: () => on && !is_inserting(),
      }),
    )
  }

  use_vimium(should_use_vimium)

  // set thread url param: nil for new thread, otherwise existing
  // for simplicity, it technically subscribes a (random) thread regardless
  use_effect(() => {
    set_thread(display_thread ?? random_id())
  }, [display_thread])
  use_effect(() => {
    if (has(thread_index, thread)) {
      set_display_thread(thread)
    } else if (is_new_thread) {
      set_display_thread(nil)
    }
  }, [thread, is_new_thread])

  let commands = {
    new_thread() {
      set_thread(random_id())
    },
    change_current_folder() {
      open_prompt_modal({
        value: folder,
        set_value(folder: string) {
          set_folder(trim(trim(folder), '/'))
        },
        placeholder: text('folder'),
      })
    },
    toggle_sidebar() {
      set_sidebar_open()
    },
  }

  type shortcut = {
    command: keyof typeof commands
    key: string
    when?: fn
  }

  let shortcuts: shortcut[] = [
    {
      command: 'toggle_sidebar',
      key: 'ctrl+b',
    },
    {
      command: 'new_thread',
      key: 'alt+n',
    },
  ]

  async function hide_thread(id: id) {
    perform('hide', { thread: id })
    set_thread_index((index) => {
      index[id].is_hidden = true
    })
    if (thread == id) {
      commands.new_thread()
    }
  }

  let controls = {
    async send_prompt() {
      if (entries(thread_structure.messages).length == 0) {
        await perform('init', {
          thread,
          title: prompt.slice(0, max_title_length),
          folder,
        })

        set_thread_index(perform('list'))
      }

      await perform('send', {
        thread,
        prompt,
        options: {},
      })

      set_prompt('')

      await perform('generate', { thread })
    },
    toggle_folder(folder) {
      let folders = set(expanded_folders)

      if (has(folders, folder)) {
        folders.delete(folder)
      } else {
        folders.add(folder)
      }

      set_expanded_folders(array(folders))
    },
  }

  let broadcasts: Record<event, fn> = {
    set_thread_structure({ thread_structure }) {
      set_thread_structure(thread_structure)
    },
    set_tree({ tree }) {
      set_thread_structure((t) => {
        t.tree = tree
      })
    },
    set_message({ message, message_structure }) {
      set_thread_structure((t) => {
        t.messages[message] = message_structure
      })
    },
    append_message({ message, delta }) {
      const { content = '', reasoning = '' } = delta

      set_thread_structure((t) => {
        t.messages[message].content =
          (t.messages[message].content ?? '') + content
        t.messages[message].reasoning =
          (t.messages[message].reasoning ?? '') + reasoning
        // t.messages[message].content += content
        // t.messages[message].reasoning += reasoning
      })
    },
    finish_message({ message, message_structure }) {
      set_thread_structure((t) => {
        t.messages[message] = message_structure
      })
    },
  }

  // open websocket
  use_mount(() => {
    function receive_message(e) {
      const data = parse(e.data)

      const { type, payload } = data

      log('receive', type, payload)

      if (type == 'response') {
        const { request } = data

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

    connect(receive_message)
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

    perform('subscribe', { thread })

    return () => perform('unsubscribe', { thread })
  }, [thread])

  // bind shortcuts for controls
  use_keyboard('enter', controls.send_prompt, {
    when: () => prompt && document.activeElement == prompt_field.current,
  })
  // disable entering on empty prompt
  use_keyboard('enter', identity, {
    when: () => !prompt && document.activeElement == prompt_field.current,
  })

  // focus prompt when thread change
  use_effect(() => {
    // you may want to just browse existing threads
    if (is_new_thread) {
      prompt_field.current?.focus()
    }
  }, [thread, is_new_thread])

  // expand all folders on path to cwd
  use_effect(() => {
    let folders = set(expanded_folders)

    let dirs = folder.split('/')

    for (const i of each(1, dirs.length)) {
      folders.add(dirs.slice(0, i).join('/'))
    }

    set_expanded_folders(array(folders))
  }, [folder])

  let flat_hierarchy = build_flat_hierarchy(
    thread_index ?? {},
    expanded_folders,
  )

  return h(
    h('title.', 'Humility'),
    h(
      'app',
      sidebar_open &&
        h(sidebar, {
          threads: flat_hierarchy,
          current_thread: thread,
          on_new_thread: commands.new_thread,
          on_select_thread: set_thread,
          on_hide_thread: hide_thread,
          on_toggle_folder: controls.toggle_folder,
        }),
      h(conversation, {
        messages: build_context(thread_structure),
        folder,
        is_new_thread,
        prompt,
        set_prompt,
        should_show_reasoning,
        prompt_ref: prompt_field,
        content_ref: content,
      }),
      h(modal_prompt, {
        open: modal_prompt_open,
        set_open: set_modal_prompt_open,
        initial_value: modal_prompt_initial_value,
        set_value: modal_prompt_set_value.current,
        placeholder: modal_prompt_placeholder.current,
      }),
      h(modal_search, {
        files: map(
          thread_index ?? {},
          ([id, { title, folder = '', is_hidden }]) => {
            if (!is_hidden) {
              return {
                label: title,
                info: folder,
                fn() {
                  set_thread(id)
                },
              }
            }
          },
        ),
        commands,
        shortcuts,
      }),
    ),
  )
}

let ws: WebSocket
let pending_actions: Set<fn> = set()
let pending_requests: Record<id, fn> = {}

function connect(on_message: (event: MessageEvent) => void) {
  ws = new WebSocket('ws://localhost:8192/api/ws')

  ws.onopen = () => {
    log('Connected!')

    map(pending_actions, call)
  }

  ws.onmessage = on_message

  ws.onclose = () => {
    log('Disconnected')

    const delay = ws_retry_delay + random() * ws_max_jitter

    set_timeout(function () {
      log('Reconnecting...')

      connect(on_message)
    }, delay)
  }
}

async function perform(
  action: action,
  payload?: object,
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

async function send(action: action, payload: any, request: id) {
  const request_payload = {
    type: 'request',
    request,
    action,
    payload,
  }

  log('perform', action, payload)

  ws.send(stringify(request_payload))
}

function scroll_by(
  ref,
  distance,
  scroll_behavior: 'smooth' | 'instant' = 'instant',
) {
  if (!ref.current) {
    return
  }

  if (abs(distance) <= 1) {
    distance = ref.current.clientHeight * distance
  }

  ref.current.scrollBy({
    top: distance,
    behavior: scroll_behavior,
  })
}

function trim_start(s: string, char: string = ' '): string {
  if (char === '') return s

  while (s.startsWith(char)) {
    s = s.slice(char.length)
  }
  return s
}

function trim_end(s: string, char: string = ' '): string {
  if (char === '') return s

  while (s.endsWith(char)) {
    s = s.slice(0, -char.length)
  }
  return s
}

function trim(s: string, char: string = ' '): string {
  return trim_end(trim_start(s, char), char)
}

declare global {
  type node = root | id

  type root = number
  type id = string

  type role = 'system' | 'user' | 'assistant' | 'tool'

  type thread_structure = {
    tree: Record<
      node,
      {
        children: node[]
        focus?: node
      }
    >
    roots: root[]
    focus: root
    messages: Record<id, message_structure>
    config?: {
      system_prompt: string
      model: string
      provider: string
    }
  }

  type message_structure = {
    id?: id
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
    start_time: number
    end_time: number
    model?: string
  }

  type plain_message_structure = {
    role: role
    content: string
  }

  type delta = {
    content: string
    reasoning?: string
  }

  type tool = {
    tool: string
    args: Record<Key, any>
  }

  type thread_index = Record<id, thread_index_item>
  type thread_index_item = {
    title: string
    folder: string
    is_hidden?: boolean
    creation_time?: number
    modification_time?: number
  }

}
type text = typeof text
