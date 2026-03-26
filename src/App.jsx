import Header from './components/Header'
import Footer from './components/Footer'
import IntroductionSection from './sections/IntroductionSection'
import AboutSection from './sections/AboutSection'
import PortfolioSection from './sections/portfolio/PortfolioSection'
import ContatoSection from './sections/ContatoSection'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />

      <main>
        <IntroductionSection />
        <AboutSection />
        <PortfolioSection />
        <ContatoSection />
      </main>

      <Footer />
    </ThemeProvider>
  )
}

