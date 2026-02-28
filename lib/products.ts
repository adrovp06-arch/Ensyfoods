import { Product } from './cart-store'

export const starProducts: Product[] = [
  {
    id: 'huevos-30',
    name: 'Carton de 30 Huevos Extra Grande',
    category: 'Huevos',
    description: 'Huevos frescos extra grandes, seleccion premium.',
    price: 39.75,
    unit: 'carton',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-15-ZG8COQ5iOcBiKv36k8qwx2fEWbNvwE.jpg',
    catalogType: 'star',
    priceTiers: [
      { quantity: '1 carton', price: 'Q39.75' },
      { quantity: '3+ cartones', price: 'Q38.50', savings: '-Q3.75' },
      { quantity: 'Caja de 12', price: 'Q38.33 c/u' }
    ]
  },
  {
    id: 'cafe-santa-cruz',
    name: 'Cafe Santa Cruz',
    category: 'Cafe',
    description: 'Cafe guatemalteco de altura, molido o en grano. Finca Cangrejo de Oro.',
    price: 49.00,
    unit: 'libra',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1772241395201-rJUwUAsapZza1giaug99Fr71iBPvpM.png',
    catalogType: 'star',
    badge: 'exclusive'
  },
  {
    id: 'chorizo-argentino',
    name: 'Chorizo Argentino',
    category: 'Cerdo',
    description: 'Chorizo artesanal estilo argentino, ideal para parrillada.',
    price: 33.00,
    unit: 'libra',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grok_image_1772242254360-AOJ5OlCoPPyWsHhW6MPpEJHcVEQ5pa.jpg',
    catalogType: 'star',
    badge: 'parrillada'
  },
  {
    id: 'carbon-santa-cruz',
    name: 'Carbon Premium Santa Cruz',
    category: 'Carbon',
    description: 'Carbon premium de larga duracion, ideal para asados.',
    price: 65.00,
    unit: 'bolsa 10lb',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1772241661347-N3OmrtE8XjFSlxvsFpWn1Og8G5tv84.png',
    catalogType: 'star',
    badge: 'exclusive',
    priceTiers: [
      { quantity: 'Bolsa 10lb', price: 'Q65.00' },
      { quantity: 'Saco 35lb', price: 'Q192.50', savings: 'Mejor precio' }
    ]
  }
]

export const catalogProducts: Product[] = [
  {
    id: 'papas-mydibel-1kg',
    name: 'Papas Fritas Mydibel 1kg',
    category: 'Papas',
    description: 'Papas fritas congeladas premium.',
    price: 35.00,
    unit: 'bolsa',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1772297001474-hl8LUKGb54HCdCOXovgdkU5RLeW8ab.png',
    catalogType: 'catalog',
    productType: 'papas'
  },
  {
    id: 'papas-mydibel-2.5kg',
    name: 'Papas Fritas Mydibel 2.5kg',
    category: 'Papas',
    description: 'Papas fritas congeladas premium, presentacion grande.',
    price: 70.00,
    unit: 'bolsa',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1772296950146-o5dCRZhLyOJ4gpV5dXSPlMsY2GtP8Q.png',
    catalogType: 'catalog',
    productType: 'papas'
  },
  {
    id: 'pechuguitas-empanizadas',
    name: 'Pechuguitas Empanizadas 5lb',
    category: 'Pollo',
    description: 'Pechugas de pollo empanizadas, listas para freir.',
    price: 191.00,
    unit: 'bolsa',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1772298018627-qrH36bFbpJgQkCMSMNtw9C4BRPtgg1.png',
    badge: 'imported',
    catalogType: 'catalog',
    productType: 'pollo'
  },
  {
    id: 'poporopos-pollo',
    name: 'Poporopos de Pollo 5lb',
    category: 'Pollo',
    description: 'Nuggets de pollo crujientes.',
    price: 194.50,
    unit: 'bolsa',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-20-3FxOohf44RIBbxyDWVw8GM2Vxv6k4a.jpg',
    badge: 'imported',
    catalogType: 'catalog',
    productType: 'pollo'
  },
  {
    id: 'filete-pechuga-10lb',
    name: 'Filete de Pechuga 10lb',
    category: 'Pollo',
    description: 'Filete de pechuga de pollo sin hueso.',
    price: 290.00,
    unit: 'bolsa',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=400&fit=crop',
    badge: 'imported',
    catalogType: 'catalog',
    productType: 'pollo'
  },
  {
    id: 'filete-pechuga-40lb',
    name: 'Filete de Pechuga Caja 40lb',
    category: 'Pollo',
    description: 'Caja de filete de pechuga, Q22/lb.',
    price: 880.00,
    unit: 'caja',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=400&fit=crop',
    badge: 'imported',
    catalogType: 'catalog',
    productType: 'pollo'
  },
  {
    id: 'cuadril-pierna-hudson',
    name: 'Cuadril y Pierna Hudson 10lb',
    category: 'Pollo',
    description: 'Cuadril y pierna de pollo importado.',
    price: 86.00,
    unit: 'bolsa',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&h=400&fit=crop',
    badge: 'imported',
    catalogType: 'catalog',
    productType: 'pollo'
  },
  {
    id: 'lomo-cerdo',
    name: 'Lomo de Cerdo',
    category: 'Cerdo',
    description: 'Lomo de cerdo fresco, corte premium.',
    price: 22.10,
    unit: 'libra',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&h=400&fit=crop',
    catalogType: 'catalog',
    productType: 'cerdo'
  },
  {
    id: 'costilla-riblet',
    name: 'Costilla Riblet 10lb',
    category: 'Cerdo',
    description: 'Costilla riblet para parrilla.',
    price: 205.00,
    unit: 'caja',
    image: 'https://images.unsplash.com/photo-1544025162-d76978f1cd1e?w=600&h=400&fit=crop',
    catalogType: 'catalog',
    productType: 'cerdo'
  },
  {
    id: 'saco-carbon-35lb',
    name: 'Saco Carbon 35lb',
    category: 'Carbon',
    description: 'Carbon premium en saco grande.',
    price: 192.50,
    unit: 'saco',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1772241661347-N3OmrtE8XjFSlxvsFpWn1Og8G5tv84.png',
    catalogType: 'catalog',
    productType: 'carbon'
  }
]

export const allProducts = [...starProducts, ...catalogProducts]
