-- すべての商品の在庫を更新（在庫0のサイズも明示的に設定）
-- 実行日: 2026-01-13

-- ========================================
-- 在庫数を更新（指定なしサイズは0個）
-- ========================================

-- 1. OXYGEN MAGAZINE T-SHIRT
-- S:2, M:1, L:1, XL:2, 2XL:0, 3XL:1 → 合計7個
UPDATE products 
SET 
  stock_by_size = '{"S": 2, "M": 1, "L": 1, "XL": 2, "2XL": 0, "3XL": 1}'::jsonb,
  stock = 7,
  sizes = ARRAY['S', 'M', 'L', 'XL', '2XL', '3XL']
WHERE name = 'OXYGEN MAGAZINE T-SHIRT';

-- 2. OXYGEN MAGAZINE LONG SHIRT
-- S:0, M:0, L:0, XL:1, 2XL:2, 3XL:2 → 合計5個
UPDATE products 
SET 
  stock_by_size = '{"S": 0, "M": 0, "L": 0, "XL": 1, "2XL": 2, "3XL": 2}'::jsonb,
  stock = 5,
  sizes = ARRAY['S', 'M', 'L', 'XL', '2XL', '3XL']
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

-- サイズ別在庫の詳細（在庫0も表示）
SELECT 
  name as 商品名,
  stock as 合計在庫,
  jsonb_pretty(stock_by_size) as サイズ別在庫詳細
FROM products 
WHERE stock_by_size IS NOT NULL AND stock_by_size::text != '{}'
ORDER BY name;

-- 各サイズごとの在庫状況
SELECT 
  p.name as 商品名,
  s.size as サイズ,
  COALESCE((p.stock_by_size->>s.size)::int, 0) as 在庫数,
  CASE 
    WHEN COALESCE((p.stock_by_size->>s.size)::int, 0) = 0 THEN '❌ 在庫なし'
    WHEN COALESCE((p.stock_by_size->>s.size)::int, 0) <= 2 THEN '⚠️ 低在庫'
    ELSE '✅ 在庫あり'
  END as 状態
FROM products p
CROSS JOIN LATERAL unnest(p.sizes) AS s(size)
WHERE array_length(p.sizes, 1) > 0
ORDER BY p.name, 
  CASE s.size
    WHEN 'S' THEN 1
    WHEN 'M' THEN 2
    WHEN 'L' THEN 3
    WHEN 'XL' THEN 4
    WHEN '2XL' THEN 5
    WHEN '3XL' THEN 6
    ELSE 99
  END;
