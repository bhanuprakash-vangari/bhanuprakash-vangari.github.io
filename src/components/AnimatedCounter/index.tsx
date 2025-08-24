import { useEffect, useState, useRef } from 'react'
import { CounterItem } from '@/types'
import { StyledCounter, CounterNumber, CounterLabel } from './styled.js'

export interface AnimatedCounterProps {
  counter: CounterItem
  duration?: number
  startAnimation?: boolean
}

export const AnimatedCounter = ({
  counter,
  duration = 2000,
  startAnimation = false,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startAnimation) return

    let startTime: number
    const startCount = 0
    const endCount = counter.number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startCount + (endCount - startCount) * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endCount)
      }
    }

    requestAnimationFrame(animate)
  }, [startAnimation, counter.number, duration])

  // Format number with commas for thousands
  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <StyledCounter ref={countRef}>
      <CounterNumber data-number={counter.number}>
        {formatNumber(count)}
      </CounterNumber>
      <CounterLabel>{counter.label}</CounterLabel>
    </StyledCounter>
  )
}

export default AnimatedCounter
