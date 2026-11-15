type textarea = {
  value: string
  placeholder?: string
  set_value: (value: string | ((...args: any) => string)) => void
}

export function textarea({ value, set_value, ...props }: textarea) {
  const ref = useRef()

  function handle_change(event) {
    set_value(event.target.value)
  }

  useEffect(() => {
    const textarea = ref.current
    if (!textarea) return

    // 1. Temporarily hide scrollbar track to avoid flashing layouts
    const originalOverflow = textarea.style.overflowY
    textarea.style.overflowY = 'hidden'

    // 2. Reset height to 'auto' to allow the textarea to shrink if text was deleted
    textarea.style.height = 'auto'

    // 3. Capture the exact content height calculated by the browser engine
    let targetHeight = textarea.scrollHeight

    // Guard clause: If element is hidden or detached (0px), don't collapse it
    if (targetHeight === 0) {
      textarea.style.overflowY = originalOverflow
      return
    }

    // 4. Handle browser engine edge-cases where borders aren't added to scrollHeight
    const style = window.getComputedStyle(textarea)
    if (style.boxSizing === 'border-box') {
      const borderTop = parseFloat(style.borderTopWidth) || 0
      const borderBottom = parseFloat(style.borderBottomWidth) || 0

      if (textarea.clientHeight === targetHeight) {
        targetHeight += borderTop + borderBottom
      }
    }

    // 5. Apply the calculated height and restore overflow settings
    textarea.style.height = `${targetHeight}px`
    textarea.style.overflowY = originalOverflow
  }, [value])

  useEffect(() => {
    const handleResize = () => {
      const textarea = ref.current
      if (!textarea) return
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return h('textarea.textarea', {
    value,
    onchange: handle_change,
    ref,
    ...props,
  })
}
