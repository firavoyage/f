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



