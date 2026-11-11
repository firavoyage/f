async function foo() {
}

function bar() {
}

let a = foo()
let b = bar()

log(is(a, Promise), is(b, Promise))
