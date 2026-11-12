purpose

oct 2026

25

archive the legacy humility project.

it doesnt carry much utility, besides deeply coupling to outdated archi and deps.

---

serverless is not appliable.

- cost and (auto) scaling are irrelevant
  - it's already cheap
  - i can change my mind later, like in modern archi
- server management can be easy if you do it right
- vendor lock in, lack of choices
- persistent vps are basically more powerful

---

it's much easier to have a local md viewer now it feels.

i need that.

btw, in terms of the vision of humility, i can absolutely have an extensible modular archi, like chatgpt first, nextcloud (which links and shows some information from chatgpt) later.

nov 2026

07

doesnt feel i would create a util of merge.

it's nice to have same files automatically filtered though.

---

> as someone, i would like to do sth w some feature to achieve sth...

> as any user in general, i would like to ... w any existing features for the sake of doing sth (well it's obvious, ik what im doing)
> 
> - do sth
> - create sth
> - polish sth
> - feel satisfied w sth

---

no need to rush.

well, fine to have a non streaming version first.

anyway.

---

clearly i can have mvp scope first.

ideally i could extend by appending (injecting actually) wo modifying/removing later, e.g.

- search threads smartly
  - as smart as possible
- keyboard shortcuts
- config
- ...

08

there is no right answer for visual design.

and i would choose primer ui as a reference.

clearly it's way easier than building everything from scratch, and why primer.

- it's web based and comprehensive
  - well documented, in both react and rails
    - foundations, explanations, and components
    - interactive mdx
  - i would like adwaita, but i dont really learn a lot from adwaita demo alone
    - times are i may challenge their decisions
    - and it's not web & css based
- it's more like general design systems, less opinionated
  - unlike google material design or apple hig, which tailors everything for their specific goals
- it has a clear opensource foundation, in modern western culture
  - unlike commercial ones like adobe spectrum or shopify ones

i would make it utilitarian. be simple and functional first.

---

(backend comes first though)

---

drafts are designs choices of devs

docs are guides and references.

09

actually i may consider the web only approach, if openrouter supports cors.

you may store permanently via github api, lol.

chances are, you just wanna drop a key and start chatting on a thread. that's it.

anyway, it matters less and has almost no impact on ux.

and seems it conflicts w some core purpose why i need this. yeah you may export the chats, but it's hard to automate it, and if you really do so, often you could not benefit from web only any more.

---

you may have folders. maybe nested.

you will be able to create folders and navigate through folders.

likely you will work inside a project continuously, rather than chatting in different folders every thread you create.

so you would have a stateful cwd, and you will have new threads automatically placed inside.

you dont necessarily have to name your threads. it can be just the first msg you send, trimmed. you may also auto gen the title or change the title dynamically on the fly as you progress in the thread.

well, you may have an option if you like to name explicitly. then, it would look like `cwd/`, w your cursor on the right. you may hardcode cwd as root. and there would be ideally some autocomplete.

you will have extensive shortcuts just like the power apps you love, in a way you already know.

- new thread `ctrl n`
- new folder `ctrl shift n`
  - it will auto cd there
- navigate `ctrl l` `ctrl p`
  - actually l would be for folders, and p would be files, while shift p for commands
  - but it's nice to have global search, esp when "no results"
  - _ideally there would be autocomplete_
- navigate up `alt up` `alt down`
  - you may map jkhl
    - well, could be a bit confusing when you use ctrl jk for reading/scrolling, and alt jk for navigating
  - clearly, browser uses alt leftarrow rightarrow for navigation
  - you may use ctrl h l for folder navigation, matching the visual of parent/child/dir
    - i may keep a history of that, if you dont necessarily know where you came from
    - or maybe a single "nav up" is enough

to build it, i may go the same way as ive done manually.

symlinking would be a bit hacky w git (if they dont resolve by default, esp when referencing the outer world), and could be incompatible.

maybe just have a config of build folder.

clearly it's an opinionated extension. and it's quite opinionated, from naming to the structure of such md file.

let's have an build dir. 

to be safe, it would not empty build dir. and it would overwrite iff conflicting. i.e. if you rename a file, a stale pre renamed build would be kept, as you dont keep renaming history. _well you can._

so better to name properly at first under the right folder.

about resolution, e.g.

- a
- b
- c
- foo
  - bar
    - asdf
    - fdas
  - xyz

it would take all first level threads separately, and merge asdf and fdas (all sibling leaves, like `time foo bar.md` incl asdf fdas, where time would be ctime of bar). metadata like the mtime of individual msgs and models used might be omitted (you may toggle the extension!). _if i do so, i may have them as code block (of special lang like chat metadata... i guess code langs w spaces would be parsed.) below the heading of each msg._

yes it's opinionated.

---

doesnt feel it quite meaningful to keep the original payload.

you may record in logs if you like.

---

yeah you should send msg rather than sending some content.

but let's just standardize naming.

guess it would benefit more.

<!-- yeah, i (somewhat) hand code -->

---

> Your billing address is in a region that does not have access to models from OpenAI, Anthropic, and Google. All other models remain available.

technically it's virtually non existent it seems.

---

i guess you would new thread w (trimmed) first msg as title on frontend, rather than modifying when sending (unless you have extensions).

---

it's already very powerful when you can

- use any model on any endpoint
- new thread
- begin/continue ("send") a thread
- read a thread
- list all threads

editing and branching are basically abstractions.

if you can make tool calls... it's easy, whether native or simulated. you can perform file op and shell commands, and you can basically do anything, esp when you can call yourself.

like, you can absolutely go wo mcp and just write code via foss libs.

i may like to see how thinking works. maybe it would be some rendered response outside history. or maybe i send thinking of prev threads aw.

i would like to know how search works. it can be hacky, where i can abstract (query search engines, and scrape main content of pages, maybe clicking cf turnstile or fetching caches). but i think it's fine to pay for it.

web search alongside thinking would make it vastly more capable, maybe even sufficient as mvp personally speaking.

dk if i would include prev searches in history. ideally i could toggle it. fine to include everything in history if context allows (and if i dont care whether it's "clean" "mathematically pure/relevant" or sth), since input cache is quite cheap.

---

stats on openrouter says they

- are prompted massively
- just reason a little
- output slightly less than reasoning

well doesnt feel these stats are quite helpful. would be better if i create a clearer data viz of models, w more meaningful metrics, or real world benches.

<!-- dont really know how "model" and "model-latest" differ on openrouter, if both do not pin an exact rel date. interesting. would be better if called stable/experimental instead guess. -->

10

doesnt matter whether to incl yaml suffix i guess for machine readable files.

and even better, vscode would guess and highlight anyway. (well, it may guess as md, but it's fine)

---

if backend comes first,

i would like to have export feature next

<!-- you may like to omit some folders, like the test threads -->

---

folders are metadata. obviously you dont have to match that on real fs.

---

an alternative approach of managing secrets.

you have `env.yaml` alongside `config.yaml`

in the idiomatic way, you define

```
{provider}: key
```

on env.

i guess that would be fine as env here is really reserved for private tokens rather than general tweaks. and typically you would only have api keys here. it's fine to have irrelevant fields later, like `{provider}_foo`.

on config,

if you define key it's raw key, otherwise it defaults to `env:{provider}`

you would never have an even more dangerous "raw api key not found on env" visible log, or confusing "auth failure" as env var name isnt key.

that is, you may share your config w secrets safely separated.

<!-- it matters less to be compatible w shell env here i guess. -->

---

on backend you would likely to simply map wildcard to action/index.

and you would likely to post(endpoint, payload) rather than dc endpoint fn from some proxy (async wrappers w advanced tsism, i.e. infer).

that is, you should just use obj params from day one.

especially flexible if you do not care types.

<!-- well, you may argue it's a bit awkward to write {...} = {} when all options are optional -->

---

you should include both request and payload on logs.

---

advanced capabilities are not the priority now.

build foundation first.

---

delete is reserved word. doesnt feel i should workaround js quirks.

but actually it doesnt delete at all. i may rename as hide.

<!-- on ux, i may name it as delete if it's practically irreversible currently. or i may add metadata like trash folder prefix, and render specifically. -->

---

interesting, e name too long when i swapped params of write.

"write content to file", "write file as content"

a tradeoff of positional params.

---

export is reserved. let's just call it build for simplicity. i already call it build dir.

---

wow, build works wo debugging.

thanks to the elegant abstraction of lib.

---

you can build sth functional now.

---

likely you only need a grayscale color ramp now.

dont have to learn color theories.

---

really i should consider event listener instead of use request

---

that's wild!

"make textarea fit content"

<!-- yeah, for custom scrollbar -->

i thought it would be efficient to design in code until running into quirks.

---

absolutely web style abstraction leaks.

what if you could not use any advanced selectors in css?

basically you could not style a component differently in different components.

it could make things explicit when you enforce variants. it's not usually a good thing on dx, which is argubly the primary purpose of such yaml based approach.

11

it doesnt really work to have factory fn ("wrappers") in snake case.

```ts
const thread_file = join(thread_folder, thread)
```

it feels you never interact w thread folder directly. you almost always need the thread itself. not necessarily its content though (like when you write).

to mitigate this (you could not write `thread file = thread file(thread)`), you expand the impl everywhere. that's not a good thing.

<!-- js is lisp1 -->

solutions are

- to make it pascal case `thread file = ThreadFile(thread)`
- to just have consistent verb noun naming for non boolean fn `thread file = get_thread_file(thread)`
- or namespacing

also, you have `path = pathname(...)`, `time = time(...) # or time = now()`
so it's not a general solution to leverage "plural iterables" (e.g. `thread_files(thread id)`)

i guess you may just tailor each for usage rather than enforcing global rules.

```ts
export function pathname(...args: string[])

export const join = pathname

path = join(...)
```

```ts
start_time = now()
```

```
thread_file = get_thread_file(thread)
```

on intent, constructors that accepts params are somewhere different than the variables.

path is the current path. and pathname joins some static folder and the dynamic filename.
thread file is the current one. get thread file gets one based on its id.

for fn that takes no param, usually it's impure. either (it's void and) you would call it directly wo assigning a var (e.g. `init`), or they have dynamic return (then generally they have contextual meaning, like start end ctime mtime). otherwise you may just export const.

i would generally avoid casing unless it's really a wrapper (e.g. `Time` on lib/time, which makes things chainable under tsism). because i dont like every fn to be cased, and there is no clear line whether sth is a "constructor". it basically takes params and derive results based on which.

namespacing solves different problem. (e.g. `file.read` `action/read`)

<!-- though the importing syntax can feel awkward (import {foo as bar} from somewhere, dc {foo: bar} = math, import * as file from lib/file, declare global fn) compard w py (import file, from file import foo bar) -->

and there is nothing wrong w handle prefix for callbacks though i may not write it manually. same for create/get prefix for "factory fn", depending on intent.

---

idk if it feels flawed when you prefer `thread` over `thread_id` first, and use `messages` for `thread content` later. then what about msg id?

well you dont really map msg id to log files. you never log a user msg. you log requests.

---

it's likely that obj are sorted by insertion order or original order on a file.

it's not guranteed. would be easy to solve though.

<!-- upd: fine. it's just devtools console display. things are expected on entries. -->

---

> Uncaught Error: md4x: WASM not initialized. Call `await init()` first.

i dont have to go that crazy.

12

chances are it could not be fully declarative.

chances are it has to be declarative in some way.

---

it says it takes 300ms or even 800ms for dom content loaded.

i dont quite feel that.

maybe it matters to build style aot.

or maybe it's vite dev server specific issue...

now dom load 200, load 500.

well really style is instant. it takes 5ms, despite tons of entries traverse dereference string op...

(maybe array + join is faster than string add, i remember)

---

totally fine. v8.dev has dom loaded 340ms anyway and load 400.

app component takes 7ms.



