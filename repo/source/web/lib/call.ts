import { port } from 'web/port.json';

/**
 * rather call('method', payload) than currying like method(payload)
 * 
 * you should know you are calling an api.
 * 
 * a network request is quite different and much more complex to handle robustly.
 * 
 * no need to have options. you can extend easily later if needed.
 * 
 * i guess i can convert error symbol to hash back and forth while transferring. 
 * but i might not have to.
 */
export async function call(method: string, payload: object) {
  const base = new URL(window.location.href)
  const endpoint = `${base.protocol}//${base.hostname}:${port}/api/${method}`

  log(endpoint)

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return response.json()
}
