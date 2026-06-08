import { Product } from '@/types/database'

/**
 * サイズ別在庫を取得
 */
export function getStockBySize(product: Product, size: string): number {
  if (!product.stock_by_size || Object.keys(product.stock_by_size).length === 0) {
    // サイズ別在庫が設定されていない場合は、全体在庫を返す
    return product.stock
  }
  // 明示的に0が設定されている場合も含めて取得
  const stockValue = product.stock_by_size[size]
  return stockValue !== undefined ? stockValue : 0
}

/**
 * 指定サイズの在庫があるか確認
 */
export function hasStockForSize(product: Product, size: string): boolean {
  return getStockBySize(product, size) > 0
}

/**
 * 指定サイズが選択可能か確認（在庫あり）
 */
export function isSizeAvailable(product: Product, size: string): boolean {
  return hasStockForSize(product, size)
}

/**
 * 合計在庫を計算
 */
export function getTotalStock(product: Product): number {
  if (!product.stock_by_size || Object.keys(product.stock_by_size).length === 0) {
    return product.stock
  }
  
  return Object.values(product.stock_by_size).reduce((sum, stock) => sum + stock, 0)
}

/**
 * 在庫状況のサマリーを取得
 */
export function getStockSummary(product: Product): {
  total: number
  available: boolean
  lowStock: boolean
  bySize?: Record<string, number>
} {
  const total = getTotalStock(product)
  
  return {
    total,
    available: total > 0,
    lowStock: total <= 5 && total > 0,
    bySize: product.stock_by_size
  }
}

/**
 * 各サイズの在庫状況を取得
 */
export function getSizeStockInfo(product: Product): Map<string, { stock: number; available: boolean }> {
  const sizeStockMap = new Map<string, { stock: number; available: boolean }>()
  
  if (product.sizes && product.sizes.length > 0) {
    product.sizes.forEach(size => {
      const stock = getStockBySize(product, size)
      sizeStockMap.set(size, {
        stock,
        available: stock > 0
      })
    })
  }
  
  return sizeStockMap
}
