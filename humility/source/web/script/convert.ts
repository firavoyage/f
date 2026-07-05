// @ts-nocheck
import { read, write } from "lib/file";
import { parse } from "yaml";

const non_existing_mode = 'non_existing_mode'

function convert(design) {
  // parse modes
  const modes = {
    default: ":root"
  }

  if (design.modes) {
    for (const [mode, variants] of Object.entries(design.modes)) {
      modes.default += `,[data-${mode}="${variants[0]}"]`

      for (const variant of variants.slice(1)) {
        modes[variant] = `[data-${mode}="${variant}"]`
      }
    }
  }

  const styles = {}

  for (const selector of Object.values(modes)) {
    styles[selector] = {}
  }

  delete design.modes

  const existing_keys = {}

  // recursive
  function flatten(design, prefix = []) {
    if (typeof design != 'object') {
      existing_keys[prefix.join(".")] = true
    } else if (has(design, 'value')) {
      existing_keys[prefix.join(".")] = true
    } else {
      for (const [key, value] of Object.entries(design)) {
        flatten(value, [...prefix, key])
      }
    }
  }
  flatten(design)

  function css_var(prefix) {
    return `--${prefix.join('-')}`
  }

  function set(design, prefix, mode = "default") {
    if (!has(modes, mode)) {
      throw err({ type: non_existing_mode, message: `non existing mode: ${mode}` })
    }

    if (typeof design == 'string') {
      if (has(existing_keys, design)) {
        styles[modes[mode]][css_var(prefix)] = `var(--${design.replaceAll('.', '-')})`
        return
      } else if (has(existing_keys, design.startsWith('{') && design.endsWith('}') && design.slice(1, -1)
      )) {
        design = design.slice(1, -1)
        styles[modes[mode]][css_var(prefix)] = `var(--${design.replaceAll('.', '-')})`
        return
      }
    }

    styles[modes[mode]][css_var(prefix)] = design
  }

  function traverse(design, prefix = []) {
    if (typeof design != 'object') {
      set(design, prefix)
    } else if (has(design, 'value')) {
      for (const [key, value] of Object.entries(design)) {
        if (key == 'value') {
          set(value, prefix)
        } else {
          set(value, prefix, key)
        }
      }
    } else {
      for (const [key, value] of Object.entries(design)) {
        traverse(value, [...prefix, key])
      }
    }
  }

  traverse(design)

  return styles
}

export async function main(yaml: string) {
  yaml ??= await read(0)

  // convert yaml to obj
  const design = parse(yaml)

  // convert
  const styles = convert(design)

  let css = ''
  // convert to css
  for (const [selector, variables] of Object.entries(styles)) {
    if (Object.keys(variables).length == 0) {
      continue
    }
    css += `${selector} {\n`

    for (const [prop, value] of Object.entries(variables)) {
      css += `  ${prop}: ${value};\n`
    }

    css += '}\n\n'
  }

  // just be explicit (you could log. a newline does not matter.)
  await write(1, css)

  return css
}
