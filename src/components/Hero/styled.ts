import styled, { keyframes } from 'styled-components'

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const HeroSection = styled.section`
  min-height: ${({ theme }) => theme.portfolio.heroMinHeight};
  background: url('/src/assets/images/background.png') center center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 100vh;
  }
`

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background === '#1a1a1a' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 1;
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 60vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 50vh;
    padding: ${({ theme }) => theme.spacing[8]} 0;
  }
`

export const HeroText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  max-width: 800px;
  animation: ${fadeInUp} 1s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 600px;
  }
`

export const HeroSubheading = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  opacity: 0.9;
  animation: ${fadeInUp} 1s ease-out 0.2s both;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  animation: ${fadeInUp} 1s ease-out 0.4s both;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
  color: ${({ theme }) => theme.colors.primary};
`

export const HeroSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  animation: ${fadeInUp} 1s ease-out 0.6s both;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`

export const MouseIcon = styled.a`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing[8]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: ${({ theme }) => theme.colors.textInverse};
  text-decoration: none;
  cursor: pointer;
  animation: ${bounceAnimation} 2s infinite;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: ${({ theme }) => theme.spacing[6]};
  }
`

export const MouseWheel = styled.div`
  width: 30px;
  height: 50px;
  border: 2px solid currentColor;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    position: absolute;
    bottom: 8px;
    animation: ${bounceAnimation} 2s infinite;
  }
`
