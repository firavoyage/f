import { Button } from "./design/Button.jsx";
import { Input } from "./design/Input.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="p-6 space-y-6">
        <section className="space-y-2">
          <h2 className="text-sm font-medium">Buttons</h2>
          <div className="flex gap-2">
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="quiet">Quiet</Button>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-medium">Inputs</h2>
          <Input placeholder="Type here…" />
        </section>
      </div>
    </div>
  );
}
