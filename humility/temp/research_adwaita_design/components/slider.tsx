import { Slider } from "@base-ui/react/slider";
import "./slider.css";

export function MySlider(props: Slider.Root.Props) {
  return (
    <Slider.Root className="my-slider" {...props}>
      <Slider.Control className="my-slider-control">
        <Slider.Track className="my-slider-track">
          <Slider.Indicator className="my-slider-indicator" />
          <Slider.Thumb className="my-slider-thumb" />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}