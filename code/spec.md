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

- arithmetic `+`, `-`, `*`, `**`, `/`, `%`
- assignment `=`, `{arithmetic}=`
- comparison `==`, `!=`, `<`, `>`, `<=`, `>=`
- logical `&` (and), `|` (or), `!` (not), `^` (xor)

add takes numbers. it will coerce.

use template literal for string concat.

# expression

- literal `42` `'hello world'` `true` `nil`
- variable `name`
- call expression
  - fn `float('3.14')` `exp(exp, exp, exp)` `(control flow)`
  - operator `foo + bar` `exp op exp`

in variable name, space and symbols <!-- i.e. any symbols on us keyboard --> (except `_` and `$`) are not allowed.

<!-- variable names can begin w number. it makes sense to alias `2x` to `2*x`, but it will not work if the factor is not a literal number (which is common, esp in best prac where you group constants). -->

(list of reserved words)

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

# variables

definition, shadowing, assignment

```
foo = 123
name = exp
```

# functions

```
foo () {

}
```

it's expression based. everything eval to a value (or nil).

the last exp will be returned. you may early `return`.

```

```
