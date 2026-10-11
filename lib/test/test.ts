// log(new Date().toISOString())

const foo = {
  a: 1,
  b: undefined,
  c: nil,
}

const { a = 2, b = 2, c = 2, d =2 } = foo

log({a, b, c, d})
