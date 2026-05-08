import {
  Wifi,
  Car,
  UtensilsCrossed,
  Waves,
  Shield,
  Sparkles,
  Wind,
  Tv,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/motion'

const amenities = [
  {
    icon: Wifi,
    title: 'WiFi de Alta Velocidad',
    description: 'Conexión estable en todas las cabañas',
  },
  {
    icon: Car,
    title: 'Estacionamiento',
    description: 'Parking privado y seguro incluido',
  },
  {
    icon: UtensilsCrossed,
    title: 'Cocina Equipada',
    description: 'Todo lo necesario para cocinar',
  },
  {
    icon: Waves,
    title: 'Acceso a la Playa',
    description: 'A pocos pasos del mar',
  },
  {
    icon: Shield,
    title: 'Seguridad 24hs',
    description: 'Vigilancia permanente del complejo',
  },
  {
    icon: Sparkles,
    title: 'Limpieza Diaria',
    description: 'Servicio de housekeeping incluido',
  },
  {
    icon: Wind,
    title: 'Aire Acondicionado',
    description: 'Climatización frío/calor',
  },
  {
    icon: Tv,
    title: 'Smart TV',
    description: 'Televisión con streaming',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export function AmenitiesSection() {
  return (
    <section id="servicios" className="py-16 sm:py-24 bg-gradient-to-b from-sand/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <AnimatedSection>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Servicios
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Todo lo que necesitas
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
              Comodidades pensadas para que solo te preocupes por disfrutar.
            </p>
          </AnimatedSection>
        </div>

        {/* Amenities Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {amenities.map((amenity) => (
            <motion.div
              key={amenity.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group p-4 sm:p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg cursor-default"
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <amenity.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </motion.div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground">{amenity.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
