todo

message/paste · todo · tabs/things · scratch pad · weekly/projects · notes

<!--

be simple. leverage thinking.

i dont need infinite power. dont dive into tooling/methodology.

pragmatism.

an intuitive mind is sacred.

curiosity... good. but dont over do it.

learn by doing.

finish things: close, organize, think, prepare... importance over urgency.

 -->

<!-- make it work first. make it beautiful next. -->

<!-- "non trivial". -->

<!-- do things that dont scale. -->

<!--

archive.

organize.

analyze.

 -->

<!--

- **Action is the only metric.** You cannot think your way to a solution; you must build your way there.
- **Start with yourself.** The best ideas often come from solving a problem you have personally experienced.
- **Imperfect is beautiful.** A rough project that exists in the world is infinitely better than a perfect project that stays in your head.

- **The Trap of "Stealth Mode":** Hiding your idea to "protect" it usually means you are building something nobody wants. Share it early.
- **The Trap of Over-Engineering:** Do not build a complex system for thousands of users when you do not yet have one user. Solve the problem for one person first.
- **The Trap of Analysis Paralysis:** It is easy to get stuck choosing the perfect color or the perfect name. These things matter less than you think. Function comes first.

 -->

---

life

"arrange todo"

---

(see things)

(see notes)

---

humility

---

research manus use cases myself. find inspiration.

---

make log lib.

i can log, fs, kv.

---

rethink "loop".

---

refactor. no more jsdoc. (prev code? message?)

types? (rethink result. i think i will keep it. failures are expected, like unreliable network, invalid input, etc. try catches are dirty.)

---

lib adwaita on web.

---

lobehub uses jina ai. just add r.jina.ai before your url.

there are a lot of things like jina, exa. find them all.

---

d.ts.

- std types
- bot types

---

?

think.

normalize

```
  - no try catch unless external libraries need, (... instead)
  - no throw
  - no nested if. if err, return/continue/break.
```

"prefer early return when err to avoid nested conditions"

---

(component libraries)

auto pass some default props like dark mode?

no need to overthink props/state. (abstraction on all frameworks / components)

i mean to be pragmatic.

how does adwaita do.

---

fs.

abstract fs like ruby.

change name: snake case. single word.

change behavior: create path when needed, like vscode. handle common issues like dangerous/invalid characters.

kv.

---

ask.

---

archive.

abstract.

---

simplify notes and research on drafts and humility.

rm most.

also simplify todos/things/tabs. (important)

merge things & tabs?

trim humility notes. remove nonsense.

---

what should i do now?

simplify. 

research, think, write, review the reality.

---

xdg spec.

folders on all platforms.

---

provider abstraction design. ~~generator.~~

ux.

---

testing (?)

i dont think we need that heavy js testing libs.

a test lib? yaml.

fn. input. output. 

you can actually dynamic import.

```ts
await import(module_path) // the same as normal import
// you get a obj of fn. 
```

write a simple testing lib.

---

watch films. there are many.

pick some bangumis from anime sedai. there are not many left.

---

lint unused?

find a config.

ci.

---

git abstraction.

i think you could even as daily backup... and sync.

---

log.

decorator?

reproduce?

---

uninteractive widgets.

- math graph
- color
- trend
- weather
- stock / currency / polymarket

research types. (maybe py lib plus google sans)

<!-- though, i wish google ai mode could show the original code... upd: well, it does. (?) no, it does not. it's not the graph code. though it's quite simple. just a bit default styling (margin, font) and pyplotlib knowledge. it shows an animation on web, but i suppose it's just fetching data, not rendering in js. -->

---

linear foss ui.

categorize and simplify todos, research, and notes.

e.g. projects.

---

github 3p ui.

---

humility: export, reproduce, copy and paste the prompt & result, proxy.

---

file lib.

tell it how to handle errors (div zero pattern)

(you might repeat div zero on var/prop name and type. but that's generally acceptable?)

(you dont have to wrap, but it's good to avoid magic consts and export the errors)

> rust builtin error types in std (e.g. file)

...

rm the "files" tab.

- success.
- fail.

just list all the failures.

name the methods.

you know them.

awa some non standard ones.

- file name too long (trim?)
- invalid name (convert? how?)
- no space
- no ram
- non existing (auto create the path.)

xdg desktop? (i think so. if we always combine two abstractions, we could simplify it as a pattern.) compatible?

symlink hash?

---

bilibili fav sync. & auto backup.

auto backup means to backup once you save. e.g. zhihu, berryberry.

though, ive no idea if those taken down within 1d are valuable for archival.

---

spec template.

---

check the time on file name by file metadata in drafts w shell script

typo lib?

a bigger and better lib?

build a cli for that.

learn

- cli
- typo lib
- time lib (file)

---

export twitter. research cli. or build my own.

---

research projects on

https://nat.org/

https://danielgross.com/

---

precious, [5/2/26 12:03 PM]
Clear:

Get birth time 

Set birth time. 

Hacky:

Birth time

Birth time arg 1

precious, [5/2/26 12:55 PM]
Path. Data. Config. Cache. You will likely have a string, a node path, or something r/writable. Ofc, you can have path directly which is relative or absolute and ~ will be expanded as home.

Write path. Read path. Stream if needed. 

Append. Edit. Common things.

Get/Set {metadata} Path.

Copy. Move. Remove. 

Non existing path will be created. 

You can config like illegal filename/too long path.

Db/hash symlink might be overkill.

precious, [5/2/26 3:16 PM]
Manus? 

(Interactive) Components. 

Separate style from functionality? 

Para? (Blog in any theme.)

precious, [5/2/26 3:34 PM]
Have. 

Make sure you have enough space and export all tg chats one by one. (I can help with some automation).

Then you can, for example, timeline any user across channels and chats.

(An user can have many accounts, I will simply preprocess, and cache maybe.)

precious, [5/2/26 4:38 PM]
Para. <!-- blog -->

Get where you are from the url. 

Get the pref, like lang, dark mode. 

Now you know the data and the config. 

Fetch the data. 

You can be static, server side, or client side

(Isc is perf for static. Rsc is an abstraction on ssg)

precious, [5/2/26 5:59 PM]
V. 

Write a git ignore before anything.

For each step it will init if needed.

Save. A state. You can give it a name. 

Remove. A state from history, forever. 

Restore a state. Or export it to a path.

List all states. Paired w export, you can have a list of folders of all past states. I could symlink the same files. 

Sync. Push to a remote. Or all remotes. It will do best effort. Error can be network, permission/constraint, or others, like secret key. It will also pull then. If conflict it will convert to a pr. And if forced it will merge everything with local files of higher priority.

Dl. Clone a repo. Make best effort to continue for large repos.

On collaboration/contribution, pr is not git builtin. I will have a dedicated hidden folder for all prs. Each is a yaml. Desc. File diffs. Awa any other metadata you like. Yaml is editable json wo cost. Btw Toml is strict, which is meaningless. Every pr is incremental (a new yaml file), no possible conflict (at the git level).

I suppose when you clone, git does this:

Fetch the metadata. Dl every file with wget continuously in parallel. Apply to fs. 

Though it's old and might not be what I've expected. e.g. idk how it handles incompatible filenames.

By default if you dont give an id (primary key meme from cyannyan) it will generate an uuid and tell you. 

About commit msg. It's your resp. 

Likely another yaml. 

It can auto save every sec or file change event (make sure you dont put secrets anywhere). But only some would be mapped w a dedicated msg. Others are for time machine. 

I would use a flexible change dot md as always in my style. 

Btw, how to v a pre existing folder w another separate git?
