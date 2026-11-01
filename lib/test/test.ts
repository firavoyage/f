function identity(x) {
  return (x) => x * 2
}

function foo(bar) {
  return bar + 1
}

foo = identity(foo)

export { foo }
