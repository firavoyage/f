import * as std from 'lib/std';
import * as log from 'lib/log';
import * as log_fs from 'lib/log_fs';
import * as result from 'lib/result';
import * as each from 'lib/each';
import * as handle from 'lib/handle';
import { merge } from 'lib/std';
import * as union from 'lib/union';
import * as map from 'lib/map';

export function use(lib: object) {
  merge(globalThis, lib)
}

// Prelude
use(result)
use(log)
use(log_fs)
use(std)
use(each)
use(handle)
use(union)
use(map)

// use({ use })
// 
// type use = typeof use
// declare global {
//   var use: use
// }
