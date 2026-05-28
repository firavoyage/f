## 0.0

- style:
  - functional programming
  - modular and cohesive
  - object params by default, positional params if there is only one param (`factorial(n)`) or params are interchangeable (`add(a,b)`), mixed if there is only one param and optional flags (`fetch(url, options)`)
  - always async, only sync for pure and quick methods
  - always function statement, only arrow function for props
  - always type, never interface
  - no `undefined` or `null`
  - no `typeof` or `instanceof`

## 0.1

- style:
  - functional programming
  - modular and cohesive
  - always async, only sync for pure and quick methods
  - always function statement, only arrow function for props
  - object params for more than one uninterchangeable params, positional params otherwise, mixed for one param and optional flags
  - always type, never interface
  - avoid typescriptism, only define types on function params and return, never alias literal types like `type message = string`
  - use `// @ts-expect-error` if needed
