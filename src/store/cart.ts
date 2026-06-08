import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types/database'

export interface CartItem {
  product: Product
  size: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, size: string, quantity: number) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, size, quantity) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id && item.size === size
          )

          if (existingItem) {
            // 既存のアイテムの数量を更新
            return {
              items: state.items.map((item) =>
                item.product.id === product.id && item.size === size
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            }
          } else {
            // 新しいアイテムを追加
            return {
              items: [...state.items, { product, size, quantity }],
            }
          }
        })
      },

      removeItem: (productId, size) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.product.id === productId && item.size === size)
          ),
        }))
      },

      updateQuantity: (productId, size, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId && item.size === size
              ? { ...item, quantity }
              : item
          ),
        }))
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )
      },
    }),
    {
      name: 'cart-storage', // localStorageのキー名
    }
  )
)
