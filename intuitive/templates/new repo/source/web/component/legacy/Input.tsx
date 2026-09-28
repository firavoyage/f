type Props = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function Input({ value, onChange, placeholder }: Props) {
  return (
    <input className="Input" type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
  )
}