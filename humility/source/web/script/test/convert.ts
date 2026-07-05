import { stringify } from "yaml"
import { main } from "../convert"

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

const utilitarian = `
# adwaita design tokens

modes:
  theme:
    - light
    - dark
  accent:
    - blue
    - teal
    - green
    - yellow
    - orange
    - red
    - pink
    - purple
    - slate
  density:
    - comfortable
    - compact
    - cozy

palette:
  accent:
    blue: oklch(61.4% 0.164 255)
    teal: oklch(60.3% 0.098 213)
    green: oklch(59.4% 0.139 147)
    yellow: oklch(67.4% 0.142 76)
    orange: oklch(65.4% 0.196 42)
    red: oklch(60.3% 0.217 22)
    pink: oklch(65.1% 0.158 352)
    purple: oklch(52.5% 0.175 317)
    slate: oklch(60.1% 0.037 247)

  # no need to overthink, 1% difference is trivial
  # prefer standard over adwaita
  gray:
    50: oklch(99.0% 0 0)
    100: oklch(97.7% 0 0)
    200: oklch(92.6% 0 0)
    300: oklch(85.6% 0 0)
    400: oklch(77.1% 0 0)
    500: oklch(67.5% 0 0)
    600: oklch(56.9% 0 0)
    700: oklch(45.3% 0 0)
    800: oklch(33.0% 0 0)
    900: oklch(19.8% 0 0)
    950: oklch(13.0% 0 0)

  # todo: think
  success: "#78e9ab"
  warning: "#ffc252" # cd9309?
  error: "#ff938c" # destructive

  # not used anywhere, kept for future proof

  # blue:
  #   1: "#99c1f1"
  #   2: "#62a0ea"
  #   3: "#3584e4"
  #   4: "#1c71d8"
  #   5: "#1a5fb4"

  # green:
  #   1: "#8ff0a4"
  #   2: "#57e389"
  #   3: "#33d17a"
  #   4: "#2ec27e"
  #   5: "#26a269"

  # yellow:
  #   1: "#f9f06b"
  #   2: "#f8e45c"
  #   3: "#f6d32d"
  #   4: "#f5c211"
  #   5: "#e5a50a"

  # orange:
  #   1: "#ffbe6f"
  #   2: "#ffa348"
  #   3: "#ff7800"
  #   4: "#e66100"
  #   5: "#c64600"

  # red:
  #   1: "#f66151"
  #   2: "#ed333b"
  #   3: "#e01b24"
  #   4: "#c01c28"
  #   5: "#a51d2d"

  # purple:
  #   1: "#dc8add"
  #   2: "#c061cb"
  #   3: "#9141ac"
  #   4: "#813d9c"
  #   5: "#613583"

  # brown:
  #   1: "#cdab8f"
  #   2: "#b5835a"
  #   3: "#986a44"
  #   4: "#865e3c"
  #   5: "#63452c"

  # deprecated, use gray instead

  # light:
  #   1: "#ffffff"
  #   2: "#f6f5f4"
  #   3: "#deddda"
  #   4: "#c0bfbc"
  #   5: "#9a9996"

  # dark:
  #   1: "#77767b"
  #   2: "#5e5c64"
  #   3: "#3d3846"
  #   4: "#241f31"
  #   5: "#000000"

  # just use white and black directly in css
  # it's never meant to be changed, or any contextual

  # white: "#fff"
  # black: "#000"

color:
  bg:
    primary:
      value: "palette.gray.50"
      dark: "palette.gray.900"
    secondary:
      value: "palette.gray.200"
      dark: "palette.gray.800"
    tertiary:
      value: "palette.gray.300"
      dark: "palette.gray.700"
    hover:
      value: "palette.gray.200"
      dark: "palette.gray.800"
    pressed:
      value: "palette.gray.200"
      dark: "palette.gray.800"
    accent:
      value: "palette.accent.blue"
      teal: "palette.accent.teal"
      green: "palette.accent.green"
      yellow: "palette.accent.yellow"
      orange: "palette.accent.orange"
      red: "palette.accent.red"
      pink: "palette.accent.pink"
      purple: "palette.accent.purple"
      slate: "palette.accent.slate"

  fg:
    primary:
      value: "palette.gray.800"
      dark: "white"
    secondary:
      value: "palette.gray.800"
      dark: "white"
    tertiary:
      value: "palette.gray.800"
      dark: "white"

spacing:
  1: "0.1875rem"
  2: "0.25rem"
  3: "0.375rem"
  4: "0.5625rem"
  5: "0.75rem" # component baseline
  6: "1.125rem"
  8: "1.5rem"
  10: "2.25rem"
  12: "3rem"

font:
  size:
    xs: "0.75rem"
    sm: "0.875rem"
    md: "1rem"
    lg: "1.125rem"
    xl: "1.25rem"
    2xl: "1.5rem"
    3xl: "1.875rem"
    4xl: "2.25rem"
  line-height:
    tight: "1.25"
    normal: "1.5"
    relaxed: "1.75"
  weight:
    normal: "400"
    medium: "500"
    semibold: "600"
    bold: "700"
  family:
    sans: '"Adwaita Sans", sans-serif'
    monospace: '"Adwaita Mono", monospace'

radius:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  full: "9999px"

size: # icon-size
  small: "14px"
  normal: "16px"
  large: "32px"

scrollbar:
  width: "8px"
  thumb: "#bbb"
  thumb-hover: "#999"
  thumb-active: "#888"

focus-ring:
  color: "rgba(53, 132, 228, 0.5)"
  width: "2px"
  offset: "-2px"
`

await main(utilitarian)

// await main(stringify(design))
