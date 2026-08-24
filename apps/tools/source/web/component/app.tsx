import 'web/design/utilitarian/utilitarian.css'
import 'web/design/app.css'

import { use_bind } from 'web/lib/keyboard.use';
import { use_sync_theme } from "web/lib/sync_theme.use";
import { Main } from "web/component/main";
import { use_window_active } from 'web/lib/window.use';
import { Sidebar } from 'web/component/sidebar';

import { List } from 'web/component/list';

import { items, tool_to_args } from 'action/tools';

import type { item } from 'web/component/process'
import { useMount } from 'react-use';

import { cloneDeep } from 'lodash-es'

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
  should_sync_url: true,
  sync_url_options: {
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

export function App() {
  // const [focus, set_focus] = use_global('navigation.tool')

  // useEffect(() => {
  //   log('app mounts')

  //   // log('value', value)
  // })

  use_bind('ctrl+p', (e) => {
    e.preventDefault() // print
    log(e)
    log('search recent items')
  })
  use_bind('ctrl+shift+p', (e) => {
    e.preventDefault() // browser console command panel?
    log(e)
    log('search commands')
  })
  use_bind('ctrl+?', (e) => {
    log(e)
    log('open shortcuts help')
  })
  use_bind('ctrl+,', (e) => {
    log(e)
    log('open settings')
  })

  use_sync_theme('system')

  use_window_active()

  useMount(() => {
    log(tool_to_args)
  })

  return <>
    <title>Tools</title>

    <div className="app">
      <Sidebar>
        <List {...p({
          items, set_focus(tool: string) {
            use_global.set((process: item[]) => {
              process.push(cloneDeep({
                tool,
                args: tool_to_args[tool] ?? []
              }))
            }, 'process')
          }
        })}></List>
      </Sidebar>
      <Main></Main>
    </div>
  </>
}
