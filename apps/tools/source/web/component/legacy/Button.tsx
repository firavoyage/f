import type { ReactNode, MouseEvent } from "react"

type Props = {
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export function Button({ children, onClick }: Props) {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  )
}