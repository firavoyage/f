import React from 'react'
import './card.css'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`Card ${className}`}>
      {children}
    </div>
  )
}

type CardHeaderProps = {
  title: string
  subtitle?: string
}

export function CardHeader({ title, subtitle }: CardHeaderProps) {
  return (
    <div className="Card-header">
      <h3 className="Card-title">{title}</h3>
      {subtitle && <p className="Card-subtitle">{subtitle}</p>}
    </div>
  )
}

type CardContentProps = {
  children: React.ReactNode
}

export function CardContent({ children }: CardContentProps) {
  return <div className="Card-content">{children}</div>
}

type CardFooterProps = {
  children: React.ReactNode
}

export function CardFooter({ children }: CardFooterProps) {
  return <div className="Card-footer">{children}</div>
}