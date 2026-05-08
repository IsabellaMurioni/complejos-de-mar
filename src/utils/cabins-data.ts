export interface Cabin {
  id: string
  name: string
  description: string
  fullDescription: string
  image: string
  gallery: string[]
  cabinCount: number
  guests: number
  bedrooms: number
  bathrooms: number
  amenities: string[]
  featured?: boolean
  externalUrl: string
}

export const cabins: Cabin[] = [
  {
    id: 'mimmo-ii',
    name: 'Mimmo II',
    description: 'Cabañas amplias y modernas con vista directa al mar, perfectas para familias.',
    fullDescription: 'Mimmo II es un complejo de cabañas amplias y modernas ubicadas frente al mar. Cada unidad cuenta con espacios luminosos, decoración contemporánea y todas las comodidades para que tu estadía sea inolvidable. Perfectas para familias que buscan confort, tranquilidad y acceso directo a la playa.',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
    cabinCount: 8,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['WiFi', 'Aire Acondicionado', 'Parrilla', 'Estacionamiento', 'Vista al Mar', 'Cocina Equipada'],
    featured: true,
    externalUrl: 'https://mimmoii.com.ar',
  },
  {
    id: 'los-amigos',
    name: 'Los Amigos',
    description: 'Ideal para grupos de amigos, con espacios compartidos amplios y ambiente juvenil.',
    fullDescription: 'Los Amigos es el complejo perfecto para escapadas con amigos. Cuenta con amplios espacios comunes, zonas de juegos, parrilla compartida y un ambiente relajado y juvenil. Ubicado cerca de la playa y los principales puntos de entretenimiento de la zona.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    ],
    cabinCount: 6,
    guests: 8,
    bedrooms: 4,
    bathrooms: 2,
    amenities: ['WiFi', 'Parrilla Compartida', 'Zona de Juegos', 'Estacionamiento', 'Quincho'],
    externalUrl: 'https://losamigos.com.ar',
  },
  {
    id: 'azahar',
    name: 'Azahar',
    description: 'Encanto y elegancia en un entorno natural único con jardín privado.',
    fullDescription: 'Azahar combina encanto y elegancia en un entorno natural privilegiado. Cada cabaña cuenta con jardín privado, parrilla individual y una decoración cuidada que invita al relax. Ideal para parejas y familias pequeñas que buscan intimidad y contacto con la naturaleza.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    ],
    cabinCount: 4,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['WiFi', 'Jardín Privado', 'Parrilla', 'Estacionamiento', 'Aire Acondicionado'],
    externalUrl: 'https://azahar.com.ar',
  },
  {
    id: 'cabanas-vip',
    name: 'Cabañas VIP',
    description: 'La experiencia premium: jacuzzi privado, terraza con vista al mar.',
    fullDescription: 'Cabañas VIP ofrece la experiencia más exclusiva de Complejos de Mar. Cada unidad cuenta con jacuzzi privado, terraza con vista panorámica al mar, servicio personalizado y amenities de lujo. Para quienes buscan lo mejor de lo mejor en sus vacaciones.',
    image: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    ],
    cabinCount: 3,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Jacuzzi Privado', 'WiFi Premium', 'Vista Panorámica', 'Servicio de Limpieza', 'Terraza', 'Minibar'],
    featured: true,
    externalUrl: 'https://cabanasvip.com.ar',
  },
  {
    id: 'chacras-del-mar',
    name: 'Chacras del Mar',
    description: 'Amplios terrenos con cabañas rústicas de lujo para escapadas familiares.',
    fullDescription: 'Chacras del Mar ofrece amplios terrenos con cabañas de estilo rústico-chic. Ideales para familias numerosas o grupos que buscan privacidad y espacio. Cada chacra cuenta con jardín extenso, parrilla, quincho y todas las comodidades del hogar.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80',
    ],
    cabinCount: 5,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['WiFi', 'Terreno Amplio', 'Quincho', 'Parrilla', 'Estacionamiento Doble', 'Pileta Compartida'],
    externalUrl: 'https://chacrasdelmar.com.ar',
  },
]

export function getCabinById(id: string): Cabin | undefined {
  return cabins.find(cabin => cabin.id === id)
}
