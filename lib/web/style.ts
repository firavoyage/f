function prefix(component: string): Record<string, string> {
  return new Proxy({}, {
    get(target, prop: string){
      return `${component}_${prop}`
    }
  })
}

const { foo, bar, asdf } = prefix('app')

log(foo, bar, asdf)
