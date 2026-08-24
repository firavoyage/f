import { Textarea } from "web/component/textarea"

type process = {
  process: item[]
  set_process: any
}

export type item = {
  tool: string
  args: arg[] // = []
  // args?: arg[]
}

export type arg = {
  name: string
  id?: string // = name to lower case rp space w underscore
  type: type
  variant?: string // how it should be rendered (e.g. checkbox or slider for bool?)
  value: any // = default value
  default_value?: any
}

type type = 'number' | 'string'

export function Process(props: process) {
  const { process, set_process } = props

  return <div className="process">
    {
      map(process, item => (
        <div className="item">
          <div className="tool">{item.tool}</div>
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