type input = {
  value: string;
  set_value: (value: string | ((...args: any) => string)) => void;
};

export function Input({ value, set_value, ...props }: input) {
  function handle_change(event: React.ChangeEvent<HTMLInputElement>) {
    set_value(event.target.value);
  }

  return (
    <input {...p({ class: 'input', value, onchange: handle_change, ...props })}></input>
  );
}
