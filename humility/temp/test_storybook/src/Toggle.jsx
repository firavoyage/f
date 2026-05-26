export function Toggle({ checked, label, onChange, disabled }) {
  return (
    <label className="Toggle" data-disabled={disabled}>
      <input
        className="Toggle-input"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <span className="Toggle-switch" />
      {label && <span className="Toggle-label">{label}</span>}
    </label>
  );
}