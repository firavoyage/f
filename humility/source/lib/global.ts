/**
 * prelude
 */

import * as result from 'lib/result';

declare global {
  function use(lib: any): void;
}

export function use(lib) {
  Object.assign(globalThis, lib)
}

use(result)

globalThis.use = use

/**
 * init
 */

const { app_name, xdg } = await import('lib/app_info')
const { init } = await import('lib/file')

init({ name: app_name, xdg })
