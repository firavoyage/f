import { InputHTMLAttributes } from "react"

type NumberFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">

export function NumberField(props: NumberFieldProps) {
  return (
    <input class="NumberField" type="number" {...props} />
  )
}