import { useState, useEffect } from "react"

import { bind } from './keyboard';

export function App() {
  useEffect(()=>{
    bind('ctrl+shift+/', (e)=>{
      console.log(e)
      console.log('open shortcuts help')
    })
    // mousetrap.bind('ctrl+?', (e)=>{
    //   console.log(e)
    //   console.log('open shortcuts help')
    // })
    bind('ctrl+,', (e)=>{
      console.log(e)
      console.log('open settings')
    })
  })
}
