import type { ReactNode } from "react"

type Props = {
  checked: boolean
  onChange: (checked: boolean) => void
  children?: ReactNode
}

export function Toggle({ checked, onChange, children }: Props) {
  return (
    <label className="Toggle">
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
      {children}
    </label>
  )
}