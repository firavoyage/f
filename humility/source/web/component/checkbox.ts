type checkbox_props = {
  checked: boolean
  set_checked: (checked: boolean) => void
  [key: Key]: any
}

export function checkbox({ checked, set_checked, children, ...props }: checkbox_props) {
  function handle_click() {
    set_checked(!checked)
  }

  return h(
    checked ? 'button.checkbox.is_checked' : 'button.checkbox',
    {
      ...props,
      type: 'button',
      role: 'checkbox',
      onclick: handle_click,
    },
    h('span.checkbox_indicator', {}, checked ? '✓' : ''),
    children,
  )
}
