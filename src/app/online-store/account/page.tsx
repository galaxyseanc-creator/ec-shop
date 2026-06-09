'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import { signOut } from '@/lib/auth'

export default function AccountPage() {
  const { user, loading } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/online-store/login')
    }
  }, [user, loading, router])

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/')
    } catch (error) {
      console.error('ログアウトエラー:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">読み込み中...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">マイアカウント</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* アカウント情報 */}
            <div className="border border-white/10 rounded p-6 space-y-4">
              <h2 className="text-xl font-bold mb-4">アカウント情報</h2>
              
              <div>
                <label className="text-sm text-white/60">メールアドレス</label>
                <p className="text-lg">{user.email}</p>
              </div>

              <div>
                <label className="text-sm text-white/60">登録日</label>
                <p className="text-lg">
                  {new Date(user.created_at || '').toLocaleDateString('ja-JP')}
                </p>
              </div>

              <button
                onClick={handleSignOut}
                className="w-full py-3 border border-white/30 rounded hover:bg-white/10 transition-all"
              >
                ログアウト
              </button>
            </div>

            {/* 注文履歴（将来実装） */}
            <div className="border border-white/10 rounded p-6 space-y-4">
              <h2 className="text-xl font-bold mb-4">注文履歴</h2>
              
              <div className="text-center py-8 text-white/40">
                <p>まだ注文がありません</p>
              </div>
            </div>
          </div>

          {/* 追加メニュー */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-6 border border-white/10 rounded hover:border-purple-500/50 transition-all text-left">
              <h3 className="font-bold mb-2">配送先住所</h3>
              <p className="text-sm text-white/60">住所を管理</p>
            </button>

            <button className="p-6 border border-white/10 rounded hover:border-purple-500/50 transition-all text-left">
              <h3 className="font-bold mb-2">支払い方法</h3>
              <p className="text-sm text-white/60">カード情報を管理</p>
            </button>

            <button className="p-6 border border-white/10 rounded hover:border-purple-500/50 transition-all text-left">
              <h3 className="font-bold mb-2">お気に入り</h3>
              <p className="text-sm text-white/60">保存した商品</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
