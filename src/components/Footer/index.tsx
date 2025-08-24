import { Container } from '@/components/Container'
import { TwitterIcon, FacebookIcon, InstagramIcon, ArrowRightIcon, MapIcon, PhoneIcon, MailIcon, LinkedinIcon } from '@/components/Icons'
import { socialLinks } from '@/data/portfolio'
import {
  FooterSection,
  FooterWrapper,
  FooterGrid,
  FooterColumn,
  FooterTitle,
  FooterDescription,
  FooterSocialList,
  FooterSocialItem,
  FooterSocialLink,
  FooterNav,
  FooterNavList,
  FooterNavItem,
  FooterNavLink,
  FooterContact,
  FooterContactList,
  FooterContactItem,
  FooterContactIcon,
  FooterContactText,
} from './styled'

export const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterWrapper>
          <FooterGrid>
            <FooterColumn>
              <FooterTitle>About</FooterTitle>
              <FooterDescription>
                Software Developer in Day, Photographer by Night
              </FooterDescription>
              <FooterSocialList>
                {socialLinks.map((social) => (
                  <FooterSocialItem key={social.platform}>
                    <FooterSocialLink
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow on ${social.platform}`}
                    >
                      {social.platform === 'twitter' && <TwitterIcon />}
                      {social.platform === 'facebook' && <FacebookIcon />}
                      {social.platform === 'instagram' && <InstagramIcon />}
                      {social.platform === 'linkedin' && <LinkedinIcon />}
                    </FooterSocialLink>
                  </FooterSocialItem>
                ))}
              </FooterSocialList>
            </FooterColumn>

            <FooterColumn>
              <FooterNav>
                <FooterTitle>Links</FooterTitle>
                <FooterNavList>
                  <FooterNavItem>
                    <FooterNavLink href="#home-section">
                      <ArrowRightIcon /> Home
                    </FooterNavLink>
                  </FooterNavItem>
                  <FooterNavItem>
                    <FooterNavLink href="#about-section">
                      <ArrowRightIcon /> About
                    </FooterNavLink>
                  </FooterNavItem>
                  <FooterNavItem>
                    <FooterNavLink href="#projects-section">
                      <ArrowRightIcon /> Works
                    </FooterNavLink>
                  </FooterNavItem>
                  <FooterNavItem>
                    <FooterNavLink href="#contact-section">
                      <ArrowRightIcon /> Contact
                    </FooterNavLink>
                  </FooterNavItem>
                </FooterNavList>
              </FooterNav>
            </FooterColumn>

            <FooterColumn>
              <FooterNav>
                <FooterTitle>Works</FooterTitle>
                <FooterNavList>
                  <FooterNavItem>
                    <FooterNavLink
                      href="https://www.instagram.com/tedxsreyasinstitute/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowRightIcon /> Graphics & PR Design
                    </FooterNavLink>
                  </FooterNavItem>
                  <FooterNavItem>
                    <FooterNavLink
                      href="https://github.com/bhanuprakash-vangari"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowRightIcon /> Github
                    </FooterNavLink>
                  </FooterNavItem>
                  <FooterNavItem>
                    <FooterNavLink
                      href="https://500px.com/bhanuprakashvangari"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowRightIcon /> Photography
                    </FooterNavLink>
                  </FooterNavItem>
                </FooterNavList>
              </FooterNav>
            </FooterColumn>

            <FooterColumn>
              <FooterContact>
                <FooterTitle>Have a Questions?</FooterTitle>
                <FooterContactList>
                  <FooterContactItem>
                    <FooterContactIcon>
                      <MapIcon />
                    </FooterContactIcon>
                    <FooterContactText>Badangpet, Hyderabad, IN</FooterContactText>
                  </FooterContactItem>
                  <FooterContactItem>
                    <FooterContactIcon>
                      <PhoneIcon />
                    </FooterContactIcon>
                    <FooterContactText>+91 910 0592 918</FooterContactText>
                  </FooterContactItem>
                  <FooterContactItem>
                    <FooterContactIcon>
                      <MailIcon />
                    </FooterContactIcon>
                    <FooterContactText>bhanuprakash.vangari@gmail.com</FooterContactText>
                  </FooterContactItem>
                </FooterContactList>
              </FooterContact>
            </FooterColumn>
          </FooterGrid>
        </FooterWrapper>
      </Container>
    </FooterSection>
  )
}

export default Footer
