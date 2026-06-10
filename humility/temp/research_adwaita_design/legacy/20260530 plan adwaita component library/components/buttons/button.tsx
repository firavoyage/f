import React from 'react'
import './button.css'

type ButtonVariant = 'suggested' | 'destructive' | 'flat' | 'raised'
type ButtonSize = 'mini' | 'small' | 'medium' | 'large' | 'huge'
type ButtonShape = 'normal' | 'circular' | 'pill'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  shape?: ButtonShape
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  variant = 'flat',
  size = 'medium',
  shape = 'normal',
  disabled = false,
  loading = false,
  children,
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = [
    'Button',
    variant !== 'flat' && `Button--${variant}`,
    size !== 'medium' && `Button--${size}`,
    shape !== 'normal' && `Button--${shape}`,
  ].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      data-disabled={disabled}
      data-loading={loading}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading && <span className="Button-spinner" />}
      {children}
    </button>
  )
}

export function IconButton({
  size = 'medium',
  disabled = false,
  loading = false,
  children,
  onClick,
  type = 'button',
}: Omit<ButtonProps, 'variant' | 'shape'>) {
  const classes = [
    'IconButton',
    size !== 'medium' && `IconButton--${size}`,
  ].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      data-disabled={disabled}
      data-loading={loading}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading && <span className="IconButton-spinner" />}
      {children}
    </button>
  )
}