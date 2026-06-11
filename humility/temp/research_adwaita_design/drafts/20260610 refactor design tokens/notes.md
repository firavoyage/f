make it work first. make it robust or rigid later

---

i could make the converter stricter though.

- no unused modes (? i could have comfortable compact cozy ahead of time as future proof)
- no non existing modes
- no value as single child
- no raw value on sys
- no circular linking (? does it happen, if not no need to prevent, be meaningfully robust)
- all raw value on ref
- no comp name on ref (?)
- all ref end w number (?)
- link could only happen from sys to ref. not ref to ref or sys to sys. (? i might have a special button that default to sys bg primary)

it might help if i tell it explicitly to exclude legacy folder while searching

---

write test.ts i guess

cases.yaml

```yaml
- input: |
    foo
    bar
    asdf
  output: |
    foo
    bar
    asdf  
- input: |
    foo
    bar
    asdf
  output: |
    foo
    bar
    asdf  
```

upd: no.

it's too simple and overly rigid. it's rare to see cp like stdin stdout based programs.

---
