import { Popup } from "./popup"

type about = {
  icon?
  name: string
  author?: string
}

export function About(props: about) {
  const { name, author } = props

  return (
    <Popup>
      {name}
      {author}
    </Popup>
  )
}