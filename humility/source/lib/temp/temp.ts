const foo = Object.defineProperty({ [Symbol('hello')]: 123, foo: 'bar' }
  , Symbol('hi'), { value: true, enumerable: false })

console.log(foo)

log(foo)

