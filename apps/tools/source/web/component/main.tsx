import { useEffect, useState } from "react"
import { Editor } from "./editor"
import * as tools from 'action/tools';
import { use_global } from "./app";
import { useMount } from "react-use";

export function Main() {
  const [input, set_input] = useState('')
  const [output, set_output] = useState('')
  const tool = use_global.get('navigation.tool')

  useMount(()=>{
    log(tools)
  })

  useEffect(() => {
    if (has(tools, tool)) {
      // @ts-expect-error tools must have tool
      const result = handle(() => tools[tool](input))
      if(is_error(result)){
        // handle error

        // do nothing
        return 
      }

      set_output(result)
    } 
  }, [tool, input])

  return <div className="main">
    <Editor type='input' value={input} set_value={set_input}></Editor>
    <Editor type='output' value={output} set_value={set_output}></Editor>
  </div>
}