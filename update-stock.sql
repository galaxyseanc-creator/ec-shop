-- 在庫数の更新
-- 実行日: 2026-01-13

-- 現在の商品を確認
SELECT id, name, stock, sizes FROM products 
WHERE name IN (
  'OXYGEN MAGAZINE T-SHIRT',
  'OXYGEN MAGAZINE LONG SHIRT',
  'OXYGEN MAGAZINE'
)
ORDER BY name;

-- OXYGEN MAGAZINE T-SHIRT の在庫を更新
-- S:2, M:1, L:1, XL:2, 3XL:1 → 合計7個
UPDATE products 
SET stock = 7
WHERE name = 'OXYGEN MAGAZINE T-SHIRT';

-- OXYGEN MAGAZINE LONG SHIRT の在庫を更新
-- XL:1, 2XL:2, 3XL:2 → 合計5個
UPDATE products 
SET stock = 5
WHERE name = 'OXYGEN MAGAZINE LONG SHIRT';

-- OXYGEN MAGAZINE の在庫を更新
-- 合計9個
UPDATE products 
SET stock = 9
WHERE name = 'OXYGEN MAGAZINE';

-- 更新結果を確認
SELECT id, name, stock, sizes FROM products 
WHERE name IN (
  'OXYGEN MAGAZINE T-SHIRT',
  'OXYGEN MAGAZINE LONG SHIRT',
  'OXYGEN MAGAZINE'
)
ORDER BY name;
