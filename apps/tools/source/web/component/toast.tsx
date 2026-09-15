import { Button } from "./button"

const default_toast_duration = 3000
// const default_toast_duration = 1000

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
      <div className="actions">
        <Button {...p({ onClick: close })}>
          <Icon {...p({ name: 'close' })}></Icon>
        </Button>
      </div>
    </div>
  )
}

export const use_toasts = state(new Map())

export function toast(message: string, duration = default_toast_duration) {
  const id = Math.random()

  use_toasts.set(() => {
    use_toasts.data.set(id, message)
  })

  setTimeout(function () {
    use_toasts.set(() => {
      use_toasts.data.delete(id)
    })
  }, duration)
}

