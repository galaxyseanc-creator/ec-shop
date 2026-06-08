export interface Product {
  id: string
  name: string
  price: number
  description: string | null
  category: string
  image_url: string
  images: string[]
  sizes: string[]
  stock: number
  stock_by_size?: Record<string, number> // サイズ別在庫（例: {"S": 2, "M": 1}）
  created_at: string
}

export interface Order {
  id: string
  user_id: string | null
  email: string
  total_amount: number
  status: 'pending' | 'completed' | 'cancelled'
  stripe_session_id: string | null
  created_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  product_name: string
  product_price: number
  size: string | null
  quantity: number
  created_at: string
}
