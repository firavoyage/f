import 'github-markdown-css/github-markdown.css'
import './app.css'

import { init_request, post } from 'lib/request'
import { s } from 'lib/web/state'
import { use_sync_theme } from 'lib/web/use sync theme'

import { input } from './input'

init_request('http://localhost:9010')

const use_page = s(
  'drafts/20261102 para research design systems vimium scrolling approaches tailwind w semantic classes.md',
  {
    url_param: 'page',
  },
)

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
  const [is_search_open, set_is_search_open] = useState(false)

  const [page, set_page] = use_page()

  const [query, set_query] = useState('hello')
  // const [query, set_query] = useState({
  //   query: 'hello',
  // })

  use_sync_theme('system')

  // const { loading: is_loading, value: response } = useAsync(() =>
  //   post('read', { page }),
  // )
  const page_response = use_query('read', page)

  const search_response = use_query('search', query)
  // const search_response = use_query('search', query)

  const search_results = search_response?.items || []

  use_keyboard('ctrl+p', () => set_is_search_open(true))
  use_keyboard('esc', () => set_is_search_open(false))

  if (!page_response) {
    return
  }

  const { html } = page_response

  return h(
    'app',
    h('page', h('page_content', h('markdown-body', h({ html })))),
    is_search_open &&
      h(
        'search',
        h(
          'search_content',
          h(input, {
            value: query,
            set_value: set_query,
          }),
          map(search_results, (result) =>
            h(
              'button.search_result',
              {
                onclick() {
                  set_page(result)
                },
              },
              result,
            ),
          ),
        ),
      ),
  )
  // return <div className='markdown-body'
  // // style={{maxWidth: '80ch'}}
  // dangerouslySetInnerHTML={{ __html: html }}></div>
}

const App = app
export { App }
