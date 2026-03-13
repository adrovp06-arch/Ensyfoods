"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Minus, Plus } from 'lucide-react'
import { Product, useCartStore } from '@/lib/cart-store'

interface ProductCardProps {
  product: Product
  variant?: 'star' | 'catalog'
}

export function ProductCard({ product, variant = 'star' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem, updateQuantity, getItemQuantity, openCart } = useCartStore()
  const quantity = getItemQuantity(product.id)

  // ✅ Agrega y abre el carrito para star cards también
  const handleAdd = () => {
    addItem(product)
    openCart()
  }

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1)
  }

  const handleDecrement = () => {
    updateQuantity(product.id, quantity - 1)
  }

  if (variant === 'catalog') {
    return <CatalogCard product={product} />
  }

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-out"
      style={{
        boxShadow: isHovered
          ? '0 12px 40px rgba(0,0,0,0.15)'
          : '0 4px 24px rgba(0,0,0,0.08)',
        border: isHovered
          ? '1.5px solid rgba(232,117,42,0.3)'
          : '1.5px solid rgba(27,58,107,0.06)',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-0 pb-[56%] overflow-hidden bg-[#F7F4EF]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? 'scale(1.04)' : 'scale(1)',
            objectPosition:
              product.id === 'huevos-30' ? 'center 30%' :
                product.id === 'carbon-santa-cruz' ? 'center 40%' : 'center center'
          }}
        />
        {product.badge === 'exclusive' && (
          <span className="absolute top-3 left-3 bg-[#E8752A] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md">
            Exclusivo
          </span>
        )}
        {product.badge === 'parrillada' && (
          <span className="absolute top-3 left-3 bg-[#DC2626] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md">
            Parrillada
          </span>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <span className="text-[9px] uppercase tracking-[0.15em] text-[#E8752A] font-bold">
          {product.category}
        </span>
        <h3
          className="mt-2 font-black text-[#1B3A6B] leading-tight"
          style={{ fontSize: 'clamp(17px, 1.8vw, 22px)' }}
        >
          {product.name}
        </h3>
        <p className="mt-2 text-[13px] text-gray-500 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Tiers de precio */}
        {product.priceTiers && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.priceTiers.map((tier, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] bg-[rgba(27,58,107,0.06)] text-[#1B3A6B]"
              >
                <span>{tier.quantity}</span>
                <span className="font-semibold">→</span>
                <span className="font-bold">{tier.price}</span>
                {tier.savings && (
                  <span className="text-green-600 font-semibold">{tier.savings}</span>
                )}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-baseline gap-0.5">
            <span
              className="text-[14px] font-bold text-[#E8752A]/75"
              style={{ alignSelf: 'flex-start', paddingTop: '4px' }}
            >
              Q
            </span>
            <span
              className="font-black text-[#E8752A] leading-none"
              style={{ fontSize: 'clamp(28px, 3vw, 38px)', letterSpacing: '-1px' }}
            >
              {product.price.toFixed(2).split('.')[0]}
            </span>
            <span className="text-[16px] font-bold text-[#E8752A]/60">
              .{product.price.toFixed(2).split('.')[1]}
            </span>
            <span
              className="ml-1.5 text-[11px] text-gray-500 font-semibold bg-[rgba(27,58,107,0.07)] rounded px-2 py-0.5"
              style={{ alignSelf: 'flex-end', paddingBottom: '3px' }}
            >
              {product.unit}
            </span>
          </div>

          {/* ✅ Siempre botón naranja — agrega y abre carrito */}
          <button
            onClick={handleAdd}
            className="flex-shrink-0 bg-[#E8752A] text-white px-5 py-2.5 rounded-full font-bold text-[13px] sm:text-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E8752A]/30"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}

function CatalogCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem, getItemQuantity, openCart } = useCartStore()
  const quantity = getItemQuantity(product.id)

  const handleAdd = () => {
    addItem(product)
    openCart()
  }

  const fallbackBg =
    product.productType === 'cerdo' ? '#FDF0F5' :
      product.productType === 'pollo' ? '#FDF5F0' : '#FFFFFF'

  return (
    <div
      className="flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ease-out"
      style={{
        boxShadow: isHovered
          ? '0 10px 32px rgba(27,58,107,0.12)'
          : '0 3px 12px rgba(27,58,107,0.06)',
        border: isHovered
          ? '1.5px solid rgba(232,117,42,0.30)'
          : '1.5px solid rgba(27,58,107,0.06)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative h-0 pb-[52%] sm:pb-[48%] overflow-hidden"
        style={{ backgroundColor: fallbackBg }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-[450ms] ease-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {product.badge === 'imported' && (
          <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-[#1B3A6B] text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
            Importado
          </span>
        )}
        {product.badge === 'hot' && (
          <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-[#E8752A] text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
            Popular
          </span>
        )}
        {product.badge === 'exclusive' && (
          <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-[#E8752A] text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
            Exclusivo
          </span>
        )}
        {product.badge === 'parrillada' && (
          <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-[#DC2626] text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
            Parrillada
          </span>
        )}
      </div>

      <div className="p-2.5 sm:p-3 flex flex-col gap-1 sm:gap-1.5 flex-1">
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.12em] text-[#E8752A] font-bold">
          {product.category}
        </span>
        <h4 className="text-[12px] sm:text-[14px] font-extrabold text-[#0F2548] leading-[1.25] line-clamp-2 mb-auto">
          {product.name}
        </h4>

        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex items-baseline">
            <span
              className="text-[11px] font-bold text-[#E8752A]/80 mr-0.5"
              style={{ alignSelf: 'flex-start', paddingTop: '3px' }}
            >
              Q
            </span>
            <span className="text-[19px] sm:text-[22px] font-black text-[#1B3A6B] leading-none tracking-[-0.3px]">
              {product.price.toFixed(2).split('.')[0]}
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#1B3A6B]/50 ml-0.5">
              .{product.price.toFixed(2).split('.')[1]}
            </span>
            <span className="hidden sm:inline-block ml-1.5 text-[9px] text-gray-500 font-semibold bg-[rgba(27,58,107,0.07)] rounded px-1.5 py-0.5">
              {product.unit}
            </span>
          </div>

          <button
            onClick={handleAdd}
            className="flex-shrink-0 bg-[#E8752A] text-white h-8 sm:h-10 px-3 sm:px-5 rounded-full font-extrabold text-[11px] sm:text-[13px] flex items-center justify-center transition-all duration-[220ms] hover:-translate-y-0.5"
            style={{ boxShadow: '0 4px 14px rgba(232,117,42,0.35)' }}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}