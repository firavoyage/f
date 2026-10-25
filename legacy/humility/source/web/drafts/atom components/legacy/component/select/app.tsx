import { useState } from "react"
import { Select } from "./select"

export function App() {
  const [value, setValue] = useState("")

  const options = [
    { value: "apple", label: "apple" },
    { value: "banana", label: "banana" },
    { value: "cherry", label: "cherry" },
    { value: "date", label: "date" },
  ]

  return (
    <>
      <h1>Select</h1>
      <div class="showcase">
        <Select options={options} value={value} onChange={setValue} placeholder="choose fruit" />
        <Select options={options} value="banana" />
        <Select options={options} disabled placeholder="disabled" />
      </div>
    </>
  )
}