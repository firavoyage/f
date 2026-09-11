type scroll = {
  children
}

export function Scroll({children}: scroll) {
  return (
    <div className="scroll">
      {children}
    </div>
  )
}