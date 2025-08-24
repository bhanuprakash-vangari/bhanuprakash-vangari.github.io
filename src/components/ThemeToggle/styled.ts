import styled from 'styled-components'

export const ThemeToggleButton = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing[6]};
  right: ${({ theme }) => theme.spacing[6]};
  z-index: ${({ theme }) => theme.zIndices.banner};
  
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.background === '#1a1a1a' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.7)'};
  background-color: ${({ theme }) => theme.colors.background === '#1a1a1a' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: ${({ theme }) => theme.colors.textPrimary};
  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.base};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
  }
  
  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: ${({ theme }) => theme.spacing[4]};
    right: ${({ theme }) => theme.spacing[4]};
    width: 44px;
    height: 44px;
  }
`

export const ThemeToggleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ${({ theme }) => theme.transitions.base};
  
  svg {
    transition: all ${({ theme }) => theme.transitions.base};
  }
  
  ${ThemeToggleButton}:hover & {
    transform: rotate(180deg);
  }
`
