import { ReactNode, MouseEvent } from "react"

type ButtonProps = {
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export function Button({ children, onClick, disabled, type = "button" }: ButtonProps) {
  return (
    <button
      class="Button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}