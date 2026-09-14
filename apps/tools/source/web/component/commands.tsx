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

  function close() {
    toggle_open(false)
  }

  use_bind('esc', close)

  useEffect(() => {
    if (!input.current) {
      return
    }

    input.current?.focus()
  })

  function navigate_up() {
    // ?
    set_focus((v) => v - 1)
  }

  function navigate_down() {
    set_focus((v) => v + 1)
  }

  use_bind('tab', navigate_down)
  use_bind('ctrl+j', navigate_down)
  use_bind('down', navigate_down)
  use_bind('shift+tab', navigate_up)
  use_bind('ctrl+k', navigate_up)
  use_bind('up', navigate_up)

  const results = [
    'foo',
    'bar',
    'baz',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
    'asdf',
  ]

  return (
    <Popup {...p({ open, toggle_open, backdrop: false, align: 'top' })}>
      <div className="commands">
        <div className="search">
          <Input {...p({ value: search, set_value: set_search, ref: input })}></Input>
        </div>
        <Scroll {...p({ toggle_is_on_top })}>
          <div className="body">
            {
              map(results, (result, index) => (
                <Button {...p({
                  focus: focus == index,
                  onClick() {
                    close()
                    log(handle(() => command(commands[result])))
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

