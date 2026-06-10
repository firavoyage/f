align

- convert to standard css units on knowledge

rename 

- prefer number on ref. e.g. `ref.spacing.1`, `sys.spacing.`

simplify

- size as `sm, lg, ...` not `small, large`
- `border-radius` to `radius`

organize

- primary bg to bg primary

make it dry

c

```
spacing:
  space-1: "0.1875rem"
  space-2: "0.25rem"
  space-3: "0.375rem"
  space-4: "0.5625rem"
  space-5: "0.75rem"
  space-6: "1.125rem"
  space-8: "1.5rem"
  space-10: "2.25rem"
  space-12: "3rem"
```

e

```
spacing:
  1: "0.1875rem"
  2: "0.25rem"
  3: "0.375rem"
  4: "0.5625rem"
  5: "0.75rem"
  6: "1.125rem"
  8: "1.5rem"
  10: "2.25rem"
  12: "3rem"
```

c

```
font-size
font-weight
font-familiy
```

e

```
font:
  size
  weight
  familiy
```

never write "value" if there are no variants

c

```
button:
  value: "{ref.foo bar ...}"
```

e

```
button: "{ref.foo bar ...}"
```

make consistent

- `btn` to `button`

the list is non exhaustive, i will further specify if it does not feel right

whenever you have choices, follow simplicity and defacto standard
