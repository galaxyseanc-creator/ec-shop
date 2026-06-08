import { supabase } from './supabase'
import { Product } from '@/types/database'

/**
 * 全商品を取得
 */
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('商品取得エラー:', error)
    return []
  }

  return data || []
}

/**
 * 商品IDで1件取得
 */
export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('商品取得エラー:', error)
    return null
  }

  return data
}
