import { Select } from "@base-ui/react/select";
import "./select.css";

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Mango", value: "mango" },
];

export function MySelect(props: Select.Root.Props<typeof fruits[number]>) {
  return (
    <Select.Root items={fruits} className="my-select" {...props}>
      <Select.Trigger className="my-select-trigger">
        <Select.Value placeholder="Select fruit" />
        <Select.Icon className="my-select-icon">▼</Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner sideOffset={4} className="my-select-positioner">
          <Select.Popup className="my-select-popup">
            <Select.List className="my-select-list">
              {fruits.map((fruit) => (
                <Select.Item key={fruit.value} value={fruit.value} className="my-select-item">
                  <Select.ItemText>{fruit.label}</Select.ItemText>
                  <Select.ItemIndicator className="my-select-item-indicator">✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}