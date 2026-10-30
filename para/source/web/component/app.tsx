import 'github-markdown-css/github-markdown.css';

import { init_request, post } from 'lib/request'
import { state } from 'lib/web/state'

export const use_global = state({
  folder: '',
  path: ''
}, {
  
})

init_request('http://localhost:9010')

export function App() {
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

  return <div className='markdown-body'
  // style={{maxWidth: '80ch'}}
  dangerouslySetInnerHTML={{ __html: html }}></div>
}
