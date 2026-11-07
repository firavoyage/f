import 'github-markdown-css/github-markdown.css'
import theme from 'web/design/primer.yaml'
import 'web/design/primer.css'

import { post } from 'lib/request'
import { s } from 'lib/web/state'
import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import { use_style } from 'lib/web/style'

import { search } from './search'
import { scroll } from './scroll'
import { toc } from './toc'

const App = app
export { App }

const jk_scroll_distance = 60
const du_scroll_percentage = 0.5
const space_scroll_percentage = 0.9
const scroll_behavior: 'smooth' | 'instant' = 'instant'
const distances = {
  j: jk_scroll_distance,
  k: -jk_scroll_distance,
  d: du_scroll_percentage,
  u: -du_scroll_percentage,
  space: space_scroll_percentage,
  'shift+space': -space_scroll_percentage,
}
const field_tags = ['input', 'textarea']

const use_page = s('', {
  url_param: 'page',
})

function use_query(endpoint, query, debounce = 0) {
  const [result, set_result] = useState()

  useEffect(() => {
    if (!query) {
      set_result([])
      return
    }

    let is_current_request = true

    const timer = setTimeout(function () {
      post(endpoint, query).then((data) => {
        if (is_current_request) {
          set_result(data)
        }
      })
    }, debounce)

    return () => {
      is_current_request = false
      clearTimeout(timer)
    }
  }, [JSON.stringify(query)])

  return result
  // return [result, is_loading]
}

function app() {
  use_sync_theme('system')
  use_window_active()

  use_style(theme)

  const content = useRef()

  const [page, set_page] = use_page()
  const [headings, set_headings] = useState([])

  const [query, set_query] = useState('')
  const page_response = use_query('read', page)
  const search_response = use_query('search', query)

  const html = page_response?.html ?? ''

  const search_results = search_response?.items ?? []

  useEffect(() => {
    if (!content.current) {
      return
    }

    set_headings(extract_headings(content.current))
  }, [page_response])

  // bind scrolling shortcuts
  map(distances, ([key, distance]) => {
    use_keyboard(
      key,
      (e) => {
        if (has(field_tags, document.activeElement?.tagName.toLowerCase())) {
          return
        }

        e.preventDefault()
        scroll_by(distance)
      },
      { prevent_default: false },
    )
  })

  // reset scrolltop on page change
  // todo: remember scroll top/anchor
  useEffect(() => {
    content.current.scrollTop = 0
  }, [page_response])

  function scroll_by(distance) {
    if (!content.current) {
      return
    }

    if (abs(distance) <= 1) {
      distance = window.innerHeight * distance
    }

    content.current.scrollBy({
      top: distance,
      behavior: scroll_behavior,
    })
  }

  let title = headings?.[0]?.content ?? 'Para'

  return h(
    h('title.', title),
    h(
      'app',
      h(
        scroll,
        { ref: content },
        h('page', h('page_content', h('markdown-body', h({ html })))),
      ),
      h(search, {
        query,
        set_query,
        results: search_results,
        select_result: set_page,
      }),
      h(toc, { headings }),
    ),
  )
}

function extract_headings(node) {
  const headings = []

  const heading_nodes = node.querySelectorAll('h1, h2, h3, h4, h5, h6')

  heading_nodes.forEach((heading) => {
    const type = heading.tagName.toLowerCase()

    // Generate an id if one doesn't exist
    if (!heading.id) {
      const slug = heading.textContent
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')

      heading.id = slug
    }

    headings.push({
      type,
      id: heading.id,
      content: heading.textContent.trim(),
    })
  })

  return headings
}
