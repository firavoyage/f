export function sidebar({ children }) {
  const [open, toggle_open] = use_state(false)

  use_keyboard('ctrl+b', () => toggle_open())

  return open && h('sidebar', children)
}
