// cf... will it work?

import { scrape } from 'action/index'

await scrape('https://codeforces.com/group/t0XHpzFt15/contest/731243/', {
  should_visit(url) {
    return (
      url.startsWith(
        'https://codeforces.com/group/t0XHpzFt15/contest/731243/',
      ) && !has(url, '?mobile') && !has(url, '?locale')
    )
  },
})

// await scrape('https://codeforces.com/group/t0XHpzFt15/contest/731243/')
