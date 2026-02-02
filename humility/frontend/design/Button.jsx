export function Button({ variant = "default", children }) {
  const base =
    "inline-flex items-center justify-center rounded px-3 py-1.5 text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  const variants = {
    default: "bg-surface border-border text-text",
    primary: "bg-accent border-accent text-black",
    quiet: "bg-transparent border-transparent text-muted"
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
