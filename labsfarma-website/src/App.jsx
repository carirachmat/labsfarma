import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Facilities from './components/Facilities'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Facilities />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App

