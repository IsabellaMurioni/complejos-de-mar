import { useState, useCallback, useEffect, type ElementType } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Wifi,
  Wind,
  Flame,
  Car,
  Bed,
  BedDouble,
  UtensilsCrossed,
  TreePine,
  Home,
  Users,
  Droplets,
  Maximize2,
  Bath,
  Heart,
  Instagram,
  Mail,
  Globe,
  MapPin,
  Star,
  ArrowLeft,
  Clock,
  Key,
  Info,
  Gift,
  CreditCard,
  Shield,
  AlertCircle,
  CheckCircle,
  Calendar,
} from 'lucide-react'
import { getCabinById } from '@/utils/cabins-data'
import type { Unit, InfoCardIcon, BookingCardIcon } from '@/utils/cabins-data'
import { AnimatedSection } from '@/components/motion'
import { ComplexContactForm } from '@/components/ComplexContactForm'

// ── SVG icons not in lucide ──────────────────────────────────────────────────

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.79a4.85 4.85 0 01-1.02-.1z" />
    </svg>
  )
}

// ── Amenity icons ────────────────────────────────────────────────────────────

const amenityIcons: Record<string, ElementType> = {
  'WiFi': Wifi,
  'WiFi Premium': Wifi,
  'Aire Acondicionado': Wind,
  'Calefacción a Leña': Flame,
  'Parrilla': UtensilsCrossed,
  'Parrilla Individual': UtensilsCrossed,
  'Parrilla Compartida': UtensilsCrossed,
  'Estacionamiento': Car,
  'Sector de estacionamiento': Car,
  'Estacionamiento Doble': Car,
  'Cocina Equipada': Home,
  'Ropa de cama': Bed,
  'Jardín Privado': TreePine,
  'Quincho': Home,
  'Quincho Compartido': Home,
  'Zona de Juegos': Star,
  'Pileta Compartida': Droplets,
  'Jacuzzi Privado': Droplets,
  'Minibar': UtensilsCrossed,
  'Terraza': TreePine,
  'Terreno Amplio': Maximize2,
  'Vista al Mar': Globe,
  'Vista Panorámica': Globe,
  'Servicio de Limpieza': Home,
  'Spa': Bath,
  'Sauna': Bath,
  'Solarium': Maximize2,
  'Guardavidas': Users,
  'Pet Friendly': Heart,
  'Vajilla completa': UtensilsCrossed,
  'Cafetera eléctrica': UtensilsCrossed,
  'Tostadora': UtensilsCrossed,
  'Pava': UtensilsCrossed,
  'Microondas': UtensilsCrossed,
  'Pileta Climatizada': Droplets,
  'Blanquería': Bed,
  'WiFi por unidad': Wifi,
  'WiFi (complejo y unidad)': Wifi,
  'Spa & Sauna': Bath,
  'Fabricadora de hielo': Droplets,
  'Cava de vinos': UtensilsCrossed,
  'Lavarropas': Wind,
}

// ── Info & Booking card icons ────────────────────────────────────────────────

const infoCardIcons: Record<InfoCardIcon, ElementType> = {
  clock:    Clock,
  pets:     Heart,
  distance: MapPin,
  linen:    Bed,
  family:   Users,
  info:     Info,
  access:   Key,
  pool:     Droplets,
}

const bookingCardIcons: Record<BookingCardIcon, ElementType> = {
  deposit:  Shield,
  balance:  CheckCircle,
  cancel:   AlertCircle,
  minstay:  Calendar,
  payment:  CreditCard,
  info:     Info,
}

// ── Internal components ──────────────────────────────────────────────────────

function StatCard({ icon: Icon, value, label, className }: { icon: ElementType; value: string; label: string; className?: string }) {
  return (
    <div className={`rounded-xl border border-border bg-card p-3 sm:p-5 flex flex-col items-center gap-2 sm:gap-2.5 text-center shadow-sm shrink-0${className ? ` ${className}` : ''}`}>
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
      </div>
      <span className="text-base sm:text-2xl font-bold text-foreground leading-none">{value}</span>
      <span className="text-[9px] sm:text-[11px] font-semibold text-muted-foreground uppercase tracking-wider leading-tight">{label}</span>
    </div>
  )
}

function SectionDivider() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="h-px bg-border/50" />
    </div>
  )
}

function generateUnitDescription(unit: Unit): string {
  const bedrooms = Math.max(0, unit.rooms - 1)
  const attrs: string[] = []
  if (bedrooms > 0) attrs.push(`${bedrooms} ${bedrooms === 1 ? 'dormitorio' : 'dormitorios'}`)
  if (unit.beds > 0) attrs.push(`${unit.beds} ${unit.beds === 1 ? 'cama' : 'camas'}`)
  if (unit.bathrooms != null && unit.bathrooms > 0) {
    attrs.push(`${unit.bathrooms} ${unit.bathrooms === 1 ? 'baño' : 'baños'}`)
  }
  const guestStr = `Para hasta ${unit.guests} ${unit.guests === 1 ? 'persona' : 'personas'}`
  let sentence = guestStr
  if (attrs.length > 0) {
    const last = attrs.pop()!
    sentence += attrs.length > 0
      ? `, con ${attrs.join(', ')} y ${last}`
      : `, con ${last}`
  }
  if (unit.sqm) sentence += `, en ${unit.sqm} m²`
  return sentence + '.'
}

interface CarouselProps {
  images: string[]
  alt: string
  unitName?: string
  unitDescription?: string
  onConsultar?: () => void
}

function Carousel({ images, alt, unitName, unitDescription, onConsultar }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const prev = useCallback(() => {
    setDirection(-1)
    setIndex(i => (i - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => {
    setDirection(1)
    setIndex(i => (i + 1) % images.length)
  }, [images.length])

  if (images.length === 0) {
    return (
      <div className="aspect-video w-full rounded-2xl bg-muted flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Fotos próximamente</p>
      </div>
    )
  }

  const showOverlay = !!(unitName || onConsultar)

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-4/5 sm:aspect-video bg-muted shadow-md group">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={{
            enter: (d: number) => ({ x: d > 0 ? '6%' : '-6%', opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d > 0 ? '-6%' : '6%', opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 scale-[1.05] sm:scale-100"
        >
          <img
            src={images[index]}
            alt={`${alt} — foto ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient for overlay legibility */}
      {showOverlay && (
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 sm:from-black/65 sm:via-black/15 to-transparent pointer-events-none" />
      )}

      {/* Info overlay — bottom-left, above the pagination dots */}
      {showOverlay && (
        <div className="absolute left-5 sm:left-10 bottom-10 z-10 max-w-[65%] sm:max-w-[56%]">
          {unitName && (
            <h3 className="text-sm sm:text-[15px] font-bold text-white leading-tight mb-1.5 drop-shadow-sm">
              {unitName}
            </h3>
          )}
          {unitDescription && (
            <p className="text-xs text-white/80 leading-relaxed mb-3">
              {unitDescription}
            </p>
          )}
          {onConsultar && (
            <motion.button
              type="button"
              onClick={(e) => { e.stopPropagation(); onConsultar() }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 rounded-lg text-white text-[11px] font-medium transition-all cursor-pointer"
            >
              Consultar disponibilidad
              <ChevronRight className="w-3 h-3 shrink-0" />
            </motion.button>
          )}
        </div>
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-black/60 z-20"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-black/60 z-20"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? 'bg-white scale-125' : 'bg-white/50'}`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs z-10">
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}

function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case 'instagram': return <Instagram className="w-5 h-5" />
    case 'whatsapp':  return <WhatsAppIcon className="w-5 h-5" />
    case 'facebook':  return <FacebookIcon className="w-5 h-5" />
    case 'website':   return <Globe className="w-5 h-5" />
    case 'email':     return <Mail className="w-5 h-5" />
    case 'map':       return <MapPin className="w-5 h-5" />
    case 'tiktok':    return <TikTokIcon className="w-5 h-5" />
    default:          return <Globe className="w-5 h-5" />
  }
}

// ── Page ─────────────────────────────────────────────────────────────────────

export function CabinDetail() {
  const { id } = useParams<{ id: string }>()
  const cabin = id ? getCabinById(id) : undefined

  const [activeUnitId, setActiveUnitId] = useState(() => cabin?.units[0]?.id ?? '')

  // Reset active unit when navigating between complexes
  useEffect(() => {
    if (cabin) {
      setActiveUnitId(cabin.units[0]?.id ?? '')
    }
  }, [id])

  if (!cabin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <h1 className="text-2xl font-bold text-foreground">Complejo no encontrado</h1>
        <p className="text-muted-foreground">El complejo que buscás no existe o fue removido.</p>
        <Link to="/" className="text-primary hover:underline text-sm font-medium">
          Volver al inicio
        </Link>
      </div>
    )
  }

  const activeUnit = cabin.units.find(u => u.id === activeUnitId) ?? cabin.units[0]
  const bedrooms = activeUnit ? Math.max(0, activeUnit.rooms - 1) : 0
  const waNumber = cabin.contactItems.find(c => c.type === 'whatsapp')?.url?.replace('https://wa.me/', '') ?? ''

  const [cabinConsulta, setCabinConsulta] = useState<{ name: string; ts: number } | null>(null)

  function handleConsultarFromCarousel(unitName: string) {
    setCabinConsulta({ name: unitName, ts: Date.now() })
    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen flex flex-col overflow-hidden">
        {cabin.video ? (
          <video
            key={cabin.id}
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={cabin.videoScale ? { transform: `scale(${cabin.videoScale})`, transformOrigin: 'center' } : undefined}
          >
            <source src={cabin.video} type="video/mp4" />
          </video>
        ) : (
          <img
            key={cabin.id}
            src={cabin.image}
            alt={cabin.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-black/15" />

        {/* Back button */}
        <div className="absolute top-6 left-4 sm:left-8 z-10">
          <Link to="/">
            <motion.div
              whileHover={{ x: -3 }}
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Todos los complejos
            </motion.div>
          </Link>
        </div>

        {/* Centered content */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
              {cabin.subLabel}
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-5">
              {cabin.name}
            </h1>
            {cabin.tagline && (
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
                {cabin.tagline}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                  El complejo
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-tight">
                  Sobre {cabin.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {cabin.fullDescription}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>{cabin.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-amber-500 font-medium">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{cabin.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-4/3 lg:aspect-auto lg:h-64">
                <iframe
                  src={cabin.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${cabin.name}`}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider />

      {/* ── Accommodation selector + Gallery + Stats ──────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block text-center">
              Alojamientos
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 leading-tight text-center">
              Elegí tu unidad
            </h2>
          </AnimatedSection>

          {cabin.units.length > 1 && (
            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-8">
                {cabin.units.map(unit => (
                  <motion.button
                    key={unit.id}
                    onClick={() => setActiveUnitId(unit.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-[calc(50%-4px)] sm:w-auto px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      unit.id === activeUnitId
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-card border border-border text-foreground hover:border-primary/40'
                    }`}
                  >
                    {unit.name}
                  </motion.button>
                ))}
              </div>
            </AnimatedSection>
          )}

          <AnimatePresence mode="wait">
            {activeUnit && (
              <motion.div
                key={activeUnit.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Carousel
                  images={activeUnit.gallery}
                  alt={activeUnit.name}
                  unitName={activeUnit.name}
                  unitDescription={activeUnit.description ?? generateUnitDescription(activeUnit)}
                  onConsultar={() => handleConsultarFromCarousel(activeUnit.name)}
                />

                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6">
                  {activeUnit.sqm && (
                    <StatCard icon={Maximize2} value={`${activeUnit.sqm} m²`} label="Superficie" className="w-[calc(33.333%-5.33px)] sm:w-[calc(33.333%-10.67px)] lg:w-[calc(20%-12.8px)]" />
                  )}
                  <StatCard
                    icon={Users}
                    value={activeUnit.guestsLabel ?? `${activeUnit.guests}`}
                    label={activeUnit.guests === 1 && !activeUnit.guestsLabel ? 'Huésped' : 'Huéspedes'}
                    className="w-[calc(33.333%-5.33px)] sm:w-[calc(33.333%-10.67px)] lg:w-[calc(20%-12.8px)]"
                  />
                  {bedrooms > 0 && (
                    <StatCard
                      icon={BedDouble}
                      value={`${bedrooms}`}
                      label={bedrooms === 1 ? 'Dormitorio' : 'Dormitorios'}
                      className="w-[calc(33.333%-5.33px)] sm:w-[calc(33.333%-10.67px)] lg:w-[calc(20%-12.8px)]"
                    />
                  )}
                  <StatCard
                    icon={Bed}
                    value={`${activeUnit.beds}`}
                    label={activeUnit.beds === 1 ? 'Cama' : 'Camas'}
                    className="w-[calc(33.333%-5.33px)] sm:w-[calc(33.333%-10.67px)] lg:w-[calc(20%-12.8px)]"
                  />
                  {activeUnit.bathrooms != null && (
                    <StatCard
                      icon={Bath}
                      value={`${activeUnit.bathrooms}`}
                      label={activeUnit.bathrooms === 1 ? 'Baño' : 'Baños'}
                      className="w-[calc(33.333%-5.33px)] sm:w-[calc(33.333%-10.67px)] lg:w-[calc(20%-12.8px)]"
                    />
                  )}
                </div>

                {activeUnit.amenities && activeUnit.amenities.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-2xl mx-auto">
                    {activeUnit.amenities.map(amenity => {
                      const Icon = amenityIcons[amenity] ?? Home
                      return (
                        <div key={amenity} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border text-sm">
                          <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-foreground">{amenity}</span>
                        </div>
                      )
                    })}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <SectionDivider />

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block text-center">
              Servicios
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 leading-tight text-center">
              Lo que incluye el complejo
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
              {cabin.amenities.map(amenity => {
                const Icon = amenityIcons[amenity] ?? Home
                return (
                  <div
                    key={amenity}
                    className="w-[calc(50%-6px)] sm:w-[calc(33.333%-10.667px)] flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{amenity}</span>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Important Information ────────────────────────────────────────── */}
      {cabin.infoCards && cabin.infoCards.length > 0 && (
        <>
          <SectionDivider />
          <section className="py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                  Antes de llegar
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 leading-tight">
                  Información importante
                </h2>
                <div className="flex flex-wrap gap-4">
                  {cabin.infoCards.map((card, i) => {
                    const Icon = infoCardIcons[card.icon] ?? Info
                    return (
                      <div key={i} className="w-full sm:w-[calc(50%-8px)] flex gap-4 p-5 rounded-2xl bg-card border border-border">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1.5">{card.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </AnimatedSection>
            </div>
          </section>
        </>
      )}

      {/* ── Special Offers ────────────────────────────────────────────────── */}
      {cabin.offer && (
        <>
          <SectionDivider />
          <section className="py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                  <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
                  <div className="flex items-start gap-5 sm:gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
                      <Gift className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      {cabin.offer.badge && (
                        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                          {cabin.offer.badge}
                        </span>
                      )}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 leading-tight">
                        {cabin.offer.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {cabin.offer.body}
                      </p>
                      {cabin.offer.note && (
                        <p className="mt-3 text-xs text-muted-foreground/65 italic">
                          * {cabin.offer.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </>
      )}

      {/* ── Booking & Payment Information ─────────────────────────────────── */}
      {cabin.bookingCards && cabin.bookingCards.length > 0 && (
        <>
          <SectionDivider />
          <section className="py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                  Reservas
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 leading-tight">
                  Información de pago y reserva
                </h2>
                <div className="flex flex-wrap justify-center gap-5">
                  {cabin.bookingCards.map((card, i) => {
                    const Icon = bookingCardIcons[card.icon] ?? Info
                    return (
                      <div key={i} className="w-full sm:w-[calc(50%-10px)] flex gap-5 p-6 rounded-2xl bg-card border border-border">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">{card.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </AnimatedSection>
            </div>
          </section>
        </>
      )}

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section id="contacto" className="py-20 sm:py-28 px-4 sm:px-6" style={{ backgroundColor: 'oklch(0.975 0.006 250)' }}>
        <div className="max-w-2xl mx-auto">
          <ComplexContactForm whatsapp={waNumber} complexName={cabin.name} units={cabin.units} preSelectedCabin={cabinConsulta} />
        </div>
      </section>

      {/* ── Social ───────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="rounded-2xl px-6 py-5 sm:px-8 sm:py-6" style={{ backgroundColor: 'oklch(0.26 0.120 262)' }}>
              <div className="flex flex-col items-center gap-4 text-center">
                <p className="text-sm font-medium text-white/70">
                  Seguinos y contactanos en:
                </p>
                <div className="flex gap-2 sm:gap-3 justify-center">
                  {cabin.contactItems.map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors shrink-0"
                    >
                      <SocialIcon type={item.type} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Floating WhatsApp ─────────────────────────────────────────────── */}
      {waNumber && (
        <motion.a
          href={`https://wa.me/${waNumber}?text=${encodeURIComponent(`Hola! Me interesa consultar sobre ${cabin.name}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.4, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Consultar por WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </motion.a>
      )}

    </div>
  )
}
