import type { tool, arg } from 'action/tools'

import { tools } from 'action/tools'
// import * as tools from 'action/tools';

import { use_global } from "web/component/app";

import { Process } from "web/component/process";
import { Textarea } from 'web/component/textarea';
import { command } from 'web/component/app'

function args_to_options(args: arg[], stdin: any) {
  const options: any = {}
  for (const arg of args) {
    const key = arg.id ?? variable(arg.name)
    const value = arg.is_stdin && is_given(stdin) ? stdin : arg.value

    options[key] = value
  }

  return options
}

export function Main() {
  const [process, set_process] = use_global('process')
  const [input, set_input] = use_global('input')
  const [output, set_output] = use_global('output')
  const [is_input_visible, set_is_input_visible] = use_global('appearance.layout.input.is visible')
  let can_render_output = false
  let render_output: fn

  let stdin = is_input_visible ? input : nil
  for (const tool of process) {
    const { fn, render_output: current_render_output } = tools[tool.name]

    const result = handle(() => fn(args_to_options(tool.args ?? [], stdin)))
    if (is_error(result)) {
      continue
    }
    stdin = result

    if (is_given(current_render_output)) {
      can_render_output = true
      render_output = current_render_output
    }
  }
  const current_output = stdin
  log(output)

  useEffect(() => {
    set_output(current_output ?? '')
  }, [current_output])
  // useEffect(() => {
  //   set_output(stdin ?? '')
  // }, [JSON.stringify(process), input])

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
        {
          is_input_visible &&
          <div className="panel">
            <div className="title">Input</div>
            <div className="input">
              <Textarea {...p({ value: input, set_value: set_input })}></Textarea>
            </div>
          </div>
        }
        <div className="panel">
          <div className="title">Output</div>
          <div className="output">
            {
              can_render_output ?
                // @ts-expect-error already narrowed
                render_output(output) :
                <Textarea {...p({ value: output, set_value: set_output })}></Textarea>
            }
          </div>
        </div>
      </div>
    </div>
  )
}