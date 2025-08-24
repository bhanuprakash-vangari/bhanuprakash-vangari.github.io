import { ProgressBarProps } from '@/types'
import { StyledProgressBar, ProgressBarContainer, ProgressBarFill, ProgressBarLabel } from './styled.js'

export const ProgressBar = ({
  value,
  color = 'color-1',
  showPercentage = true,
  animated = true,
  label,
}: ProgressBarProps & { label?: string }) => {
  return (
    <StyledProgressBar>
      {label && <ProgressBarLabel>{label}</ProgressBarLabel>}
      <ProgressBarContainer>
        <ProgressBarFill
          $value={value}
          $color={color}
          $animated={animated}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {showPercentage && <span>{value}%</span>}
        </ProgressBarFill>
      </ProgressBarContainer>
    </StyledProgressBar>
  )
}

export default ProgressBar
