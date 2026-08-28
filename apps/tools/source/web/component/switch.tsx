type switch_ = {
  value: boolean
  set_value: Function
  children?: any
}

export function Switch({value, set_value, children}: switch_) {
  return (
    <div className="switch" {...p({ onClick(){ set_value((v: any) => !v) } })}>
      <div className="indicator">
        {value ? 'checked' : 'unchecked'}
      </div>
      {children}
    </div>
  )
}
