import React from 'react'
import { useId } from '../../hooks/use_id'
import './switch.css'

type SwitchProps = {
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  label?: string
}

export function Switch({
  checked = false,
  disabled = false,
  onChange,
  label,
}: SwitchProps) {
  const id = useId('switch')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked)
  }

  return (
    <label className="Switch-wrapper" htmlFor={id}>
      <div className="Switch">
        <input
          id={id}
          type="checkbox"
          className="Switch-input"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <div className="Switch-track">
          <div className="Switch-thumb" />
        </div>
      </div>
      {label && <span className="Switch-label">{label}</span>}
    </label>
  )
}

type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  label?: string
}

export function Checkbox({
  checked = false,
  disabled = false,
  onChange,
  label,
}: CheckboxProps) {
  const id = useId('checkbox')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked)
  }

  return (
    <label className="Checkbox-wrapper" htmlFor={id}>
      <div className="Checkbox">
        <input
          id={id}
          type="checkbox"
          className="Checkbox-input"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <div className="Checkbox-box">
          <svg className="Checkbox-icon" viewBox="0 0 16 16" width="12" height="12">
            <path fill="currentColor" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/>
          </svg>
        </div>
      </div>
      {label && <span className="Checkbox-label">{label}</span>}
    </label>
  )
}