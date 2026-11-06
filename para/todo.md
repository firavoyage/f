# plan

- ~~flex-col flex-row~~
- ~~outline/box shadow in css~~
- scroll
  - ~~programmatic wo flex requirement if feasible~~
  - ~~decouple styling~~
- search
  - always focus input ~~current behavior it seems, actually~~
    - yes, enforce it more, even if you use your mouse to drag the scrollbar
  - close upon outside click
  - result hover/focus
- toc
  - attach id
  - jump to id on load
  - (jump to remembered scroll position on load)
  - show current heading?
- fix navigation
  - listen for url change on state lib?

# todo

## m

- list all pages
  - list all folders
  - list the hierarchy of any folder
- search on a specific folder
  - search by complete keyword matching on filename
- resolve a path to a file
- render gfm efficiently

- have a complete component system
  - handling keyboard navigation well, e.g.
    - open modal, close/esc, initial focus, focus trapping, (shift) tab, (ctrl) j/k

## s

- have a consistent design system
- show toc
- handle multi folder
  - search everywhere
  - search on a specific folder (by prefixing)
  - you may have an array of hierarchy for each folder in lib/file (wo "find" command), prefix them, and fzf (preferrably in js)
- customize scrolling
  - it might be as userscript rather than para specific extension, as they are likely to prefer it across sites (e.g. vimium)

## c

- support search results limit
  - rarely do you need a thousand search results after typing a letter
    - even if json parse is cheap, layout of a thousand dynamic elements takes 100ms
  - throttling/debouncing would not be a good idea
  - an alternative approach would be to have the file hierarchy in memory
- component/scroll: show scrollbar when programmatically scrolled
  - refactor code
  - decouple scroll start end
    - e.g. omit crossing/rounded (like vscode command palette)
  - have smooth ideal transition easing for scrollbar
    - when you scroll on vscode ctrl p, it fades in quickly, and fades out slowly
  - ~~fix fouc like jump~~
    - use sth like use layout effect (that is, sync operation)
    - easy. just unwrap "req anim frame". no idea what it does. or if it makes any sense. likely llm pattern.

## w

# backlog

## misc

prototype

Para.

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

...

para.

<!-- poc: code runner works for markdown. you can press ctrl r instead of ctrl shift v. -->

vscode md preview is not feature rich.

i could not ctrl f. i could not have toc.

research: gemini. (lagrange)
