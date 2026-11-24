type radio_option = {
  value: string
  label: string
}

type radio_group_props = {
  value: string
  set_value: (value: string) => void
  options: radio_option[]
  name?: string
  [key: Key]: any
}

export function radio_group({
  value,
  set_value,
  options,
  name = 'radio_group',
  ...props
}: radio_group_props) {
  function handle_change(event) {
    set_value(event.target.value)
  }

  return h(
    'div.radio_group',
    props,
    ...map(options, (option) =>
      h(
        'label.radio_group_option',
        {},
        h(
          'input.radio_group_input',
          {
            type: 'radio',
            name,
            value: option.value,
            checked: value === option.value,
            onchange: handle_change,
          },
          null,
        ),
        h('span.radio_group_label', {}, option.label),
      ),
    ),
  )
}
