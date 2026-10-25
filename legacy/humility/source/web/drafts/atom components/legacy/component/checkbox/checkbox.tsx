import { ChangeEvent } from "react"

type CheckboxProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
}

export function Checkbox({ checked = false, onChange, disabled, label }: CheckboxProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.checked)
  }

  return (
    <label class="Checkbox" data-disabled={disabled}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span class="Checkbox_box">
        <svg class="Checkbox_check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      {label && <span class="Checkbox_label">{label}</span>}
    </label>
  )
}