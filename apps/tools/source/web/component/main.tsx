import type { tool, arg } from 'action/tools'

import { tools } from 'action/tools'
// import * as tools from 'action/tools';

import { use_global } from "web/component/app";

import { Process } from "web/component/process";
import { Textarea } from 'web/component/textarea';
import { command } from 'web/component/app'
import { Checkbox } from './checkbox';
import { Button } from './button';

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
  // const [output, set_output] = use_global('output')
  const [is_process_visible, set_is_process_visible] = use_global('appearance.layout.process.is visible')
  const [is_input_visible, set_is_input_visible] = use_global('appearance.layout.input.is visible')
  const [is_output_visible, set_is_output_visible] = use_global('appearance.layout.output.is visible')
  let can_render_output = false
  let render_output: fn

  let stdin = is_input_visible ? input : nil
  for (const tool of process) {
    if (!has(tools, tool.name)) {
      continue
    }

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
  const output = stdin ?? ''

  // useEffect(() => {
  //   set_output(current_output ?? '')
  // }, [current_output])
  // useEffect(() => {
  //   set_output(stdin ?? '')
  // }, [JSON.stringify(process), input])

  return (
    <div className="main">
      <div className="titlebar">
        <Button {...p({ class: 'button_toggle_sidebar', onClick() { command('toggle sidebar') } })}>
          <Icon {...p({ name: 'sidebar' })}></Icon>
        </Button>
        <div className="title"></div>
        {/* <button className="view">
          view
        </button> */}
        <Checkbox {...p({ value: is_process_visible, set_value: set_is_process_visible })}>
          process
        </Checkbox>
        <Checkbox {...p({ value: is_input_visible, set_value: set_is_input_visible })}>
          input
        </Checkbox>
        <Checkbox {...p({ value: is_output_visible, set_value: set_is_output_visible })}>
          output
        </Checkbox>
        <Button className="button_minimize">
          <Icon {...p({ name: 'minimize' })}></Icon>
        </Button>
        <Button className="button_maximize">
          <Icon {...p({ name: 'maximize' })}></Icon>
        </Button>
        <Button className="button_close">
          <Icon {...p({ name: 'close' })}></Icon>
        </Button>
      </div>
      <div className="workspace">
        {
          is_process_visible &&
          <div className="panel">
            <div className="title">Process</div>
            <Process {...p({ process, set_process })}></Process>
          </div>
        }
        {
          is_input_visible &&
          <div className="panel">
            <div className="title">Input</div>
            <div className="input">
              <Textarea {...p({ value: input, set_value: set_input })}></Textarea>
            </div>
          </div>
        }
        {
          is_output_visible &&
          <div className="panel">
            <div className="title">Output</div>
            <div className="output">
              {
                can_render_output ?
                  // @ts-expect-error already narrowed
                  render_output(output) :
                  <Textarea {...p({ value: output })}></Textarea>
              }
            </div>
          </div>
        }
      </div>
    </div>
  )
}