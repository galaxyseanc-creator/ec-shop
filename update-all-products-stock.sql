-- 全商品のサイズバリエーションと在庫を更新
-- 実行日: 2026-01-13

-- ========================================
-- サイズバリエーションと在庫を設定
-- ========================================

-- 1. OXYGEN MAGAZINE T-SHIRT
-- S~3XL (S:2, M:1, L:1, XL:2, 2XL:0, 3XL:1) → 合計7個
UPDATE products 
SET 
  stock_by_size = '{"S": 2, "M": 1, "L": 1, "XL": 2, "2XL": 0, "3XL": 1}'::jsonb,
  stock = 7,
  sizes = ARRAY['S', 'M', 'L', 'XL', '2XL', '3XL']
WHERE name = 'OXYGEN MAGAZINE T-SHIRT';

-- 2. OXYGEN MAGAZINE LONG SHIRT
-- XL~3XL (XL:1, 2XL:2, 3XL:2) → 合計5個
UPDATE products 
SET 
  stock_by_size = '{"XL": 1, "2XL": 2, "3XL": 2}'::jsonb,
  stock = 5,
  sizes = ARRAY['XL', '2XL', '3XL']
WHERE name = 'OXYGEN MAGAZINE LONG SHIRT';

-- 3. OXYGEN MAGAZINE
-- サイズなし、合計3個
UPDATE products 
SET 
  stock = 3,
  stock_by_size = '{}'::jsonb,
  sizes = ARRAY[]::text[]
WHERE name = 'OXYGEN MAGAZINE';

-- 4. 空間断裂多次元生命誕生日 バンダナ
-- サイズなし、合計9個
UPDATE products 
SET 
  stock = 9,
  stock_by_size = '{}'::jsonb,
  sizes = ARRAY[]::text[]
WHERE name = '空間断裂多次元生命誕生日 バンダナ';

-- 5. MADE IN HEAVEN T-SHIRT
-- 2XS~4XL (2XS:2, XS:1, S:2, M:1, L:2, XL:3, 2XL:1, 3XL:3, 4XL:3) → 合計18個
UPDATE products 
SET 
  stock_by_size = '{"2XS": 2, "XS": 1, "S": 2, "M": 1, "L": 2, "XL": 3, "2XL": 1, "3XL": 3, "4XL": 3}'::jsonb,
  stock = 18,
  sizes = ARRAY['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']
WHERE name = 'MADE IN HEAVEN T-SHIRT';

-- 6. SkyFisH PENDANT
-- サイズなし、合計1個
UPDATE products 
SET 
  stock = 1,
  stock_by_size = '{}'::jsonb,
  sizes = ARRAY[]::text[]
WHERE name = 'SkyFisH PENDANT';

-- 7. CYBER SKYFISH PENDANT
-- シルバー、ホワイト、ブラック（すべて在庫0）
UPDATE products 
SET 
  stock_by_size = '{"シルバー": 0, "ホワイト": 0, "ブラック": 0}'::jsonb,
  stock = 0,
  sizes = ARRAY['シルバー', 'ホワイト', 'ブラック']
WHERE name = 'CYBER SKYFISH PENDANT';

-- ========================================
-- 更新結果を確認
-- ========================================

-- すべての商品の在庫状況
SELECT 
  name as 商品名,
  category as カテゴリ,
  stock as 合計在庫,
  CASE 
    WHEN stock = 0 THEN '❌ 売り切れ'
    WHEN stock <= 3 THEN '⚠️ 低在庫'
    WHEN stock <= 5 THEN '⚠️ やや低在庫'
    ELSE '✅ 在庫あり'
  END as 状態,
  array_length(sizes, 1) as サイズ数
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

-- 各サイズごとの在庫状況（詳細）
SELECT 
  p.name as 商品名,
  s.size as サイズ,
  COALESCE((p.stock_by_size->>s.size)::int, 0) as 在庫数,
  CASE 
    WHEN COALESCE((p.stock_by_size->>s.size)::int, 0) = 0 THEN '❌ 在庫なし'
    WHEN COALESCE((p.stock_by_size->>s.size)::int, 0) <= 1 THEN '⚠️ 低在庫'
    WHEN COALESCE((p.stock_by_size->>s.size)::int, 0) <= 2 THEN '⚠️ やや低在庫'
    ELSE '✅ 在庫あり'
  END as 状態
FROM products p
CROSS JOIN LATERAL unnest(p.sizes) AS s(size)
WHERE array_length(p.sizes, 1) > 0
ORDER BY p.name, 
  CASE s.size
    WHEN '2XS' THEN 1
    WHEN 'XS' THEN 2
    WHEN 'S' THEN 3
    WHEN 'M' THEN 4
    WHEN 'L' THEN 5
    WHEN 'XL' THEN 6
    WHEN '2XL' THEN 7
    WHEN '3XL' THEN 8
    WHEN '4XL' THEN 9
    ELSE 99
  END;

-- 在庫状態のサマリー
SELECT 
  CASE 
    WHEN stock = 0 THEN '❌ 売り切れ'
    WHEN stock <= 3 THEN '⚠️ 低在庫'
    WHEN stock <= 5 THEN '⚠️ やや低在庫'
    ELSE '✅ 在庫あり'
  END as 在庫状態,
  COUNT(*) as 商品数,
  SUM(stock) as 合計在庫数
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
