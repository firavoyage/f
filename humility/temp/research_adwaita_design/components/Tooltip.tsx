import * as BaseUI from '@base-ui/react'
import './Tooltip.css'

type RootProps = {
  delay?: number
  children: React.ReactNode
}

function Root({ children }: RootProps) {
  return (
    <BaseUI.Tooltip.Root delay={300}>
      <div className="Tooltip">
        {children}
      </div>
    </BaseUI.Tooltip.Root>
  )
}

type TriggerProps = {
  className?: string
  children: React.ReactNode
}

function Trigger({ className, children }: TriggerProps) {
  return (
    <BaseUI.Tooltip.Trigger className={['Tooltip_trigger', className].filter(Boolean).join(' ')}>
      {children}
    </BaseUI.Tooltip.Trigger>
  )
}

type PopupProps = {
  className?: string
  children: React.ReactNode
}

function Popup({ className, children }: PopupProps) {
  return (
    <BaseUI.Tooltip.Portal>
      <BaseUI.Tooltip.Positioner sideOffset={8}>
        <BaseUI.Tooltip.Popup className={['Tooltip_popup', className].filter(Boolean).join(' ')}>
          {children}
        </BaseUI.Tooltip.Popup>
      </BaseUI.Tooltip.Positioner>
    </BaseUI.Tooltip.Portal>
  )
}

const Tooltip = { Root, Trigger, Popup }

export { Tooltip }
export default Tooltip