type process = {
  process: item[]
  set_process: any
}

type item = {
  tool: string
  args?: arg[]
}

type arg = {
  name: string
  id?: string // = name to lower case rp space w underscore
  type: type
  variant?: string // how it should be rendered (e.g. checkbox or slider for bool?)
  value: any // = default value
  default_value: any
}

type type = 'number' | 'string'

export function Process(props: process) {
  return 'foo'
}