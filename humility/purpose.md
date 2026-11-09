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


