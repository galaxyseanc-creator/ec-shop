import { isSupabaseConfigured, supabase } from './supabase'

function assertSupabaseConfigured() {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase is not configured')
  }
}

/**
 * メールアドレスでサインアップ
 */
export async function signUp(email: string, password: string) {
  assertSupabaseConfigured()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    throw error
  }

  return data
}

/**
 * メールアドレスでログイン
 */
export async function signIn(email: string, password: string) {
  assertSupabaseConfigured()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw error
  }

  return data
}

/**
 * ログアウト
 */
export async function signOut() {
  assertSupabaseConfigured()

  const { error } = await supabase.auth.signOut()

  if (error) {
    throw error
  }
}

/**
 * 現在のユーザーを取得
 */
export async function getCurrentUser() {
  assertSupabaseConfigured()

  const { data: { user } } = await supabase.auth.getUser()
  return user
}

/**
 * パスワードリセットメールを送信
 */
export async function resetPassword(email: string) {
  assertSupabaseConfigured()

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  })

  if (error) {
    throw error
  }
}
