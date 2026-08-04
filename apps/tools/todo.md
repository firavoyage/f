todo

---

implement string distance based url correction

<!-- i guess you could do that easily. since asterisk is parsed as tools, you could use the most relevant tool. -->

---

research encryption methods. pick and include what matters.

---

complete utilitarian design

maybe it's already completed.

take a bottom up approach. know what you will need. centralize and abstract cleanly.

rather than over engineering a comprehensive and future proof one.

themes can be swapped in the future. for now, have neutral gray.

learn from vscode. no borders or shadows. no radius. no paddings. only have solid fluid colors for hierarchy.

---

adopt vscode icon pack

https://github.com/microsoft/vscode-codicons

https://microsoft.github.io/vscode-codicons/dist/codicon.html

---

design sidebar taxonomy and data structure. style sidebar normally.



---

design args ux

(e.g. use json parse, json5, or dirty json)



---

design recipe ix

i would have a tool to formalize yaml.

i may flatten the object and/or make spaces underscores.

i guess it's simple. i would open recipe, click or double click ~~or drag~~ certain tools, or type them (autocomplete via vscode editor). just two loc. <!-- fn may take stdin and args in recipe -->

---

create pattern scroll area

props: direction (default vertical), children

vscode style. overlay. fade out when outside. opacity grows: inside, hover, active.

---

create pattern popup.

- title bar
  - search (default input, button if has some dock items)
  - dock items?
  - close

bind esc ~~and ctrl q (best effort)~~.

---

create pattern quick panel.

- quick panel
  - search
  - scroll area
    - list

```yaml
- name: ...
  fn: ...
```

recently used. other commands.

---

create pattern shortcuts.

props: shortcuts

```yaml
general:
  - name: open menu 
    key: f10
    fn: ...
  - name: pref
    key: ctrl+,
tab view:
  - - name: new tab
      key: ctrl t
    - name: new window
      key: ctrl n
  - - name: prev tab
      key: ...
    - name: ...
      key: ...
```

---

create pattern settings. research adwaita and vscode.

- flag (checkbox/switch)
- select
- number input (text inc dec or slide)
- text input

research ptyxis and claude, make choices, like checkbox or switch.

---

create page main

logics when update: 

- readonly? no effect
- error? no effect, or set value of the other side to error msg, or show an "incomplete" or "invalid" icon hint
- update itself and the other side <!-- no use effect. no possible inf loop or state eq check (prone to convertor inconsistency). -->

---

create page app

- app
  - sidebar
    - sidebar title
      - search
      - app name
      - hamburger
    - list
      - category
      - item
      - item
      - item
  - main
    - main title
      - sidebar toggle
      - current tool name
      - (window actions)
    - convert
      - editor input
      - editor output

---

design ix for multi input/output.

e.g. mix yaml json toml into one, instead of 6 (3 pairs, two ways each)



---

design ix, e.g. two way convertion

decide whether, or how to resize layout.

there are many ways. the browser default is already reset, and shouldnt be an option.

patterns are

- scroll (resize, push others downward)
- resize, shrink others

it's obvious i feel.

and, take a look at vscode ctrl b. you only see the dragger when hovering there.

---

implement global persistent state.

sidebar collapse. settings. theme. sidebar taxonomy pref. tool view pref.

---

write a custom tool, tg to journal

---

implement tools

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
  - emoji search
  - bmi <!-- take acbox for example. also, have::global search: acbox height weight. -->

---

adapt maimai, show loss of each

sometimes it can be simple. actually, that might be the most use cases.

---

polish maimai, expand the results (base2, base5) if the number is small

low priority. it's just a derivation.

---

add server side features like ffmpeg converter

out of scope.

---

support pwa

out of scope.

it must be able to run locally. but it does not need pwa to do so.

you could install it. but it does not require pwa either.

and pwa itself is of inconsistent compatibility.

---

research bootstrap and expand component patterns

https://www.google.com/search?udm=50&atvm=2&mstk=AUtExfCOM-P8TYzsBz0Gg-H51sgbOX2y1eZQ4ux4X4qGPhwYYs63uKtsK5quXPvsxQ70CotRjSNINb-IY3wXKv8WA_OX7y9JCu1Sp6mHu0XCnwAZ5l8t7sHOuSyN4ybKOwZfKrjTMXNBZUjfT42ifQhvvaI2ETW4s6TMH06iQeXs2Mx6Qbxvhu12ktOejJr580w_b_G0OUFaKG1ugolcSEfts5hqplvmlWxxCnz_HdKvFTmW9ZD3QENyCPWxv3bRxuDQlXA_7AQcZtUjDA&mtid=Rx9marOhIYerur8Pwpfw-A8&csuir=1&aep=26&q=All+Bootstrap+Components&ved=0CAAQ2_wOahcKEwjYtcD32PCVAxUAAAAAHQAAAAAQGg

https://getbootstrap.com/2.3.2/getting-started.html#examples

https://getbootstrap.com/docs/3.4/components/

https://getbootstrap.com/docs/4.0/examples/

https://getbootstrap.com/docs/5.3/examples/

out of scope ~~could have~~: it's not wise to build for the future. better to think what you need instead.

---

state lib: think whether to avoid react internal apis.

i would make get polymorphic, as it can.

i might not test an useless "use state" to try catch. but i can try catch the exact use state i need.

---

support undo redo for all user actions, beyond text editing.

memorize state history of input output tools recipes.

out of scope.

---

support cli.

could have.

---

package as node lib.

could have.

---

support internationalization.

could have.

---

think how to handle args.

---

