import { getProducts } from '@/lib/products'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AccordionSection from '@/components/AccordionSection'
import Link from "next/link"
import Image from 'next/image'

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* ヒーロー画像 */}
      <div className="w-full relative">
        <Image
          src="/made-in-heaven-full-pic.jpg"
          alt="Hero Banner"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        {/* ITEM見出し */}
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 tracking-wider">ITEM</h2>

        {/* 商品グリッド */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/online-store/products/${product.id}`}
              className="group"
            >
              <div className="relative aspect-square bg-black rounded-lg overflow-hidden mb-4 border border-white/10 group-hover:border-purple-500/50 transition-all">
                {/* ネオングローエフェクト */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-green-500/10 to-blue-500/10 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                
                {/* 商品画像 */}
                {product.image_url ? (
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover relative z-10"
                    priority={false}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm z-10">
                    画像なし
                  </div>
                )}

                {/* 売り切れバッジ */}
                {product.stock === 0 && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 bg-white/90 text-black text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded">
                    SOLD OUT
                  </div>
                )}
              </div>

              {/* 商品情報 */}
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-medium tracking-wide group-hover:text-purple-400 transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-base sm:text-lg font-bold">
                  ¥{product.price.toLocaleString()} JPY
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <AccordionSection />

      <Footer />
    </div>
  )
}
