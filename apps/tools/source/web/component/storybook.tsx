// type name = string
// type label = string

type component = fn | {
  fn: fn
  props: props
  variants: Record<string, props>
}

type props = Record<string, prop>

export type prop = {
  name: string
  id?: string // = normalize id name
  type: type // how it should be rendered, not typeof value
  value: any
  options?: options // for select/radio
  placeholder?: string // for select/input/textarea
}

export type options = Record<string, string> | string[]

type type = 'checkbox' | 'switch' | 'select' | 'radio' | 'number' | 'input' | 'textarea'

type storybook = {
  storybook: Record<string, component>
}

export function Storybook({ storybook }: storybook) {
  /**
   * sidebar (bind ctrl b)
   *   list (taxonomy for variants, select first instead of expand when click)
   * main
   *   comp
   *   props?
   * 
   * search/command palette ctrl (shift) p
   * 
   * research storybook
   */
}
