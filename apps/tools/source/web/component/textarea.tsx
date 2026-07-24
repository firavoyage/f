type TextareaProps = {
  value: string;
  set_value: (value: string) => void;
};

export default function Textarea({ value, set_value, ...props }: TextareaProps) {
  function handle_change(event: React.ChangeEvent<HTMLTextAreaElement>) {
    set_value(event.target.value);
  }

  return (
    <textarea
      value={value}
      onChange={handle_change}
      {...props}
    />
  );
}
