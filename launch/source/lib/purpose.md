purpose

oct 2026

01

i may create a math lib for js.

why not. why not now.

03

on web/map, seems i should silence warning (react array children wo key) instead. i dont have to.

<!-- i may simply delete the web/map file, redirect web globals directly to map, check and silence that specific error (warning). -->

on std: is, i may see bigint as (subset of) number. no idea if matters. <!-- or i may call it numeric. -->

---

well, seems it would be merely polymorphism on min and max.

std math fn doesnt feel flawed.

---

std::is: support iterable and numeric.

---

let's introduce some fp methods to std.

some of them are already available via array prototype, but i dont like that.

04

yeah, file. shell.

work as if you ctrl alt t.

i build what i need.

components of a design system. maybe like adw. just to specify.

---

look at the py builtins. and ruby builtins maybe.

how would i convert types, yeah maybe ive eliminated nan (ok i will see nil as nan).

like parseint? array from? string from? new constructor? here inconsistent.

and i do need to, in case js sees + as string concat via some magic rules. and i could not override op <!-- i mean infix, not prefix --> cleanly.

---

i may not need the fp methods right now.

---

file. shell.

"launch"

maybe i would fix what's flawed first. they are existing deps. i need them.

---

yeah but it itself will rely on fs and terminal anyway if i want to do it cleanly (shell is quirky).

feels i would learn from py and rb, not go/rust (bounded by low level stuff no matter how you abstract or sweeten).

let's design a bit.

- launch by systemd (config normally, like after network maybe well anyway)
- read a config file, parse yaml
- for each app
  - create a normal terminal, as if ctrl alt t
  - generate free port if needed, modify caddyfile then
  - run command as long running daemon 
  - constantly collect logs, like stdout/stderr or exit
  - save log for each, on fs maybe. just separate and incremental. avoid yaml overhead.
- modify caddyfile, restart caddy

i may learn how to use caddy. (or caddyfile syntax is all i need)

and i would have a separate server. well doesnt matter. it's app specific.

it will route api to api, and anything else to the spa build.

---

file op can be sync. dx matters more than perf. <!-- and yeah, async should be preferrably handled automatically under the hood -->

about shell, it can be sync to run a command and get its result. it's on backend right? and on frontend, if it takes time and you wanna display some placeholder, you may "use async". network requests are inherently async. and you could not run shell commands on web.

for long running daemon, it doesnt matter sync/async. it's basically traditional event listeners.

05

i may list the methods and leverage llm.

---

rest params `...` are common. i may have a util to polymorph it, i.e. `fn(...args)` `fn(arr)` when each individual arg must not be iterable (or at least there's no ambiguity when only one arg is passed). <!-- btw, math lib is different as it accepts an optional `fn` alongside -->

would `list` already solve this? how does array.from work?

btw, the naming of `list` might conflict, but that's not the case (classic lisp1/lisp2 divide when fn and var are the same word in verb/noun). i would generally prefer more concise std lib fn.

it makes no sense to have map fn arg, if map itself could already be applied to any iterables in stl.

> JavaScript had historical baggage.
>
> Python was designed for readability from day one.

---

i will adopt pathname rather than fileutils, as recommended.

---

thanks to js, iterators and arrays are of polymorphism (constrast to ruby entries/each_entry)

06

maybe i would name it as subprocess, not shell. doesnt matter much. just feels it's an easier choice.

07

nodejs subprocess spawn has 20 overloads.

---

ah... yeah, you should trim the stdout. saves my day.

---

most time they leave a trailing newline, but rarely do they prefix, or leave trailing spaces.

yeah, it would "ignore spaces after lineend and newlines after eof", but that's not the case.

maybe a blank trim would be overkill. or does it matter.

guess i would not have an option for this. it's a pragmatic abstraction and neither do i wanna leave nonsensical (trailing newline is compromise to terminal printing for humans, not scripts) content either. if it leaks let it leak.

---

in practice you would almost never see string as iterable.

primitive could not be iterable.


