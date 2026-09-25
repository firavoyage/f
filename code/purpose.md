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

25

rather not allow shell (or haskell) like call expression.

```
foo 1 2 3
```

is it call foo w args 1 2 3, or an array of foo (fn), 1, 2, 3 (numbers).

esp when nested. i have to wrap in paren anyway.

```
{
  foo
}
```

does it mean an object of foo: foo, or a fn called foo?

(it would not help if i decide to make fn `(){}`, which can be interpretted as tuple and object)

lexical.

now it's much easier to distinguish.

- if it's empty, it's an empty object (it makes to nosense to call an empty fn, and thus i can safely nullify all non fn call expression in runtime)
- if it contains : <!-- only the first scope will be taken into account -->, it must be an object
- if it contains assignment statement or call expression, it must be a fn.

this approach also aligns w modern pl design.

```
 ~ % py
Python 3.12.3 (main, Mar 23 2026, 19:04:32) [GCC 13.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> quite
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'quite' is not defined. Did you mean: 'quit'?
>>> quitttt
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'quitttt' is not defined
>>> print
<built-in function print>
>>> print 1
  File "<stdin>", line 1
    print 1
    ^^^^^^^
SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?
>>> pr = print
>>> pr 1
  File "<stdin>", line 1
    pr 1
       ^
SyntaxError: invalid syntax
```

interesting

i could make an argument that why not make `print 1` directly inside a fn function as `print(1)`. just to reduce mental overhead. you do not learn two syntaxes.

e.g. `{print, foo}` ("if it contains , it's an object") instead of `{print foo}` only if it's ambiguous.

only when you use consistent syntax can you avoid worrying whether to escape/wrap.

tradeoff is, you can no longer write "naturally" downward.

like, print, foo, enter.

but it's really that you could not. you have to move your cursor inside, and then outside a string. there are block end symbols. indentation is not the solution. you have to occassionally move up, or find/replace, or navigate anywhere.

just print, (), foo, shift enter.

what about shell and haskell?

shell cli syntax is even more awkward, w many legacy quirks (e.g. you dont know if it's a flag or a string). and haskell make severe anti pragmatism constraints for purity and mathematics.

---

for fn definition, you may write like

```
convert_celsius_to_fahrenheit celsius = (celsius * 9 / 5) + 32;
```

or

```
convert_celsius_to_fahrenheit(celsius) = (celsius * 9 / 5) + 32;
```

or

```
convert_celsius_to_fahrenheit(celsius){
  (celsius * 9 / 5) + 32
  # return (celsius * 9 / 5) + 32
}
```

---

how do i decide it's fn definition? no ambiguity.

~~**you can only define named fn on first scope of any fn.**~~

```
main {
  celsius = 25
  fahrenheit = convert_celsius_to_fahrenheit celsius

  print `{celsius}°C is equal to ${fahrenheit}°F`
}
main(){
  celsius = 25
  fahrenheit = convert_celsius_to_fahrenheit celsius

  print `{celsius}°C is equal to ${fahrenheit}°F`
}
```

shell like call exp is already disabled. and ik you are defining main.

paren are optional wo params.

i can convert indentation to block later, if it's proven that it will not cause problems.

```
print(main(x, y) {...})
```

~~if it's not inside a fn block, exp like this are always considered a fn call and an object/fn.~~

wait fine, what if i use comma instead.

just use comma.

```
print(main(x), (x){x+1}, _ + 1, (x, y){x+y}, {...})
```

**space is overloaded.** yeah it's the simpest possible key. it's easy to type. it could not carry too much responsibility.

i mean i could. but you should not write `fahrenheit = convert_celsius_to_fahrenheit celsius` today, and `fahrenheit = to_fixed(convert_celsius_to_fahrenheit(celsius), 1)` tomorrow. yeah, you can decide to whether write `to_fixed convert_celsius_to_fahrenheit(celsius) 1` or `to_fixed(convert_celsius_to_fahrenheit celsius, 1)`, which makes it even worse.

the superpower, i would make it reserved for obj. it's quite common and frustrating when i wanna add a new field to an object, and routinely run into missing comma issues, esp when "trailling comma" is omitted.

it's also clearer to read when params are separated.


