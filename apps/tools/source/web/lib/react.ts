// everything from react and react-use is available
// these are the ones you would actually use

import { useEffect, useState, useRef, useCallback } from "react";
import { useAsync, useAsyncFn, useEvent, useMeasure, useToggle } from "react-use";
import { use_bind } from 'web/lib/use keyboard'
import { use_sync_theme } from 'web/lib/use sync theme'
import { use_window_active } from 'web/lib/use window active'

export * from 'web/lib/use keyboard'
export * from 'web/lib/use sync theme'
export * from 'web/lib/use window active'

export function use_measure(options?: Parameters<typeof useMeasure>) {
  const [measureRef, bounds] = useMeasure(options);
  const internalRef = useRef<HTMLElement | null>(null);

  const mergedCallback = useCallback((node: HTMLElement | null) => {
    internalRef.current = node;
    measureRef(node);
  }, [measureRef]);

  const mergedRef = Object.assign(mergedCallback, {
    get current() {
      return internalRef.current;
    }
  });

  return [mergedRef, bounds] as const;
}

type useRef = typeof useRef
type useState = typeof useState
type useEffect = typeof useEffect
type useToggle = typeof useToggle
type useAsync = typeof useAsync
type useAsyncFn = typeof useAsyncFn
type use_measure = typeof use_measure
type useEvent = typeof useEvent
type use_bind = typeof use_bind
type use_sync_theme = typeof use_sync_theme
type use_window_active = typeof use_window_active
declare global {
  var useRef: useRef
  var useState: useState
  var useEffect: useEffect
  var useToggle: useToggle
  var useAsync: useAsync
  var useAsyncFn: useAsyncFn
  var use_measure: use_measure
  var useEvent: useEvent
  var use_bind: use_bind
  var use_sync_theme: use_sync_theme
  var use_window_active: use_window_active
}
