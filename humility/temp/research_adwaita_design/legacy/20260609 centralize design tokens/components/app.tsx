import "./app.css";

import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { NumberField } from "./NumberField";
import { Select } from "./Select";
import { Slider } from "./Slider";
import { Switch } from "./Switch";
import { ScrollArea } from "./ScrollArea";
import { Tooltip } from "./Tooltip";

export default function App() {
  return (
    <main className="app">
      <section className="section">
        <h2>Button</h2>
        <div className="demo">
          <Button>Primary</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section className="section">
        <h2>Checkbox</h2>
        <div className="demo">
          <Checkbox>Agree to terms</Checkbox>
          <Checkbox checked>Checked</Checkbox>
          <Checkbox disabled>Disabled</Checkbox>
        </div>
      </section>

      <section className="section">
        <h2>Input</h2>
        <div className="demo">
          <Input placeholder="Enter text..." />
          <Input placeholder="Disabled" disabled />
        </div>
      </section>

      <section className="section">
        <h2>Number Field</h2>
        <div className="demo">
          <NumberField defaultValue={42} min={0} max={100} step={1} />
        </div>
      </section>

      <section className="section">
        <h2>Select</h2>
        <div className="demo">
          <Select />
        </div>
      </section>

      <section className="section">
        <h2>Slider</h2>
        <div className="demo">
          <Slider defaultValue={50} min={0} max={100} step={1} />
        </div>
      </section>

      <section className="section">
        <h2>Switch</h2>
        <div className="demo">
          <Switch>Enable notifications</Switch>
          <Switch checked>Enabled</Switch>
          <Switch disabled>Disabled</Switch>
        </div>
      </section>

      <section className="section">
        <h2>Scroll Area</h2>
        <div className="demo">
          <ScrollArea>
            <p>
              Vernacular architecture is building done outside any academic tradition,
              and without professional guidance. It is not a particular architectural
              movement or style, but rather a broad category, encompassing a wide range
              and variety of building types, with differing methods of construction, from
              around the world, both historical and extant and classical and modern.
            </p>
            <p>
              This type of architecture usually serves immediate, local needs, is
              constrained by the materials available in its particular region and
              reflects local traditions and cultural practices.
            </p>
          </ScrollArea>
        </div>
      </section>

      <section className="section">
        <h2>Tooltip</h2>
        <div className="demo">
          <Tooltip content="This is a helpful tip!">
            <span className="Button">Hover me</span>
          </Tooltip>
        </div>
      </section>
    </main>
  );
}