'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { useAuthStore } from '@/store/auth'
import { signOut } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const totalItems = useCartStore((state) => state.getTotalItems())
  const { user, loading } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/')
    } catch (error) {
      console.error('ログアウトエラー:', error)
    }
  }

  return (
    <header className="border-b border-white/10">
      <div className="container mx-auto px-4 py-6">
        {/* トップ行：検索、ロゴ、ユーザー/カート */}
        <div className="flex items-center justify-between mb-6">
          {/* 左側：検索 */}
          <button className="p-2 hover:text-white/60 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* 中央：ロゴ */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="SkyFisH Logo"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </Link>

          {/* 右側：ユーザー & カート */}
          <div className="flex items-center gap-2">
            {mounted && !loading && (
              user ? (
                <Link href="/account" className="p-2 hover:text-white/60 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>
              ) : (
                <Link href="/login" className="p-2 hover:text-white/60 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>
              )
            )}
            
            <Link href="/cart" className="p-2 relative hover:text-white/60 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* ナビゲーション */}
        <nav className="flex items-center justify-center gap-8 text-sm tracking-wider">
          <Link href="/" className="hover:text-white/60 transition-colors">
            HOME
          </Link>
          <Link href="/catalog" className="hover:text-white/60 transition-colors">
            CATALOG
          </Link>
          <Link href="/contact" className="hover:text-white/60 transition-colors">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  )
}
