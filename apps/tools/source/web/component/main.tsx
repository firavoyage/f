import * as tools from 'action/tools';

import { use_global } from "web/component/app";

import { Editor } from "web/component/editor"
import { arg, Process } from "web/component/process";

import { useMount } from "react-use";
import { normalize_id } from 'lib/normalize_id';

function args_to_options(args: arg[]) {
  const options: any = {}
  for (const arg of args) {
    const key = arg.id ?? normalize_id(arg.name)
    const value = arg.type == 'number'? +arg.value: arg.value

    options[key] = value
  }
  return options
}

export function Main() {
  const [process, set_process] = use_global('process')
  const [input, set_input] = use_global('input')
  const [output, set_output] = use_global('output')

  useMount(()=>{
    log(tools)
  })

  useEffect(() => {
    let stdin = input
    for (const item of process) {
      if (has(tools, item.tool)) {
        // @ts-expect-error 
        const result = handle(() => tools[item.tool](stdin, args_to_options(item.args)))
        if(is_error(result)){
          continue
        }
        stdin = result
      } 
    }

    set_output(stdin)
  }, [JSON.stringify(process), input])

  return <div className="main">
    <Editor type='process' value={process} set_value={set_process} should_show_textarea={false}>
      <Process {...p({ process, set_process })}></Process>
    </Editor>
    <Editor type='input' value={input} set_value={set_input}></Editor>
    <Editor type='output' value={output} set_value={set_output}></Editor>
  </div>
}