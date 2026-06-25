import * as std from 'lib/std';
import * as log from 'lib/log';
import * as result from 'lib/result';

type use = typeof use
declare global {
  var use: use
}

export function use(lib) {
  Object.assign(globalThis, lib)
}

// Prelude
use(result)
use(log)
use(std)

globalThis.use = use
