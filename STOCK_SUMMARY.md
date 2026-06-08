# 📊 商品在庫サマリー

更新日: 2026-01-13

## 🛍️ 全商品一覧

### **1. OXYGEN MAGAZINE T-SHIRT**
- **カテゴリ**: Tシャツ
- **サイズ展開**: S ~ 3XL
- **在庫詳細**:
  - S: 2個 ✅
  - M: 1個 ⚠️
  - L: 1個 ⚠️
  - XL: 2個 ✅
  - 2XL: 0個 ❌ **売り切れ**
  - 3XL: 1個 ⚠️
- **合計**: 7個

---

### **2. OXYGEN MAGAZINE LONG SHIRT**
- **カテゴリ**: ロングシャツ
- **サイズ展開**: XL ~ 3XL
- **在庫詳細**:
  - XL: 1個 ⚠️
  - 2XL: 2個 ✅
  - 3XL: 2個 ✅
- **合計**: 5個 ⚠️ やや低在庫

---

### **3. OXYGEN MAGAZINE**
- **カテゴリ**: 雑誌
- **サイズ**: なし
- **在庫**: 3個 ⚠️ 低在庫

---

### **4. 空間断裂多次元生命誕生日 バンダナ**
- **カテゴリ**: バンダナ
- **サイズ**: なし
- **在庫**: 9個 ✅

---

### **5. MADE IN HEAVEN T-SHIRT**
- **カテゴリ**: Tシャツ
- **サイズ展開**: 2XS ~ 4XL（全9サイズ）
- **在庫詳細**:
  - 2XS: 2個 ✅
  - XS: 1個 ⚠️
  - S: 2個 ✅
  - M: 1個 ⚠️
  - L: 2個 ✅
  - XL: 3個 ✅
  - 2XL: 1個 ⚠️
  - 3XL: 3個 ✅
  - 4XL: 3個 ✅
- **合計**: 18個 ✅

---

### **6. SkyFisH PENDANT**
- **カテゴリ**: アクセサリ
- **サイズ**: なし
- **在庫**: 1個 ⚠️ 低在庫

---

### **7. CYBER SKYFISH PENDANT**
- **カテゴリ**: アクセサリ
- **カラー展開**: シルバー、ホワイト、ブラック
- **在庫詳細**:
  - シルバー: 0個 ❌
  - ホワイト: 0個 ❌
  - ブラック: 0個 ❌
- **合計**: 0個 ❌ **売り切れ**

---

## 📈 在庫状態サマリー

| 状態 | 商品数 | 合計在庫数 |
|------|--------|----------|
| ✅ 在庫あり（6個以上） | 3商品 | 32個 |
| ⚠️ やや低在庫（4-5個） | 1商品 | 5個 |
| ⚠️ 低在庫（1-3個） | 2商品 | 4個 |
| ❌ 売り切れ（0個） | 1商品 | 0個 |
| **合計** | **7商品** | **41個** |

---

## 🎯 サイズバリエーション別サマリー

### **Tシャツ（2商品）**
- OXYGEN MAGAZINE T-SHIRT: 6サイズ（S~3XL）
- MADE IN HEAVEN T-SHIRT: 9サイズ（2XS~4XL）

### **ロングシャツ（1商品）**
- OXYGEN MAGAZINE LONG SHIRT: 3サイズ（XL~3XL）

### **アクセサリ（2商品）**
- SkyFisH PENDANT: サイズなし
- CYBER SKYFISH PENDANT: 3カラー（シルバー、ホワイト、ブラック）

### **雑誌・その他（2商品）**
- OXYGEN MAGAZINE: サイズなし
- 空間断裂多次元生命誕生日 バンダナ: サイズなし

---

## ⚠️ 要注意商品

### **売り切れ**
- CYBER SKYFISH PENDANT（全カラー）

### **低在庫（残り1-3個）**
- OXYGEN MAGAZINE: 3個
- SkyFisH PENDANT: 1個
- OXYGEN MAGAZINE T-SHIRT（M, L, 3XL）: 各1個
- OXYGEN MAGAZINE LONG SHIRT（XL）: 1個
- MADE IN HEAVEN T-SHIRT（XS, M, 2XL）: 各1個

### **売り切れサイズ**
- OXYGEN MAGAZINE T-SHIRT: 2XL（在庫0）

---

## 🔧 在庫管理メモ

### **更新方法**
```sql
-- 特定サイズの在庫を更新
UPDATE products 
SET 
  stock_by_size = jsonb_set(stock_by_size, '{M}', '5'),
  stock = (SELECT SUM(value::text::int) FROM jsonb_each_text(jsonb_set(stock_by_size, '{M}', '5')))
WHERE name = '商品名';
```

### **在庫確認方法**
```sql
-- すべての商品の在庫状況
SELECT name, stock, stock_by_size FROM products ORDER BY name;
```
