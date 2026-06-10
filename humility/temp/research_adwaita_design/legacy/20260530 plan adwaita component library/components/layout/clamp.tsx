import React from 'react'
import './clamp.css'

type ClampProps = {
  maximumWidth?: number
  children: React.ReactNode
}

export function Clamp({ maximumWidth = 600, children }: ClampProps) {
  return (
    <div
      className="Clamp"
      style={{ '--clamp-max-width': `${maximumWidth}px` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

type SpacerProps = {
  size?: '1' | '2' | '3' | '4' | '5' | '6'
}

export function Spacer({ size = '3' }: SpacerProps) {
  return <div className={`Spacer Spacer--${size}`} />
}