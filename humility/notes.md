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

i dont need mcp.

---

data flow.

import/export fn, consts. dont import/export mut data, which is hard for testing.

---

be pure.

loop handle the side effects. store.

plan, ask, etc. dont store.

---

an agent is a human.

just use readme.md.

no need to use agents.md (if it has i will read in the future maybe)

upd: actually, maybe a human is an agent in my readme writing style...

---

What does human in the loop do. Think different when get stuck. Ask the question itself.

---

Twitter

---

lsp.

Use language tools. Functions. Document. Relationship. Import export write read chain.

You need a lsp. Abstraction. If you are working on a big project, yagni.

---

What's the problem?

1. touch with reality. Run. Write. Read. Maybe edit. Maybe search, in control.
2. Maybe continue.

---

Maybe skill. Instruction of self correction.

---

How to describe ui. Examples.

How to think a design. Like color, shadow,...

Border... Reference books.

Text. Typography. A shape. On the shape. Around the shape.

Button. A simple shape. The same.

Images, videos, medias. Things on the shape.

---

You should let the human be as lazy as possible

---

Predictable. Deterministic. Certainty. Peace. I mean, spec, plan, files, fn, names, styles, docs, ref. Confirm before proceed.

---

You can predict ahead as if the user will accept the suggestion.

---

Config: how much guidance. How much automation. How much control.

Ask actively. Predict. Guide.

Refuse and suggest. Yagni. Pagni.

Don't implement the plan before approval.

Work folder. File visibility. Names, files, functions, every detail.

---

Use git. Store a version state on a move. Apply a version.

---

Guidance.

Failure patterns

Reinvent the wheel. e.g. suggest libraries

---

Think: when to stop. Good enough to do real works.

Edge roi decreases.

How far could it go... Self correction is simple. Tell it to check itself. Validate or evaluate maybe. Fact check maybe. Testing in software engineering. And get the response.

---

Suggest R & D when needed.

---

Spec.

Design fn. Don't decide naming and taxonomy. Although you can suggest.

Design call flow or deps. Design testing.

---

Broadness and depth.

You can go further, deeper, or broader on the roadmap.

Full automation means it will never stop.

Guidance means it will question the question. It will point out risks if you don't explicitly ignore. It doesn't trust you. Explicit over implicit.

Control means two things. You wanna make it yours. Or you wanna play safely.

How to do and what to do when free

---

Decide the style of the prd/spec

---

Self driving is mirage. Small errors multiply.

And maybe you don't need that.

---

Skill. Research. Inference.

---

Guidance. Automation. Control. Safety. They are not essence. They are a way of abstraction. Think bottom up sometimes.

Bottom up. You must add structure to the prompt. That's plan. You must parse and act. You can have decorators. You can store history and config with a good taxonomy.

Top down. You shouldn't optimize. You should solve some fundamental problems. Like self correction, fact check, think different when getting stuck. In the form of listeners or intervals.

Others are good to have.

---

I would say knowledge. Knowledge means clarity. Skill means order.

---

Humility, official extensions:

Add buttons. Click instead of type. Keep it dry.

Get stuck? How could I prompt you better.

Learn? What can I learn from this to prompt you better.

---

You can do the same thing in many ways.

you can cd to the working dir, and run humility.

you can run humility, and open the folder on gui.

you can just run humility. i will create a folder in docker.

you can export the folder or just move and name it.

---

on google ai mode you could only

- send
- continue

not mentioning switching between edits/branches, you could not even edit.

maybe that's enough. maybe.

well i would say the ux of google is always impressive...

beyond markdown.

---

dont think too much about ui.

copy google ai mode layout.

about theme. simple. let user add their own css/extension/components.

think whether to use tailwind.

1. cursor: google 4 colors when empty (upd: and hanging). blue when typing. (upd: wait! when you move your cursor left right, the rendered cursor does not move! holyshit. you should expect every possible move of the user. like typing when not focusing. like esc.)
2. progressive disclosure: clear input and send appear only when not empty.

(although its features are reserved. e.g. no exporting, copying markdown. no editing.)

when you hold a file ready to drop, the input component is surrounded by vibrant google colors and shows invitation.

google designers are really special. they think different. for block quotes, you dont use a think line on the left, you dont use quotation mark, you dont use serif italic plus indentation/center alignment, you use a rounded rect with primary bg variant and render inside as usual.

upd: even if user ctrl v text it should listen. chatgpt does not offer this.

---

this ui (2012) is very clean. chrome://inspect/

---

upd:

chess/duolingo/v2ex/steam https://steamcommunity.com/groups/Yuzu_Soft

---

Lex openclaw 03 20 00 humility

---

the problem is llms are not really intelligent.

if you dont write explicit spec and clarify... it might not know.

if you dont tell, it simply wont know. if you tell, but in a generic style, like some prinicples, it might know, but sometimes it still might not (you think you should use a stable polling. it uses conventional/mediocre unstable listener. you think it's redundant, actually it might not, but at least you wanna test. it does not.). 

humans have intuition.

---

i think chatgpt is too slow.

it's wise to choose flash as the default model.

---

i think the best (most of my?) usage of llms are repeating my idea in a clearer, often simpler way, and searching docs.

---

when you ctrl/shift/alt click the logo or "new chat", it should open new tab instead of redirect history/spa.

---

manus definitedly have some built in knowledge.

like "..." unless explicitly asked. "..." by default.

it leverages some best practices (not really).

like show prob/confidence after replying, custom xml format (prompt engineering), imagine 3 and pick 1.

chinese love cheating/reward hacking.

---

Research web, tests, or books. Don't rely on weights.

---

on google ai mode, when i click a link, esp "quick access from the web",

it should open on the same page. like normal google.

---

although the implementation might be simple, just a predefined set of mdx components across a range of fields.

but google ai mode could really render the layout pretty well.

it could also render interactive elements. not just "run code", but playgrounds like josh ones.

---

about mcp

- it's not extensible or composable. it's not unix (text based, stateless). it's not pure. you could not know what there actually is without reading itself, control the data, or make it work with your apps. you could not call it in the simple way (cli or request) without its own sdk.
- it's not cost efficient. it adds cost without doing anything esp when you dont need to know all the tools. you have to impl progressive disclosure yourself.

maybe you should stop impl it. and wrap mcp providers instead.

---

google ai mode...

it does not hold the data or state in the url.

it contains the query. you will regenerate the first message when refreshing. the conversation is lost.

although you can create a shareable link (then it's the conversation id). (but it's confusing. does it update? does it continue? does it export?)

---

vscode log looks like this:

```
2026-03-16 20:09:34.478 [info] [Window] Started local extension host with pid 366127.
2026-03-16 20:09:35.794 [error] [Window] [Extension Host] (node:366127) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `exe --trace-deprecation ...` to show where the warning was created)
2026-03-16 20:09:36.145 [info] [Window] MCP Registry configured: https://api.mcp.github.com
2026-03-16 20:09:36.343 [info] [Cloud Changes] Prompting to enable cloud changes, has application previously launched from Continue On flow: false
2026-03-16 20:09:36.363 [info] [Window] Settings Sync: Account status changed from uninitialized to unavailable
2026-03-16 20:09:37.336 [info] [Window] [perf] Render performance baseline is 28ms
2026-03-16 20:09:41.032 [info] [Window] Auto updating outdated extensions. dbaeumer.vscode-eslint, esbenp.prettier-vscode, monokai.theme-monokai-pro-vscode, ms-python.python, ms-python.vscode-pylance, rust-lang.rust-analyzer, yzhang.markdown-all-in-one
2026-03-16 20:09:47.257 [error] [Window] An unknown error occurred. Please consult the log for more details.
2026-03-16 21:29:22.697 [error] [Network] #23: https://main.vscode-cdn.net/extensions/chat.json - error GET Failed to fetch
2026-03-16 21:29:22.697 [warning] [Window] Failed to fetch chat participant registry Failed to fetch
2026-03-17 01:17:34.607 [warning] [Window] Ignoring the error while validating workspace folder file:///home/fira/Documents/f/a - Error: ENOENT: no such file or directory, stat '/home/fira/Documents/f/a'
2026-03-17 02:04:35.542 [error] [Window] An unknown error occurred. Please consult the log for more details.
2026-03-17 18:41:25.461 [error] [Window] Error: Unable to resolve resource data:image/png%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAflBMVEX/XgAgHB0dGx0AFx4tHxzMTwn1WwD/YQAaGx0OGR4YGh2IOhESGh0AGB0VGh4SGR7BSwudQBC6SQxFJxo1IhskHhwAEx%2BNOxIeHRyyRw3rWATkVgXZUwhVKxnSUQhuMhd6NhOBNxQ7JBqUPRGmQw9iLxhnMBZ1NBZbLBlKJxk8C7FfAAAELklEQVR4nO2Z67aiOBCFMcGEQECuXrgpiJfz/i84AfUIId3tmSlg9azsv7qsz6pNVSUYhpaWlpaWlpaWltZ/Ew12y8Y/uO6ZLhmfIcSb5eL7CVqt0L5ZKAfUN62VEOKHRQhEfHvVyUoOS8TPX/FbAn/%2BHPjv%2BILAmj0H6358QWDO7YMjXg1kWeG8AOTCJYIknDcH6Z1JBGY5cxXucg5W/rwAoxzYcT5zFQqZoM5mBRAEUhU2UT4vQRl7QwIekVkBaCYTbKJ5q0DXtZyDIp00Yi6nuIxtiSCakiCLC6nlUmkqiCoUE1bhzLz9MRs%2B7b5MwKPJ4meuWIDY/pz2EWiZSARsMh%2Bcus6D8H1QBzrOwWWap7FbQruWx479OgsfWHIOpiAgx3frZcmuVwcaJhIBr%2BAJaNhvvIgV/eE3IvBu4IOJSHm2t9fyTee7aEiAT8A5oI3U88QTH1fG63/SQCZAwMfGvLZkAFGHuCEvhIYPCZBbgQLs8Ci%2BkOUeX5vYKAeIg%2BYgv3qjGnR1ML%2BLfZZzYFeQTqTh3UMKAsTq1wE5cKXP8A7UieTsMhWC5d6edXDkKlgBJIBB05vc95914NWj/QcSIdpCH5nCCCvrgKNDl%2B3dMAfDng0iEiClFWx%2BafsScXqrMnKhu1ErmlXuuCUIedhp/%2B77eUV7Z5qDAvFrZR1W7Cug1Di5r7KcJwnfqYmZisDCtRhR1aNhuMGEByWaO66yL9lJlfrd2MSn6cJ38guusoLoS3FbH3aD81%2B%2BJopkUqOJuIJghdr4Xg0W3qBFcnd8g44gaH7aKusgzBCv4QAMjGyGcR2UqSFB0PxuKR9JG/K%2BZI2fDudF1eQSA2kSxXxgkAsZ3X0/cTb3zK%2BqJAN7pVUi18GqQQ8Gl/7vI4th69b0bUn9y7AvIQR6ZZZHcpXRhpn3KiTftiQH3q/D5gIZ3whVRu9sGQVl9rAEJU6y%2Bf6Mw07As7LpPm35dWryRyLWV/zMFIZ9h0EK5QryYmBeEjl%2BSrq%2B9HQgbAJSrhx8vWoIWybH1pZZ3X6VA89AX7mOyxCeaxYnx2zfoCDYmzJ6U49%2BRSI2m/abmyPwEF6fYow96zMKIbf882/%2BVHlwrRP2Oy%2B%2BZU9yM0BpFu4KjpXb6FBsqrd41Eizw7WdBsrp9xKKJ6jAG4Ia/vlaq49HzwrcJ4z/gCC57yRb/ItEsIkWcVlpc432zB5nAs91XS4sEZ7vlrDlcBDzmeI/GEgWXkzEN2%2BG6S0gQ1BjHdxixp6OYLCn8Q8hhC2r%2BHEcc2d%2Bb/VCECrbmYVM8C6QrT9TGbRriwX%2BvoTu9uZnSh4ehL4mpw5Dn6mzgHeEnkTU%2BeVCqOyDoNdy/wZgtzAAXxwA/E5EA/x1AEubEH4f%2BnEjAo5v0GqLf6DtFfxQQH4o6PhaWlpaWlpaWlpaWlr/f/0DViY%2Bxu94gUsAAAAASUVORK5CYII%3D
    at Ytt.r (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1329:21684)
    at Ytt.r (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1329:21670)
    at async x2t.acquire (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:27:3374)
    at async Ztt.createModelReference (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1329:23003)
    at async qO.resolve (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:548:15389)
    at async B0e.setInput (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:707:81047)
    at async Net.S (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:712:58512)
    at async Net.L (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:712:57072)
    at async Net.openEditor (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:712:56154)
    at async vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:824:23341
    at async Wtt.M (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1310:30829)
    at async Wtt.openCodeEditor (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1310:21806)
    at async Mnt.open (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1376:634)
    at async Rnt.open (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1376:1730)
2026-03-17 18:41:32.460 [error] [Window] Error: Unable to resolve resource data:image/png%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAflBMVEX/XgAgHB0dGx0AFx4tHxzMTwn1WwD/YQAaGx0OGR4YGh2IOhESGh0AGB0VGh4SGR7BSwudQBC6SQxFJxo1IhskHhwAEx%2BNOxIeHRyyRw3rWATkVgXZUwhVKxnSUQhuMhd6NhOBNxQ7JBqUPRGmQw9iLxhnMBZ1NBZbLBlKJxk8C7FfAAAELklEQVR4nO2Z67aiOBCFMcGEQECuXrgpiJfz/i84AfUIId3tmSlg9azsv7qsz6pNVSUYhpaWlpaWlpaWltZ/Ew12y8Y/uO6ZLhmfIcSb5eL7CVqt0L5ZKAfUN62VEOKHRQhEfHvVyUoOS8TPX/FbAn/%2BHPjv%2BILAmj0H6358QWDO7YMjXg1kWeG8AOTCJYIknDcH6Z1JBGY5cxXucg5W/rwAoxzYcT5zFQqZoM5mBRAEUhU2UT4vQRl7QwIekVkBaCYTbKJ5q0DXtZyDIp00Yi6nuIxtiSCakiCLC6nlUmkqiCoUE1bhzLz9MRs%2B7b5MwKPJ4meuWIDY/pz2EWiZSARsMh%2Bcus6D8H1QBzrOwWWap7FbQruWx479OgsfWHIOpiAgx3frZcmuVwcaJhIBr%2BAJaNhvvIgV/eE3IvBu4IOJSHm2t9fyTee7aEiAT8A5oI3U88QTH1fG63/SQCZAwMfGvLZkAFGHuCEvhIYPCZBbgQLs8Ci%2BkOUeX5vYKAeIg%2BYgv3qjGnR1ML%2BLfZZzYFeQTqTh3UMKAsTq1wE5cKXP8A7UieTsMhWC5d6edXDkKlgBJIBB05vc95914NWj/QcSIdpCH5nCCCvrgKNDl%2B3dMAfDng0iEiClFWx%2BafsScXqrMnKhu1ErmlXuuCUIedhp/%2B77eUV7Z5qDAvFrZR1W7Cug1Di5r7KcJwnfqYmZisDCtRhR1aNhuMGEByWaO66yL9lJlfrd2MSn6cJ38guusoLoS3FbH3aD81%2B%2BJopkUqOJuIJghdr4Xg0W3qBFcnd8g44gaH7aKusgzBCv4QAMjGyGcR2UqSFB0PxuKR9JG/K%2BZI2fDudF1eQSA2kSxXxgkAsZ3X0/cTb3zK%2BqJAN7pVUi18GqQQ8Gl/7vI4th69b0bUn9y7AvIQR6ZZZHcpXRhpn3KiTftiQH3q/D5gIZ3whVRu9sGQVl9rAEJU6y%2Bf6Mw07As7LpPm35dWryRyLWV/zMFIZ9h0EK5QryYmBeEjl%2BSrq%2B9HQgbAJSrhx8vWoIWybH1pZZ3X6VA89AX7mOyxCeaxYnx2zfoCDYmzJ6U49%2BRSI2m/abmyPwEF6fYow96zMKIbf882/%2BVHlwrRP2Oy%2B%2BZU9yM0BpFu4KjpXb6FBsqrd41Eizw7WdBsrp9xKKJ6jAG4Ia/vlaq49HzwrcJ4z/gCC57yRb/ItEsIkWcVlpc432zB5nAs91XS4sEZ7vlrDlcBDzmeI/GEgWXkzEN2%2BG6S0gQ1BjHdxixp6OYLCn8Q8hhC2r%2BHEcc2d%2Bb/VCECrbmYVM8C6QrT9TGbRriwX%2BvoTu9uZnSh4ehL4mpw5Dn6mzgHeEnkTU%2BeVCqOyDoNdy/wZgtzAAXxwA/E5EA/x1AEubEH4f%2BnEjAo5v0GqLf6DtFfxQQH4o6PhaWlpaWlpaWlpaWlr/f/0DViY%2Bxu94gUsAAAAASUVORK5CYII%3D
    at Ytt.r (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1329:21684)
    at Ytt.r (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1329:21670)
    at async x2t.acquire (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:27:3374)
    at async Ztt.createModelReference (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1329:23003)
    at async qO.resolve (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:548:15389)
    at async B0e.setInput (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:707:81047)
    at async Net.S (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:712:58512)
    at async Net.L (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:712:57072)
    at async Net.openEditor (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:712:56154)
    at async vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:824:23341
    at async Wtt.M (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1310:30829)
    at async Wtt.openCodeEditor (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1310:21806)
    at async Mnt.open (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1376:634)
    at async Rnt.open (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1376:1730)

```

(the err is it does not handle data url)

(ofc, properly highlighted)

---

google ai use very simple font family.

"google sans, roboto, arial, sans-serif"

"monospace"

that's it. no need to mess up with old best prac.

maybe arial is also not needed. (why not helvetica then? sounds more superior)

upd: idk. suddenly it removes all "google sans" and only keep roboto. droppin update? fixed after refreshing after minutes? weird.

---

what the hell.

opencode defines the list of all possible models (strings) in its schema.

btw, it does not use keys from env.

---

i see some "class undefined" on google ai mode.

seems not really reliable! poor css in js...

---

the whole rendering, like chatgpt's entities, even google's "sources", are llm generated.

google ai might output "sources" literally (in md) instead of make it machine readable (in component).

---

on search

context pollution is heavy.

it gives the warmest hope and the deepest frustration.

mediocrity, maybe.

---

on google ai

the font of prev messages might change if i send a new msg.

weird. though it might be supposed to just check once, dont change.

it does take effect here.

---

i can name humility, as `_`, or `.`.

im the computer itself. im the humans themselves.

no icon. (like zed)

if you really want one, i will render a ball with threejs.

---

they are just instructions. either event listener (action), interval, or timeout.

they are use cases. not how it works. i kind of love exploring the ideas and possiblities, though.

check new tweets (in any act pub / rev proxy). add to resume. categorize aoh.

research jit.

- can menci speak jp
- what's jiang zi jun's github id
- what's the background of ryo lu

---
