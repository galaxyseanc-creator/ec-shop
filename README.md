# 🛍️ SkyFisH ONLINE STORE

Next.js + Supabase + Stripe で構築したモダンなECサイト

## 📋 機能

### 実装済み機能
- ✅ 商品一覧・詳細表示
- ✅ ショッピングカート機能
- ✅ ユーザー認証（Supabase Auth）
- ✅ Stripe決済連携
- ✅ 商品画像表示・サムネイル切り替え
- ✅ レスポンシブデザイン
- ✅ ネオングローエフェクト

### 今後の実装予定
- 🔲 商品検索機能
- 🔲 注文履歴表示
- 🔲 管理画面
- 🔲 メール通知

## 🚀 技術スタック

- **フロントエンド**: Next.js 16.1.1 (App Router)
- **スタイリング**: Tailwind CSS 4
- **バックエンド**: Supabase (PostgreSQL + Auth + Storage)
- **決済**: Stripe
- **状態管理**: Zustand
- **言語**: TypeScript
- **デプロイ**: Vercel (予定)

## 📂 プロジェクト構造

```
ec-shop/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # トップページ（商品一覧）
│   │   ├── products/[id]/     # 商品詳細
│   │   ├── cart/              # カートページ
│   │   ├── login/             # ログインページ
│   │   ├── signup/            # サインアップページ
│   │   ├── account/           # マイアカウント
│   │   └── api/checkout/      # Stripe Checkout API
│   ├── components/            # 共通コンポーネント
│   │   ├── Header.tsx
│   │   └── AuthProvider.tsx
│   ├── lib/                   # ユーティリティ・ライブラリ
│   │   ├── supabase.ts
│   │   ├── products.ts
│   │   ├── auth.ts
│   │   └── stripe-client.ts
│   ├── store/                 # Zustand ストア
│   │   ├── cart.ts
│   │   └── auth.ts
│   └── types/                 # TypeScript型定義
│       └── database.ts
├── update-products-images.sql # 商品画像更新SQL
├── 画像設定手順.md            # 画像設定ガイド
└── .env.local                 # 環境変数
```

## 🛠️ セットアップ

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd ec-shop
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env.local` ファイルを作成（既に存在する場合はスキップ）：

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 4. データベースのセットアップ

Supabase ダッシュボードで以下のテーブルを作成：

#### `products` テーブル
```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  images TEXT[] DEFAULT ARRAY[]::TEXT[],
  sizes TEXT[] DEFAULT ARRAY[]::TEXT[],
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

#### `orders` テーブル
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  email TEXT NOT NULL,
  total_amount INTEGER NOT NULL,
  status TEXT DEFAULT 'pending',
  stripe_session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

#### `order_items` テーブル
```sql
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  product_name TEXT NOT NULL,
  product_price INTEGER NOT NULL,
  size TEXT,
  quantity INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 5. 商品画像の設定

詳細は `画像設定手順.md` を参照してください。

### 6. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いてアプリを確認してください。

## 📝 使用方法

### 商品の閲覧
1. トップページで商品一覧を表示
2. 商品をクリックして詳細ページへ移動
3. サイズと数量を選択して「カートに追加」

### 購入手順
1. カートアイコンをクリックしてカートページへ
2. 商品を確認して「チェックアウト」をクリック
3. ログインしていない場合はログインページへリダイレクト
4. Stripeの決済ページで支払い情報を入力
5. 決済完了

## 🎨 デザインコンセプト

- **ダークモード**: 黒を基調としたモダンなデザイン
- **ネオンエフェクト**: 紫・緑・青のグラデーションによるグローエフェクト
- **ミニマリズム**: シンプルで直感的なUI
- **レスポンシブ**: モバイル・タブレット・デスクトップ対応

## 📦 ビルド

本番環境用にビルド：

```bash
npm run build
```

本番サーバーの起動：

```bash
npm start
```

## 🚀 デプロイ

### Vercelへのデプロイ（推奨）

1. Vercelアカウントにログイン
2. プロジェクトをインポート
3. 環境変数を設定
4. デプロイ

詳細: https://vercel.com/docs

## 🔧 トラブルシューティング

### 画像が表示されない
- `next.config.ts` の `remotePatterns` 設定を確認
- Supabase Storage のバケットが Public に設定されているか確認
- 画像URLに直接アクセスして確認

### 決済が動作しない
- Stripe APIキーが正しく設定されているか確認
- テストモードとライブモードの切り替えを確認

### データベース接続エラー
- `.env.local` の Supabase URL と Anon Key を確認
- Supabaseプロジェクトが起動しているか確認

## 📄 ライセンス

このプロジェクトは私的使用のために作成されました。

## 🤝 コントリビューション

現在、このプロジェクトは個人開発中です。

## 📧 お問い合わせ

質問や提案がある場合は、Issues を作成してください。
