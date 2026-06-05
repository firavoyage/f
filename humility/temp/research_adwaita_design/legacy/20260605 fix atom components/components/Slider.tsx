import * as BaseUI from '@base-ui/react'
import './Slider.css'

type SliderProps = React.ComponentProps<typeof BaseUI.Slider.Root> & {
  showValue?: boolean
}

function Slider({
  className,
  showValue,
  value,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  ...props
}: SliderProps) {
  const displayValue = value ?? defaultValue

  return (
    <div className={['Slider', className].filter(Boolean).join(' ')}>
      <BaseUI.Slider.Root
        className="Slider_input"
        value={value !== undefined ? [value] : undefined}
        defaultValue={defaultValue !== undefined ? [defaultValue] : undefined}
        min={min}
        max={max}
        step={step}
        onValueChange={(details) => {
          onChange?.(details.value[0] as unknown as React.ChangeEvent<HTMLInputElement>)
        }}
        {...props}
      >
        <BaseUI.Slider.Control className="Slider_track">
          <BaseUI.Slider.Track className="Slider_indicator" />
          <BaseUI.Slider.Thumb index={0} className="Slider_thumb" />
        </BaseUI.Slider.Control>
      </BaseUI.Slider.Root>
      {showValue && (
        <span className="Slider_value">{displayValue}</span>
      )}
    </div>
  )
}

export { Slider }
export default Slider