import * as React from "react";
import { NumberField } from "@base-ui/react/number-field";
import "./number-field.css";

export function MyNumberField(props: NumberField.Root.Props) {
  const id = React.useId();
  return (
    <NumberField.Root id={id} className="my-number-field" {...props}>
      <NumberField.Group className="my-number-field-group">
        <NumberField.Decrement className="my-number-field-button">
          −
        </NumberField.Decrement>
        <NumberField.Input className="my-number-field-input" />
        <NumberField.Increment className="my-number-field-button">
          +
        </NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  );
}