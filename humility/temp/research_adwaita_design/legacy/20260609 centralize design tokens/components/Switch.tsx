import { Switch as BaseSwitch } from "@base-ui/react/switch";
import "./Switch.css";

export function Switch(
  props: BaseSwitch.Root.Props & { children?: React.ReactNode }
) {
  return (
    <label className="Switch_label">
      <BaseSwitch.Root className="Switch_root" {...props}>
        <BaseSwitch.Thumb className="Switch_thumb" />
      </BaseSwitch.Root>
      {props.children}
    </label>
  );
}