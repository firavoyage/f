import { merge } from 'lib/std';

export function use(lib: object) {
  merge(globalThis, lib)
}

// Prelude for Web
import * as result from 'lib/result';
use(result)

import * as log from 'lib/log';
use(log)

import * as std from 'lib/std';
use(std)

import * as each from 'lib/each';
use(each)

import * as handle from 'lib/handle';
use(handle)

import * as union from 'lib/union';
import * as map from 'lib/map';
import * as collection from 'lib/collection';
use(union)
use(map)
use(collection)

import 'web/lib/react';
import * as react from 'react';
import * as react_use from 'react-use';
import * as p from 'web/lib/props';
import * as state from 'web/lib/state';
use(react)
use(react_use)
use(p)
use(state)

// use({ use })
// 
// type use = typeof use
// declare global {
//   var use: use
// }
