import { useState } from "react"
import { Checkbox } from "./checkbox"

export function App() {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <h1>Checkbox</h1>
      <div class="showcase">
        <Checkbox />
        <Checkbox checked />
        <Checkbox disabled />
        <Checkbox checked disabled />
        <Checkbox label="with label" checked={checked} onChange={setChecked} />
      </div>
    </>
  )
}