import { traverse, fetch } from 'action/index'

traverse((url) => fetch(url, {
  should_hide_window: false
}), 'https://cs61a.org/fa26/', {
  max_depth: 1,
  max_page_count: 10,
})