import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Resend API key is not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)
    const body = await request.json()
    const { name, email, phone, message } = body

    // 入力検証
    if (!email) {
      return NextResponse.json(
        { error: 'メールアドレスは必須です' },
        { status: 400 }
      )
    }

    // メール本文を作成
    const emailContent = `
【お問い合わせ内容】

■ お名前
${name || '（未入力）'}

■ メールアドレス
${email}

■ 電話番号
${phone || '（未入力）'}

■ お問い合わせ内容
${message || '（未入力）'}

━━━━━━━━━━━━━━━━━━━━━━
このメールは SkyFisH ONLINE STORE のお問い合わせフォームから送信されました。
━━━━━━━━━━━━━━━━━━━━━━
    `.trim()

    // Resendでメール送信（独自ドメイン使用）
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'SkyFisH ONLINE STORE <noreply@kirakiraskyfish.com>'
    
    console.log('=== メール送信開始 ===')
    console.log('送信元:', fromEmail)
    console.log('送信先:', 'kirakiraskyfish@gmail.com')
    
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['kirakiraskyfish@gmail.com'],
      reply_to: email, // 返信先を送信者のメールアドレスに設定
      subject: `【お問い合わせ】${name || email}様より`,
      text: emailContent,
    })
    
    console.log('=== メール送信成功 ===')
    console.log('Response:', data)

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    )
  } catch (error) {
    console.error('=== メール送信エラー ===')
    console.error('エラー詳細:', error)
    console.error('エラーメッセージ:', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.json(
      { error: 'メール送信に失敗しました', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
