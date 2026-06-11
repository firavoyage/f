import * as React from "react";
import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import "./NumberField.css";

export function NumberField(props: BaseNumberField.Root.Props) {
  const id = React.useId();
  return (
    <BaseNumberField.Root id={id} className="NumberField" {...props}>
      <BaseNumberField.Group className="NumberField_group">
        <BaseNumberField.Input className="NumberField_input" />
        <BaseNumberField.Decrement className="NumberField_button">
          −
        </BaseNumberField.Decrement>
        <BaseNumberField.Increment className="NumberField_button">
          +
        </BaseNumberField.Increment>
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  );
}