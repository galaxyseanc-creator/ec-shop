'use client'

import { Product } from '@/types/database'
import { useState, useEffect } from 'react'
import { useCartStore } from '@/store/cart'
import { getStockBySize, isSizeAvailable } from '@/lib/stock'

interface Props {
  product: Product
}

export default function ProductDetailClient({ product }: Props) {
  // 最初に在庫のあるサイズを選択
  const firstAvailableSize = product.sizes.find(size => isSizeAvailable(product, size)) || product.sizes[0] || ''
  const [selectedSize, setSelectedSize] = useState<string>(firstAvailableSize)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  
  const addItem = useCartStore((state) => state.addItem)

  // カテゴリに応じてラベルを変更
  const sizeLabel = product.category === 'アクセサリ' ? 'カラー' : 'サイズ'
  const selectMessage = product.category === 'アクセサリ' ? 'カラーを選択してください' : 'サイズを選択してください'

  // 選択したサイズの在庫数を取得
  const selectedSizeStock = selectedSize ? getStockBySize(product, selectedSize) : product.stock
  const isSelectedSizeAvailable = selectedSize ? isSizeAvailable(product, selectedSize) : product.stock > 0

  // サイズが変更されたら数量を1にリセット
  useEffect(() => {
    setQuantity(1)
  }, [selectedSize])

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert(selectMessage)
      return
    }

    setIsAdding(true)
    addItem(product, selectedSize, quantity)
    
    // 成功フィードバック
    setTimeout(() => {
      setIsAdding(false)
      setQuantity(1)
    }, 500)
  }

  const incrementQuantity = () => {
    const maxStock = selectedSize ? selectedSizeStock : product.stock
    if (quantity < maxStock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="space-y-6">
      {/* 商品名 */}
      <div>
        <h1 className="text-3xl font-bold tracking-wide mb-2">
          {product.name}
        </h1>
        <div className="flex items-center gap-3">
          <p className="text-2xl font-bold">
            ¥{product.price.toLocaleString()} JPY
          </p>
          {product.stock === 0 && (
            <span className="px-3 py-1 bg-white/10 text-white text-sm rounded">
              売り切れ
            </span>
          )}
        </div>
        <p className="text-sm text-white/60 mt-1">税込。</p>
      </div>

      {/* 商品説明 */}
      {product.description && (
        <div className="text-white/80">
          <p className="whitespace-pre-line">{product.description}</p>
        </div>
      )}

      {/* サイズ/カラー選択 */}
      {product.sizes.length > 0 && (
        <div>
          <label className="block text-sm font-medium mb-3">{sizeLabel}</label>
          <div className={`grid gap-3 ${product.sizes.length > 6 ? 'grid-cols-5' : 'grid-cols-4'}`}>
            {product.sizes.map((size) => {
              const sizeStock = getStockBySize(product, size)
              const sizeAvailable = isSizeAvailable(product, size)
              
              return (
                <button
                  key={size}
                  onClick={() => sizeAvailable && setSelectedSize(size)}
                  disabled={!sizeAvailable}
                  className={`
                    py-3 px-4 rounded-full border-2 transition-all relative
                    ${!sizeAvailable
                      ? 'border-white/20 text-white/30 cursor-not-allowed line-through'
                      : selectedSize === size
                        ? 'bg-white text-black border-white'
                        : 'bg-transparent text-white border-white/30 hover:border-white/60'
                    }
                  `}
                  title={!sizeAvailable ? '在庫なし' : `在庫: ${sizeStock}個`}
                >
                  {size}
                  {!sizeAvailable && (
                    <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 text-xs text-red-400">
                      ✕
                    </span>
                  )}
                </button>
              )
            })}
          </div>
          {/* サイズ別在庫表示 */}
          {selectedSize && (
            <div className="mt-2 text-sm text-white/60">
              {sizeLabel}: {selectedSize} - 在庫: {selectedSizeStock}個
            </div>
          )}
        </div>
      )}

      {/* 数量選択 */}
      <div>
        <label className="block text-sm font-medium mb-3">数量</label>
        <div className={`flex items-center border rounded w-fit ${!isSelectedSizeAvailable ? 'border-white/20 opacity-50' : 'border-white/30'}`}>
          <button
            onClick={decrementQuantity}
            disabled={quantity <= 1 || !isSelectedSizeAvailable}
            className="px-6 py-3 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            −
          </button>
          <div className={`px-8 py-3 border-x min-w-[80px] text-center ${!isSelectedSizeAvailable ? 'border-white/20' : 'border-white/30'}`}>
            {quantity}
          </div>
          <button
            onClick={incrementQuantity}
            disabled={quantity >= selectedSizeStock || !isSelectedSizeAvailable}
            className="px-6 py-3 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ＋
          </button>
        </div>
      </div>

      {/* カートに追加ボタン */}
      <div className="space-y-3">
        <button
          onClick={handleAddToCart}
          disabled={isAdding || !isSelectedSizeAvailable}
          className={`
            w-full py-4 border-2 rounded font-medium transition-all
            ${!isSelectedSizeAvailable
              ? 'border-white/30 text-white/50 cursor-not-allowed'
              : isAdding 
                ? 'bg-green-600 border-green-600 text-white' 
                : 'border-white text-white hover:bg-white hover:text-black'
            }
          `}
        >
          {!isSelectedSizeAvailable ? '売り切れ' : isAdding ? '✓ カートに追加しました' : 'カートに追加する'}
        </button>
      </div>

      {/* 在庫表示 */}
      {selectedSizeStock <= 5 && selectedSizeStock > 0 && (
        <div className="flex items-center gap-2 text-sm">
          <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
          <span className="text-orange-400">低在庫：残り{selectedSizeStock}個</span>
        </div>
      )}
    </div>
  )
}
