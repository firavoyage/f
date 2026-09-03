import type { tool, arg } from 'action/tools'

import { tools } from 'action/tools'
// import * as tools from 'action/tools';

import { use_global } from "web/component/app";

import { Process } from "web/component/process";
import { Textarea } from 'web/component/textarea';
import { command } from 'web/component/app'

function args_to_options(args: arg[], stdin: any) {
  log({args, stdin})

  const options: any = {}
  for (const arg of args) {
    const key = arg.id ?? variable(arg.name)
    const value = arg.is_stdin ? stdin : arg.value

    options[key] = value
  }
  return options
}

export function Main() {
  const [process, set_process] = use_global('process')
  const [input, set_input] = use_global('input')
  const [output, set_output] = use_global('output')
  const [is_input_visible, set_is_input_visible] = use_global('appearance.layout.input.is visible')

  useEffect(() => {
    let stdin = is_input_visible ? input : nil
    for (const tool of process as tool[]) {
      if (has(tools, tool.name)) {
        const result = handle(() => tools[tool.name].fn(args_to_options(tool.args ?? [], stdin)))
        if (is_error(result)) {
          continue
        }
        stdin = result
      }
    }

    set_output(stdin)
  }, [JSON.stringify(process), input])

  return (
    <div className="main">
      <div className="titlebar">
        <button className="button_toggle_sidebar" {...p({ onClick() { command('toggle sidebar') } })}>
          <Icon {...p({ name: 'sidebar' })}></Icon>
        </button>
        <div className="title"></div>
        {/* <button className="view">
          view
        </button> */}
        <button className="button_minimize">
          <Icon {...p({ name: 'minimize' })}></Icon>
        </button>
        <button className="button_maximize">
          <Icon {...p({ name: 'maximize' })}></Icon>
        </button>
        <button className="button_close">
          <Icon {...p({ name: 'close' })}></Icon>
        </button>
      </div>
      <div className="workspace">
        <div className="panel">
          <div className="title">Process</div>
          <Process {...p({ process, set_process })}></Process>
        </div>
        <div className="panel">
          <div className="title">Input</div>
          <Textarea {...p({ value: input, set_value: set_input })}></Textarea>
        </div>
        <div className="panel">
          <div className="title">Output</div>
          <Textarea {...p({ value: output, set_value: set_output })}></Textarea>
        </div>
      </div>
    </div>
  )
}