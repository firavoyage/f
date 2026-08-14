import { useEffect, useState } from "react"
import { Editor } from "./editor"
import * as tools from 'action/tools';
import { use_global } from "./app";

export function Main() {
  const [input, set_input] = useState('')
  const [output, set_output] = useState('')
  const tool = use_global.get('navigation.tool')

  useEffect(() => {
    log(tools)
    if (has(tools, tool)) {
    } 
    // set_output(tools.json_to_yaml.fn(input))
  })

  return <div className="main">
    <Editor type='input' value={input} set_value={set_input}></Editor>
    <Editor type='output' value={output} set_value={set_output}></Editor>
  </div>
}