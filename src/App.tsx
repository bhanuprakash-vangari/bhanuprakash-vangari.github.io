import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Navbar } from '@/layouts/Navbar'
import { Home } from '@/pages/Home'
import { navItems } from '@/data/portfolio'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Router>
          <ThemeToggle />
          <Navbar 
            navItems={navItems} 
            brandText="Bhanu Prakash"
            brandHref="#home-section"
          />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
