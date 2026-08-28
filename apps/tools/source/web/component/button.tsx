type button = {
  onclick: Function
}

export function Button(props: button) {
  return (
    <button className="button" {...p(props)}></button>
  )
}