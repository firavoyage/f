type select_option = {
  value: string
  label: string
}

type select_props = {
  value: string
  set_value: (value: string) => void
  options: select_option[]
  [key: Key]: any
}

export function select({ value, set_value, options, ...props }: select_props) {
  function handle_change(event) {
    set_value(event.target.value)
  }

  return h(
    'select.select',
    { ...props, value, onchange: handle_change },
    ...map(options, (option) =>
      h('option', { value: option.value }, option.label),
    ),
  )
}
