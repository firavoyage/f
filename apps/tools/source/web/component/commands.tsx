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
  const { open, toggle_open } = props
  const [is_on_top, toggle_is_on_top] = useToggle(false)
  const [search, set_search] = useState('')

  const input = useRef()

  use_bind('esc', close)

  function close() {
    toggle_open(false)
  }

  useEffect(() => {
    if (!input.current) {
      return
    }

    input.current?.focus()
  })

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
              map(results, (result) => (
                <Button {...p({})}>
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

