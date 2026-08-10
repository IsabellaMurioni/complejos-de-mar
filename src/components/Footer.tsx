import { useState } from 'react'
import { Waves, Instagram, Mail, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
const idigitalLogo = '/idigital-build.png'

const footerLinks = {
  cabanas: [
    { label: 'Mimmo I',          href: '/cabanas/mimmo-i' },
    { label: 'Mimmo II',         href: '/cabanas/mimmo-ii' },
    { label: 'Casas Azahar',     href: '/cabanas/azahar' },
    { label: 'Los Amigos',       href: '/cabanas/los-amigos' },
    { label: 'Cabañas VIP',      href: '/cabanas/cabanas-vip' },
    { label: 'Chacras del Mar',  href: '/cabanas/chacras' },
  ],
  informacion: [
    { label: 'Sobre Nosotros',      href: '#nosotros' },
    { label: 'Preguntas Frecuentes', href: '#faq' },
  ],
  contacto: [
    { label: '+54 223 456-7890',          href: 'tel:+542234567890' },
    { label: 'info@complejosdelmar.com',  href: 'mailto:info@complejosdelmar.com' },
    { label: 'Costa Atlántica, Argentina', href: '#' },
  ],
}

const socialLinks = {
  whatsapp: [
    { complex: 'Mimmo I',          link: 'https://wa.me/5491167573390' },
    { complex: 'Mimmo II',         link: 'https://wa.me/5491167573390' },
    { complex: 'Casas Azahar',     link: 'https://wa.me/5491128350180' },
    { complex: 'Los Amigos',       link: 'https://wa.me/5491158151985' },
    { complex: 'Cabañas VIP',      link: 'https://wa.me/5491150995700' },
    { complex: 'Chacras del Mar',  link: 'https://wa.me/5491123912184' },
  ],
  instagram: [
    { complex: 'Mimmo',                    link: 'https://instagram.com/cabanas.mimmo' },
    { complex: '@azaharmardelaspampas',     link: 'https://instagram.com/azaharmardelaspampas' },
    { complex: '@prosperidadazahar',        link: 'https://instagram.com/prosperidadazahar' },
    { complex: 'Los Amigos',               link: 'https://instagram.com/cabanas_losamigos' },
    { complex: 'Cabañas VIP',             link: 'https://instagram.com/cabanas.vip' },
    { complex: 'Chacras del Mar',          link: 'https://instagram.com/chacras_de_mar' },
  ],
  email: [
    { complex: 'Mimmo',           link: 'mailto:cabaniasmimmo@gmail.com' },
    { complex: 'Casas Azahar',    link: 'mailto:prosperidad.azahar@gmail.com' },
    { complex: 'Cabañas VIP',     link: 'mailto:ventashotelesdelacosta@hotmail.com' },
    { complex: 'Chacras del Mar', link: 'mailto:info@chacrasdemar.com.ar' },
  ],
}

const containerVariants: Record<string, any> = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants: Record<string, any> = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
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
        className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-white/55 hover:text-white hover:border-white/35 hover:bg-white/5 transition-all duration-200"
        aria-label={label}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08, y: -1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Icon className="w-4 h-4" />
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
    <footer style={{ backgroundColor: 'oklch(0.26 0.120 262)' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Main content grid */}
        <motion.div
          className="pt-14 sm:pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Brand */}
          <motion.div className="sm:col-span-2 lg:col-span-1" variants={itemVariants}>
            <a href="#inicio" className="inline-flex items-center gap-2.5">
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
                <Waves className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-base font-bold text-white tracking-tight">Complejos del Mar</span>
            </a>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-68">
              Tu destino para unas vacaciones inolvidables en la costa argentina.
              Cabañas premium con todas las comodidades.
            </p>
            <div className="flex gap-2 mt-6">
              <SocialButton icon={MessageCircle} label="WhatsApp" links={socialLinks.whatsapp} />
              <SocialButton icon={Instagram} label="Instagram" links={socialLinks.instagram} />
              <SocialButton icon={Mail} label="Email" links={socialLinks.email} />
            </div>
          </motion.div>

          {/* Cabañas */}
          <motion.div variants={itemVariants}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/35 mb-5">
              Cabañas
            </p>
            <ul className="space-y-3">
              {footerLinks.cabanas.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-white/58 hover:text-white transition-colors duration-200"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Información */}
          <motion.div variants={itemVariants}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/35 mb-5">
              Información
            </p>
            <ul className="space-y-3">
              {footerLinks.informacion.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-white/58 hover:text-white transition-colors duration-200"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div variants={itemVariants}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/35 mb-5">
              Contacto
            </p>
            <ul className="space-y-3">
              {footerLinks.contacto.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-white/58 hover:text-white transition-colors duration-200 break-all sm:break-normal"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom bar */}
        <div className="py-5 flex items-center justify-between">
          <p className="text-xs text-white/35 leading-none">
            &copy; {new Date().getFullYear()} Complejos del Mar. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-white/35 leading-none">Developed and designed by</span>
            <img
              src={idigitalLogo}
              alt="idigital.build"
              className="h-20 w-auto object-contain block"
              style={{ filter: 'grayscale(1) invert(1) brightness(15)', opacity: 0.9 }}
            />
          </div>
        </div>

      </div>
    </footer>
  )
}
