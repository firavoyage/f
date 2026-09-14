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

  use_bind('esc', close)

  function close() {
    toggle_open(false)
  }

  return (
    <Popup {...p({ open, toggle_open, backdrop: false, align: 'top' })}>
      <div className="commands">
        <Input {...p({ value: search, set_value: set_search })}></Input>
        <Scroll {...p({ toggle_is_on_top })}>
          <div className="body">

          </div>
        </Scroll>
      </div>
    </Popup>
  )
}

