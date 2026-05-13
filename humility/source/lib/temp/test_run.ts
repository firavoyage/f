import { run } from 'lib/run';

console.log(await run({ command: 'echo "The real async engine is working!" && bun -v && ls' }))

console.log(await run({ command: 'nonexisting' }))

console.log(await run({ command: 'echo "This is an intentional stderr message" >&2' }))
