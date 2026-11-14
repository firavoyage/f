import { fetch } from 'action/fetch'

// fetch('https://cs61a.org/fa26/')
// fetch('https://www.wikipedia.org/')
// fetch('https://example.org')

fetch('https://cs61a.org/fa26/staff/', {
  timeout: 10,
  should_hide_window: false,
  should_close_window_when_finish: false
})
