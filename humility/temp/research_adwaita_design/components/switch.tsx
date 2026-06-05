import { Switch } from "@base-ui/react/switch";
import "./switch.css";

export function MySwitch(
  props: Switch.Root.Props & { children?: React.ReactNode }
) {
  return (
    <label className="my-switch-label">
      <Switch.Root className="my-switch" {...props}>
        <Switch.Thumb className="my-switch-thumb" />
      </Switch.Root>
      {props.children}
    </label>
  );
}