-- 現在の在庫状況を確認
-- 実行日: 2026-01-13

-- すべての商品の在庫状況を表示
SELECT 
  name as 商品名,
  category as カテゴリ,
  stock as 合計在庫,
  sizes as サイズ一覧,
  stock_by_size as サイズ別在庫,
  CASE 
    WHEN stock = 0 THEN '売り切れ'
    WHEN stock <= 5 THEN '低在庫'
    ELSE '在庫あり'
  END as 在庫状態
FROM products
ORDER BY 
  CASE 
    WHEN stock = 0 THEN 3
    WHEN stock <= 5 THEN 2
    ELSE 1
  END,
  name;

-- 在庫切れ商品
SELECT name, category FROM products WHERE stock = 0 ORDER BY name;

-- 低在庫商品（5個以下）
SELECT name, stock FROM products WHERE stock > 0 AND stock <= 5 ORDER BY stock ASC;

-- サイズ別在庫がある商品
SELECT 
  name,
  stock as 合計,
  stock_by_size as サイズ別在庫
FROM products 
WHERE stock_by_size IS NOT NULL AND stock_by_size::text != '{}'
ORDER BY name;
