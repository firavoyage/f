<!-- search should not be the default behavior. i will search and find a way. -->

# 0.0

search:

- duckduckgo (baseline reference) https://html.duckduckgo.com/html/?q=search+keyword&kp=-2&kl=us-en&k1=-1&kd=1&ia=web
- mojeek (cookieless plain html format) https://www.mojeek.com/search?q=search+keyword&safe=0&reg=us&t=50&dlen=160&theme=light&view=classic&ui=simple
- brave search (direct server-rendered query) https://search.brave.com/search?q=search+keyword&source=web&offset=0&spell=1
- searxng (public metasearch instance) https://searx.be/search?q=search+keyword&category_general=1&language=en-us

read pages:

- jina https://r.jina.ai/https://en.wikipedia.org/wiki/Philosophy
- direct via browser (not recommended)
- direct via curl (fast but fragile)

# 0.1

do not hesitate to search if things are not obvious

1. web fetch the direct search url

- duckduckgo https://html.duckduckgo.com/html/?q=search+keyword&kp=-2&kl=us-en&k1=-1&kd=1
- brave search https://search.brave.com/search?q=search+keyword&source=web&offset=0&spell=1
- mojeek https://www.mojeek.com/search?q=search+keyword&safe=0&reg=us&t=50&dlen=160&theme=light&view=classic&ui=simple
- searxng https://searx.be/search?q=search+keyword&category_general=1&language=en-us

if blocked, choose another engine or use playwright

2. read pages

- webfetch jina https://r.jina.ai/https://en.wikipedia.org/wiki/Philosophy
- if failed, use playwright

# 0.1

if asked, search with these two steps

1. web fetch a direct search url

- duckduckgo https://html.duckduckgo.com/html/?q=search+keyword&kp=-2&kl=us-en&k1=-1&kd=1
- brave search https://search.brave.com/search?q=search+keyword&source=web&offset=0&spell=1
- mojeek https://www.mojeek.com/search?q=search+keyword&safe=0&reg=us&t=50&dlen=160&theme=light&view=classic&ui=simple
- searxng https://searx.be/search?q=search+keyword&category_general=1&language=en-us

2. read pages

- webfetch jina and you can read the markdown of the page https://r.jina.ai/https://en.wikipedia.org/wiki/Philosophy
- use playwright if needed
