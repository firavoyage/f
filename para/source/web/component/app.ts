import 'github-markdown-css/github-markdown.css'
import './app.css'

import { init_request, post } from 'lib/request'
import { s } from 'lib/web/state'
import { structure } from 'lib/web/component'
import { use_sync_theme } from 'lib/web/use sync theme'

init_request('http://localhost:9010')

export function App() {
  use_sync_theme('system')

  const { loading: is_loading, value: response } = useAsync(() =>
    post('read', {
      folder: 'drafts',
      path: '20260302 1900 intuitive npm publish hello world.md',
    }),
  )

  const { loading: is_loading_, value: response_ } = useAsync(() =>
    post('search', {
      query: 'hello',
    }),
  )

  log(response_)

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
