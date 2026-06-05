import * as BaseUI from '@base-ui/react'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'flat' | 'destructive'
type ButtonSize = 'small' | 'medium' | 'large'
type ButtonShape = 'rounded' | 'pill'

type ButtonProps = React.ComponentProps<typeof BaseUI.Button> & {
  variant?: ButtonVariant
  size?: ButtonSize
  shape?: ButtonShape
}

function Button({
  variant = 'primary',
  size = 'medium',
  shape = 'rounded',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <BaseUI.Button
      className={['Button', className].filter(Boolean).join(' ')}
      data-variant={variant}
      data-size={size}
      data-shape={shape}
      {...props}
    >
      {children}
    </BaseUI.Button>
  )
}

export { Button }
export default Button