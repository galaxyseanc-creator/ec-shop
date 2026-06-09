'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        
        // 5秒後にメッセージをクリア
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('送信エラー:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 名前とメールアドレス（2列） */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 名前 */}
        <div>
          <label htmlFor="name" className="sr-only">名前</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="名前"
            className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-none text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* メールアドレス */}
        <div>
          <label htmlFor="email" className="sr-only">メール *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="メール *"
            required
            className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-none text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
          />
        </div>
      </div>

      {/* 電話番号 */}
      <div>
        <label htmlFor="phone" className="sr-only">電話番号</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="電話番号"
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-none text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
        />
      </div>

      {/* コメント */}
      <div>
        <label htmlFor="message" className="sr-only">コメント</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="コメント"
          rows={6}
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-none text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors resize-none"
        />
      </div>

      {/* 送信ボタン */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-white text-black font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '送信中...' : '送信する'}
        </button>
      </div>

      {/* ステータスメッセージ */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-900/20 border border-green-500/50 text-green-400">
          メッセージを送信しました。ありがとうございます。
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-900/20 border border-red-500/50 text-red-400">
          送信に失敗しました。もう一度お試しください。
        </div>
      )}
    </form>
  )
}
