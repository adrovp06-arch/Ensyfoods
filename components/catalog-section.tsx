"use client"

import { useState, useEffect, useRef } from 'react'
import { X, Plus } from 'lucide-react'
import { ProductCard } from './product-card'
import { catalogProducts } from '@/lib/products'

type Category = 'todo' | 'papas' | 'pollo' | 'cerdo' | 'carbon'

const categories: { id: Category; label: string }[] = [
  { id: 'todo', label: 'Todo' },
  { id: 'papas', label: 'Papas' },
  { id: 'pollo', label: 'Pollo' },
  { id: 'cerdo', label: 'Cerdo' },
  { id: 'carbon', label: 'Carbon' }
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
            ? 'Ocultar catalogo completo'
            : `Ver catalogo completo — ${productCount} productos mas`}
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-[#E8752A]' : 'bg-[#1B3A6B]'
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
          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#1B3A6B] text-white'
                    : 'bg-white text-gray-600 border border-[rgba(27,58,107,0.1)] hover:border-[#E8752A] hover:text-[#E8752A]'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* All screens: Grid view - 2 cols mobile, 3 cols tablet, 4 cols desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-500 ease-out ${
                  isVisible
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


