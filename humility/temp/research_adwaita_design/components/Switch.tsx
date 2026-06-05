import React from 'react'
import './Switch.css'

type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

function Switch({ className, checked, onCheckedChange, ...props }: SwitchProps) {
  return (
    <span className={['Switch', className].filter(Boolean).join(' ')}>
      <input
        type="checkbox"
        className="Switch_input"
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        {...props}
      />
      <span className="Switch_thumb" />
    </span>
  )
}

export { Switch }
export default Switch