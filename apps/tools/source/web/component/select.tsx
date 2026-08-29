type select = {
  value: any
  set_value: Function
  items: items
  placeholder?: any
  children?: any
}

// id (value) -> name (label)
type items = Record<string, string>

export function Select(props: select) {
  const { value, set_value, items, placeholder = '', children } = props

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
