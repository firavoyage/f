type checkbox = {
  value: boolean
  set_value: Function
  children?: any
}

export function Checkbox({ value, set_value, children }: checkbox) {
  return (
    <div className="checkbox" {...p({ checked: value, onClick() { set_value((v: any) => !v) } })}>
      <span className="indicator">
        {value ? 'checked' : 'unchecked'}
      </span>
      {children}
    </div>
  )
}
