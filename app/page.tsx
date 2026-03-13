import { HeroSection } from '@/components/hero-section'
import { WhySection } from '@/components/why-section'
import { StarProducts } from '@/components/star-products'
import { CatalogSection } from '@/components/catalog-section'
import { CartDrawer } from '@/components/cart-drawer'
import { ContactFooter } from '@/components/contact-footer'

export default function Home() {
  return (
    <main>

      <HeroSection />

      <WhySection />

      <StarProducts />

      <CatalogSection />

      <ContactFooter />

      <CartDrawer />

    </main>
  )
}