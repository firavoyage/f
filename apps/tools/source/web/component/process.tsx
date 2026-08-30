import type { tool } from 'action/tools'

import { Textarea } from "web/component/textarea"

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
          <div className="tool">{item.name}</div>
          <button className="delete" {...p({
            onclick() {
              set_process(() => {
                process.splice(index, 1)
              })
            }
          })}>delete</button>
          <div className="args">{map(item.args, arg => (
            <div className="arg">
              <div className="name">{arg.name}</div>
              <Textarea {...p({
                value: arg.value, set_value(new_value: any) {
                  set_process(() => {
                    arg.value = new_value
                  })
                }
              })}></Textarea>
            </div>
          ))}</div>
        </div>
      ))
    }
  </div>
}