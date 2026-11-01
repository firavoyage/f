type input = {
  value: string
  placeholder?: string
  set_value: (value: string | ((...args: any) => string)) => void
}

function input({ value, set_value, ...props }: input) {
  const { input } = structure('input', 'input')

  function handle_change(event) {
    set_value(event.target.value)
  }

  return input({ value, onchange: handle_change, ...props })
}

input = component(input)

export { input }
