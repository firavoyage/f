import 'web/design/utilitarian/utilitarian.css'
import 'web/design/app.css'

import { useState, useEffect } from "react"
import { use_bind } from 'web/lib/keyboard.use';
import { use_sync_theme } from "web/lib/sync_theme.use";
import { Main } from "web/component/main";
import { use_window_active } from 'web/lib/window.use';

export function App() {
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
      <Main></Main>
    </div>
  </>
}
