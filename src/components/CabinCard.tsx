import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

interface CabinCardProps {
  id: string
  name: string
  subLabel?: string
  description: string
  image: string
  location: string
  featured?: boolean
}

export function CabinCard({
  id,
  name,
  subLabel,
  description,
  image,
  location,
  featured = false,
}: CabinCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="h-full"
    >
      <Card
        className={`group overflow-hidden p-0 transition-all duration-300 hover:shadow-xl h-full flex flex-col ${
          featured ? 'ring-2 ring-primary' : ''
        }`}
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          />
          {featured && (
            <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              Destacado
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">{name}</h3>
            {subLabel && (
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">
                {subLabel}
              </p>
            )}
            <p className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
              <MapPin className="w-3 h-3 shrink-0" />
              {location}
            </p>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">{description}</p>

          {/* CTA */}
          <Link to={`/cabanas/${id}`} className="block mt-5">
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="w-full rounded-xl bg-primary text-white border border-primary hover:bg-white hover:text-foreground hover:border-border transition-colors"
              >
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
