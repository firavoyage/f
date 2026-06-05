import * as BaseUI from '@base-ui/react'
import './Select.css'

type SelectSize = 'small' | 'medium' | 'large'

type RootProps = {
  size?: SelectSize
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

function Root({ size = 'medium', value, onValueChange, children }: RootProps) {
  return (
    <BaseUI.Select.Root value={value} onValueChange={onValueChange}>
      <div className="Select" data-size={size}>
        {children}
      </div>
    </BaseUI.Select.Root>
  )
}

type TriggerProps = {
  className?: string
  children: React.ReactNode
}

function Trigger({ className, children }: TriggerProps) {
  return (
    <BaseUI.Select.Trigger className={['Select_trigger', className].filter(Boolean).join(' ')}>
      {children}
    </BaseUI.Select.Trigger>
  )
}

type ValueProps = {
  placeholder?: string
  className?: string
}

function Value({ placeholder = 'choose option', className }: ValueProps) {
  return (
    <BaseUI.Select.Value className={['Select_value', className].filter(Boolean).join(' ')}>
      {(value) => value?.label || placeholder}
    </BaseUI.Select.Value>
  )
}

type IconProps = {
  className?: string
}

function Icon({ className }: IconProps) {
  return (
    <BaseUI.Select.Icon className={['Select_icon', className].filter(Boolean).join(' ')}>
      <svg viewBox="0 0 16 16" width="16" height="16">
        <path fill="currentColor" d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z" />
      </svg>
    </BaseUI.Select.Icon>
  )
}

type PopupProps = {
  className?: string
  children: React.ReactNode
}

function Popup({ className, children }: PopupProps) {
  return (
    <BaseUI.Select.Portal>
      <BaseUI.Select.Positioner sideOffset={4}>
        <BaseUI.Select.Popup className={['Select_popup', className].filter(Boolean).join(' ')}>
          {children}
        </BaseUI.Select.Popup>
      </BaseUI.Select.Positioner>
    </BaseUI.Select.Portal>
  )
}

type ListboxProps = {
  className?: string
  children: React.ReactNode
}

function Listbox({ className, children }: ListboxProps) {
  return (
    <BaseUI.Select.Listbox className={['Select_listbox', className].filter(Boolean).join(' ')}>
      {children}
    </BaseUI.Select.Listbox>
  )
}

type ItemProps = {
  value: string
  className?: string
  children: React.ReactNode
}

function Item({ value, className, children }: ItemProps) {
  return (
    <BaseUI.Select.Option value={value} className={['Select_item', className].filter(Boolean).join(' ')}>
      {children}
    </BaseUI.Select.Option>
  )
}

const Select = { Root, Trigger, Value, Icon, Popup, Listbox, Item }

export { Select }
export default Select