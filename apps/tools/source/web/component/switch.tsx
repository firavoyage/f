type switch_ = {
  value: boolean
  set_value: Function
  children?: any
}

export function Switch({value, set_value, children}: switch_) {
  return (
    <div className="switch" {...p({ checked: value, onClick(){ set_value((v: any) => !v) } })}>
      <span className="thumb"></span>
      {children}
    </div>
  )
}
