import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { personalInfo } from '@/data/portfolio'
import {
  AboutWrapper,
  AboutImageContainer,
  AboutImage,
  AboutOverlay,
  AboutContent,
  AboutHeader,
  AboutTitle,
  AboutSubtitle,
  AboutQuote,
  AboutInfo,
  AboutInfoItem,
  AboutInfoLabel,
  AboutInfoValue,
  AboutActions,
} from './styled.js'

export const About = () => {
  return (
    <Section id="about-section" noPadding>
      <Container>
        <AboutWrapper>
          <AboutImageContainer>
            <AboutOverlay />
            <AboutImage />
          </AboutImageContainer>
          
          <AboutContent>
            <AboutHeader>
              <AboutTitle>About</AboutTitle>
              <AboutSubtitle>About Me</AboutSubtitle>
              <AboutQuote>
                "I am not a product of my circumstances. I am a product of my decisions." – Stephen Covey
              </AboutQuote>
              
              <AboutInfo>
                <AboutInfoItem>
                  <AboutInfoLabel>Name:</AboutInfoLabel>
                  <AboutInfoValue>{personalInfo.name}</AboutInfoValue>
                </AboutInfoItem>
                <AboutInfoItem>
                  <AboutInfoLabel>Date of birth:</AboutInfoLabel>
                  <AboutInfoValue>{personalInfo.dateOfBirth}</AboutInfoValue>
                </AboutInfoItem>
                <AboutInfoItem>
                  <AboutInfoLabel>Address:</AboutInfoLabel>
                  <AboutInfoValue>{personalInfo.address}</AboutInfoValue>
                </AboutInfoItem>
                <AboutInfoItem>
                  <AboutInfoLabel>Zip code:</AboutInfoLabel>
                  <AboutInfoValue>{personalInfo.zipCode}</AboutInfoValue>
                </AboutInfoItem>
                <AboutInfoItem>
                  <AboutInfoLabel>Email:</AboutInfoLabel>
                  <AboutInfoValue>{personalInfo.email}</AboutInfoValue>
                </AboutInfoItem>
                <AboutInfoItem>
                  <AboutInfoLabel>Phone:</AboutInfoLabel>
                  <AboutInfoValue>{personalInfo.phone}</AboutInfoValue>
                </AboutInfoItem>
              </AboutInfo>
            </AboutHeader>
            
            <AboutActions>
              <Button 
                as="a" 
                href="/src/assets/images/Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Download CV
              </Button>
            </AboutActions>
          </AboutContent>
        </AboutWrapper>
      </Container>
    </Section>
  )
}

export default About
