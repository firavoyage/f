import { input } from './input'
import { modal } from './modal'

export function modal_search({ files, commands, shortcuts }) {
  const [open, set_open] = use_state(false)

  const [query, set_query] = use_state('')
  const field = use_ref()

  use_keyboard('ctrl+p', () => {
    set_open(true)
  })

  use_keyboard('esc', () => log('esc pressed'))

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
      h(
        'modal_prompt',
        h(input, {
          value: query,
          set_value: set_query,
          placeholder: text('search threads by title'),
          ref: field,
          // autofocus: true
        }),
      ),
    )
  )
}
