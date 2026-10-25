import * as std from 'lib/std';
import * as log from 'lib/log';
// import * as log_fs from 'lib/log_fs';
import * as result from 'lib/result';
import * as each from 'lib/each';
import * as handle from 'lib/handle';
import { merge } from 'lib/std';

type use = typeof use
declare global {
  var use: use
}

export function use(lib: object) {
  merge(globalThis, lib)
}

use({ use })

// Prelude for Web
use(result)
use(log)
// use(log_fs)
use(std)
use(each)
use(handle)
