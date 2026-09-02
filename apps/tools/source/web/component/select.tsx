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

  const [open, toggle_open] = useToggle(false)

  return (
    <div className="select" {...p({ open })}>
      <button className="trigger" {...p({ onClick: toggle_open })}>
        {has(items, value) ? items[value] : placeholder}
        {children}
      </button>
      <div className="popup">
        {
          map(items, ([id, name]) => (
            <button className="option" {...p({ onClick() { set_value(id) } })}>{name}</button>
          ))
        }
      </div>
    </div>
  )
}
