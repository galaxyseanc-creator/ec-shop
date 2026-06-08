'use client'

import { Product } from '@/types/database'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  products: Product[]
}

type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc'

export default function CatalogClient({ products }: Props) {
  const [sortBy, setSortBy] = useState<SortOption>('name-asc')
  const [showInStock, setShowInStock] = useState(false)
  const [showOutOfStock, setShowOutOfStock] = useState(false)
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(100000)

  // フィルタリングとソート
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products]

    // 在庫フィルター
    if (showInStock || showOutOfStock) {
      filtered = filtered.filter(product => {
        if (showInStock && !showOutOfStock) return product.stock > 0
        if (!showInStock && showOutOfStock) return product.stock === 0
        return true
      })
    }

    // 価格フィルター
    filtered = filtered.filter(product => 
      product.price >= minPrice && product.price <= maxPrice
    )

    // ソート
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name, 'ja')
        case 'name-desc':
          return b.name.localeCompare(a.name, 'ja')
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        default:
          return 0
      }
    })

    return filtered
  }, [products, sortBy, showInStock, showOutOfStock, minPrice, maxPrice])

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* 左側：フィルター */}
      <aside className="lg:w-64 flex-shrink-0">
        <div className="space-y-6 sticky top-4">
          {/* 絞り込みヘッダー */}
          <div>
            <h2 className="text-lg font-bold mb-4">絞り込み:</h2>
          </div>

          {/* 出品状況 */}
          <div className="border-t border-white/10 pt-6">
            <button 
              className="flex items-center justify-between w-full mb-4"
              onClick={() => {}}
            >
              <h3 className="font-semibold">出品状況</h3>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={showInStock}
                  onChange={(e) => setShowInStock(e.target.checked)}
                  className="w-4 h-4 rounded border-white/30 bg-transparent checked:bg-purple-600"
                />
                <span className="text-sm group-hover:text-white/80">
                  在庫あり ({products.filter(p => p.stock > 0).length})
                </span>
              </label>
              
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={showOutOfStock}
                  onChange={(e) => setShowOutOfStock(e.target.checked)}
                  className="w-4 h-4 rounded border-white/30 bg-transparent checked:bg-purple-600"
                />
                <span className="text-sm group-hover:text-white/80">
                  在庫切れ ({products.filter(p => p.stock === 0).length})
                </span>
              </label>
            </div>
          </div>

          {/* 価格 */}
          <div className="border-t border-white/10 pt-6">
            <button 
              className="flex items-center justify-between w-full mb-4"
              onClick={() => {}}
            >
              <h3 className="font-semibold">価格</h3>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-white/60 mb-2 block">最小価格</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm"
                  min="0"
                />
              </div>
              
              <div>
                <label className="text-xs text-white/60 mb-2 block">最大価格</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm"
                  min="0"
                />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* 右側：商品グリッド */}
      <div className="flex-1">
        {/* トップバー */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60">並び替え:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-sm cursor-pointer hover:border-white/30 transition-colors"
            >
              <option value="name-asc">アルファベット順, A-Z</option>
              <option value="name-desc">アルファベット順, Z-A</option>
              <option value="price-asc">価格の安い順</option>
              <option value="price-desc">価格の高い順</option>
            </select>
          </div>
          
          <div className="text-sm text-white/60">
            {filteredAndSortedProducts.length}個の商品
          </div>
        </div>

        {/* 商品グリッド */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredAndSortedProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="relative">
                {/* 商品画像 */}
                <div className="relative aspect-square bg-black rounded-lg overflow-hidden mb-4 border border-white/10 group-hover:border-purple-500/50 transition-all">
                  {/* 強力なネオングローエフェクト */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-green-500/30 to-blue-500/30 blur-3xl group-hover:blur-[60px] transition-all duration-500 animate-pulse"></div>
                  
                  {/* 商品画像 */}
                  {product.image_url ? (
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover relative z-10"
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
                <div className="space-y-2">
                  <h3 className="text-xs sm:text-sm font-medium tracking-wide group-hover:text-purple-400 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-base sm:text-lg font-bold">
                    ¥{product.price.toLocaleString()} JPY
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 商品が見つからない場合 */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/60 text-lg mb-4">条件に一致する商品が見つかりませんでした</p>
            <button
              onClick={() => {
                setShowInStock(false)
                setShowOutOfStock(false)
                setMinPrice(0)
                setMaxPrice(100000)
              }}
              className="px-6 py-3 border border-white/30 rounded hover:bg-white/5 transition-colors"
            >
              フィルターをリセット
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
