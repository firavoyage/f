purpose

sep 2026

16

research compiler engineering

17

research language syntax, limitations, and pl history

18

plan.

ik types can be inferred bidirectional. ik typecheck is for both correctness and autocomplete. ik you may run code in compile time static analysis, and you may have dedicated typing logics. ik things should match your intent at best effort.

they can be innovational. they do not matter now.

yk how to build a parser and transpiler. it's complex. it's clear, step by step.

yk what's ideal. there are not so many choices. and you will figure them out in the future.

better to design its syntax first. you may have thought of starting from ast, like lisp or sth, and map out everything before and after. it's not really clear. you dont know what you are doing. at the end of the day you would always come to a finite set of core meta programming commands.

it might take engineering effort. it can be intricate thoughts. if it does not eventually change things, it's irrelevant now.

better to make decisions. how variables will be scoped. how it can be typed cleanly. what the default will be, for which the simplest code is reserved. and how things can be polymorphed or overridden.

21

if i wanna do sth, i can ask directly.

at its heart there are comments. i lean toward `#` for single line comment. i have to confirm.

there are variable and fn definitions, referencing, updating <!-- setting -->, and calling.

math expressions like `let x = 1 y = 2 in x * y` or `x * y where x = 1 y = 2` can just expand, since everything is expr based here.

type matters. everything can be a list. not everything is a list. i may have utils, and build abstrations on top. `__init__` is highly boilerplate, i may have some magic for most common use cases.

22

ergonomics and expressiveness matter.

if curly braces are the default,

tab should move to the next meaningful block. you dont have to move your cursor out of the closing one.

if indentation is the defaut,

tab should do the indent.

and if you type enter three times in a row, you will exit the current block, as you would not generally leave two consecutive blank lines.

that's not ideal feels. maybe you dont like to leave one blank line after each block either, to make it compact.

so maybe backspace will be used anyway, for consistency, which drastically lowers mental overhead.

if both are accepted, the fmt would validate your choice by default. but things would adapt to curly braces.

the catch? you may have to move your cursor anyway. you will. you rarely write code linearly irl, right? and imagine nested fn call, which is quite common, you could not always have juxtaposition like haskell (though i will accept shell like syntax, as you dont necessarily wrap the outermost one), and even if you can define (awkward) constraints to solve it deterministically, it would not be visually clear.

if indentation couldnt be consistently elegant, it would not be as good as it looks, and basically it loses all its tradeoffs.

yeah, interesting, tab moves the cursor. 

> Extraordinary claims require extraordinary evidence

isnt obvious? tab makes no sense. you should use fmt. at least it shouldnt indent (?). at least it shouldnt indent when there is already some code.

i would take a hybrid approach.

for parsing, both is accepted. code will be pasted on the same indentation level.

tabs are two spaces. they will be considered one in ide when you move your cursor.

tabs work for navigation unless you are on a blank line, or you have a selection or multi cursor.

---

on asi

- no asi
  - trailing/leading binary op
  - leading dot (method chaining)
  - leading braces, iff it's fn, not obj or dc
  - _return/throw w something after it_ (you know what you are doing, you will never write unreachable code)
  - ~~unclosed paren/brackets~~ (irrelevant, i only care fn blocks, i.e. braces)
- do asi
  - _otherwise_ (incl. leading paren/brakets)

eager.

---

on commenting

- single line `#`
- block/inline, can be nested `#= hello =#`

i may not use block comment much though.


