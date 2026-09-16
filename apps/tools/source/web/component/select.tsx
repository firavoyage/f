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
}

export function Select(props: select) {
  const { value, set_value, options: flexible_items, placeholder = '', children } = props

  const items = Array.isArray(flexible_items) ?
    Object.fromEntries(map(flexible_items, item => [item, item])) :
    flexible_items
  const last_index = items.length - 1

  const [open, toggle_open] = useToggle(false)
  const [index, set_index] = useState(0)

  const anchor = useRef()
  const trigger = useRef()
  const options = useRef(new Map())

  function close() {
    toggle_open(false)

    // magically works as expected
    trigger?.current?.focus()
  }

  function navigate_up() {
    set_index((index) => )
  }

  use_keyboard('esc', close, { when: open })


  // focus on the first option after open
  useEffect(() => {
    if (!has(options.current, 0)) {
      return
    }

    options.current.get(0)?.focus?.()
    set_index(0)
  }, [open])

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
