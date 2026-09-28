type switch_ = {
  value: boolean
  set_value: Function
}

export function Switch({ value, set_value }: switch_) {
  return (
    <button className="switch" {...p({ checked: value, onClick() { set_value((v: any) => !v) } })}>
      <span className="thumb"></span>
    </button>
  )
}
