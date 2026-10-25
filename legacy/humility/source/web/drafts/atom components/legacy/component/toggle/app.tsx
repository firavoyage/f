import { useState } from "react"
import { Toggle } from "./toggle"

export function App() {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <h1>Toggle</h1>
      <div class="showcase">
        <Toggle />
        <Toggle checked />
        <Toggle disabled />
        <Toggle checked disabled />
        <Toggle label="with label" checked={checked} onChange={setChecked} />
      </div>
    </>
  )
}