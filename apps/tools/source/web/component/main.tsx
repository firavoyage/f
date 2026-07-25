import { useEffect, useState } from "react"
import { parse, stringify } from "yaml"
import Sidebar from "./sidebar"
import Textarea from "./textarea"


const tools = {
  json_to_yaml: {
    fn(json: string) {
      const result = handle(() => JSON.parse(json))

      if(is_error(result)){
        return ''
      }

      return stringify(result)
    }
  }
}

export function Main() {
  const [focused, set_focused] = useState(0)
  const [input, set_input] = useState('')
  const [output, set_output] = useState('')

  useEffect(() => {
    set_output(tools.json_to_yaml.fn(input))
  })

  return <div className="main">
    <Sidebar items={['foo', 'bar']} focused={focused} set_focused={set_focused}>
    </Sidebar>
    <Textarea value={input} set_value={set_input}></Textarea>
    <Textarea value={output} set_value={set_output}></Textarea>
  </div>
}