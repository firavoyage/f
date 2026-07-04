import { ReactNode, HTMLAttributes } from "react"

type ScrollAreaProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function ScrollArea({ children, ...props }: ScrollAreaProps) {
  return (
    <div class="ScrollArea" {...props}>
      <div class="ScrollArea_content">
        {children}
      </div>
    </div>
  )
}