# 🚀 Vercelデプロイ手順

## 📋 事前準備

### **必要なアカウント**
- ✅ GitHubアカウント
- ✅ Vercelアカウント（GitHubアカウントで登録可能）

---

## 🔧 ステップ1: GitHubリポジトリの作成

### **1-1. GitHubにアクセス**
https://github.com

### **1-2. 新しいリポジトリを作成**
1. 右上の「+」→「New repository」をクリック
2. リポジトリ名: `ec-shop` または `skyfish-shop`
3. 「Private」を選択（推奨）
4. 「Create repository」をクリック

### **1-3. リポジトリのURLをコピー**
例：`https://github.com/あなたのユーザー名/ec-shop.git`

---

## 💻 ステップ2: コードをGitHubにプッシュ

### **コマンドプロンプトで実行**

Windowsキー + R → `cmd` と入力 → Enter

```cmd
cd C:\projects\ec-shop

# Gitの初期化（既に初期化されている場合はスキップ）
git init

# 全ファイルをステージング
git add .

# コミット
git commit -m "Initial commit for deployment"

# リモートリポジトリを追加（GitHubのURLを使用）
git remote add origin https://github.com/あなたのユーザー名/ec-shop.git

# メインブランチの名前を確認・変更
git branch -M main

# プッシュ
git push -u origin main
```

**注意**: GitHubのユーザー名とパスワード、またはPersonal Access Tokenの入力を求められます。

---

## 🌐 ステップ3: Vercelアカウントの作成

### **3-1. Vercelにアクセス**
https://vercel.com

### **3-2. GitHubアカウントでサインアップ**
1. 「Sign Up」をクリック
2. 「Continue with GitHub」をクリック
3. GitHubでの認証を完了

---

## 🚀 ステップ4: Vercelでプロジェクトをインポート

### **4-1. 新しいプロジェクトを作成**
1. Vercelダッシュボードで「Add New」→「Project」をクリック
2. 「Import Git Repository」セクションで `ec-shop` を選択
3. 「Import」をクリック

### **4-2. プロジェクト設定**
- **Project Name**: `ec-shop` または `skyfish-shop`
- **Framework Preset**: Next.js（自動検出されます）
- **Root Directory**: `./`（デフォルト）
- **Build Command**: `npm run build`（デフォルト）
- **Output Directory**: `.next`（デフォルト）

---

## 🔑 ステップ5: 環境変数の設定

### **重要：環境変数を追加**

「Environment Variables」セクションで以下を追加：

#### **Supabase設定**
| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://avaojbznmyigsnorfjoq.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `（.env.localからコピー）` |

#### **Stripe設定**
| Name | Value |
|------|-------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_test_51SnaVeK3Uvnn3rbjEjdwFkuXZKie96cMdq7wwake9Dr7c0uwpVFhw6R4ldh63tB2Q8qVKorql7mLPlTlF3jS0lFa00EU3PyDz5` |
| `STRIPE_SECRET_KEY` | `（.env.localからコピー）` |

#### **Resend設定**
| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_JJquiei8_4dbgwNYoDpKqRReNpf9LFnpT` |

**注意**: 環境変数の値は `.env.local` ファイルからコピーしてください。

---

## 🎯 ステップ6: デプロイ

### **6-1. デプロイを開始**
「Deploy」ボタンをクリック

### **6-2. ビルドの進行を確認**
- ビルドログが表示されます
- 通常、2-5分で完了します

### **6-3. デプロイ成功を確認**
成功すると以下が表示されます：
- 🎉 Congratulations!
- デプロイされたURLが表示されます（例：`https://ec-shop-abc123.vercel.app`）

---

## ✅ ステップ7: デプロイ後の確認

### **7-1. サイトにアクセス**
デプロイされたURLをクリックして、サイトが正常に表示されることを確認

### **7-2. 動作確認**
- [ ] トップページが表示される
- [ ] 商品一覧が表示される
- [ ] 商品詳細ページが表示される
- [ ] カートに商品を追加できる
- [ ] ログイン/サインアップができる
- [ ] お問い合わせフォームが表示される

---

## 🔧 トラブルシューティング

### **ビルドエラーが発生した場合**

#### **エラー1: 環境変数が設定されていない**
**症状**: `NEXT_PUBLIC_SUPABASE_URL is not defined`
**対処**: Vercelの環境変数設定を確認し、すべての環境変数が正しく設定されているか確認

#### **エラー2: 依存関係のインストールエラー**
**症状**: `npm install` でエラー
**対処**: `package.json` を確認し、すべての依存関係が正しく記載されているか確認

#### **エラー3: ビルドエラー**
**症状**: `npm run build` でエラー
**対処**: ローカルで `npm run build` を実行してエラーを確認

### **ローカルでビルドを確認**

```cmd
cd C:\projects\ec-shop
npm run build
```

エラーがなければ、Vercelでも正常にビルドされるはずです。

---

## 🌐 ステップ8: カスタムドメインの設定（オプション）

### **独自ドメインを使用する場合**

1. **Vercelダッシュボードを開く**
   - プロジェクト → Settings → Domains

2. **ドメインを追加**
   - `kirakiraskyfish.com` を入力
   - 「Add」をクリック

3. **DNS設定を変更**
   - Vercelが表示するDNSレコードをドメインのDNS設定に追加
   - Aレコードまたはcnameレコード

4. **検証完了を待つ**
   - 数分〜24時間でDNSが反映されます

---

## 📝 デプロイ後の更新方法

### **コードを更新してデプロイ**

```cmd
cd C:\projects\ec-shop

# 変更をステージング
git add .

# コミット
git commit -m "Update: 変更内容の説明"

# プッシュ
git push origin main
```

GitHubにプッシュすると、Vercelが**自動的に再デプロイ**します！

---

## ✅ チェックリスト

### **デプロイ前**
- [ ] GitHubリポジトリを作成
- [ ] コードをGitHubにプッシュ
- [ ] `.env.local` の環境変数を確認

### **デプロイ中**
- [ ] Vercelアカウント作成
- [ ] プロジェクトをインポート
- [ ] 環境変数を設定
- [ ] デプロイを実行

### **デプロイ後**
- [ ] サイトが表示されることを確認
- [ ] 各ページの動作確認
- [ ] 決済機能のテスト（テストモード）
- [ ] お問い合わせフォームのテスト

---

## 🎉 完了！

デプロイが成功すると、以下のURLでサイトが公開されます：
- **Vercel URL**: `https://プロジェクト名.vercel.app`

---

## 📚 参考リンク

- [Vercel公式ドキュメント](https://vercel.com/docs)
- [Next.jsデプロイガイド](https://nextjs.org/docs/deployment)
- [GitHub公式ドキュメント](https://docs.github.com)

---

何か問題が発生したら、エラーメッセージを教えてください！ 🚀
