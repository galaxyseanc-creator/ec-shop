-- Update product image URLs after uploading the same files to the new Supabase project.
-- Required bucket: product-image
-- New project URL: https://wglcvptvprgavhfjnxtf.supabase.co

BEGIN;

UPDATE public.products
SET
  image_url = replace(
    image_url,
    'https://avaojbznmyigsnorfjoq.supabase.co',
    'https://wglcvptvprgavhfjnxtf.supabase.co'
  ),
  images = ARRAY(
    SELECT replace(
      image,
      'https://avaojbznmyigsnorfjoq.supabase.co',
      'https://wglcvptvprgavhfjnxtf.supabase.co'
    )
    FROM unnest(images) AS image
  )
WHERE image_url LIKE 'https://avaojbznmyigsnorfjoq.supabase.co/%'
   OR EXISTS (
    SELECT 1
    FROM unnest(images) AS image
    WHERE image LIKE 'https://avaojbznmyigsnorfjoq.supabase.co/%'
  );

COMMIT;

-- Verify:
-- SELECT name, image_url, images FROM public.products ORDER BY created_at DESC;
