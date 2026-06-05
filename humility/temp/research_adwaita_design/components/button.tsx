import { Button } from "@base-ui/react/button";
import "./button.css";

export function MyButton({ children, ...props }: Button.Props) {
  return (
    <Button className="my-button" {...props}>
      {children}
    </Button>
  );
}