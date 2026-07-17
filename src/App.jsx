import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import { useTheme } from './hooks/useTheme'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      {!isLoading && (
        <main>
          <h1 className="gradient-text">Ainomugisha Collins</h1>
          <p>
            Theme system and loader are live — sections coming in the next
            phases.
          </p>
          <button className="btn btn-secondary" onClick={toggleTheme}>
            Toggle theme (currently {theme})
          </button>
        </main>
      )}
    </>
  )
}

export default App
