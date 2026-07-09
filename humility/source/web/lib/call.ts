import { port } from 'web/port.json';

/**
 * rather call('method', payload) than currying like method(payload)
 * 
 * you should know you are calling an api.
 * 
 * a network request is quite different and much more complex to handle robustly.
 * 
 * no need to have options. you can extend easily later if needed.
 */
export async function call(method: string, payload: object) {
  const base = new URL(window.location.href)
  const endpoint = `${base.protocol}//${base.hostname}:${port}/api/${method}`

  log(endpoint)

  return endpoint
}
