import { merge } from 'lib/std';

import * as std from 'lib/std';
import * as log from 'lib/log';
// import * as log_fs from 'lib/log_fs';
import * as result from 'lib/result';
import * as each from 'lib/each';
import * as handle from 'lib/handle';
import 'web/lib/react';
import * as react from 'react';
import * as react_use from 'react-use';
import * as p from 'web/lib/props';
import * as state from 'web/lib/state';
import * as union from 'lib/union';
import * as map from 'web/lib/map';

export function use(lib: object) {
  merge(globalThis, lib)
}

// Prelude for Web
use(result)
use(log)
// use(log_fs)
use(std)
use(each)
use(handle)
use(react)
use(react_use)
use(p)
use(state)
use(union)
use(map)

// use({ use })
// 
// type use = typeof use
// declare global {
//   var use: use
// }
