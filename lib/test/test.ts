// import { parseArgs } from 'node:util'

// const {
//   values: { port },
// } = parseArgs({
//   options: { port: { type: 'string', short: 'p', default: '8080' } },
//   strict: false,
// })

import { parse as deserialize, stringify as serialize } from 'yaml'

log('``\n' + serialize({foo: 'bar', asdf: 'asdf'}) + '``\n')
