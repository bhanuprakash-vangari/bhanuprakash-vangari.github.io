import styled from 'styled-components'

export const AboutWrapper = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 80vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    min-height: auto;
  }
`

export const AboutImageContainer = styled.div`
  flex: 0 0 50%;
  position: relative;
  display: flex;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 300px;
  }
`

export const AboutOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary}22,
    ${({ theme }) => theme.colors.dark}44
  );
  z-index: 1;
`

export const AboutImage = styled.div`
  width: 100%;
  background-image: url('/src/assets/images/about.JPG');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`

export const AboutContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[8]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[4]};
  }
`

export const AboutHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`

export const AboutTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['7xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textSecondary};
  opacity: 0.1;
  line-height: 0.8;
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }
`

export const AboutSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`

export const AboutQuote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-style: italic;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`

export const AboutInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const AboutInfoItem = styled.li`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[1]};
  }
`

export const AboutInfoLabel = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.black};
  min-width: 140px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: auto;
  }
`

export const AboutInfoValue = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  flex: 1;
`

export const AboutActions = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
`
