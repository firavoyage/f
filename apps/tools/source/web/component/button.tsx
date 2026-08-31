type button = {
  onClick: fn
}

export function Button(props: button) {
  return (
    <button className="button" {...p(props)}></button>
  )
}