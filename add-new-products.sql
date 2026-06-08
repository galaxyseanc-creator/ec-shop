-- 新商品追加スクリプト
-- Supabase Dashboard → SQL Editor で実行してください

-- 商品1: SkyFisH PENDANT (青のペンダント)
INSERT INTO products (name, price, description, category, image_url, images, sizes, stock)
VALUES (
  'SkyFisH PENDANT',
  6000,
  '⚠︎一体ずつハンドメイドのため個体差がございます

Each item is handmade so there may be individual differences.',
  'アクセサリ',
  'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/skyfish-pendant-blue.jpg',
  ARRAY['https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/skyfish-pendant-blue.jpg'],
  ARRAY[]::TEXT[],
  1
);

-- 商品2: CYBER SKYFISH PENDANT (3色展開)
INSERT INTO products (name, price, description, category, image_url, images, sizes, stock)
VALUES (
  'CYBER SKYFISH PENDANT',
  5500,
  '⚠︎一体ずつハンドメイドのため個体差がございます
⚠︎繊細なため激しい動きには向いておりません
⚠︎金具の色は金と銀ランダムになります

Each item is handmade so there may be individual differences.
⚠︎Delicate items not suitable for vigorous movement.
⚠︎The metal fittings are gold and silver in random color.',
  'アクセサリ',
  'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/cyber-skyfish-pendant-white.jpg',
  ARRAY[
    'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/cyber-skyfish-pendant-white.jpg',
    'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/cyber-skyfish-pendant-silver.jpg',
    'https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/cyber-skyfish-pendant-black.jpg'
  ],
  ARRAY['シルバー', 'ホワイト', 'ブラック'],
  0
);

-- 追加結果を確認
SELECT id, name, price, stock, array_length(images, 1) as image_count 
FROM products 
ORDER BY created_at DESC;
