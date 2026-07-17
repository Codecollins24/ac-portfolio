import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'

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
        </>
      )}
    </>
  )
}

export default App
