import Header from '@/components/Header'
import Link from 'next/link'

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
            ← ホームに戻る
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">特定商取引法に基づく表記</h1>

        <div className="space-y-8 text-white/80">
          {/* 販売業者 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">販売業者</h2>
            <p>SkyFisH</p>
          </section>

          {/* 運営責任者 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">運営責任者</h2>
            <p>[運営責任者名]</p>
          </section>

          {/* 所在地 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">所在地</h2>
            <p>[郵便番号]</p>
            <p>[住所]</p>
          </section>

          {/* 電話番号 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">電話番号</h2>
            <p>[電話番号]</p>
            <p className="text-sm text-white/60 mt-2">
              ※お問い合わせはメールにてお願いいたします
            </p>
          </section>

          {/* メールアドレス */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">メールアドレス</h2>
            <p>[メールアドレス]</p>
          </section>

          {/* 販売URL */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">販売URL</h2>
            <p>https://[あなたのドメイン]</p>
          </section>

          {/* 販売価格 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">販売価格</h2>
            <p>各商品ページに記載の価格（税込）</p>
          </section>

          {/* 商品代金以外の必要料金 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">商品代金以外の必要料金</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>配送料：全国一律 ¥500（税込）</li>
              <li>決済手数料：無料</li>
            </ul>
          </section>

          {/* お支払い方法 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">お支払い方法</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>クレジットカード（Visa、Mastercard、American Express等）</li>
              <li>その他、Stripeが対応する決済方法</li>
            </ul>
          </section>

          {/* お支払い時期 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">お支払い時期</h2>
            <p>クレジットカード：ご注文時に決済処理を行います</p>
          </section>

          {/* 商品の引き渡し時期 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">商品の引き渡し時期</h2>
            <p>ご注文確認後、3～7営業日以内に発送いたします。</p>
            <p className="text-sm text-white/60 mt-2">
              ※在庫状況や配送地域により変動する場合がございます
            </p>
          </section>

          {/* 返品・交換について */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">返品・交換について</h2>
            <div className="space-y-3">
              <p className="font-semibold">【返品可能な場合】</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>商品に不良や破損があった場合</li>
                <li>注文と異なる商品が届いた場合</li>
              </ul>
              
              <p className="font-semibold mt-4">【返品期限】</p>
              <p className="ml-4">商品到着後7日以内にご連絡ください</p>
              
              <p className="font-semibold mt-4">【返品送料】</p>
              <p className="ml-4">
                不良品・誤配送の場合：当店負担<br />
                お客様都合の場合：お客様負担
              </p>
            </div>
          </section>

          {/* キャンセルについて */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">キャンセルについて</h2>
            <p>発送前であればキャンセルが可能です。</p>
            <p className="mt-2">発送後のキャンセルはお受けできません。</p>
          </section>

          {/* 不良品の対応 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">不良品の対応</h2>
            <p>
              商品に不良や破損があった場合は、商品到着後7日以内にメールにてご連絡ください。
              確認後、良品と交換または返金対応させていただきます。
            </p>
          </section>

          {/* 個人情報の取り扱い */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">個人情報の取り扱い</h2>
            <p>
              お客様からお預かりした個人情報は、商品の発送および当店からのご連絡以外の目的では使用いたしません。
            </p>
            <p className="mt-2">
              詳しくは
              <Link href="/legal/privacy" className="text-purple-400 hover:text-purple-300 underline mx-1">
                プライバシーポリシー
              </Link>
              をご確認ください。
            </p>
          </section>
        </div>

        {/* フッターリンク */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/legal/privacy" className="text-purple-400 hover:text-purple-300">
              プライバシーポリシー
            </Link>
            <Link href="/legal/terms" className="text-purple-400 hover:text-purple-300">
              利用規約
            </Link>
            <Link href="/legal/shipping" className="text-purple-400 hover:text-purple-300">
              配送・返品ポリシー
            </Link>
            <Link href="/about" className="text-purple-400 hover:text-purple-300">
              会社概要
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
