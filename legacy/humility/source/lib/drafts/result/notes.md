notes

# jun 2026

## 28

i

```ts
fn result<>
  ok return data
  err return err(some error)

// propagate
res = call fn
ise
  return res

// propagate void (define _ as global var in prelude)
_ = call async void fn
ise
  return _

// handle
res = call fn
ise 
  // do something
  return
```

pros: baseline result pattern, explicit, typed

cons: boilerplate when propagating (extremely common), err does fit in any (parse, stringify, send, etc.), hidden danger in void (fire and forget) <!-- unlike rust, which would warn fire and forget result -->

i would stay w it for now, but clearly pattern ii might be a good choice

i (variation)

```ts
fn result<>
  ok return {ok, data}
  err return {err, data}
```

more boilerplate. less hacky, but not any beneficial really.

ii

```ts
fn
  ok return
  err throw err

// propagate
res = call fn

// handle
res = handle(() => call fn)
ise
  // do something
  return
```

pros: less boilerplate when propagate, no hidden danger in fire and forget, no uncatched errors

cons: implicit, not typed, you dont know if a fn could err, more boilerplate to handle (and inconsistent)

iii

```ts
fn
  ok return
  err throw

// propagate
res = call fn

// handle
try 
  res = call fn
catch e
  // do something

  return
```

a variation of ii

pros: native js, no design pattern (or barebone/vanilla)

cons: try catch indentation hell (you should early return instead)

## 29

### i

```ts
fn result<>
  ok return data
  err return err(some error)

// propagate
res = call fn
ise
  return res

// propagate void (define _ as global var in prelude)
_ = call async void fn
ise
  return _

// handle
res = call fn
ise 
  // do something
  return
```

pros: baseline result pattern, explicit, typed

cons: boilerplate when propagating (extremely common), err does fit in any (parse, stringify, send, etc.), hidden danger in void (fire and forget), possibly breaking error rendering (proto chain) <!-- unlike rust, which would warn fire and forget result -->

i would stay w it for now, but clearly pattern ii might be a good choice

conclusion: you have to 

- know whatever low level api that might throw, and wrap inside err <!-- you might still see errors anyway wait, ive already missed. yaml parse and yaml stringify might throw! -->
- do not fire and forget throwable void fn

i guess i might refactor to ii?

### i (variation)

```ts
fn result<>
  ok return {ok, data}
  err return {err, data}
```

more boilerplate. less hacky, but not any beneficial really.

### ii

```ts
fn
  ok return
  err throw err

// propagate
res = call fn

// handle void
_ = handle(() => call fn)
ise
  // do something
  return

// handle
res = handle(() => call fn)
ise
  // do something
  return
```

pros: less boilerplate when propagate, no hidden danger in fire and forget, no uncatched errors

cons: implicit, not typed, you dont know if a fn could err, more boilerplate to handle (and inconsistent)

conclusion: ...

- type?
  - does returntype work well? test.
- throw err? 
  - what does new Error benefit (what if you use or not)
  - is err still needed (yes, but only in handle i guess, to wrap if needed)

### iii

```ts
fn
  ok return
  err throw

// propagate
res = call fn

// handle
try 
  res = call fn
catch e
  // do something

  return
```

a variation of ii

pros: native js, no design pattern (or barebone/vanilla)

cons: try catch indentation hell (you should early return instead)

### summary

whatever approach you choose, you could not know what low level apis or 3p libs are throwable wo sufficient research anyway.

<!-- i guess the err() wrapper is completely flawed. complete implicitness with simplicity is way better than partial explicitness. -->

### note

there is a significant change in `handle`.

p

```ts
fn alias = handle(fn)
call fn alias params

// iife
handle(fn)(params)
```

c

```ts
handle(fn)

handle(() => fn(params))

// you might also have options ~~or oop styled chains!~~
```

## 30

conclusion:

never return an error. throw it.

return only if you have handled it.

---

just write like this.

```ts
  _ = await handle(() => readFile(path, 'utf8'))
```

yes, _ is any. so you should specify the return type explicitly.

there is no way for ts to say "a type can change. just use the latest type".

wait! _ is for void fn.

i could write `const content`!.

```ts
  _ = await handle(() => mkdir(dirname(path), { recursive: true }))
  if (is_error(_)) {
    if (has(map, _.code)) {
      throw err({ type: map[_.code], message: _ })
    }

    throw _
  }
```

here is where _`` is supposed to be.


