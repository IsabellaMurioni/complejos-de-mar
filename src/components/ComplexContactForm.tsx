import { useState, useEffect, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/motion'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

interface UnitOption {
  id: string
  name: string
}

interface ComplexContactFormProps {
  whatsapp: string
  complexName: string
  units?: UnitOption[]
  preSelectedCabin?: { name: string; ts: number } | null
}

type FormMode = 'consulta' | 'reserva'

const inputClass =
  'w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary transition-all duration-200 text-sm shadow-xs'

const labelClass = 'block text-sm font-medium text-foreground/75 mb-1.5'

function formatDate(dateStr: string): string {
  if (!dateStr) return '-'
  const [year, month, day] = dateStr.split('-')
  return `${day}/${month}/${year}`
}

export function ComplexContactForm({
  whatsapp,
  complexName,
  units = [],
  preSelectedCabin,
}: ComplexContactFormProps) {
  const [mode, setMode] = useState<FormMode>('consulta')
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    cabana: '',
    personas: '',
    checkin: '',
    checkout: '',
    mensaje: '',
  })

  useEffect(() => {
    if (preSelectedCabin?.name) {
      setForm(prev => ({ ...prev, cabana: preSelectedCabin.name }))
      setMode('consulta')
    }
  }, [preSelectedCabin?.ts])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm(prev => {
      const updated = { ...prev, [name]: value }
      if (name === 'checkin' && updated.checkout && value > updated.checkout) {
        updated.checkout = ''
      }
      return updated
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const isReserva = mode === 'reserva'
    const lines: string[] = []

    lines.push(isReserva ? '*SOLICITUD DE RESERVA*' : '*Nueva consulta de disponibilidad*')
    lines.push('')
    lines.push(`*Complejo:* ${complexName}`)
    if (form.cabana) {
      lines.push(`*${isReserva ? 'Cabaña' : 'Cabaña de interés'}:* ${form.cabana}`)
    }
    lines.push('')
    lines.push(`*Nombre:* ${form.nombre}`)
    if (form.email) lines.push(`*Email:* ${form.email}`)
    if (form.telefono) lines.push(`*Teléfono:* ${form.telefono}`)
    if (form.personas) lines.push(`*Cantidad de personas:* ${form.personas}`)
    if (form.checkin) lines.push(`*Check-in:* ${formatDate(form.checkin)}`)
    if (form.checkout) lines.push(`*Check-out:* ${formatDate(form.checkout)}`)
    if (form.mensaje) {
      lines.push('')
      lines.push('*Mensaje adicional:*')
      lines.push(form.mensaje)
    }
    if (isReserva) {
      lines.push('')
      lines.push('El cliente solicita los datos bancarios para avanzar con la reserva.')
    }

    const text = lines.join('\n')
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
  }

  const isReserva = mode === 'reserva'

  const ctaClass = isReserva
    ? 'w-full flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-base rounded-xl py-3.5 transition-colors duration-200 cursor-pointer shadow-sm shadow-green-500/20'
    : 'w-full flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-base rounded-xl py-3.5 transition-colors duration-200 cursor-pointer shadow-sm shadow-sky-500/20'

  return (
    <AnimatedSection delay={0.1}>
      {/* Header */}
      <div className="text-center mb-8">
        <span className={`text-xs font-semibold uppercase tracking-widest mb-3 block ${isReserva ? 'text-primary' : 'text-muted-foreground'}`}>
          {isReserva ? 'Reservas' : 'Consultas'}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
          {isReserva ? 'Solicitar reserva' : 'Consultá disponibilidad'}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
          {isReserva
            ? '¿Ya decidiste reservar? Completá tus datos y enviaremos tu solicitud al complejo. Te confirmarán la disponibilidad y los datos para el pago.'
            : '¿Querés saber si esta cabaña está disponible para las fechas que tenés en mente?'}
        </p>
      </div>

      {/* Mode toggle */}
      <div className="flex gap-2 justify-center mb-8">
        <button
          type="button"
          onClick={() => setMode('consulta')}
          className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
            mode === 'consulta'
              ? 'bg-sky-500 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-foreground/60 hover:border-sky-300 hover:text-foreground/80'
          }`}
        >
          Consultar disponibilidad
        </button>
        <button
          type="button"
          onClick={() => setMode('reserva')}
          className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
            mode === 'reserva'
              ? 'bg-green-500 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-foreground/60 hover:border-green-300 hover:text-foreground/80'
          }`}
        >
          Solicitar reserva
        </button>
      </div>

      {/* Form card */}
      <div className={`bg-white rounded-2xl shadow-md px-6 py-8 sm:px-8 sm:py-10 max-w-2xl mx-auto border transition-colors duration-300 ${isReserva ? 'border-primary/20' : 'border-slate-200/70'}`}>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">

          {/* Nombre */}
          <div className="sm:col-span-2">
            <label className={labelClass}>Nombre *</label>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className={inputClass}
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className={labelClass}>Teléfono *</label>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              required
              placeholder="+54 9 11 1234-5678"
              className={inputClass}
            />
          </div>

          {/* Cabaña de interés */}
          {units.length > 0 && (
            <div className="sm:col-span-2">
              <label className={labelClass}>Cabaña de interés *</label>
              <select
                name="cabana"
                value={form.cabana}
                onChange={handleChange}
                required
                className={inputClass + ' cursor-pointer'}
              >
                <option value="">Seleccioná una cabaña</option>
                {units.map(unit => (
                  <option key={unit.id} value={unit.name}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Personas */}
          <div>
            <label className={labelClass}>Cantidad de personas *</label>
            <select
              name="personas"
              value={form.personas}
              onChange={handleChange}
              required
              className={inputClass + ' cursor-pointer'}
            >
              <option value="">Seleccionar</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'persona' : 'personas'}
                </option>
              ))}
            </select>
          </div>

          {/* Check-in */}
          <div>
            <label className={labelClass}>Check-in *</label>
            <input
              type="date"
              name="checkin"
              value={form.checkin}
              onChange={handleChange}
              required
              className={inputClass + ' cursor-pointer'}
            />
          </div>

          {/* Check-out */}
          <div className="sm:col-span-2">
            <label className={labelClass}>Check-out *</label>
            <input
              type="date"
              name="checkout"
              value={form.checkout}
              onChange={handleChange}
              required
              min={form.checkin || undefined}
              className={inputClass + ' cursor-pointer'}
            />
          </div>

          {/* Mensaje */}
          <div className="sm:col-span-2">
            <label className={labelClass}>Mensaje adicional</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              rows={3}
              placeholder={
                isReserva
                  ? 'Requerimientos especiales, preguntas sobre la cabaña...'
                  : 'Consultas, requerimientos especiales...'
              }
              className={inputClass + ' resize-none'}
            />
          </div>

          {/* Submit */}
          <div className="sm:col-span-2 pt-1">
            <motion.button
              type="submit"
              className={ctaClass}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              {isReserva ? 'Solicitar reserva por WhatsApp' : 'Enviar consulta por WhatsApp'}
            </motion.button>
            <p className="text-center text-xs text-muted-foreground mt-3">
              {isReserva
                ? 'La reserva queda sujeta a confirmación de disponibilidad por parte del complejo.'
                : 'Te responderemos por WhatsApp para confirmar disponibilidad.'}
            </p>
          </div>

        </form>
      </div>
    </AnimatedSection>
  )
}
