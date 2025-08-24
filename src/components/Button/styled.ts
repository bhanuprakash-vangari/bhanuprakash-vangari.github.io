import styled, { css } from 'styled-components'

interface StyledButtonProps {
  $variant: 'primary' | 'secondary' | 'outline'
  $size: 'sm' | 'md' | 'lg'
  $fullWidth: boolean
  $loading: boolean
}

const buttonVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primaryDark};
      border-color: ${({ theme }) => theme.colors.primaryDark};
      transform: translateY(-2px);
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.textSecondary};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.textSecondary};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.dark};
      border-color: ${({ theme }) => theme.colors.dark};
      transform: translateY(-2px);
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      transform: translateY(-2px);
    }
  `,
}

const buttonSizes = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    min-height: 36px;
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
    font-size: ${({ theme }) => theme.fontSizes.base};
    min-height: 44px;
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    min-height: 52px;
  `,
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;
  overflow: hidden;

  /* Size variants */
  ${({ $size }) => buttonSizes[$size]}

  /* Color variants */
  ${({ $variant }) => buttonVariants[$variant]}

  /* Full width */
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  /* Loading state */
  ${({ $loading }) =>
    $loading &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
    `}

  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none !important;
  }

  /* Focus state */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
  }

  /* Active state */
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`
