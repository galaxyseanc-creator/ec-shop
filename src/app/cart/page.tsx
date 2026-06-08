'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCartStore } from '@/store/cart'
import { useAuthStore } from '@/store/auth'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore()
  const { user } = useAuthStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleCheckout = async () => {
    setError('')
    setLoading(true)

    try {
      // 未ログインの場合はログインページへ
      if (!user) {
        router.push('/login?redirect=/cart')
        return
      }

      // Checkout セッション作成
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          userId: user.id,
          email: user.email,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'チェックアウトに失敗しました')
      }

      // Stripeのチェックアウトページへリダイレクト（新しい方法）
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('チェックアウトURLの取得に失敗しました')
      }
    } catch (err: any) {
      console.error('Checkout error:', err)
      setError(err.message || 'エラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold">あなたのカート</h1>
            <p className="text-xl text-white/60">カートの中身が空です</p>
            <Link 
              href="/"
              className="inline-block px-8 py-3 border border-white rounded hover:bg-white hover:text-black transition-all"
            >
              買い物を続ける
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">あなたのカート</h1>
          <Link 
            href="/"
            className="text-white/60 hover:text-white underline transition-colors"
          >
            買い物を続ける
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* カートアイテム一覧 */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div 
                key={`${item.product.id}-${item.size}`}
                className="flex gap-4 p-4 border border-white/10 rounded"
              >
                {/* 商品画像 */}
                <div className="w-24 h-24 bg-black border border-white/10 rounded flex-shrink-0 relative overflow-hidden">
                  {item.product.image_url ? (
                    <Image
                      src={item.product.image_url}
                      alt={item.product.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs">
                      画像なし
                    </div>
                  )}
                </div>

                {/* 商品情報 */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link 
                      href={`/products/${item.product.id}`}
                      className="font-medium hover:text-purple-400 transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    {item.size && (
                      <p className="text-sm text-white/60 mt-1">サイズ: {item.size}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    {/* 数量変更 */}
                    <div className="flex items-center border border-white/30 rounded">
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            updateQuantity(item.product.id, item.size, item.quantity - 1)
                          }
                        }}
                        className="px-3 py-1 hover:bg-white/10 transition-colors"
                      >
                        −
                      </button>
                      <div className="px-4 py-1 border-x border-white/30 min-w-[60px] text-center">
                        {item.quantity}
                      </div>
                      <button
                        onClick={() => {
                          if (item.quantity < item.product.stock) {
                            updateQuantity(item.product.id, item.size, item.quantity + 1)
                          }
                        }}
                        className="px-3 py-1 hover:bg-white/10 transition-colors"
                      >
                        ＋
                      </button>
                    </div>

                    {/* 価格 & 削除 */}
                    <div className="text-right space-y-2">
                      <p className="font-bold">
                        ¥{(item.product.price * item.quantity).toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="text-sm text-white/60 hover:text-red-400 transition-colors underline"
                      >
                        削除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 見積もり合計 */}
          <div className="lg:col-span-1">
            <div className="border border-white/10 rounded p-6 space-y-4 sticky top-4">
              <h2 className="text-xl font-bold mb-4">見積もり合計</h2>
              
              {error && (
                <div className="p-3 bg-red-900/20 border border-red-500/50 rounded text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">小計</span>
                  <span>¥{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">配送料</span>
                  <span className="text-white/60">チェックアウト時に計算</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>合計</span>
                  <span>¥{getTotalPrice().toLocaleString()} JPY</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                disabled={loading}
                className="w-full py-3 bg-white text-black rounded hover:bg-white/90 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '処理中...' : 'チェックアウト'}
              </button>

              {!user && (
                <p className="text-xs text-center text-white/60">
                  ※ チェックアウトにはログインが必要です
                </p>
              )}

              <button
                onClick={clearCart}
                className="w-full py-2 text-sm text-white/60 hover:text-red-400 transition-colors underline"
              >
                カートを空にする
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
