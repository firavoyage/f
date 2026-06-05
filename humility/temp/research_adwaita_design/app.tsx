import React, { useState, useEffect } from 'react'
import './adwaita.css'
import './app.css'

function useCssVar(name: string) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
    setValue(v || `var(${name})`)
  }, [name])

  return value
}

function App() {
  return (
    <div className="demo-container">
      <h1>Adwaita Design Tokens</h1>
      <p>CSS variables from libadwaita documentation. Toggle dark mode to see variations.</p>

      <div className="spacer"></div>

      <section className="section">
        <h2>Accent Colors</h2>
        <p>The primary interaction color. Default is blue.</p>
        <div className="color-grid">
          <ColorSwatch name="accent-bg" var="accent-bg-color" />
          <ColorSwatch name="accent-fg" var="accent-fg-color" />
          <ColorSwatch name="accent" var="accent-color" />
        </div>

        <div className="spacer"></div>

        <h3>Accent Palette</h3>
        <div className="color-grid">
          <ColorSwatch name="blue" var="accent-blue" />
          <ColorSwatch name="teal" var="accent-teal" />
          <ColorSwatch name="green" var="accent-green" />
          <ColorSwatch name="yellow" var="accent-yellow" />
          <ColorSwatch name="orange" var="accent-orange" />
          <ColorSwatch name="red" var="accent-red" />
          <ColorSwatch name="pink" var="accent-pink" />
          <ColorSwatch name="purple" var="accent-purple" />
          <ColorSwatch name="slate" var="accent-slate" />
        </div>
      </section>

      <section className="section">
        <h2>Semantic Colors</h2>

        <h3>Success</h3>
        <div className="color-grid">
          <ColorSwatch name="success-bg" var="success-bg-color" />
          <ColorSwatch name="success-fg" var="success-fg-color" />
          <ColorSwatch name="success" var="success-color" />
        </div>

        <h3>Warning</h3>
        <div className="color-grid">
          <ColorSwatch name="warning-bg" var="warning-bg-color" />
          <ColorSwatch name="warning-fg" var="warning-fg-color" />
          <ColorSwatch name="warning" var="warning-color" />
        </div>

        <h3>Error</h3>
        <div className="color-grid">
          <ColorSwatch name="error-bg" var="error-bg-color" />
          <ColorSwatch name="error-fg" var="error-fg-color" />
          <ColorSwatch name="error" var="error-color" />
        </div>

        <h3>Destructive</h3>
        <div className="color-grid">
          <ColorSwatch name="destructive-bg" var="destructive-bg-color" />
          <ColorSwatch name="destructive-fg" var="destructive-fg-color" />
          <ColorSwatch name="destructive" var="destructive-color" />
        </div>
      </section>

      <section className="section">
        <h2>Surface Colors</h2>

        <h3>Window</h3>
        <div className="color-grid">
          <ColorSwatch name="window-bg" var="window-bg-color" />
          <ColorSwatch name="window-fg" var="window-fg-color" />
        </div>

        <h3>View</h3>
        <div className="color-grid">
          <ColorSwatch name="view-bg" var="view-bg-color" />
          <ColorSwatch name="view-fg" var="view-fg-color" />
        </div>

        <h3>Header Bar</h3>
        <div className="color-grid">
          <ColorSwatch name="headerbar-bg" var="headerbar-bg-color" />
          <ColorSwatch name="headerbar-fg" var="headerbar-fg-color" />
          <ColorSwatch name="headerbar-shade" var="headerbar-shade-color" />
        </div>

        <h3>Sidebar</h3>
        <div className="color-grid">
          <ColorSwatch name="sidebar-bg" var="sidebar-bg-color" />
          <ColorSwatch name="sidebar-fg" var="sidebar-fg-color" />
          <ColorSwatch name="sidebar-border" var="sidebar-border-color" />
        </div>

        <h3>Card</h3>
        <div className="color-grid">
          <ColorSwatch name="card-bg" var="card-bg-color" />
          <ColorSwatch name="card-fg" var="card-fg-color" />
          <ColorSwatch name="card-shade" var="card-shade-color" />
        </div>

        <h3>Dialog & Popover</h3>
        <div className="color-grid">
          <ColorSwatch name="dialog-bg" var="dialog-bg-color" />
          <ColorSwatch name="popover-bg" var="popover-bg-color" />
          <ColorSwatch name="popover-shade" var="popover-shade-color" />
        </div>
      </section>

      <section className="section">
        <h2>Palette</h2>
        <p>Full GNOME color palette for general use.</p>

        <PaletteRow name="Blue" prefix="blue" />
        <PaletteRow name="Green" prefix="green" />
        <PaletteRow name="Yellow" prefix="yellow" />
        <PaletteRow name="Orange" prefix="orange" />
        <PaletteRow name="Red" prefix="red" />
        <PaletteRow name="Purple" prefix="purple" />
        <PaletteRow name="Light" prefix="light" />
        <PaletteRow name="Dark" prefix="dark" />
      </section>

      <section className="section">
        <h2>Typography</h2>
        <div className="font-demo">
          <div className="font-row">
            <div className="font-label">Document Font (Adwaita Sans)</div>
            <div className="font-sample font-document">The quick brown fox jumps over the lazy dog</div>
          </div>
          <div className="font-row">
            <div className="font-label">Monospace Font (Adwaita Mono)</div>
            <div className="font-sample font-monospace">const foo = "bar"; echo $foo</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Buttons</h2>
        <div className="btn-demo">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-suggested">Suggested</button>
          <button className="btn btn-destructive">Destructive</button>
          <button className="btn btn-flat">Flat</button>
          <button className="btn btn-primary btn-pill">Pill Button</button>
          <button className="btn btn-primary btn-circular">+</button>
        </div>
      </section>

      <section className="section">
        <h2>Helpers</h2>
        <div className="helper-grid">
          <HelperItem name="border-opacity" var="border-opacity" />
          <HelperItem name="dim-opacity" var="dim-opacity" />
          <HelperItem name="disabled-opacity" var="disabled-opacity" />
          <HelperItem name="window-radius" var="window-radius" />
        </div>
      </section>

      <section className="section">
        <h2>Card Component</h2>
        <div className="card card-shade">
          <h4>Card Title</h4>
          <p>This is a card with the Adwaita card colors. Cards have a subtle background and use card-fg-color for text.</p>
        </div>
      </section>

      <section className="section">
        <h2>Expanded Tokens (From Mimics)</h2>

        <h3>Focus Ring</h3>
        <div className="token-grid">
          <TokenItem name="focus-ring-color" var="focus-ring-color" isColor />
          <TokenItem name="focus-ring-width" var="focus-ring-width" />
          <TokenItem name="focus-ring-offset" var="focus-ring-offset" />
        </div>

        <h3>Button Sizes</h3>
        <div className="token-grid">
          <TokenItem name="size-button-mini" var="size-button-mini" />
          <TokenItem name="size-button-small" var="size-button-small" />
          <TokenItem name="size-button-medium" var="size-button-medium" />
          <TokenItem name="size-button-large" var="size-button-large" />
          <TokenItem name="size-button-huge" var="size-button-huge" />
          <TokenItem name="size-button-mega" var="size-button-mega" />
        </div>

        <h3>Input</h3>
        <div className="token-grid">
          <TokenItem name="input-height" var="input-height" />
          <TokenItem name="input-padding" var="input-padding" />
          <TokenItem name="input-radius" var="input-radius" />
        </div>

        <h3>Scrollbar</h3>
        <div className="token-grid">
          <TokenItem name="scrollbar-width" var="scrollbar-width" />
          <TokenItem name="scrollbar-thumb" var="scrollbar-thumb" isColor />
          <TokenItem name="scrollbar-thumb-hover" var="scrollbar-thumb-hover" isColor />
          <TokenItem name="scrollbar-thumb-active" var="scrollbar-thumb-active" isColor />
        </div>

        <h3>Text</h3>
        <div className="token-grid">
          <TokenItem name="text-secondary" var="text-secondary" isColor />
          <TokenItem name="text-dimmed" var="text-dimmed" isColor />
        </div>

        <h3>Button States</h3>
        <div className="token-grid">
          <TokenItem name="btn-bg" var="btn-bg" isColor />
          <TokenItem name="btn-hover" var="btn-hover" isColor />
          <TokenItem name="btn-pressed" var="btn-pressed" isColor />
          <TokenItem name="btn-border" var="btn-border" isColor />
        </div>
      </section>
    </div>
  )
}

function ColorSwatch({ name, var: varName }: { name: string; var: string }) {
  const value = useCssVar(`--${varName}`)
  return (
    <div className="color-swatch">
      <div className="preview" style={{ background: `var(--${varName})` }}></div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="value" data-var={value}></div>
      </div>
    </div>
  )
}

function PaletteRow({ name, prefix }: { name: string; prefix: string }) {
  return (
    <>
      <h3>{name}</h3>
      <div className="color-grid">
        <ColorSwatch name={`${prefix}-1`} var={`${prefix}-1`} />
        <ColorSwatch name={`${prefix}-2`} var={`${prefix}-2`} />
        <ColorSwatch name={`${prefix}-3`} var={`${prefix}-3`} />
        <ColorSwatch name={`${prefix}-4`} var={`${prefix}-4`} />
        <ColorSwatch name={`${prefix}-5`} var={`${prefix}-5`} />
      </div>
    </>
  )
}

function HelperItem({ name, var: varName }: { name: string; var: string }) {
  const value = useCssVar(`--${varName}`)
  return (
    <div className="helper-item">
      <div className="name">--{name}</div>
      <div className="value" data-var={value}></div>
    </div>
  )
}

function TokenItem({ name, var: varName, isColor }: { name: string; var: string; isColor?: boolean }) {
  const value = useCssVar(`--${varName}`)
  if (isColor) {
    return (
      <div className="token-item">
        <div className="name">--{name}</div>
        <div className="preview" style={{ background: `var(--${varName})` }}></div>
        <div className="value" data-var={value}></div>
      </div>
    )
  }
  return (
    <div className="token-item">
      <div className="name">--{name}</div>
      <div className="preview">--{varName}</div>
      <div className="value" data-var={value}></div>
    </div>
  )
}

export default App