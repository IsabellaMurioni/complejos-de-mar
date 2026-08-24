import vipPortada from '@/assets/complexes/cabanas-vip/portada.jpg'
const mimmoVideo = 'https://flil8c9xwmo8z3dc.public.blob.vercel-storage.com/mimmo.mp4'
const mimmoIIVideo = 'https://flil8c9xwmo8z3dc.public.blob.vercel-storage.com/mimmo-ii.mp4'
const azaharVideo = 'https://flil8c9xwmo8z3dc.public.blob.vercel-storage.com/azahar.mp4'
const amigosVideo = 'https://flil8c9xwmo8z3dc.public.blob.vercel-storage.com/amigos.mp4'
const chacrasVideo = 'https://flil8c9xwmo8z3dc.public.blob.vercel-storage.com/chacras.mp4'

// ── Image imports via import.meta.glob ──
const _mimmoFachada = import.meta.glob<string>(
  '/src/assets/complexes/mimmo/fachada/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _mimmoD1 = import.meta.glob<string>(
  '/src/assets/complexes/mimmo/chalet/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _mimmoD2 = import.meta.glob<string>(
  '/src/assets/complexes/mimmo/cabana-confort/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _mimmoD3 = import.meta.glob<string>(
  '/src/assets/complexes/mimmo/planta-baja/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _mimmoD4 = import.meta.glob<string>(
  '/src/assets/complexes/mimmo/planta-alta/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _mimmoD5 = import.meta.glob<string>(
  '/src/assets/complexes/mimmo/cabana-clasica/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _mimmoIICabana = import.meta.glob<string>(
  '/src/assets/complexes/mimmo-ii/cabana/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _amigosD1 = import.meta.glob<string>(
  '/src/assets/complexes/los-amigos/casa/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _amigosD2 = import.meta.glob<string>(
  '/src/assets/complexes/los-amigos/departamento/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _amigosD3 = import.meta.glob<string>(
  '/src/assets/complexes/los-amigos/duplex/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _amigosFachada = import.meta.glob<string>(
  '/src/assets/complexes/los-amigos/fachada/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _azaharI = import.meta.glob<string>(
  '/src/assets/complexes/azahar/azahar-i/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _azaharII = import.meta.glob<string>(
  '/src/assets/complexes/azahar/azahar-ii/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _chacrasI = import.meta.glob<string>(
  '/src/assets/complexes/chacras/chacras-24/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _chacrasII = import.meta.glob<string>(
  '/src/assets/complexes/chacras/chacras-23/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _vipPara2 = import.meta.glob<string>(
  '/src/assets/complexes/cabanas-vip/para-2/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _vipPara3 = import.meta.glob<string>(
  '/src/assets/complexes/cabanas-vip/para-3/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _vipPara4 = import.meta.glob<string>(
  '/src/assets/complexes/cabanas-vip/para-4/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _vipPara7 = import.meta.glob<string>(
  '/src/assets/complexes/cabanas-vip/para-7/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)
const _vipJamaica = import.meta.glob<string>(
  '/src/assets/complexes/cabanas-vip/casa-jamaica/gallery/*.{jpg,JPG,png,PNG}',
  { eager: true, import: 'default' }
)

function sortImages(map: Record<string, string>): string[] {
  return Object.entries(map)
    .sort(([a], [b]) => {
      const aName = a.split('/').pop()!
      const bName = b.split('/').pop()!
      return aName.localeCompare(bName, undefined, { numeric: true })
    })
    .map(([, url]) => url)
}

// ── Types ──

export interface ContactItem {
  type: 'whatsapp' | 'instagram' | 'facebook' | 'website' | 'email' | 'map' | 'tiktok'
  label: string
  url: string
  subGroup?: string
}

export type InfoCardIcon = 'clock' | 'pets' | 'distance' | 'linen' | 'family' | 'info' | 'access' | 'pool'

export interface InfoCard {
  icon: InfoCardIcon
  title: string
  body: string
}

export interface SpecialOffer {
  badge?: string
  title: string
  body: string
  note?: string
}

export type BookingCardIcon = 'deposit' | 'balance' | 'cancel' | 'minstay' | 'payment' | 'info'

export interface BookingCard {
  icon: BookingCardIcon
  title: string
  body: string
}

export interface Unit {
  id: string
  name: string
  subGroupLabel?: string
  gallery: string[]
  guests: number
  guestsLabel?: string
  rooms: number
  beds: number
  bathrooms?: number
  sqm?: number
  description?: string
  amenities?: string[]
}

export interface Cabin {
  id: string
  name: string
  subLabel: string
  tagline?: string
  location: string
  description: string
  fullDescription: string
  image: string
  video?: string
  videoScale?: number
  amenities: string[]
  featured?: boolean
  mapUrl: string
  rating: number
  contactItems: ContactItem[]
  infoCards?: InfoCard[]
  offer?: SpecialOffer
  bookingCards?: BookingCard[]
  units: Unit[]
}

// ── Shared booking cards (standard across most complexes) ──

const standardBookingCards: BookingCard[] = [
  {
    icon: 'deposit',
    title: 'Seña para confirmar',
    body: 'Se abona el 30% del total por transferencia bancaria para confirmar la reserva.',
  },
  {
    icon: 'balance',
    title: 'Saldo al ingreso',
    body: 'El 70% restante se abona al momento del check-in, en efectivo. Consultar otros medios de pago.',
  },
  {
    icon: 'cancel',
    title: 'Política de cancelación',
    body: 'La seña no es reembolsable. La fecha puede modificarse con un mes de anticipación y está sujeta a disponibilidad. En caso de cancelación, el valor de la seña podrá utilizarse para una futura estadía.',
  },
  {
    icon: 'minstay',
    title: 'Estadía mínima',
    body: 'Temporada de verano: mínimo 7 noches (consultar más opciones). Temporada baja y media: mínimo 2 noches.',
  },
]

const mimmoOffer: SpecialOffer = {
  badge: 'Promoción',
  title: '7 noches, 2 de regalo',
  body: 'Al alquilar 7 noches o más, recibís 2 noches sin cargo adicional para usar en cualquier momento del año.',
  note: 'No válido en feriados ni en temporada alta (diciembre–marzo).',
}

export const cabins: Cabin[] = [
  // ── MIMMO I ──────────────────────────────────────
  {
    id: 'mimmo-i',
    name: 'Mimmo I',
    subLabel: '9 Cabañas',
    tagline: 'Nueve cabañas de distintas capacidades en Mar Azul, a 350 metros del mar y 100 del centro.',
    location: 'Calle 34 y Copacobana, Mar Azul',
    description: '9 cabañas en el bosque de Mar Azul, a 350 m de la playa y 100 m del centro.',
    fullDescription:
      'Mimmo I es un complejo de 9 cabañas de distintas capacidades, ubicado en Calle 34 y Copacobana, Mar Azul. A 350 metros de la playa y 100 del centro comercial, es una opción ideal para familias y parejas que buscan comodidad, entorno natural y fácil acceso.',
    image: sortImages(_mimmoFachada)[0],
    video: mimmoVideo,
    amenities: ['WiFi', 'Parrilla Individual', 'Sector de estacionamiento', 'Vajilla completa', 'Cafetera eléctrica', 'Tostadora', 'Pava', 'Microondas'],
    featured: true,
    mapUrl: 'https://www.google.com/maps?q=Calle+34+y+Copacobana+Mar+Azul+Buenos+Aires&output=embed',
    rating: 4.2,
    contactItems: [
      { type: 'instagram', label: '@cabanas.mimmo',          url: 'https://instagram.com/cabanas.mimmo' },
      { type: 'whatsapp',  label: '+54 9 11 6757-3390',     url: 'https://wa.me/5491167573390' },
      { type: 'email',     label: 'cabaniasmimmo@gmail.com', url: 'mailto:cabaniasmimmo@gmail.com' },
      { type: 'map',       label: 'Calle 34 y Copacobana, Mar Azul', url: 'https://maps.google.com/?q=Calle+34+y+Copacobana+Mar+Azul+Buenos+Aires+Argentina' },
      { type: 'tiktok',   label: '@complejos_del_mar',       url: 'https://tiktok.com/@complejos_del_mar' },
    ],
    infoCards: [
      { icon: 'clock',    title: 'Check-in y check-out',    body: 'Ingreso a partir de las 16:00 hs. Salida hasta las 09:00 hs sin excepción en temporada alta. Resto del año, consultar.' },
      { icon: 'pets',     title: 'Pet friendly',             body: 'Mascotas aceptadas con cargo único de $100.000 por estadía (fumigación y limpieza de acolchados). Informar al reservar.' },
      { icon: 'linen',    title: 'Ropa de cama incluida',   body: 'Sábanas en todas las camas según cantidad de huéspedes. Recambio de toallas los miércoles, y los sábados en estadías de quincena.' },
      { icon: 'distance', title: 'Distancias clave',         body: 'Playa Blue Beach: 350 m · Centro Mar Azul: 100 m · Mar de las Pampas: 500 m · Villa Gesell: 4 km.' },
    ],
    offer: mimmoOffer,
    bookingCards: standardBookingCards,
    units: [
      {
        id: 'mi-d1',
        name: 'Chalet 3 ambientes',
        gallery: sortImages(_mimmoD1),
        guests: 6, rooms: 3, beds: 4, bathrooms: 2, sqm: 70,
      },
      {
        id: 'mi-d2',
        name: 'Cabaña Confort',
        gallery: sortImages(_mimmoD2),
        guests: 5, guestsLabel: '4-5', rooms: 2, beds: 4, bathrooms: 2, sqm: 60,
      },
      {
        id: 'mi-d3',
        name: 'Cabaña 2 ambientes Planta Baja',
        gallery: sortImages(_mimmoD3),
        guests: 3, rooms: 2, beds: 2, bathrooms: 1, sqm: 40,
      },
      {
        id: 'mi-d4',
        name: 'Cabaña 2 ambientes Planta Alta',
        gallery: sortImages(_mimmoD4),
        guests: 4, rooms: 2, beds: 3, bathrooms: 1, sqm: 40,
      },
      {
        id: 'mi-d5',
        name: 'Cabaña Clásica',
        gallery: sortImages(_mimmoD5),
        guests: 4, guestsLabel: '3-4', rooms: 2, beds: 2, bathrooms: 1, sqm: 42,
      },
    ],
  },

  // ── MIMMO II ─────────────────────────────────────
  {
    id: 'mimmo-ii',
    name: 'Mimmo II',
    subLabel: '3 Cabañas',
    tagline: '3 cabañas privadas de dos plantas con pileta y parque, a 300 metros del mar y 50 metros del centro de Mar Azul.',
    location: 'Calle 33 y Copacobana, Mar Azul',
    description: '3 cabañas privadas de dos plantas con pileta propia, a 300 m del mar y 50 m del centro de Mar Azul.',
    fullDescription:
      'Mimmo II cuenta con 3 cabañas privadas de dos plantas ubicadas en Calle 33 y Copacobana, Las Gaviotas, Mar Azul. A 300 metros del mar y 50 metros del centro comercial, son perfectas para familias que buscan un espacio íntimo y completo con parque y pileta propia.',
    image: sortImages(_mimmoIICabana)[0],
    video: mimmoIIVideo,
    amenities: ['WiFi', 'Pileta Compartida', 'Parrilla Individual', 'Sector de estacionamiento', 'Vajilla completa', 'Cafetera eléctrica', 'Tostadora', 'Pava', 'Microondas'],
    mapUrl: 'https://www.google.com/maps?q=Calle+33+y+Copacobana+Mar+Azul+Buenos+Aires&output=embed',
    rating: 4.2,
    contactItems: [
      { type: 'instagram', label: '@cabanas.mimmo',          url: 'https://instagram.com/cabanas.mimmo' },
      { type: 'whatsapp',  label: '+54 9 11 6757-3390',     url: 'https://wa.me/5491167573390' },
      { type: 'facebook',  label: 'Facebook',                url: 'https://www.facebook.com/cabaniasmimmo/' },
      { type: 'email',     label: 'cabaniasmimmo@gmail.com', url: 'mailto:cabaniasmimmo@gmail.com' },
      { type: 'map',       label: 'Calle 33 y Copacobana, Mar Azul', url: 'https://maps.google.com/?q=Calle+33+y+Copacobana+Mar+Azul+Buenos+Aires+Argentina' },
      { type: 'tiktok',   label: '@complejos_del_mar',       url: 'https://tiktok.com/@complejos_del_mar' },
    ],
    infoCards: [
      { icon: 'clock',    title: 'Check-in y check-out',    body: 'Ingreso a partir de las 16:00 hs. Salida hasta las 09:00 hs sin excepción en temporada alta. Resto del año, consultar.' },
      { icon: 'pets',     title: 'Pet friendly',             body: 'Mascotas aceptadas con cargo único de $100.000 por estadía (fumigación y limpieza). Informar al reservar.' },
      { icon: 'pool',     title: 'Pileta de uso exclusivo',  body: 'Cada cabaña cuenta con pileta privada de 1,30 m de profundidad, de uso exclusivo para los huéspedes.' },
      { icon: 'distance', title: 'Distancias clave',         body: 'Playa: 300 m · Centro de Mar Azul: 50 m · Mar de las Pampas: 400 m · Villa Gesell: 4 km.' },
    ],
    offer: mimmoOffer,
    bookingCards: standardBookingCards,
    units: [
      {
        id: 'mii-c1',
        name: 'Cabaña Mimmo II',
        gallery: sortImages(_mimmoIICabana),
        guests: 4, guestsLabel: '3-4', rooms: 3, beds: 3, bathrooms: 2, sqm: 70,
      },
    ],
  },

  // ── CASAS AZAHAR ─────────────────────────────────
  {
    id: 'azahar',
    name: 'Casas Azahar',
    subLabel: 'Azahar I · Azahar II',
    tagline: 'Dos casas independientes entre los pinos de Mar de las Pampas, a dos cuadras del centro y cinco del mar.',
    location: 'Juan de Garay 500, Mar de las Pampas',
    description: 'Dos casas independientes en el bosque de Mar de las Pampas, a dos cuadras del centro y cinco del mar.',
    fullDescription:
      'Casas Azahar son dos casas independientes en el bosque de Mar de las Pampas, ubicadas en Juan de Garay 500 y Av. Cruz del Sur. A dos cuadras del centro y cinco del mar, ofrecen privacidad, naturaleza y una atmósfera difícil de encontrar en la costa.',
    image: sortImages(_azaharI)[0],
    video: azaharVideo,
    videoScale: 1.6,
    amenities: ['WiFi', 'Jardín Privado', 'Parrilla Individual', 'Sector de estacionamiento', 'Aire Acondicionado', 'Vajilla completa', 'Cafetera eléctrica', 'Tostadora', 'Pava', 'Microondas'],
    featured: true,
    mapUrl: 'https://www.google.com/maps?q=-37.3224945,-57.0233993&output=embed',
    rating: 4.3,
    contactItems: [
      { type: 'instagram', label: '@azaharmardelaspampas',        url: 'https://instagram.com/azaharmardelaspampas' },
      { type: 'instagram', label: '@prosperidadazahar',           url: 'https://instagram.com/prosperidadazahar' },
      { type: 'whatsapp',  label: '+54 9 11 2835-0180',          url: 'https://wa.me/5491128350180' },
      { type: 'facebook',  label: 'Facebook',                     url: 'https://www.facebook.com/ProsperidadAzahar/' },
      { type: 'email',     label: 'prosperidad.azahar@gmail.com', url: 'mailto:prosperidad.azahar@gmail.com' },
      { type: 'map',       label: 'Juan de Garay 500, Mar de las Pampas', url: 'https://www.google.com/maps/place/Prosperidad+Azahar/@-37.3224945,-57.0233993,18z' },
      { type: 'tiktok',   label: '@complejos_del_mar',             url: 'https://tiktok.com/@complejos_del_mar' },
    ],
    infoCards: [
      { icon: 'clock',    title: 'Check-in y check-out', body: 'Ingreso a partir de las 16:00 hs. Salida hasta las 09:00 hs sin excepción en temporada alta. Resto del año, consultar.' },
      { icon: 'distance', title: 'Distancias clave',      body: 'Centro de Mar de las Pampas: 2 cuadras · Mar: 5 cuadras.' },
      { icon: 'family',   title: 'Ideal para grupos',     body: 'Casa Azahar I tiene capacidad para hasta 10 personas en 3 plantas, ideal para grupos familiares numerosos.' },
    ],
    bookingCards: standardBookingCards,
    units: [
      {
        id: 'az-i',
        name: 'Casa Azahar I',
        gallery: sortImages(_azaharI),
        guests: 10, rooms: 4, beds: 8, bathrooms: 3, sqm: 150,
      },
      {
        id: 'az-ii',
        name: 'Casa Azahar II',
        gallery: sortImages(_azaharII),
        guests: 4, rooms: 2, beds: 3, bathrooms: 1, sqm: 65,
      },
    ],
  },

  // ── LOS AMIGOS ───────────────────────────────────
  {
    id: 'los-amigos',
    name: 'Los Amigos',
    subLabel: '4 Unidades',
    tagline: 'Cuatro unidades independientes rodeadas de arboleda en Mar Azul, a seis cuadras del mar y cuatro del centro.',
    location: 'Mar Azul, Buenos Aires',
    description: '4 unidades independientes rodeadas de arboleda, a 6 cuadras del mar y 4 cuadras del centro.',
    fullDescription:
      'Los Amigos es un complejo de 4 unidades independientes rodeadas de una hermosa arboleda en Mar Azul, a seis cuadras del mar y cuatro de la zona comercial, para grupos de 4 a 6 personas.',
    image: sortImages(_amigosFachada)[0],
    video: amigosVideo,
    amenities: ['WiFi', 'Parrilla Individual', 'Sector de estacionamiento', 'Aire Acondicionado', 'Vajilla completa', 'Cafetera eléctrica', 'Tostadora', 'Pava', 'Microondas'],
    mapUrl: 'https://www.google.com/maps?q=Calle+33+Mar+Azul+Buenos+Aires+Argentina&output=embed',
    rating: 4.2,
    contactItems: [
      { type: 'instagram', label: '@cabanas_losamigos',    url: 'https://instagram.com/cabanas_losamigos' },
      { type: 'whatsapp',  label: '+54 9 11 5815-1985',   url: 'https://wa.me/5491158151985' },
      { type: 'map',       label: 'Mar Azul, Buenos Aires', url: 'https://maps.google.com/?q=Calle+33+Mar+Azul+Buenos+Aires+Argentina' },
      { type: 'tiktok',   label: '@complejos_del_mar',     url: 'https://tiktok.com/@complejos_del_mar' },
    ],
    infoCards: [
      { icon: 'clock',    title: 'Check-in y check-out', body: 'Ingreso a partir de las 16:00 hs. Salida hasta las 09:00 hs sin excepción en temporada alta. Resto del año, consultar.' },
      { icon: 'pets',     title: 'Pet friendly',          body: 'Mascotas aceptadas con cargo único de $100.000 por estadía. Informar al momento de la reserva.' },
      { icon: 'distance', title: 'Distancias clave',      body: 'Mar: 6 cuadras · Centro de Mar Azul: 4 cuadras.' },
    ],
    bookingCards: standardBookingCards,
    units: [
      {
        id: 'la-d1',
        name: 'Casa',
        gallery: sortImages(_amigosD1),
        guests: 6, rooms: 2, beds: 3, bathrooms: 1, sqm: 44,
        description: 'Para hasta 6 personas, con 2 dormitorios, 3 camas (2 cuchetas y 1 matrimonial) y 1 baño, en 44 m².',
      },
      {
        id: 'la-d2',
        name: 'Departamento',
        gallery: sortImages(_amigosD2).filter((_, i) => i !== 4),
        guests: 4, rooms: 2, beds: 3, bathrooms: 1, sqm: 46,
      },
      {
        id: 'la-d3',
        name: 'Dúplex',
        gallery: sortImages(_amigosD3),
        guests: 5, rooms: 2, beds: 3, bathrooms: 1, sqm: 44,
      },
    ],
  },

  // ── CABAÑAS VIP ──────────────────────────────────
  {
    id: 'cabanas-vip',
    name: 'Cabañas VIP',
    subLabel: 'Para 2 · 3 · 4 · 5 · 6/7 personas',
    tagline: 'Cabañas completamente privadas en Santa Clara del Mar para grupos de 2 a 7 personas.',
    location: 'Santa Clara del Mar',
    description: 'La experiencia premium: cabañas privadas para cada tamaño de grupo, en Santa Clara del Mar.',
    fullDescription:
      'Cabañas VIP ofrece 15 cabañas totalmente privadas en Santa Clara del Mar, distribuidas en 4 tipos para grupos de 2 a 7 personas, más Casa Jamaica: una casa individual aparte del complejo principal, con acceso a la pileta y todas las instalaciones. Cada unidad es completamente independiente, con todos los servicios para una estadía cómoda y sin apuros.',
    image: vipPortada,
    amenities: ['Jacuzzi Privado', 'WiFi Premium', 'Vista Panorámica', 'Servicio de Limpieza', 'Terraza', 'Minibar', 'Vajilla completa', 'Cafetera eléctrica', 'Tostadora', 'Pava', 'Microondas'],
    featured: true,
    mapUrl: 'https://www.google.com/maps?q=Av+Menton+1188+Santa+Clara+del+Mar+Buenos+Aires+Argentina&output=embed',
    rating: 4.0,
    contactItems: [
      { type: 'instagram', label: '@cabanas.vip',                      url: 'https://instagram.com/cabanas.vip' },
      { type: 'whatsapp',  label: '+54 9 11 5099-5700',               url: 'https://wa.me/5491150995700' },
      { type: 'facebook',  label: 'Facebook',                           url: 'https://www.facebook.com/complejocabanasvip/' },
      { type: 'website',   label: 'complejocabanasvip.com',             url: 'https://www.complejocabanasvip.com/home' },
      { type: 'email',     label: 'ventashotelesdelacosta@hotmail.com', url: 'mailto:ventashotelesdelacosta@hotmail.com' },
      { type: 'map',       label: 'Santa Clara del Mar',               url: 'https://maps.google.com/?q=Av+Menton+1188+Santa+Clara+del+Mar+Buenos+Aires+Argentina' },
      { type: 'tiktok',   label: '@complejos_del_mar',                  url: 'https://tiktok.com/@complejos_del_mar' },
    ],
    infoCards: [
      { icon: 'clock',  title: 'Check-in y check-out',    body: 'Ingreso a partir de las 16:00 hs. Salida hasta las 09:00 hs sin excepción en temporada alta. Resto del año, consultar.' },
      { icon: 'info',   title: 'Unidades completamente privadas', body: 'Cada cabaña tiene acceso independiente y no comparte espacios con otros huéspedes.' },
    ],
    bookingCards: [
      {
        icon: 'payment',
        title: 'Formas de pago',
        body: 'Efectivo, transferencia bancaria o MercadoPago. Consultar disponibilidad a través del sitio oficial.',
      },
      ...standardBookingCards,
    ],
    units: [
      {
        id: 'vip-p2',
        name: 'Para 2 personas',
        gallery: sortImages(_vipPara2),
        guests: 2, rooms: 1, beds: 1, bathrooms: 1, sqm: 32,
      },
      {
        id: 'vip-p3',
        name: 'Para 3 personas',
        gallery: sortImages(_vipPara3),
        guests: 3, rooms: 2, beds: 2, bathrooms: 1, sqm: 42,
      },
      {
        id: 'vip-p4',
        name: 'Para 4 personas',
        gallery: sortImages(_vipPara4),
        guests: 4, rooms: 2, beds: 3, bathrooms: 1, sqm: 52,
      },
      {
        id: 'vip-p7',
        name: 'Para 6/7 personas',
        gallery: sortImages(_vipPara7),
        guests: 7, rooms: 3, beds: 6, bathrooms: 1, sqm: 78,
      },
      {
        id: 'vip-jamaica',
        name: 'Casa Jamaica',
        gallery: sortImages(_vipJamaica),
        guests: 5, rooms: 2, beds: 4, bathrooms: 1,
        description: 'Casa individual aparte del complejo principal, para hasta 5 personas. Cuenta con 1 cama matrimonial y 3 camas individuales, 1 baño, y acceso completo a la pileta y todas las instalaciones del complejo.',
      },
    ],
  },

  // ── CHACRAS DEL MAR ──────────────────────────────
  {
    id: 'chacras',
    name: 'Chacras del Mar',
    subLabel: 'Chacras 23 · Chacras 24',
    tagline: 'Acceso exclusivo en 4×4 por playa, con piscinas, spa, guardavidas y vistas al mar en Mar Azul.',
    location: 'Mar Azul (acceso por playa en 4×4)',
    description: 'Departamentos de planta alta con acceso en 4×4 por playa, con piscinas, spa y servicios premium.',
    fullDescription:
      'Chacras del Mar son dos departamentos en planta alta ubicados en Mar Azul, con acceso exclusivo en vehículo 4×4 por playa. Un complejo único en su tipo, pensado para quienes valoran una experiencia de playa diferente y completa.',
    image: sortImages(_chacrasII)[0],
    video: chacrasVideo,
    amenities: ['WiFi (complejo y unidad)', 'Pileta Climatizada', 'Spa & Sauna', 'Servicio de Limpieza', 'Parrilla', 'Guardavidas', 'Blanquería', 'Vajilla completa', 'Cafetera eléctrica', 'Tostadora', 'Pava', 'Microondas'],
    mapUrl: 'https://www.google.com/maps?q=Chacras+del+Mar+Mar+Azul+Buenos+Aires+Argentina&output=embed',
    rating: 4.4,
    contactItems: [
      { type: 'instagram', label: '@chacras_de_mar',          url: 'https://instagram.com/chacras_de_mar' },
      { type: 'whatsapp',  label: '+54 9 11 2391-2184',      url: 'https://wa.me/5491123912184' },
      { type: 'facebook',  label: 'Facebook',                 url: 'https://www.facebook.com/chacrasdelmar/' },
      { type: 'website',   label: 'chacrasmar.com.ar',        url: 'https://www.chacrasmar.com.ar/' },
      { type: 'email',     label: 'info@chacrasdemar.com.ar', url: 'mailto:info@chacrasdemar.com.ar' },
      { type: 'map',       label: 'Mar Azul, Buenos Aires',   url: 'https://www.google.com/maps/place/chacras+del+mar/data=!4m2!3m1!1s0x959b5d75807f1d43:0x2772d213c68a96a5?sa=X&ved=1t:242&ictx=111' },
      { type: 'tiktok',   label: '@complejos_del_mar',         url: 'https://tiktok.com/@complejos_del_mar' },
    ],
    infoCards: [
      { icon: 'access', title: 'Acceso exclusivo en 4×4',       body: 'El ingreso al complejo es en vehículo 4×4 por playa. No apto para vehículos convencionales. Consultar por servicios de transfer disponibles.' },
      { icon: 'clock',  title: 'Check-in y check-out',           body: 'Ingreso a partir de las 16:00 hs. Salida hasta las 09:00 hs sin excepción en temporada alta. Resto del año, consultar.' },
      { icon: 'family', title: 'Guardavidas certificados',        body: 'Guardavidas certificados por Cruz Roja en playa y piscinas durante toda la temporada.' },
      { icon: 'info',   title: 'Recreación en temporada',         body: 'En verano: actividades recreativas para chicos y propuestas deportivas y sociales programadas.' },
    ],
    bookingCards: standardBookingCards,
    units: [
      {
        id: 'ch-ii',
        name: 'Chacras 23',
        gallery: sortImages(_chacrasII),
        guests: 6, rooms: 3, beds: 3, bathrooms: 2, sqm: 55,
        amenities: ['Fabricadora de hielo', 'Cava de vinos'],
      },
      {
        id: 'ch-i',
        name: 'Chacras 24',
        gallery: sortImages(_chacrasI),
        guests: 6, rooms: 3, beds: 4, bathrooms: 2, sqm: 70,
        amenities: ['Fabricadora de hielo', 'Cava de vinos', 'Lavarropas'],
      },
    ],
  },
]

export function getCabinById(id: string): Cabin | undefined {
  return cabins.find(cabin => cabin.id === id)
}
