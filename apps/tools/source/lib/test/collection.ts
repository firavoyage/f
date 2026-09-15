// log(flatten({ a: 1 }))
// log(flatten({ a: 1, b: 2 }))
// log(flatten({ a: { b: 2 } }))
// log(flatten({ a: { b: [1, 2, 3] } }))
// log(flatten({ a: { b: [1, [2, 3, 4], 5, [6, 7]] } }))

log(flatten({a: 1}, () => true))

log(flatten({a: {b: {c: {name: 1}, d: {name: 1},}}}, () => true))

log(flatten({a: {b: {c: {name: 1}, d: {name: 1},}}}))

log(flatten({a: {b: {c: {name: 1}, d: {name: 1},}}}, (v) => has(v, 'name')))
