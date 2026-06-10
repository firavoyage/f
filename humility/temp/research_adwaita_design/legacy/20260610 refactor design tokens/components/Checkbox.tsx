import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import "./Checkbox.css";

export function Checkbox(
  props: BaseCheckbox.Root.Props & { children?: React.ReactNode }
) {
  return (
    <label className="Checkbox_label">
      <BaseCheckbox.Root className="Checkbox_root" {...props}>
        <BaseCheckbox.Indicator className="Checkbox_indicator">
          <CheckIcon />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      {props.children}
    </label>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
      <path d="m2.5 8.5 4 4 7-9" />
    </svg>
  );
}