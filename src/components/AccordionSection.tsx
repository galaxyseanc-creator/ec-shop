'use client'

import { useState } from 'react'

export default function AccordionSection() {
  const [openAbout, setOpenAbout] = useState(false)
  const [openNews, setOpenNews] = useState(false)

  return (
    <div className="border-t border-white/10 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-0">
          {/* About us */}
          <div className="border-b border-white/10">
            <button
              onClick={() => setOpenAbout(!openAbout)}
              className="w-full flex items-center justify-between py-6 text-left hover:text-white/80 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white flex items-center justify-center">
                  {openAbout && (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="font-medium">About us</span>
              </div>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${openAbout ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openAbout && (
              <div className="pb-6 text-sm text-white/80 leading-relaxed space-y-4">
                <p>2023年に始動したクリエイティブクルー "SkyFisH"。</p>
                
                <p>未確認生命体・スカイフィッシュをモチーフとし、彼らの純粋な心を持ち続ける姿勢は、半透明の身体で酸素を追い求めるその生き様と重なる。</p>
                
                <p>彼らは「多次元並行宇宙の構築」をコンセプトに掲げ、</p>
                
                <p>"創る"から"輸入する"という発想をベースに、SkyFisHユニバースから日々転送されるアイテムやアイデアをもとに、アパレルブランドをも展開する。</p>
                
                <p>一点ものや異世界の文化にインスパイアされた衣服・装飾品にこだわり、東京を拠点に発信中。</p>
                
                <div className="border-t border-white/10 my-6"></div>
                
                <p>SkyFisH is a creative crew that launched in 2023.</p>
                
                <p>Inspired by the mysterious lifeform known as the skyfish (a type of cryptid), they strive to maintain a pure heart—just like the translucent creature chasing oxygen in the unknown skies.</p>
                
                <p>With the concept of "constructing multidimensional parallel universes,"</p>
                
                <p>they run an apparel brand based on the idea of importing from creation.</p>
                
                <p>Every item and idea is transferred daily from the SkyFisH Universe, forming a collection that blends imagination with tangible reality.</p>
                
                <p>Focusing on one-of-a-kind pieces and garments inspired by the cultures of other worlds,</p>
                
                <p>SkyFisH shares its unique vision from its base in Tokyo.</p>
              </div>
            )}
          </div>

          {/* SkyFisH NEWS */}
          <div className="border-b border-white/10">
            <button
              onClick={() => setOpenNews(!openNews)}
              className="w-full flex items-center justify-between py-6 text-left hover:text-white/80 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white flex items-center justify-center">
                  {openNews && (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="font-medium">SkyFisH NEWS</span>
              </div>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${openNews ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openNews && (
              <div className="pb-6 text-sm text-white/80 leading-relaxed">
                <p>最新のニュースは準備中です。</p>
                <p className="mt-2 text-white/60">Coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
