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
- ~~block/inline, can be nested `#= hello =#`~~

i may not use block comment much though.

<!-- i kind of like the haskell syntax. (-- foo, {- bar -}) -->

---

type system. fn polymorphism. macros. std lib, use, import. pattern matching. error handling. asi.

---

i may begin the impl of the ast transpiler.

i can easily extend the syntax, introducing more types to match, and then convert.

23

you can write file. it's awaited.

you can fire write file. it's fired, you may parallel a few and handle when you like.

most time you will await, right?

coloring is generated. it can work. you dont have to care parents. if you reference async fn, i will color it. and all sync fn are simply there.

---

yeah, await by default!

---

syntax doesnt matter, error is logically just one of the return values

no "object colored as err" tricks. (as you can not return both _any_ value and err, and differ them)

under the hood i can make it a tuple return cleanly.

you can explicitly panic to narrow the type. 

it favors efficiency over safety so it doesnt require ? to propagate. and yeah, it will not just continue, ~~it will immediately return _iff you have no handling logic after_~~ <!-- or it may not. well it doesnt matter. you may declare handling logic as you like. -->.

<!-- i.e. it will immediately return on read, so i can optimize (you will not normally have unused vars, i guess... it's a read even if you pass it down wo "really" evaluating/calling). i do not have to. i can just make it runtime. -->

reading a possible error results in a warning, which would panic in runtime if it really errs.

you always handle real, possible, errors. you never wrap arbitrary block of code in try.

no syntax for it (e.g. try catch, rescue). there is a language level keyword for err.

you may match like

```code
match value
  code::err # std
  # or code::err(msg), or code::err(e)
  target # no "Ok() wrapper"
  type(value)
```

i do need a lang level keyword for throw. no need to be strictly keyword aw. 

maybe code::err or code::throw.

err is simpler. both the fn and the type (for matching) can be called err. nothing wrong, conceptually the same.

(and yeah, you should use nil over NaN, NaN doesnt have props of a regular number you would expect, dont be confused by js)

24

space is a sacred operator.

how is it used?

in js it's generally left unused.

as fn params

```
convert_celsius_to_fahrenheit celsius = (celsius * 9 / 5) + 32;
```

in array

```
foo = [1 2 3]
```

in obj/type <!-- i lean toward linebreak here, but space can be accepted -->

```
type foo = {
  a: b
  c: d
}
type foo = {
  a: b c: d
}

match foo {
  1 a
  2 b
  3 c
  4 d
}
```

in call expression

```
call exp
```

in type?

```
type foo = a b c
type foo = a | b | c
```

in paren (tuple/union)

```
type foo = union(
  {
    type: 'select'
    options: string[]
  }
  {
    type: 'checkbox'
    value: boolean
  }
  {
    type: button
    click: fn
  }
)
```

---

type system and pattern matching are deeply intertwined, absolutely.

---

i may write a syntax spec today.

not necessarily in ebnf. it can be flexible and human oriented. it has to be deterministic and unambiguous. it doesnt have to be parsable and computable.

---

there is no `==`. i could fmt it to `=`.

in block it will work as assignment.

in exp it will work as eq.

you may use if let.

there is no scenario to cleanly mutate an outside var while comparing it.


