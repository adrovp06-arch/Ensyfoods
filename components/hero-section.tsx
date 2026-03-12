"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown, ShoppingCart } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import Image from "next/image"

export function HeroSection() {

  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const heroRef = useRef<HTMLElement>(null)

  const { getTotalItems, openCart } = useCartStore()
  const totalItems = getTotalItems()

  useEffect(() => {

    setIsLoaded(true)

    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetHeight
        setIsScrolled(window.scrollY > heroBottom - 100)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const scrollToProducts = () => {
    const section = document.getElementById("productos")
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* NAVBAR */}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#F7F4EF] shadow-md" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* LOGO */}

            <Image
              src="/logo.png"
              alt="ENSYFOODS"
              width={140}
              height={32}
              className="h-7 sm:h-8 w-auto transition-all duration-300"
              style={{
                filter: isScrolled ? "none" : "brightness(0) invert(1)"
              }}
            />

            {/* CART */}

            <button
              onClick={openCart}
              className="relative flex items-center gap-2 bg-[#E8752A] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E8752A]/30"
            >

              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />

              <span className="hidden sm:inline">Carrito</span>

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-[#0A0F1E] text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}

            </button>

          </div>

        </div>
      </nav>


      {/* HERO */}

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >

        {/* IMAGE BACKGROUND */}

        <Image
          src="https://i.ibb.co/N6TWMFBf/grok-image-1773359143886.jpg"
          alt="Productos ENSYFOODS"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_40%]"
        />

        {/* OVERLAY PARA LEGIBILIDAD */}

        <div className="absolute inset-0 bg-black/45" />

        {/* TEXTURA SUTIL */}

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />


        {/* CONTENIDO */}

        <div className="relative z-10 flex flex-col items-center text-center px-6">

          <h1
            className={`text-white font-black tracking-tight transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            style={{
              fontSize: "clamp(48px, 12vw, 120px)"
            }}
          >
            ENSYFOODS
          </h1>

          <p
            className={`mt-6 text-white/70 uppercase tracking-[0.25em] text-xs sm:text-sm transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Productos esenciales · Entrega rápida
          </p>

          <button
            onClick={scrollToProducts}
            className={`mt-8 bg-[#E8752A] text-white px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E8752A]/40 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            style={{ transitionDelay: "0.4s" }}
          >
            Ver productos →
          </button>

        </div>


        {/* INDICADOR SCROLL */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">

          <span className="text-xs uppercase tracking-widest">
            scroll
          </span>

          <ChevronDown className="w-5 h-5 animate-bounce" />

        </div>

      </section>
    </>
  )
}