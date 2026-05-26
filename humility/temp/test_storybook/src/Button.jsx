export function Button({ variant = 'primary', disabled, children, onClick }) {
  return (
    <button
      className="Button"
      data-variant={variant}
      data-disabled={disabled}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}