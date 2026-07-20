import { useEffect, useRef } from "react"

type Props = {
  x: number
  y: number
  onClose: () => void
}

export function ContextMenu({ x, y, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [onClose])

  return (
    <div ref={ref} className="ContextMenu" style={{ left: x, top: y }}>
      <div className="ContextMenu_item">copy</div>
      <div className="ContextMenu_item">paste</div>
      <div className="ContextMenu_item">delete</div>
    </div>
  )
}