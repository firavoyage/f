/**
 * use
 */

declare global {
  function use(lib): void;
}

export function use(lib) {
  Object.assign(globalThis, lib)
}

/**
 * prelude
 */

import * as result from 'lib/result';
import * as log from 'lib/log';
import * as std from 'lib/std';

use(result)
use(log)
use(std)

globalThis.use = use

/**
 * init
 */

const { app_name, xdg } = await import('lib/app_info')
const { init } = await import('lib/file')

init({ name: app_name, xdg })
