import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Star, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const statsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8
    }
  }
}

const statItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-ocean-light/30 via-background to-sand/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 right-10 w-72 h-72 bg-turquoise/20 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            variants={itemVariants}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Temporada 2025 · Reservas Abiertas
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight max-w-4xl text-balance"
            variants={itemVariants}
          >
            Tu próxima escapada a la{' '}
            <span className="text-primary">costa</span> empieza acá
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
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
              <Button size="lg" className="rounded-xl text-base w-full sm:w-auto px-8">
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
              <Button size="lg" variant="outline" className="rounded-xl text-base w-full sm:w-auto px-8">
                Contactanos
              </Button>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="mt-16 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg"
            variants={statsVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3"
              variants={statItemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-bold text-foreground">5</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Complejos</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3"
              variants={statItemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-turquoise/20">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-bold text-foreground">+2000</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Huéspedes/año</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3"
              variants={statItemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sun-gold/20">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-sun-gold" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-bold text-foreground">4.9</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Rating</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
