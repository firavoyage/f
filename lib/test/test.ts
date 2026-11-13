const foo = {
  a: 1,
  1: 2,
}

const { a, b = a } = foo

log(a, b)
