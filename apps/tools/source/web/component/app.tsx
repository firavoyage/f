import 'web/design/utilitarian/utilitarian.css'
import 'web/design/app.css'

import { useState, useEffect } from "react"
import { use_bind } from 'web/lib/keyboard.use';
import { use_sync_theme } from "web/lib/sync_theme.use";
import { Main } from "web/component/main";
import { use_window_active } from 'web/lib/window.use';
import Sidebar from './sidebar';

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
    <title>tools</title>

    <div className="app">
      <Sidebar items={list} focused={focused} set_focused={set_focused}>
      </Sidebar>
      <Main></Main>
      <div {...p({ foo: true, 'stroke-width': "2", class: 'foo' })}></div>
    </div>
  </>
}
