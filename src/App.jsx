import Header from './components/Header'
import Footer from './components/Footer'
import IntroductionSection from './sections/IntroductionSection'
import AboutSection from './sections/AboutSection'
import PortfolioSection from './sections/PortfolioSection'
import ContatoSection from './sections/ContatoSection'

export default function App() {
  return (
    <div>
      <Header />

      <main id="topo">
        <IntroductionSection />
        <AboutSection />
        <PortfolioSection />
        <ContatoSection />
      </main>

      <Footer />
    </div>
  )
}

