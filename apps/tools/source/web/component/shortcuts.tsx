import { use_bind } from 'web/lib/use keyboard'

import type { shortcut } from 'web/component/app'
import { Scroll } from './scroll'
import { Button } from './button'
import { Popup } from './popup'

type shortcuts = {
  open: boolean
  toggle_open: fn
  shortcuts: shortcut[]
  call: Function
}

export function Shortcuts(props: shortcuts) {
  const { open, toggle_open, shortcuts, call } = props
  const [is_on_top, toggle_is_on_top] = useToggle(false)

  map(shortcuts, (shortcut) => {
    const { key, command } = shortcut
    use_bind(key, () => call(command))
  })

  use_bind('esc', close)

  function close() {
    toggle_open(false)
  }

  return (
    <Popup {...p({ open, toggle_open })}>
      <div className="shortcuts">
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
          {map(shortcuts, ({ command, key }) => (
            <Button className="shortcut">
              <div className="label">
                {command}
              </div>
              <div className="key">
                {key}
              </div>
            </Button>
          ))}
        </Scroll>
      </div>
    </Popup>
  )
}

