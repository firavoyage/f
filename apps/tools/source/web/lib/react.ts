import { useEffect, useState } from "react";

type useState = typeof useState
type useEffect = typeof useEffect
declare global {
  var useState: useState
  var useEffect: useEffect
}
