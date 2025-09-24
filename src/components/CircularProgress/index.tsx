import { CircularSkill } from '@/types'
import {
  CircularProgressContainer,
  CircularProgressWrapper,
  CircularProgressSvg,
  CircularProgressTrack,
  CircularProgressFill,
  CircularProgressValue,
  CircularProgressTitle,
  CircularProgressStats,
  CircularProgressStat,
} from './styled.js'

export interface CircularProgressProps {
  skill: CircularSkill
  size?: number
  strokeWidth?: number
}

export const CircularProgress = ({
  skill,
  size = 120,
  strokeWidth = 8,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (skill.value / 100) * circumference

  return (
    <CircularProgressContainer>
      <CircularProgressWrapper>
        <CircularProgressTitle>{skill.name}</CircularProgressTitle>
        
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <CircularProgressSvg width={size} height={size}>
            <CircularProgressTrack
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <CircularProgressFill
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          </CircularProgressSvg>
          
          <CircularProgressValue>
            <div className="percentage">{skill.value}<sup>%</sup></div>
          </CircularProgressValue>
        </div>
        
        <CircularProgressStats>
          <CircularProgressStat>
            <div className="value">{skill.lastWeek}%</div>
            <span className="label">Last week</span>
          </CircularProgressStat>
          <CircularProgressStat>
            <div className="value">{skill.lastMonth}%</div>
            <span className="label">Last month</span>
          </CircularProgressStat>
        </CircularProgressStats>
      </CircularProgressWrapper>
    </CircularProgressContainer>
  )
}

export default CircularProgress
