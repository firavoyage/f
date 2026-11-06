import { scroll } from './scroll'

type toc = {
  headings: { type: string; id: string; content: string }[]
}

export function toc(props: toc) {
  const { headings } = props

  return h(
    'toc',
    h(
      scroll,
      { scrollbar: false },
      map(headings, (heading) =>
        h(
          `toc_${heading.type}`,
          h('a.', { href: `#${heading.id}` }, heading.content),
        ),
      ),
    ),
  )
}
