import { command } from 'web/component/app'

import { Scroll } from './scroll'
import { Button } from './button'
import { Popup } from './popup'

type commands = {
  open: boolean
  toggle_open: fn
  commands: Record<string, string>
}

export function Commands(props: commands) {
  const { open, toggle_open } = props
  const [is_on_top, toggle_is_on_top] = useToggle(false)

  use_bind('esc', close)

  function close() {
    toggle_open(false)
  }

  return (
    <Popup {...p({ open, toggle_open, backdrop: false, align: 'top' })}>
      <div className="commands">
        <div className="titlebar">
          {/* Search shortcuts */}
          {/* {
            (!is_on_top) &&
            <div className="title">
              Shortcuts
            </div>
          } */}
          <Button {...p({ class: 'button_close', onClick: close, focusable: false })}>
            <Icon {...p({ name: 'close' })}></Icon>
          </Button>
        </div>
        <Scroll {...p({ toggle_is_on_top })}>
          <div className="body">

          </div>
        </Scroll>
      </div>
    </Popup>
  )
}

