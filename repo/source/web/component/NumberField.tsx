type Props = {
  value: number
  onChange: (value: number) => void
}

export function NumberField({ value, onChange }: Props) {
  return (
    <input className="NumberField" type="number" value={value} onChange={e => onChange(Number(e.target.value))} />
  )
}