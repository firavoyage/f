humility

readme · roadmap · notes · research

---

the relationship of messages.

some ideas:

(normalize before and after when needed for each step. e.g. check clarity/spec before trying to get real responses, polish and apply styling before showing to the user, for each message generate 3 responses and pick one, etc.)

plan -> do (give what, do what, how to verify) -> plan (call tools like test/ci? work or fail? how is it? move forward, iterate/try again, try new way, or give up) -> do (run a command? search? browse? given what do what) -> ... -> plan -> done

---

archi.

(normalize before and after when needed for each step)

plan -> do (give what, do what, how to verify) -> plan (how is it? move forward, iterate/try again, try new way, or give up) -> do -> ... -> plan -> done

it's linear.

---

purpose.

(deprecated: naive)

creating an agentic continuous autonomy app called humility.

most existing products are close sourced. opensource ones are opinionated and unpolished. im not willing to work around.

I want it to be wise and graceful, which implies simplicity and effectiveness. I want it to feel me.

creating an agentic continuous autonomy app called humility.

most existing products are close sourced. opensource ones are opinionated and unpolished. im not willing to work around.

i want it to feel me. i want it to just work.

that's it.

about feasibility: it's hard to compete or gain market share. but it's easy to make it work. and maybe it already works: on chatgpt site, i could do anything, although manually.

I want to leverage llms a bit more, they are free and somewhat useful. About humility, I want it to be wise and graceful, which implies simplicity and effectiveness. I want it to feel me.

---

ia.

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

ux: normalize what user could see.

remove:

- ofc, yes, absolutely
- repeating the requirement, claiming its confidence (e.g. adj. in paratheses)
- if you want/like/'d like

be pragmatic.

---

llm: mediocrity.

sometimes, most people are right

sometimes, most people are wrong. but there is science. and science speaks loudly, even in a deterministic way.

sometimes, most people are wrong. and things could not feel right unless being opinionated, even going extreme.

---

llm: agent.

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

llm: agent.

think an agent as this:

you either move forward or rest at any time.

if you dont have a task or everything is finished, you rest.

otherwise, you move forward.

it's flexible and designed for the future.

you prepare for a move.

- set up the working folder. for now we can have a hardcoded config file instead of using intelligence.
- think what to include in the request. spec (e.g. preference and style). knowledge (facts). structure (how to).

you play a move.

- send a request. if timeout you retry. maybe some logic is missing, but if you see the task is not finished and you are not doing anything, you must do something.

you process the result.

- there are tools like shell commands and writing/editing files. run them.

you can decide the next move. in many ways.

- use a prompt template, like the big picture and the current progress.
- add a step. send the context needed (messages, tool results). use intelligence to figure out the next move.

you finish. in many ways.

- use intelligence. you see a tool called finish.
- all files i want exist.
- tests pass.
- timeout, max attempts reached.

(upd: user not login. ask user to clarify/pick.)

you should know what you are doing. in the future there will be hooks.

- before a shell command, i check whether it's safe. i can proceed or block.
- when you want to show something, i clean the nonsense.
- after you play a move, i check whether the number of moves youve played is a lucky number.

everything is stored. both moves and relationship.

knowledge. structure. hooks. etc.

they are defined before the task.

load them inside prepare.

---

backend: store.

use postgres.

you store moves and sessions.

moves have id, time, type, session, and data.

you can

- list all sessions
- create a session
- see all moves in a session
- move forward in a session
- query directly.

decision: no. you sit on high level. either fs or kv. postgres is mostly about perf engineering and scale.

---

docs.

i thought i could have docs.

i will place it near the code. like test.

reference. not guide.

i will use something like jsdoc. but more customized and simple. just create some md files. one code. one md file.

but at last i find i could just paste the entire codebase.

---

llm: agent: skill.

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

data flow.

import/export fn, consts. dont import/export mut data, which is hard for testing.

decision: use store instead. js apis are low level.

---

llm: agent.

an agent is a human.

just use readme.md.

no need to use agents.md (if it has i will read in the future maybe)

upd: actually, maybe a human is an agent in my readme writing style...

---

llm: agent.

think:

What does human in the loop do. Think different when get stuck. Ask the question itself.

"You should let the human be as lazy as possible"

"You can predict ahead as if the user will accept the suggestion."

---

llm: agent.

first step.

What's the problem?

1. touch with reality. Run. Write. Read. Maybe edit. Maybe search, in control.
2. Maybe continue.

Maybe skill. Instruction of self correction.

---

llm: agent: vcs.

Use git. Store a version state on a move. Apply a version.

decision: (?)

---

llm: agent.

Config: how much guidance. How much automation. How much control.

Ask actively. Predict. Guide.

Refuse and suggest. Yagni. Pagni.

Don't implement the plan before approval.

Work folder. File visibility. Names, files, functions, every detail.

Guidance.

Failure patterns

Reinvent the wheel. e.g. suggest libraries

Think: when to stop. Good enough to do real works.

Edge roi decreases.

How far could it go... Self correction is simple. Tell it to check itself. Validate or evaluate maybe. Fact check maybe. Testing in software engineering. And get the response.

Suggest R & D when needed.

Broadness and depth.

You can go further, deeper, or broader on the roadmap.

Full automation means it will never stop.

Guidance means it will question the question. It will point out risks if you don't explicitly ignore. It doesn't trust you. Explicit over implicit.

Control means two things. You wanna make it yours. Or you wanna play safely.

How to do and what to do when free

Self driving is mirage. Small errors multiply.

And maybe you don't need that.

Skill. Research. Inference.

Guidance. Automation. Control. Safety. They are not essence. They are a way of abstraction. Think bottom up sometimes.

Bottom up. You must add structure to the prompt. That's plan. You must parse and act. You can have decorators. You can store history and config with a good taxonomy.

Top down. You shouldn't optimize. You should solve some fundamental problems. Like self correction, fact check, think different when getting stuck. In the form of listeners or intervals.

Others are good to have.

I would say knowledge. Knowledge means clarity. Skill means order.

---

ux: reduce friction, automate, keep it dry.

Humility, official extensions:

Add buttons. Click instead of type. Keep it dry.

Get stuck? How could I prompt you better.

Learn? What can I learn from this to prompt you better.

---

ia.

You can do the same thing in many ways.

you can cd to the working dir, and run humility.

you can run humility, and open the folder on gui.

you can just run humility. i will create a folder in docker.

you can export the folder or just move and name it.

---

llm: model choice.

i think chatgpt is too slow.

it's wise to choose flash as the default model.

---

use cases.

i think the best (most of my?) usage of llms are repeating my idea in a clearer, often simpler way, and searching docs.

---

ux.

when you ctrl/shift/alt click the logo or "new chat", it should open new tab instead of redirect history/spa.

---

llm: search.

Research web, tests, or books. Don't rely on weights.

---

llm: mcp.

- it's not extensible or composable. it's not unix (text based, stateless). it's not pure. you could not know what there actually is without reading itself, control the data, or make it work with your apps. you could not call it in the simple way (cli or request) without its own sdk.
- it's not cost efficient. it adds cost without doing anything esp when you dont need to know all the tools. you have to impl progressive disclosure yourself.

maybe you should stop impl it. and wrap mcp providers instead.

---

llm: search.

context pollution is heavy.

it gives the warmest hope and the deepest frustration.

mediocrity, maybe.

---

identity.

i can name humility, as `_`, or `.`.

im the computer itself. im the humans themselves.

no icon. (like zed)

if you really want one, i will render a ball with threejs.

---

llm: knowledge.

use cases.

they are just instructions. either event listener (action), interval, or timeout.

they are use cases. not how it works. i kind of love exploring the ideas and possiblities, though.

check new tweets (in any act pub / rev proxy). add to resume. categorize aoh.

research jit.

- can menci speak jp
- what's jiang zi jun's github id
- what's the background of ryo lu

---

ia.

entity (like names, books) can be viewed on side panel.

---

ux.

google ai.

"quick access from across the web"

"top search results" (i dont like it though)

"interactive player"

"mark" (blue as highlight or red as warning)

...

so many dedicated components. find them all?

---

i could not compete with anyone.

> Be warm. Be strong. Be resilient.

it's my code. use my way. make it mine.

---
