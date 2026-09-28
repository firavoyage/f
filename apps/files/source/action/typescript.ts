import { parse } from "yaml"

type type_to_args = {
  yaml: string
}

export function type_to_args({yaml: input_text}: type_to_args) {
  const input = parse(input_text)
  const output = []

  for (const [key, value] of entries(input)) {
    if (value == 'number') {
      output.push({
        name: key,
        type: 'number',
        value: 0
      })
    } 
  }

  return output
}