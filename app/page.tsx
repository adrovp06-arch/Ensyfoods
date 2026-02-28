import { HeroSection } from '@/components/hero-section'
import { StarProducts } from '@/components/star-products'
import { CatalogSection } from '@/components/catalog-section'
import { CartDrawer } from '@/components/cart-drawer'
import { ContactFooter } from '@/components/contact-footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StarProducts />
      <CatalogSection />
      <ContactFooter />
      <CartDrawer />
    </main>
  )
}
