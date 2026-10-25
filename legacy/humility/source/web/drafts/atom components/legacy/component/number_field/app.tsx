import { useState } from "react"
import { NumberField } from "./number_field"

export function App() {
  const [value, setValue] = useState(0)

  return (
    <>
      <h1>Number Field</h1>
      <div class="showcase">
        <NumberField placeholder="0" />
        <NumberField value={value} onChange={e => setValue(Number(e.target.value))} />
        <NumberField disabled placeholder="disabled" />
      </div>
    </>
  )
}