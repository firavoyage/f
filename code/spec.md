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
'''EOF
multi line string, align w closing ''' (can contain '''!)
'''EOF
"""
multi line string {var}
"""
"""end
multi line string {var}
"""end

true false

nil
```

you may use escape `\` in both single and double quoted string. you may escape special characters like `\n`, or anything.

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

# variables

```
foo = 123
name = exp
```

in var name, space and symbols <!-- i.e. any symbols on us keyboard --> (except `_` and `$`) are not allowed.

# functions

```
foo () {

}
```

it's expression based. everything eval to a value (or nil).

the last exp will be returned. you may early `return`.


