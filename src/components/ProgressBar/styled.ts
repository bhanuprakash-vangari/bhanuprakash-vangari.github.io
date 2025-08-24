import styled, { css, keyframes } from 'styled-components'

interface ProgressBarFillProps {
  $value: number
  $color: string
  $animated: boolean
}

const progressAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: var(--progress-width);
  }
`

const colorMap = {
  'color-1': '#007bff',
  'color-2': '#28a745',
  'color-3': '#ffc107',
  'color-4': '#dc3545',
  'color-5': '#17a2b8',
  'color-6': '#6f42c1',
}

export const StyledProgressBar = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

export const ProgressBarLabel = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const ProgressBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  overflow: hidden;
  height: 8px;
  position: relative;
`

export const ProgressBarFill = styled.div<ProgressBarFillProps>`
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ $color }) => colorMap[$color as keyof typeof colorMap] || colorMap['color-1']};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: ${({ theme }) => theme.spacing[2]};
  transition: width ${({ theme }) => theme.transitions.slow};
  
  --progress-width: ${({ $value }) => $value}%;
  width: var(--progress-width);

  ${({ $animated }) =>
    $animated &&
    css`
      animation: ${progressAnimation} 2s ease-out;
    `}

  span {
    position: absolute;
    right: ${({ theme }) => theme.spacing[2]};
    top: -${({ theme }) => theme.spacing[6]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`
