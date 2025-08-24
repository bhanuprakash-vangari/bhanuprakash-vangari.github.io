import { ReactNode } from 'react'
import { StyledButton } from './styled.js'

export interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled,
  as = 'button',
  href,
  target,
  rel,
  onClick,
  type,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      as={as}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      type={type}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $loading={loading}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </StyledButton>
  )
}

export default Button
