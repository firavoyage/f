import { input } from './input'
import { scroll } from './scroll'

type search = {
  query
  set_query
  results
  select_result
}

export function search(props: search) {
  const { query, set_query, results, select_result } = props

  const [open, set_open] = useState(false)
  const [focus, set_focus] = useState(0)

  const field = useRef()
  const items = useRef()

  use_keyboard('ctrl+p', () => set_open(true))
  use_keyboard('esc', close, {
    // when it shows on top of others, close search first
    priority: 100,
    // do not take priority when it's hidden
    when: open,
  })

  use_keyboard('tab', navigate_down, { when: open })
  use_keyboard('ctrl+j', navigate_down, { when: open })
  use_keyboard('down', navigate_down, { when: open })

  use_keyboard('shift+tab', navigate_up, { when: open })
  use_keyboard('ctrl+k', navigate_up, { when: open })
  use_keyboard('up', navigate_up, { when: open })

  use_keyboard('enter', () => select(focus), { when: open })

  // reset focus when query changes
  useEffect(() => {
    set_focus(0)
  }, [query])

  // focus the input on mount (on open), it's counterintuitively always mounted
  useEffect(() => {
    if (!field.current) {
      return
    }

    field.current?.select()
  }, [open])

  // scroll into view on focus change
  useEffect(() => {
    if (!items.current) {
      return
    }

    const child = items.current?.children?.[focus]

    child?.scrollIntoView?.({ behavior: 'auto', block: 'nearest' })
  }, [focus])

  const first_index = 0
  const last_index = results.length - 1

  function close() {
    set_open(false)
  }

  function navigate_up() {
    set_focus((v) => (v == first_index ? last_index : v - 1))
  }

  function navigate_down() {
    set_focus((v) => (v == last_index ? first_index : v + 1))
  }

  function select(index) {
    close()

    if (results.length == 0) {
      return
    }
    select_result(results[index])
  }

  return (
    open &&
    h(
      'search',
      h(
        'search_content',
        h(
          'search_query',
          h(input, {
            value: query,
            set_value: set_query,
            ref: field,
            type: 'text',
          }),
        ),
        h(
          scroll,
          { should_preserve_position_on_resize: false },
          h(
            'search_results',
            { ref: items },
            map(results, (result, index) =>
              h(
                'button.search_result',
                {
                  focus: focus == index,
                  onclick() {
                    select_result(result)
                  },
                },
                result,
              ),
            ),
          ),
        ),
      ),
    )
  )
}
