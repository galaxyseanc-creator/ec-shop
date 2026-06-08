-- すべての商品の現在の在庫状況を確認
SELECT 
  name as 商品名,
  category as カテゴリ,
  stock as 現在の在庫,
  sizes as サイズ一覧,
  CASE 
    WHEN stock = 0 THEN '売り切れ'
    WHEN stock <= 5 THEN '低在庫'
    ELSE '在庫あり'
  END as 在庫状態
FROM products
ORDER BY name;
