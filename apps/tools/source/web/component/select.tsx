type select = {
  value: any
  set_value: Function
  items: items
  placeholder?: any
  children?: any
}

type item = string | { name: string, id: string }

type items = item[] | Record<string, string>

export function Select(props: select) {
  const { value, set_value, items: flexible_items, placeholder = '', children } = props

  const [open, toggle_open] = useToggle(false)

  function normalize_flexible_items(flexible_items: any) {
    if (typeof flexible_items == 'object') {
      return map(flexible_items, ([key, value]) => ({ name: value, id: key }))
    }
  }

  // preprocess items, build id -> name, so you can use has and map directly

  const items = normalize_flexible_items(flexible_items)

  function is_valid() {
    return true
  }

  function get_name(id: string) {
    return 'name'
  }

  return (
    <div className="select" {...p({ open })}>
      <button className="trigger" {...p({ onClick: toggle_open })}>
        {is_valid() ? get_name(value) : placeholder}
        {children}
      </button>
      <div className="popup">
        <button className="option">name</button>
      </div>
    </div>
  )
}
