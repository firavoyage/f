type radio_option = {
  value: string
  label: string
}

type radio_group_props = {
  value: string
  set_value: (value: string) => void
  options: radio_option[]
  [key: Key]: any
}

export function radio_group({ value, set_value, options, ...props }: radio_group_props) {
  return h(
    'div.radio_group',
    { ...props, role: 'radiogroup' },
    ...map(options, (option) => {
      const checked = value === option.value

      return h(
        checked ? 'button.radio_group_option.is_checked' : 'button.radio_group_option',
        {
          role: 'radio',
          type: 'button',
          onclick: () => set_value(option.value),
        },
        h('span.radio_group_indicator', {}, checked ? h('span.radio_group_dot', {}) : null),
        h('span.radio_group_label', {}, option.label),
      )
    }),
  )
}
