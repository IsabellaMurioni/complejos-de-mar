import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Home, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface CabinCardProps {
  id: string
  name: string
  description: string
  image: string
  cabinCount: number
  featured?: boolean
}

export function CabinCard({
  id,
  name,
  description,
  image,
  cabinCount,
  featured = false,
}: CabinCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="h-full"
    >
      <Card
        className={`group overflow-hidden p-0 transition-all duration-300 hover:shadow-xl h-full flex flex-col ${
          featured ? 'ring-2 ring-primary' : ''
        }`}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          {featured && (
            <motion.div 
              className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Destacado
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-foreground">{name}</h3>
          <p className="mt-2 text-muted-foreground text-sm line-clamp-2 flex-1">
            {description}
          </p>

          {/* Cabin Count */}
          <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <Home className="w-4 h-4 text-primary flex-shrink-0" />
            <span>{cabinCount} cabañas</span>
          </div>

          {/* CTA */}
          <Link to={`/cabanas/${id}`} className="block mt-5 sm:mt-6">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full rounded-xl" variant={featured ? 'default' : 'outline'}>
                Ver Detalles
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}
