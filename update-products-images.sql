-- 商品画像URLの更新スクリプト
-- Supabase Dashboard → SQL Editor で実行してください

-- まず、既存の商品を確認
SELECT id, name FROM products ORDER BY created_at;

-- 商品1: MADE IN HEAVEN T-SHIRT の更新
UPDATE products
SET 
  image_url = 'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/made-in-heaven-t-front.jpg',
  images = ARRAY[
    'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/made-in-heaven-t-front.jpg',
    'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/made-in-heaven-t-back.jpg'
  ]
WHERE name = 'MADE IN HEAVEN T-SHIRT';

-- 商品2: 空間断裂多次元生命誕生日 バンダナ の更新
UPDATE products
SET 
  image_url = 'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/bandana.jpg',
  images = ARRAY[
    'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/bandana.jpg'
  ]
WHERE name = '空間断裂多次元生命誕生日 バンダナ';

-- 商品3: OXYGEN MAGAZINE T-SHIRT の更新
UPDATE products
SET 
  image_url = 'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-t-front.jpg',
  images = ARRAY[
    'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-t-front.jpg'
  ]
WHERE name = 'OXYGEN MAGAZINE T-SHIRT';

-- 商品4: OXYGEN MAGAZINE LONG SHIRT の更新
UPDATE products
SET 
  image_url = 'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-long-t-front.jpg',
  images = ARRAY[
    'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-long-t-front.jpg'
  ]
WHERE name = 'OXYGEN MAGAZINE LONG SHIRT';

-- 商品5: OXYGEN MAGAZINE の更新
UPDATE products
SET 
  image_url = 'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-magazine-front.jpg',
  images = ARRAY[
    'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-magazine-front.jpg',
    'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-magazine-inside.jpg'
  ]
WHERE name = 'OXYGEN MAGAZINE';

-- 更新結果を確認
SELECT id, name, image_url, array_length(images, 1) as image_count 
FROM products 
ORDER BY created_at;
