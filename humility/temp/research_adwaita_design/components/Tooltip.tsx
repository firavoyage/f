import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import './Tooltip.css'

type TooltipContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const TooltipContext = createContext<TooltipContextValue | null>(null)

function useTooltipContext() {
  const ctx = useContext(TooltipContext)
  if (!ctx) throw new Error('Tooltip components must be used within Tooltip.Root')
  return ctx
}

type RootProps = {
  delay?: number
  children: React.ReactNode
}

function Root({ delay = 300, children }: RootProps) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<number>()

  const handleMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => setOpen(true), delay)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpen(false)
  }

  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      <div className="Tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </TooltipContext.Provider>
  )
}

type TriggerProps = {
  className?: string
  children: React.ReactNode
}

function Trigger({ className, children }: TriggerProps) {
  return (
    <div className={['Tooltip_trigger', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

type PopupProps = {
  className?: string
  children: React.ReactNode
}

function Popup({ className, children }: PopupProps) {
  const { open } = useTooltipContext()

  if (!open) return null

  return (
    <div className={['Tooltip_popup', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

type PositionerProps = {
  className?: string
  children: React.ReactNode
}

function Positioner({ className, children }: PositionerProps) {
  return (
    <div className={['Tooltip_positioner', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

const Tooltip = { Root, Trigger, Popup, Positioner }

export { Tooltip }
export default Tooltip