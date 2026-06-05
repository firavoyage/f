import React from 'react'
import './Input.css'

type InputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url'
type InputSize = 'small' | 'medium' | 'large'

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
  type?: InputType
  size?: InputSize
}

function Input({
  type = 'text',
  size = 'medium',
  className,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={['Input', className].filter(Boolean).join(' ')}
      data-size={size}
      {...props}
    />
  )
}

export { Input }
export default Input