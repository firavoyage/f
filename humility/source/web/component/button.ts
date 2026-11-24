// have default .button style, use h('button.foo') instead when you want custom style
export function button({ children, ...props }) {
  return h('button.button', props, children)
}