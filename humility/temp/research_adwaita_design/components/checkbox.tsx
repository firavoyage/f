import { Checkbox } from "@base-ui/react/checkbox";
import "./checkbox.css";

export function MyCheckbox({
  children,
  ...props
}: Checkbox.Root.Props & { children?: React.ReactNode }) {
  return (
    <label className="my-checkbox-label">
      <Checkbox.Root className="my-checkbox" {...props}>
        <Checkbox.Indicator className="my-checkbox-indicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {children}
    </label>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
    >
      <path d="m2.5 8.5 4 4 7-9" />
    </svg>
  );
}