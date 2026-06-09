'use client'

import { Product } from '@/types/database'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Props {
  product: Product
  selectedSize?: string
}

export default function ProductImages({ product, selectedSize }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  
  // 画像が存在しない場合の配列
  const images = product.images.length > 0 ? product.images : [product.image_url]
  const hasMultipleImages = images.length > 1

  // カラー選択に応じて画像を切り替え
  useEffect(() => {
    if (selectedSize && product.category === 'アクセサリ' && images.length > 1) {
      // カラー名から画像インデックスを推測
      const colorToIndexMap: { [key: string]: number } = {
        'ホワイト': 0,
        'シルバー': 1,
        'ブラック': 2,
      }
      
      const newIndex = colorToIndexMap[selectedSize]
      if (newIndex !== undefined && newIndex < images.length) {
        setSelectedImageIndex(newIndex)
      }
    }
  }, [selectedSize, product.category, images.length])

  return (
    <div className="space-y-4">
      {/* メイン画像 */}
      <div className="relative aspect-square bg-black rounded-lg overflow-hidden border border-white/10">
        {images[selectedImageIndex] ? (
          <>
            {/* ネオングローエフェクト */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-green-500/20 to-blue-500/20 blur-3xl animate-pulse"></div>
            
            {/* 商品画像 */}
            <Image
              src={images[selectedImageIndex]}
              alt={`${product.name} - 画像${selectedImageIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover relative z-10"
              priority={selectedImageIndex === 0}
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
            画像なし
          </div>
        )}
      </div>

      {/* サムネイル画像 */}
      {hasMultipleImages && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`
                relative aspect-square bg-black rounded border-2 transition-all overflow-hidden
                ${selectedImageIndex === index
                  ? 'border-purple-500'
                  : 'border-white/10 hover:border-purple-500/50'
                }
              `}
            >
              {image ? (
                <Image
                  src={image}
                  alt={`${product.name} サムネイル ${index + 1}`}
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs">
                  画像{index + 1}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
