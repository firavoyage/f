import { command } from 'web/component/app'

import { Scroll } from './scroll'
import { Button } from './button'
import { Popup } from './popup'
import { Input } from './input'

type commands = {
  open: boolean
  toggle_open: fn
  commands: Record<string, string>
}

export function Commands(props: commands) {
  const { open, toggle_open, commands } = props
  const [is_on_top, toggle_is_on_top] = useToggle(false)
  const [search, set_search] = useState('')
  const [focus, set_focus] = useState(0)

  const input = useRef()
  const list = useRef()

  const results = [
    ...map(commands, ([k, v]) => k),
    'foo',
    'bar',
    'baz',
    'asdf',
  ]

  const last_index = results.length - 1

  function close() {
    toggle_open(false)
  }

  function navigate_up() {
    set_focus((v) => v == 0 ? last_index : v - 1)
  }

  function navigate_down() {
    set_focus((v) => v == last_index ? 0 : v + 1)
  }

  function select(index) {
    close()
    command(results[index])
  }

  use_keyboard('esc', close, {
    priority: 100,
    when: open
  })

  // focus the input on mount (on open), it's counterintuitively always mounted
  useEffect(() => {
    if (!input.current) {
      return
    }

    input.current?.select()
  }, [open])

  // scroll into view on focus change
  useEffect(() => {
    if (!list.current) {
      return
    }

    const child = list.current?.children?.[focus];

    child?.scrollIntoView?.({ behavior: 'auto', block: 'nearest' });
  }, [focus])

  // reset focus on search change
  useEffect(() => {
    set_focus(0)
  }, [search])

  use_keyboard('tab', navigate_down, { when: open })
  use_keyboard('ctrl+j', navigate_down, { when: open })
  use_keyboard('down', navigate_down, { when: open })

  use_keyboard('shift+tab', navigate_up, { when: open })
  use_keyboard('ctrl+k', navigate_up, { when: open })
  use_keyboard('up', navigate_up, { when: open })

  use_keyboard('enter', () => select(focus), { when: open })

  return (
    <Popup {...p({ open, toggle_open, backdrop: false, align: 'top' })}>
      <div className="commands">
        <div className="search">
          <Input {...p({ value: search, set_value: set_search, ref: input })}></Input>
        </div>
        <Scroll {...p({ toggle_is_on_top })}>
          <div className="body" {...p({ ref: list })}>
            {
              map(results, (result, index) => (
                <Button {...p({
                  focus: focus == index,
                  onClick() {
                    select(index)
                  }
                })}>
                  {result}
                </Button>
              ))
            }
          </div>
        </Scroll>
      </div>
    </Popup>
  )
}

