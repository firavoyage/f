import { ChangeEvent } from "react"

type SwitchProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
}

export function Switch({ checked = false, onChange, disabled }: SwitchProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.checked)
  }

  return (
    <label class="Switch" data-disabled={disabled}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span class="Switch_track">
        <span class="Switch_thumb" />
      </span>
    </label>
  )
}