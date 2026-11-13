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

  function set_state(
    new_value: T | Promise<T> | ((old_value: T) => T | Promise<T> | undefined),
  ): void

  function set_state(...args) {
    let new_value
    if (args.length == 0) {
      new_value = toggle
    } else {
      ;[new_value] = args
    }

    let prev_state = state

    if (is(new_value, 'function')) {
      new_value = new_value(state)
    }

    if (is(new_value, 'literal') && new_value == prev_state) {
      return
    }

    if (is(new_value, Promise)) {
      new_value.then(set_state)
      return
    }

    if (!is(new_value, 'undefined')) {
      state = new_value
    }

    for (const sub of subs) {
      sub(state)
    }
  }

  function use_state(): [state: T, set_state: typeof set_state] {
    const update = use_update()

    use_effect(() => {
      subs.add(update)

      return () => {
        subs.delete(update)
      }
    }, [])

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
    const current_params = obj(new URL(window.location.href).searchParams)

    if (has(current_params, url_param)) {
      state = deserialize(current_params[url_param])
    }

    subscribe(() => {
      const url = new URL(window.location.href)
      const prev_params = obj(url.searchParams)

      const prev_serialized_state = prev_params[url_param]
      const current_serialized_state = serialize()

      if (prev_serialized_state != current_serialized_state) {
        url.searchParams.set(url_param, serialize())
        window.history.pushState({}, '', url)
      }
    })

    // Browser back / forward
    window.addEventListener('popstate', () => {
      const current_params = obj(new URL(window.location.href).searchParams)

      if (has(current_params, url_param)) {
        set_state(deserialize(current_params[url_param]))
      }
    })
  }

  return use_state
}

function use_update() {
  const [, update] = useState(0)

  return () => update((v) => v + 1)
}

function toggle(v: boolean) {
  return !v
}

type s_fn = typeof s
declare global {
  var s: s_fn
}
