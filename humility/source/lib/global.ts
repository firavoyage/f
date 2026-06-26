import * as std from 'lib/std';
import * as log from 'lib/log';
import * as result from 'lib/result';
import * as each from 'lib/each';

type use = typeof use
declare global {
  var use: use
}

export function use(lib: object) {
  Object.assign(globalThis, lib)
}

use({ use })

// Prelude
use(result)
use(log)
use(std)
use(each)
