import { ReactNode, forwardRef } from 'react'
import { StyledSection } from './styled.js'

export interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  noPadding?: boolean
  backgroundColor?: 'white' | 'light' | 'dark'
}

export const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  id,
  className,
  noPadding = false,
  backgroundColor = 'white',
}, ref) => {
  return (
    <StyledSection
      ref={ref}
      id={id}
      className={className}
      $noPadding={noPadding}
      $backgroundColor={backgroundColor}
    >
      {children}
    </StyledSection>
  )
})

Section.displayName = 'Section'

export default Section
