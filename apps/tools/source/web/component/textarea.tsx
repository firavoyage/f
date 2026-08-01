type TextareaProps = {
  value: string;
  set_value: (value: string) => void;
};

export function Textarea({ value, set_value, ...props }: TextareaProps) {
  function handle_change(event: React.ChangeEvent<HTMLTextAreaElement>) {
    set_value(event.target.value);
  }

  return (
    <textarea
      {...p({ class: 'textarea', value, onchange: handle_change, ...props })}
    />
  );
}
