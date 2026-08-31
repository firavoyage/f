# plan

- complete the rest of atom components
- map args/settings to input (in general) components
- create pattern/page components and make every button clickable, e.g. hamburger menu, command palette
- create basic styling of components
- adopt icon lib <!-- s, inefficient wo -->

# todo: complete utilitarian component system. <!-- s -->

complete utilitarian component system.

ref: gnome nautilus, adwaita demo

---

create setting field components

- checkbox
- switch
- select
- ratio
- multi ratio
- text input
- number input
- slider (number range)

baseui switch couldnt be dragged by default?!

well to my surprise it's the same on mui. maybe iphone os is just a bit more obsessed.

---

create command palette component

---

create keyboard shortcuts component

---

create settings component

---

create scroll area

props: direction (default vertical), children

vscode style. overlay. fade out when outside. opacity grows: inside, hover, active.

c

---

create popup

- title bar
  - search (default input, button if has some dock items)
  - dock items?
  - close

bind esc ~~and ctrl q (best effort)~~

c

---

complete utilitarian design

maybe it's already completed.

take a bottom up approach. know what you will need. centralize and abstract cleanly.

rather than over engineering a comprehensive and future proof one.

themes can be swapped in the future. for now, have neutral gray.

learn from vscode. no borders or shadows. no radius. no paddings. only have solid fluid colors for hierarchy.

---

research bootstrap and expand component patterns

https://www.google.com/search?udm=50&atvm=2&mstk=AUtExfCOM-P8TYzsBz0Gg-H51sgbOX2y1eZQ4ux4X4qGPhwYYs63uKtsK5quXPvsxQ70CotRjSNINb-IY3wXKv8WA_OX7y9JCu1Sp6mHu0XCnwAZ5l8t7sHOuSyN4ybKOwZfKrjTMXNBZUjfT42ifQhvvaI2ETW4s6TMH06iQeXs2Mx6Qbxvhu12ktOejJr580w_b_G0OUFaKG1ugolcSEfts5hqplvmlWxxCnz_HdKvFTmW9ZD3QENyCPWxv3bRxuDQlXA_7AQcZtUjDA&mtid=Rx9marOhIYerur8Pwpfw-A8&csuir=1&aep=26&q=All+Bootstrap+Components&ved=0CAAQ2_wOahcKEwjYtcD32PCVAxUAAAAAHQAAAAAQGg

https://getbootstrap.com/2.3.2/getting-started.html#examples

https://getbootstrap.com/docs/3.4/components/

https://getbootstrap.com/docs/4.0/examples/

https://getbootstrap.com/docs/5.3/examples/

w ~~c~~ <!-- it's not wise to build for the future. better to think what you need instead. -->

# todo: adopt icon lib. <!-- s -->

adopt icon lib.

---

adopt vscode icon pack

https://github.com/microsoft/vscode-codicons

https://microsoft.github.io/vscode-codicons/dist/codicon.html

# todo: complete planned tools. <!-- c -->

complete planned tools.

---

research encryption methods. pick and include what matters.

---

support code minify and fmt

i guess there would be a tool for minify or prettier.

i mean, for tools itself, it would use a yaml dsl. yeah that's dsl, as i need converter to global state. i would apply prettier, so it could copy and paste easily, effortless, no ctrl shift i needed.

and it might be a custom tool. i would apply minifier if they paste, or import a new tool here.

---

implement tools

ref: ia

- data format
  - url decode <!-- e.g. %3d becomes = -->
- language
  - language decode <!-- yes, it's vscode builtin, but why not -->
  - leet speak
- date/time
  - timestamp, utc, timezone, (any template string)
- encryption, public key, hash
  - (popular methods)
  - base64
- misc
  - regex (the args are defined separately from inputs, on the recipe)
  - grep
  - glob
  - lorem ipsum
  - emoji search
  - bmi <!-- take acbox for example. also, have::global search: acbox height weight. -->

---

adapt maimai, show loss of each

sometimes it can be simple. actually, that might be the most use cases.

---

polish maimai, expand the results (base2, base5) if the number is small

low priority. it's just a derivation.

# todo: support render input/output <!-- s -->

support render input/output

# todo: support custom imported tools and fav tools <!-- c -->

support custom imported tools and fav tools

i would have fav tools. custom tools? would they be imported on web?

# backlog

support copy input/output

---

implement string distance based url correction

<!-- i guess you could do that easily. since asterisk is parsed as tools, you could use the most relevant tool. -->

c

---

support wasm/server side features, e.g. ffmpeg converter, pdf minimizer

w

it's primarily text based, w some rendering tools.

---

support pwa

w

it must be able to run locally. but it does not need pwa to do so.

you could install it. but it does not require pwa either.

and pwa itself is of inconsistent compatibility.

<!-- yeah. if you have service worker, they can access wo internet. and it doesnt have to be pwa, a superset of sw. -->

---

support undo redo for all user actions, beyond text editing.

memorize state history of input output tools recipes.

w

---

support cli.

w

<!-- you may call ts fn via bun. it's easy. while it's sub optimal to even make cli a primary way on ux. yk, you couldnt really select a tool from a list (you could have tui, that's even more prone and likely incompatible), edit complex args, paste input, print long output... and if you really have them structured... just call the ts module! -->

---

package as node lib.

w

---

support internationalization.

c

---

secure sidebar list

i may check whether tools exist

c

<!-- it might be irrelevant at the end of the day when it's complete. -->
