import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/motion'

const faqs = [
  {
    question: '¿Cuál es el horario de check-in y check-out?',
    answer: 'El check-in es a partir de las 14:00 hs y el check-out es hasta las 10:00 hs. Si necesitás un horario especial, contactanos y haremos lo posible por acomodarte.'
  },
  {
    question: '¿Se aceptan mascotas en las cabañas?',
    answer: 'Sí, aceptamos mascotas en algunos de nuestros complejos. Te recomendamos consultar la disponibilidad al momento de reservar ya que puede variar según la cabaña.'
  },
  {
    question: '¿Cuánto tiempo antes debo reservar?',
    answer: 'Recomendamos reservar con al menos 2 semanas de anticipación, especialmente en temporada alta (diciembre a marzo). Para fechas especiales como fin de año o carnaval, sugerimos reservar con 1-2 meses de anticipación.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencias bancarias, efectivo, tarjetas de débito y crédito (Visa, Mastercard, American Express). También trabajamos con Mercado Pago para mayor comodidad.'
  },
  {
    question: '¿Las cabañas tienen WiFi?',
    answer: 'Sí, todas nuestras cabañas cuentan con WiFi gratuito de alta velocidad para que puedas mantenerte conectado durante tu estadía.'
  },
  {
    question: '¿Se puede hacer asado en las cabañas?',
    answer: 'Por supuesto. Todas nuestras cabañas cuentan con parrilla equipada y zona de asador. Solo pedimos que cuides las instalaciones y respetes los horarios de descanso.'
  },
  {
    question: '¿Cuál es la política de cancelación?',
    answer: 'Las cancelaciones con más de 15 días de anticipación tienen reembolso completo. Entre 7 y 15 días, se retiene el 50%. Con menos de 7 días no hay reembolso, pero podés reprogramar tu estadía.'
  },
  {
    question: '¿A qué distancia están de la playa?',
    answer: 'Dependiendo del complejo, nuestras cabañas se encuentran entre 50 y 300 metros de la playa. Mimmo II y Cabañas VIP tienen acceso directo al mar.'
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-5 sm:py-6 flex items-start sm:items-center justify-between text-left group gap-4"
      >
        <span className="text-base sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-shrink-0 mt-0.5 sm:mt-0"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 sm:pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <AnimatedSection>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Preguntas Frecuentes
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              ¿Tenés dudas?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
              Encontrá respuestas a las preguntas más comunes sobre nuestras cabañas y servicios.
            </p>
          </AnimatedSection>
        </div>

        {/* FAQ List */}
        <motion.div
          className="bg-card rounded-2xl border border-border/50 px-5 sm:px-8 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <AnimatedSection delay={0.3}>
          <p className="text-center mt-8 sm:mt-12 text-sm sm:text-base text-muted-foreground">
            ¿No encontrás lo que buscás?{' '}
            <a href="#contacto" className="text-primary font-medium hover:underline">
              Contactanos
            </a>{' '}
            y te responderemos a la brevedad.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
