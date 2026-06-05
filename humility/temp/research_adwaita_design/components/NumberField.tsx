import React, { createContext, useContext, useState, useCallback } from 'react'
import './NumberField.css'

type NumberFieldContextValue = {
  value: number
  setValue: (value: number) => void
  min: number
  max: number
  step: number
}

const NumberFieldContext = createContext<NumberFieldContextValue | null>(null)

function useNumberFieldContext() {
  const ctx = useContext(NumberFieldContext)
  if (!ctx) throw new Error('NumberField components must be used within NumberField.Root')
  return ctx
}

type RootProps = {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number) => void
  children: React.ReactNode
}

function Root({ min = 0, max = 100, step = 1, value: controlledValue, defaultValue = 0, onValueChange, children }: RootProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue

  const setValue = useCallback((newValue: number) => {
    const clamped = Math.min(Math.max(newValue, min), max)
    if (controlledValue === undefined) {
      setUncontrolledValue(clamped)
    }
    onValueChange?.(clamped)
  }, [min, max, controlledValue, onValueChange])

  return (
    <NumberFieldContext.Provider value={{ value, setValue, min, max, step }}>
      <div className="NumberField">{children}</div>
    </NumberFieldContext.Provider>
  )
}

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

function Input({ className, ...props }: InputProps) {
  const { value, setValue, min, max, step } = useNumberFieldContext()

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value) || min
    setValue(newValue)
  }, [setValue, min])

  return (
    <input
      type="number"
      className={['NumberField_input', className].filter(Boolean).join(' ')}
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={handleChange}
      {...props}
    />
  )
}

type IncrementProps = {
  className?: string
}

function Increment({ className }: IncrementProps) {
  const { value, setValue, min, max, step } = useNumberFieldContext()
  const disabled = value >= max

  const handleClick = () => {
    if (!disabled) {
      setValue(value + step)
    }
  }

  return (
    <button
      type="button"
      className={['NumberField_increment', className].filter(Boolean).join(' ')}
      disabled={disabled}
      onClick={handleClick}
    >
      <svg viewBox="0 0 16 16" width="16" height="16">
        <path fill="currentColor" d="M8 4a.75.75 0 01.75.75v3.5h3.5a.75.75 0 010 1.5h-3.5v3.5a.75.75 0 01-1.5 0v-3.5h-3.5a.75.75 0 010-1.5h3.5v-3.5A.75.75 0 018 4z" />
      </svg>
    </button>
  )
}

type DecrementProps = {
  className?: string
}

function Decrement({ className }: DecrementProps) {
  const { value, setValue, min, max, step } = useNumberFieldContext()
  const disabled = value <= min

  const handleClick = () => {
    if (!disabled) {
      setValue(value - step)
    }
  }

  return (
    <button
      type="button"
      className={['NumberField_decrement', className].filter(Boolean).join(' ')}
      disabled={disabled}
      onClick={handleClick}
    >
      <svg viewBox="0 0 16 16" width="16" height="16">
        <path fill="currentColor" d="M4 7.75a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 014 7.75z" />
      </svg>
    </button>
  )
}

const NumberField = { Root, Input, Increment, Decrement }

export { NumberField }
export default NumberField