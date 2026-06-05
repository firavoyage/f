import * as BaseUI from '@base-ui/react'
import './Switch.css'

type SwitchProps = React.ComponentProps<typeof BaseUI.Switch.Root> & {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

function Switch({ className, checked, onCheckedChange, ...props }: SwitchProps) {
  return (
    <BaseUI.Switch.Root
      className={['Switch', className].filter(Boolean).join(' ')}
      checked={checked}
      onCheckedChange={onCheckedChange}
    >
      <BaseUI.Switch.Thumb className="Switch_thumb" />
    </BaseUI.Switch.Root>
  )
}

export { Switch }
export default Switch