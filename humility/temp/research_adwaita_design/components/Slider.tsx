import { Slider as BaseSlider } from "@base-ui/react/slider";
import "./Slider.css";

export function Slider(props: BaseSlider.Root.Props) {
  return (
    <BaseSlider.Root className="Slider" {...props}>
      <BaseSlider.Control className="Slider_control">
        <BaseSlider.Track className="Slider_track">
          <BaseSlider.Indicator className="Slider_indicator" />
          <BaseSlider.Thumb className="Slider_thumb" />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}