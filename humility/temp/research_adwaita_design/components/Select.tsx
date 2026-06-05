import { Select as BaseSelect } from "@base-ui/react/select";
import "./Select.css";

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Mango", value: "mango" },
];

export function Select(props: BaseSelect.Root.Props<typeof fruits[number]>) {
  return (
    <BaseSelect.Root items={fruits} className="Select" {...props}>
      <BaseSelect.Trigger className="Select_trigger">
        <BaseSelect.Value placeholder="Select fruit" />
        <BaseSelect.Icon className="Select_icon">▼</BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner sideOffset={4} className="Select_positioner">
          <BaseSelect.Popup className="Select_popup">
            <BaseSelect.List className="Select_list">
              {fruits.map((fruit) => (
                <BaseSelect.Item
                  key={fruit.value}
                  value={fruit.value}
                  className="Select_item"
                >
                  <BaseSelect.ItemText>{fruit.label}</BaseSelect.ItemText>
                  <BaseSelect.ItemIndicator className="Select_item_indicator">
                    ✓
                  </BaseSelect.ItemIndicator>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}