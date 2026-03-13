"use client"
import { create } from 'zustand'

export interface Product {
  id: string
  name: string
  category: string
  description: string
  price: number
  unit: string
  image: string
  emoji?: string
  badge?: 'imported' | 'hot' | 'exclusive' | 'parrillada'
  bgColor?: string
  priceTiers?: { quantity: string; price: string; savings?: string }[]
  catalogType?: 'star' | 'catalog'
  productType?: 'pollo' | 'cerdo' | 'papas' | 'carbón' | 'otros'
}

export interface CartItem extends Product {
  quantity: number
  effectivePrice: number // ✅ precio real aplicado según cantidad
}

// ✅ Calcula el precio correcto de huevos según cantidad
function getEggsPrice(quantity: number): number {
  if (quantity >= 12) return 38.33
  if (quantity >= 3) return 38.50
  return 39.75
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  getItemQuantity: (productId: string) => number
  getTotalItems: () => number
  getTotalPrice: () => number
  getEffectivePrice: (productId: string) => number
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (product) => {
    set((state) => {
      const existingItem = state.items.find(item => item.id === product.id)
      if (existingItem) {
        const newQty = existingItem.quantity + 1
        const effectivePrice = product.id === 'huevos-30'
          ? getEggsPrice(newQty)
          : product.price
        return {
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: newQty, effectivePrice }
              : item
          )
        }
      }
      const effectivePrice = product.id === 'huevos-30'
        ? getEggsPrice(1)
        : product.price
      return {
        items: [...state.items, { ...product, quantity: 1, effectivePrice }]
      }
    })
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== productId)
    }))
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId)
      return
    }
    set((state) => ({
      items: state.items.map(item => {
        if (item.id !== productId) return item
        const effectivePrice = productId === 'huevos-30'
          ? getEggsPrice(quantity)
          : item.price
        return { ...item, quantity, effectivePrice }
      })
    }))
  },

  getItemQuantity: (productId) => {
    const item = get().items.find(item => item.id === productId)
    return item?.quantity || 0
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0)
  },

  getTotalPrice: () => {
    // ✅ Usa effectivePrice en lugar de price fijo
    return get().items.reduce((total, item) =>
      total + (item.effectivePrice * item.quantity), 0
    )
  },

  getEffectivePrice: (productId) => {
    const item = get().items.find(item => item.id === productId)
    return item?.effectivePrice || 0
  },

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen }))
}))