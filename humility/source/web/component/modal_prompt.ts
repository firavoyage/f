import { modal } from './modal'

export function modal_prompt({
  open,
  set_open,
  initial_value,
  set_value,
  placeholder,
}) {
  const [content, set_content] = use_state(initial_value)

  const field = use_ref()

  use_effect(() => {
    set_content(initial_value)
  }, [initial_value])

  use_keyboard(
    'enter',
    () => {
      set_value(content)

      set_open(false)
    },
    {
      when: document.activeElement == field.current,
    },
  )

  use_keyboard(
    'esc',
    () => {
      set_open(false)
    },
    {
      when: open,
    },
  )

  use_effect(() => {
    if (!open || !field.current) {
      return
    }

    field.current.focus()
  }, [open])

  return (
    open &&
    h(
      modal,
      { set_open },
      h(
        'modal_prompt',
        h('input.input', {
          value: content,
          set_value: set_content,
          placeholder,
          ref: field,
        }),
      ),
    )
  )
}
