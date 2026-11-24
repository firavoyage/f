type switch_props = {
  checked: boolean
  set_checked: (checked: boolean) => void
  children?: any
  [key: Key]: any
}

export function switch_toggle({
  checked,
  set_checked,
  children,
  ...props
}: switch_props) {
  function handle_click() {
    set_checked(!checked)
  }

  return h(
    'button.switch',
    {
      ...props,
      type: 'button',
      role: 'switch',
      'aria-checked': checked,
      onclick: handle_click,
    },
    h('span.switch_thumb', {}),
    children,
  )
}
