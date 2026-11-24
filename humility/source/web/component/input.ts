type input = {
  value: string
  set_value: (value: string) => void
  [key: Key]: any
}

export function input({ value, set_value, ...props }: input) {
  function handle_change(event) {
    set_value(event.target.value)
  }

  return h('input.input', {
    ...props,
    type: 'text',
    value,
    onchange: handle_change,
  })
}

