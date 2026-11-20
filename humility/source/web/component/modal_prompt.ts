import { input } from './input'
import { modal } from './modal'

export function modal_prompt({ open, set_open, initial_value, set_value, placeholder }) {
  const [content, set_content] = use_state(initial_value)

  const field = use_ref()

  use_keyboard('enter', () => {
    set_value(content)

    set_open(false)
  }, {
    when: document.activeElement == field.current
  })

  use_keyboard('esc', () => {
    set_open(false)
  })

  return open && h(
    modal,
    h(
      'modal_prompt',
      h(input, { value: content, set_value: set_content, placeholder, ref: field }),
    ),
  )
}
