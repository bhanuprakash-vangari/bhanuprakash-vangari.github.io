import styled, { keyframes } from 'styled-components'

const progressAnimation = keyframes`
  from {
    stroke-dashoffset: var(--initial-offset);
  }
  to {
    stroke-dashoffset: var(--final-offset);
  }
`

export const CircularProgressContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

export const CircularProgressWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  position: relative;
`

export const CircularProgressTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const CircularProgressSvg = styled.svg`
  transform: rotate(-90deg);
  margin: ${({ theme }) => theme.spacing[2]} auto;
`

export const CircularProgressTrack = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.light};
`

export const CircularProgressFill = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.primary};
  stroke-linecap: round;
  transition: stroke-dashoffset 2s ease-in-out;
  animation: ${progressAnimation} 2s ease-in-out;
`

export const CircularProgressValue = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: ${({ theme }) => theme.spacing[2]};

  .percentage {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.textPrimary};

    sup {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`

export const CircularProgressStats = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.light};
  padding-top: ${({ theme }) => theme.spacing[4]};
`

export const CircularProgressStat = styled.div`
  flex: 1;
  text-align: center;

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.light};
  }

  .value {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: ${({ theme }) => theme.spacing[1]};
  }

  .label {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`
