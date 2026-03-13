"use client"

import Image from "next/image"
import { ChevronDown, ShoppingCart } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"

export function HeroSection() {
  const { getTotalItems, openCart } = useCartStore()
  const totalItems = getTotalItems()

  const scrollToProducts = () => {
    const section = document.getElementById("productos")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
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
      />

      {/* IMAGEN MOVIL */}
      <Image
        src="/image-mobile.jpg"
        alt="Productos ENSYFOODS"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />

      {/* OVERLAY OSCURO */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* 🛒 BOTON CARRITO - POSICIÓN FIJA (FIXED) */}
      <button
        onClick={openCart}
        className="fixed top-6 right-6 z-50 bg-white rounded-full p-3 shadow-xl hover:scale-105 transition-transform duration-200"
        aria-label="Abrir carrito"
      >
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-black" />

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#E8752A] text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-[1.25rem] text-center animate-pulse">
              {totalItems}
            </span>
          )}
        </div>
      </button>

      {/* CONTENIDO HERO */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <h1 className="text-white font-black tracking-tighter text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">
          ENSYFOODS
        </h1>

        <p className="mt-4 text-white text-lg md:text-xl font-medium drop-shadow-md">
          Distribuidor de productos importados esenciales
        </p>

        <p className="mt-2 text-white/80 uppercase tracking-widest text-sm font-semibold">
          Huevos · Café · Carne · Carbón
        </p>

        <button
          onClick={scrollToProducts}
          className="mt-8 bg-[#E8752A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d66b26] hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Ver catálogo
        </button>
      </div>

      {/* INDICADOR SCROLL */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center z-10">
        <span className="text-xs tracking-widest uppercase mb-1">
          scroll
        </span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  )
}