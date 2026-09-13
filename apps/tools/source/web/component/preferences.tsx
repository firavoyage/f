import { Scroll } from './scroll'
import { Button } from './button'
import { Popup } from './popup'

type preferences = {
  open: boolean
  toggle_open: fn
  preferences: item[]
}

type item = {
  name: string
  id?: string // = normalize id name
  type: type // how it should be rendered, not typeof value
  value: any
  set_value: fn
  options?: options // for select/radio
  placeholder?: string // for select/input/textarea
}

type type = 'checkbox' | 'switch' | 'select' | 'radio' | 'number' | 'input' | 'textarea'

// id (value) -> name (label)
type options = Record<string, string> | string[]

export function Preferences(props: preferences) {
  const { open, toggle_open } = props
  const [is_on_top, toggle_is_on_top] = useToggle(false)

  use_bind('esc', close)

  function close() {
    toggle_open(false)
  }

  return (
    <Popup {...p({ open, toggle_open })}>
      <div className="preferences">
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

