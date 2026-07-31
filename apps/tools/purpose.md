purpose

---

jul 2026

17

17 20 optimize maimai. test the logics. ~~(17 40)~~ (18 00)

idk if it matters. but i would like to complete it, at least to make it logically sound.

e.g. large m (e.g. miss break), low n (base loss), obviously impossible yet currently some results exist it seems

<!-- 17 34 oh it's simple. there might be more loss than avail notes. just add a check. -->

<!-- i would like to write into a log, but it's async, and i fire and forget. ask if it matters. -->

~~19 00~~ 19 40 optimize maimai furtherer ~~(19 40)~~ ~~(20 00)~~ 21 00

seems ive done what i can do on branch cutting.

btw, i could easily figure out hp lp hg md lg given all stats on the board, but that would be a bit boring.

the current problem is it's terminated.

e.g. `solve_change(285, _b_factors)`

as you can see

```ts
const _b_factors = [2, 4, 5, 6, 10, 15, 20, 30];
```

i guess i can remove 4, 10, and 15, for example.

they are basically a combination.

<!-- i drifted a bit. but i would be fine. -->

20

02 40 plan

i guess it can be simple. i can know everything ahead.

idk the exact choices or designs i would have. but ik what they would be.

i could be wrong. but if it provides invariant foundation for the future, it would be worth investing in.

---

idk how long it would take. but i do not have to timebox everything. ik it matters. so just proceed until complete.

24

05 00 simplify design tokens yaml, deprecate value based contextual token determination, make it more natural and consistent ~~(06 00)~~ 07 00

adopt a object flattening template <!-- ? -->

revise convert yaml to css cli input syntax

no native globbing i guess. leverage shell wildcard. take all args as files (ignore stdin). convert yaml to colocated css.

---

this wont work. stdin wont propagate.

```
rg --files -g '*.ts' | cd "/home/fira/Documents/f/apps/tools/source/web/scripts/" && b 'convert design tokens.ts'
```

it's not about the code.

---

improve app copy meanwhile.

---

it seems ive modified legacy folder by mis ordering rg flags

surprisingly vscode timeline doesnt track them.

i could, but i would not fix them through git history.

p

```sh
rg --files -g '!**/legacy/**' -g 'design/**/*.yaml'
```

c

```sh
rg --files -g 'design/**/*.yaml' -g '!**/legacy/**'
```

23 20 refine design tokens. leverage font shorthand. (23 40)

```yaml
font: font-style font-variant font-weight font-stretch font-size/line-height font-family;
```

it's a bit hard to reference tokens like this

```yaml
font:
  heading: bold text.lg typeface.serif
```

i dont wanna invent like `{text.lg}`

```yaml
font:
  heading: bold var(--text-lg) var(--typeface-serif)
```

seems it ruins.

```yaml
font: bold var(--text-lg) var(--typeface-serif)
# font: var(--font-heading)
```

maybe i would just define font in css.

you would not reuse `var(--font-heading)` a lot.

wait why do i have to make assumptions.

well, i guess i can make the converter smarter.

ok. easy. the logic is, separate value by spaces. for each, if it's a valid token, convert to css var and replace all.

fix typing in converter.

25

02 20 design main page. create sidebar. create a basic converter. (03 00)

try to make some progress.

---

main page.

states <!-- props and states are logically the same -->: tools, focused tool, pref

by pref, i mean when possible, it can show as structured/raw input, and rendered/raw output.

a tools have

- name
- fn
- structure? an object in setting options <!-- i would design it later -->
- render? string -> component

---

sidebar

states: list, focused item

<!-- llm doesnt name as list. it names as items. wise. -->

---

i will not impl the draggable separater for now.

---

<!-- use ts. use type no interface. only type on params, not return. -->

use ts. use type no interface. use snake case. no aria labels.

class name rules...

well, i guess i should break the rules.

rules are designed for react, for big corps.

seems ts wants me to use data attrs for non standard attrs. ok. let's have a css snippet for it.

---

use ts. use type no interface. no return type. use snake case. no aria labels. use fn statement. write a react textarea component. params value set_value.

---

convertion can be two way i realize.

---

til: ~~**think a bit about the implementation (e.g. params/states, types, abstraction structure) even if they are logically identical.**~~ **write when you are clear. sleep or rest when not.**

03 20 write web/lib/sync theme.use. add import type snippet. link some snippets.

12 20 simplify knowledge: name component classname (12 40)

just be nested. if overwhelming, consider separation/abstraction.

<!-- btw, by default, descendant selector already selects children on all levels. flexible. -->

make humility/.knowledge the single source of truth. rm everywhere else.

folders like humility/source/web/knowledge are just quick workarounds as i dont wanna deal w agent skills.

17 20 style selection ~~and focus ring~~ ~~(17 40)~~ ~~(18 00)~~

choose adwaita anyway.

til: i would always tend to ask general broader questions. fewer assumptions -> larger value range -> better result. but it would be more efficient to trust my intuition (observations, assumptions) more and ask the binary comparison questions directly.

> It's important to do things fast

---

assumption: i guess it's the same 30% opacity across light or dark.

---

fix converter. rm assumption: you would only ref non contextual tokens. you can reference whatever exists now.

---

drop the timebox. i do not actually have a time constraint. and i would absolutely explore when i feel like that, even with the identical outcome.

---

wait. maybe my assumption is wrong. for inactive selection, it might not be 30 opacity.

maybe they just use different bg, like contextual bg primary.

though, my bg primary secondary teritary has discrepency w them anyway.

the decision is to use a unified bg teritary at 50 opacity.

well, let me see.

i assume they will have a same opacity for both light and dark. i couldnt believe if it's not true.

i have another theory. they used my gray 500 at 0.2 opacity. i guess it's better. i dont think teritary bg has sth to do. if there is a dedicated inactive sel bg, it would not be contextual i guess.

```
0.2 oklch(66.7% 0.001 286) oklch(64.8% 0.006 286)
0.5 oklch(86.1% 0.001 286) oklch(42.2% 0.007 286)
```

---

wow surprising

```
    selection: color-mix(in srgb, color.bg.accent 30%, transparent)
```

when i type co, bg, acc, it can autocomplete. maybe yaml has some reference syntax?

it couldnt work on numbers though. (pa works, gr works, 500 doesnt)

---

after conversion it sits on global root. expected. but interesting.

it's not contextual itself. but it reference one.

---

i could create a js listener. it's easy. to monitor whether window is active.

but currently it looks fine. why does it have to react to window blur. just make it selected. no need to grab attention.

~~decision: out of scope. (could have)~~

why not. i would have it if it allows. i should ignore browser compatibility constraints.

---

20 00 style focus ring 20 40

animation is cool. but i would not adopt it. vscode and linear dont have animation yk.

---

i made padding inside "focus-visible", but it's quickly found and fixed.

26

03 00 complete sidebar. write some snippets. (03 20)

~~both push and overlay variants i guess.~~

only push for now. (vscode)

could have: overlay variant.

snippets and react utils later.

i would separate the taxonomy of sidebar items from the tools definition. it could be free.

it doesnt have to be fancy. just an array of strings for now. i could add hierarchy later. <!-- well, maybe i need both name and id, ordered. i will think about it later. the current focus is styling. -->

---

use state snippet. use effect snippet. css sel snippet. <!-- ? -->

make use state and use effect global. also support react-use.

---

the tradeoff of linking snippets is... vscode couldnt detect file changes to reload. you have to restart.

18 40 create snippet use toggle, deconstruct array. (19 00)

19 00 decide to create a middleware for props. (20 00)

yes. class > classname. theme > data-theme (both, under the hood). attr: false then do not make a presence at all.

it would be incompatible w llms wo heavy prompting. but it would be fine.

<!-- i guess there would be no libs for that. -->

---

how to use class instead of classname in react

---

it could be less than 20min in code, but it takes time to research react arbitary rules.

20 00 research google ai mode content filter and actual system prompt.

no idea how meaningful it was.

curiosity. **gravitated and spellbound.**

20 20 design props middle ware.

support string, array, and object for both class and classname. lib: `clsx`. for array, pass as `clsx(...arr)` (maybe array of classes, maybe args i.e. a mix of types).

support string and object style. lib: `inline-style-parser`

if not started w data or aria, normalize kebab case. (snake case doesnt err)

for boolean, omit false, make true "true".

---

create a snippet for it.

---

i think whether or not i could, i will not let it autocomplete all possible attrs. first i dont have autocomplete when i type `{...{}}` (until i type the first letter), unlike css prop values. so i wont know what's there. and it's too massive and noisy. i would not need most generally.

solution: leverage llms (mdn backed) to know the attrs. stay above raw elements most time.

---

upd 27 jul dawn: normalize onfoo to onFoo.

27

03 20 research and design ~~, and write~~ global persistent state management lib.

see 20260719 intuitive web react state management usecontext zustand jotai custom hook.md

05 00 make styling opt in.

using a button tag doesnt mean it's a button. it should have no border radius by default.

sidebar item shouldnt have a regular outline. it doesnt have to be consistent. (see chromium devtools)

ideal: all focusable items have focus style. none uses default browser style. each uses what fits.

i could not achieve the ideal. i could not make all focusable items properly styled before knowing what they are to decide what fits.

what i can do, is, to reset the ugly browser fallback, and remove the blue ring baseline.

---

no idea what `[tabindex="0"]` does.

i dont have to know. it does nothing if i do not adopt it at all.

---

upd: make an issue irrelevant btw

fix sidebar

when collapsed, the outline still can be visible.

enlarge neg margin l, or take a more elegant approach.

18 40 plan.

today:

- state lib
- sidebar overlay variant. fix toggle.
- research cyberchef, online converters. think about features & ui prototype.

~~19 00~~ 19 40 write state management lib. ~~(19 40)~~ ~~(20 20)~~ 22 40

i just wanna hand code it.

---

i did some research out of curiosity. it would pay off i guess. like, what if i add a rule, do not async if you do not await?

well maybe not. i think the best prac is to await network, fs, etc. and make all others sync.

---

seems i was motivated by aggressive phrasing of risks, leading to over engineering concerns.

---

ts resets type narrowing, even if you define the fn right inside an if.

just ignore rather than "foo as sth". it's ts's problem, rather than sth to be declared explicitly.

28

03 20 fix sidebar toggle shortcut consistency

when inside textarea, ctrl b doesnt work.

maybe it's to prevent default. decide to opt in or opt out.

04 40 adopt state lib. test and fix. 05 00

move global prelude to the absolute beginning.

05 00 create sidebar overlay variant. ~~(05 20)~~ 06 00

fix props lib.

---

the local roboto font does have font weight issues. it maps incorrectly.

---

false assumption: sibling means either backward or forward.

---

well, css syntax highlighting is quirky.

20 20 research cyberchef. think about features. design the routing and all app states. 21 20

**i should write down my thoughts. otherwise i would be repeating the same decisions, trying to memorize.**

**in serenity <!-- or day dreams -->, i might dive deep and gain insights, but i might not think broad enough.**

<!-- no need to timebox this btw. but i would generally try to do it fast. at least to make time meaningfully spent. -->

---

think about features.

- what tools would be available
- what routes would be available
- what would ia look like
- how to design the ixd, or taxonomy, for the related ones (e.g. json yaml toml xml)

it's easy. it's known that many devs start their first projects as todo list, tool box, nav page, or personal blog.

i do have some ideas. let's aggregate them. <!-- now i have a new one. typo fixer. not necessarily typos. just when you mispell some words. i guess it's trivial to have a wordnet in browser memory. or maybe i can make it self hosted. -->

where are they. todo? notes? maybe.

well it doesnt seem to be inside tools/todo. not inside humility aw.

ok i see. drafts/todo.

---

tools

- planned
  - maimai
  - color contrast
  - json yaml toml
  - base64
  - unicode and emojis. aliases. synonyms. vector semantic search. <!-- it doesnt have to be a converter. if you feel it would be a tool, then it is a tool. -->
  - dict (auto correct, string distance)
  - typo check
  - word counter

---

/home/fira/Downloads/CyberChef/CyberChef_v11.0.0.html

ok now let's try to gain some inspirations.

ixd: search. you can search through the sidebar items. it would be a prop.

<!-- the tab navigation doesnt work so well. you can easy be trapped into nowhere. -->

you have favorites. a global state.

<!-- well the ix doesnt work. you can double click a sidebar item, or drag it into the recipe. but not single click it. -->

<!-- well, it's just legacy. no native system dark mode. fake md. cluttered irrelevant status bar items. the window scrolls, rather than the settings popup. it's known. -->

let's be focused on the purpose, the list of tools, rather than their ux flaws.

- data format
  - url decode <!-- e.g. %3d becomes = -->
- language
  - language decode <!-- yes, it's vscode builtin, but why not -->
  - leet speak
- date/time
  - timestamp, utc, timezone, (any template string)
- encryption, public key, hash
  - (popular methods)
- misc
  - regex (the args are defined separately from inputs, on the recipe)
  - grep
  - glob
  - lorem ipsum

shannon entropy is impressive. it's an example of rendered output. though i might not include this. why do i have to know how random sth is. i can document the extension methods, and let llms generate everything though.

fork is weird. it's literally a loop. input must be string. so you fork them by a separator like newline. then you decode base64 for each, and it would be joined. it's not quite a tool i mean. i think you would be able to write logics. like, input split newline map base64 decode join newline, instead. you should not invent a new lang.

magic is fun. dont know if it would be really practically used.

one thing i just noticed, is, it shows a desc of each sidebar item on the right, no delay. <!-- well, it's linguistically inconsistent. "Converts the data from an ordinal integer array back into its raw form." "Convert from IEEE754 Floating Point Numbers". --> there can be an example and/or a reference (e.g. wikipedia).

it does have both json to yaml and yaml to json. it's not quite intuitive yk. it can be json toml yaml csv. but you have to chain yaml to json to csv, otherwise it wouldnt be supported.

when you use json to yaml it errs immediately, as empty isnt valid json. <!-- Error translating from ArrayBuffer to JSON: SyntaxError: Unexpected end of JSON input --> for me, i would choose to be do nothing when it errs. i mean by default. i could take empty/invalid pasted input differently.

_i would like to have some encryption methods._ <!-- there are too many --> i would research.

seems encryption/encoding and public key are different categories.

it holds the power of a math calculator. but it's awkward to fit inside a recipe.

prettier (code tidy) should be an ide feature.

image processing is out of scope.

**scope: text to text at its core.**

better to use a pl yk for flow control. (magic, fork, subsection, ...)

---

about routes, i will support /shortcuts. why not.

but it doesnt have to be a page. (btw, you couldnt share a link, which is both shortcuts manpage and a tool.)

for settings. it would be structured. it can be

- flag (checkbox/toggle)
- select
- number input (text inc dec or slide)
- text input

i would have a quick action panel, like vscode ctrl (shift) p. any variant of ctrl p would trigger. i would make use bind flexible. (array first param)

i guess ctrl f is the same as ctrl p, as the sidebar is searchable. but they dont carry the same intention. ctrl p is better. ctrl f is ambiguous. search sidebar, input, or output? maybe ctrl h replace?

ctrl p can not only search sidebar items, but also "open settings", "open settings json".

---

about recipe.

_could have: recipe._

there are not so many tools here. write extension in js instead.

---

i can also research cyberchef alternatives.

29

00 40 polish global state lib.

narrow path from all strings to keyof state.

revise snippets.

30

04 20 organize todos.

it should be more comprehensive. it should be ordered.

even if they all fall into the backlog category on kanban, they are not the same.

**they have priority and dependency.**

<!-- i didnt include importance. i have moscow labels for them. and roles (e.g. plan, research, visual design, archi design, implement), i think, are already reflected by the priority. -->

the original order reflects the time they are added, a nice to have implicit metadata, which doesnt mean anything.

<!-- btw, priority isnt inherently inside their nature. it comes from dependency, then importance. -->

...

if you feel you wanna build sth even if useless, for a personal project, that's almost always a psychological trap. or not.

<!-- i thought i wanna create a dsl for "recipe". it would be flexible and contextual and embrace the ambiguity of human languages. it's definitely challenging and exciting. -->

04 40 think how to make todos comprehensive.

wbs is too formal and inefficient. i guess it's just a problem of taxonomy. just categorize. by role, maybe.

also, **it's better to plan first.**

it's obvious. but, actually, there are two ways, top down and bottom up. sometimes yk you will need this so you make it anyway. it's reasonable. but, the problem is, you have to figure out what to do next, or how to adapt to the invisible constraints <!-- e.g. it should launch one day. you should expect that. -->. it's different when you are busy or relaxed. both have benefits. but, i mean,

it's better to plan ahead, to write down what you know in one go. as long as you know. it's not wrong to plan everything ahead i mean.

---

it doesnt mean i will have them now. i will proceed tomorrow.

05 20 decide to make text selectability opt in.

a quick win i guess.

---

research css inheritance.

19 00 check the feasibility of recipe dsl.

how to run a dynamic js string in browsers

---

there are many ways. but i think it's not about to choose one.

the conclusion is it's highly feasible and easy.

---

how to construct a js string somehow? via ast?

would i construct a js string via ast?

i think i do want an ast. but maybe a simpler one.

---

well, i guess "js syntax" is way more conceptually simple than "js ast".

ast is designed to be rigid for parsers. many words are highly coupled, yet not merged into an alias or sth.

20 00 design a dsl for recipe. research and summarize firascript and glaze.

could have. maybe irrelevant.

but it would be exciting and meaningful.

22 40 write dsl spec. 

enough research.

it wouldnt be pragmatic if it doesnt change the output.

i could absolutely simplify just based on the syntax ref.

31

03 20 <!-- continue to --> write dsl spec. 05 40

18 40 apply title case on window title.

everything you <!-- would possibly --> type should be in lowercase, whether url, filenames, or foldernames (e.g. git clone repo name).

visually, it should show whatever fits.

20 00 document everything known. elaborate the plan. make decisions.

how would i style the bars.

i feel flush <!-- rect --> items would fit the philosophy. but even vscode doesnt apply flush everywhere. for example, the quick action panel items are inset <!-- rounded -->.

and, there would be settings, keyboard shortcuts, and about <!-- version -->. where would they be. i may say i would toggle it off personally and adopt hotkeys, but on mobile there should be somehow visible. and if it's visible on mobile, it should be consistent on desktop, even if i offer the option to turn off.

- vscode alt bar
- gnome adwaita sidebar hamburger

btw, idk if i would show the window title *again*, if it's already inside a browser. maybe not.

cyberchef doesnt design. it basically pins things on screen.

foliate shows title bar when hover, and offers a dedicated pin button to switch between overlay (default) and push.

feels im stuck. i have to make a decision.

well, after researching google ai mode (devtools device toggle), i guess i have an answer.

first, it must be able to toggle on when off. so it shouldnt just appear on the sidebar. there would be an icon. i would choose the hamburger menu, like all mobile apps. the adwaita design is actually quite weird i feel, though consistent. it behaves as three dots. letme think about it.

i think the design choice of adwaita is... there is no need for a hambergur menu. when resized, it shows a sidebar icon. the sidebar icon is not bad. it's clear. but it's not single colored (or opacity). it requires significant more cog load.

the decision is

- off: hamburger menu (you can toggle it off, and use keyboard/gesture)
- on: push for desktop, overlay for mobile
- push:

---

another thing is, i guess sidebar should not handle the list and the focus. i could render anything inside. it doesnt have to be coupled.

soc.

i guess i would have a list pattern to abstract the map. i mean there are many types of list. nested. hr. headings... this one is opinionated aw.

. 21 00 analyze claude ux. record. 22 00

claude takes another approach. sidebar icon (single colored) on desktop. hamburger on mobile.

btw, i think i could make input and output horizontally splitted on desktop. it doesnt have to be like cyberchef, if we dont rely on recipe.

the final decision.

i will not show a "sidebar of sidebar" like vscode or claude. i have no such dock items.

- google ai mode
  - home
  - list
  - new
- vscode
  - files
  - search
  - extensions
  - ...
- claude
  - sidebar toggle
  - (whitespace)
  - new
  - chats
  - projects
  - artifacts
  - code
  - "business"
  - (whitespace)
  - design
  - (whitespace to the bottom)
  - avatar

tools couldnt be aliased easily to letters. and they dont necessarily have icons.

the decision is, 

- on desktop, 
- on mobile,
