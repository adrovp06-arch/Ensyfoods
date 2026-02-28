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
  const { addItem, updateQuantity, getItemQuantity } = useCartStore()
  const quantity = getItemQuantity(product.id)

  const handleAdd = () => {
    addItem(product)
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
      {/* Image area - 56% */}
      <div className="relative h-0 pb-[56%] overflow-hidden bg-[#F7F4EF]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? 'scale(1.04)' : 'scale(1)',
            objectPosition: product.id === 'huevos-30' ? 'center 30%' : 
                           product.id === 'carbon-santa-cruz' ? 'center 40%' : 'center center'
          }}
        />
        {/* Badges */}
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

      {/* Product info - 44% */}
      <div className="p-4 sm:p-6">
        {/* Category tag */}
        <span className="text-[9px] uppercase tracking-[0.15em] text-[#E8752A] font-bold">
          {product.category}
        </span>

        {/* Product name */}
        <h3
          className="mt-2 font-black text-[#1B3A6B] leading-tight"
          style={{ fontSize: 'clamp(17px, 1.8vw, 22px)' }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p className="mt-2 text-[13px] text-gray-500 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Price tiers for eggs */}
        {product.priceTiers && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.priceTiers.map((tier, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] bg-[rgba(27,58,107,0.06)] text-[#1B3A6B]"
              >
                <span>{tier.quantity}</span>
                <span className="font-semibold">&rarr;</span>
                <span className="font-bold">{tier.price}</span>
                {tier.savings && (
                  <span className="text-green-600 font-semibold">{tier.savings}</span>
                )}
              </span>
            ))}
          </div>
        )}

        {/* Price + CTA row */}
        <div className="mt-4 flex items-center justify-between gap-3">
          {/* Price pill */}
          <div className="flex items-baseline gap-0.5 bg-[#0A0F1E] px-3 py-1.5 sm:px-4 sm:py-2 rounded-[10px]">
            <span className="text-[12px] text-[#E8752A]/70 font-medium" style={{ verticalAlign: 'super' }}>
              Q
            </span>
            <span className="text-[24px] sm:text-[28px] font-black text-white leading-none">
              {product.price.toFixed(2).split('.')[0]}
            </span>
            <span className="text-[14px] font-bold text-white/60">
              .{product.price.toFixed(2).split('.')[1]}
            </span>
            <span className="ml-1.5 text-[10px] text-white/40">
              {product.unit}
            </span>
          </div>

          {/* Add to cart button */}
          {quantity === 0 ? (
            <button
              onClick={handleAdd}
              className="flex-shrink-0 bg-[#E8752A] text-white px-4 py-2.5 sm:px-5 rounded-full font-bold text-[13px] sm:text-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E8752A]/30"
            >
              Agregar
            </button>
          ) : (
            <div
              className="flex items-center gap-1 bg-[#0A0F1E] rounded-full px-2 py-1 transition-all duration-[220ms]"
              style={{
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <button
                onClick={handleDecrement}
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-6 text-center text-white font-black text-sm">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function CatalogCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem, updateQuantity, getItemQuantity } = useCartStore()
  const quantity = getItemQuantity(product.id)

  const handleAdd = () => addItem(product)
  const handleIncrement = () => updateQuantity(product.id, quantity + 1)
  const handleDecrement = () => updateQuantity(product.id, quantity - 1)

  const bgColor = product.bgColor || '#FFFFFF'
  // Products that need contain + bg color: filete pechuga, cuadril, lomo, costilla
  const useContain = ['filete-pechuga-10lb', 'filete-pechuga-40lb', 'cuadril-pierna-hudson', 'lomo-cerdo', 'costilla-riblet'].includes(product.id)
  const containBgColor = product.productType === 'cerdo' ? '#FDF0F5' : '#FDF5F0'

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
      {/* Image area - 48% aspect ratio on mobile, slightly taller on desktop */}
      <div
        className="relative h-0 pb-[52%] sm:pb-[48%] overflow-hidden"
        style={{ backgroundColor: useContain ? containBgColor : bgColor }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`transition-transform duration-[450ms] ease-out ${
            useContain ? 'object-contain p-4 drop-shadow-lg' : 'object-cover object-center'
          }`}
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />

        {/* Badges */}
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

      {/* Card body */}
      <div className="p-2.5 sm:p-3 flex flex-col gap-1 sm:gap-1.5">
        {/* Category tag */}
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.12em] text-[#E8752A] font-bold">
          {product.category}
        </span>

        {/* Product name */}
        <h4 className="text-[12px] sm:text-[13px] font-extrabold text-[#1B3A6B] leading-tight line-clamp-1">
          {product.name}
        </h4>

        {/* Price + Add button */}
        <div className="mt-1.5 sm:mt-2 flex items-center justify-between gap-2">
          {/* Price - clean typography without dark background */}
          <div className="flex items-baseline">
            <span className="text-[11px] sm:text-[12px] font-bold text-[#E8752A]/80 mr-0.5" style={{ alignSelf: 'flex-start', paddingTop: '3px' }}>
              Q
            </span>
            <span className="text-[19px] sm:text-[22px] font-black text-[#1B3A6B] leading-none tracking-tight">
              {product.price.toFixed(2).split('.')[0]}
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#1B3A6B]/50 ml-0.5">
              .{product.price.toFixed(2).split('.')[1]}
            </span>
            <span className="hidden sm:inline-block ml-1.5 text-[9px] text-gray-500 font-semibold bg-[rgba(27,58,107,0.07)] rounded px-1.5 py-0.5">
              {product.unit}
            </span>
          </div>

          {/* Add button */}
          {quantity === 0 ? (
            <button
              onClick={handleAdd}
              className="bg-[#E8752A] text-white h-8 sm:h-9 px-3 sm:px-4 rounded-full font-bold text-[11px] sm:text-[12px] transition-all duration-200 hover:shadow-md hover:shadow-[#E8752A]/20"
            >
              +
            </button>
          ) : (
            <div className="flex items-center gap-0.5 bg-[#0A0F1E] rounded-full px-1 sm:px-1.5 py-0.5">
              <button
                onClick={handleDecrement}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-5 sm:w-6 text-center text-white font-bold text-xs">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
