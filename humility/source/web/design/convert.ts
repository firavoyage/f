import { parse } from "yaml";

const non_existing_mode = 'non_existing_mode'

const design = {
  modes: {
    theme: ["light", "dark"],
    density: ["comfortable", "compact", "cozy"],
  },
  palette: {
    blue: {
      1: "#123",
      2: {
        value: "#456",
        dark: "#789"
      }
    }
  },
  color: {
    primary: "palette.blue.1",
    secondary: "{palette.blue.2}",
    teriary: {
      value: 'foo.bar',
      // comfortable: 'barbar', // will err
      cozy: 'hello'
    }
  }
}

export function convert(design) {
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

  const styles = {

  }

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
      throw err({type: non_existing_mode, message: `non existing mode: ${mode}`})
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

export function main(yaml: string) {
  // convert yaml to obj
  const design = parse(yaml)

  // convert

  // convert to css
}

convert(design)
