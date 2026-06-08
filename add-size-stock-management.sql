-- サイズ別在庫管理の実装
-- 実行日: 2026-01-13

-- ステップ1: 新しいカラムを追加（JSONB型でサイズ別在庫を管理）
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS stock_by_size JSONB DEFAULT '{}'::jsonb;

-- ステップ2: 各商品のサイズ別在庫を設定

-- OXYGEN MAGAZINE T-SHIRT
-- S:2, M:1, L:1, XL:2, 3XL:1
UPDATE products 
SET 
  stock_by_size = '{"S": 2, "M": 1, "L": 1, "XL": 2, "3XL": 1}'::jsonb,
  stock = 7,
  sizes = ARRAY['S', 'M', 'L', 'XL', '3XL']
WHERE name = 'OXYGEN MAGAZINE T-SHIRT';

-- OXYGEN MAGAZINE LONG SHIRT
-- XL:1, 2XL:2, 3XL:2
UPDATE products 
SET 
  stock_by_size = '{"XL": 1, "2XL": 2, "3XL": 2}'::jsonb,
  stock = 5,
  sizes = ARRAY['XL', '2XL', '3XL']
WHERE name = 'OXYGEN MAGAZINE LONG SHIRT';

-- OXYGEN MAGAZINE（サイズなし）
UPDATE products 
SET 
  stock = 9,
  stock_by_size = '{}'::jsonb
WHERE name = 'OXYGEN MAGAZINE';

-- ステップ3: 更新結果を確認
SELECT 
  id, 
  name, 
  stock as total_stock,
  sizes,
  stock_by_size
FROM products 
WHERE name IN (
  'OXYGEN MAGAZINE T-SHIRT',
  'OXYGEN MAGAZINE LONG SHIRT',
  'OXYGEN MAGAZINE'
)
ORDER BY name;

-- サイズ別在庫を取得するクエリ例
-- SELECT name, stock_by_size->>'S' as size_s_stock FROM products WHERE name = 'OXYGEN MAGAZINE T-SHIRT';
