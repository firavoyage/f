import { Tooltip } from "./tooltip"

type button = {
  onClick: fn
  className?
  tooltip?
  children?
}

export function Button(props: button) {
  const { className = '', tooltip, ...rest_props } = p(props)

  const ref = useRef()

  return (
    <>
      <button {...p({ class: ['button', className], ref, ...rest_props })}></button>
      {
        is_given(tooltip) &&
        <Tooltip {...p({ tooltip, ref })}></Tooltip>
      }
    </>
  )
}

// type button = {
//   onClick: fn
//   children: any
// }

// export function Button(props: button) {
//   // @ts-expect-error 
//   const { className = '', children, ...rest_props } = p(props)

//   return (
//     <button {...p({ class: ['button', className], ...rest_props })}>
//       {children}
//     </button>
//   )
// }

