-- 重複商品の削除と修正
-- Supabase Dashboard → SQL Editor で実行してください

-- ステップ1: 現在の商品を確認
SELECT id, name, price, stock, created_at 
FROM products 
WHERE name IN ('SkyFisH PENDANT', 'CYBER SKYFISH PENDANT')
ORDER BY name, created_at;

-- ステップ2: 重複している商品を削除（古い方を残す場合）
-- SkyFisH PENDANT の重複を削除（最新のものを削除）
DELETE FROM products 
WHERE name = 'SkyFisH PENDANT' 
AND id NOT IN (
  SELECT id FROM products 
  WHERE name = 'SkyFisH PENDANT' 
  ORDER BY created_at ASC 
  LIMIT 1
);

-- CYBER SKYFISH PENDANT の重複を削除（最新のものを削除）
DELETE FROM products 
WHERE name = 'CYBER SKYFISH PENDANT' 
AND id NOT IN (
  SELECT id FROM products 
  WHERE name = 'CYBER SKYFISH PENDANT' 
  ORDER BY created_at ASC 
  LIMIT 1
);

-- ステップ3: 削除後の確認
SELECT id, name, price, stock, array_length(sizes, 1) as size_count, array_length(images, 1) as image_count
FROM products 
WHERE name IN ('SkyFisH PENDANT', 'CYBER SKYFISH PENDANT')
ORDER BY name;

-- ステップ4: CYBER SKYFISH PENDANTのサイズ（色）が正しく設定されているか確認
SELECT id, name, sizes 
FROM products 
WHERE name = 'CYBER SKYFISH PENDANT';
