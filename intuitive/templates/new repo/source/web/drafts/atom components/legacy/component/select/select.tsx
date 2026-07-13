import { useState, useRef, useEffect } from "react"

type SelectOption = {
  value: string
  label: string
}

type SelectProps = {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
}

export function Select({ options, value, onChange, placeholder = "select...", disabled }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const selected = options.find(o => o.value === value)

  function handleSelect(option: SelectOption) {
    onChange?.(option.value)
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(e: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  return (
    <div class="Select" ref={selectRef} data-disabled={disabled} data-open={isOpen}>
      <button
        class="Select_trigger"
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span>{selected?.label || placeholder}</span>
        <svg class="Select_arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <div class="Select_menu">
          {options.map(option => (
            <button
              key={option.value}
              class="Select_option"
              data-selected={option.value === value}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}