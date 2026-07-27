/*
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
    // no idea if you would need the result outside components, just in case
    if not inside a react component return get raw

    [_, update] = usestate

    mount subscribe update

    unmount unsubscribe

    return state
  }

  // just be private, let get be flexible
  // conceptual cleaniness > best prac. more magic, less mental overhead.
  fn get_raw
  // result.get_raw

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
*/