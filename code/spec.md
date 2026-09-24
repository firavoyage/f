# comment

```
# comment
```

space before/after `#` is optional.

# literals

```
42 3.14
'hello world' # no var expansion
"hello world {var}" # template literal
'''
multi line string
'''
'''EOF
multi line string, align w closing ''' (can contain '''!)
'''EOF
"""
multi line string {var}
"""
"""hi
multi line string {var}
"""hi
true false
nil
```

you may use escape `\` in both single and double quoted string. you may escape special characters like `\n`, or anything.

# operators

- arithmetic: `+`, `-`, `*`, `**`, `/`, `%`
- assignment: `=`, `{arithmetic}=`
- comparison: `==`, `!=`, `<`, `>`, `<=`, `>=`
- logical: `&` (and), `|` (or), `!` (not), `^` (xor)

# variables

```
foo = 123
```

space and symbols <!-- i.e. any symbols on us keyboard --> (except `_` and `$`) are not allowed.


