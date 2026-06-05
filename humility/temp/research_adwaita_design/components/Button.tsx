import { Button as BaseButton } from "@base-ui/react/button";
import "./Button.css";

export function Button(props: BaseButton.Props) {
  return <BaseButton className="Button" {...props} />;
}