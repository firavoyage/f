import { run, spawn } from 'lib/subprocess'

log(handle(() => run('cd --help')))
log(run('cd --help', { userspace: true }))
