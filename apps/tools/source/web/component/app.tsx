import 'web/design/utilitarian/utilitarian.css'
import 'web/design/app.css'

import { cloneDeep } from 'lodash-es'

import { use_sync_theme } from "web/lib/use sync theme";
import { use_window_active } from 'web/lib/use window active';

import { tool, tool_name, tools, tools_taxonomy } from 'action/tools';

import { Main } from "web/component/main";
import { Sidebar } from 'web/component/sidebar';
import { List } from 'web/component/list';
import { Menu } from 'web/component/menu';
import { Shortcuts } from 'web/component/shortcuts';
import { Hamburger } from './hamburger';
import { Button } from './button';
import { About } from './about';
import { Scroll } from './scroll';
import { use_toasts, toast, Toast } from './toast';
import { Preferences } from './preferences';
import { Commands } from './commands';

export const use_global = state({
  'input': '',
  'output': '',
  'process': [],
  'appearance.theme': union('system', "light", "dark"),
  'appearance.density': union("comfortable", "cozy", "compact"),
  'appearance.layout.sidebar.is visible': true,
  'appearance.layout.process.is visible': true,
  'appearance.layout.input.is visible': true,
  'appearance.layout.output.is visible': true,
  'appearance.layout.titlebar.is visible': true,
  'appearance.layout.hamburger menu.is visible': false,
  'navigation.path': '',
  // 'navigation.page': '',
  // 'navigation.tool': '',
}, {
  persist: 'tools',
  version: '0.9',
  should_migrate() { return true },
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

type command = keyof ReturnType<typeof use_commands>

export const shortcuts: shortcut[] = [
  {
    key: "ctrl+b",
    command: "toggle sidebar"
  },
  {
    key: "alt+b",
    command: "toggle sidebar"
  },
  {
    key: "alt+s",
    command: "toggle sidebar"
  },
  {
    key: "alt+t",
    command: "toggle titlebar"
  },
  {
    key: "ctrl+k",
    command: "open command palette"
  },
  {
    key: "ctrl+enter",
    command: "open command palette"
  },
  {
    key: "ctrl+p",
    command: "open command palette"
  },
  {
    key: "ctrl+shift+p",
    command: "open command palette"
  },
  {
    key: "ctrl+,",
    command: "open preferences"
  },
  {
    key: "ctrl+?",
    command: "open keyboard shortcuts",
  },
  {
    key: "alt+p",
    command: "toggle process panel",
  },
  {
    key: "alt+i",
    command: "toggle input panel",
  },
  {
    key: "alt+o",
    command: "toggle output panel",
  },
]

function use_commands() {
  const [, toggle_sidebar] = use_global('appearance.layout.sidebar.is visible')
  const [, toggle_process] = use_global('appearance.layout.process.is visible')
  const [, toggle_input] = use_global('appearance.layout.input.is visible')
  const [, toggle_output] = use_global('appearance.layout.output.is visible')
  const [, toggle_titlebar] = use_global('appearance.layout.titlebar.is visible')

  const commands = {
    "toggle sidebar": toggle_sidebar,
    "open command palette": 'open_commands',
    "open keyboard shortcuts": 'toggle_open_shortcuts',
    "open preferences": 'toggle_open_preferences',
    'toggle process panel': toggle_process,
    'toggle input panel': toggle_input,
    'toggle output panel': toggle_output,
    'toggle titlebar': toggle_titlebar,
  }

  command_ = function call(command: keyof typeof commands) {
    if (typeof commands?.[command] == 'string') {
      // @ts-expect-error 
      exposed_commands?.[commands?.[command]]?.()
    } else {
      commands?.[command]?.()
    }
  }

  return commands
}

export function App() {
  // const [focus, set_focus] = use_global('navigation.tool')
  const [, set_process] = use_global('process')
  const [theme, set_theme] = use_global('appearance.theme')
  const [density, set_density] = use_global('appearance.density')

  const [toasts, set_toasts] = use_toasts()

  const [open_commands, toggle_open_commands] = useToggle(false)
  const [open_shortcuts, toggle_open_shortcuts] = useToggle(false)
  const [open_preferences, toggle_open_preferences] = useToggle(false)
  const [open_about, toggle_open_about] = useToggle(false)

  expose({
    open_commands() { toggle_open_commands(true) },
    toggle_open_shortcuts, toggle_open_preferences
  })

  const commands = use_commands()

  use_sync_theme(theme)

  use_window_active()

  use_variants({ density })
  
  use_event('mouseenter', (e) => {
    log('enter', e)
  }, document.body)

  use_event('mousemove', (e) => {
    log('move', e)
  })

  use_event('mouseleave', (e) => {
    log('leave', e)
  }, document.body)

  return <>
    <title>Tools</title>

    <div className="app">
      <Sidebar>
        <Menu {...p({ app: 'Tools' })}></Menu>
        <Scroll>
          <Hamburger>
            <Button {...p({ onClick: toggle_open_preferences })}>Preferences</Button>
            <Button {...p({ onClick: toggle_open_shortcuts })}>Keyboard Shortcuts</Button>
            <Button {...p({ onClick: toggle_open_about })}>About</Button>
            <hr {...p({ class: 'hr' })} />
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
        </Scroll>
      </Sidebar>
      <Main></Main>
      <Commands {...p({
        open: open_commands, toggle_open: toggle_open_commands,
        commands
      })}></Commands>
      <Preferences {...p({
        open: open_preferences, toggle_open: toggle_open_preferences,
        preferences: [
          {
            name: 'Theme',
            id: 'appearance.theme',
            type: 'radio',
            options: ['system', "light", "dark"]
          },
          {
            name: 'Density',
            id: 'appearance.density',
            type: 'radio',
            options: ["comfortable", "cozy", "compact"]
          },
        ]
      })}></Preferences>
      <Shortcuts {...p({
        open: open_shortcuts, toggle_open: toggle_open_shortcuts,
        shortcuts, call: command
      })}></Shortcuts>
      <About {...p({
        open: open_about, toggle_open: toggle_open_about,
        name: 'Tools',
        author: 'Headquarters',
        version: '0.0 (2026.09.12)',
        credits: {
          'Code by': [
            'Fira',
            'Fira',
            'Fira',
          ],
          'Design by': [
            'Headquarters Design Team'
          ],
          'Artwork by': [
            'Headquarters Design Team'
          ],
        }
      })}></About>
      <div className="backdrop"></div>
      <div className="toasts">
        <Scroll {...p({ scrollbar: false })}>
          {
            map(toasts, ([id, message]) => (
              <Toast {...p({
                message, close() {
                  use_toasts.set(() => {
                    use_toasts.data.delete(id)
                  })
                }
              })}></Toast>
            ))
          }
        </Scroll>
      </div>
    </div>
  </>
}

export function command(command: command) {
  // no possible race condition, no action could fire before app (ignore if so)
  command_?.(command)
}

let command_: any

let exposed_commands = {}

function expose(command: Record<string, fn>) {
  merge(exposed_commands, command)
}
