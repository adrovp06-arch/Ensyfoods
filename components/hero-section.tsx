"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToProducts = () => {
    const section = document.getElementById("productos")
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* IMAGEN DESKTOP */}

      <Image
        src="/image.jpg"
        alt="Productos ENSYFOODS"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center hidden md:block"
        quality={100}
      />

      {/* IMAGEN MOVIL */}

      <Image
        src="/image-mobile.jpg"
        alt="Productos ENSYFOODS"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:hidden"
        quality={100}
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      {/* CONTENIDO */}

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">

        <h1
          className={`text-white font-black tracking-tight transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ fontSize: "clamp(56px,11vw,120px)" }}
        >
          ENSYFOODS
        </h1>

        <p
          className={`mt-4 text-white/90 text-lg sm:text-xl font-medium transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "0.2s" }}
        >
          Distribuidor de productos importados esenciales
        </p>

        <p
          className={`mt-3 text-white/70 uppercase tracking-[0.25em] text-xs sm:text-sm transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "0.3s" }}
        >
          Huevos · Café · Carne · Carbón
        </p>

        <button
          onClick={scrollToProducts}
          className={`mt-8 bg-[#E8752A] text-white px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E8752A]/40 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "0.5s" }}
        >
          Ver catálogo →
        </button>

      </div>

      {/* SCROLL INDICATOR */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">

        <span className="text-xs uppercase tracking-widest">
          scroll
        </span>

        <ChevronDown className="w-5 h-5 animate-bounce" />

      </div>

    </section>

  )
}