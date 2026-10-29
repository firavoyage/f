# plan

# todo

decide project scope

i guess it's better to be a drop in replacement of github.

identical ui. faster as you serve locally if possible.

assumption: you usually work on a repo yk rather than new ones all over the internet.

...

all (highly requested) features of github desktop

all (highly requested) features of github mobile app

all (highly requested) features of github 3p ui

all (highly requested) features of github

all (highly requested) features of forgejo (compare) <!-- gitlab is closed. gitea is obsolete. codeberg is based on forgejo. -->

scope. <!-- i might not need grill me. i could think myself. -->

---

prototype

build a repo app

github 3p ui.

---



# backlog

## use cases

what if i continuously monitor codeforces scoreboard rather than some retrospective submission log analysis?

---


## misc

research forgejo.

its purpose is clear. but isnt it already accomplished by forgejo?

what are the limitations.

the competitors are not even refray or oh my github.

---

research relevant tools

refray.

clear purpose. 

background: github backend instability.

feature: multi platform sync.

oh my github.

no idea what it is doing. but since it's by acbox, i think it must be reasonable.

<!-- acbox is of infinite possibilities. nothing is impossible for her. -->

<!-- acbox is so naive to take anything serious and make things aligned. -->

> what do ppl feel about kids on github <!-- when they spread their unbound energy everywhere wo professionalism --> <!-- when it's a bit awkward -->

from the name, it might be about customization (from oh my zsh).

from the readme, maybe it wants github to be faster? i guess fluid animations are nothing special. it's out of box behavior.

btw, "yet another 3p github app" <!-- An unofficial GitHub Desktop powering your work. --> tells nothing. it should be a modifier.

---

support repo cleanup.

it's not bad to have massive binaries in git history. it's fast and trivial nowadays.

it's just... mediocre. binaries consume the most space, with the least information.

better to limit history to text. i guess it couldnt take much space.

well, the old logo might matter. you could have a dedicated legacy folder, or prev releases.

(the latest state is always preserved.)

could have.

---

create an abstraction of cli on top of git

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
