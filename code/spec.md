# comment

```
# comment
```

space before/after `#` is optional.

# literals

```
42 3.14

'hello world' # no var expansion
"hello world {var}" # template literal (e.g. py f"")
# `hello world {var}` # template literal (e.g. js `` wo multiline)
'''
multi line string
'''
'''end
multi line string, align w closing ''' (can contain '''!)
'''end
"""
multi line string {var}
"""
"""my_terminator
multi line string {var}
"""my_terminator

true false

nil
```

you may use escape `\` in both single and double quoted string, but not multiline string. you may escape special characters like `\n`, or anything.

(list of escape characters)

terminator can be _anything_, from triple quote to line end.

# operators

- arithmetic `+`, `-`, `*`, `**`, `/`, `%`, `..` `..=` (range)
- assignment `=`, `{arithmetic}=`
- comparison `==`, `!=`, `<`, `>`, `<=`, `>=`
- logical `&` (and), `|` (or), `!` (not), `^` (xor)

add takes numbers. it will coerce.

use template literal for string concat.

# expression

- literal `42` `'hello world'` `true` `nil`
- array `[literal, literal]`
- object `{}`
- fn `{}` `(){}` `(x, y){ x + y }` `_ + 1` `_ > 1`
- operator fn `(>)` `(> 1)` `(1 >)`
- variable `name`
- call expression
  - fn `float('3.14')` `exp(exp, exp, exp)` `(control flow)`
  - operator `foo + bar` `exp op exp` `(exp op exp)` `(exp)`

in variable name, space and symbols <!-- i.e. any symbols on us keyboard --> (except `_` and `$`) are not allowed.

<!-- variable names can begin w number. it makes sense to alias `2x` to `2*x`, but it will not work if the factor is not a literal number (which is common, esp in best prac where you group constants). -->

(list of reserved words)

for braces, it's considered an object iff it's empty, or it contains colon, comma, or only variables (`{name} = {name: name}`). otherwise it's a fn.

(list of priority of builtin operators)

# control flow

<!-- control flow keywords are special. and they should be reserved, when i no longer allow juxtaposition. or are they macros on top of language interal features (inside immutable code pkg namespace)? -->

conditional

```
if () {} else if () {} else {}
```

paren are optional. if no `else` given, it will default to `else {nil}`.

```
if let
```

pattern matching

```
match n
  a b
  c d
  e f
```

loop

```
for name array {

}

for name 1..10 {

}

for name 1..=10 {

}

while cond {

}

repeat n {

}

loop {

}

break

continue
```

# variables

definition, shadowing, assignment

```
foo = 123
name = exp

let foo = exp
const foo = exp

let foo: type = exp
type foo = bar

int foo = 1
const int foo = 123
```

variables are lexical (block) scoped.

for `foo = exp`, it will assign a new value to `foo` iff it's in scope, otherwise it functions as `let foo = exp`.

# functions

```
foo {

}

foo (){

}

foo (params) {

}
```

```
foo params = exp
foo params = {

}
```

it's expression based. everything eval to a value (or nil).

the last exp will be returned. you may early `return`.

```
fibonacci 0 = 0
fibonacci 1 = 1
fibonacci n = fibonacci(n-1) + fibonacci(n-2)
```

fn are immutable. subsequent definition will polymorph (overload) w pattern matching. order matters.

to shadow, you may write, though it's highly discouraged

```
let foo = ...
```

multiple statements can be put inside a line when separated by semicolon.

you dont necessarily have to write semicolons. asi works this way:

- when linebreak, it will inject a semicolon unless there is...
  - trailing/leading binary op
  - leading dot (method chaining)
  - leading braces of statements
  - _return/throw w something after it_ (you know what you are doing, you will never write unreachable code)
  - ~~unclosed paren/brackets~~ (irrelevant, i only care fn blocks, i.e. braces)

<!-- leading means on the next line -->

for paren/brackets, it will append commas whether or not it linebreaks. the boundary of expressions is always clear.

# types

```
type foo {
  a
}

type foo {
  a: string
}

type foo {
  a: string
  b
}

type foo = {
  
}
```

```
type prime = (n){
  n -> bool
}
```

# modules

```
use foo

import foo from foo

import foo, bar from foo
```


