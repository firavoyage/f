# plan

implement tool calls

> archi thread

---

use case:

- analyze py intro pre issues
- analyze math ref ans issues
- setup forgejo (or _repo_) via ssh, register free domain name on duckdns via browser automation (human may pick a name or handles a bit captcha stuff maybe), and binds

---

organize (things as) drafts.

> quite weird, some drafts/todo are in purpose

# todo

## m

move thread

rename thread

## s

extension/export: migrate

---

web/modal search: fix search algorithm

fuzzysort doesnt work as expected. some valid results are omitted, idk.

---

utility/thread: generalize build plain context

- support system prompt
- handle failed messages
- connect consecutive messages of the same role, serialize tool results as user
- reject invalid context?

---

support more broadcasting events

- list

support more actions

- edit title

---

implement fetch tool.

use cache if available.

connect to have via cli, through json (e.g. action, payload). stdin maybe, or flag.

would be easy to escape and dump some string.

alternatively, you can leverage js ecosystem (await import).

---

fetch, search, scrape

---

thinking

is it included in subsequent messages?

---

- edit
- branch
- regenerate

---

- modify
- delete

---

export ("build")

share <!-- ? -->

---

import

---

search threads

## c

lib/style: compile at build time to avoid full page reload

config vite to run a script whenever certain file changes.

---

lib/style: support all css capability

```
[raw selector]: | # e.g. css animation
  raw content (design tokens supported)
[raw selector]:
  prop: value
component:
  element: prop-[raw value] # resolution for raw value should be supported, wo guessing
  element: p-16px # px is automatically recognized
  element: [raw prop]-[raw value]
  element: [raw prop: raw value]
```

---

lib/style: support both css var and mixins.

e.g. `h2: mt-12 mb-6 text-2xl bold, ... text.h2`

you may consider it mixin if each (space separated) is valid util.

---

web/modal search: save history, put recent threads/commands first wo query

localstorage? sync?

---

utility/generate: log payload (raw delta and metadata, i.e. last payload typically, or any in general) while streaming

---

utility/generate: support openrouter specific details, such as reasoning tokens and costs

w that, you may show sum of costs directly, wo guessing/calc (by model cost and tokens), wo checking the provider site

---

web: create fadein animation per block

like google ai mode

---

think: hide or delete? trash folder?

---

web: streaming, full paragraph (or blocks) fade in animation

you may fade in loc if it's merely a code block.

---

web: scrollbar transition

---

web: drag

- resize sidebar
- move threads

---

web: + extension scroll to bottom on delta or on read, or scroll to top on read

currently it preserves scroll top across threads, quite awkward.

---

web: + vimlike navigation extension

vimium works. you may make it app specific.

---

serve/append server log: give every ws client a readable id when they (dis)connect/(un)subscribe to a thread

## w

web/vimium: support mod key navigation

e.g. ctrl jkhl

dont quite know. maybe you should use alt jkhl instead. alt arrow keys have no effects (unlike ctrl or shift), and it's easier to press. same for vscode.

could be a bit difficult to mirror an element and measure visual wrapping for jk. not suppported in terminals.

typically, on vscode

- arrowkeys (alt jkhl): move
- ctrl alt hl: move by word <!-- currently alt hl works the same as ctrl alt. redundancy... -->
- ctrl alt jk: move viewport
- shift alt hjlk: select by char
- ctrl shift alt hjlk: select by word

wait... currently

- alt jk moves current line (same as alt up down, while alt left right has no effect)
- alt hl does the same as ctrl alt hl

---

action/list: support range

---

abstract websocket as lib

~~impl websocket lib.~~

every browser request should take response.

server broadcast doesnt have to.

it will work if you can display correct for a state, and update the state on event.

---

abstract generate as lib ~~impl generation lib~~

stream payload, receive

# backlog

## impl

implement timeout

idk why it does nothing when wifi is disabled

well seems it continues and works anyway

expected?

## use cases

find and organize useful agent skills all over the internet

e.g. https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md

---

research ideas in chinese textbook

Tags. Meta. Essence.

(project chinese)

---

document and create a (interactive) pre of art movements.

---

research llm vid transcription

nickle angel made some courses with ppt in her 20s.

https://space.bilibili.com/137863629

transcription? test.

(maybe i could fetch some more proven ones. but she is cute.)

<!-- upd: they are deleted before archival for some reason. anyway there are more relevant cp vids. and generally i can test anyway. im not specifically curious about their level. -->

---

write editorials for project euler

---

generate dicts

i did not found good llms generated dicts on google.

(project leisure: dict)

---

organize berryberry fav

integrate w have maybe

---

convert a legacy docs repo to md

e.g. host gnome hig and kde hig on para

and apple hig maybe

---

research manus use cases

---

dl maimai dx songs.

touhou. vocaloid. etc.

---

create funshiki films index.

e.g. publish on project all, or as in have

---

## archi, deps, integrations

research mcp to cli

e.g. playwright mcp as cli

---

build an abstraction to integrate w im platforms

e.g. write a tg bot for fun

---

telegram rev proxy cli.

(assume the desktop is working.)

x11 is really easy to automate. mouse. keyboard. screenshot.

all with one liner.

reg tg with android app and 5sim.

think: which method to use to get data. maybe web, though idk it has all the features i want. ocr is the last resort. official bot is often not enough.

i wanna research ppl, right? maybe i could export data (use the official feature for channel and group chats, use my impl for profiles).

upd:

telegram is one way to dht the internet. there might be appox. 100 people in each small groups, and they overlap aggressively. i suspect there are less than 1k active chinese devs.

disqus is another way. i already know diygod and mewx.

github issues based approaches... well... let me see.

https://www.mewx.org/blog/202603/website-v4-ai-powered-redesign/

the blogging era.

make readme personas clearer.

## ux, features

research and create some non interactive widgets

- math graph
- color
- trend
- weather
- stock / currency / polymarket

research types. (maybe py lib plus google sans)

<!-- though, i wish google ai mode could show the original code... upd: well, it does. (?) no, it does not. it's not the graph code. though it's quite simple. just a bit default styling (margin, font) and pyplotlib knowledge. it shows an animation on web, but i suppose it's just fetching data, not rendering in js. -->

---

prototype simple workflows

```yaml
name: research project (company)
- get company name as x
- x history
- x philosohpy
- all features of x
- all highly requested features of x
- all limitations of x
- situation of x
- future of x
- ...
```

it's easy to formalize.

just add some metadata, like the method to use.

- ask
- parallel or sequential

you can also research a person, or research an english word.

you should also add metadata about what it is (how to render it)

- prompt (yeah you could indicate by role specifically for this, but you do not have to)
- response
- parallel (you do not have to show like `< 1/5 >` like normal edit. you have options. but as it's automated, you could differ it, and then you could render as you like.)

all nodes can be referenced directly. you can copy its id.

---

integrate w terminal

what is "ghostty" about?

why is it complex, if any.

i would like to (auto) save history and export in md.

## market

research terminal bench

<!-- inadequate and incomprehensive tasks, seems -->

---

research dify and analyze ux

<!-- it has no moat. visual ui is nothing. unlike agents, mcp, skills, tool calls, extensions, hooks, quick unclear. -->

---

# done

<!-- purpose.md -->
