import { go } from 'fuzzysort'

import { text } from 'web/utility/text'

import { input } from './input'
import { modal } from './modal'
import { scroll } from './scroll'

const max_search_results = 100

const command_prefix = '>'

export function modal_search({ files, commands, shortcuts }) {
  const [open, set_open] = use_state(false)

  const [query, set_query] = use_state('')
  const field = use_ref()
  const focus_element = use_ref()

  // command -> shortut
  let shortcut_map = {}

  map(shortcuts, (shortcut) => {
    const { command, key, when = true } = shortcut

    shortcut_map[command] = key
    use_keyboard(key, commands[command], {
      when,
    })
  })

  use_keyboard('ctrl+p', () => {
    set_query('')
    set_open(true)
  })

  use_keyboard('ctrl+shift+p', () => {
    set_query(command_prefix)
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

  let items
  if (query.startsWith(command_prefix)) {
    items = map(commands, ([command, fn]) => ({
      // id: command,
      label: text(command),
      info: shortcut_map[command] ?? '',
      fn,
    }))
  } else {
    items = files
  }

  // items = [...items, ...items, ...items]

  let results = search(normalize_query(query), items)

  let first_index = 0
  let last_index = items.length - 1
  const [focus, set_focus] = use_state(0)

  let controls = {
    down() {
      if (focus == last_index) {
        set_focus(first_index)
      } else {
        set_focus((focus) => focus + 1)
      }
    },
    up() {
      if (focus == first_index) {
        set_focus(last_index)
      } else {
        set_focus((focus) => focus - 1)
      }
    },
    select(index) {
      if (results.length > 0) {
        results[index].fn()
        set_open(false)
      }
    },
  }

  use_effect(() => {
    set_focus(0)
  }, [query])

  use_effect(() => {
    focus_element.current?.scrollIntoView?.({
      behavior: 'auto',
      block: 'nearest',
    })
  }, [open, focus])

  use_keyboard('ctrl+j', controls.down, {
    when: open,
  })
  use_keyboard('tab', controls.down, {
    when: open,
  })
  use_keyboard('ctrl+k', controls.up, {
    when: open,
  })
  use_keyboard('shift+tab', controls.up, {
    when: open,
  })
  use_keyboard('enter', () => controls.select(focus), {
    when: open,
  })

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
          h(
            scroll,
            map(results, ({ id, label, info, fn }, index) =>
              h(
                'button.modal_search_result',
                {
                  focus: focus == index,
                  onclick: () => controls.select(index),
                  ref: focus == index ? focus_element : undefined,
                },
                h('modal_search_result_label', label),
                h('modal_search_result_info', info),
              ),
            ),
          ),
        ),
      ),
    )
  )
}

function search(query, items) {
  return map(
    go(query, map(items, (item) => (
      {
        ...item,
        target: `${item.label} ${item.info}`
      }
    )), {
      key: 'target',
      limit: max_search_results,
    }),
    (result) => result.obj,
  )
}

function normalize_query(query: string) {
  if (query.startsWith(command_prefix)) {
    query = query.slice(1)
  }

  query = query.trim()

  return query
}
