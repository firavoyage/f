import { use_bind } from "web/lib/use keyboard"
import Dropdown from "./dropdown"
import { Button } from "./button"

type select = {
  value: any
  set_value: Function
  options: options
  placeholder?: any
  children?: any
}

// id (value) -> name (label)
export type options = Record<string, string> | string[]

export function Select(props: select) {
  const { value, set_value, options: flexible_items, placeholder = '', children } = props

  const items = Array.isArray(flexible_items) ?
    Object.fromEntries(map(flexible_items, item => [item, item])) :
    flexible_items

  const ref = useRef()
  const trigger_ref = useRef()

  const [open, toggle_open] = useToggle(false)
  const close = () => {
    toggle_open(false)

    // magically works as expected
    trigger_ref?.current?.focus()
  }

  use_bind('esc', close)

  return (
    <div className="select" {...p({ open })}>
      <button className="trigger" {...p({ onClick: toggle_open, ref: trigger_ref })}>
        <span className="label">
          {has(items, value) ? items[value] : placeholder}
          {children}
        </span>
        <span className="icon_dropdown" {...p({ ref })}>
          <Icon {...p({ name: 'dropdown' })}></Icon>
        </span>
      </button>
      {
        open &&
        <Dropdown {...p({ ref, align: 'center', click_outside: close })}>
          {
            map(items, ([id, name]) => (
              <Button className="option" {...p({
                onClick() {
                  set_value(id)
                  close()
                }
              })}>{name}</Button>
            ))
          }
        </Dropdown>
      }
    </div>
  )
}
