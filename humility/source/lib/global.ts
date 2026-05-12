// prelude

import * as result from 'lib/result';

export function use(lib) {
  Object.assign(globalThis, lib)
}

use(result)


