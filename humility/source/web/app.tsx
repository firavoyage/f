import { useState, useEffect } from "react"
import { bind } from 'web/keyboard';
import { sync_theme } from 'web/sync_theme';

import 'web/adwaita.css'
import 'web/app.css'

export function App() {
  useEffect(()=>{
    sync_theme('system')

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
