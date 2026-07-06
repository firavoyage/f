humility

readme · roadmap · notes · research

---

i could not compete with anyone.

> Be warm. Be strong. Be resilient.

it's my code. use my way. make it mine.

---

archi: observable, reproducible hooks

the relationship of messages.

some ideas:

(normalize before and after when needed for each step. e.g. check clarity/spec before trying to get real responses, polish and apply styling before showing to the user, for each message generate 3 responses and pick one, etc.)

plan -> do (give what, do what, how to verify) -> plan (call tools like test/ci? work or fail? how is it? move forward, iterate/try again, try new way, or give up) -> do (run a command? search? browse? given what do what) -> ... -> plan -> done

---

archi: agentic

(normalize before and after when needed for each step)

plan -> do (give what, do what, how to verify) -> plan (how is it? move forward, iterate/try again, try new way, or give up) -> do -> ... -> plan -> done

it's linear.

---

ux: branch chat

```
By popular request: you can now branch conversations in ChatGPT, letting you more easily explore different directions without losing your original thread.

Available now to logged-in users on web.

very requested feature!
```

Gesture: swipe between chats. Open in new page. Permalink. Swipe to switch branches. Edit/stop if wrong. Delete to feel peace of mind, to bin.

A history. Undo each step. Any step, no need to also undo steps after it if not depending. Git merge.

upd:

you know when you typed a wrong prompt (edit) or you want to explore a new topic (branch).

ofc you could open an edition in new tab (swipe for example) or remove a branch.

---

archi: agentic, spec driven

write spec.

agent could only do clear things.

(or it will figure out itself, might not expected... more flexible?)

knowledge and structure.

for coding, folder structure, files, fns, tests, docs, etc.

Predictable. Deterministic. Certainty. Peace. I mean, spec, plan, files, fn, names, styles, docs, ref. Confirm before proceed.

Spec.

Design fn. Don't decide naming and taxonomy. Although you can suggest.

Design call flow or deps. Design testing.

the problem is llms are not really intelligent.

if you dont write explicit spec and clarify... it might not know.

if you dont tell, it simply wont know. if you tell, but in a generic style, like some prinicples, it might know, but sometimes it still might not (you think you should use a stable polling. it uses conventional/mediocre unstable listener. you think it's redundant, actually it might not, but at least you wanna test. it does not.).

humans have intuition.

---

archi: agentic mindset

```
- Agent 必须有自主判断力的专家。
- Skill 是可复用的能力，可以区分为指令型和知识型。
- MCP / Hook 是纯粹的工具。

理解 Claude Code 最近的工程实践，在现在这个时间点是非常必要的。写好一个插件，也是一种很好的实践。最近工作之外的爱好就是保持信息压缩的同时大量更新
```

structure. knowledge. they are the same.

within a skill you tell llms how to solve a specific problem.

how to, the method, comes from reality and truth.

decision: no. you have knowledge. and nothing more. mcp is too heavy. either wrap (to cli) or generalize (to knowledge in plain text). dont overthink it.

---

archi: human like agentic

an agent is a human.

just use readme.md.

no need to use agents.md (if it has i will read in the future maybe)

upd: actually, maybe a human is an agent in my readme writing style...

---

archi: proactive agentic

think:

What does human in the loop do. Think different when get stuck. Ask the question itself.

"You should let the human be as lazy as possible"

"You can predict ahead as if the user will accept the suggestion."

---

archi: vcs

Use git. Store a version state on a move. Apply a version.

decision: (?)

---

ia: flexible

You can do the same thing in many ways.

you can cd to the working dir, and run humility.

you can run humility, and open the folder on gui.

you can just run humility. i will create a folder in docker.

you can export the folder or just move and name it.

---

archi: fast default for agents

i think chatgpt is too slow.

it's wise to choose flash as the default model.

---

archi: search over static weights

Research web, tests, or books. Don't rely on weights.

---

archi: cli over mcp.

- it's not extensible or composable. it's not unix (text based, stateless). it's not pure. you could not know what there actually is without reading itself, control the data, or make it work with your apps. you could not call it in the simple way (cli or request) without its own sdk.
- it's not cost efficient. it adds cost without doing anything esp when you dont need to know all the tools. you have to impl progressive disclosure yourself.

maybe you should stop impl it. and wrap mcp providers instead.

---

archi: search filter

context pollution is heavy.

it gives the warmest hope and the deepest frustration.

mediocrity, maybe.

---

pm: use cases

they are just instructions. either event listener (action), interval, or timeout.

they are use cases. not how it works. i kind of love exploring the ideas and possiblities, though.

check new tweets (in any act pub / rev proxy). add to resume. categorize aoh.

research jit.

- can menci speak jp
- what's jiang zi jun's github id
- what's the background of ryo lu

---

ia: cohesive

entity (like names, books) can be viewed on side panel.

---

ux: specialized components for regular tasks

google ai.

"quick access from across the web"

"top search results" (i dont like it though)

"interactive player"

"mark" (blue as highlight or red as warning)

...

so many dedicated components. find them all?

---

ux: shortcut

chatgpt.

now, on "if you want, i can ..."

it might show a clickable prompt.

ux research: many user copy and paste.

(yet, ctrl enter has no effect when editing msg! i have to click send.)

btw,

it shows "i can do something". the prompt is "Do something".

i suppose it's llm generated instead of strip and capitalize.

---

ia: progressive disclosure

summary details

collapse long code

---

fe: fetch all needed info at once

google ai mode fetches the answer one by one.

it does not dump the full data you need.

obviously, the scrollbar grows step by step.

---

ux: shortcut

learn from & auto complete common words.

- meaning
- implication
- how does it work
- the history of
- research ppl (background, education, famility, childhood, career, ...)

add disambi context if needed.

ref: gmail compose

---

ux: shortcut

you can apply a workflow, often through the powerful extensions.

- queue the same question when you stop (dont care tokens). if you use a hot key to repeat, it can. (with better context, it could answer directly).
- queue a few common follow ups. (answer directly, question the question, ...)

---

ux: rich link preview

somehow, google ai mode seems to have impl the aria/accessibility for interactive links which benefits exporting markdown.

a link is not a link. it's a popup (title, img, summary, site icon, site name, maybe a one or a list of these) when you hover, and a (site icon, site name, +n references) button.

---

pm: history of prompt engineering

https://prompt.16x.engineer/

- raw prompt of todo
- related code
- named instructions

---

pm: research manus

manus.

manus definitedly have some built in knowledge.

like "..." unless explicitly asked. "..." by default.

it leverages some best practices (not really).

like show prob/confidence after replying, custom xml format (prompt engineering), imagine 3 and pick 1.

---

ia: folder naming, research vscode

seti (default).

- git commit
- github issues
- build / workspace (bazel, the foss version of google's build tool, blaze)
- changelog / changes / version
- compiling
- contributing
- copying / licence / license
- todo
- readme

---

ux: blockquote design

flashcards are in blockquotes, rendered as indented fully rounded rext w a lighter bg color (on dark mode) on google ai mode.

e.g.

```
dark gray

( )
( foo bar asdf, light gray )
( )

dark gray
```

it's quite unconventional, unlike the standard "straight line on the left" (e.g. github markdown, telegram quotation), or "quotation marks, italic" (common on personal blogs)

---

ia: separation

follow ups should be rendered outside the msg.

---

ia: separation

links and citations are different creatures

---

ux: options

i guess you could decide where the messages align (middle? slightly left?) and the width.

on humility and para <!-- eat, have, grow... -->.

---

ux: cache common best prac

> Google’s Knowledge Graph

This response was generated with the help of AI. It’s supported by info from across the web and Google’s Knowledge Graph, a collection of info about people, places, and things. Generative AI is a work in progress and info quality may vary. For help evaluating content, you can visit the provided links. Learn more about how AI Mode works and how data helps Google develop AI in Search.

> there are not so many ppl in the world

---

ux: user centric, immune to all external arguments

google ai mode moves the link panel inside the response.

<!-- i guess it's a forced move by angry web masters, not anything user centric. -->

how many user would actually click them, meaningfully, if they could already be summarized

---

fe: fetching all data needed

google ai mode is obviously flawed.

with 30 messages, it continously fetching (nodes?) on the frontend

and you can visually see the scrollbar moving and becoming shorter

ref: https://www.google.com/search?udm=50&atvm=2&mstk=AUtExfC4o610-n0Cr41ZpVikGiygvePeWo0QIzqDgj4UuznFl6nwwvWhigR68ZQs0VagU28De28FYgfw4nFdtoQi67W0p6QbxvrJ-ODgM2yO2RpQE_GVYRpdnjBkbq5vc59t8hCrmh-ALSKuKm39yCTiwXTkfn9XCZUTepipwvla7ijRbUakIR7JnqySZWy7Msxl1n7yDTtueJ3TPVA2uTb53l3_Zba6wwaB4PkYups0SdVVCHfASNhYkuHT4ZX3VLPDHtH64LappwjR8g&mtid=zfE7ar6vBd-x2roP5OiooAU&csuir=1&aep=26&q=what+will+happen+if+you+put+a+book+and+a+bowl+of+water+into+a+microwave+oven&ved=0CAAQ2_wOahcKEwj46uWCpqCVAxUAAAAAHQAAAAAQGg

---

ux: as lazy as possible

auto commit hook

Menci 💖 @lcMenci

> 用 agent 全自动 autopilot 做东西的时候一定要及时 commit 而且不要让 agent 到处在 repo 之外做复现不了的脏乱修改
> 不过就算你的 agent 这么做了也没关系，让新的 agent 去 .claude/projects 里读几百 MiB 的 session jsonl 里的 tool call 操作然后一点一点重建也可以…就是…有……亿点…………慢

4:12 AM · Jun 27, 2026 · Twitter Web App · 1,379  Views

---

google ai mode img gen tool

(py plot? how powerful it is.)

https://www.google.com/search?aep=11&q=use+cases+of+flex+or+grid&mstk=AUtExfAVFb5t87H74FexloRjAKNvPIulhDHPPOkA1xEusICRNyHZsta294XjshZFMwHEQUSAGyzNcT8t9rI2Wfo-SthH7b_r0CIkxqrhuFd3bSBIeAC5CWPhKO2qnp5mJrYZXzRUEeplpq4TWP3H5A72MaVxCJyWfNPFHh0&csuir=1&mtid=mbRHapGCFdSx2roP_6q98Q4&udm=50

---

i do not really wanna "make it elegant".

it's not so exciting to just polish the ui. i might take it as a daily hobby (psychological, a sense of achievement or progress) rather than a project to be built. 

but it's not.

big tech could easily create wonderful things. but in the real world they wont.

they suffer from tech debt. they put profit and compliance before the user.

everything lives in their servers. 

no control. you could literally do nothing if they publish flawed code or enforce opinionated changes (e.g. chromium refresh 2023). you could not fix it or even revert it.

no resilience. github suffers from instability. llms often get outage.

no permanence. no real predictability. google sunsets reader. msft sunsets atom.

what if you could have it?

---

intelligent workflow.

- "first few numbers in the nature"
- "project info"

divide and conquer.

---

