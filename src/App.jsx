import Header from './components/Header'
import Footer from './components/Footer'
import IntroductionSection from './sections/IntroductionSection'
import AboutSection from './sections/AboutSection'
import PortfolioSection from './sections/portfolio/PortfolioSection'
import ContactSection from './sections/ContactSection'
import ErrorPage from './pages/ErrorPage'
import Loader from './components/Loader'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { useRef, useEffect, useState } from 'react'
import { motion } from "framer-motion"
import theme from './theme'
import getGeneralInfo from './api/general'

export default function App() {
  const [generalInfo, setGeneralInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const aboutSectionRef = useRef(null)

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getGeneralInfo();
        setGeneralInfo(data);
      } catch (error) {
        console.error(error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <Loader />
  }

  if (hasError) {
    return <ErrorPage />
  }

  const logoUrl = generalInfo[0]
  return (
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header logoUrl={logoUrl} />

        <main>
          <IntroductionSection 
            data={generalInfo}
          />
          <AboutSection 
            data={generalInfo}
          />
          <PortfolioSection />
          <ContactSection />
        </main>

        <Footer />
      </ThemeProvider>
    </motion.div>
  )
}

