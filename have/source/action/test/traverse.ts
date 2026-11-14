import { traverse, fetch, setup_browser } from 'action/index'

const browser = await setup_browser({
  should_hide_window: false,
})

await traverse(
  fetch,
  'https://cs61a.org/fa26/',
  {
    max_depth: 3,
    // interval: 0
  },
)

// browser.close()

// await traverse(
//   fetch,
//   // 'https://en.wikipedia.org/',
//   // 'https://wikipedia.org/',
//   'https://cs61a.org/fa26/',
//   {
//     max_depth: 1,
//     max_page_count: 10,
//   },
// )

// browser.close()
