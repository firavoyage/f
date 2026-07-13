import { ContextMenu } from "./context_menu"

export function App() {
  const items = [
    { label: "copy", onClick: () => console.log("copy") },
    { label: "paste", onClick: () => console.log("paste") },
    { label: "cut", onClick: () => console.log("cut") },
    { label: "delete", onClick: () => console.log("delete"), disabled: true },
  ]

  return (
    <>
      <h1>Context Menu</h1>
      <div class="showcase">
        <p>right click me</p>
        <ContextMenu trigger={<div class="trigger">right click here</div>} items={items} />
      </div>
    </>
  )
}