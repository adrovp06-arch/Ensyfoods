"use client"

import { useState, useEffect, useRef } from 'react'
import { X, Plus } from 'lucide-react'
import { ProductCard } from './product-card'
import { catalogProducts } from '@/lib/products'

type Category = 'todo' | 'papas' | 'pollo' | 'cerdo' | 'carbon'

const categories: { id: Category; label: string; emoji: string }[] = [
  { id: 'todo', label: 'Todos los Productos', emoji: '🛒' },
  { id: 'papas', label: 'Papas Fritas', emoji: '🍟' },
  { id: 'pollo', label: 'Pollo', emoji: '🍗' },
  { id: 'cerdo', label: 'Cerdo', emoji: '🥩' },
  { id: 'carbon', label: 'Carbón', emoji: '🔥' }
]

export function CatalogSection() {
  const [isOpen, setIsOpen] = useState(true)
  const [activeCategory, setActiveCategory] = useState<Category>('todo')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProducts =
    activeCategory === 'todo'
      ? catalogProducts
      : catalogProducts.filter((p) => p.productType === activeCategory)

  const productCount = catalogProducts.length

  return (
    <section ref={sectionRef} className="bg-[#F7F4EF]">
      {/* Toggle bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#EDE9E3] py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-colors hover:bg-[#E8E4DE]"
      >
        <span className="text-[13px] sm:text-[14px] font-bold text-[#1B3A6B]">
          {isOpen
            ? 'Ocultar catálogo completo'
            : `Ver catálogo completo — ${productCount} productos más`}
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#E8752A]' : 'bg-[#1B3A6B]'
            }`}
          style={{
            transform: isOpen ? 'rotate(0deg)' : 'rotate(45deg)'
          }}
        >
          {isOpen ? (
            <X className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-white" />
          )}
        </div>
      </button>

      {/* Collapsible content */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isOpen ? '2000px' : '0',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

          {/* TÍTULO */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Catálogo <span className="text-[#E8752A]">ENSYFOODS</span>
          </h2>

          {/* Category filters - CON EMOJIS */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-full p-1.5 shadow-sm border border-gray-200">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat.id
                      ? 'bg-[#E8752A] text-white shadow-md'
                      : 'text-gray-600 hover:text-[#E8752A] hover:bg-gray-50'
                    }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* All screens: Grid view */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-500 ease-out ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-[18px]'
                  }`}
                style={{
                  transitionDelay: `${0.1 + index * 0.05}s`
                }}
              >
                <ProductCard product={product} variant="catalog" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}