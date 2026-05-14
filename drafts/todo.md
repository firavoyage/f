todo

message/paste · todo · tabs/things · scratch pad · weekly/projects · notes

<!-- life - arrange todo -->

<!-- "non trivial". -->

<!--

- **Action is the only metric.** You cannot think your way to a solution; you must build your way there.
- **Start with yourself.** The best ideas often come from solving a problem you have personally experienced.
- **Imperfect is beautiful.** A rough project that exists in the world is infinitely better than a perfect project that stays in your head.

- **The Trap of "Stealth Mode":** Hiding your idea to "protect" it usually means you are building something nobody wants. Share it early.
- **The Trap of Over-Engineering:** Do not build a complex system for thousands of users when you do not yet have one user. Solve the problem for one person first.
- **The Trap of Analysis Paralysis:** It is easy to get stuck choosing the perfect color or the perfect name. These things matter less than you think. Function comes first.

 -->

---

humility

---

research manus use cases.

---

log.

- clg
- persistence to fs
- kv

expand obj like clg.

currently, just use clg.

decorator?

---

programming style guide.

result pattern. use.

...

prev

```
- no try catch unless external libraries need, (... instead)
- no throw
- no nested if. if err, return/continue/break.
```

...

spec template.

---

ask.

...

provider abstraction design.

ux. (add a provider)

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

(?)

native markdown has a lot advantage.

well... i could proxy it. somehow. w a format i like.

---

github 3p ui.

---

humility: export, reproduce, copy and paste the prompt & result, proxy.

---

research projects on

https://nat.org/

https://danielgross.com/

---

file.

abstract fs like ruby.

change name: snake case. single word.

change behavior: create path when needed, like vscode. handle common issues like dangerous/invalid characters.

<!-- kv. -->

xdg spec.

folders on all platforms.

...

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

...

when you store a file

- calc the hash
- store it somewhere in the data folder
- symlink

...

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

---

design system. component library.

react.

research md3 (mui, awa google's web components).

think.

lib adwaita on web.

...

I want to find some design. If I like I can further go to the figma. 

Also, component lib.

Where.

...

blog theme?

---

para.

<!-- poc: code runner works for markdown. you can press ctrl r instead of ctrl shift v. -->

vscode md preview is not feature rich.

i could not ctrl f. i could not have toc.

research: gemini. (lagrange)

---

simplify 

- notes on drafts
- notes on humility
- things

merge things & tabs?

---

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

...

git abstraction.

i think you could even as daily backup... and sync.

...

try out vscode git features.

- vscode timeline, (and more?)
- github desktop (seems not much features)
- ~~gitkraken~~ <!-- that's too much -->

> The diff algorithm was stopped early (after 5000 ms.)

btw, vscode settings: git.enabled.

...

github? forgeio (codeberg)? what. why.

...

https://github.com/regent-vcs/re_gent

...

it can be simple.

just

- alias some commands. e.g. git add all, commit wo message, ...
- download reliably (never stop halfway even if you turn off wifi), progressively (resume after you reboot), and efficiently (dont dl the same file hash twice)

---

learn jp

---

terminal bench

<!-- inadequate and incomprehensive tasks, seems -->

---

app copy.

test if intercepting would help.

ref https://claude.ai/chat/90cbc5db-3e86-4509-8ef2-e09f006791b5

also, style hr to `---` instead of `***`

---

message.

```js
/**
 * comments
 */

// commented code
```

---

projects

---

- log (dont let bun log err symbol in the object.) <!-- fix bun if possible instead of abstract. well you can have log that wraps console log, but dont stringify obj as it losses styling. -->
- file <!-- all abstraction leaks. think what you want. and what you dont. -->
  - more methods. (ruby)
  - errors. (rust error kind)
- git (azaneko?)
- vector search
- tg export to knowledge
- tg userbot x11
- patchright (e.g. deepseek)
- message. spec template.
- keyboard
- cli (a general template, under intuitive)

nameless (mihomo by fira)

---
