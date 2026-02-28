"use client"

import { useEffect, useRef, useState } from 'react'
import { ProductCard } from './product-card'
import { starProducts } from '@/lib/products'

export function StarProducts() {
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

  return (
    <section
      ref={sectionRef}
      id="productos"
      className="bg-[#F7F4EF] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          {/* Eyebrow */}
          <span
            className={`inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#E8752A] transition-all duration-500 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-[18px]'
            }`}
          >
            LO MAS PEDIDO
          </span>

          {/* Title */}
          <h2
            className={`mt-3 font-black text-[#1B3A6B] leading-none transition-all duration-500 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-[18px]'
            }`}
            style={{
              fontSize: 'clamp(26px, 3.5vw, 46px)',
              transitionDelay: '0.1s'
            }}
          >
            Los 4 <span className="text-[#E8752A] italic">esenciales</span>
          </h2>
        </div>

        {/* Product grid - 2x2 */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6"
          style={{ gap: 'clamp(12px, 2vw, 24px)' }}
        >
          {starProducts.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-550 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[18px]'
              }`}
              style={{
                transitionDelay: `${0.2 + index * 0.1}s`
              }}
            >
              <ProductCard product={product} variant="star" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
