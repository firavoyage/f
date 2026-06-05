import React, { useMemo } from 'react'
import './slider.css'

type SliderProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  showValue?: boolean
}

function Slider({
  className,
  showValue,
  value,
  min = 0,
  max = 100,
  step = 1,
  ...props
}: SliderProps) {
  const percentage = useMemo(
    () => ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100,
    [value, min, max]
  )

  return (
    <div className={['Slider', className].filter(Boolean).join(' ')}>
      <div className="Slider_track">
        <div
          className="Slider_indicator"
          style={{ width: `${percentage}%` }}
        />
        <input
          type="range"
          className="Slider_input"
          value={value}
          min={min}
          max={max}
          step={step}
          {...props}
        />
        <div
          className="Slider_thumb"
          style={{ left: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <span className="Slider_value">{value}</span>
      )}
    </div>
  )
}

export { Slider }
export default Slider