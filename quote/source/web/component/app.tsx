import { init_request, post } from 'lib/request'

init_request('http://localhost:9005')

export function App() {
  const name = useAsync(async () => post('read'))

  log(name)

  return ''
}