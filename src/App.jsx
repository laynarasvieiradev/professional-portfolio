import Header from './components/Header'
import Footer from './components/Footer'
import IntroductionSection from './sections/IntroductionSection'
import AboutSection from './sections/AboutSection'
import PortfolioSection from './sections/portfolio/PortfolioSection'
import ContactSection from './sections/ContactSection'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { useRef } from 'react'
import theme from './theme'

export default function App() {
  const aboutSectionRef = useRef(null)
  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />

      <main>
        <IntroductionSection onScrollToAbout={scrollToAbout} />
        <AboutSection ref={aboutSectionRef} />
        <PortfolioSection />
        <ContactSection />
      </main>

      <Footer />
    </ThemeProvider>
  )
}

