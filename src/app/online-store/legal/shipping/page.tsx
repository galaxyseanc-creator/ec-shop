import Header from '@/components/Header'
import Link from 'next/link'

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
            ← ホームに戻る
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">配送・返品ポリシー</h1>

        <div className="space-y-8 text-white/80">
          {/* 配送について */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">配送について</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">配送業者</h3>
            <p>ヤマト運輸、佐川急便、日本郵便のいずれかでお届けします。</p>
            <p className="text-sm text-white/60 mt-2">※配送業者の指定はできません</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">配送料</h3>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">全国一律</span>
                <span className="text-2xl font-bold text-purple-400">¥500</span>
              </div>
              <p className="text-sm text-white/60 mt-2">※離島・一部地域は追加料金がかかる場合があります</p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">配送日数</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>ご注文確認後、3～7営業日以内に発送</li>
              <li>発送後、1～3日でお届け（地域により異なります）</li>
            </ul>
            <p className="text-sm text-white/60 mt-4">
              ※在庫状況、天候、交通事情等により遅延する場合がございます
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">配送時間帯指定</h3>
            <p>以下の時間帯で指定が可能です：</p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>午前中（8:00～12:00）</li>
              <li>14:00～16:00</li>
              <li>16:00～18:00</li>
              <li>18:00～20:00</li>
              <li>19:00～21:00</li>
            </ul>
            <p className="text-sm text-white/60 mt-4">
              ※配送業者や地域により指定できない場合があります
            </p>
          </section>

          {/* 返品・交換について */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">返品・交換について</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">返品可能な場合</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>商品に不良や破損があった場合</li>
              <li>注文と異なる商品が届いた場合</li>
              <li>配送中の事故により商品が破損した場合</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">返品できない場合</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>お客様都合による返品（イメージ違い、サイズ違い等）</li>
              <li>商品到着後8日以上経過した場合</li>
              <li>開封済み・使用済みの商品（不良品を除く）</li>
              <li>お客様の責任で汚損・破損した商品</li>
              <li>タグや付属品を紛失した商品</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">返品期限</h3>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mt-4">
              <p className="text-lg">商品到着後 <span className="text-purple-400 font-bold">7日以内</span></p>
              <p className="text-sm text-white/60 mt-2">期限を過ぎた場合は返品をお受けできません</p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">返品手順</h3>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>商品到着後7日以内にメールでご連絡ください
                <div className="ml-6 mt-2 text-sm">
                  <p>メールアドレス：[メールアドレス]</p>
                  <p className="text-white/60 mt-1">件名：返品希望 - 注文番号</p>
                </div>
              </li>
              <li>当店からの返品承認メールを受領後、商品を返送してください</li>
              <li>商品到着・確認後、7営業日以内に返金処理を行います</li>
            </ol>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">返品送料</h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">不良品・誤配送の場合</p>
                  <p className="text-white/60">送料は当店が負担します</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">お客様都合の場合</p>
                  <p className="text-white/60">送料はお客様負担となります</p>
                </div>
              </div>
            </div>
          </section>

          {/* 交換について */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">交換について</h2>
            <p>
              不良品や誤配送の場合は、良品と交換させていただきます。
              ただし、在庫状況により交換できない場合は、返金対応とさせていただきます。
            </p>
          </section>

          {/* キャンセルについて */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">キャンセルについて</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">発送前のキャンセル</h3>
                <p>メールにてご連絡いただければ、キャンセルが可能です。</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">発送後のキャンセル</h3>
                <p>発送後のキャンセルはお受けできません。</p>
                <p className="text-sm text-white/60 mt-2">
                  商品到着後、返品手順に従って返品処理を行ってください。
                </p>
              </div>
            </div>
          </section>

          {/* お問い合わせ */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">お問い合わせ</h2>
            <p>
              配送・返品に関するご質問は、以下のメールアドレスまでお願いいたします。
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-4">
              <p className="font-semibold">メールアドレス</p>
              <p className="text-purple-400 mt-2">[メールアドレス]</p>
              <p className="text-sm text-white/60 mt-4">
                ※お問い合わせには2～3営業日以内に回答いたします
              </p>
            </div>
          </section>
        </div>

        {/* フッターリンク */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/online-store/legal/tokushoho" className="text-purple-400 hover:text-purple-300">
              特定商取引法に基づく表記
            </Link>
            <Link href="/online-store/legal/privacy" className="text-purple-400 hover:text-purple-300">
              プライバシーポリシー
            </Link>
            <Link href="/online-store/legal/terms" className="text-purple-400 hover:text-purple-300">
              利用規約
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
