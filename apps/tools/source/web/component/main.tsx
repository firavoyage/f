import { useEffect, useState } from "react"
import Textarea from "./textarea"
import { tools } from "./app"

export function Main() {
  const [input, set_input] = useState('')
  const [output, set_output] = useState('')

  useEffect(() => {
    set_output(tools.json_to_yaml.fn(input))
  })

  return <div className="main">
    <Textarea value={input} set_value={set_input}></Textarea>
    <Textarea value={output} set_value={set_output}></Textarea>
  </div>
}