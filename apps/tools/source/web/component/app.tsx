import 'web/design/utilitarian/utilitarian.css'
import 'web/design/app.css'

import { cloneDeep } from 'lodash-es'

import { use_sync_theme } from "web/lib/sync_theme.use";
import { use_window_active } from 'web/lib/window.use';

import { items, tool_to_args } from 'action/tools';

import { Main } from "web/component/main";
import { Sidebar } from 'web/component/sidebar';
import { List } from 'web/component/list';
import type { item } from 'web/component/process'
import { Menu } from 'web/component/menu';
import { Shortcuts } from 'web/component/shortcuts';

export const use_global = state({
  'input': '',
  'output': '',
  'process': [],
  'appearance.theme': '',
  'appearance.layout.sidebar.is_visible': true,
  'navigation.path': '',
  // 'navigation.page': '',
  // 'navigation.tool': '',
}, {
  persist: 'tools',
  version: '0.2',
  sync_url_options: {
    should_sync_url: true,
    should_apply_all_given_params: true,
    should_cleanup_omitted_params_after_init: true,
    should_sync_after_init: true,
    param_mapping: {
      theme: 'appearance.theme'
    },
    path_mapping: 'navigation.path'
  },
  // init(state) {
  //   const path = state['navigation.path']
  //   if (path == 'main') {
  //     state['navigation.page'] = path
  //   } else {
  //     state['navigation.page'] = 'tool'

  //     // todo: correct tool
  //     state['navigation.tool'] = path
  //   }
  // },
  // change(state) {
  //   state['navigation.path'] = state['navigation.page'] == 'main' ?
  //     'main' : state['navigation.tool']
  // }
})

export type shortcut = {
  key: string
  command: command
}

export const shortcuts: shortcut[] = [
  {
    key: "ctrl+b",
    command: "toggle sidebar"
  },
  {
    key: "ctrl+shift+p",
    command: "open command palette"
  },
  {
    key: "ctrl+,",
    command: "open settings"
  },
  {
    key: "ctrl+?",
    command: "open keyboard shortcuts",
  },
]

type command = keyof ReturnType<typeof use_commands>

let call_command: any

export function call(command: command) {
  // no possible race condition, no action could fire before app (ignore if so)
  call_command?.(command)
}

function use_commands() {
  const [, toggle_sidebar] = use_global('appearance.layout.sidebar.is_visible')

  const commands = {
    "toggle sidebar": toggle_sidebar,
    "open command palette"() {
      log('search commands')
    },
    "open keyboard shortcuts"() {
      log('open keyboard shortcuts')
    },
    "open settings"() {
      log('open settings')
    },
  }

  call_command = function call(command: keyof typeof commands) {
    commands?.[command]()
  }

  return commands
}

export function App() {
  // const [focus, set_focus] = use_global('navigation.tool')
  const [, set_process] = use_global('process')

  const commands = use_commands()

  use_sync_theme('system')

  use_window_active()

  return <>
    <title>Tools</title>

    <div className="app">
      <Sidebar>
        <Menu {...p({ app: 'Tools' })}></Menu>
        <List {...p({
          items, set_focus(tool: string) {
            set_process((process: item[]) => {
              process.push(cloneDeep({
                tool,
                args: tool_to_args[tool] ?? []
              }))
            })
          }
        })}></List>
      </Sidebar>
      <Main></Main>
      <Shortcuts {...p({ shortcuts, call })}></Shortcuts>
    </div>
  </>
}
