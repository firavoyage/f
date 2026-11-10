import { post } from 'lib/request'

export function use_query(endpoint, query, debounce = 0) {
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
