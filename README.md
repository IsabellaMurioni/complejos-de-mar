# Web Complejos de Mar

Plataforma web que centraliza la información de varios complejos de cabañas en una sola experiencia, para que el cliente potencial pueda consultar todo lo que necesita y reservar en pocos clics.

## El problema que resuelve

Antes, cada complejo compartía su información mediante un **PDF desorganizado**, donde el interesado tenía que buscar manualmente entre texto e imágenes los datos de cada cabaña (servicios, precios, capacidad, comodidades, políticas). Este proceso era lento, poco claro y generaba fricción antes de siquiera poder consultar disponibilidad.

**Web Complejos de Mar** resuelve esto unificando en un solo sitio toda la información de cada complejo, con una navegación clara y un flujo de reserva directo por WhatsApp.

## Funcionalidades principales

- **Catálogo de complejos**: cada complejo tiene su propia sección con descripción, fotos y datos de contacto.
- **Ficha por cabaña**: detalle de cada cabaña con descripción, cantidad de personas, comodidades y fotos.
- **Servicios y comodidades del complejo**: piscina, sector de estacionamiento, y demás servicios que incluye cada complejo.
- **Políticas y formas de pago**: información clara de condiciones de reserva y medios de pago aceptados por cada complejo.
- **Formulario de reserva**: el usuario completa sus datos, selecciona la cabaña de interés y el formulario arma automáticamente un mensaje de WhatsApp precargado (link `wa.me`) que lo redirige al número del complejo correspondiente para coordinar la reserva.
- **Datos de contacto por complejo**: WhatsApp, Instagram, email y teléfono de cada complejo, accesibles desde su propia sección.

## Tecnologías

- **Frontend**: React / Next.js
- **Backend**: Node.js
- **Reserva vía WhatsApp**: generación de links `wa.me` con mensaje precargado (sin backend intermedio para el envío)

## Instalación

### Requisitos previos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- npm o yarn

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/<usuario>/<repo>.git
cd <repo>

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# completar las variables necesarias (ver sección abajo)

# Correr en modo desarrollo
npm run dev
```

La app quedará disponible en `http://localhost:3000`.

### Variables de entorno

> Completar según corresponda al proyecto.

```
NEXT_PUBLIC_SITE_URL=
# otras variables necesarias (números de WhatsApp por complejo, etc.)
```

## Dominio y hosting

El sitio cuenta con un servicio de **contratación anual de nombre de dominio**, conectado y desplegado en **Vercel**.

> Completar con el dominio final (ej: `www.complejosdemar.com`) y cualquier detalle sobre la renovación anual del dominio.

## Estructura del proyecto

> Ajustar según la estructura real del repositorio.

```
├── components/       # Componentes reutilizables de UI
├── pages/ (o app/)   # Rutas y páginas del sitio
├── public/           # Imágenes y assets estáticos
├── data/             # Información de complejos y cabañas
└── styles/           # Estilos globales
```

## Scripts disponibles

```bash
npm run dev       # Corre el proyecto en modo desarrollo
npm run build     # Genera el build de producción
npm run start     # Sirve el build de producción
```

## Estado del proyecto

El proyecto está desplegado en producción, con dominio propio contratado de forma anual y hosting en Vercel.

> https://www.complejosdelmar.com.ar/ 

## Autores

Desarrollado por idigital.build.
