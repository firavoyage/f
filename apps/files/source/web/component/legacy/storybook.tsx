import { useState } from "react"
import { Button } from "./Button"
import { Checkbox } from "./Checkbox"
import { ContextMenu } from "./ContextMenu"
import { Select } from "./Select"
import { Input } from "./Input"
import { NumberField } from "./NumberField"
import { ScrollArea } from "./ScrollArea"
import { Slider } from "./Slider"
import { Switch } from "./Switch"
import { Toggle } from "./Toggle"
import { Tooltip } from "./Tooltip"

export function App() {
  const [buttonClick, setButtonClick] = useState(0)
  const [checkbox, setCheckbox] = useState(false)
  const [contextMenuPos, setContextMenuPos] = useState<{x: number, y: number} | null>(null)
  const [select, setSelect] = useState("")
  const [input, setInput] = useState("")
  const [number, setNumber] = useState(0)
  const [slider, setSlider] = useState(50)
  const [switchOn, setSwitchOn] = useState(false)
  const [toggleOn, setToggleOn] = useState(false)
  const [tooltipShow, setTooltipShow] = useState(false)

  return (
    <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <h2>Button</h2>
        <Button onClick={() => setButtonClick(c => c + 1)}>clicked {buttonClick}</Button>
      </div>

      <div>
        <h2>Checkbox</h2>
        <Checkbox checked={checkbox} onChange={setCheckbox}>agree</Checkbox>
      </div>

      <div>
        <h2>ContextMenu</h2>
        <div style={{ border: "1px solid #ccc", padding: 20, minHeight: 100 }} onContextMenu={e => { e.preventDefault(); setContextMenuPos({ x: e.clientX, y: e.clientY }) }}>
          right click here
        </div>
        {contextMenuPos && <ContextMenu x={contextMenuPos.x} y={contextMenuPos.y} onClose={() => setContextMenuPos(null)} />}
      </div>

      <div>
        <h2>Select</h2>
        <Select value={select} onChange={setSelect} options={[{ value: "a", label: "Option A" }, { value: "b", label: "Option B" }, { value: "c", label: "Option C" }]} />
      </div>

      <div>
        <h2>Input</h2>
        <Input value={input} onChange={setInput} placeholder="type here" />
      </div>

      <div>
        <h2>NumberField</h2>
        <NumberField value={number} onChange={setNumber} />
      </div>

      <div>
        <h2>ScrollArea</h2>
        <ScrollArea style={{ height: 100, width: 200 }}>
          <div style={{ height: 300 }}>tall content</div>
        </ScrollArea>
      </div>

      <div>
        <h2>Slider</h2>
        <Slider value={slider} onChange={setSlider} min={0} max={100} />
      </div>

      <div>
        <h2>Switch</h2>
        <Switch checked={switchOn} onChange={setSwitchOn}>wifi</Switch>
      </div>

      <div>
        <h2>Toggle</h2>
        <Toggle checked={toggleOn} onChange={setToggleOn}>dark mode</Toggle>
      </div>

      <div>
        <h2>Tooltip</h2>
        <Tooltip content="hello world" show={tooltipShow}>
          <button onMouseEnter={() => setTooltipShow(true)} onMouseLeave={() => setTooltipShow(false)}>hover me</button>
        </Tooltip>
      </div>
    </div>
  )
}