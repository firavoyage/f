import { Input } from "@base-ui/react/input";
import "./input.css";

export function MyInput(props: Input.Props) {
  return <Input className="my-input" {...props} />;
}