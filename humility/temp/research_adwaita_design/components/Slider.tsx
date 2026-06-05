import React, { useMemo } from 'react'
import './Slider.css'

type SliderProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  showValue?: boolean
  defaultValue?: number
}

function Slider({
  className,
  showValue,
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  ...props
}: SliderProps) {
  const isControlled = value !== undefined
  const percentage = useMemo(
    () => ((Number(value ?? defaultValue ?? 0) - Number(min)) / (Number(max) - Number(min))) * 100,
    [value, defaultValue, min, max]
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
          value={value ?? defaultValue}
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          {...props}
          readOnly={isControlled && !onChange}
        />
        <div
          className="Slider_thumb"
          style={{ left: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <span className="Slider_value">{value ?? defaultValue}</span>
      )}
    </div>
  )
}

export { Slider }
export default Slider