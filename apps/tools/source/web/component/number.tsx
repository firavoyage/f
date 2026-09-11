import { Button } from "./button";

type number_ = {
  value: number;
  set_value: (value: number | ((...args: any) => number)) => void;
};

export function Number({ value, set_value, ...props }: number_) {
  function handle_change(event: React.ChangeEvent<HTMLInputElement>) {
    set_value(+event.target.value);
  }

  function increase() {
    set_value((v: number) => v + 1)
  }

  function decrease() {
    set_value((v: number) => v - 1)
  }

  return (
    <div className="number" {...p({ ...props })}>
      <input {...p({ class: 'field', value, onchange: handle_change })}></input>
      <Button className="decrease" {...p({ onClick: decrease })}>
        <span className="icon">
          -
        </span>
      </Button>
      <Button className="increase" {...p({ onClick: increase })}>
        <span className="icon">
          +
        </span>
      </Button>
    </div>
  );
}
