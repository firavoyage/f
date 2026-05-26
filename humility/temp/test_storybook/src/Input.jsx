export function Input({ label, value, placeholder, onChange, type = 'text' }) {
  return (
    <label className="Input-label">
      {label && <span className="Input-label-text">{label}</span>}
      <input
        className="Input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </label>
  );
}