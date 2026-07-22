import { useState, useEffect } from "react"
import { use_bind } from 'web/lib/keyboard.use';
import { sync_theme } from 'web/lib/sync_theme';

// import 'web/design/utilitarian/utilitarian.css'
// import 'web/design/utilitarian/utilitarian.styl'
import 'web/app.styl'

import { call } from "web/lib/call";
import { useAsync } from "react-use";

export function App() {
  // const { value } = useAsync(async () => await call('mock', {hi:true}))

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

  useEffect(() => {
    sync_theme('system')
  })

  return <>
    <title>tools</title>
  </>
}
