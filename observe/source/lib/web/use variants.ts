export function use_variants(variants: Record<string, string | number | boolean>) {
  useEffect(() => {
    map(variants, ([k, v]) => v ?
      document.documentElement.setAttribute(k, v) :
      document.documentElement.removeAttribute(k))
  })
}