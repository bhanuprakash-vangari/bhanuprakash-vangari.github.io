import styled from 'styled-components'

interface ProjectCardImageProps {
  $backgroundImage: string
}

export const ProjectCardContainer = styled.div`
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.base};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

export const ProjectCardImage = styled.div<ProjectCardImageProps>`
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 200px;
  }
`

export const ProjectCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  opacity: 0.6;
  transition: opacity ${({ theme }) => theme.transitions.base};

  ${ProjectCardContainer}:hover & {
    opacity: 0.8;
  }
`

export const ProjectCardContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.white};
`

export const ProjectCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  line-height: ${({ theme }) => theme.lineHeights.tight};

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

export const ProjectCardCategory = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  opacity: 0.9;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`
