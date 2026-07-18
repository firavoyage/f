<!-- it does not matter. it's basically a custom hook, where setstate dictates when it should update. and it's easy to write one. -->

# . thinking

```ts
fn store initial {
  let state = initial

  let subs = set

  fn get

  fn set {
    set state

    call all subs update
  }

  fn subscribe listener {
    subs.add listener
  }

  fn result {
    [_, update] = usestate

    subscribe update

    unmount then unsubscribe

    return [state, set]
  }
  
  result.get

  result.set

  return result
}

mystore = store 0

// you can define on mystore.increase if needed
fn increase {
  mystore.set v v+1
}

fn anything {
  // you can increase anywhere
  increase
}

fn component {
  dc [state, set] = mystore()
}
```

# . thinking 0.1

```ts
fn store initial {
  let state = initial

  let subs = set

  fn get

  fn set {
    set state

    call all subs update
  }

  fn subscribe listener {
    subs.add listener
  }

  fn result {
    [_, update] = usestate

    subscribe update

    unmount then unsubscribe

    return [state, set]
  }
  
  result.get

  result.set

  return result
}

mystore = store 0

// you can define on mystore.increase if needed
fn increase {
  mystore.set v v+1
}

fn anything {
  // you can increase anywhere
  increase
}

fn component {
  dc [state, set] = mystore()
}
```

# 

