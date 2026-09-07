// everything from react and react-use is available
// these are the ones you would actually use

import { useEffect, useState, useRef, useCallback } from "react";
import { useAsync, useAsyncFn, useMeasure, useToggle } from "react-use";

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


type useState = typeof useState
type useEffect = typeof useEffect
type useToggle = typeof useToggle
type useAsync = typeof useAsync
type useAsyncFn = typeof useAsyncFn
type use_measure = typeof use_measure
declare global {
  var useState: useState
  var useEffect: useEffect
  var useToggle: useToggle
  var useAsync: useAsync
  var useAsyncFn: useAsyncFn
  var use_measure: use_measure
}
