import { useState, useEffect, useRef } from 'react'

export interface UseTextRotationProps {
  texts: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export const useTextRotation = ({
  texts,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 1000,
}: UseTextRotationProps) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (texts.length === 0) return

    const tick = () => {
      const fullText = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      }

      let timeout = isDeleting ? deleteSpeed : typeSpeed

      if (!isDeleting && currentText === fullText) {
        timeout = pauseDuration
        setIsDeleting(true)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        timeout = typeSpeed
      }

      timeoutRef.current = setTimeout(tick, timeout)
    }

    timeoutRef.current = setTimeout(tick, typeSpeed)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentText, currentIndex, isDeleting, texts, typeSpeed, deleteSpeed, pauseDuration])

  return {
    currentText,
    isDeleting,
  }
}

export default useTextRotation
