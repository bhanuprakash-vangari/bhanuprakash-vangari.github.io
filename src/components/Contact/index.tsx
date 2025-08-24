import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { MapIcon, PhoneIcon, MailIcon, GlobeIcon } from '@/components/Icons'
import { contactInfo } from '@/data/portfolio'
import {
  ContactHeader,
  ContactTitle,
  ContactSubtitle,
  ContactDescription,
  ContactGrid,
  ContactCard,
  ContactIcon,
  ContactCardTitle,
  ContactCardContent,
  ContactLink,
} from './styled'

export const Contact = () => {
  return (
    <Section id="contact-section">
      <Container>
        <ContactHeader>
          <ContactTitle>Contact</ContactTitle>
          <ContactSubtitle>Contact Me</ContactSubtitle>
          <ContactDescription>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </ContactDescription>
        </ContactHeader>

        <ContactGrid>
          <ContactCard>
            <ContactIcon>
              <MapIcon />
            </ContactIcon>
            <ContactCardTitle>Address</ContactCardTitle>
            <ContactCardContent>{contactInfo.address}</ContactCardContent>
          </ContactCard>

          <ContactCard>
            <ContactIcon>
              <PhoneIcon />
            </ContactIcon>
            <ContactCardTitle>Contact Number</ContactCardTitle>
            <ContactCardContent>
              <ContactLink href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
                {contactInfo.phone}
              </ContactLink>
            </ContactCardContent>
          </ContactCard>

          <ContactCard>
            <ContactIcon>
              <MailIcon />
            </ContactIcon>
            <ContactCardTitle>Email Address</ContactCardTitle>
            <ContactCardContent>
              <ContactLink href={`mailto:${contactInfo.email}`}>
                Mail Me
              </ContactLink>
            </ContactCardContent>
          </ContactCard>

          <ContactCard>
            <ContactIcon>
              <GlobeIcon />
            </ContactIcon>
            <ContactCardTitle>Website</ContactCardTitle>
            <ContactCardContent>
              <ContactLink href={contactInfo.website} target="_blank" rel="noopener noreferrer">
                Hop In
              </ContactLink>
            </ContactCardContent>
          </ContactCard>
        </ContactGrid>
      </Container>
    </Section>
  )
}

export default Contact
