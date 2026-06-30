// @ts-nocheck

// Prettier JSX output
const Component = () => (
  <div className="Foo">
    <h1>Hello World</h1>
    <p>This is a description paragraph.</p>
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
);

// Prettier Hyperscript output
const Component = () =>
  h("div.Foo", [
    h("h1", "Hello World"),
    h("p", "This is a description paragraph."),
    h(
      "ul",
      items.map((item) => h("li", { key: item.id }, item.name)),
    ),
  ]);
