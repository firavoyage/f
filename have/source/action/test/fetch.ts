import { fetch, setup_browser } from 'action/fetch'

// fetch('https://cs61a.org/fa26/')
// fetch('https://www.wikipedia.org/')
// fetch('https://example.org')

// await fetch('https://cs61a.org/fa26/staff/', {
//   should_hide_window: false,
//   // should_close_window_when_finish: false
// })
// await fetch('https://cs61a.org/fa26/staff/', {
//   should_hide_window: false,
//   // should_close_window_when_finish: false
// })

const browser = await setup_browser({
  should_hide_window: false
})

await fetch('https://cs61a.org/fa26/staff/', {
  timeout: 1,
  // should_hide_window: false,
  // should_close_window_when_finish: false
})


