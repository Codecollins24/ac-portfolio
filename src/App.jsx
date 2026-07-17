import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Achievements from './components/Achievements'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <Stats />
          <About />
          <Services />
          <TechStack />
          <Projects />
          <Achievements />
        </>
      )}
    </>
  )
}

export default App
