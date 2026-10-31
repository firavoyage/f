import 'github-markdown-css/github-markdown.css'
import './app.css'

import { init_request, post } from 'lib/request'
import { s } from 'lib/web/state'
import { structure } from 'lib/web/component'
import { use_sync_theme } from 'lib/web/use sync theme'

import { debounce } from 'lodash-es'

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

    const timer = setTimeout(function() {
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
  const [page] = use_page()
  const [query, set_query] = useState({
    query: 'hello'
  })

  use_sync_theme('system')

  const { loading: is_loading, value: response } = useAsync(() =>
    post('read', { page }),
  )

  const search_results = use_query('search', query)

  log(search_results)

  if (is_loading) {
    // todo
    return
  }

  const { html } = response

  const { app, container, content } = structure()

  return app(container({ class: 'markdown-body' }, content({ html })))
  // return <div className='markdown-body'
  // // style={{maxWidth: '80ch'}}
  // dangerouslySetInnerHTML={{ __html: html }}></div>
}
