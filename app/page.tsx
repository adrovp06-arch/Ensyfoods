import { HeroSection } from "@/components/hero-section"
import { StarProducts } from "@/components/star-products"
import { CatalogSection } from "@/components/catalog-section"
import { ContactFooter } from "@/components/contact-footer"
import { CartDrawer } from "@/components/cart-drawer"

export default function HomePage() {
  return (
    <>
      <main id="contenido-principal" className="min-h-screen bg-white">
        <HeroSection />
        <StarProducts />
        <CatalogSection />
        <ContactFooter />
      </main>
      <CartDrawer />
    </>
  )
}