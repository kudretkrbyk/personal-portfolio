import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ScrollProvider } from './context/ScrollContext'
import AnimatedSection from './components/AnimatedSection'

const App = () => {
  return (
    <ScrollProvider>
      <Navbar />
      <main className="bg-dark">
        <Hero />
        <AnimatedSection>
          <Features />
        </AnimatedSection>
        <AnimatedSection>
          <Portfolio />
        </AnimatedSection>
        <AnimatedSection>
          <Resume />
        </AnimatedSection>
        <AnimatedSection>
          <Blog />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </ScrollProvider>
  )
}

export default App
