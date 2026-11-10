import { parse_options } from 'lib/cli'

log(
  parse_options({
    port: {
      type: 'number',
      short: 'p',
      default: 8192,
    },
    foo: {
      type: 'boolean',
      short: 'f',
      default: false,
    },
  }),
)
