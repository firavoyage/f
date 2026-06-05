import React, { useState } from 'react'
import '../adwaita.css'
import './App.css'

import { Button } from './Button'
import { Checkbox } from './Checkbox'
import { Input } from './Input'
import { Switch } from './Switch'
import { Slider } from './Slider'
import { Select } from './Select'
import { NumberField } from './NumberField'
import { ScrollArea } from './ScrollArea'
import { Tooltip } from './Tooltip'

function App() {
  const [checkbox, setCheckbox] = useState(false)
  const [switch_, setSwitch] = useState(false)
  const [slider, setSlider] = useState(50)
  const [selectValue, setSelectValue] = useState('')
  const [numberValue, setNumberValue] = useState(42)

  return (
    <div className="app">
      <h1>Adwaita Atom Components</h1>

      <section>
        <h2>Button</h2>
        <div className="section">
          <div className="row">
            <span className="label">primary</span>
            <Button variant="primary">Save Changes</Button>
            <Button variant="primary" size="small">Small</Button>
            <Button variant="primary" size="large">Large</Button>
          </div>
          <div className="row">
            <span className="label">secondary</span>
            <Button variant="secondary">Cancel</Button>
            <Button variant="secondary" shape="pill">Pill</Button>
          </div>
          <div className="row">
            <span className="label">flat</span>
            <Button variant="flat">Flat Button</Button>
          </div>
          <div className="row">
            <span className="label">destructive</span>
            <Button variant="destructive">Delete</Button>
          </div>
          <div className="row">
            <span className="label">disabled</span>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </section>

      <section>
        <h2>Checkbox</h2>
        <div className="section">
          <div className="row">
            <Checkbox checked={false} onCheckedChange={setCheckbox} />
            <span>unchecked</span>
          </div>
          <div className="row">
            <Checkbox checked={true} onCheckedChange={setCheckbox} />
            <span>checked</span>
          </div>
          <div className="row">
            <Checkbox disabled>disabled</Checkbox>
          </div>
        </div>
      </section>

      <section>
        <h2>Input</h2>
        <div className="section">
          <div className="row">
            <Input placeholder="enter text" />
          </div>
          <div className="row">
            <Input placeholder="small" size="small" style={{ width: 200 }} />
          </div>
          <div className="row">
            <Input placeholder="large" size="large" style={{ width: 300 }} />
          </div>
          <div className="row">
            <Input placeholder="disabled" disabled style={{ width: 200 }} />
          </div>
        </div>
      </section>

      <section>
        <h2>Switch</h2>
        <div className="section">
          <div className="row">
            <Switch checked={false} onCheckedChange={setSwitch} />
            <span>off</span>
          </div>
          <div className="row">
            <Switch checked={true} onCheckedChange={setSwitch} />
            <span>on</span>
          </div>
          <div className="row">
            <Switch disabled />
            <span>disabled</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Slider</h2>
        <div className="section">
          <div className="row">
            <Slider value={slider} onChange={(e) => setSlider(Number(e.target.value))} style={{ width: 200 }} />
          </div>
          <div className="row">
            <Slider value={slider} onChange={(e) => setSlider(Number(e.target.value))} showValue style={{ width: 200 }} />
          </div>
          <div className="row">
            <Slider defaultValue={25} min={0} max={100} step={25} style={{ width: 200 }} />
          </div>
        </div>
      </section>

      <section>
        <h2>Select</h2>
        <div className="section">
          <div className="row">
            <Select.Root value={selectValue} onValueChange={setSelectValue}>
              <Select.Trigger>
                <Select.Value placeholder="choose option" />
                <Select.Icon />
              </Select.Trigger>
              <Select.Popup>
                <Select.Listbox>
                  <Select.Item value="a">option a</Select.Item>
                  <Select.Item value="b">option b</Select.Item>
                  <Select.Item value="c">option c</Select.Item>
                </Select.Listbox>
              </Select.Popup>
            </Select.Root>
          </div>
        </div>
      </section>

      <section>
        <h2>NumberField</h2>
        <div className="section">
          <div className="row">
            <NumberField.Root value={numberValue} onValueChange={setNumberValue} min={0} max={100} step={1}>
              <NumberField.Input />
              <NumberField.Decrement />
              <NumberField.Increment />
            </NumberField.Root>
          </div>
        </div>
      </section>

      <section>
        <h2>ScrollArea</h2>
        <div className="section">
          <ScrollArea.Root>
            <ScrollArea.Viewport style={{ height: 100 }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ScrollArea.Viewport>
          </ScrollArea.Root>
        </div>
      </section>

      <section>
        <h2>Tooltip</h2>
        <div className="section">
          <div className="row">
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button>hover me</Button>
              </Tooltip.Trigger>
              <Tooltip.Popup>
                helpful tip
              </Tooltip.Popup>
            </Tooltip.Root>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App