import { ReactNode, useState, useRef, useEffect } from "react"

type ContextMenuItem = {
  label: string
  onClick: () => void
  disabled?: boolean
}

type ContextMenuProps = {
  trigger: ReactNode
  items: ContextMenuItem[]
}

export function ContextMenu({ trigger, items }: ContextMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const menuRef = useRef<HTMLDivElement>(null)

  function handleContextMenu(e: React.MouseEvent) {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top + 24 })
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        close()
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  return (
    <div class="ContextMenu" onContextMenu={handleContextMenu}>
      {trigger}
      {isOpen && (
        <div
          ref={menuRef}
          class="ContextMenu_menu"
          style={{ left: position.x, top: position.y }}
        >
          {items.map((item, i) => (
            <button
              key={i}
              class="ContextMenu_item"
              onClick={() => { item.onClick(); close() }}
              disabled={item.disabled}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}