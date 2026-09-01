import 'web/design/utilitarian/utilitarian.css'
import 'web/design/app.css'

import { cloneDeep } from 'lodash-es'

import { use_sync_theme } from "web/lib/sync theme.use";
import { use_window_active } from 'web/lib/window.use';

import { tool, tool_name, tools, tools_taxonomy } from 'action/tools';

import { Main } from "web/component/main";
import { Sidebar } from 'web/component/sidebar';
import { List } from 'web/component/list';
import { Menu } from 'web/component/menu';
import { Shortcuts } from 'web/component/shortcuts';
import { Button } from './button';
import { Hamburger } from './hamburger';

export const use_global = state({
  'input': '',
  'output': '',
  'process': [],
  'appearance.theme': union('system', "light", "dark"),
  'appearance.layout.sidebar.is visible': true,
  'appearance.layout.hamburger menu.is visible': false,
  'navigation.path': '',
  // 'navigation.page': '',
  // 'navigation.tool': '',
}, {
  persist: 'tools',
  version: '0.4',
  should_migrate() { return false },
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
  const [, toggle_sidebar] = use_global('appearance.layout.sidebar.is visible')

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
  const [theme, set_theme] = use_global('appearance.theme')

  const commands = use_commands()

  use_sync_theme(theme)

  use_window_active()

  return <>
    <title>Tools</title>

    <div className="app">
      <Sidebar>
        <Menu {...p({ app: 'Tools' })}></Menu>
        <Hamburger>
          <button className="preferences">Preferences</button>
          <button className="shortcuts">Keyboard Shortcuts</button>
          <button className="about">About</button>
          <hr />
        </Hamburger>
        <List {...p({
          items: tools_taxonomy, set_focus(name: tool_name) {
            set_process((process: tool[]) => {
              process.push(cloneDeep({
                name,
                args: tools[name].args ?? []
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
