import Dropdown from "./dropdown"

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

  const ref = useRef()
  const select_ref = useRef()

  const items = Array.isArray(flexible_items) ?
    Object.fromEntries(map(flexible_items, item => [item, item])) :
    flexible_items

  const [open, toggle_open] = useToggle(false)

  return (
    <div className="select" {...p({ open })}>
      <button className="trigger" {...p({ onClick: toggle_open })}>
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
        <Dropdown {...p({ ref, align: 'center' })}>
          {
            map(items, ([id, name]) => (
              <button className="option" {...p({
                onClick() {
                  set_value(id)
                  toggle_open()
                }
              })}>{name}</button>
            ))
          }
        </Dropdown>
      }
    </div>
  )
}
