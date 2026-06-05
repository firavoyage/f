# spec create atom components

create a web component library with these atoms:

- button
- checkbox
- select
- input
- number field
- scroll area
- slider
- switch
- tooltip

---

## button

triggers an action when clicked.

look:

```
┌─────────────────┐
│                 │
│     label       │
│                 │
└─────────────────┘
```

anatomy:

- root: button element
- children: label text or icon

props:

- variant: `primary` | `secondary` | `flat` | `destructive`
- size: `small` | `medium` | `large`
- shape: `rounded` | `pill`
- state: `default` | `disabled` | `hover` | `focused` | `pressed`
- children: text or icon

example:

```jsx
<Button variant="primary" size="medium" shape="rounded">
  save changes
</Button>
```

---

## checkbox

allows user to select or deselect an option.

look:

```
┌───┐
│ ✓ │  label
└───┘
```

anatomy:

- root: wrapper span
- indicator: check mark span
- hidden input: native input element

props:

- checked: `boolean`
- state: `default` | `disabled` | `readonly` | `required` | `focused`

example:

```jsx
<Checkbox checked={false}>agree to terms</Checkbox>
```

note:

avoid handler boilerplate. pass rest props down to baseui, like `onCheckedChange={setChecked}`. no need to handle it explicitly.

---

## select

dropdown menu for selecting one or more options.

look:

```
┌─────────────────────┐
│ selected value   ▼  │
└─────────────────────┘

┌─────────────────────┐
│ option 1            │
│ option 2            │
│ option 3            │
└─────────────────────┘
```

anatomy:

- root: wrapper (no element)
- trigger: button that opens popup
- value: text showing selected item
- icon: dropdown arrow
- popup: floating container
- list: container for options
- option: individual selectable item

props:

- variant: `single` | `multiple`
- size: `small` | `medium` | `large`
- state: `default` | `disabled` | `readonly` | `required` | `focused`
- placeholder: text when nothing selected

example:

```jsx
<Select.Root>
  <Select.Trigger>
    <Select.Value placeholder="choose option" />
  </Select.Trigger>
  <Select.Portal>
    <Select.Listbox>
      <Select.Item value="a">option a</Select.Item>
      <Select.Item value="b">option b</Select.Item>
    </Select.Listbox>
  </Select.Portal>
</Select.Root>
```

---

## input

text field for entering a single line of text.

look:

```
┌─────────────────────────┐
│                         │
└─────────────────────────┘
```

anatomy:

- root: input element

props:

- type: `text` | `email` | `password` | `search` | `tel` | `url`
- size: `small` | `medium` | `large`
- state: `default` | `disabled` | `readonly` | `required` | `focused` | `valid` | `invalid`
- placeholder: placeholder text

example:

```jsx
<Input type="text" size="medium" placeholder="enter name" />
```

---

## number field

input field for entering numeric values with increment/decrement controls.

look:

```
┌─────────────────┐  ┌───┐
│       42       │  │ - │
└─────────────────┘  └───┘
       ┌───┐
       │ + │
       └───┘
```

number, decrease, increase.

anatomy:

- root: wrapper div
- input: number input
- increment: button to increase value
- decrement: button to decrease value

props:

- min: `number`
- max: `number`
- step: `number`
- size: `small` | `medium` | `large`
- state: `default` | `disabled` | `readonly` | `required` | `focused`

example:

```jsx
<NumberField.Root defaultValue={42} min={0} max={100} step={1}>
  <NumberField.Input />
  <NumberField.Increment />
  <NumberField.Decrement />
</NumberField.Root>
```

---

## scroll area

container with scrollable content and styled scrollbars.

look:

```
┌───────────────────┐
│ ┌───────────────┐ │
│ │               │ │
│ │   content     │ │┌
│ │               │ ││
│ └───────────────┘ ││
└───────────────────┘│
  └─ scrollbar ─┘
```

anatomy:

- root: wrapper div
- viewport: scrollable container
- content: container for scrollable content
- scrollbar: custom styled scrollbar
- thumb: draggable scroll handle

props:

- orientation: `horizontal` | `vertical` | `both`
- size: `small` | `medium` | `large` (scrollbar width)
- state: `scrolling` | `has-overflow`

example:

```jsx
<ScrollArea.Root>
  <ScrollArea.Viewport>
    <ScrollArea.Content>
      long content here
    </ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar>
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
</ScrollArea.Root>
```

---

## slider

control for selecting a value or range by dragging a thumb along a track.

look:

```
○─────────────────●
```

anatomy:

- root: wrapper div
- track: background rail
- indicator: filled portion showing value
- thumb: draggable handle
- value: optional text display of current value

props:

- min: `number`
- max: `number`
- step: `number`
- state: `default` | `disabled` | `dragging` | `focused`
- multiple: `boolean` (for range selection)

example:

```jsx
<Slider.Root value={50} min={0} max={100} step={1}>
  <Slider.Track>
    <Slider.Indicator />
    <Slider.Thumb index={0} />
  </Slider.Track>
</Slider.Root>
```

---

## switch

toggle control for on/off binary settings.

look:

```
○──────────●    off
●──────────○    on
```

anatomy:

- root: wrapper span
- thumb: movable circle
- hidden input: native input element

props:

- checked: `boolean`
- state: `default` | `disabled` | `readonly` | `required` | `focused`

example:

```jsx
<Switch.Root checked={false}>
  <Switch.Thumb />
</Switch.Root>
```

---

## tooltip

popup that displays descriptive text on hover or focus.

look:

```
┌──────────────────┐
│   descriptive    │
│      text        │
└──────────────────┘
      ↑
    trigger
```

anatomy:

- root: wrapper (no element)
- trigger: element that shows tooltip
- popup: floating tooltip container
- positioner: positions popup relative to trigger
- arrow: optional directional arrow

props:

- delay: `number` (ms before showing)
- state: `open` | `closed` | `disabled`

example:

```jsx
<Tooltip.Root>
  <Tooltip.Trigger>
    <Button>hover me</Button>
  </Tooltip.Trigger>
  <Tooltip.Portal>
    <Tooltip.Positioner>
      <Tooltip.Popup>
        helpful tip
      </Tooltip.Popup>
    </Tooltip.Positioner>
  </Tooltip.Portal>
</Tooltip.Root>
```