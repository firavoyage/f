import { Button } from "./button"

export function App() {
  return (
    <>
      <h1>Button</h1>
      <div class="showcase">
        <Button>default</Button>
        <Button disabled>disabled</Button>
      </div>
    </>
  )
}