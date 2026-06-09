'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Link from 'next/link'
import { useCartStore } from '@/store/cart'

// useSearchParams を使用するコンポーネントを分離
function OrderSuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)
  const clearCart = useCartStore((state) => state.clearCart)

  useEffect(() => {
    // カートをクリア
    clearCart()
    setLoading(false)
  }, [clearCart])

  if (loading) {
    return (
      <div className="text-center">読み込み中...</div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* 成功アイコン */}
        <div className="w-20 h-20 mx-auto bg-green-600 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* メッセージ */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">ご注文ありがとうございます！</h1>
          <p className="text-xl text-white/80">
            お支払いが正常に完了しました
          </p>
        </div>

        {/* 詳細 */}
        <div className="border border-white/10 rounded p-8 space-y-4 text-left">
          <h2 className="text-xl font-bold">次のステップ</h2>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-purple-400">①</span>
              <span>注文確認メールをお送りしました</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400">②</span>
              <span>商品の準備が整い次第、発送いたします</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400">③</span>
              <span>発送完了時に追跡番号をお送りします</span>
            </li>
          </ul>
        </div>

        {/* セッション情報 */}
        {sessionId && (
          <div className="text-sm text-white/40">
            注文番号: {sessionId.slice(-12)}
          </div>
        )}

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/online-store/account"
            className="px-8 py-3 bg-white text-black rounded hover:bg-white/90 transition-all font-medium"
          >
            マイアカウント
          </Link>
          <Link 
            href="/"
            className="px-8 py-3 border border-white rounded hover:bg-white/10 transition-all font-medium"
          >
            買い物を続ける
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <Suspense fallback={
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">読み込み中...</div>
        </div>
      }>
        <OrderSuccessContent />
      </Suspense>
    </div>
  )
}
