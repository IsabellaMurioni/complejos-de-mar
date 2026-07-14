import { Sun, Umbrella, Heart } from 'lucide-react'
import pic1 from '@/assets/pics/1.jpg'
import pic2 from '@/assets/pics/2.jpg'
import pic3 from '@/assets/pics/3.jpg'
import pic4 from '@/assets/pics/4.jpg'
import { motion } from 'framer-motion'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion'

const features = [
  {
    icon: Sun,
    title: 'Ubicación Privilegiada',
    description: 'A pasos de la playa, con acceso directo y vistas increíbles al mar.',
  },
  {
    icon: Umbrella,
    title: 'Relax Total',
    description: 'Espacios diseñados para tu descanso con todas las comodidades.',
  },
  {
    icon: Heart,
    title: 'Atención Personalizada',
    description: 'Un equipo dedicado a hacer de tu estadía una experiencia única.',
  },
]

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-linear-to-b from-background to-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Images Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4" delay={0.2}>
            <div className="space-y-3 sm:space-y-4">
              <StaggerItem>
                <motion.div
                  className="aspect-4/5 rounded-2xl bg-ocean-light/20 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={pic1}
                    alt="Cabaña frente al mar"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  className="aspect-square rounded-2xl bg-sand/60 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={pic2}
                    alt="Piscina del complejo"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </StaggerItem>
            </div>
            <div className="pt-6 sm:pt-8 space-y-3 sm:space-y-4">
              <StaggerItem>
                <motion.div
                  className="aspect-square rounded-2xl bg-turquoise/20 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={pic3}
                    alt="Playa"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  className="aspect-4/5 rounded-2xl bg-sand/40 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={pic4}
                    alt="Interior de cabaña"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* Content */}
          <div>
            <AnimatedSection>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Sobre Nosotros
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                Más de 15 años creando experiencias inolvidables
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                En Complejos de Mar nos dedicamos a ofrecer alojamientos de calidad 
                superior en los mejores destinos de la costa argentina. Cada uno de 
                nuestros complejos ha sido diseñado pensando en tu comodidad y bienestar.
              </p>
            </AnimatedSection>

            <StaggerContainer className="mt-8 sm:mt-10 space-y-5 sm:space-y-6" delay={0.3}>
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <motion.div 
                    className="flex gap-4"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-primary">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground mt-0.5">{feature.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
