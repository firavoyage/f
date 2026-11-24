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
  const [open, set_open] = use_state(false)
  const selected_option = options.find((option) => option.value === value)

  function handle_toggle() {
    set_open(!open)
  }

  function handle_select(option_value: string) {
    set_value(option_value)
    set_open(false)
  }

  return h(
    'div.select',
    props,
    h(
      'button.select_trigger',
      {
        type: 'button',
        'aria-haspopup': 'listbox',
        'aria-expanded': open,
        onclick: handle_toggle,
      },
      h('span.select_label', {}, selected_option?.label ?? ''),
      h('span.select_icon', {}, '⌄'),
    ),
    open
      ? h(
          'div.select_options',
          { role: 'listbox' },
          ...map(options, (option) =>
            h(
              'button.select_option',
              {
                type: 'button',
                role: 'option',
                'aria-selected': option.value === value,
                onclick: () => handle_select(option.value),
              },
              h('span.select_option_label', {}, option.label),
              option.value === value ? h('span.select_option_check', {}, '✓') : null,
            ),
          ),
        )
      : null,
  )
}
