import { useState } from "react"
import { Slider } from "./slider"

export function App() {
  const [value, setValue] = useState(50)

  return (
    <>
      <h1>Slider</h1>
      <div class="showcase">
        <Slider min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} />
        <Slider min={0} max={100} defaultValue={25} />
        <Slider min={0} max={100} disabled />
      </div>
    </>
  )
}