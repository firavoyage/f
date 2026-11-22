export function modal({open, set_open, children}) {
  return h(
    'modal',
    h(
      'modal_backdrop',
    ),
    h(
      'modal_content',
      children
    )
  )
}