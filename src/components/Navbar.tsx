import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Waves, ChevronDown, Home } from 'lucide-react'
import { cabins } from '@/utils/cabins-data'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [cabinDropdownOpen, setCabinDropdownOpen] = useState(false)
  const [mobileCabinOpen, setMobileCabinOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCabinDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setCabinDropdownOpen(false)
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/' + href)
      }
    }
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mx-3 sm:mx-4 mt-3 sm:mt-4 md:mx-8">
        <nav className={`flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-xl border border-border/50 rounded-2xl transition-all duration-300 ${
          scrolled ? 'bg-card/90 shadow-xl' : 'bg-card/80 shadow-lg'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <motion.div 
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Waves className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </motion.div>
            <span className="text-lg sm:text-xl font-bold text-foreground hidden xs:inline">
              Complejos de Mar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <motion.button
              onClick={() => handleNavClick('#inicio')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Inicio
            </motion.button>

            {/* Cabanas Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setCabinDropdownOpen(!cabinDropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Cabañas
                <motion.span
                  animate={{ rotate: cabinDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {cabinDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-0 mt-2 w-56 bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl overflow-hidden"
                  >
                    <div className="py-2">
                      <motion.button
                        onClick={() => {
                          setCabinDropdownOpen(false)
                          handleNavClick('#cabanas')
                        }}
                        className="w-full px-4 py-2.5 text-left text-sm font-medium text-foreground hover:bg-muted/50 transition-colors flex items-center gap-2"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Home className="w-4 h-4 text-primary" />
                        Ver Todos
                      </motion.button>
                      <div className="h-px bg-border mx-4 my-1" />
                      {cabins.map((cabin, index) => (
                        <motion.div
                          key={cabin.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={`/cabanas/${cabin.id}`}
                            onClick={() => setCabinDropdownOpen(false)}
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                          >
                            <motion.span 
                              className="flex items-center justify-between"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              {cabin.name}
                              <span className="text-xs text-muted-foreground">
                                {cabin.cabinCount} cab.
                              </span>
                            </motion.span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              onClick={() => handleNavClick('#servicios')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Servicios
            </motion.button>
            <motion.button
              onClick={() => handleNavClick('#contacto')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Contacto
            </motion.button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="rounded-xl"
                onClick={() => handleNavClick('#contacto')}
              >
                Reservar Ahora
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden mt-2 p-5 sm:p-6 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg overflow-hidden max-h-[calc(100vh-100px)] overflow-y-auto"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div 
                className="flex flex-col gap-1"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                  }
                }}
              >
                <motion.button
                  onClick={() => handleNavClick('#inicio')}
                  className="text-base font-medium text-foreground py-3 px-3 text-left rounded-xl hover:bg-muted/50 transition-colors"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  Inicio
                </motion.button>
                
                {/* Mobile Cabanas */}
                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                  <button
                    onClick={() => setMobileCabinOpen(!mobileCabinOpen)}
                    className="flex items-center justify-between w-full text-base font-medium text-foreground py-3 px-3 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    Cabañas
                    <motion.span
                      animate={{ rotate: mobileCabinOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileCabinOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-1 space-y-1">
                          <button
                            onClick={() => handleNavClick('#cabanas')}
                            className="flex items-center gap-2 w-full py-2.5 px-3 text-sm font-medium text-primary rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <Home className="w-4 h-4" />
                            Ver Todos
                          </button>
                          {cabins.map((cabin) => (
                            <Link
                              key={cabin.id}
                              to={`/cabanas/${cabin.id}`}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between py-2.5 px-3 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              {cabin.name}
                              <span className="text-xs text-muted-foreground/60">{cabin.cabinCount} cab.</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.button
                  onClick={() => handleNavClick('#servicios')}
                  className="text-base font-medium text-foreground py-3 px-3 text-left rounded-xl hover:bg-muted/50 transition-colors"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  Servicios
                </motion.button>

                <motion.button
                  onClick={() => handleNavClick('#contacto')}
                  className="text-base font-medium text-foreground py-3 px-3 text-left rounded-xl hover:bg-muted/50 transition-colors"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  Contacto
                </motion.button>

                {/* Mobile CTA */}
                <motion.div 
                  className="pt-3 mt-2 border-t border-border/50"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <Button 
                    className="w-full rounded-xl" 
                    size="lg"
                    onClick={() => handleNavClick('#contacto')}
                  >
                    Reservar Ahora
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
