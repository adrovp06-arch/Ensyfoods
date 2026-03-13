"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronDown, ShoppingCart } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"

export function HeroSection() {

  const [isLoaded, setIsLoaded] = useState(false)

  const { getTotalItems, openCart } = useCartStore()
  const totalItems = getTotalItems()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToProducts = () => {
    const section = document.getElementById("productos")
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* IMAGEN DE FONDO RESPONSIVE */}

      <picture className="absolute inset-0">

        <source
          media="(max-width:768px)"
          srcSet="/image(1).jpg"
        />

        <Image
          src="/image.jpg"
          alt="Productos ENSYFOODS"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={100}
        />

      </picture>


      {/* OVERLAY OSCURO PARA MEJORAR CONTRASTE */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"></div>


      {/* TEXTURA SUTIL */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "28px 28px"
        }}
      />


      {/* CONTENIDO HERO */}

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        <h1
          className={`text-white font-black tracking-tight transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ fontSize: "clamp(56px,11vw,120px)" }}
        >
          ENSYFOODS
        </h1>

        <p
          className={`mt-6 text-white/70 uppercase tracking-[0.25em] text-xs sm:text-sm transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "0.2s" }}
        >
          Productos esenciales · Entrega rápida
        </p>

        <button
          onClick={scrollToProducts}
          className={`mt-8 bg-[#E8752A] text-white px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E8752A]/40 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
  )
}