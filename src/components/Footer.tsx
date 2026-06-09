import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* ロゴとSNS */}
        <div className="flex items-center justify-between mb-8">
          {/* 中央：ロゴ */}
          <div className="flex-1"></div>
          
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="SkyFisH Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </Link>

          {/* 右側：SNSリンク */}
          <div className="flex-1 flex justify-end">
            <a 
              href="https://www.instagram.com/kirakira_skyfish/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:text-white/60 transition-colors inline-block"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* フッターリンク */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/60 mb-6">
          <Link href="/online-store/legal/privacy" className="hover:text-white transition-colors">
            プライバシーポリシー
          </Link>
          <span className="text-white/30">·</span>
          <Link href="/online-store/legal/tokushoho" className="hover:text-white transition-colors">
            特定商取引法に基づく表記
          </Link>
          <span className="text-white/30">·</span>
          <Link href="/online-store/legal/shipping" className="hover:text-white transition-colors">
            返金ポリシー
          </Link>
          <span className="text-white/30">·</span>
          <Link href="/about" className="hover:text-white transition-colors">
            運営会社情報
          </Link>
        </div>

        {/* コピーライト */}
        <div className="text-center text-xs text-white/40">
          <p>© 2026, SkyFisH Powered by Next.js</p>
        </div>
      </div>
    </footer>
  )
}
