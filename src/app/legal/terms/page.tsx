import Header from '@/components/Header'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
            ← ホームに戻る
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">利用規約</h1>

        <div className="space-y-8 text-white/80">
          {/* 前文 */}
          <section>
            <p>
              この利用規約（以下「本規約」といいます）は、SkyFisH（以下「当店」といいます）が
              運営するオンラインストア（以下「本サービス」といいます）の利用条件を定めるものです。
              本サービスをご利用いただく際には、本規約にご同意いただく必要があります。
            </p>
          </section>

          {/* 第1条 適用 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第1条（適用）</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>本規約は、本サービスの利用に関する当店とユーザーとの間の権利義務関係を定めることを目的とし、
                ユーザーと当店との間の本サービスの利用に関わる一切の関係に適用されます。</li>
              <li>当店が本サービス上で掲載する本サービス利用に関するルール等は、本規約の一部を構成するものとします。</li>
            </ol>
          </section>

          {/* 第2条 定義 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第2条（定義）</h2>
            <p>本規約において使用する用語の定義は、以下の通りとします。</p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>「ユーザー」とは、本サービスを利用する全ての方をいいます。</li>
              <li>「会員」とは、本サービスにユーザー登録を行った方をいいます。</li>
              <li>「商品」とは、当店が本サービスを通じて販売する商品をいいます。</li>
            </ul>
          </section>

          {/* 第3条 会員登録 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第3条（会員登録）</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>本サービスの利用を希望する方は、本規約に同意の上、当店の定める方法により会員登録を申請することができます。</li>
              <li>会員登録の申請があった場合、当店は審査を行い、承認した場合に会員登録が完了するものとします。</li>
              <li>当店は、会員登録の申請者が以下のいずれかに該当する場合、登録を拒否することがあります：
                <ul className="list-disc list-inside space-y-1 mt-2 ml-8">
                  <li>虚偽の情報を登録した場合</li>
                  <li>過去に本規約違反により会員資格を取り消された方</li>
                  <li>その他、当店が不適切と判断した場合</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* 第4条 購入契約 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第4条（購入契約）</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>ユーザーは、本サービス上で商品を選択し、購入手続きを完了することで商品の購入を申し込むことができます。</li>
              <li>購入契約は、当店がユーザーの購入申込を承諾した時点で成立します。</li>
              <li>当店は、以下の場合、購入申込を承諾しないことがあります：
                <ul className="list-disc list-inside space-y-1 mt-2 ml-8">
                  <li>在庫がない場合</li>
                  <li>決済が正常に完了しなかった場合</li>
                  <li>システムエラー等により正常な注文と認められない場合</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* 第5条 支払い */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第5条（支払い）</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>ユーザーは、商品代金及び送料等の費用を、当店が指定する方法により支払うものとします。</li>
              <li>支払方法は、クレジットカード決済その他当店が定める方法とします。</li>
              <li>決済に関する情報は、決済代行会社により安全に処理されます。</li>
            </ol>
          </section>

          {/* 第6条 商品の配送 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第6条（商品の配送）</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>当店は、注文確認後、3～7営業日以内に商品を発送します。</li>
              <li>配送日時の指定がある場合は、可能な限り対応いたしますが、確約するものではありません。</li>
              <li>天災地変、交通事情等、当店の責に帰さない事由により配送が遅延した場合、当店は責任を負いません。</li>
            </ol>
          </section>

          {/* 第7条 返品・交換 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第7条（返品・交換）</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>商品に不良や破損があった場合、または注文と異なる商品が届いた場合は、商品到着後7日以内にご連絡ください。</li>
              <li>お客様都合による返品・交換は原則としてお受けできません。</li>
              <li>詳細は
                <Link href="/legal/shipping" className="text-purple-400 hover:text-purple-300 underline mx-1">
                  配送・返品ポリシー
                </Link>
                をご確認ください。
              </li>
            </ol>
          </section>

          {/* 第8条 禁止事項 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第8条（禁止事項）</h2>
            <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：</p>
            <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>虚偽の情報を登録する行為</li>
              <li>他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
              <li>本サービスのネットワークまたはシステム等に過度な負荷をかける行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>転売を目的とした大量購入行為</li>
              <li>その他、当店が不適切と判断する行為</li>
            </ol>
          </section>

          {/* 第9条 サービスの停止・終了 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第9条（サービスの停止・終了）</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>当店は、以下の場合、事前の通知なく本サービスの全部または一部を停止または終了することができます：
                <ul className="list-disc list-inside space-y-1 mt-2 ml-8">
                  <li>システムの保守、点検、修理を行う場合</li>
                  <li>火災、停電、天災地変等の不可抗力により本サービスの運営ができなくなった場合</li>
                  <li>その他、当店が停止または終了が必要と判断した場合</li>
                </ul>
              </li>
              <li>当店は、本条に基づき当店が行った措置によりユーザーに生じた損害について一切の責任を負いません。</li>
            </ol>
          </section>

          {/* 第10条 免責事項 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第10条（免責事項）</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>当店は、本サービスに関して、その完全性、正確性、確実性、有用性等について、いかなる保証も行いません。</li>
              <li>当店は、本サービスに起因してユーザーに生じた損害について、一切の責任を負いません。</li>
              <li>ユーザーと第三者との間で生じたトラブルについては、当店は一切の責任を負いません。</li>
            </ol>
          </section>

          {/* 第11条 利用規約の変更 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第11条（利用規約の変更）</h2>
            <p>
              当店は、必要に応じて本規約を変更することができます。
              変更後の規約は、本サービス上に掲載した時点から効力を生じるものとします。
            </p>
          </section>

          {/* 第12条 準拠法・管轄裁判所 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第12条（準拠法・管轄裁判所）</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>本サービスに関して紛争が生じた場合には、当店の所在地を管轄する裁判所を専属的合意管轄裁判所とします。</li>
            </ol>
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
            <Link href="/legal/tokushoho" className="text-purple-400 hover:text-purple-300">
              特定商取引法に基づく表記
            </Link>
            <Link href="/legal/privacy" className="text-purple-400 hover:text-purple-300">
              プライバシーポリシー
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
