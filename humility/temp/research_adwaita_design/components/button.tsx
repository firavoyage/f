import React from 'react'
import './button.css'

type ButtonVariant = 'primary' | 'secondary' | 'flat' | 'destructive'
type ButtonSize = 'small' | 'medium' | 'large'
type ButtonShape = 'rounded' | 'pill'

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> & {
  variant?: ButtonVariant
  size?: ButtonSize
  shape?: ButtonShape
}

function Button({
  variant = 'primary',
  size = 'medium',
  shape = 'rounded',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={['Button', className].filter(Boolean).join(' ')}
      data-variant={variant}
      data-size={size}
      data-shape={shape}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
export default Button