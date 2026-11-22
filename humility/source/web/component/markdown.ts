import { marked } from 'marked'

type markdown = {
  markdown: string
  ref?: any
}

export const markdown = memo(function markdown({
  markdown: value,
  ref: forwarded_ref,
}: markdown) {
  const ref = use_ref<HTMLElement>()

  use_effect(() => {
    if (!ref.current) {
      return
    }

    const template = document.createElement('template')
    template.innerHTML = render(value)
    ref.current.replaceChildren(template.content.cloneNode(true))

  }, [value])

  if (forwarded_ref) {
    forwarded_ref.current = ref.current
  }

  return h('markdown', { ref })
})

function render(value: string) {
  return marked.parse(value, {
    gfm: true,
    breaks: true,
  })
}

render = memoize(render)
