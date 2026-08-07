import 'web/design/utilitarian/utilitarian.css'
import 'web/design/app.css'

import { useState, useEffect } from "react"
import { use_bind } from 'web/lib/keyboard.use';
import { use_sync_theme } from "web/lib/sync_theme.use";
import { Main } from "web/component/main";
import { use_window_active } from 'web/lib/window.use';
import { Sidebar } from './sidebar';

import { parse, stringify } from "yaml"

export const tools = {
  json_to_yaml: {
    fn(json: string) {
      const result = handle(() => JSON.parse(json))

      if (is_error(result)) {
        return ''
      }

      return stringify(result)
    }
  }
}

const list = ["yaml", "json", "toml"]

export const use_global = state({
  is_sidebar_on: true,
  'navigation.path': '',
  'navigation.page': '',
  'navigation.tool': '',
  'appearance.theme': '',
}, {
  persist: 'tools_v2',
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
  init(state) {
    const path = state['navigation.path']
    if (path == 'main') {
      state['navigation.page'] = path
    } else {
      state['navigation.page'] = 'tool'

      // todo: correct tool
      state['navigation.tool'] = path
    }
  },
  change(state) {
    log(state)
    state['navigation.path'] = state['navigation.page'] == 'main' ?
      'main' : state['navigation.tool']
  }
})

export function App() {
  const [focused, set_focused] = useState(0)

  useEffect(() => {
    log('app mounts')

    // log('value', value)
  })

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

  return <>
    <title>Tools</title>

    <div className="app">
      <Sidebar items={list} focused={focused} set_focused={set_focused}></Sidebar>
      <Main></Main>
    </div>
  </>
}
