import * as tools from 'action/tools';

import { use_global } from "web/component/app";

import { Editor } from "web/component/editor"
import { Process } from "web/component/process";

import { useMount } from "react-use";

export function Main() {
  const [process, set_process] = use_global('process')
  const [input, set_input] = use_global('input')
  const [output, set_output] = use_global('output')

  useMount(()=>{
    log(tools)
  })

  // useEffect(() => {
  //   if (has(tools, tool)) {
  //     // @ts-expect-error tools must have tool
  //     const result = handle(() => tools[tool](input))
  //     if(is_error(result)){
  //       // handle error

  //       // do nothing
  //       return 
  //     }

  //     set_output(result)
  //   } 
  // }, [tool, input])

  return <div className="main">
    <Editor type='process' value={process} set_value={set_process} should_show_textarea={false}>
      <Process {...p({ process, set_process })}></Process>
    </Editor>
    <Editor type='input' value={input} set_value={set_input}></Editor>
    <Editor type='output' value={output} set_value={set_output}></Editor>
  </div>
}