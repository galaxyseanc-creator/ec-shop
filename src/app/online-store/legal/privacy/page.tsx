import Header from '@/components/Header'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
            ← ホームに戻る
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">プライバシーポリシー</h1>

        <div className="space-y-8 text-white/80">
          {/* 前文 */}
          <section>
            <p>
              SkyFisH（以下「当店」といいます）は、お客様の個人情報保護の重要性について認識し、
              個人情報の保護に関する法律（以下「個人情報保護法」といいます）を遵守すると共に、
              以下のプライバシーポリシー（以下「本ポリシー」といいます）に従い、
              適切な取扱い及び保護に努めます。
            </p>
          </section>

          {/* 1. 個人情報の定義 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. 個人情報の定義</h2>
            <p>
              本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された
              個人情報、すなわち、生存する個人に関する情報であって、
              当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの
              （他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）
              を意味するものとします。
            </p>
          </section>

          {/* 2. 個人情報の収集方法 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. 個人情報の収集方法</h2>
            <p>当店は、以下の方法でお客様の個人情報を収集します：</p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>会員登録時のご入力</li>
              <li>商品ご注文時のご入力</li>
              <li>お問い合わせフォームからのご入力</li>
              <li>メールでのお問い合わせ</li>
            </ul>
          </section>

          {/* 3. 収集する個人情報 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. 収集する個人情報</h2>
            <p>当店が収集する個人情報は以下の通りです：</p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>配送先住所</li>
              <li>電話番号</li>
              <li>購入履歴</li>
              <li>決済情報（クレジットカード情報はStripeにより安全に処理され、当店では保持しません）</li>
            </ul>
          </section>

          {/* 4. 個人情報の利用目的 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. 個人情報の利用目的</h2>
            <p>当店は、収集した個人情報を以下の目的で利用します：</p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>商品の配送</li>
              <li>ご注文内容の確認</li>
              <li>お問い合わせへの対応</li>
              <li>キャンペーン・セール情報などのご案内（同意をいただいた場合のみ）</li>
              <li>サービス向上のための統計データの作成</li>
              <li>不正利用の防止</li>
            </ul>
          </section>

          {/* 5. 個人情報の第三者提供 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. 個人情報の第三者提供</h2>
            <p>
              当店は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>配送業者等、業務委託先への必要最小限の情報提供</li>
            </ul>
          </section>

          {/* 6. 業務委託先への提供 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. 業務委託先への提供</h2>
            <p>当店は、以下の業務委託先に個人情報を提供します：</p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>決済代行会社（Stripe）- 決済処理のため</li>
              <li>配送業者 - 商品配送のため</li>
              <li>Supabase - データ保管のため</li>
            </ul>
            <p className="mt-4">
              これらの業務委託先に対しては、適切な安全管理措置を義務付けています。
            </p>
          </section>

          {/* 7. 個人情報の安全管理 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. 個人情報の安全管理</h2>
            <p>
              当店は、個人情報の漏洩、滅失、毀損等を防止するため、
              適切な安全管理措置を講じます。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>SSL/TLSによる通信の暗号化</li>
              <li>アクセス権限の制限</li>
              <li>定期的なセキュリティチェック</li>
            </ul>
          </section>

          {/* 8. Cookieの使用 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Cookieの使用</h2>
            <p>
              当店では、サービス向上のためCookieを使用しています。
              Cookieの使用を望まない場合は、ブラウザの設定により無効にすることができますが、
              一部機能がご利用いただけなくなる場合があります。
            </p>
          </section>

          {/* 9. お客様の権利 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. お客様の権利</h2>
            <p>お客様は、当店が保有する個人情報について、以下の権利を有します：</p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>開示請求</li>
              <li>訂正請求</li>
              <li>利用停止請求</li>
              <li>削除請求</li>
            </ul>
            <p className="mt-4">
              これらの請求を行う場合は、お問い合わせフォームよりご連絡ください。
            </p>
          </section>

          {/* 10. お問い合わせ */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. お問い合わせ</h2>
            <p>
              個人情報の取扱いに関するお問い合わせは、
              以下のメールアドレスまでお願いいたします。
            </p>
            <p className="mt-4 ml-4">
              メール：[メールアドレス]
            </p>
          </section>

          {/* 11. プライバシーポリシーの変更 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. プライバシーポリシーの変更</h2>
            <p>
              当店は、本ポリシーの内容を、法令の変更等に伴い、予告なく変更することがあります。
              変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点より効力を生じるものとします。
            </p>
          </section>

          {/* 制定日 */}
          <section className="pt-8 border-t border-white/10">
            <p className="text-sm">制定日：2026年1月1日</p>
            <p className="text-sm">最終改定日：2026年1月9日</p>
          </section>
        </div>

        {/* フッターリンク */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/online-store/legal/tokushoho" className="text-purple-400 hover:text-purple-300">
              特定商取引法に基づく表記
            </Link>
            <Link href="/online-store/legal/terms" className="text-purple-400 hover:text-purple-300">
              利用規約
            </Link>
            <Link href="/online-store/legal/shipping" className="text-purple-400 hover:text-purple-300">
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
