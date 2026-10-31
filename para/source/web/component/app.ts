import 'github-markdown-css/github-markdown.css'
import './app.css'

import { init_request, post } from 'lib/request'
import { s } from 'lib/web/state'
import { structure } from 'lib/web/component'
import { use_sync_theme } from 'lib/web/use sync theme'

import { input } from './input'

init_request('http://localhost:9010')

const use_page = s(
  'drafts/20260302 1900 intuitive npm publish hello world.md',
  {
    url_param: 'page',
  },
)

export function use_query(endpoint, query, debounce = 0) {
  const [result, set_result] = useState([])

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
  }, [query])

  return result
  // return [result, is_loading]
}

export function App() {
  const [is_search_open, set_is_search_open] = useState(false)

  const [page, set_page] = use_page()
  const [query, set_query] = useState({
    query: 'hello',
  })

  use_sync_theme('system')

  const { loading: is_loading, value: response } = useAsync(() =>
    post('read', { page }),
  )

  const search_results = use_query('search', query)

  use_keyboard('ctrl+p', () => set_is_search_open(true))
  use_keyboard('esc', () => set_is_search_open(false))

  log(search_results)

  if (is_loading) {
    return
  }

  const { html } = response

  const { app, container, content } = structure()
  const { search, search_content } = structure('search')
  const { search_result } = structure('search', 'button')

  return app(
    container({ class: 'markdown-body' }, content({ html })),
    is_search_open &&
      search(
        search_content(
          input({ value: query, set_value: set_query }),
          map(search_results, (result) =>
            search_result(
              {
                onclick() {
                  set_query({
                    query: result,
                  })
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
