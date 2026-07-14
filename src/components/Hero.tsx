import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import heroVideo from '@/assets/video/hero.mp4'

const containerVariants: Record<string, any> = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Record<string, any> = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-24"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'saturate(1.3) brightness(1.0)' }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/35" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-background to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30"
            variants={itemVariants}
          >
            <span className="text-sm font-medium text-white">
              Temporada 2026 · Reservas Abiertas
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl text-balance"
            variants={itemVariants}
          >
            Tu próxima escapada a la{' '}
            <span className="[text-shadow:0_0_24px_rgba(255,255,255,0.45)]">costa</span>{' '}
            empieza acá
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            Descubrí nuestros complejos de cabañas premium en la costa argentina.
            Confort, naturaleza y relax en un solo lugar.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            variants={itemVariants}
          >
            <motion.a
              href="#cabanas"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="text-base w-full sm:w-auto px-8 bg-white text-black hover:bg-white/90 border-0"
              >
                Explorar Cabañas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="text-base w-full sm:w-auto px-8 bg-transparent text-white border border-white hover:bg-white/10"
              >
                Contactanos
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
