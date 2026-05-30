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

precious, [5/2/26 3:16 PM]
Manus? 

(Interactive) Components. 

Separate style from functionality? 

---

Para?

(Blog in any theme.)

Para. <!-- blog -->

Get where you are from the url. 

Get the pref, like lang, dark mode. 

Now you know the data and the config. 

Fetch the data. 

You can be static, server side, or client side

(Isc is perf for static. Rsc is an abstraction on ssg)

<!-- actually, it can be just a better markdown previewer. you now press ctrl r (my shortcut to code runner, which runs para cli to a md file) instead of ctrl shift v.

why vscode is bad:

- no toc navigation
- no ctrl f
- slow (esp for large files), ts based

(btw, why vscode can be good:)

- click a paragraph, and it will jump to that line in the original md file

 -->

---

Have. 

Make sure you have enough space and export all tg chats one by one. (I can help with some automation).

Then you can, for example, timeline any user across channels and chats.

(An user can have many accounts, I will simply preprocess, and cache maybe.)

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

have. tg.

(export. standardized activity pub.)

https://github.com/one-among-us/tg-blog

https://github.com/one-among-us/TelegramBackup

https://test-tg.one-among.us/test

https://aza.moe/life

---

project float.

"library"

---

dl maimai dx songs.

touhou. vocaloid. etc. (agent?)

it's wiser to do it at home.

---

crawl the web.

<!-- well, you can simply use git repos like menci blog or ruanyf weekly -->

---

alert

systemd abstraction

git failure

repo

no cli, no gui. a config. a command. that's it.

---

repo cli

repo gui.

connnect the world.

menci. memoh. moeditor.

---

cli. (yet again).

```
command:
  - method: fn # fn handles refusal and has default value
  - options: [{flag: "-v, --version", desc}]
  - arguments
  - desc: string
command command:
  - ...
```

parse into command, args, options.

call it from the map.

you can create and style the help yourself. it's not always the most helpful when auto generated.

you can handle the refusal yourself. a failure must be paired w an action.

it's easy to take terminal width into consideration.

---

- cli (a general template, under intuitive)
- git (azaneko?)
- systemd abstraction?
- vector search
- tg export to knowledge
- tg userbot x11
- patchright (e.g. deepseek)
- keyboard
- nameless (mihomo by fira). <!-- web ui. btw, the backend and the frontend are two things -->
- have (crawl the web, e.g. matrix67) <!-- the most crucial step is network. be pragmatic. like handling a few big ones like twitter, tg export. ssg (hexo, astro, etc.). for general ones fallback to, like mhtml. menci has oi.menci on github, just clone. no need to crawl. ruanyf has ruanyf weekly on github, but no idea if all articles are foss. -->
- revise files (think and complete todo)
- projects, other todos <!-- e.g. blog abstraction -->.

---

storybook simpler alternatives

create mine.

---

design system. whatever i do i should have one. adwaita + yaru fits the vibe of my desktop.

---

create an example web app supporting both gnome adwaita design system and material design three using react and semantic css. plan first. write a spec and stop to wait for my review.

---

tg to activitypub

activitypub to something.

(para)

---

libadwaita in react. only use prop, state, and effect (limit to like event listener and interval) for porting compatibility.

---

para: <!-- for eat, grow, (and have, maybe) -->

any blog. any document on fs.

any app on any design system.

---

kde breeze component library repo

---

design tokens.

component set.

extend a component library.

---

how to create a design system

what are design tokens

what components should a component library have

what components does mui have

(chakra, adwaita, breeze)

how to extend a component library

how to create a storybook of a component library

mui storybook

what does a mui button do

how should the ui change for desktops of different sizes

sidebar

---

do it progressively, steadily.

think about the names. define myself.

there are many version. follow the latest gnome.

think what the app would look like. an example empty gnome builder app first.

---

define design tokens. 

define component library.

create a simple storybook.

create a blank gnome builder or workbench app

---

plan to port to web. todo.md.

choose base ui.

proceed progressively.

data attr over clsx

---

can i wrap mui, chakra, etc. inside baseui?

---

design tokens. css variables.

i guess it's easy to change or modernize css units.

the key is just to make up a set of design tokens. like tailwind. like refactoring ui.

and reference. never hardcode.

i can align it easily in the future.

---

<!-- example of --> component libraries built on top of base ui from mui

mui components

base ui components

components on code settings page

props. states. 


