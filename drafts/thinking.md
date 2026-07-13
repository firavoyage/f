<!-- it's wise to research more.

the real world is less hard but way more complex, which llms do not handle well. -->

---

action

- new thread
- chat <!-- put everything related to "new node" in chat? -->
- edit, regen, rearrange, ...
- read
- list
- rename

hooks are easy. they come later.

---

workflow:

```yaml
name: research project (company)
- get company name as x
- x history
- x philosohpy
- all features of x
- all highly requested features of x
- all limitations of x
- situation of x
- future of x
- ...
```

it's easy to formalize.

just add some metadata, like the method to use.

- ask
- parallel or sequential

you can also research a person, or research an english word.

you should also add metadata about what it is (how to render it)

- prompt (yeah you could indicate by role specifically for this, but you do not have to)
- response
- parallel (you do not have to show like `< 1/5 >` like normal edit. you have options. but as it's automated, you could differ it, and then you could render as you like.)

all nodes can be referenced directly. you can copy its id.

---

- fetch: error handling? on chat, i could write like missing api key, or network drop. there are not so many common possible errors.

context. type.

---

all css props

all categories of css props <!-- how to categorize -->

all css layout props <!-- layout, style, animation, ... -->

how does vscode handle color themes

<!-- utilitarian: color, spacing, nothing else. -->

save metadata. <!-- support thread title -->

---

design tokens.

ref and sys are repetitive.

rather reduce it. as simple as possible. as you like.

just one ref layer for fixed tokens, like border radius. sys is contextual.

e.g. pallette. color. typography. font. spacing. margin/padding.

also, i would reconsider if `{ref.palette.success}` is needed. maybe `ref.palette.success` is enough. it cant be ambiguous. ref if existing, otherwise raw. i guess it should be explicit over implicit. but i would support both and choose the simpler anyway.

---

utilitarian.yaml

vscode. adwaita.

bg, fg, outline, selection, accent, ...

---

web (chat, thread, sidebar, shortcuts, settings)

chatbot

---

dify <!-- it has no moat. visual ui is nothing. unlike agents, mcp, skills, tool calls, extensions, hooks, quick unclear. -->

(research dify. record.)

---

- atom components
- utilitarian.yaml
- pattern? (shortcuts, settings)
- page, chatbot functionality
- page routing (auto correct), page to url mapping
- backend serve, method to endpoint mapping
- search?
- browse (patchright)?
- operate (x11 computer use)?
- dify research

it's to create more useful components next i guess.

style in utilitarian. (both yaml tokens and css)

... <!-- upd -->

generally

- dev
- research

currently ik what to do.

- chatbot
  - test fetch
  - layout
    - test sidebar
    - resp design
  - network (over fetching/under fetching)
    - have rest api over graphql <!-- at the end of the day, you will have a few specific requests. it's backend's resp. you may store as you like, but the state only change or requests only fire upon certain user actions. -->
  - streaming
  - theming

---

i guess it's better to be a drop in replacement of github.

identical ui. faster as you serve locally if possible.

assumption: you usually work on a repo yk rather than new ones all over the internet.

---

export memoh. 

for acbox new, i could test copy paste? yeah. text itself does a lot.

all (highly requested) features of github desktop

all (highly requested) features of github mobile app

all (highly requested) features of github 3p ui

all (highly requested) features of github

all (highly requested) features of forgejo (compare) <!-- gitlab is closed. gitea is obsolete. codeberg is based on forgejo. -->

scope. <!-- i might not need grill me. i could think myself. -->


