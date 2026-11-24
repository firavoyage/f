type slider_props = {
  value: number
  set_value: (value: number) => void
  min?: number
  max?: number
  step?: number
  [key: Key]: any
}

export function slider({
  value,
  set_value,
  min = 0,
  max = 100,
  step = 1,
  ...props
}: slider_props) {
  function handle_change(event) {
    set_value(Number(event.target.value))
  }

  return h('input.slider', {
    ...props,
    type: 'range',
    value,
    min,
    max,
    step,
    onchange: handle_change,
  })
}
