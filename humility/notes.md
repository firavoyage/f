humility

readme · roadmap · notes

---

connect (patchright) ux (browser popup)

sessions: headless true get detected. false and window tricks wont work on wayland. (low importance)

---

cloudflare turnstile passed automatically.

---

the relationship of messages

some ideas:

(normalize before and after when needed for each step. e.g. check clarity/spec before trying to get real responses, polish and apply styling before showing to the user, for each message generate 3 responses and pick one, etc.)

plan -> do (give what, do what, how to verify) -> plan (call tools like test/ci? work or fail? how is it? move forward, iterate/try again, try new way, or give up) -> do (run a command? search? browse? given what do what) -> ... -> plan -> done

---

archi:

(normalize before and after when needed for each step)

plan -> do (give what, do what, how to verify) -> plan (how is it? move forward, iterate/try again, try new way, or give up) -> do -> ... -> plan -> done

it's linear.

---

creating an agentic continuous autonomy app called humility.

most existing products are close sourced. opensource ones are opinionated and unpolished. im not willing to work around.

I want it to be wise and graceful, which implies simplicity and effectiveness. I want it to feel me.

---

creating an agentic continuous autonomy app called humility.

most existing products are close sourced. opensource ones are opinionated and unpolished. im not willing to work around.

i want it to feel me. i want it to just work.

that's it.

about feasibility: it's hard to compete or gain market share. but it's easy to make it work. and maybe it already works: on chatgpt site, i could do anything, although manually.

I want to leverage llms a bit more, they are free and somewhat useful. About humility, I want it to be wise and graceful, which implies simplicity and effectiveness. I want it to feel me.

---

The Feeling

- What bothered me
- What felt missing
- What kept returning to my thoughts

The Moment

- When I noticed it
- Where I was (context matters)
- What triggered the realization

The Curiosity

- “What if this were easier?”
- “Why does this still feel unsolved?”
- “What would I try if I wasn’t afraid?”

The Desire

- What I wish existed
- What I wish someone had built for me
- What kind of experience I want to create

The Meaning

- Why this matters to me personally
- What value I care about protecting
- What feels worth spending time on

The Direction (Very Soft)

- Who this might help
- What change I hope it creates
- What _kind_ of thing this wants to become

---

- intention
- polish

what's good: chromium, code.

---

有意义的联想

---

Meta thinking is sacred.

Agent is not just about iteration. Dictionary, textbook...

Grounded simplicity: a broad set of use cases, instead of general purpose

---

on ia.

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

on normalizing what user could see

remove:

- ofc, yes, absolutely
- repeating the requirement, claiming its confidence (e.g. adj. in paratheses)
- if you want/like/'d like

be pragmatic.

---

about mediocrity.

sometimes, most people are right

sometimes, most people are wrong. but there is science. and science speaks loudly, even in a deterministic way.

sometimes, most people are wrong. and things could not feel right unless being opinionated, even going extreme.

---

https://prompt.16x.engineer/

---

best ai papers.

create an llm from scratch.

---

agent could only do clear things.

(or it will figure out itself, might not expected... more flexible?)

knowledge and structure.

for coding, folder structure, files, fns, tests, docs, etc.

---

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

---

use postgres.

you store moves and sessions.

moves have id, time, type, session, and data.

you can

- list all sessions
- create a session
- see all moves in a session
- move forward in a session
- query directly.

design.

---

knowledge. structure. hooks. etc.

they are defined before the task.

load them inside prepare.

---

on docs.

i thought i could have docs.

i will place it near the code. like test.

reference. not guide.

i will use something like jsdoc. but more customized and simple. just create some md files. one code. one md file.

but at last i find i could just paste the entire codebase.

---

on skill.

```
- Agent 必须有自主判断力的专家。
- Skill 是可复用的能力，可以区分为指令型和知识型。
- MCP / Hook 是纯粹的工具。

理解 Claude Code 最近的工程实践，在现在这个时间点是非常必要的。写好一个插件，也是一种很好的实践。最近工作之外的爱好就是保持信息压缩的同时大量更新
```

structure. knowledge. they are the same.

within a skill you tell llms how to solve a specific problem.

how to, the method, comes from reality and truth.

---

on feedback.

```
今天尝试用 Claude Code 写了些 webgpu/webgl 的代码，不出意外，用的 4.1 模型花了快一百刀了其实，跑也跑不起来，不是黑屏就是各种 runtime error。
我觉得 LLM 只能从日志里面读信息还是远远不够的，没有得到视觉的反馈和运行时的信息还是强差人意
```

give it the screen, keyboard, and mouse.

various sources.

---

on roadmap.

i dont need a roadmap.

i need to know the next minimal viable step.

inevitable invariant. not trivial.

be simple.

iterate fast with reality.

---
