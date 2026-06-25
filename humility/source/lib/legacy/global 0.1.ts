import * as std from 'lib/std';
import * as log from 'lib/log';
import * as result from 'lib/result';

type use = typeof use
declare global {
  var use: use
}

export function use(lib) {
  Object.assign(globalThis, lib)
}

// Prelude
use(result)
use(log)
use(std)

globalThis.use = use

// Init
const { app_name, xdg } = await import('lib/app_info')
const { init } = await import('lib/file')

init({ name: app_name, xdg })
