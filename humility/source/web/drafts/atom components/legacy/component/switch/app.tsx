import { useState } from "react"
import { Switch } from "./switch"

export function App() {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <h1>Switch</h1>
      <div class="showcase">
        <Switch />
        <Switch checked />
        <Switch disabled />
        <Switch checked disabled />
        <Switch checked={checked} onChange={setChecked} />
      </div>
    </>
  )
}