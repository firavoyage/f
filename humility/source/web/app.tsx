import { useState, useEffect } from "react"
import { use_bind } from 'web/lib/keyboard.use';
import { sync_theme } from 'web/lib/sync_theme';

import { port } from 'web/port.json';

import 'web/design/adwaita/adwaita.css'
import 'web/app.css'

export function App() {
  useEffect(() => {
    // console.log(port)

    console.log('app mounts')
  })

  use_bind('ctrl+p', (e) => {
    e.preventDefault() // print
    console.log(e)
    console.log('search recent items')
  })
  use_bind('ctrl+shift+p', (e) => {
    e.preventDefault() // browser console command panel?
    console.log(e)
    console.log('search commands')
  })
  use_bind('ctrl+?', (e) => {
    console.log(e)
    console.log('open shortcuts help')
  })
  use_bind('ctrl+,', (e) => {
    console.log(e)
    console.log('open settings')
  })

  useEffect(() => {
    sync_theme('system')
  })
}
