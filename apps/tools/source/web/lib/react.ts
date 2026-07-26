import { useEffect, useState } from "react";
import { useAsync, useAsyncFn, useToggle } from "react-use";

type useState = typeof useState
type useEffect = typeof useEffect
type useToggle = typeof useToggle
type useAsync = typeof useAsync
type useAsyncFn = typeof useAsyncFn
declare global {
  var useState: useState
  var useEffect: useEffect
  var useToggle: useToggle
  var useAsync: useAsync
  var useAsyncFn: useAsyncFn
}
