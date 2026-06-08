import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { items, userId, email } = await request.json()

    // Stripe Checkoutセッションの作成
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: 'jpy',
          product_data: {
            name: item.product.name,
            description: item.size ? `サイズ: ${item.size}` : undefined,
          },
          unit_amount: item.product.price,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/cart`,
      customer_email: email,
      metadata: {
        userId: userId || '',
        items: JSON.stringify(items.map((item: any) => ({
          productId: item.product.id,
          productName: item.product.name,
          price: item.product.price,
          size: item.size,
          quantity: item.quantity,
        }))),
      },
    })

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    })
  } catch (error: any) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
