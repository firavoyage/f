import { InputHTMLAttributes } from "react"

type SliderProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">

export function Slider(props: SliderProps) {
  return (
    <input class="Slider" type="range" {...props} />
  )
}