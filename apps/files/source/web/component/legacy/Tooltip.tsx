import type { ReactNode } from "react"

type Props = {
  content: string
  show: boolean
  children: ReactNode
}

export function Tooltip({ content, show, children }: Props) {
  return (
    <span className="Tooltip">
      {children}
      {show && <span className="Tooltip_content">{content}</span>}
    </span>
  )
}