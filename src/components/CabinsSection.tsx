import { CabinCard } from '@/components/CabinCard'
import { cabins } from '@/utils/cabins-data'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/motion'

const containerVariants: Record<string, any> = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const cardVariants: Record<string, any> = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function CabinsSection() {
  return (
    <section id="cabanas" className="py-16 sm:py-24 bg-background">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <AnimatedSection>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Nuestras Cabañas
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Encontrá tu lugar ideal
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
              Cada complejo tiene su propia personalidad y estilo.
              Elegí el que mejor se adapte a tus necesidades.
            </p>
          </AnimatedSection>
        </div>

        {/* Grid — 6 cabins */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {cabins.map(cabin => (
            <motion.div key={cabin.id} variants={cardVariants}>
              <CabinCard
                id={cabin.id}
                name={cabin.name}
                subLabel={cabin.subLabel}
                description={cabin.description}
                image={cabin.image}
                location={cabin.location}
                featured={cabin.featured}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
