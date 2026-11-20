export function sidebar({ open, set_open, children }) {
  return open && h('sidebar', children)
}
