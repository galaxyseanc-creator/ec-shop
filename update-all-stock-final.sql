-- すべての商品の在庫を更新（最終版）
-- 実行日: 2026-01-13

-- ========================================
-- 在庫数を更新
-- ========================================

-- 1. OXYGEN MAGAZINE T-SHIRT
-- S:2, M:1, L:1, XL:2, 3XL:1 → 合計7個
UPDATE products 
SET 
  stock_by_size = '{"S": 2, "M": 1, "L": 1, "XL": 2, "3XL": 1}'::jsonb,
  stock = 7,
  sizes = ARRAY['S', 'M', 'L', 'XL', '3XL']
WHERE name = 'OXYGEN MAGAZINE T-SHIRT';

-- 2. OXYGEN MAGAZINE LONG SHIRT
-- XL:1, 2XL:2, 3XL:2 → 合計5個
UPDATE products 
SET 
  stock_by_size = '{"XL": 1, "2XL": 2, "3XL": 2}'::jsonb,
  stock = 5,
  sizes = ARRAY['XL', '2XL', '3XL']
WHERE name = 'OXYGEN MAGAZINE LONG SHIRT';

-- 3. OXYGEN MAGAZINE
-- 合計3個（サイズなし）
UPDATE products 
SET 
  stock = 3,
  stock_by_size = '{}'::jsonb,
  sizes = ARRAY[]::text[]
WHERE name = 'OXYGEN MAGAZINE';

-- 4. 空間断裂多次元生命誕生日 バンダナ
-- 合計9個（サイズなし）
UPDATE products 
SET 
  stock = 9,
  stock_by_size = '{}'::jsonb,
  sizes = ARRAY[]::text[]
WHERE name = '空間断裂多次元生命誕生日 バンダナ';

-- 5. SkyFisH PENDANT
-- 合計1個（サイズなし）
UPDATE products 
SET 
  stock = 1,
  stock_by_size = '{}'::jsonb,
  sizes = ARRAY[]::text[]
WHERE name = 'SkyFisH PENDANT';

-- 6. CYBER SKYFISH PENDANT
-- シルバー:0, ホワイト:0, ブラック:0 → 合計0個（売り切れ）
UPDATE products 
SET 
  stock_by_size = '{"シルバー": 0, "ホワイト": 0, "ブラック": 0}'::jsonb,
  stock = 0,
  sizes = ARRAY['シルバー', 'ホワイト', 'ブラック']
WHERE name = 'CYBER SKYFISH PENDANT';

-- 7. MADE IN HEAVEN T-SHIRT
-- S:2, M:3, L:2, XL:2, 2XL:1, 3XL:1 → 合計11個
UPDATE products 
SET 
  stock_by_size = '{"S": 2, "M": 3, "L": 2, "XL": 2, "2XL": 1, "3XL": 1}'::jsonb,
  stock = 11,
  sizes = ARRAY['S', 'M', 'L', 'XL', '2XL', '3XL']
WHERE name = 'MADE IN HEAVEN T-SHIRT';

-- ========================================
-- 更新結果を確認
-- ========================================

-- すべての商品の在庫状況
SELECT 
  name as 商品名,
  category as カテゴリ,
  stock as 在庫数,
  CASE 
    WHEN stock = 0 THEN '❌ 売り切れ'
    WHEN stock <= 3 THEN '⚠️ 低在庫'
    WHEN stock <= 5 THEN '⚠️ やや低在庫'
    ELSE '✅ 在庫あり'
  END as 状態,
  sizes as サイズ一覧
FROM products
ORDER BY 
  CASE 
    WHEN stock = 0 THEN 4
    WHEN stock <= 3 THEN 3
    WHEN stock <= 5 THEN 2
    ELSE 1
  END,
  name;

-- サイズ別在庫の詳細
SELECT 
  name as 商品名,
  stock as 合計在庫,
  jsonb_pretty(stock_by_size) as サイズ別在庫詳細
FROM products 
WHERE stock_by_size IS NOT NULL AND stock_by_size::text != '{}'
ORDER BY name;

-- 在庫状態のサマリー
SELECT 
  CASE 
    WHEN stock = 0 THEN '❌ 売り切れ'
    WHEN stock <= 3 THEN '⚠️ 低在庫'
    WHEN stock <= 5 THEN '⚠️ やや低在庫'
    ELSE '✅ 在庫あり'
  END as 在庫状態,
  COUNT(*) as 商品数,
  string_agg(name, ', ') as 商品一覧
FROM products
GROUP BY 
  CASE 
    WHEN stock = 0 THEN 4
    WHEN stock <= 3 THEN 3
    WHEN stock <= 5 THEN 2
    ELSE 1
  END,
  CASE 
    WHEN stock = 0 THEN '❌ 売り切れ'
    WHEN stock <= 3 THEN '⚠️ 低在庫'
    WHEN stock <= 5 THEN '⚠️ やや低在庫'
    ELSE '✅ 在庫あり'
  END
ORDER BY 
  CASE 
    WHEN stock = 0 THEN 4
    WHEN stock <= 3 THEN 3
    WHEN stock <= 5 THEN 2
    ELSE 1
  END DESC;
