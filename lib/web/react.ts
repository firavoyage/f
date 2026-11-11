import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { useAsync, useAsyncFn, useToggle, useMount } from 'react-use'
import { use_keyboard } from 'lib/web/use keyboard'
import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import { use_variants } from 'lib/web/use variants'
import { use_event } from 'lib/web/use event'
import { use_mouse_glitch } from 'lib/web/use mouse glitch'

export * from 'lib/web/use keyboard'
export * from 'lib/web/use sync theme'
export * from 'lib/web/use window active'
export * from 'lib/web/use variants'
export * from 'lib/web/use event'
export * from 'lib/web/use mouse glitch'

let cleanups: Set<fn> = set()

export function use_state() {}

export function use_effect(fn, deps) {
  useEffect(() => {
    cleanups = set()

    fn()

    let current_cleanups = cleanups

    return () => {
      for (const cleanup of cleanups) {
        cleanup()
      }
    }
  }, [JSON.stringify(deps)])
}

export function set_timeout(fn, delay) {
  const timer = setTimeout(fn, delay)

  cleanups.add(() => clearTimeout(timer))

  return timer
}

export function set_interval(fn, interval) {
  const timer = setInterval(fn, interval)

  cleanups.add(() => clearInterval(timer))

  return timer
}

type event =
  | keyof HTMLElementEventMap
  | keyof WindowEventMap
  | keyof DocumentEventMap

export function listen(event: event, fn: (e: Event) => any, ref: any = window) {
  const element = ref.current ?? ref

  if (!element) {
    return
  }

  element.addEventListener(event, fn)

  cleanups.add(() => element.removeEventListener(event, fn))
}

function set_state(new_value: T | ((old_value: T) => T) = toggle) {
  let prev_state = state

  if (is(new_value, 'function')) {
    state = new_value(state)
  } else if (!is(new_value, 'undefined')) {
    state = new_value
  }

  if (is(state, 'literal') && state == prev_state) {
    return
  }

  for (const sub of subs) {
    sub(state)
  }
}

type use_state = typeof use_state
type use_effect = typeof use_effect
type set_timeout = typeof set_timeout
type set_interval = typeof set_interval
type listen = typeof listen
type useRef = typeof useRef
type useState = typeof useState
type useEffect = typeof useEffect
type useLayoutEffect = typeof useLayoutEffect
type useToggle = typeof useToggle
type useAsync = typeof useAsync
type useAsyncFn = typeof useAsyncFn
type useMount = typeof useMount
type use_keyboard = typeof use_keyboard
type use_sync_theme = typeof use_sync_theme
type use_window_active = typeof use_window_active
type use_variants = typeof use_variants
type use_event = typeof use_event
type use_mouse_glitch = typeof use_mouse_glitch
declare global {
  var use_state: use_state
  var use_effect: use_effect
  var set_timeout: set_timeout
  var set_interval: set_interval
  var listen: listen
  var useRef: useRef
  var useState: useState
  var useEffect: useEffect
  var useLayoutEffect: useLayoutEffect
  var useToggle: useToggle
  var useAsync: useAsync
  var useAsyncFn: useAsyncFn
  var useMount: useMount
  var use_keyboard: use_keyboard
  var use_sync_theme: use_sync_theme
  var use_window_active: use_window_active
  var use_variants: use_variants
  var use_event: use_event
  var use_mouse_glitch: use_mouse_glitch
}
