import { parseArgs } from 'node:util'

type parse_options = Record<
  string,
  {
    type: 'number' | 'string' | 'boolean'
    short?: string // must be single char
    default?
  }
>

export function parse_options(options: parse_options): any {
  let results = {}

  let normalized_env = obj(map(process.env, ([k, v]) => [k.toLowerCase(), v]))

  let converted_options = {}

  map(options, ([key, option]) => {
    const { type, short, default: default_ } = option

    let default_value = default_

    if (has(normalized_env, key)) {
      default_value = normalized_env[key]
    }

    if (type == 'boolean') {
      converted_options[key] = {
        type,
        default: default_value,
      }
    } else {
      converted_options[key] = {
        type: 'string',
        default: str(default_value),
      }
    }

    if (short) {
      converted_options[key].short = short
    }
  })

  const { values, positionals } = parseArgs({
    options: converted_options,
    strict: false,
  })

  map(options, ([key, option]) => {
    const { type, short, default: default_ } = option

    results[key] = values[key]

    if (type == 'number') {
      results[key] = num(values[key])
    }
  })

  return results
}
