import { useState, useEffect } from "react"
import { bind } from 'web/keyboard';
import { sync_theme } from 'web/sync_theme';

import 'web/adwaita.css'
import 'web/app.css'

export function App() {
  useEffect(()=>{
    sync_theme('system')

    bind('ctrl+p', (e)=>{
      e.preventDefault() // print
      console.log(e)
      console.log('search recent items')
    })
    bind('ctrl+shift+p', (e)=>{
      e.preventDefault() // browser console command panel?
      console.log(e)
      console.log('search commands')
    })
    bind('ctrl+?', (e)=>{
      console.log(e)
      console.log('open shortcuts help')
    })
    bind('ctrl+,', (e)=>{
      console.log(e)
      console.log('open settings')
    })
  })
}
