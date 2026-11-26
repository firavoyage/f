type html = {
  html: string
  ref?: any
}

export const html = memo(function html({ html: value, ref: forwarded_ref }: html) {
  const ref = use_ref<HTMLElement>()

  use_effect(() => {
    if (!ref.current) {
      return
    }

    const template = document.createElement('template')
    template.innerHTML = value
    ref.current.replaceChildren(template.content.cloneNode(true))

    if (forwarded_ref) {
      forwarded_ref.current = ref.current
    }
  }, [value])

  log('foo')

  return h('html', { ref })
})
