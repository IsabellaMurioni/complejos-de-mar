import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { CabinDetail } from '@/pages/CabinDetail'
import { Navbar } from '@/components/Navbar'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabanas/:id" element={<CabinDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
