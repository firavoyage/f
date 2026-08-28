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
  const { value, set_value, items, placeholder = '', children } = props

  const [open, toggle_open] = useToggle(false)

  // preprocess items, build id -> name, so you can use has and map directly

  function is_valid() {
    return true
  }

  function get_name(id: string) {
    return 'name'
  }

  return (
    <div className="select" {...p({ open })}>
      <button className="trigger" {...p({ onClick: toggle_open })}>
        {is_valid()? get_name(value): placeholder}
        {children}
      </button>
      <div className="popup">
        <button className="option">name</button>
      </div>
    </div>
  )
}
