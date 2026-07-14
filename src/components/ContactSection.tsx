import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion'

const cabins = [
  { value: 'mimmo', label: 'Mimmo II', name: 'Mimmo' },
  { value: 'amigos', label: 'Los Amigos', name: 'Los Amigos' },
  { value: 'azahar', label: 'Azahar', name: 'Azahar' },
  { value: 'vip', label: 'Cabañas VIP', name: 'Cabañas VIP' },
  { value: 'chacras', label: 'Chacras del Mar', name: 'Chacras del Mar' },
]

const personasOptions = [
  ...Array.from({ length: 8 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) })),
  { value: '9+', label: '9 o más' },
]

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+54 223 456-7890',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@complejosdemar.com',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Costa Atlántica, Argentina',
  },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedCabin, setSelectedCabin] = useState('')
  const [selectedPersonas, setSelectedPersonas] = useState('')
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const complejo = searchParams.get('complejo')
    if (complejo) {
      const match = cabins.find(c => c.name === complejo)
      if (match) setSelectedCabin(match.value)
      setTimeout(() => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Mensaje enviado correctamente')
    }, 1000)
  }

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
          {/* Contact Info */}
          <div>
            <AnimatedSection>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Contacto
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Hablemos de tus vacaciones
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Estamos para ayudarte a planificar la escapada perfecta.
                Contactanos y te asesoramos sobre la mejor opción para vos.
              </p>
            </AnimatedSection>

            <StaggerContainer className="mt-8 sm:mt-10 space-y-5 sm:space-y-6" delay={0.3}>
              {contactInfo.map((info) => (
                <StaggerItem key={info.label}>
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <info.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-semibold text-foreground truncate">{info.value}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <motion.div
              className="bg-card rounded-2xl sm:rounded-3xl border border-border/50 p-5 sm:p-8 shadow-lg"
              whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-5 sm:mb-6">
                Envianos tu consulta
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+54 XXX XXX-XXXX"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cabin">Complejo de Interés</Label>
                    <Select value={selectedCabin} onValueChange={setSelectedCabin}>
                      <SelectTrigger className="w-full rounded-xl">
                        <SelectValue placeholder="Seleccionar..." />
                      </SelectTrigger>
                      <SelectContent>
                        {cabins.map((cabin) => (
                          <SelectItem key={cabin.value} value={cabin.value}>
                            {cabin.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="personas">Cantidad de personas</Label>
                  <Select value={selectedPersonas} onValueChange={setSelectedPersonas}>
                    <SelectTrigger className="w-full rounded-xl">
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                    <SelectContent>
                      {personasOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fechaLlegada">Fecha de llegada</Label>
                    <Input
                      id="fechaLlegada"
                      type="date"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fechaSalida">Fecha de salida</Label>
                    <Input
                      id="fechaSalida"
                      type="date"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Contanos qué estás buscando, fechas tentativas, cantidad de personas..."
                    rows={4}
                    required
                    className="rounded-xl resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                    <Send className="w-4 h-4 ml-1" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
