import Header from '@/components/Header'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
            ← ホームに戻る
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">会社概要 / About</h1>

        <div className="space-y-12 text-white/80">
          {/* About SkyFisH */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">About SkyFisH</h2>
            <div className="space-y-4">
              <p>
                SkyFisHは、独創的なデザインとアートを追求するファッションブランドです。
              </p>
              <p>
                私たちは、日常に非日常を、現実に夢を、そして空間に無限の可能性をもたらすアイテムを
                デザインし、お届けしています。
              </p>
              <p>
                MADE IN HEAVENシリーズやOXYGEN MAGAZINEなど、
                独自の世界観を持つコレクションを展開し、
                着る人それぞれの個性を引き出すことを目指しています。
              </p>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Vision</h3>
                <p className="text-sm">
                  アートとファッションの境界を超え、
                  誰もが自分らしさを表現できる世界を創造します。
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Mission</h3>
                <p className="text-sm">
                  独創的なデザインと高品質な製品を通じて、
                  お客様の日常に驚きと喜びを提供します。
                </p>
              </div>
            </div>
          </section>

          {/* 会社情報 */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">会社情報</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-white/10">
                <dt className="font-semibold text-white/60">運営会社</dt>
                <dd className="md:col-span-2">SkyFisH</dd>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-white/10">
                <dt className="font-semibold text-white/60">代表者</dt>
                <dd className="md:col-span-2">[代表者名]</dd>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-white/10">
                <dt className="font-semibold text-white/60">設立</dt>
                <dd className="md:col-span-2">2026年1月</dd>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-white/10">
                <dt className="font-semibold text-white/60">所在地</dt>
                <dd className="md:col-span-2">
                  [郵便番号]<br />
                  [住所]
                </dd>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-white/10">
                <dt className="font-semibold text-white/60">事業内容</dt>
                <dd className="md:col-span-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>アパレル製品の企画・製造・販売</li>
                    <li>アートワークの制作・販売</li>
                    <li>オンラインストアの運営</li>
                  </ul>
                </dd>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-white/10">
                <dt className="font-semibold text-white/60">メールアドレス</dt>
                <dd className="md:col-span-2 text-purple-400">[メールアドレス]</dd>
              </div>
            </div>
          </section>

          {/* 取扱商品 */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">取扱商品</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">MADE IN HEAVEN シリーズ</h3>
                <p className="text-sm text-white/60">
                  独創的なグラフィックが特徴のTシャツコレクション
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">OXYGEN MAGAZINE シリーズ</h3>
                <p className="text-sm text-white/60">
                  アートとファッションが融合したマガジンスタイル
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">アクセサリー</h3>
                <p className="text-sm text-white/60">
                  バンダナなど、個性を引き出すアイテム
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">限定コレクション</h3>
                <p className="text-sm text-white/60">
                  季節ごとに展開する特別なアイテム
                </p>
              </div>
            </div>
          </section>

          {/* お問い合わせ */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">お問い合わせ</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <p className="mb-4">
                ご質問、ご要望、コラボレーションのご相談など、
                お気軽にお問い合わせください。
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-white/60">メールアドレス</p>
                  <p className="text-purple-400 text-lg">[メールアドレス]</p>
                </div>
                <div>
                  <p className="text-sm text-white/60">営業時間</p>
                  <p>平日 10:00 - 18:00（土日祝日を除く）</p>
                </div>
                <p className="text-sm text-white/60 mt-4">
                  ※お問い合わせには2～3営業日以内に回答いたします
                </p>
              </div>
            </div>
          </section>

          {/* SNS（将来的に追加） */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
            <p className="text-white/60 mb-4">最新情報はSNSでチェック</p>
            <div className="flex gap-4">
              <div className="px-6 py-3 border border-white/10 rounded hover:border-purple-500/50 transition-colors cursor-pointer">
                Instagram
              </div>
              <div className="px-6 py-3 border border-white/10 rounded hover:border-purple-500/50 transition-colors cursor-pointer">
                Twitter
              </div>
              <div className="px-6 py-3 border border-white/10 rounded hover:border-purple-500/50 transition-colors cursor-pointer">
                Facebook
              </div>
            </div>
            <p className="text-sm text-white/60 mt-4">※SNSアカウントは準備中です</p>
          </section>
        </div>

        {/* フッターリンク */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/legal/tokushoho" className="text-purple-400 hover:text-purple-300">
              特定商取引法に基づく表記
            </Link>
            <Link href="/legal/privacy" className="text-purple-400 hover:text-purple-300">
              プライバシーポリシー
            </Link>
            <Link href="/legal/terms" className="text-purple-400 hover:text-purple-300">
              利用規約
            </Link>
            <Link href="/legal/shipping" className="text-purple-400 hover:text-purple-300">
              配送・返品ポリシー
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
