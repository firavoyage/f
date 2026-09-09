type button = {
  onClick: fn
  className?: any
  children?: any
}

export function Button(props: button) {
  // @ts-expect-error 
  const { className = '', ...rest_props } = p(props)

  return (
    <button {...p({ class: ['button', className], ...rest_props })}></button>
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

