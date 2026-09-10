import type { options } from 'action/tools'

type radio = {
  value: any
  set_value: Function
  options: options
  placeholder?: any
  children?: any
}

export function Radio(props: radio) {
  const { value, set_value, options: flexible_items, placeholder = '', children } = props

  const items = Array.isArray(flexible_items) ?
    Object.fromEntries(map(flexible_items, item => [item, item])) :
    flexible_items

  return (
    <div className="radio">
      {
        map(items, ([id, name]) => {
          const checked = value == id

          return (
            <button className="item" {...p({ checked, onClick() { set_value(id) } })}>
              <span className="indicator">
                <span className="icon_radio">
                  {checked && (
                    <span className="icon_radio_checked"></span>
                  )}
                </span>
              </span>
              <span className="label" {...p({})}>{name}</span>
            </button>
          )
        })
      }
    </div>
  )
}
