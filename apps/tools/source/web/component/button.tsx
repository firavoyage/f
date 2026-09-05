type button = {
  onClick: fn
}

export function Button(props: button) {
  const { className } = p(props)

  return (
    <button className="button" {...p(props)}></button>
  )
}