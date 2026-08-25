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

20 00 ~~document everything known. elaborate the plan.~~ make decisions. think and research sidebar ux.

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

- on desktop, no sidebar toggle shown. it's on by default. search. title. hamburger. list. power users can opt to hide the title bar. you can use shortcuts or hover the left border. alt, i guess, will ctrl b first and then open main menu.
- on mobile, there would be a toggle on top. toggle (hamburger or sidebar). Current tool. you can hide it and use gesture.

no secondary sidebar or dock.

for icons, i can change my mind later, make it contextual, or customizable.

. 22 40 analyze adwaita demo.

adwaita demo doesnt allow you to toggle the sidebar. but when you switch to adaptive preview, you can. it's exactly the mobile pattern. btw, it pushes.

toggle. current title. actions (camera/screenshot icon, exit icon, exit text) or three dots. window actions.

the thing is, i dont wanna have a meaningless title bar on web.

actually i thought about it. but i gave too heavy constraints. <!-- i dont want the toggle to float (idk what it would hide. it's also unnatural to see it before "input"). and i dont wanna let it take screen real estate. -->

false assumptions: sidebar toggle should be on sidebar. no title bar.

aug 2026

01

05 00 ~~document everything known.~~ elaborate the plan. design page anatomy. design params and return of some components. 06 00

create general pattern components.

sidebar. shortcuts. settings. quick panel. scroll area.

<!-- that can be. but that's not simple. better to generate, test, and align. -->

learn the layout css props by asking llms specific questions.

sidebar. params: an array of options. a state of selected.

quick panel. params: a list of functions w optional metadata (e.g. names, synonyms).

shortcuts. <!-- just let it bind. -->

---

that's too brief. create a todo for each component instead.

02

02 40 create pattern editor (03 00)

enough prep. time to move on.

---

default export found in sidebar and textarea. <!-- not given enough constrants to chatbot llms -->

standardize as named.

---

- editor type select? readonly?
  - title
    - type
    - select?
  - textarea
    - readonly?

---

<!-- i guess it can be done later, to drag to resize. -->

minimum css to split a div to left and right

---

make everything default to flex.

03

17 20 research css caret props. (17 40)

i can complete it.

---

i guess it's to overlay. it would be a bit complex. it might encounter edge cases.

let's keep it simple for now.

---

it doesnt matter, i guess, on when i finish each task. <!-- on recording, well, i mean i could. -->

i would record when i decide to start, or consciously make timeboxes, whether a hard one or a soft one.

i have breaks between tasks. <!-- pomodoro? -->

i may have some rest sometimes. <!-- i would not need to know, i guess, in the future. also, it could be implied. -->

18 00 learn pomodoro method. (18 20)

<!-- compare variant and variation -->

<!-- i didnt record the time in the md either. languages just sit there, waiting for my exploration. it doesnt matter when i learnt things. -->

i guess, from now on i would divide time to every ten minutes, instead of twenty. <!-- i guess, still, i would not use five. relax, i mean. -->

~~18 00~~ 18 30 research cyberchef alternatives. ~~(18 20)~~ (19 00) 20 00

it should be simple. maybe it would not be even worth the time. take a look. and leave.

https://devtoys.app/

---

i have some tabs left. clear them.

also, it seems to be on the top of the todos.

---

it does remember my dark mode choice.

one thing i notice is, cyberchef typically instructs you to dl, as a zip, which is an html.

it doesnt, like, pnpm add g and then run a localhost daemon.

and thus everything stores in localstorage, under origin "files://".

keys are "options" and "favourites" (yeah en uk). i guess it would absolutely conflict.

22 20 <!-- 22 40? --> design routing params and ia. ~~23 40~~ 24 20

<!-- i closed my eyes. i thought. i leaned myself on walls. i wandered. i feel it would pay off. i feel i would be wasting time. idk what im doing. i know what im doing. -->

conclusions

- routing params: tool, args, input <!-- instead of input: json, output: yaml. tools are basically fn, imperative. you couldnt just declare in general. e.g. maimai analysis tool. args are optional (e.g. recipe tool). input auto sync is opt in. -->
- sidebar ia: under convert heading, there are "json, yaml, toml, xml" and "markdown, html". convert heading couldnt be collapsed. items are dropdowns. collapsed by default. clicking will select the first tool and expand. <!-- initially i thought i would have select on editor title. that's inconsistent and inefficient. -->

rationale

scannable. consistent. efficient. progressive.

<!-- it might be easier to click "json to yaml", than two selects, though selecting is more elegant. you will use ctrl p json yaml anyway. -->

impl

i guess it will be easy. maybe react-use. make routing params a state. set initial when load. sync when change. one way, no more params to js after loading.

visual design

i didnt find a pattern of nested sidebar. vscode works. but it's just too boring. and it doesnt give me any aesthetic pleasure. some blogs or docs might have this pattern. but it's generally vscode like.

maybe adwaita assume we would not nest it too deep.

~~i would make a deliberate choice.~~

i will not make any assumptions like "nesting level must be consistent under one heading, no mix of folders and files". 

~~decision.~~

- top level headings like "convert" "misc" will be rendered like adwaita instead of a vscode folder. they can be collapsed when you hover them. if collapsed the indicator will be always visible. if expanded, it will only show on hover.
- folders and files will be styled the same. folders will have an always visible indicator.
- files inside folders will have indentation depending on the nesting level.
- the indicator will go after an item, not before, unlike vscode. 

<!-- research wikipedia: philosophy -->

wait. i think they absolutely hae the screen real estate to display both md to html and html to md confortably. it's easier. scan. and then one click.

the main reason behind "json yaml toml xml" dropdown is... aesthetics. it's not a really thing. i shouldnt make them collapsed by default.

decision.

- everything will be indented the same
- all leaves will be styled the same
- folders are headings
- heading style depends on their level. h1 has underline.
- indicator will only show on hover or when collapsed.

the assumption:

- it can nest anyway, but it will not really nest very deep to look the same.
- it doesnt matter much if you misidentify which folder it belongs to.

---

anyway.

i think it will turn out to be fine.

you could not imagine the way. you have to build it.

and... you can change your mind later!

04

04 00 design global persistent state. (04 30)

sidebar collapse. settings. theme. sidebar taxonomy pref. tool view pref.

---

i think it could be categorized, like vscode alt bar.

---

constraints

- state must be flattened
- all possible gui toggles must be reflected in settings. state is a superset.
- settings gui and settings json must be identical.

---

i think "state must be flattened" would be quite easy to solve.

i guess i would have a yaml file. it's trivial to flatten. and i would not have to deflatten. i would simply reference the existing keys thanks to ts.

assumption: it's clear, i think, that every state, incl the optional ones, must have a default value. it couldnt be undefined. because undefined would be reduced to a default value anyway. and it's not better to define/hardcode in code.

---

how to design the taxonomy?

- vscode alt bar
- xdg desktop
- adwaita apps

there could be many ways. but letme learn by doing. just try them out.

where would i put this file.

<!-- vscode file tree is a bit messy. toggle some workspace file exclude settings. -->

maybe just state.yaml on web root.

---

now i see.

alt bar is inside xdg desktop. (data, settings in config)

wait. i feel it might be probably massive to store the full input string in localstorage.

i guess in code i would have `use_global` and `use_global_data`.

i could store data somehow. but it should be decoupled. like,

- when sharing, input could live in url if it allows
- when restart, input might be stored inside idb. (for sec, default off)

that's conceptually identical. but impl differs.

let's separate them.

<!-- i dont think there would be cache. app state (e.g. current page) would not be cache either. it might be a config. -->

---

since it's yaml i would write freely. in flatten i would convert spaces in keys to underscores.

---

let's research ptyxis a bit.

---

vscode autocompletes yaml well. wow.

<!-- i did not remember ive installed some extensions. -->

18 40 design ~~and implement~~ routing as an extension of state lib. (19 40)

location.

- keep (omit others)
- omit
- always sync

---

url params are global. it's inherently coupled w global state.

i already have some thoughts.

design

- ~~sync <!-- should sync url params -->~~

well let's be explicit. i guess persist is clear. you would have an item on localstorage w such key. (i may support idb later.)

sync is not. where would you sync w?

---

well suddenly i thought, if i have both use_global and use_global_data, and both occupies url, and i have no idea what's updated, how could i sync?

solution: every global state would occupy some keys. it simply updates what it has. it wouldnt cleanup irrelevant params (e.g. utm from).

---

design

- should sync url ~~params~~: false <!-- if false, everything else is irrelevant) -->
- should apply whatever given: true <!-- if they explicitly define like "theme=dark", i think it must apply. whether i would cleanup (so if they share simply by copying url their own pref wouldnt be shared), that's another problem. -->
- ~~should cleanup irrelevant params after init: false~~
  - false: do nothing
  - 'omitted': cleanup if existing as a key of the state and omitted
  - true: omit everything else (dangerous, may conflict w other global states) <!-- i will not analyze your code. -->
- should cleanup omitted params after init: false
- should sync after init: true <!-- if they go to the main page, and there is a tool memorized in localstorage, apply to url. (for new users, i may choose whether to show a main page. maybe just the site itself, not an explicit index.html or main.html, or guide them to the first tool.) you may explicitly go to /home (e.g. if you click the main title). it would show a brief desc of all tools. -->
- ~~keys to sync?~~
  - keep?: omit all others
  - omit?: omit some keys
- keys to sync? <!-- i guess i would wrap everything inside sync url options (it can be confusing otherwise, like sync w what. sync w persist? btw i dont have constraints on js fn params.) -->
- keys to omit?
- ~~parser: url path to params obj (default: ignore path, )~~
- ~~applier:~~
- param mapping?: url param to key
- ~~path mapping: path to key (e.g. `tool`, `page/tool`)~~
- path mapping?: path to key <!-- since main exists, i would make it an array of matcher. i would make it flexible and human (rather than page=main/tool, tool?=some tool). -->
  - `main`: page
  - `*`: tool
- custom mapping?: url (param, path, whatever) to key value pairs. both way. ignore mapping if set.

notes

- localstorage and url params merge. url params have high priority.
- url hash `#somewhere` is equivalent to `?#=foo` by default

---

i guess react use would not provide such method. everything is a hook in its perspective.

letme search... what methods would i need

how to get and parse url in js

how to set url in js

what url can be set wo a reload in js

20 00 design archi of implementation of state lib routing. 20 30

letme think what args i would actually pass first. i may not impl "custom mapping" for now.

```yaml
should sync url: true
should apply whatever given: true
should cleanup omitted params after init: true
# most time it doesnt matter at all to cleanup irrelevant url params. the "conceptual cleaniness" doesnt outweigh the cons.
should sync after init: true
keys to sync:
  - tool
  - page
param mapping:
  theme: appearance.theme
path mapping: # i guess it could be smart enough to derive the other way
  home: page
  '*': tool
```

notes on mapping

- cache all keys mentioned
- for each key to sync
  - if inside path mapping
    - check one by one if it would match
    - it fits apply, otherwise continue
  - if inside param mapping (e.g. `#: location`)
    - mutate in place as if it's mapped
  - otherwise
    - apply as param. (or hash if it's `#`)

js objects have order. it would be preserved when converting yaml aw.

20 40 implement routing as an extension of state lib. ~~(21 00)~~ (21 20)

how to get and parse url in js

how to set url in js

what url can be set wo a reload in js

how to match asterisk

---

well i guess it's a bit too optimistic. but i would try my best.

<!-- yes it is. i will not overwork anyway. good news is things are clear now. -->

---

if i run sync url after persist it would be automatically merged w priority.

---

i think i will not use regex.

constraint: only support one asterisk at most for now. (reflected on the type.)

let's generate.

use snake case. use type no interface. use fn statement. write a ts fn match. params pattern, text. pattern contains exactly one asterisk. return false if not matched. return the matched string. no regex, test start with and ends with and slice.

<!-- use snake case. use type no interface. use fn statement. write a ts fn match. params pattern, test. -->

05

21 40 design navigation state. research undefined in json (de)serialization. ~~22 30~~ 22 40

it's not cached data. obviously.

it's not generated <!-- input/output --> data.

put inside config.

in vscode, the ia is designed as

- view
  - open command palette/view
  - appearance
    - panel/element/mode toggles
    - panel position
    - zoom
  - <!-- editor --> layout
    - multi column/row
  - primary sidebar items, e.g. files, extensions
  - panels, e.g. terminal, problems
  - word wrap toggle

wise enough. i think. could be sub optimal.

---

i think it's about different contexts.

it's alt bar in vscode. it's not alt bar here.

---

i think it's clear to separate navigation in state.

i will show theme, layout, position, element toggles, whatever in appearance in settings.

i may not put navigation in settings. it's awkward.

it might conflict w the decision to make settings an exact mapping of states. it's expected.

well, i would say it's not. you still edit the same config anyway in json.

and the settings gui is a taxonomy on top. after a mapping, designed for humans.

---

about undefined. i guess i would just leave it there.

it's simpler to write `?`. i can simply omit. undefined is a valid default value.

yeah, again, it conflicts w my assumption.

let's think whether it can work.

serialize:

- when defined, ok
- when undefined, omit

deserialize:

- when defined, ok
- when undefined, do nothing as you couldnt see it (omit effectively)

it's the same when you have an undefined key or a non existing key.

wait. my url param behavior seems to rely on the list of keys. <!-- ts keyof would work. js runtime would not. -->

---

solution:

- all keys must not be optional
- use false over undefined. you may use an empty string aw.

assumption:

- booleans couldnt be undefined. it must effectively evaluate to t or f by default.

what about string keys? maybe i could make it an empty string.

~~no. it doesnt make any sense.~~ it does make typing easier. i dont need it when it's undefined, so it can have any value. if i always need it, it must have a default value, as a factor of the default app state.

also, it benefits yaml. you couldnt both define a key and leave it undefined, unless you wanna bother null (the ten b dollar mistake).

---

i think it's better to convert yaml before writing jsx. it leverages auto complete.

*be aware! avoid tsism.*

---

btw, ts infers type well.

---

i guess there isnt an ideally simple way to type a key.

default true is widened as boolean, as expected. (let widens. const defines as is. for fn params, i.e. state, it's considered let. well done ts.)

for arbitary string, it's just widened as string. no workaround needed.

the most common and maybe the single case, is where it's flexible, but it's not anything of its type. typically union. maybe i could solve it in place.

22 50 check feasibility and implement union helper lib (23 10)

use snake case. use type no interface. use fn statement. write a ts fn union. params all args. returns the first arg. return an union of the args array.

---

assumption: all values in config must not be an array

then i could easily define an array and get the first value.

in the converter, i will map it to the union.

the benifit is i leverage yaml flexible typing. numbers are numbers. strings do not need quotes.

---

i outperformed the llm by applying common sense on self explanable api design. ts is absolutely self explanable. you wouldnt define true and get false, or define a union and get only one.

i made mistakes. web/lib/global is ignored by b. b takes the nearest bunfig (which is lib/global on root). browser takes web/lib/global

maybe i could normalize it. i could copy bunfig on web.

yes. that works.

06

05 10 research url params. learn the methods of state lib routing. ~~(05 30)~~ 05 40

url normalization is ugly. it's still cleaner and more readable than base64. i may render it better, like, sometimes it doesnt have to be converted. it could show unicode chars. but it's better not bother it for now.

---

let's think about the logics.

- (persist)
- if should sync url
  - calculate keys to sync, that is keep ?? all keys excluding the omitted ?? empty
  - init
- init
  - map url to keys, path mapping, params mapping, hash
  - loop through given params, apply if it's valid key of the state, and then delete if it's omitted
  - sync
- sync
  - map keys to path (it works for now. i may need a more general one soon.)
  - apply params mapping
  - merge to the url (append, update if existing, ignore if irrelevant)
- when state change
  - sync

solution: the more general routing

- more asterisks, arg reference
  - syntax sugar like template string fn or proxy based auto tracking
- custom two way converter. it's easy.
  - you can just define one way aw

21 30 think about the implementation on routing.

about login. it's irrelevant for app tools. but it could be handled easily.

component app:

- if page is login (from path mapping), show login
- if page is protected and it lacks auth, show login

i may allow push, replace, or auto.

an explicit replace is needed, e.g. path auto correction (esp common, e.g. typos, outdated routes).

no idea when explicit push is needed. i guess i would engineer the other way.

just toggle a flag. i guess it would be a void fn.

in the main component tool auto corrects itself if non existing, and toggles the replace flag.

app might also use it to correct the path. (that is page, which must be inside a union at the end of the day)

there's nothing wrong to just leave these three options in case abstraction leaks.

23 00 design ~~implement~~ routing for state lib. (00 30)

currently the routing (path mapping) is very specific.

i think if needed, i will not create a two way converter anyway.

instead, i will make the full path as path. a global state.

app on mount, it will parse path to init other states.

since then, path will reflect all other states. dep array doesnt matter (basically perf engineering).

~~*critical:* app doesnt depend on path. on mount, it will get raw...~~

you couldnt just get raw for the derived, intricated, coupled path. path is global state. and it shares subscribers w other props. all keys inside one global state share the subscribers.

well i couldnt use effect either. it would still inf loop. letme find a more direct approach against react.

i could work against react. i dont have to.

i think i will still have init fn and change fn. what's different is it's no longer bound w routing.

- init
  - run after persist and routing
  - get raw state
  - get your path prop
  - mutate state directly to init the derived states
  - it runs before the app component
- change
  - basically a subscriber. syntax sugar.
  - get raw state
  - mutate path directly to reflect all props.
  - sync

**rule: no setstate inside any subscriber. (set call subs. if subs called set then inf loop.)**

i may alter the design of change. just solve the specific problem. so i no longer have to expose sync.

well, i will still call it change.

- change
  - get raw state
  - mutate path directly to reflect all props.
  - (implicitly sync)

sync is a subscriber yk. and it's clear when state change it should sync.

it doesnt have to render the component. but it should be always in sync.

you dont have to learn the rigid (leaking) structure of routing. just use js.

i think i will apply it now.

- path mapping: key (not object)
- init
- change
- ~~correct path~~
  - (it's mutated directly)
  - lift a flag to make the next sync replace
- correct path path
  - update the path
  - ~~lift a flag to make the next sync replace~~
  - (sync as replace)

i will make correct path always available to avoid tsism. <!-- yes. it will work. if no path mapping, it simply do not update the path in global state. -->

well, i will not have the direct method. it's awkward having a method like this.

no leak. you only want to correct path when you actually altered the path somewhere. and since global state is always available, you can simply rp the raw mutation w it.

and it should sync! it doesnt matter to sync again if you placed it inside change. since path is already synced and no new path mutation, neither push nor replace will occur. the benefit is you can correct path anywhere.

---

one thing is "sync" itself will always be sto zero.

order is guranteed so no race cond. and it will fire after all sync op.

it's not about async. it's to let sync state mutation fire first.

let's say inside init, you somehow correct path first. and then mutate a few props. it might break if not async.

---

yes. it *is* more boilerplate. but look at the simpler approach, it isnt even complete. what would page be when tool is matched?

**you can absolutely abstract w some hof if you like. maybe both at once, w obj flattening.**

---

also, global state is expected to be complex and rarely you wanna sync all keys. 

~~keep will default to empty.~~

and i think you dont have to keep "page" and "tool" anymore. you dont have to keep "path" either.

keep will default to all mapped props (param or path).

21 20 redesign routing keys keep and omit.

if you can change whether to keep "input" on url on the fly, i may rethink how to design "keep".

first, both keep and omit will become set whatever you pass.

you can pass a fn to modify keep or omit.

you can pass a set to replace. you can pass a string to add. you may delete.

if keep is not everything by default, i may redesign keep and omit.

if i dont care what keys you have, a single omit means nothing.

conclusion:

- only items to sync (array or set) in sync options, no omit
- keep and omit are returned
- keep
  - array/set: add
  - fn:
    - set -> new set: add
    - set -> undefined: (modify original) do nothing
  - item: add
- omit
  - array/set: deduct
  - fn:
    - set -> new set: deduct
    - set -> undefined: (modify original) do nothing
  - item: deduct
- rp
  - array/set: rp
  - fn:
    - set -> new set: rp
    - set -> undefined: (modify original) do nothing
  - item: toggle

08

03 20 implement routing for state lib. (04 10)

play hayato sumino.

---

wait. ive not thought enough.

currently, if you have param mapping, let's say it's theme to appearance.theme, it would be included.

what if you do not wanna actually sync it?

explicit > implicit.

instead of introducing "omit" back again, let's be explicit. mapping != including.

---

ts wants me to write like

```ts
init {
  if data source exists
    do init
}
```

instead of

```ts
init {
  // tsc err: data source might be undefined
  do init
}

if data source exists
  init
```

anyway. no idea if that constraint matters.

06 20 <!-- continue to --> implement routing for state lib. ~~(07 00)~~ 07 20

<!-- i was thinking about "acbox: i feel depressed when i screen hundreds of resumes while we only need three, and im afraid i would be one of them". i checked where it was and read the context. and then i surfed a bit. well actually i wasnt even wasting time on anything typical, i simply was dreaming and feel some kinds of ecstasy or zeal. damn. -->

sync. correct url.

keep, omit, replace.

---

now subscribers will always receive data.

you can always pass more in ts.

---

correct path. i will life a flag instead. it's more flexible.

yk, sometimes you dont wanna derive the path where you correct a critical prop.

i will call it correct next.

---

i feel i want to call it key instead of path.

i may change my mind later.

---

well, it feels like over enigneering.

it's not wise to accept fn, esp considering it's so flexible, dep on whether it's void, on runtime.

i guess i would only accept array/set and item.

hard to say if you never need that. but it's highly unlikely you would pass a fn. see, keep omit rp void fn does the same thing. to mutate the set directly. it's definitely an anti pattern anyway.

---

it seems to be working.

- fof object doesnt work. i have to use fen. i did not always remember. <!-- btw, no way to escape. you couldnt override js native for loop (wo a pre compiler, which is massive work). you have to get entries to map. you may silently make object iterable? -->
- i do need to add state versioning for example or it would get stuck in a desync localstorage
- currently it doesnt show path, as tools and sidebars are not finished. it can work if i explicitly set the factor states.

09

00 40 write readme for tools. (01 10)

i should have done it earlier. ux, ia... these all depend on what it is and what it's designed for.

false assumption: it would be simple and clear. no many choices. <!-- thus no explicit constraints required -->

example: would you make it default to process or args? would you expand it consistently even for json to yaml (that doesnt necessarily take args)?

---

well, i dont really wanna write readme like others.

<!-- that is, name (icon), desc badges socials links, features (explanation, comparison), build/deploy, contributing (contributors, community, team), misc (sponsors, star history) -->

if im making decisions, rather make decisions directly.

---

let's take a look at linux readme. i remember it. it was inspiring.

- it uses `====` and `----` for headings, instead of markdown `#`
- it uses rst instead of markdown sometimes <!-- ?, no idea if that makes sense -->
- the structure
  - name, desc, links
  - readlist for "all users"
  - who are you
  - welcome and readlist (links to certain docs) for each specific users
  - community links

ok, well, linux is confident enough. "i dont have to introduce myself or explain my worth"

---

well, im not writing readme or making decisions. actually the next step would be sidebar impl, and scrollarea i guess. (btw idk textareas would be scrollable that way)

<!-- i might design the sidebar ia, that is an yaml. i would write down some of my prev thoughts on the road. -->

it's worth the time i guess.

---

i still have some time left. let's write a knowledge for readme.

05 20 record verbal thoughts. map ia on yaml. ~~(05 40)~~ ~~06 00~~ 06 20

let's have an yaml of sidebar, or ia, in general.

there can be alt bar yk. and more.

i would define the constraints and record the decisions in <!-- derived from --> monologues.

then i could apply that structure.

you could have some styling. you could be obsessed in names <!-- text and labels -->. ik it's incredibly intimidating or logically captivating <!-- entangling ~~entrapping~~ --> when you could not map the whole picture precisely. dont be afraid. invariants matter <!-- anyway -->.

---

idea on state

- i may expose data to result.data
  - i can make itself readonly

upd: applied.

---

decisions on sidebar ia

- there should be hierarchy coz they are logically grouped
- if i could not mimic adwaita completely, i would not care about it at all
  - adwaita would not expect there to be hundreds of tools, nested deeply
- they could be collapsed. the toggle would only show on hover or when collapsed to reduce visual noise
  - rationale: if you click the heading you would not expect nothing to happen, so it's strictly better to have some extra behavior for the one who needs
- sidebar will use the id instead of the array index, which tells nothing and has to be mapped anyway, for the state of the selected item
  - you might intercept click behavior or make it draggable in the future
- all items will be expanded by default
  - sidebar should be designed for the ones who need them. power users who collapse and use command palette are irrelevant.
  - scrolling is easier than clicking
  - it doesnt make sense to make "json yaml toml xml" collapsed by default just to make them feel a bit more elegant when onboarding
  - if i choose to hide some
    - i have to choose whether to hide for each, esp cases like "md html or html md" (not worth a click, but could be grouped to avoid the messy complete graph path listing)
    - there would be too much to expand, adding one more step to virtually all actions
- nesting levels should be consistent
  - consistency matters immensely
  - you should accept the tradeoff, e.g. misc/misc/item
  - for visual design, i may style the higest nesting level italic, dimmed, and underlined. they are akin to title code code comments indicating where.
  - i would like to count from the leaf upward. but it's ok to be naturally h1 h2 h3 since it's consistent within one app

---

ideas on additional tools

- lookup
  - chinese id (or prefix) to geolocation
  - university ranking

---

conclusion

- i will make it consistent as possible, esp for the same category
- i will actually make the second nesting layer (json yaml toml xml) less noticeable

thanks to yaml, it's much easier figuring out the visual design.

19 00 elaborate and design ~~and implement~~ sidebar. (19 40)

i may integrate w scrollarea later, and support versioning for persistent state.

though sidebar would technically dep on scrollarea. (i guess it would be easy)

let's record verbal thoughts first.

<!-- i forget to bring the watch today. would be fine. -->

---

decision:

- leaves are leaves regardless of their nesting level. headings should be counted normally, rather than bottom up
- within the same category, the number of layers should be consistent
- i may ref the visual design from aosc os portal sidebar
  - no idea if it's better to style as "up" instead of "right" when collapsed 

---

i may have objects of arrays. i will not have an array of objects.

let's elaborate this.

c

```yaml
  convert:
    - json yaml toml xml: ...
    - markdown html: ...
    - timestamp utc: # arg: timezone (when to utc)
```

btw, for gui, maybe i could make args about "how input should be parsed" next to the input.

e.g.

- json parser, flexible or not?
- maimai, tap and hold already merged?

---

for the draft name, i guess it would be "web sidebar ia". 

simple. <!-- self explanatory -->

no need to say "design ia write web component sidebar"

---

figure out the names of the color constrast standards. get confused by llms and evil law makers.

---

for the props, i guess i can pass ia directly into it.

no need to separate name and id as they will generally not collide. 

then i can make leaves strings instead of objects `{name, id}`

---

let's have a small mock experiment.

---

well, i realize i did not want to pass children to sidebar.

i will decouple the logics of the collapsible list. 

let's just call it list for now. not "toc" or "collapsible nav". 

i will not just make list like "v for".

---

will lists be draggable?

will have.

if i wanna do so, i guess i can simply omit focused and setfocused, and pass onselect.

19 40 design archi of ~~create~~ component list. (20 20)

ts gets in my way.

p (ideally)

```ts
type items = string[] | Record<string, items>
// type items = string[] | Dict<string, items>
```

c (compliant)

```ts
type items = string[] | { [key: string]: items }
```

---

let's think about how i would like to flatten items, and map them to html.

```ts
{
  foo: {
    bar: one, two, three
  }
}

{
  foo: one, two, three
  bar: one, two, three
}

one two three
```

```html
foo
children of foo
  bar
  children of bar
    one
    two
    three

foo collapsed?
children of foo
  one
  two
  three
bar
children of bar
  one
  two
  three

one
two
three
```

so the state would be...

```
is collapsed map id bool

flat item

- name
- id
- type: h1 to h6 or p (leaf/item)
- parent: id[]
# - parent id?

flat items flat item[]

render
  each item
    apply type on both tag and class # it's feasible (though you couldnt eval js in jsx tag)
    if one of its parent is collapsed
      continue
    if it's a heading
      show toggle (css: on hover or on collapsed parent)    
```

20 40 ~~write list component.~~ create map util fn for global lib. ~~(21 20)~~ 21 40

let's define the types first and then i could generate.

---

i would absolutely go for fof rather than map.

it's my personal project. 

feeling > efficiency >> big tech <!-- corp --> best prac

it just looks too weird, when you loop through it one time to filter, and loop again to map.

i may not create a fp "map arr fn" either. well actually i may want to auto add keys to suppress react warnings (ideal of big corps, the conservative guys).

```ts
fof item items
  if should stop break
  if irrelevant continue
  push process item

map items item ->
  if should stop return break symbol # break signal
  if non trivial return process item
```

look, map it's not any syntactic more boilerplate.

---

btw, i would say react itself is over engineering.

it solves a general problem: it should be safe and robust for all arrays

instead of my specific one: it's always static, whether on sidebar or on toc or on alt bar

and! react prevents you to spread key on props.

---

btw, pascal cased types tell nothing.

decision: i would make types pascal case iff they are util types (e.g. Record). 

if all components have props, it doesnt make any sense to suffix "Props" like "ListProps" or "list_props"

~~05 40 write list component. (06 40)~~

05 40 polish map lib. 06 10

filtering would be trivial. just loop through, make itself and all its parents visible if matches. that's how adwaita demo works.

but i guess for tools it can behave exactly like ctrl shift p. see nautilus or vscode.

---

just code it myself. i could try to be more efficient. i dont have to.

---

i dont have to have a separate `onclick` or `onselect` i feel.

if i want to make click "append to recipe". i can simply omit focused (or fix it to a non existent key, like an empty string), and pass `set focused` normally.

---

i dont have to be focused. i could simply fix anything just to make it feel right.

i think i would accept index? and array? for map. why not.

i feel i can make halt a fn. you can either return a value and halt, or just stop.

06 10 write list component. ~~(07 00)~~ 07 30

i would like to have a method flatten.

---

well, i can oop if i like. i dont have to.

if flatten feels awkward, i could just create a result array and spread.

---

ive made some decisions before. 

- id of headings will be their parents and them join dot
- id of leaves will be their id or their name in snake case

the only thing to watch out is

```yaml
foo.bar:
  sth
foo:
  bar:
    sth
```

which is highly unrealistic

---

```ts
type Set_fn = typeof Set
declare global {
  var Set: Set_fn
}

export function Set(...args: any) {
  return new globalThis.Set(...args)
}

log(Set())
```

it doesnt seem i can make `Set` `new Set` and `Map` `new Map`

just call it `S` and `M` anyway. have lib/collection.

i dont feel i have to make them capitalized.

---

doesnt seem i should persist is collapsed. it should reset after refresh. and i do not have to provide an option.

---

fine to name as flatten. fn statement takes priority than global this util.

---

i will support array and set on has.

```ts
export function toggle(set: Set<any>, key: Key) {
  if (has(set, key)) {
    set.delete(key)
  } else {
    set.add(key)
  } 
}
```

set.add would err. and it thinks has set key is always true (by the type guard), thus else is never.

---

```ts
export function has<K extends PropertyKey>(obj: any[], key: K): boolean
export function has<K extends PropertyKey>(obj: Set<any>, key: K): boolean
export function has<K extends PropertyKey>(obj: any, key: K): obj is Record<K, any>

/**
 * check if an object has a key
 * 
 * for obj, check has own
 * 
 * for array, check array.includes
 * 
 * for set, check set.has
 */
export function has<K extends PropertyKey>(obj: any, key: K): obj is Record<K, any> {
  if (Array.isArray(obj)) {
    return obj.includes(key)
  }

  if (obj instanceof Set) {
    return obj.has(key)
  }

  return (typeof key == 'string' || typeof key == 'number' || typeof key == 'symbol') &&
    obj && typeof obj == 'object' && Object.hasOwn(obj, key);
}
```

interesting.

11

07 00 polish styling. make spacing consistent and expected. add more design tokens for length units (e.g. border). ~~(07 30)~~ 08 00

adopt tailwind scale for border radius. 

rationale: no need to overthink. the values are identical. just have a standard naming (base 4px).

12

06 20 alter wording on comments of lib map.

20 40 break down ixd. organize and conclude ux and pm knowledge.

i have to rescope tools.

well, if i would not feel right wo it, then it _is_ in scope.

i would categorize them into a few priority groups i guess.

moscow is effective. it's factual. it feels objective. it doesnt fit my instinct.

<!-- well, i would say, moscow is ideal. the flaw isnt about moscow. it's me myself that didnt make the plan comprehensive. for example, i didnt say "provide basic functionality. i can switch tools on sidebar. and editors should work as expected.". instead, i said "create sidebar component" (as if it's decoupled from the logics, well it is, but sidebar itself only provides the state of the selected item). i said "create editor component". to make it ideal, i thought there would be "args on input/output heading" "two way convertion". -->

<!-- i would not say it's a problem to be solved. but sometimes if you wanna see some results, it's perfectly valid to be progressive on ux (instead of code completeness). -->

---

i feel i should have the tool "tg to journal".

it would parse and make it an array, then convert based on the predefined time precision.

i would make it builtin. it's trivial to extend later. just, have a persistent state of extensions. for each, create a new function. inject to tool map. then inject to the tools hierarchy, which would determine the sidebar and the command palette.

in the future i would integrate it w have. like, "tg to have", or "import from tg desktop via clipboard/data export".

and, i will have the maimai tools. if there is only one tool in tools, it might be maimai. most tools are basically wrappers of ubiquitous libs, like, you can convert json to yaml anywhere.

<!-- yaml is a superset of json -->

there are a bunch of tools i can have. like code formatter/prettier. json to csv (?!). it's not a priority. <!-- you can even convert json to ts/py (auto typing). or to markdown (to csv first). it's quite weird actually. json must be object. and only the first key in the object, which must be an array of objects, will be used. keys in the first object dictates the table headings. inconsistent keys in following objects will be appended. anything non literal will be simply stringified (csv could not nest), and escaped if needed. -->

---

user research

ia

ixd

visual design

---

**yeah yaml is structured, but you can write comments anywhere.**

e.g.

```yaml
feature: # must have
  - get data
  - map reduce data
  - render output
```

since i dont parse yaml, i can write as i like.

decision: that would be the way to structure ixd.

---

about the scope of ixd.

ixd and ia wouldnt overlap at all.

```yaml
user research: # no need to overthink
  - solve my own problem
  - maimai user story # no foss portal on open web, inaccurate sometimes, inextensible
  - tools are scattered across clearnet, npm libs, and apps
ia: 
  - what features i will have
  - what actions can be made
  - how they will be organized
  - how they will be mapped for each navigation component
  - how they will be named, what text or label will be applied on each
ixd:
  - what will be shown on screen given each state # wireframes
  - how will state be changed given each user action # since it's declarative, i would say "how state will be changed" instead of "what will happen on screen or what will be triggered"
  - what are the components
  - what features/actions will each component have, which priority will each feature have
  - how each goal will be accomplished # implied or derived
visual design:
  philosophy: brutalism # simple by default, powerful when needed
  design system: utilitarian # opinionated from a subset of tailwind
  component library: created when needed
  assets: icon lib will be adopted when needed, no avatars/banners/backgrounds
```

---

letme think about the structure of ixd yaml, not the questions it would answer

it would be an object, obviously, instead of an array.

i think i will have an object of components. for each, i would use array if i just wanna list its children, or an object if i wanna describe each child

i will use comments whenever it feels right. like priority labels.

decision: one constraint i would apply is, i would never write general categories like `features` `actions`. i will write directly wo adding a layer.

---

"wh" could imply both `wont have (this time)` and `will have`. interesting. clever.

---

basically i just want it to be syntax highlighted and somewhat structured.

```yaml
foo: must have
  click: set an arg
bar: could have
  baz:
  asdf:
```

it's perfectly clear in ide.

decision: i will use comments only for commenting. i will write directly whenever it feels right and i may break the parsing structure. and, i will leverage "implicit null" for elements wo children. (it's perfectly fine to write arrays when yk it's a flat plain list)

<!-- rationale above -->

and,

conclusion: the flexible yaml is about _trees_ and lists, instead of _maps_ and lists.

that's how the world is really structured.

---

> **be explicit and organized. focus and timebox.**

about wbs <!-- "organized" -->, you absolutely have to break down the work. but basically it's yet another taxonomy. and <!-- ideally --> it tells nothing if it just mirrors like ia, ixd, archi, etc.

<!-- upd: wbs answers "what needs to be delivered to complete this product?", which is exactly what ux (typically ixd) implies. -->

you dont always have to have a kanban <!-- "explicit" --> or a todo list. they all serve for efficiency/productivity. it's fine if yk what you are doing <!-- and what to do _next_ --> and why it matters, esp when alone.

you have to write down your thoughts and ideas though. you couldnt memorize.

...

well actually you do have a kanban. since the constraint is the number of wip <!-- or todo --> is always one (or zero), you organize like this

```yaml
todo: # serves as backlog
  - foo
  - bar
  - baz
  - ...
purpose:
  - ...done
  - wip # or todo effectively, or the task of highest priority in backlog
  # - backlog
```

...

it might be useful to separate todo from backlog.

that is, i may have a bunch of todos and one wip.

typically, the todo list might be like "api endpoints" "component lib" or "ux competitive research/analysis", a set of related tasks

...

i want sth like scrum. 

but i dont think i could get predictability when even deep work time is flexible and volatle.

well, is predictability a thing? what for? if it matters, who for? and accountability. who for?

13

03 20 separate todo and backlog.

14

05 30 ~~write ixd.~~ define the rule of priority. 06 20

i will rarely use arrays. i will use array only if it's a list of items, not some distinct children. i will leverage implicit null and comments.

i may break yaml syntax.

<!-- sometimes i feel labels or metadata like "moscow" would better fit as comments. -->

---

fix list component.

some vars are unused. it's incorrect. the value instead of the key value pair should be passed.

**generally, all components must begin as an element w classname of itself.**

---

should have and could have differ in "value". it's messy and ambiguous.

letme establish a clear rule

- must have: completely usuable wo (i.e. no tasks can be completed)
- should have: inefficient or incomplete wo (e.g. missing features, no native route for some use cases)

well, what about could/will?

the decision is i will just name it as "wont have".

it's effectively the same when you dont write it down or you havent imagined a feature. in that case, it doesnt matter if the feature matters or not in the real world. it might matter. or it matters. but it doesnt matter (it's the same) to you.

i dont have to call it "_will_ have" just because i _might_ have it in the future ("wont have, for now").

<!-- will have is could have. -->

- could have: ux improvements, minor perf engineering, etc. (i will write them if i have spare time or i feel like that)
- ~~will/~~ wont have: not planned (e.g. contrast to the opinionated design or decisions), out of scope, negative roi
- unlisted: irrelevant or awkward or yet to be discovered

<!-- it would be vicious i guess to think things in roi. what you invest is merely your time. you should write if you feel right. it's "wont have" if it's not good even if you can have it instantly. -->

<!-- awkward is inherently subjective. you may explicitly declare "wont have" if you really feel that's a thing and yet you dont like that. -->

**conclusion on moscow priority classification:**

- must have: completely usuable wo (no tasks can be completed)
- should have: inefficient or incomplete wo (no native route for some common use cases)
- could have: barebone or unpolished or unsophisticated wo (unmatched expectation or dissatisfaction)
- wont have: mediocre/unopinionated or bloating w (it should be done by extensions or forks)
- (unlisted): irrelevant or yet to be discovered

upd 18 aug: not always black or white. sometimes you might discuss "how often" or "how much". e.g. more efficient for who? more reliable to solve what edge cases, how common? most time it's clear when it comes to the decision though.

07 20 write ixd.

i guess i have the idea <!-- in my mind -->.

10 00 elaborate ixd for basic functionality.

11 20 write some snippets for import export.

i would aggregate all tools on action/tools.

11 30 create basic functionality. refactor sidebar, decouple list from it. 12 10

fix parcel cache.

fix web prelude. import the web variant for map instead.

make list items button so they can be focused naturally.

---

parceljs doesnt monitor files outside cwd. that's the problem.

if it doesnt track, it's basically outdated and ignorant to changes.

**create dev script on package json, use `b dev` instead.**

---

use effect should have dep array. if you update a state inside, that state mustnt be tracked.

22 30 complete todo: elaborate ixd. create every component and the must haves.

rationale: some tools are needed <!-- solve your own problem -->. the app must be usable and functional.

<!-- it's already functional if i can navigate a list of tools. -->

22 40 pivot: create telegram to journal tool. design its mechanics.

<!-- from voice recording. -->

two parts. telegram to journal. and merge new memories into existing journal.

i. telegram to journal.

telegram msg looks like

```
[name, date & 12h time]
content
```

i can loop through the lines, and test regex.

i will convert it into journal data structure, an array of time (y m d), content, and metadata.

ii. merge new memories into existing journal.

i could "insertion sort". to be simple, i will parse both, sort, and serialize instead. it might be much more unpredictable (breaking original structure, or even being non idempotent). it would not.

a. parse

the purpose is to separate the document into blocks.

i will maintain ymd, nil initially. i will place the first separator at the start of the document.

whenever it reads a keyword line. that is `mon yyyy` or `d | dd`, it will cut before it. it will lift a flag of "keyword", which would be added to metadata later. from the prev separator to its before will be appended as the content, w current time state. then the new date will be applied.

e.g.

```
mar 2026

foo bar asdf # this will be ignored as keyword

01

baz asdf # this will also be ignored as keyword

07 00 get up
```

when it sees a line starting w "hh mm", it will cut before it, and add time to its metadata (but it's not a keyword). eof will also be cut.

btw, it would ideally only look at acutal paragraphs, and standarzie time if needed.

b. sort: trivial

c. serialize:

maintain ymd (initial ?).

for each item: 

- is keyword? skip
- is different from current ymd? add a separate line of mon yyyy and then dd if needed.
- paste content

it's clever because nil = nil.

15

07 40 rename "focused" as "focus" on `list`.

nouns are nouns.

20 20 research js regex lib. create poc and some util for tg to journal.

17

00 30 abstract to improve regex dx ~~write `parse`~~ for tg to journal. 00 50

no idea how long it would take. feel i could achive sth today.

---

feel i could make regex match std lib. maybe not now.

well, i have a pl design now. i guess it would be better to invest in the new pl, `code`, than to 

i would have the file ext `.code` and the compiler cli `compile`. it would output a js (or ts) named the same by default.

---

<!-- rather --> sleep.

23 20 define data structure for journal.

18

10 40 tg to journal: parse time.

10 50 tg to journal: sort.

add order metadata: index. preserve the original order.

i guess i would have it. it would not be the default, like, think how sort works.

upd 23 00: it's not quirky at all, i mean the design of return value or cmp.

it sorts ascending by default, and cmp should be like "a - b", that is true if a > b, false if not.

i thought it would feel natural (in math, we always write like "assume a < b", which follows the direction of the real number axis) to say "if a < b then true".

anyway, it's quite awkward to have `const is_a_before_b`, i guess i would have a named after variant instead of `!is_a_before_b`.

12 20 tg to journal: serialize. test. 12 50

pass.

13 30 lib/map: support object, polymorphic. reuse lib/map on web/lib/map (instead of copying). 13 50 14 40 test and fix. create `reverse_map` util on lib/collection. 14 50

web/lib/map now modifies the result if array & react children.

remove `flatten` on `lib/map`. (unused)

19

00 20 tg to journal: write `parse_telegram`. 01 00

01 10 tg to journal: write `round_minute`. 01 20

revise dc snippet. declare from first, then you will get auto complete for the vars inside.

Math.min isnt flexible about params. it should have been polymorphic and accept array arg wo spreading. (no ts check or debugging needed). i wouldnt patch it. i would fix it in my lang.

22

23 00 tg to journal: fix `round_minute`. round 14:59 to 15:00 instead of 14:00. test. 23 10

i may solve a specific problem <!-- (just) for me myself --> instead of a general one. ~~support rounding method on round minute~~

i would like to have 24:00.

23

09 50 tg to journal: `round_journal`, `merge_journal`.

18 40 tg to journal: write `telegram_to_journal`. standardize string to string type and scalable naming. export. format single digit and prefix zero on serialize.

on lib/map, as i see "return void" as continue, i couldnt see it as "direct mutation" (i.e. return original) instead. guess would be right, explicit > implicit. "void" and "omit" sounds the same, esp when you say you dont wanna see any undefined in your code.

19 20 refactor lib/each.

- i want `each(n)` behave as `repeat(n)`, so it now begins from 1 by default
  - it's a breaking change. but guess would be fine. it's actually very weird if you rely on it. how would you use "from 0 to n"? for array index, it's "from 0 to n-1".
  - i wouldnt go the python way. `each(a, b)` should be `[a, b]`, not `[a, b)`
- return an array instead of an iterator
  - perf is trivial, composibility matters more

24

12 10 complete todo: create telegram to journal tool. <!-- sync memories -->

skip the non paragraph lines, by markdown ast, even if they fit the regex <!-- could have -->

no idea if needed. wouldnt cause problems seems.

could have.

12 10 pivot: create process panel to compose multiple tools

process can be visual and code. even when it's visual, it has to be serialized on url param, and thus to be parsed later.

i could serialize in object, e.g. yaml.

- if i serialize in yaml, it's inflexible, and also a bit boilerplate, which isnt ideal. i could be able to just list (w autocomplete) the name of a few tools, separated by linebreaks.
- actually i have a proposal of the `code` lang. it's quite complex. no idea if all its syntax would be meaningfully visualized (not "tool: code, content: program string").

the decision is i would compromise nothing. just like apple (iphone) shortcuts or samsung modes and routines. or scratch. i could absolutely go down the hard way. i would need that in the future.

btw, the data structure is obviously ast. not everything could be preserved. like, whether you place a space before a comment, it would be formatted.

---

i would create a tool in js to sync memories first.

---

well... a problem. vite is showy (port number, cli, crash screens) and requires plugins (vendor lockin).

and parceljs wouldnt just track everything.

i guess i would rather clear cache. the simplest way. but why doesnt it track?

---

i think it wont be fixed.

at the end of the day you must use react. and it logs twice (i.e. some weird object object). hmr doesnt reload the full app. effect doesnt rerun and you would have to reload anyway.

vite isnt just optimal. tlide or relative path would be even more prone.

the current solution is i would just rerun b dev, which would trash stale cache first.

everything would be in sync.

in the future i may fight the tools, so it would rebuild whenever anything changes. the current page would refresh.

13 40 style scrollbar. apply dark mode. web/lib/sync theme: rename `data-theme` to `theme`.

p

```css
[date-theme="dark"] {
  color-scheme: dark;
}
```

c

```css
[theme="dark"] {
  color-scheme: dark;
}
```

well... data-theme works. i made a typo though. lol.

---

i couldnt just disable the dir arrows while using native scrollbar.

maybe i dont have it. it would be likely quirky or incompatible.

create scrollarea component.

could have

16 20 tg to journal: fix `parse_telegram`. create a temp tool `fix_telegram`. 16 40

on telegram, there is no `0:mm` or `24:mm`.

12 am means 0 am that day. 12 pm means 12 am that day.

p

add 12 for pm.

c

add 12 for pm.

if the result is 12 or 24, subtract 12.

---

upd: and! consecutive msgs are merged into one, both on ui and when copied. they do show as separate msgs. but the name is only shown once. and the time is of the first msg in the sequence.

16 50 design process panel. elaborate ixd.

it would be process. not tool/args/recipe.

i may (though unlikely) build abstraction on top, like, arg for single tool, hide for single tool wo args, or render some args on input or output title bar. process, nevertheless, would be the ssot.

---

~~it would be a process component. no need to reuse~~

it would be editor.process. i would accept "should show textarea" param.

---

on url, i would deprecate path. no page. no home. no tool. just one process param. you may omit when nil.

---

moscow are familiar labels. use (text) icongraphy instead.

```yaml
# m = must have, s = should have, c = could have, w = wont have
```

i may simply remove such comment when "done".

---

on code,

- all tools must be `f(stdin, options?)`
- for the editor.process, (currently code edit isnt supported), it will receive "should show textarea: false" and get children of what's rendered.
  - i need the title bar, copy as if it's an editor, and at its heart, it's serializable
- process item:
  - tool
  - args
    - arg
    - type
    - default value
    - value
- process data structure: item[]
- render process: take process data, mutate directly
- main
  - pass step by step get output

how would i "mutate directly"?

loop through tools, loop through args, render, onchange: set arg.value

set arg.value is wrapped inside set('process', ...). process, binded to url, is absolutely global state. void return are ignored and subs are fired.

btw, it sees "undefined" as void return. when you omit return or return directly, it must be undefined, not nil.

---

i would map tool id to tool args. (no args if omitted)

list onclick, i would add tool to process instead of change the path

---

on url i would just serialize process directly. i may not sync it for now.

---

could have:

- sync process to url in an elegant way (e.g. code)

17 50 web/lib/state: support versioning. 18 00

when mismatch, it will merge the cap of old and new into new.

could have: custom migration

18 00 write component/process.

`object` and `{}` are different in ts. always prefer the latter.

19 30 web/lib/state: fix race cond.

flag finished immediately after syncing.

19 40 lib/map, web/lib/map: fix args.

in ts you can always receive less args on a callback fn.

20 40 tg to journal: fix `sort`. 21 10

js sort requires

- identity
- symmetry
- transitivity

25

17 00 pivot.

the process panel is almost done. basically, everything can be a textarea.

i may convert to bools, numbers, or objects.

it's incomplete though.

---

feel im stuck.

i dont have a purpose. i may need base64 convert. i may like to check color contrast. i may not.

i dont like to use cyberchef or random sites when i need them.

yet, i have sth to do. i have some ideas.

i would like to fix parceljs. i may put index html on source instead of source/web. dk if it would work.

i would like to read css tricks flex (grid) guide. that builds confidence.

17 10 fix parcel tracking by coping index html to a higher folder. 17 30

that works!!!!!

---

so simple. configless.

---

deprecate web/env.json.

17 30 write knowledge/agent comment.

it should ideally know how to write comments. though, i would rather let it write no comment by default.



