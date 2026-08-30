type radio = {
  value: any
  set_value: Function
  items: items
  placeholder?: any
  children?: any
}

// id (value) -> name (label)
type items = Record<string, string> | string[]

export function Radio(props: radio) {
  const { value, set_value, items: flexible_items, placeholder = '', children } = props

  const items = Array.isArray(flexible_items) ?
    Object.fromEntries(map(flexible_items, item => [item, item])) :
    flexible_items

  return (
    <div className="radio">
      {
        map(items, ([id, name]) => (
          <button className="item" {...p({ checked: value == id, onClick() { set_value(id) } })}>
            <span className="indicator"></span>
            <span className="label" {...p({})}>{name}</span>
          </button>
        ))
      }
    </div>
  )
}
