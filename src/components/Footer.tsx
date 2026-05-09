import { useState } from 'react'
import { Waves, Instagram, Mail, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const footerLinks = {
  cabanas: [
    { label: 'Mimmo II', href: '/cabanas/mimmo-ii' },
    { label: 'Los Amigos', href: '/cabanas/los-amigos' },
    { label: 'Azahar', href: '/cabanas/azahar' },
    { label: 'Cabañas VIP', href: '/cabanas/cabanas-vip' },
    { label: 'Chacras del Mar', href: '/cabanas/chacras-del-mar' },
  ],
  informacion: [
    { label: 'Sobre Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Preguntas Frecuentes', href: '#faq' },
  ],
  contacto: [
    { label: '+54 223 456-7890', href: 'tel:+542234567890' },
    { label: 'info@complejosdemar.com', href: 'mailto:info@complejosdemar.com' },
    { label: 'Costa Atlántica, Argentina', href: '#' },
  ],
}

const socialLinks = {
  whatsapp: [
    { complex: 'Mimmo II', link: 'https://wa.me/542234567890' },
    { complex: 'Los Amigos', link: 'https://wa.me/542234567891' },
    { complex: 'Azahar', link: 'https://wa.me/542234567892' },
    { complex: 'Cabañas VIP', link: 'https://wa.me/542234567893' },
    { complex: 'Chacras del Mar', link: 'https://wa.me/542234567894' },
  ],
  instagram: [
    { complex: 'Mimmo II', link: 'https://instagram.com/mimmoii' },
    { complex: 'Los Amigos', link: 'https://instagram.com/losamigos' },
    { complex: 'Azahar', link: 'https://instagram.com/azahar' },
    { complex: 'Cabañas VIP', link: 'https://instagram.com/cabanasvip' },
    { complex: 'Chacras del Mar', link: 'https://instagram.com/chacrasdelmar' },
  ],
  email: [
    { complex: 'Mimmo II', link: 'mailto:mimmoii@complejosdemar.com' },
    { complex: 'Los Amigos', link: 'mailto:losamigos@complejosdemar.com' },
    { complex: 'Azahar', link: 'mailto:azahar@complejosdemar.com' },
    { complex: 'Cabañas VIP', link: 'mailto:vip@complejosdemar.com' },
    { complex: 'Chacras del Mar', link: 'mailto:chacras@complejosdemar.com' },
  ],
}

const containerVariants: Record<string, any> = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Record<string, any> = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
}

interface SocialButtonProps {
  icon: React.ElementType
  label: string
  links: { complex: string; link: string }[]
}

function SocialButton({ icon: Icon, label, links }: SocialButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
        aria-label={label}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Icon className="w-5 h-5" />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-full left-0 sm:left-1/2 sm:-translate-x-1/2 mb-3 w-52 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50"
          >
            <div className="py-2">
              <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {label}
              </p>
              {links.map((item) => (
                <a
                  key={item.complex}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
                >
                  {item.complex}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <motion.div className="col-span-2 sm:col-span-2 lg:col-span-1" variants={itemVariants}>
            <a href="#inicio" className="flex items-center gap-2">
              <motion.div 
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Waves className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <span className="text-xl font-bold">Complejos de Mar</span>
            </a>
            <p className="mt-4 text-background/70 text-sm leading-relaxed max-w-xs">
              Tu destino para unas vacaciones inolvidables en la costa argentina. 
              Cabañas premium con todas las comodidades.
            </p>
            {/* Social Links with Dropdowns */}
            <div className="flex gap-3 mt-6">
              <SocialButton 
                icon={MessageCircle} 
                label="WhatsApp" 
                links={socialLinks.whatsapp} 
              />
              <SocialButton 
                icon={Instagram} 
                label="Instagram" 
                links={socialLinks.instagram} 
              />
              <SocialButton 
                icon={Mail} 
                label="Email" 
                links={socialLinks.email} 
              />
            </div>
          </motion.div>

          {/* Cabañas */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-base sm:text-lg mb-4">Cabañas</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.cabanas.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Información */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-base sm:text-lg mb-4">Información</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.informacion.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
              <li className="pt-3 sm:pt-4">
                <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contacto</h4>
                <ul className="space-y-2.5 sm:space-y-3">
                  {footerLinks.contacto.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        className="text-background/70 hover:text-background transition-colors text-sm break-all sm:break-normal"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
          variants={itemVariants}
        >
          <p className="text-background/50 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Complejos de Mar. Todos los derechos reservados.
          </p>
          <p className="text-background/50 text-xs sm:text-sm">
            Hecho con amor en la Costa Atlántica
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
