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
      {/* Contact Section - Diseño Rústico con Madera CSS */}
      <section
        ref={sectionRef}
        className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
      >
        {/* 🪵 FONDO DE MADERA RÚSTICA (Generado con CSS - sin imágenes) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, #3D2317 0%, #5C3A2A 25%, #4A2C20 50%, #2D1A10 75%, #1F120A 100%),
              repeating-linear-gradient(90deg, 
                rgba(139, 69, 19, 0.3) 0px, 
                rgba(139, 69, 19, 0.3) 2px, 
                transparent 2px, 
                transparent 8px
              ),
              repeating-linear-gradient(0deg, 
                rgba(101, 67, 33, 0.2) 0px, 
                rgba(101, 67, 33, 0.2) 1px, 
                transparent 1px, 
                transparent 6px
              )
            `,
          }}
        />

        {/* Wood grain texture overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Decorative wood planks effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-full"
              style={{
                top: `${12 + i * 12}%`,
                background: `linear-gradient(90deg, transparent, rgba(139, 69, 19, 0.4), transparent)`,
              }}
            />
          ))}
        </div>

        {/* Glow effects */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#E8752A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B4513]/15 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left column - Branding & Info */}
            <div
              className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {/* Logo/Brand */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E8752A] to-[#8B4513] flex items-center justify-center shadow-lg shadow-[#E8752A]/20">
                  <span className="text-white font-black text-lg">E</span>
                </div>
                <span className="text-white font-black text-xl tracking-tight">ENSYFOODS</span>
              </div>

              {/* Main heading - ACTUALIZADO */}
              <h2 className="font-black text-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>
                Realiza tu{' '}
                <span className="text-[#E8752A]">pedido</span>
              </h2>

              {/* Description */}
              <p className="mt-6 text-white/70 text-[16px] leading-relaxed max-w-md">
                Productos importados de la más alta calidad.
                <span className="text-[#D4A574] font-medium"> Confirmación inmediata</span>,
                entrega coordinada y atención personalizada.
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#E8752A]/40 to-transparent" />

              {/* Info cards - estilo rústico */}
              <div className="space-y-4">

                <div
                  className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  style={{ transitionDelay: '0.1s' }}
                >
                  <div className="p-2.5 rounded-lg bg-[#8B4513]/30 border border-[#E8752A]/30">
                    <MapPin className="w-5 h-5 text-[#E8752A]" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm">Ubicación</p>
                    <p className="text-white/60 text-[13px] mt-0.5">
                      Av. Reforma 7-62 Z.9, Ed. Aristos Reforma, Nivel 6, Of. 607
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  style={{ transitionDelay: '0.2s' }}
                >
                  <div className="p-2.5 rounded-lg bg-[#8B4513]/30 border border-[#E8752A]/30">
                    <Truck className="w-5 h-5 text-[#E8752A]" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm">Entregas</p>
                    <p className="text-white/60 text-[13px] mt-0.5">
                      Cobertura en toda Guatemala • Fuera de capital: costo adicional
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  style={{ transitionDelay: '0.3s' }}
                >
                  <div className="p-2.5 rounded-lg bg-[#8B4513]/30 border border-[#E8752A]/30">
                    <Tag className="w-5 h-5 text-[#E8752A]" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm">Precios</p>
                    <p className="text-white/60 text-[13px] mt-0.5">
                      Todos los precios incluyen IVA • Factura electrónica disponible
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right column - Contact Actions */}
            <div
              className={`flex flex-col justify-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '0.2s' }}
            >
              {/* Card container - estilo rústico premium */}
              <div
                className="p-6 sm:p-8 rounded-2xl border border-[#E8752A]/20"
                style={{
                  background: 'linear-gradient(145deg, rgba(61, 35, 23, 0.9), rgba(31, 18, 10, 0.95))',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(232, 117, 42, 0.15)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-[#E8752A]" />
                  Contáctanos
                </h3>

                {/* Contact buttons - estilo rústico */}
                <div className="space-y-3">

                  {/* WhatsApp - Primary (con SVG inline) */}
                  <a
                    href="https://wa.me/50256329726?text=Hola%20ENSYFOODS,%20quiero%20hacer%20un%20pedido"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pedir por WhatsApp al 5632-9726"
                    className="group flex items-center justify-between w-full p-4 rounded-xl font-semibold text-[15px] transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #25D366, #128C7E)',
                      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* SVG de WhatsApp inline */}
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span className="text-white">WhatsApp Directo</span>
                    </div>
                    <span className="text-white/90 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      5632-9726 →
                    </span>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+50247390104"
                    aria-label="Llamar al 4739-0104"
                    className="group flex items-center justify-between w-full p-4 rounded-xl font-semibold text-[15px] transition-all duration-300 border border-white/10 hover:border-[#E8752A]/50"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-[#E8752A]/20">
                        <Phone className="w-4 h-4 text-[#E8752A]" />
                      </div>
                      <span className="text-white">Llamar ahora</span>
                    </div>
                    <span className="text-white/70 text-sm font-medium group-hover:text-[#E8752A] transition-colors">
                      4739-0104
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:contabilidad@ensyco.gt?subject=Pedido%20ENSYFOODS&body=Hola,%20me%20interesa%20realizar%20un%20pedido:"
                    aria-label="Enviar correo a contabilidad@ensyco.gt"
                    className="group flex items-center justify-between w-full p-4 rounded-xl font-semibold text-[15px] transition-all duration-300 border border-white/10 hover:border-[#E8752A]/50"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-[#E8752A]/10">
                        <Mail className="w-4 h-4 text-[#D4A574]" />
                      </div>
                      <span className="text-white">Enviar cotización</span>
                    </div>
                    <span className="text-[#D4A574] text-sm font-medium truncate max-w-[180px]">
                      contabilidad@ensyco.gt
                    </span>
                  </a>

                </div>

                {/* Trust badges */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-4 text-[11px] text-white/50">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                      Respuesta en &lt;15 min
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8752A]" />
                      Pago contra entrega
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574]" />
                      Factura electrónica
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary CTA */}
              <p className="mt-6 text-center text-white/40 text-[13px]">
                ¿Prefieres visitar nuestra oficina?
                <a href="#mapa" className="text-[#E8752A] hover:underline ml-1">
                  Ver ubicación en mapa →
                </a>
              </p>
            </div>

          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8752A]/30 to-transparent" />
      </section>

      {/* Footer - Minimalista rústico */}
      <footer className="bg-[#0A0503] py-6 px-4 sm:px-6 lg:px-8 border-t border-[#E8752A]/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-white font-black text-lg tracking-tight">ENSYFOODS</span>
            <span className="text-[#E8752A]/60 text-sm">•</span>
            <span className="text-white/40 text-sm">Guatemala 🇬🇹</span>
          </div>

          {/* Copyright */}
          <p className="text-white/20 text-[12px] text-center">
            &copy; 2026 ENSYFOODS • Productos importados premium
          </p>

          {/* Note */}
          <p className="text-white/15 text-[11px] text-center sm:text-right">
            Entregas según cronograma de despacho
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button - Estilo rústico (con SVG inline) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/50256329726?text=Hola%20ENSYFOODS,%20quiero%20hacer%20un%20pedido"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat rápido por WhatsApp"
          className="group relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.5), 0 0 0 3px rgba(26, 15, 10, 0.3)',
          }}
        >
          {/* SVG de WhatsApp inline */}
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>

          {/* Pulse animation */}
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-75"
            style={{ background: 'rgba(37, 211, 102, 0.4)' }}
          />

          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#1A0F0A] text-white text-[11px] font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#E8752A]/30">
            ¿Necesitas ayuda?
          </span>
        </a>
      </div>
    </>
  )
}