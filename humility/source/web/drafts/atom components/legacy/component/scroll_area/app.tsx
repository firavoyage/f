import { ScrollArea } from "./scroll_area"

export function App() {
  return (
    <>
      <h1>Scroll Area</h1>
      <div class="showcase">
        <ScrollArea style={{ height: 150 }}>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} class="item">item {i + 1}</div>
          ))}
        </ScrollArea>
      </div>
    </>
  )
}