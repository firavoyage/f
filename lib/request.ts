let base = location.href

export function init_request(base_url) {
  base = base_url
}

// export async function get(endpoint) {
//   const url = `${base}/${endpoint}`

//   const response = await fetch(url)

//   if (!response.ok) {
//     throw err(`request failed, status: ${response.status}`)
//   }

//   const result = await response.json()
//   return result
// }

export async function post(endpoint, payload = '') {
  const url = `${base}/api/${endpoint}`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw err(`request failed, status: ${response.status}`)
  }

  const result = await response.json()
  return result
}

