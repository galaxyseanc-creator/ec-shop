-- すべての商品の在庫を更新
-- 実行日: 2026-01-13

-- ========================================
-- 既に設定済みの商品（確認用）
-- ========================================

-- OXYGEN MAGAZINE T-SHIRT: 7個
-- S:2, M:1, L:1, XL:2, 3XL:1

-- OXYGEN MAGAZINE LONG SHIRT: 5個
-- XL:1, 2XL:2, 3XL:2

-- OXYGEN MAGAZINE: 9個
-- サイズなし

-- ========================================
-- 新規設定する商品
-- ========================================

-- 1. SkyFisH PENDANT（青いペンダント）
-- サイズなし、在庫1個
UPDATE products 
SET 
  stock = 1,
  stock_by_size = '{}'::jsonb,
  sizes = ARRAY[]::text[]
WHERE name = 'SkyFisH PENDANT';

-- 2. CYBER SKYFISH PENDANT（3色展開）
-- シルバー、ホワイト、ブラック、在庫0個（売り切れ）
UPDATE products 
SET 
  stock_by_size = '{"シルバー": 0, "ホワイト": 0, "ブラック": 0}'::jsonb,
  stock = 0,
  sizes = ARRAY['シルバー', 'ホワイト', 'ブラック']
WHERE name = 'CYBER SKYFISH PENDANT';

-- 3. MADE IN HEAVEN T-SHIRT（Tシャツ）
-- S:2, M:3, L:2, XL:2, 2XL:1, 3XL:1 → 合計11個
UPDATE products 
SET 
  stock_by_size = '{"S": 2, "M": 3, "L": 2, "XL": 2, "2XL": 1, "3XL": 1}'::jsonb,
  stock = 11,
  sizes = ARRAY['S', 'M', 'L', 'XL', '2XL', '3XL']
WHERE name = 'MADE IN HEAVEN T-SHIRT';

-- 4. 空間断裂多次元生命誕生日 バンダナ
-- サイズなし、在庫3個
UPDATE products 
SET 
  stock = 3,
  stock_by_size = '{}'::jsonb,
  sizes = ARRAY[]::text[]
WHERE name = '空間断裂多次元生命誕生日 バンダナ';

-- ========================================
-- 更新結果を確認
-- ========================================
SELECT 
  name as 商品名,
  category as カテゴリ,
  stock as 在庫数,
  sizes as サイズ,
  stock_by_size as サイズ別在庫,
  CASE 
    WHEN stock = 0 THEN '❌ 売り切れ'
    WHEN stock <= 5 THEN '⚠️ 低在庫'
    ELSE '✅ 在庫あり'
  END as 状態
FROM products
ORDER BY 
  CASE 
    WHEN stock = 0 THEN 3
    WHEN stock <= 5 THEN 2
    ELSE 1
  END,
  name;

-- サイズ別在庫のサマリー
SELECT 
  name,
  stock as 合計,
  jsonb_pretty(stock_by_size) as サイズ別詳細
FROM products 
WHERE stock_by_size IS NOT NULL AND stock_by_size::text != '{}'
ORDER BY name;
