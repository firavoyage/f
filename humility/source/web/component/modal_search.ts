import { go } from 'fuzzysort'

import { input } from './input'
import { modal } from './modal'

const max_search_results = 100

export function modal_search({ files, commands, shortcuts }) {
  const [open, set_open] = use_state(false)

  const [query, set_query] = use_state('')
  const field = use_ref()

  use_keyboard('ctrl+p', () => {
    set_open(true)
  })

  use_keyboard('ctrl+shift+p', () => {
    set_open(true)
  })

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

  let items = map(commands, ([command, fn]) => ({
    // id: command,
    label: text(command),
    fn,
  }))

  let results = items

  let first_index = 0
  let last_index = items.length - 1

  return (
    open &&
    h(
      modal,
      h(
        'modal_search',
        h(
          'modal_search_query',
          h(input, {
            value: query,
            set_value: set_query,
            placeholder: text('search threads by title'),
            ref: field,
            // autofocus: true
          }),
        ),
        h(
          'modal_search_results',
          map(results, ({label, fn}) =>
            h(
              'button.modal_search_result',
              {
                onclick: () => {
                  fn()
                  set_open(false)
                },
              },
              label,
            ),
          ),
        ),
      ),
    )
  )
}

function search(query, items) {
  return go(query, items, {
    key: 'label',
    limit: max_search_results
  })
}
