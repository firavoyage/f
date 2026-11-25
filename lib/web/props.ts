import clsx from 'clsx'
import parse from 'style-to-js'

/**
 * Write react props flexibly
 *
 * idempotent
 */
export function p<T>(props: T): T {
  const converted_props: any = {}

  for (const [key, value] of Object.entries(props)) {
    if (key == 'class' || key == 'className') {
      if (is(value, 'array')) {
        converted_props.className = clsx(...value)
      } else {
        converted_props.className = clsx(value)
      }
    } else if (key == 'style' && typeof value == 'string') {
      // assume style couldnt map to an array

      converted_props.style = parse(value)
    } else {
      if (key.startsWith('data-') || key.startsWith('aria-')) {
        converted_props[key] = value
      } else if (key.startsWith('on')) {
        const normalized_key =
          key.slice(0, 2) + key[2].toUpperCase() + key.slice(3)
        converted_props[normalized_key] = value
      } else {
        const normalized_key = kebab_to_camel(key)

        if (is(value, 'boolean')) {
          if (value == true) {
            converted_props[normalized_key] = 'true'
            // converted_props[normalized_key] = "t"
            // converted_props[normalized_key] = true
          } else {
            converted_props[normalized_key] = nil
            // converted_props[normalized_key] = false
            // continue
          }
        } else {
          converted_props[normalized_key] = value
        }
        // converted_props[normalized_key] = value
      }
    }
  }

  return converted_props
}
