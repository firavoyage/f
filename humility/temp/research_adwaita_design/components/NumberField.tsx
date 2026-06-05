import * as BaseUI from '@base-ui/react'
import './NumberField.css'

type RootProps = {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number) => void
  children: React.ReactNode
}

function Root({ min = 0, max = 100, step = 1, value, defaultValue = 0, onValueChange, children }: RootProps) {
  return (
    <BaseUI.NumberField.Root
      value={value}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      onValueChange={(details) => onValueChange?.(details.value)}
    >
      <div className="NumberField">{children}</div>
    </BaseUI.NumberField.Root>
  )
}

type InputProps = React.ComponentProps<typeof BaseUI.NumberField.Input>

function Input(props: InputProps) {
  return <BaseUI.NumberField.Input className="NumberField_input" {...props} />
}

type IncrementProps = {
  className?: string
}

function Increment({ className }: IncrementProps) {
  return (
    <BaseUI.NumberField.Increment className={['NumberField_increment', className].filter(Boolean).join(' ')}>
      <svg viewBox="0 0 16 16" width="16" height="16">
        <path fill="currentColor" d="M8 4a.75.75 0 01.75.75v3.5h3.5a.75.75 0 010 1.5h-3.5v3.5a.75.75 0 01-1.5 0v-3.5h-3.5a.75.75 0 010-1.5h3.5v-3.5A.75.75 0 018 4z" />
      </svg>
    </BaseUI.NumberField.Increment>
  )
}

type DecrementProps = {
  className?: string
}

function Decrement({ className }: DecrementProps) {
  return (
    <BaseUI.NumberField.Decrement className={['NumberField_decrement', className].filter(Boolean).join(' ')}>
      <svg viewBox="0 0 16 16" width="16" height="16">
        <path fill="currentColor" d="M4 7.75a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 014 7.75z" />
      </svg>
    </BaseUI.NumberField.Decrement>
  )
}

const NumberField = { Root, Input, Increment, Decrement }

export { NumberField }
export default NumberField