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

type Component = {
  name: string;
  demo: () => JSX.Element;
};

const components: Component[] = [
  {
    name: "Button",
    demo: () => (
      <>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
      </>
    ),
  },
  {
    name: "Checkbox",
    demo: () => (
      <>
        <Checkbox>Agree to terms</Checkbox>
        <Checkbox checked>Checked</Checkbox>
        <Checkbox disabled>Disabled</Checkbox>
      </>
    ),
  },
  {
    name: "Input",
    demo: () => (
      <>
        <Input placeholder="Enter text..." />
        <Input placeholder="Disabled" disabled />
      </>
    ),
  },
  {
    name: "NumberField",
    demo: () => <NumberField defaultValue={42} min={0} max={100} step={1} />,
  },
  {
    name: "Select",
    demo: () => <Select />,
  },
  {
    name: "Slider",
    demo: () => <Slider defaultValue={50} min={0} max={100} step={1} />,
  },
  {
    name: "Switch",
    demo: () => (
      <>
        <Switch>Enable notifications</Switch>
        <Switch checked>Enabled</Switch>
        <Switch disabled>Disabled</Switch>
      </>
    ),
  },
  {
    name: "ScrollArea",
    demo: () => (
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
    ),
  },
  {
    name: "Tooltip",
    demo: () => (
      <Tooltip content="This is a helpful tip!">
        <span className="Button">Hover me</span>
      </Tooltip>
    ),
  },
];

function getQueryParam(key: string): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

export default function App() {
  const componentName = getQueryParam("component");
  const validNames = components.map((c) => c.name);
  const selected =
    componentName && validNames.includes(componentName)
      ? components.filter((c) => c.name === componentName)
      : components;

  return (
    <main className="app">
      {selected.map((component) => (
        <section key={component.name} className="section">
          <h2>{component.name}</h2>
          <div className="demo">{component.demo()}</div>
        </section>
      ))}
    </main>
  );
}