import { Container } from '@/components/Container'
import { RotatingText } from '@/components/RotatingText'
import { ChevronDownIcon } from '@/components/Icons'
import { rotatingTexts } from '@/data/portfolio'
import {
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroText,
  HeroSubheading,
  HeroTitle,
  HeroSubtitle,
  MouseIcon,
  MouseWheel,
} from './styled'

export const Hero = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about-section')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeroSection id="home-section">
      <HeroOverlay />
      <Container>
        <HeroContent>
          <HeroText>
            <HeroSubheading>Hey! I am</HeroSubheading>
            <HeroTitle>Vangari Bhanu Prakash</HeroTitle>
            <HeroSubtitle>
              I'm a{' '}
              <RotatingText
                texts={rotatingTexts}
                typeSpeed={100}
                deleteSpeed={50}
                pauseDuration={2000}
              />
            </HeroSubtitle>
          </HeroText>
        </HeroContent>
      </Container>
      
      <MouseIcon onClick={handleScrollDown} aria-label="Scroll down">
        <MouseWheel>
          <ChevronDownIcon />
        </MouseWheel>
      </MouseIcon>
    </HeroSection>
  )
}

export default Hero
