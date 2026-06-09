# Supabase Image Migration Checklist

Move product images to the new Supabase project before running `update-image-urls-to-new-project.sql`.

## New Supabase Project

- Project URL: `https://wglcvptvprgavhfjnxtf.supabase.co`
- Storage bucket: `product-image`
- Bucket visibility: public

## Files To Upload

Upload these files to the root of the `product-image` bucket with exactly the same filenames:

- `skyfish-pendant-blue.jpg`
- `oxygen-t-front.jpg`
- `oxygen-long-t-front.jpg`
- `oxygen-magazine-front.jpg`
- `oxygen-magazine-inside.jpg`
- `bandana.jpg`
- `made-in-heaven-t-front.jpg`
- `made-in-heaven-t-back.jpg`
- `cyber-skyfish-pendant-white.jpg`
- `cyber-skyfish-pendant-silver.jpg`
- `cyber-skyfish-pendant-black.jpg`

## After Upload

Run this in Supabase SQL Editor:

```sql
-- supabase/update-image-urls-to-new-project.sql
```

Then verify:

```sql
select name, image_url, images
from public.products
order by created_at desc;
```
