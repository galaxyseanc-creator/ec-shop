import { supabase } from './supabase'

/**
 * 画像をSupabase Storageにアップロード
 * @param file アップロードするファイル
 * @param path 保存先のパス（例: "products/shirt1.jpg"）
 * @returns 公開URL
 */
export async function uploadImage(file: File, path: string): Promise<string | null> {
  try {
    const { data, error } = await supabase.storage
      .from('product-images')
      .upload(path, file, {
        cacheControl: '3600',
        upsert: true, // 同じファイル名なら上書き
      })

    if (error) {
      console.error('画像アップロードエラー:', error)
      return null
    }

    // 公開URLを取得
    const { data: publicUrlData } = supabase.storage
      .from('product-images')
      .getPublicUrl(path)

    return publicUrlData.publicUrl
  } catch (error) {
    console.error('予期しないエラー:', error)
    return null
  }
}

/**
 * 画像を削除
 * @param path 削除する画像のパス
 */
export async function deleteImage(path: string): Promise<boolean> {
  try {
    const { error } = await supabase.storage
      .from('product-images')
      .remove([path])

    if (error) {
      console.error('画像削除エラー:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('予期しないエラー:', error)
    return false
  }
}

/**
 * Supabase Storage URLから相対パスを取得
 */
export function getPathFromUrl(url: string): string {
  const match = url.match(/product-images\/(.+)/)
  return match ? match[1] : ''
}
