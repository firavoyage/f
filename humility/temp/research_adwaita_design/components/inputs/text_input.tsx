import React from 'react'
import { useId } from '../../hooks/use_id'
import './text_input.css'

type TextInputProps = {
  type?: 'text' | 'password' | 'email' | 'search' | 'number'
  placeholder?: string
  value?: string
  disabled?: boolean
  error?: boolean
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

export function TextInput({
  type = 'text',
  placeholder,
  value,
  disabled = false,
  error = false,
  onChange,
  onFocus,
  onBlur,
}: TextInputProps) {
  const id = useId('input')

  return (
    <input
      id={id}
      className="TextInput"
      type={type}
      placeholder={placeholder}
      value={value}
      data-disabled={disabled}
      data-error={error}
      onChange={(e) => onChange?.(e.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      aria-invalid={error}
    />
  )
}

type TextAreaProps = {
  placeholder?: string
  value?: string
  disabled?: boolean
  error?: boolean
  rows?: number
  onChange?: (value: string) => void
}

export function TextArea({
  placeholder,
  value,
  disabled = false,
  error = false,
  rows = 3,
  onChange,
}: TextAreaProps) {
  const id = useId('textarea')

  return (
    <textarea
      id={id}
      className="TextArea"
      placeholder={placeholder}
      value={value}
      rows={rows}
      data-disabled={disabled}
      data-error={error}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      aria-invalid={error}
    />
  )
}

type SearchInputProps = {
  placeholder?: string
  value?: string
  disabled?: boolean
  onChange?: (value: string) => void
}

export function SearchInput({
  placeholder = 'Search',
  value,
  disabled = false,
  onChange,
}: SearchInputProps) {
  const id = useId('search')

  return (
    <div className="SearchInput-wrapper">
      <svg className="SearchInput-icon" viewBox="0 0 16 16" width="16" height="16">
        <path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
      <input
        id={id}
        className="SearchInput"
        type="search"
        placeholder={placeholder}
        value={value}
        data-disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      />
    </div>
  )
}

type PasswordInputProps = {
  placeholder?: string
  value?: string
  disabled?: boolean
  onChange?: (value: string) => void
}

export function PasswordInput({
  placeholder = 'Password',
  value,
  disabled = false,
  onChange,
}: PasswordInputProps) {
  const id = useId('password')
  const [show, setShow] = React.useState(false)

  return (
    <div className="PasswordInput-wrapper">
      <input
        id={id}
        className="PasswordInput"
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        data-disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      />
      <button
        type="button"
        className="PasswordInput-toggle"
        onClick={() => setShow(!show)}
        tabIndex={-1}
        aria-label={show ? 'Hide password' : 'Show password'}
      >
        {show ? (
          <svg viewBox="0 0 16 16" width="16" height="16">
            <path fill="currentColor" d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" width="16" height="16">
            <path fill="currentColor" d="M13.359 11.238C15.06 9.72 16 8 16 8s-3.5-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.08 4.864 2.188l-.694.688a6.014 6.014 0 0 1-.592 1.152l-.75.75a7.06 7.06 0 0 1-1.497-1.47l.166-.166A10.98 10.98 0 0 1 8 1a8 8 0 0 1 5.359 2.488l.75-.75a6.012 6.012 0 0 1 .592-1.152l.694.688A7.03 7.03 0 0 0 14.5 8c0 .94-.32 1.778-.762 2.452l-.494-.494A6.507 6.507 0 0 1 13.359 11.238z"/>
          </svg>
        )}
      </button>
    </div>
  )
}