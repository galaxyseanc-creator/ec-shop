import { getProducts } from '@/lib/products'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CatalogClient from './CatalogClient'

export default async function CatalogPage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <CatalogClient products={products} />
      </main>

      <Footer />
    </div>
  )
}
