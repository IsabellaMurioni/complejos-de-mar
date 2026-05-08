import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { CabinDetail } from '@/pages/CabinDetail'
import { Navbar } from '@/components/Navbar'

function App() {
  return (
    <BrowserRouter>
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
