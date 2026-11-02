let app_prefix = ''

export function init_localstorage_prefix(app: string) {
  app_prefix = `${app} `
}

type s<T> = {
  localstorage?: string
  url_param?: string
}

export function s<T>(initial_value: T, options: s<T> = {}) {
  const { localstorage, url_param } = options

  let state = initial_value

  const subs = set()
  function subscribe(listener: Function) {
    subs.add(listener)
  }

  function set_state(new_value: T | ((old_value: T) => T) = toggle) {
    if (is(new_value, 'function')) {
      state = new_value(state)
    } else {
      state = new_value
    }

    for (const sub of subs) {
      sub(state)
    }
  }

  function use_state(): [state: T, set_state: typeof set_state] {
    const update = use_update()

    useEffect(() => {
      subs.add(update)

      return () => {
        subs.delete(update)
      }
    })

    return [state, set_state]
  }

  const { parse: deserialize } = JSON
  function serialize() {
    return JSON.stringify(state)
  }

  if (is_given(localstorage)) {
    const key = `${app_prefix}${localstorage}`

    const value = localStorage.getItem(key)

    if (is_given(value)) {
      state = deserialize(value)
    }

    subscribe(() => {
      localStorage.setItem(key, serialize())
    })
  }

  if (is_given(url_param)) {
    const key = url_param

    const current_params = obj(new URL(window.location.href).searchParams)
    // const current_params = new URLSearchParams(window.location.search)
    
    if (has(current_params, key)) {
      state = deserialize(current_params[key])
    }

    subscribe(() => {
      const current_params = new URLSearchParams(window.location.search)

      current_params.set(key, serialize())

      const new_url = `${window.location.pathname}?${current_params.toString()}`

      window.history.pushState({}, '', new_url)
    })
  }

  return use_state
}

function use_update() {
  const [, update] = useState(false)

  return () => update((v) => !v)
}

function toggle(v: boolean) {
  return !v
}

type s_fn = typeof s
declare global {
  var s: s_fn
}
