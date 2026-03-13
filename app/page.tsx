import { HeroSection } from "@/components/hero-section"
import { StarProducts } from "@/components/star-products"
import { CatalogSection } from "@/components/catalog-section"
import { CartDrawer } from "@/components/cart-drawer"

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-white">

        {/* Sección Hero con imagen de fondo y CTA */}
        <HeroSection />

        {/* Productos destacados */}
        <StarProducts />

        {/* Catálogo completo de productos */}
        <CatalogSection />

      </main>

      {/* Drawer del carrito (fuera del main para evitar conflictos de overflow) */}
      <CartDrawer />
    </>
  )
}