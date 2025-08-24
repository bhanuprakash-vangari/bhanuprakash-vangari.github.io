import styled from 'styled-components'

export const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[16]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[12]} 0;
  }
`

export const FooterWrapper = styled.div`
  width: 100%;
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${({ theme }) => theme.spacing[2]};
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

export const FooterSocialList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  list-style: none;
  padding: 0;
  margin: 0;
`

export const FooterSocialItem = styled.li``

export const FooterSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary}22;
  border: 2px solid ${({ theme }) => theme.colors.primary}44;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.base};
  font-size: ${({ theme }) => theme.fontSizes.xl};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const FooterNav = styled.nav``

export const FooterNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const FooterNavItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`

export const FooterNavLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  font-size: ${({ theme }) => theme.fontSizes.base};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`

export const FooterContact = styled.div``

export const FooterContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const FooterContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

export const FooterContactIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  flex-shrink: 0;
  margin-top: 2px;
`

export const FooterContactText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.fontSizes.base};
`
