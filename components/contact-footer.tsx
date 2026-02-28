"use client"

import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, Truck, Tag } from 'lucide-react'

export function ContactFooter() {
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
    <>
      {/* Contact Section */}
      <section ref={sectionRef} className="bg-[#1B3A6B] py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left column */}
            <div
              className={`transition-all duration-550 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[18px]'
              }`}
            >
              <h2
                className="font-black text-white leading-none"
                style={{ fontSize: 'clamp(28px, 4vw, 50px)' }}
              >
                Realiza tu{' '}
                <span className="text-[#E8752A]">pedido</span>
              </h2>

              <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-[380px]">
                Usa tu carrito o escribenos directamente.
              </p>

              {/* Info notes */}
              <div
                className={`mt-8 space-y-3 text-white/30 text-[12px] leading-relaxed transition-all duration-550 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-[18px]'
                }`}
                style={{ transitionDelay: '0.1s' }}
              >
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Av. Reforma 7-62 Z.9, Ed. Aristos Reforma, Nivel 6, Of. 607</span>
                </p>
                <p className="flex items-start gap-2">
                  <Truck className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Entregas fuera de la capital tienen costo adicional</span>
                </p>
                <p className="flex items-start gap-2">
                  <Tag className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Precios incluyen IVA</span>
                </p>
              </div>
            </div>

            {/* Right column - Contact buttons */}
            <div
              className={`flex flex-col gap-3 transition-all duration-550 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[18px]'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              {/* WhatsApp */}
              <a
                href="https://wa.me/50256329726?text=Hola%20ENSYFOODS%2C%20quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-[10px] font-bold text-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/30"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                5632-9726
              </a>

              {/* Phone */}
              <a
                href="tel:+50247390104"
                className="flex items-center gap-3 px-5 py-4 rounded-[10px] font-bold text-[14px] text-white transition-colors hover:bg-white/10"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)'
                }}
              >
                <Phone className="w-5 h-5" />
                4739-0104
              </a>

              {/* Email */}
              <a
                href="mailto:contabilidad@ensyco.gt"
                className="flex items-center gap-3 px-5 py-4 rounded-[10px] font-bold text-[14px] text-white transition-colors hover:bg-white/10"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)'
                }}
              >
                <Mail className="w-5 h-5" />
                contabilidad@ensyco.gt
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0F1E] py-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="text-white font-black text-lg tracking-tight">
            ENSYFOODS
          </span>

          {/* Copyright */}
          <p className="text-white/20 text-[12px] text-center">
            &copy; 2026 ENSYFOODS &middot; Guatemala 🇬🇹
          </p>

          {/* Delivery note */}
          <p className="text-white/15 text-[12px] text-center sm:text-right">
            Entregas segun dias de despacho
          </p>
        </div>
      </footer>

      {/* Floating buttons */}
      <FloatingButtons />
    </>
  )
}

function FloatingButtons() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Chat button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="w-14 h-14 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center text-2xl transition-all duration-200 hover:bg-[#E8752A] hover:scale-[1.08] shadow-lg"
      >
        💬
      </button>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/50256329726?text=Hola%20ENSYFOODS%2C%20quiero%20hacer%20un%20pedido"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[52px] h-[52px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
        style={{
          animation: 'pulse-glow 2.5s ease-in-out infinite'
        }}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </div>
  )
}
