import { useState, useEffect } from 'react'
import { NavItem } from '@/types'
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarBrand,
  NavbarToggle,
  NavbarMenu,
  NavbarNav,
  NavbarNavItem,
  NavbarNavLink,
  MenuIcon,
} from './styled.js'

export interface NavbarProps {
  navItems: NavItem[]
  brandText: string
  brandHref?: string
}

export const Navbar = ({ navItems, brandText, brandHref = '#' }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 150
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavbarContainer $isScrolled={isScrolled}>
      <NavbarWrapper>
        <NavbarBrand href={brandHref}>
          <span>V</span>
          {brandText}
        </NavbarBrand>

        <NavbarToggle onClick={handleToggle} aria-label="Toggle navigation">
          <MenuIcon />
        </NavbarToggle>

        <NavbarMenu $isOpen={isOpen}>
          <NavbarNav>
            {navItems.map((item) => (
              <NavbarNavItem key={item.id}>
                <NavbarNavLink href={item.href} onClick={handleLinkClick}>
                  <span>{item.label}</span>
                </NavbarNavLink>
              </NavbarNavItem>
            ))}
          </NavbarNav>
        </NavbarMenu>
      </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar
