import type { tool } from 'action/tools'

import { Arg } from './arg'
import { use_global } from './app'

type process = {
  process: tool[]
  set_process: any
}

export function Process(props: process) {

  function set_value(new_value: any) {
    set_process(() => {
      props.value = new_value
    })
  }

  const { process, set_process } = props

  return <div className="process">
    {
      map(process, (item, index) => (
        <div className="item">
          <div className="tool">{item.name}</div>
          <button className="delete" {...p({
            onclick() {
              set_process(() => {
                process.splice(index, 1)
              })
            }
          })}>delete</button>
          <div className="args">{map(item.args ?? [], arg => (
            <div className="arg">
              <Arg {...p({ ...arg })}></Arg>
            </div>
          ))}</div>
        </div>
      ))
    }
  </div>
}