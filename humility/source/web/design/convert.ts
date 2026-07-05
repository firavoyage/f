import { existsSync } from "node:fs";
import { parse } from "yaml";

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
    secondary: "{palette.blue.2}"
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

  function traverse(design, prefix = []) {
    if (typeof design != 'object') {
      if (typeof design == 'string' && has(existing_keys, design)) {
        styles[modes.default][css_var(prefix)] = `var(--${design.replaceAll('.', '-')})`
      } else {
        
      } 
    } else if (has(design, 'value')) {
      existing_keys[prefix.join(".")] = true
    } else {
      for (const [key, value] of Object.entries(design)) {
        traverse(value, [...prefix, key])
      }
    } 
  }
  

  return {
    "[data-accent=\"green\"]": {
      "--sys-color-bg-accent": "var(--ref-palette-accent-green)"
    }
  }
}

export function main(yaml: string) {
  // convert yaml to obj
  const design = parse(yaml)

  // convert

  // convert to css
}

convert(design)
