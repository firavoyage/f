import { post } from 'lib/request'

export function use_query(endpoint, payload, debounce = 0) {
  const [result, set_result] = use_state()
  
  use_effect(() => {
    let is_current_request = true
    
    set_timeout(async function() {
      let data = await post(endpoint, payload)
      if (is_current_request) {
        set_result(data)
      } 
    }, debounce)

    return () => {
      is_current_request = false
    }
  }, [payload])

  return result
  // return [result, is_loading]
}
