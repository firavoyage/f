export function use_variants(variants: Record<string, string>) {
  useEffect(() => {
    map(variants, ([k, v]) => document.documentElement.setAttribute(k, v))
  })
}