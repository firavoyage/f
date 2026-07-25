type Option = { value: string; label: string }

type Props = {
  value: string
  onChange: (value: string) => void
  options: Option[]
}

export function Select({ value, onChange, options }: Props) {
  return (
    <select className="Select" value={value} onChange={e => onChange(e.target.value)}>
      <option value="">select...</option>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  )
}