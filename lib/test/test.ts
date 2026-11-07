import { parseArgs } from 'node:util'

const {
  values: { port },
} = parseArgs({
  options: { port: { type: 'string', short: 'p', default: '8080' } },
  strict: false,
})
