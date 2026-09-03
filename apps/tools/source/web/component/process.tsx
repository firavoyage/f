import type { tool } from 'action/tools'

import { Arg } from './arg'

type process = {
  process: tool[]
  set_process: any
}

export function Process(props: process) {
  const { process, set_process } = props

  return <div className="process">
    {
      map(process, (item, index) => (
        <div className="item">
          <div className="title">
            <div className="name">{item.name}</div>
            <button className="button_delete" {...p({
              onclick() {
                set_process(() => {
                  process.splice(index, 1)
                })
              }
            })}>
              <Icon {...p({ name: 'delete' })}></Icon>
            </button>
          </div>
          <div className="args">{map(item.args ?? [], arg => (
            <div className="arg">
              <Arg {...p({
                ...arg, set_value(new_value: any) {
                  set_process(() => {
                    arg.value = new_value
                  })
                }
              })}></Arg>
            </div>
          ))}</div>
        </div>
      ))
    }
  </div>
}