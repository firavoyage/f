import type { options } from 'action/tools'

import { use_keyboard } from "web/lib/use keyboard"
import Dropdown from "./dropdown"
import { Button } from "./button"

type select = {
  value: any
  set_value: Function
  options: options
  placeholder?: any
  children?: any
  navigate_out?: 'close' | 'ignore' | 'loop'
}

export function Select(props: select) {
  const { value, set_value, options: flexible_items, placeholder = '', children,
    navigate_out = 'close'
  } = props

  const items = Array.isArray(flexible_items) ?
    Object.fromEntries(map(flexible_items, item => [item, item])) :
    flexible_items
  const last_index = entries(items).length - 1

  const [open, toggle_open] = useToggle(false)
  const [index, set_index] = useState(0)

  const anchor = useRef()
  const trigger = useRef()
  const options = useRef(new Map())

  // restore focus on close
  function close() {
    toggle_open(false)

    // magically works as expected
    trigger?.current?.focus()
  }

  function navigate_up() {
    if (index == 0) {
      // safely omit to ignore, prevent default is default for shortcuts binded
      if (navigate_out == 'close') {
        close()
      } else if (navigate_out == 'loop') {
        set_index(last_index)
      }
    } else {
      set_index((v) => v - 1)
    }
  }

  function navigate_down() {
    if (index == last_index) {
      // safely omit to ignore, prevent default is default for shortcuts binded
      if (navigate_out == 'close') {
        close()
      } else if (navigate_out == 'loop') {
        set_index(0)
      }
    } else {
      set_index((v) => v + 1)
    }
  }

  function focus(index) {
    if (!has(options.current, index)) {
      return
    }

    options.current.get(index)?.focus?.()
  }

  // focus on the first option on open
  useEffect(() => {
    set_index(0)

    focus(0)
  }, [open])

  // focus the corresponding option when index change
  useEffect(() => {
    focus(index)
  }, [index])

  use_keyboard('tab', navigate_down, { when: open, priority: 800 })
  use_keyboard('ctrl+j', navigate_down, { when: open, priority: 800 })
  use_keyboard('down', navigate_down, { when: open, priority: 800 })

  use_keyboard('shift+tab', navigate_up, { when: open, priority: 800 })
  use_keyboard('ctrl+k', navigate_up, { when: open, priority: 800 })
  use_keyboard('up', navigate_up, { when: open, priority: 800 })

  use_keyboard('esc', close, { when: open, priority: 800 })

  return (
    <div className="select" {...p({ open })}>
      <button className="trigger" {...p({ onClick: toggle_open, ref: trigger })}>
        <span className="label">
          {has(items, value) ? items[value] : placeholder}
          {children}
        </span>
        <span className="icon_dropdown" {...p({ ref: anchor })}>
          <Icon {...p({ name: 'dropdown' })}></Icon>
        </span>
      </button>
      {
        open &&
        <Dropdown {...p({ anchor, align: 'center', click_outside: close })}>
          {
            map(items, ([id, name], index) => {
              const checked = value == id

              return (
                <Button className="option" {...p({
                  onClick() {
                    set_value(id)
                    close()
                  },
                  checked,
                  ref(element) {
                    options.current.set(index, element)
                  }
                })}>
                  <span className="label">
                    {name}
                  </span>
                  {
                    checked &&
                    <Icon {...p({ name: 'check' })}></Icon>
                  }
                </Button>
              )
            })
          }
        </Dropdown>
      }
    </div>
  )
}
