import { Input as BaseInput } from "@base-ui/react/input";
import "./Input.css";

export function Input(props: BaseInput.Props) {
  return <BaseInput className="Input" {...props} />;
}