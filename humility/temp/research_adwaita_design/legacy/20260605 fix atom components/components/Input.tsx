import * as BaseUI from '@base-ui/react'
import './Input.css'

type InputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url'
type InputSize = 'small' | 'medium' | 'large'

type InputProps = React.ComponentProps<typeof BaseUI.Input> & {
  type?: InputType
  size?: InputSize
}

function Input({
  type = 'text',
  size = 'medium',
  className,
  ...props
}: InputProps) {
  return (
    <BaseUI.Input
      type={type}
      className={['Input', className].filter(Boolean).join(' ')}
      data-size={size}
      {...props}
    />
  )
}

export { Input }
export default Input