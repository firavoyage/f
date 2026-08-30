import type { tool, arg } from 'action/tools'

import { tools } from 'action/tools'
// import * as tools from 'action/tools';

import { normalize_id } from 'lib/normalize_id';

import { use_global } from "web/component/app";

import { Process } from "web/component/process";
import { Textarea } from 'web/component/textarea';
import { call } from 'web/component/app'

function args_to_options(args: arg[]) {
  const options: any = {}
  for (const arg of args) {
    const key = arg.id ?? normalize_id(arg.name)
    // todo
    const value = arg.type == 'number' ? +arg.value : arg.value

    options[key] = value
  }
  return options
}

export function Main() {
  const [process, set_process] = use_global('process')
  const [input, set_input] = use_global('input')
  const [output, set_output] = use_global('output')

  useEffect(() => {
    let stdin = input
    for (const tool of process as tool[]) {
      if (has(tools, tool.name)) {
        const result = handle(() => tools[tool.name].fn(stdin, args_to_options(tool.args ?? [])))
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
      <div className="title_bar">
        <button className="sidebar" {...p({ onClick() { call('toggle sidebar') } })}>
          toggle sidebar
        </button>
        <div className="title"></div>
        <button className="view">
          view
        </button>
        <button className="minimize">
          minimize
        </button>
        <button className="maximize">
          maximize
        </button>
        <button className="close">
          close
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