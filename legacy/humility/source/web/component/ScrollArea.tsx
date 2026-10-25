import type { ReactNode, CSSProperties } from "react"

type Props = {
  children: ReactNode
  style?: CSSProperties
}

export function ScrollArea({ children, style }: Props) {
  return (
    <div className="ScrollArea" style={{ overflow: "auto", ...style }}>
      {children}
    </div>
  )
}