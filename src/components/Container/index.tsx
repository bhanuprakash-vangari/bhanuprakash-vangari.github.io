import { ReactNode } from 'react'
import { StyledContainer } from './styled.js'

export interface ContainerProps {
  children: ReactNode
  fluid?: boolean
  className?: string
}

export const Container = ({ children, fluid = false, className }: ContainerProps) => {
  return (
    <StyledContainer $fluid={fluid} className={className}>
      {children}
    </StyledContainer>
  )
}

export default Container
