type textarea = {
  value: string
  placeholder?: string
  set_value: (value: string | ((...args: any) => string)) => void
}

export function textarea({ value, set_value, ...props }: textarea) {
  function handle_change(event) {
    set_value(event.target.value)
  }

  return h('textarea.textarea', {
    value,
    onchange: handle_change,
    oninput(e) {
      e.target.style.height = ''
      e.target.style.height = e.target.scrollHeight + 'px'
    },
    ...props,
  })
}
