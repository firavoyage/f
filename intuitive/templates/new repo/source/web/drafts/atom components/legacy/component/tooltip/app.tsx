import { Tooltip } from "./tooltip"

export function App() {
  return (
    <>
      <h1>Tooltip</h1>
      <div class="showcase">
        <Tooltip content="this is a tooltip">
          <span class="trigger">hover me</span>
        </Tooltip>
        <Tooltip content="another tooltip here">
          <button class="button">hover me too</button>
        </Tooltip>
      </div>
    </>
  )
}