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
  background-color: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  position: relative;
`

export const CircularProgressTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: #111827;
`

export const CircularProgressSvg = styled.svg`
  transform: rotate(-90deg);
  margin: ${({ theme }) => theme.spacing[2]} auto;
`

export const CircularProgressTrack = styled.circle`
  fill: none;
  stroke: #f3f4f6;
`

export const CircularProgressFill = styled.circle`
  fill: none;
  stroke: #3b82f6;
  stroke-linecap: round;
  transition: stroke-dashoffset 2s ease-in-out;
  animation: ${progressAnimation} 2s ease-in-out;
`

export const CircularProgressValue = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  .percentage {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: #111827;
    text-align: center;
    line-height: 1;

    sup {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`

export const CircularProgressStats = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid #f3f4f6;
  padding-top: ${({ theme }) => theme.spacing[4]};
`

export const CircularProgressStat = styled.div`
  flex: 1;
  text-align: center;

  &:first-child {
    border-right: 1px solid #f3f4f6;
  }

  .value {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: #111827;
    margin-bottom: ${({ theme }) => theme.spacing[1]};
  }

  .label {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: #6b7280;
  }
`
