-- 在庫更新テンプレート
-- 使用方法: 必要な部分をコピーして値を変更

-- ========================================
-- 1. 現在の在庫を確認
-- ========================================
SELECT 
  name,
  stock as 合計在庫,
  sizes as サイズ一覧,
  stock_by_size as サイズ別在庫
FROM products
WHERE name = '商品名';

-- ========================================
-- 2. サイズ別在庫を一括更新
-- ========================================

-- OXYGEN MAGAZINE T-SHIRT の例
UPDATE products 
SET 
  stock_by_size = '{"S": 2, "M": 1, "L": 1, "XL": 2, "3XL": 1}'::jsonb,
  stock = 7,
  sizes = ARRAY['S', 'M', 'L', 'XL', '3XL']
WHERE name = 'OXYGEN MAGAZINE T-SHIRT';

-- OXYGEN MAGAZINE LONG SHIRT の例
UPDATE products 
SET 
  stock_by_size = '{"XL": 1, "2XL": 2, "3XL": 2}'::jsonb,
  stock = 5,
  sizes = ARRAY['XL', '2XL', '3XL']
WHERE name = 'OXYGEN MAGAZINE LONG SHIRT';

-- サイズなし商品の例
UPDATE products 
SET 
  stock = 9,
  stock_by_size = '{}'::jsonb,
  sizes = ARRAY[]::text[]
WHERE name = 'OXYGEN MAGAZINE';

-- ========================================
-- 3. 特定サイズの在庫のみ更新（応用）
-- ========================================

-- S サイズを10個に変更（他のサイズはそのまま）
UPDATE products 
SET 
  stock_by_size = jsonb_set(stock_by_size, '{S}', '10'),
  stock = (
    SELECT SUM(value::text::int) 
    FROM jsonb_each_text(jsonb_set(stock_by_size, '{S}', '10'))
  )
WHERE name = 'OXYGEN MAGAZINE T-SHIRT';

-- ========================================
-- 4. 在庫ゼロに設定（売り切れ）
-- ========================================
UPDATE products 
SET 
  stock = 0,
  stock_by_size = jsonb_object(
    array(SELECT jsonb_object_keys(stock_by_size)),
    array(SELECT '0' FROM jsonb_object_keys(stock_by_size))
  )
WHERE name = '商品名';

-- ========================================
-- 5. 更新結果を確認
-- ========================================
SELECT 
  name,
  stock,
  stock_by_size
FROM products
WHERE name IN (
  'OXYGEN MAGAZINE T-SHIRT',
  'OXYGEN MAGAZINE LONG SHIRT',
  'OXYGEN MAGAZINE'
)
ORDER BY name;
