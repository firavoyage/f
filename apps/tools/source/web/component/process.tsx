import type { tool } from 'action/tools'
import { use_global } from 'web/component/app'

import { Arg } from './arg'

type process = {
  process: tool[]
  set_process: any
}

export function Process(props: process) {
  const [is_input_given] = use_global('appearance.layout.input.is visible')

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
              {
                arg.is_stdin && (index > 0 || is_input_given) ?
                  <>
                    <span className="name">{arg.name}</span>
                    <span className="stdin">stdin</span>
                  </> :
                  <Arg {...p({
                    ...arg, set_value(new_value: any) {
                      set_process(() => {
                        arg.value = new_value
                      })
                    }
                  })}></Arg>
              }
            </div>
          ))}</div>
        </div>
      ))
    }
  </div>
}