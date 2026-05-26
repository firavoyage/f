export function Card({ active, title, children }) {
  return (
    <div className="Card" data-active={active}>
      <h1 className="Card-title">{title}</h1>
      <p className="Card-desc">{children}</p>
    </div>
  );
}