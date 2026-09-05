import clsx from "clsx"

type button = {
  onClick: fn
}

export function Button(props: button) {
  // @ts-expect-error 
  const { className = '', ...rest_props } = p(props)

  return (
    <button {...p({ class: clsx('button', className), ...rest_props })}></button>
  )
}

