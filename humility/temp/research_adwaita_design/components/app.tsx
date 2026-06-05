import "./app.css";

import { MyButton } from "./button";
import { MyCheckbox } from "./checkbox";
import { MyInput } from "./input";
import { MyNumberField } from "./number-field";
import { MySelect } from "./select";
import { MySlider } from "./slider";
import { MySwitch } from "./switch";
import { MyScrollArea } from "./scroll-area";
import { MyTooltip } from "./tooltip";

export default function App() {
  return (
    <main className="app">
      <section className="section">
        <h2>Button</h2>
        <div className="demo">
          <MyButton>Primary</MyButton>
          <MyButton disabled>Disabled</MyButton>
        </div>
      </section>

      <section className="section">
        <h2>Checkbox</h2>
        <div className="demo">
          <MyCheckbox>Agree to terms</MyCheckbox>
          <MyCheckbox checked>Checked</MyCheckbox>
          <MyCheckbox disabled>Disabled</MyCheckbox>
        </div>
      </section>

      <section className="section">
        <h2>Input</h2>
        <div className="demo">
          <MyInput placeholder="Enter text..." />
          <MyInput placeholder="Disabled" disabled />
        </div>
      </section>

      <section className="section">
        <h2>Number Field</h2>
        <div className="demo">
          <MyNumberField defaultValue={42} min={0} max={100} step={1} />
        </div>
      </section>

      <section className="section">
        <h2>Select</h2>
        <div className="demo">
          <MySelect />
        </div>
      </section>

      <section className="section">
        <h2>Slider</h2>
        <div className="demo">
          <MySlider defaultValue={50} min={0} max={100} step={1} />
        </div>
      </section>

      <section className="section">
        <h2>Switch</h2>
        <div className="demo">
          <MySwitch>Enable notifications</MySwitch>
          <MySwitch checked>Enabled</MySwitch>
          <MySwitch disabled>Disabled</MySwitch>
        </div>
      </section>

      <section className="section">
        <h2>Scroll Area</h2>
        <div className="demo">
          <MyScrollArea>
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
          </MyScrollArea>
        </div>
      </section>

      <section className="section">
        <h2>Tooltip</h2>
        <div className="demo">
          <MyTooltip content="This is a helpful tip!">
            <span className="my-button">Hover me</span>
          </MyTooltip>
        </div>
      </section>
    </main>
  );
}