import { Scroll } from './scroll'
import { Button } from './button'
import { Popup } from './popup'
import { use_global } from './app'
import { Arg } from './arg'

type preferences = {
  open: boolean
  toggle_open: fn
  preferences: arg[]
}

type arg = {
  name: string
  id: string // global state key
  type: type // how it should be rendered, not typeof value
  // value: any
  // set_value: fn
  options?: options // for select/radio
  placeholder?: string // for select/input/textarea
}

type pref = {
  [category: string]: {
    [heading: string]: arg[] | arg[][]
  }
}

type type = 'checkbox' | 'switch' | 'select' | 'radio' | 'number' | 'input' | 'textarea'

// id (value) -> name (label)
type options = Record<string, string> | string[]

export function Preferences(props: preferences) {
  const { open, toggle_open, preferences } = props
  const [is_on_top, toggle_is_on_top] = useToggle(false)

  use_keyboard('esc', close)

  function close() {
    toggle_open(false)
  }

  return (
    <Popup {...p({ open, toggle_open })}>
      <div className="preferences">
        <div className="titlebar">
          <Button {...p({ class: 'button_search' })}>
            <Icon {...p({ name: 'search' })}></Icon>
          </Button>
          {
            // (!is_on_top) &&
            <div className="title">
              Preferences
            </div>
          }
          <Button {...p({ class: 'button_close', onClick: close, focusable: false })}>
            <Icon {...p({ name: 'close' })}></Icon>
          </Button>
        </div>
        <Scroll {...p({ toggle_is_on_top })}>
          <div className="body">
            {
              map(preferences, (pref) => {
                return (
                <Arg {...p({ ...pref, value: use_global.data[pref.id], set_value(v){
                  use_global.set_prop(pref.id, v)
                } })}
                ></Arg>
              )})
            }
          </div>
        </Scroll>
      </div>
    </Popup>
  )
}

