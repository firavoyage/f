type Props = {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function Slider({ value, onChange, min = 0, max = 100 }: Props) {
  return (
    <input className="Slider" type="range" min={min} max={max} value={value} onChange={e => onChange(Number(e.target.value))} />
  )
}