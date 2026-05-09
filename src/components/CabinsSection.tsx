import { CabinCard } from '@/components/CabinCard'
import { cabins } from '@/utils/cabins-data'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/motion'

const containerVariants: Record<string, any> = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
}

const cardVariants: Record<string, any> = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export function CabinsSection() {
  const topRow = cabins.slice(0, 3)
  const bottomRow = cabins.slice(3, 5)

  return (
    <section id="cabanas" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* Top Row - 3 cabins */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {topRow.map((cabin) => (
            <motion.div key={cabin.id} variants={cardVariants}>
              <CabinCard
                id={cabin.id}
                name={cabin.name}
                description={cabin.description}
                image={cabin.image}
                cabinCount={cabin.cabinCount}
                featured={cabin.featured}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Row - 2 cabins centered */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mt-6 sm:mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {bottomRow.map((cabin) => (
            <motion.div 
              key={cabin.id} 
              variants={cardVariants}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
            >
              <CabinCard
                id={cabin.id}
                name={cabin.name}
                description={cabin.description}
                image={cabin.image}
                cabinCount={cabin.cabinCount}
                featured={cabin.featured}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
