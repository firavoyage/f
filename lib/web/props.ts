import clsx from 'clsx'
import parse_style from 'style-to-js'

/**
 * Write flexible attrs on html tags for react
 *
 * idempotent
 */
export function p<T>(props: T): T {
  const converted_props: any = {}

  for (const [key, value] of Object.entries(props)) {
    if (key == 'class' || key == 'className' || key == 'classname') {
      if (is(value, 'array')) {
        converted_props.className = clsx(converted_props.className, ...value)
      } else {
        converted_props.className = clsx(converted_props.className, value)
      }
    } else if (key == 'style' && typeof value == 'string') {
      converted_props.style = parse_style(value)
    } else {
      if (key.startsWith('on')) {
        const normalized_key =
          key.slice(0, 2) + key[2].toUpperCase() + key.slice(3)
        converted_props[normalized_key] = value
      } else {
        if (is(value, 'boolean')) {
          if (value == true) {
            converted_props[key] = key
            // converted_props[key] = 't'
            // converted_props[key] = 'true'
          } else {
            // omit such attr
            // converted_props[key] = nil
          }

          continue
        }
        
        converted_props[key] = value
      }
    }
  }

  return converted_props
}
