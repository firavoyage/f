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
import * as map from 'lib/web/map';
import * as collection from 'lib/collection';
use(union)
use(map)
use(collection)

import * as react from 'react';
import * as react_use from 'react-use';
import * as react_hooks from 'lib/web/react'
import * as p from 'lib/web/props';
import * as state from 'lib/web/state';
use(react)
use(react_use)
use(react_hooks)
use(p)
use(state)

// use({ use })
// 
// type use = typeof use
// declare global {
//   var use: use
// }
