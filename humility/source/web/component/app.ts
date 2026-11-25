import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import 'web/design/app.css'
import 'web/design/utilitarian.css'

import { sidebar } from './sidebar'
import { conversation } from './conversation'
import { random_id } from 'lib/random'

import { build_context, empty_thread } from 'utility/thread'
import { build_thread_index_hierarchy } from 'utility/thread_hierarchy'
import { text } from 'utility/text'
import { scroll_by } from 'utility/web/scroll'
import { trim } from 'utility/string'
import { connect, perform } from 'utility/web/websocket'
import { modal_prompt } from './modal_prompt'
import { modal_search } from './modal_search'
import { init_localstorage_prefix } from 'lib/web/state'

const max_title_length = 65 * 2

init_localstorage_prefix('humility')

export const use_sidebar_open = s(false, {
  localstorage: 'sidebar',
})

export const use_thread_id = s(nil as id | nil, {
  url_param: 'thread',
})

export const use_folder = s('', {
  localstorage: 'folder',
  // localstorage: 'cwd',
})

export function app({ should_use_vimium = true }) {
  use_sync_theme('system')
  use_window_active()

  const [prompt, set_prompt] = use_state('')

  const [folder, set_folder] = use_folder()
  const [expanded_folders, set_expanded_folders] = use_state<string[]>([])
  const [thread, set_thread] = use_state<thread>(empty_thread())
  const [is_active, set_is_active] = use_state(false)
  const [thread_index, set_thread_index] = use_state<thread_index | nil>(nil)
  const [thread_id, set_thread_id] = use_thread_id()

  const [should_show_reasoning, set_should_show_reasoning] = use_state(false)

  const [modal_prompt_open, set_modal_prompt_open] = use_state(false)

  const [sidebar_open, set_sidebar_open] = use_sidebar_open()

  let is_new_thread = thread_id == nil

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

  let commands = {
    new_thread() {
      set_thread_id(nil)
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

  let controls = {
    async send_prompt() {
      let current_thread_id = thread_id

      if (is_new_thread) {
        current_thread_id = random_id()

        await perform('init', {
          thread: thread_id,
          title: prompt.slice(0, max_title_length),
          folder,
        })

        set_thread_index(perform('list'))
      }

      await perform('send', {
        thread: thread_id,
        prompt,
        options: {},
      })

      set_prompt('')

      await perform('generate', { thread: thread_id })
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
    async hide_thread(id: id) {
      perform('hide', { thread: id })
      set_thread_index((index) => {
        index[id].is_hidden = true
      })
      if (thread_id == id) {
        commands.new_thread()
      }
    },
  }

  let broadcasts: Record<event, fn> = {
    set_thread_structure({ thread, thread_structure, is_active }) {
      set_thread(thread_structure)
      set_is_active(is_active)
    },
    set_tree({ tree }) {
      set_thread((t) => {
        t.tree = tree
      })
    },
    set_message({ message, message_structure }) {
      set_thread((t) => {
        t.messages[message] = message_structure
      })
    },
    set_pending_tools({ pending_tools }) {
      set_thread((t) => {
        t.roots[0] ??= {}
        t.roots[0].pending_tools = pending_tools
      })
    },
    set_active({ is_active }) {
      set_is_active(is_active)
    },
    append_message({ message, delta }) {
      const { content = '', reasoning = '' } = delta

      set_thread((t) => {
        t.messages[message].content =
          (t.messages[message].content ?? '') + content
        t.messages[message].reasoning =
          (t.messages[message].reasoning ?? '') + reasoning
        // t.messages[message].content += content
        // t.messages[message].reasoning += reasoning
      })
    },
    finish_message({ message, message_structure }) {
      set_thread((t) => {
        t.messages[message] = message_structure
      })
    },
  }

  // open websocket
  use_mount(() => {
    connect(broadcasts)
  })

  // list threads on sidebar
  use_mount(() => {
    set_thread_index(perform('list'))
  })

  // subscribe current thread
  use_effect(() => {
    if (!thread_id) {
      set_thread(empty_thread())
      return
    }

    perform('subscribe', { thread: thread_id })

    return () => perform('unsubscribe', { thread: thread_id })
  }, [thread_id])

  // enter to send prompt
  use_keyboard('enter', controls.send_prompt, {
    when: () => prompt && document.activeElement == prompt_field.current,
  })
  // disable sending empty prompt
  use_keyboard('enter', identity, {
    when: () => !prompt && document.activeElement == prompt_field.current,
  })

  // focus prompt
  use_effect(() => {
    prompt_field.current?.focus()
  }, [thread_id, is_new_thread])

  // expand all folders on path to cwd
  use_effect(() => {
    let folders = set(expanded_folders)

    let dirs = folder.split('/')

    for (const i of each(1, dirs.length)) {
      folders.add(dirs.slice(0, i).join('/'))
    }

    set_expanded_folders(array(folders))
  }, [folder])

  let threads = build_thread_index_hierarchy(
    thread_index ?? {},
    expanded_folders,
  )

  return h(
    h('title.', 'Humility'),
    h(
      'app',
      sidebar_open &&
        h(sidebar, {
          threads,
          thread_id,
          new_thread: commands.new_thread,
          select_thread: set_thread_id,
          hide_thread: controls.hide_thread,
          toggle_folder: controls.toggle_folder,
        }),
      h(conversation, {
        messages: build_context(thread),
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
                  set_thread_id(id)
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

declare global {
  type node = root | id

  type root = number
  type id = string

  type role = 'system' | 'user' | 'assistant' | 'tool'

  type thread = {
    tree: Record<
      node,
      {
        children: node[]
        focus?: node
      }
    >
    roots: Record<root, root_config>
    messages: Record<id, message>
  }

  type root_config = {
    model?: string | { provider: string; model: string }
    system_prompt?: string
    tools?: string[]
    start?: node
    pending_tools?: Record<id, tool>
  }

  type message = {
    role: role
    content?: string
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
    error?: any
    start_time?: number
    end_time?: number
    model?: string
  }

  type tool = {
    id: id
    tool_name: string
    args: Record<Key, any>
  }

  type plain_message_structure = {
    role: role
    content: string
  }

  type delta = {
    content: string
    reasoning?: string
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

  type action =
    | 'subscribe'
    | 'unsubscribe'
    | 'init'
    | 'send'
    | 'generate'
    | 'call_tool'
    | 'list'
    | 'hide'

  type event =
    | 'set_thread_structure'
    | 'set_tree'
    | 'set_message'
    | 'set_pending_tools'
    | 'set_active'
    | 'append_message'
    | 'finish_message'
}
