-- Restore public EC tables extracted from db_cluster-27-01-2026@18-51-06.backup
-- Use in Supabase SQL Editor. This intentionally excludes auth/storage/realtime internal schemas.

BEGIN;

DROP TABLE IF EXISTS public.order_items CASCADE;
DROP TABLE IF EXISTS public.orders CASCADE;
DROP TABLE IF EXISTS public.products CASCADE;

--

CREATE TABLE public.order_items (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    order_id uuid,
    product_id uuid,
    product_name text NOT NULL,
    product_price integer NOT NULL,
    size text,
    quantity integer NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);


ALTER TABLE public.order_items OWNER TO postgres;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    email text NOT NULL,
    total_amount integer NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL,
    stripe_session_id text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    description text,
    category text NOT NULL,
    image_url text NOT NULL,
    images text[] DEFAULT '{}'::text[],
    sizes text[] DEFAULT '{}'::text[],
    stock integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    stock_by_size jsonb DEFAULT '{}'::jsonb
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: messages; Type: TABLE; Schema: realtime; Owner: supabase_realtime_admin

COPY public.order_items (id, order_id, product_id, product_name, product_price, size, quantity, created_at) FROM stdin;
\.

COPY public.orders (id, user_id, email, total_amount, status, stripe_session_id, created_at) FROM stdin;
\.

COPY public.products (id, name, price, description, category, image_url, images, sizes, stock, created_at, stock_by_size) FROM stdin;
70ec8c88-90d3-48d3-8820-0bac0a09bf5b	SkyFisH PENDANT	6000	⚠︎一体ずつハンドメイドのため個体差がございます\r\n\r\nEach item is handmade so there may be individual differences.	アクセサリ	https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/skyfish-pendant-blue.jpg	{https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/skyfish-pendant-blue.jpg}	{}	1	2026-01-12 14:50:03.756885+00	{}
6855b588-ae11-4bc1-b534-9cee9f51b075	OXYGEN MAGAZINE T-SHIRT	5500	OXYGEN MAGAZINE T-SHIRT	t-shirt	https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-t-front.jpg	{https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-t-front.jpg}	{S,M,L,XL,2XL,3XL}	7	2026-01-09 07:13:04.047777+00	{"L": 1, "M": 1, "S": 2, "XL": 2, "2XL": 0, "3XL": 1}
e68d299c-5312-4c76-9a53-1232f6ecb3bf	OXYGEN MAGAZINE LONG SHIRT	7000	OXYGEN MAGAZINE LONG SHIRT	t-shirt	https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-long-t-front.jpg	{https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-long-t-front.jpg}	{XL,2XL,3XL}	5	2026-01-09 07:13:04.047777+00	{"XL": 1, "2XL": 2, "3XL": 2}
f517ec10-4aa4-4bf1-80ae-3e3769888df8	OXYGEN MAGAZINE	1700	OXYGEN MAGAZINE	magazine	https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-magazine-front.jpg	{https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-magazine-front.jpg,https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/oxygen-magazine-inside.jpg}	{}	3	2026-01-09 07:13:04.047777+00	{}
c51f92b0-cac6-4fbb-ab9d-5792779ffc53	空間断裂多次元生命誕生日 バンダナ	6000	空間断裂多次元生命誕生日	bandana	https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/bandana.jpg	{https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/bandana.jpg}	{}	9	2026-01-09 07:13:04.047777+00	{}
d27f267a-2618-4442-9bf7-226e6c396a5c	MADE IN HEAVEN T-SHIRT	7000	material(95%polyester 5%spandex)	t-shirt	https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/made-in-heaven-t-front.jpg	{https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/made-in-heaven-t-front.jpg,https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/made-in-heaven-t-back.jpg}	{2XS,XS,S,M,L,XL,2XL,3XL,4XL}	18	2026-01-09 07:13:04.047777+00	{"L": 2, "M": 1, "S": 2, "XL": 3, "XS": 1, "2XL": 1, "2XS": 2, "3XL": 3, "4XL": 3}
cbf95fe0-8b90-4cb3-909e-6e1c68ccf8c3	CYBER SKYFISH PENDANT	5500	⚠︎一体ずつハンドメイドのため個体差がございます\r\n⚠︎繊細なため激しい動きには向いておりません\r\n⚠︎金具の色は金と銀ランダムになります\r\n\r\nEach item is handmade so there may be individual differences.\r\n⚠︎Delicate items not suitable for vigorous movement.\r\n⚠︎The metal fittings are gold and silver in random color.	アクセサリ	https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/cyber-skyfish-pendant-white.jpg	{https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/cyber-skyfish-pendant-white.jpg,https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/cyber-skyfish-pendant-silver.jpg,https://avaojbznmyigsnorfjoq.supabase.co/storage/v1/object/public/product-image/cyber-skyfish-pendant-black.jpg}	{シルバー,ホワイト,ブラック}	0	2026-01-12 14:50:03.756885+00	{"シルバー": 0, "ブラック": 0, "ホワイト": 0}
\.

-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--

-- Name: order_items order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE CASCADE;


--
-- Name: order_items order_items_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: orders orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);


--

-- Name: order_items; Type: ROW SECURITY; Schema: public; Owner: postgres
--

ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

--
-- Name: orders; Type: ROW SECURITY; Schema: public; Owner: postgres
--

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

--
-- Name: products; Type: ROW SECURITY; Schema: public; Owner: postgres
--

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

--
-- Name: orders ユーザーは自分の注文を閲覧可能; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "ユーザーは自分の注文を閲覧可能" ON public.orders FOR SELECT TO authenticated USING ((auth.uid() = user_id));


--
-- Name: order_items ユーザーは自分の注文明細を閲覧可能; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "ユーザーは自分の注文明細を閲覧可能" ON public.order_items FOR SELECT TO authenticated USING ((order_id IN ( SELECT orders.id
   FROM public.orders
  WHERE (orders.user_id = auth.uid()))));


--
-- Name: products 商品は誰でも閲覧可能; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "商品は誰でも閲覧可能" ON public.products FOR SELECT USING (true);


GRANT ALL ON TABLE public.order_items TO anon;
GRANT ALL ON TABLE public.order_items TO authenticated;
GRANT ALL ON TABLE public.order_items TO service_role;

GRANT ALL ON TABLE public.orders TO anon;
GRANT ALL ON TABLE public.orders TO authenticated;
GRANT ALL ON TABLE public.orders TO service_role;

GRANT ALL ON TABLE public.products TO anon;
GRANT ALL ON TABLE public.products TO authenticated;
GRANT ALL ON TABLE public.products TO service_role;


COMMIT;
