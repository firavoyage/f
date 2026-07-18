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

<!-- mount already means "first mount" i think. -->

```ts
fn store initial {
  // memory are generally small. no auto gc. no surprises. opt in optimization.
  let state = initial

  let subs = set

  fn set {
    set state

    call all subs update
  }

  fn subscribe listener {
    subs.add listener
  }

  fn result {
    [_, update] = usestate

    // update is stable across rerenders, and set handles duplicates well. just to be explicit
    mount subscribe update

    unmount unsubscribe

    // no closure issue, it's always the latest state. and states are inherently snapshots in the react mindset
    // for whether it's good, that's another question
    return [state, set]
  }

  // no need to take derived/computed values specially, you can just call them and calculate
  // you can absolutely have wrappers like fn myvalue { one.get() + second.get() }
  result.get {
    [_, update] = usestate

    mount subscribe update

    unmount unsubscribe

    return state
  }

  // no idea if you would need the result outside components, just in case
  // give the shortest name (get) for components
  result.get_raw

  // set does not have to be component related
  // update whatever. no value comparison. no immutability required. diffing is cheap. do not care whether it's a state or a store.
  result.set

  // e.g. sub latest state into localstorage on change
  result.sub

  return result
}

mystore = store 0

// you can define on mystore.increase if you like
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
