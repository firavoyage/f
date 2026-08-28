type checkbox = {
  value: boolean
  set_value: Function
  children?: any
}

export function Checkbox({ value, set_value, children }: checkbox) {
  return (
    <div className="checkbox" {...p({ checked: value, onClick() { set_value((v: any) => !v) } })}>
      <div className="indicator">
        {value ? 'checked' : 'unchecked'}
      </div>
      {children}
    </div>
  )
}
