import { useTextRotation } from '@/hooks/useTextRotation'
import { RotatingTextWrapper, RotatingTextCursor } from './styled.js'

export interface RotatingTextProps {
  texts: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseDuration?: number
  className?: string
}

export const RotatingText = ({
  texts,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 1000,
  className,
}: RotatingTextProps) => {
  const { currentText } = useTextRotation({
    texts,
    typeSpeed,
    deleteSpeed,
    pauseDuration,
  })

  return (
    <RotatingTextWrapper className={className}>
      <span>{currentText}</span>
      <RotatingTextCursor />
    </RotatingTextWrapper>
  )
}

export default RotatingText
