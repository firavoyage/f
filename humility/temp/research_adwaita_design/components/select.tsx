import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import './select.css'

type SelectVariant = 'single' | 'multiple'
type SelectSize = 'small' | 'medium' | 'large'

type SelectContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  value: string
  setValue: (value: string) => void
  size: SelectSize
}

const SelectContext = createContext<SelectContextValue | null>(null)

function useSelectContext() {
  const ctx = useContext(SelectContext)
  if (!ctx) throw new Error('Select components must be used within Select.Root')
  return ctx
}

type RootProps = {
  variant?: SelectVariant
  size?: SelectSize
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

function Root({ size = 'medium', value: controlledValue, onValueChange, children }: RootProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(controlledValue || '')

  useEffect(() => {
    if (controlledValue !== undefined) {
      setValue(controlledValue)
    }
  }, [controlledValue])

  const handleValueChange = (newValue: string) => {
    setValue(newValue)
    onValueChange?.(newValue)
    setOpen(false)
  }

  return (
    <SelectContext.Provider value={{ open, setOpen, value, setValue: handleValueChange, size }}>
      <div className="Select">{children}</div>
    </SelectContext.Provider>
  )
}

type TriggerProps = {
  className?: string
  children: React.ReactNode
}

function Trigger({ className, children }: TriggerProps) {
  const { open, setOpen, size } = useSelectContext()

  return (
    <button
      type="button"
      className={['Select_trigger', className].filter(Boolean).join(' ')}
      data-size={size}
      data-state={open ? 'open' : 'closed'}
      onClick={() => setOpen(!open)}
    >
      {children}
    </button>
  )
}

type ValueProps = {
  placeholder?: string
  className?: string
}

function Value({ placeholder = 'choose option', className }: ValueProps) {
  const { value } = useSelectContext()

  return (
    <span className={['Select_value', className].filter(Boolean).join(' ')}>
      {value || placeholder}
    </span>
  )
}

type IconProps = {
  className?: string
}

function Icon({ className }: IconProps) {
  return (
    <span className={['Select_icon', className].filter(Boolean).join(' ')}>
      <svg viewBox="0 0 16 16" width="16" height="16">
        <path fill="currentColor" d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z" />
      </svg>
    </span>
  )
}

type PopupProps = {
  className?: string
  children: React.ReactNode
}

function Popup({ className, children }: PopupProps) {
  const { open, setOpen } = useSelectContext()
  const ref = useRef<HTMLDivElement>(null)
  const setOpenRef = useRef(setOpen)
  setOpenRef.current = setOpen

  useEffect(() => {
    if (!open) return
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenRef.current(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  if (!open) return null

  return (
    <div className="Select_popup" ref={ref}>
      {children}
    </div>
  )
}

type ListboxProps = {
  className?: string
  children: React.ReactNode
}

function Listbox({ className, children }: ListboxProps) {
  return (
    <div className={['Select_listbox', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

type ItemProps = {
  value: string
  className?: string
  children: React.ReactNode
}

function Item({ value, className, children }: ItemProps) {
  const { value: selectedValue, setValue } = useSelectContext()
  const isSelected = selectedValue === value

  return (
    <div
      className={['Select_item', className].filter(Boolean).join(' ')}
      data-selected={isSelected}
      onClick={() => setValue(value)}
    >
      {children}
    </div>
  )
}

const Select = { Root, Trigger, Value, Icon, Popup, Listbox, Item }

export { Select }
export default Select