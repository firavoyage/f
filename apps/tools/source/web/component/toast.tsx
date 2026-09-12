import { Button } from "./button"

type toast = {
  message: string
  close: fn
}

export function Toast({ message, close }: toast) {
  return (
    <div className="toast">
      <div className="message">
        {message}
      </div>
      <Button {...p({ onClick: close })}>
        <Icon {...p({ name: 'close' })}></Icon>
      </Button>
    </div>
  )
}