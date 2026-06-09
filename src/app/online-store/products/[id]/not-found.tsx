import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl text-white/60">商品が見つかりませんでした</p>
        <Link 
          href="/"
          className="inline-block px-8 py-3 border border-white rounded hover:bg-white hover:text-black transition-all"
        >
          トップページに戻る
        </Link>
      </div>
    </div>
  )
}
