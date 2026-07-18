<!-- it does not matter. it's basically a custom hook, where setstate dictates when it should update. and it's easy to write one. -->

# . thinking

```ts
fn store {
  let state

  let subs = set

  // fn get
  fn set {
    set state

    call all subs update
  }

  fn subscribe listener {
    subs.add listener
  }

  return fn {
    [_, update] = usestate

    subscribe update

    return [state, set]
  }
}


```

# 