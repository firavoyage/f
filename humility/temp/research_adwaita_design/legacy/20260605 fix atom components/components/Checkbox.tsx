import * as BaseUI from '@base-ui/react'
import './Checkbox.css'

type CheckboxProps = React.ComponentProps<typeof BaseUI.Checkbox.Root> & {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

function Checkbox({ className, checked, onCheckedChange, ...props }: CheckboxProps) {
  return (
    <BaseUI.Checkbox.Root
      className={['Checkbox', className].filter(Boolean).join(' ')}
      checked={checked}
      onCheckedChange={onCheckedChange}
    >
      <BaseUI.Checkbox.Indicator className="Checkbox_indicator">
        <svg viewBox="0 0 16 16" width="16" height="16">
          <path fill="currentColor" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
        </svg>
      </BaseUI.Checkbox.Indicator>
    </BaseUI.Checkbox.Root>
  )
}

export { Checkbox }
export default Checkbox