// prelude

import * as std from 'lib/std';

function use(lib) {
  Object.assign(globalThis, lib)
}

use(std)
