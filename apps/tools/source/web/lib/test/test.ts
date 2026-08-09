function Set(...args: any) {
  return new globalThis.Set(...args)
}

log(Set())
