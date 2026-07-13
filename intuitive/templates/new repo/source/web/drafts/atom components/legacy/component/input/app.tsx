import { useState } from "react"
import { Input } from "./input"

export function App() {
  const [value, setValue] = useState("")

  return (
    <>
      <h1>Input</h1>
      <div class="showcase">
        <Input placeholder="placeholder" />
        <Input value={value} onChange={e => setValue(e.target.value)} />
        <Input disabled placeholder="disabled" />
        <Input type="password" placeholder="password" />
      </div>
    </>
  )
}