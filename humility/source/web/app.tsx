import mousetrap from 'mousetrap';
import { useState, useEffect } from "react"

export function App() {
  console.log(mousetrap)
  useEffect(()=>{
    mousetrap.bind('ctrl+shift+/', (e)=>{
      console.log(e)
      console.log('open shortcuts help')
    })
    // mousetrap.bind('ctrl+?', (e)=>{
    //   console.log(e)
    //   console.log('open shortcuts help')
    // })
    mousetrap.bind('ctrl+,', (e)=>{
      console.log(e)
      console.log('open settings')
    })
  })
}
