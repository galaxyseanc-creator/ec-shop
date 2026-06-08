import { getProductById } from '@/lib/products'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductPageClient from './ProductPageClient'

interface Props {
  params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        <ProductPageClient product={product} />
      </main>

      <Footer />
    </div>
  )
}
