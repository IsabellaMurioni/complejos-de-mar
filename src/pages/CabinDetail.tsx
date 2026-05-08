import { useParams, Link, Navigate } from 'react-router-dom'
import { getCabinById } from '@/utils/cabins-data'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  ArrowLeft, 
  ExternalLink, 
  Home, 
  Users, 
  Bed, 
  Bath,
  Check
} from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion'

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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export function CabinDetail() {
  const { id } = useParams<{ id: string }>()
  const cabin = id ? getCabinById(id) : undefined

  if (!cabin) {
    return <Navigate to="/" replace />
  }

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Content */}
      <section className="pt-24 sm:pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to="/#cabanas" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Cabañas
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Gallery */}
            <motion.div 
              className="space-y-3 sm:space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="aspect-[4/3] rounded-2xl overflow-hidden"
                variants={itemVariants}
              >
                <motion.img
                  src={cabin.gallery[0]}
                  alt={cabin.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {cabin.gallery.slice(1).map((img, index) => (
                  <motion.div 
                    key={index} 
                    className="aspect-[4/3] rounded-xl overflow-hidden"
                    variants={itemVariants}
                  >
                    <motion.img
                      src={img}
                      alt={`${cabin.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <div className="lg:sticky lg:top-32">
              {cabin.featured && (
                <motion.span 
                  className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Destacado
                </motion.span>
              )}
              
              <AnimatedSection>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                  {cabin.name}
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {cabin.fullDescription}
                </p>
              </AnimatedSection>

              {/* Stats */}
              <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8" delay={0.2}>
                {[
                  { icon: Home, value: cabin.cabinCount, label: 'Cabañas' },
                  { icon: Users, value: cabin.guests, label: 'Huéspedes' },
                  { icon: Bed, value: cabin.bedrooms, label: 'Dormitorios' },
                  { icon: Bath, value: cabin.bathrooms, label: 'Baños' },
                ].map((stat) => (
                  <StaggerItem key={stat.label}>
                    <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Card className="p-3 sm:p-4 text-center">
                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto" />
                        <p className="text-xl sm:text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Amenities */}
              <AnimatedSection delay={0.3} className="mt-6 sm:mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Comodidades</h3>
                <motion.div 
                  className="grid grid-cols-2 gap-2.5 sm:gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {cabin.amenities.map((amenity, index) => (
                    <motion.div 
                      key={amenity} 
                      className="flex items-center gap-2 text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{amenity}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatedSection>

              {/* CTA */}
              <motion.div 
                className="mt-8 sm:mt-10 space-y-3 sm:space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a 
                  href={cabin.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" className="w-full rounded-xl text-base">
                    Ir al Sitio Oficial
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </motion.a>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/#contacto">
                    <Button size="lg" variant="outline" className="w-full rounded-xl text-base">
                      Consultar Disponibilidad
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer simple */}
      <motion.footer 
        className="py-6 sm:py-8 border-t border-border mt-12 sm:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Complejos de Mar. Todos los derechos reservados.</p>
        </div>
      </motion.footer>
    </motion.div>
  )
}
