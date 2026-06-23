import { run } from 'lib/run';
import { home } from 'lib/file';

console.log(await run('ls', {cwd: home()}))

console.log(await run('echo "The real async engine is working!" && bun -v && ls'))

console.log(await run('nonexisting'))

console.log(await run('echo "This is an intentional stderr message" >&2'))
