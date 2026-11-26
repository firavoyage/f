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
  const range = max - min
  const ratio = range > 0 ? Math.min(1, Math.max(0, (value - min) / range)) : 0

  function set_from_ratio(next_ratio: number) {
    const safe_step = step > 0 ? step : 1
    const raw_value = min + Math.min(1, Math.max(0, next_ratio)) * range
    const stepped_value = min + Math.round((raw_value - min) / safe_step) * safe_step
    set_value(Number(Math.min(max, Math.max(min, stepped_value)).toFixed(6)))
  }

  function handle_pointer(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    if (bounds.width > 0) {
      set_from_ratio((event.clientX - bounds.left) / bounds.width)
    }
  }

  function handle_keydown(event) {
    const safe_step = step > 0 ? step : 1
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault()
      set_value(Math.min(max, value + safe_step))
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault()
      set_value(Math.max(min, value - safe_step))
    } else if (event.key === 'Home') {
      event.preventDefault()
      set_value(min)
    } else if (event.key === 'End') {
      event.preventDefault()
      set_value(max)
    }
  }

  return h(
    'button.slider',
    {
      ...props,
      type: 'button',
      role: 'slider',
      onpointerdown: handle_pointer,
      onpointermove: (event) => {
        if (event.buttons) handle_pointer(event)
      },
      onkeydown: handle_keydown,
      style: { '--slider-value': `${ratio * 100}%`, ...props.style },
    },
    h('span.slider_track', {}),
    h('span.slider_thumb', {}),
  )
}
