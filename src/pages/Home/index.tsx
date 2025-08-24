import { Helmet } from 'react-helmet-async'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Resume } from '@/components/Resume'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vangari Bhanu Prakash - Portfolio</title>
        <meta name="description" content="Software Developer in Day, Photographer by Night. React JS / React Native Developer, Web Designer, Graphic Designer, and Photographer." />
        <meta property="og:title" content="Vangari Bhanu Prakash - Portfolio" />
        <meta property="og:description" content="Software Developer in Day, Photographer by Night" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bhanuprakash-vangari.github.io/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vangari Bhanu Prakash - Portfolio" />
        <meta name="twitter:description" content="Software Developer in Day, Photographer by Night" />
      </Helmet>
      
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
