import styled, { css } from 'styled-components'

interface ResumeNavLinkProps {
  $isActive: boolean
}

export const ResumeWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: ${({ theme }) => theme.spacing[8]};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 250px 1fr;
    gap: ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`

export const ResumeNavigation = styled.div`
  position: sticky;
  top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
  }
`

export const ResumeNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    border-radius: ${({ theme }) => theme.borderRadius.base};
  }
`

export const ResumeNavItem = styled.li`
  border-bottom: 1px solid #ffffff;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 1;
    border-bottom: none;
    border-right: 1px solid #f3f4f6;

    &:last-child {
      border-right: none;
    }
  }
`

export const ResumeNavLink = styled.a<ResumeNavLinkProps>`
  display: block;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  color: #6b7280;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;

  &:hover {
    color: #3b82f6;
    background-color: rgba(59, 130, 246, 0.1);
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      color: #3b82f6;
      background-color: rgba(59, 130, 246, 0.2);
      font-weight: ${theme.fontWeights.semibold};

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background-color: #3b82f6;

        @media (max-width: ${theme.breakpoints.md}) {
          left: 0;
          right: 0;
          top: auto;
          bottom: 0;
          width: auto;
          height: 4px;
        }
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`

export const ResumeContent = styled.div`
  min-height: 600px;
`

export const ResumeTab = styled.div`
  animation: fadeInUp 0.6s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const ResumeTabTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: #111827;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${({ theme }) => theme.spacing[2]};
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #3b82f6;
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`

export const ResumeItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  padding-left: ${({ theme }) => theme.spacing[6]};
  border-left: 3px solid #3b82f6;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: ${({ theme }) => theme.spacing[2]};
    width: 14px;
    height: 14px;
    background-color: #3b82f6;
    border-radius: 50%;
    border: 3px solid #ffffff;
    box-shadow: 0 0 0 1px #3b82f6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: ${({ theme }) => theme.spacing[4]};
    
    &::before {
      left: -6px;
      width: 10px;
      height: 10px;
    }
  }
`



export const ResumeItemContent = styled.div`
  flex: 1;
`

export const ResumeItemDate = styled.span`
  display: inline-block;
  background-color: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`

export const ResumeItemTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: #111827;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  line-height: ${({ theme }) => theme.lineHeights.tight};
`

export const ResumeItemCompany = styled.span`
  display: block;
  color: #6b7280;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`

export const ResumeItemGrade = styled.span`
  display: block;
  color: #6b7280;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const ResumeItemDescription = styled.p`
  color: #6b7280;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin: 0;
`

export const CircularSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`

export const ProgressSection = styled.div`
  background-color: #ffffff;
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`
