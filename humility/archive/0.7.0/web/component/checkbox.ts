type checkbox = {
  checked: boolean
  set_checked: (checked: boolean) => void
  [key: Key]: any
}

export function checkbox({ checked, set_checked, ...props }: checkbox) {
  function handle_change(event) {
    set_checked(event.target.checked)
  }

  return h('input.checkbox', {
    ...props,
    type: 'checkbox',
    checked,
    onchange: handle_change,
  })
}
