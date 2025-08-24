import styled, { css } from 'styled-components'

interface NavbarContainerProps {
  $isScrolled: boolean
}

interface NavbarMenuProps {
  $isOpen: boolean
}

export const NavbarContainer = styled.nav<NavbarContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndices.sticky};
  background-color: ${({ theme }) => theme.colors.dark};
  transition: all ${({ theme }) => theme.transitions.base};
  padding: ${({ theme }) => theme.spacing[4]} 0;

  ${({ $isScrolled, theme }) =>
    $isScrolled &&
    css`
      background-color: ${theme.colors.dark}ee;
      backdrop-filter: blur(10px);
      box-shadow: ${theme.shadows.md};
      padding: ${theme.spacing[2]} 0;
    `}
`

export const NavbarWrapper = styled.div`
  max-width: ${({ theme }) => theme.portfolio.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing[6]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing[8]};
  }
`

export const NavbarBrand = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-decoration: none;
  display: flex;
  align-items: center;

  span {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${({ theme }) => theme.spacing[2]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`

export const NavbarToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
  cursor: pointer;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const MenuIcon = styled.span`
  width: 20px;
  height: 2px;
  background-color: currentColor;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: currentColor;
    transition: all ${({ theme }) => theme.transitions.fast};
  }

  &::before {
    top: -6px;
  }

  &::after {
    top: 6px;
  }
`

export const NavbarMenu = styled.div<NavbarMenuProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.dark};
    transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: all ${({ theme }) => theme.transitions.base};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

export const NavbarNav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing[6]};
    gap: ${({ theme }) => theme.spacing[4]};
  }
`

export const NavbarNavItem = styled.li`
  position: relative;
`

export const NavbarNavLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  transition: all ${({ theme }) => theme.transitions.base};
  display: block;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary}22;
    text-decoration: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}66;
  }

  /* Active state for current section */
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary}22;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
    text-align: center;
    width: 100%;
  }
`
