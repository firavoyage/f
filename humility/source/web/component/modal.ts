export function modal({ set_open, children }) {
  const modal_ref = use_ref()

  use_effect(() => {
    function dismiss_outside(event) {
      if (!modal_ref.current?.contains(event.target)) {
        set_open(false)
      }
    }

    document.addEventListener('click', dismiss_outside)
    return () => document.removeEventListener('click', dismiss_outside)
  }, [set_open])

  return h(
    'modal',
    h('modal_backdrop'),
    h('modal_content', { ref: modal_ref }, children),
  )
}
