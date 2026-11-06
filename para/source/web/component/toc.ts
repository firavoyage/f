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
      h(
        'toc_content',
        map(headings, (heading) =>
          h(
            'a.',
            { href: `#${heading.id}` },
            h(`toc_${heading.type}`, heading.content),
          ),
        ),
      ),
    ),
  )
}
