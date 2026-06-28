notes

jun 2026

28

result

i

```ts
fn result<>
  ok return data
  err return err(some error)

// propagate
res = call fn
ise
  return res

// handle
res = call fn
ise 
  // do something
  return
```

pros: baseline result pattern 

cons:

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

iii

```ts
fn
  ok return
  err throw


```


