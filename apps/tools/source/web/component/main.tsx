import { useEffect, useState } from "react"
import { tools } from "./app"
import { Editor } from "./editor"

export function Main() {
  const [input, set_input] = useState('')
  const [output, set_output] = useState('')

  useEffect(() => {
    set_output(tools.json_to_yaml.fn(input))
  }, [input])

  return <div className="main">
    <Editor type='input' value={input} set_value={set_input}></Editor>
    <Editor type='output' value={output} set_value={set_output}></Editor>
  </div>
}