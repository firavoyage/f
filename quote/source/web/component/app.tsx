import { init_request, post } from 'lib/request'

init_request('http://localhost:9005')

export function App() {
  const { value: quotes, loading: is_loading } = useAsync(async () =>
    post('read'),
  )

  log({quotes, is_loading})

  return ''
}
