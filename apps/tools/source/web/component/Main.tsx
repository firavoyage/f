import { useState } from "react"
import { parse, stringify } from "yaml"
import Sidebar from "./Sidebar"
import Textarea from "./textarea"


const tools = {
  json_to_yaml: {
    fn(json: string){
      return stringify(JSON.parse(json))
    }
  }
}

export function Main() {
  const [focused, set_focused] = useState()
  const [input, set_input] = useState('')
  const [output, set_output] = useState('')

  return <div className="main">
    <Sidebar items={['foo', 'bar']} focused={focused} set_focused={set_focused}></Sidebar>
    <Textarea value={input} set_value={set_input}></Textarea>
    <Textarea value={output} set_value={set_output}></Textarea>
  </div>
}