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
  productType?: 'pollo' | 'cerdo' | 'papas' | 'carbon' | 'otros'
}

export interface CartItem extends Product {
  quantity: number
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
        return {
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return { items: [...state.items, { ...product, quantity: 1 }] }
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
      items: state.items.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
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
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
  },
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen }))
}))
