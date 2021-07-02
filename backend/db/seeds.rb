# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all

Product.create([
{
    title: "Nars Radiant Longwear Foundation",
    description: "A buildable, full-coverage foundation with up to 16 hours of lightweight, natural, fade-resistant wear.",
    price: 49.00,
    category: "makeup",
    product_image: "http://www.calibeaute.com/wp-content/uploads/2017/12/NARS-Natural-Radiant-Foundation-Review-.jpg"
},
{
    title: "Laneige Lip Sleeping Mask",
    description: "A leave-on lip mask that delivers intense moisture and antioxidants while you sleep with its Moisture Wrap™ Technology and Berry Mix Complex™ formula.",
    price: 22.00,
    category: "skincare",
    product_image: "https://4.bp.blogspot.com/-fLvh7jOuGTQ/WmGEx5czCoI/AAAAAAAAYxU/lTFoMZu3VXQm4oDtdIfKpKTZa7rl0NjQACLcBGAs/s1600/NARS-Natural-Radiant-Longwear-Foundation.jpg"
},
{
    title: "Laura Mercier Caviar Stick Eye Shadow",
    description: "A long-lasting, creamy eyeshadow stick that can also line, highlight, and create smoky looks.",
    price: 29.00,
    category: "makeup",
    product_image: "https://images.prod.meredith.com/product/8c1593a42f64422d935f5eea69767c8d/1559988036449/l/laura-mercier-caviar-stick-eye-shadow-copper-0-05-oz-1-64-g"
},
{
    title: "Chanel N5 Eau de Toilette Spray",
    description: "A modern, fresh, and vibrant embodiment of the now and forever scent. Timeless and audacious, simple and sophisticated.",
    price: 108.00,
    category: "fragrance",
    product_image: "https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/n-5-l-eau-eau-de-toilette-spray-3-4fl-oz--packshot-default-105530-8841593028638.jpg"
},
{
    title: "Glow Recipe Watermelon Niacinamide Dew Drops",
    description: "A breakthrough, multiuse highlighting serum that hydrates and visibly reduces the look of hyperpigmentation for a dewy, reflective glow—without mica, glitter, or gray cast.",
    price: 34.00,
    category: "skincare",
    product_image: "https://cdn.shopify.com/s/files/1/0543/8301/products/glowrecipe_dewdrops_0291_1_800x.jpg?v=1607354644"
},
{
    title: "Charlotte Tilbury Mini Pillow Talk Lipstick & Liner Set",
    description: "A mini lip set featuring Charlotte's iconic, bestselling Matte Revolution or K.I.S.S.I.N.G Lipstick with a Lip Cheat Pencil for a dreamy, nude-pink, kissable look.",
    price: 25.00,
    category: "makeup",
    product_image: "https://www.sephora.com/productimages/sku/s2339620-main-zoom.jpg"
},
{
    title: "Westman Atelier Vital Skin Foundation Stick",
    description: "A clean, high-performance cream foundation and concealer stick packed with nourishing ingredients for a radiant, natural, second-skin finish.",
    price: 68.00,
    category: "makeup",
    product_image: "https://www.niche-beauty.com/images/generated/orig/60/21/img162160.jpg"
},
{
    title: "FENTY BEAUTY by Rihanna Eaze Drop Blurring Skin Tint",
    description: "A lightweight, buildable light-to-medium coverage skin tint that leaves skin looking blurred and smoothed – in flexible shades for all.",
    price: 29.50,
    category: "makeup",
    product_image: "http://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB30031_FB014_1200x1200.jpg?v=1623427021"
},
{
    title: "Gucci Éclat De Beauté Effet Lumière — All Over Face & Lip Gloss",
    description: "A multi-use gel gloss creates a luminous light effect.",
    price: 33.00,
    category: "makeup",
    product_image: "https://www.sephora.com/productimages/sku/s2357721-main-zoom.jpg?imwidth=315"
},
{
    title: "Nars Lipstick",
    description: "A new lineup of long-lasting lipsticks, featuring an innovative, new formula that delivers instant color vibrancy and conditions lips for a hydrated feel.",
    price: 26.00,
    category: "makeup",
    product_image: "https://www.narscosmetics.eu/dw/image/v2/BCMQ_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwa79af858/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Boukhara_Matte_GLBL_B_square.jpg?sw=856&sh=750&sm=fit"
},
{
    title: "Dior Lip Glow Oil",
    description: "A nurturing, glossy lip oil that protects and enhances the lips, bringing out their natural color.",
    price: 35.00,
    category: "makeup",
    product_image: "https://img.makeupalley.com/0/8/3/5/3607670.jpg"
},
{
    title: "Hourglass Ambient Lighting Powder",
    description: "A collection of six universally-flattering finishing powders that recreate the most flattering light.",
    price: 48.00,
    category: "makeup",
    product_image: "https://dy6g3i6a1660s.cloudfront.net/iWIsmmFVDCCUGqhQjGlPOAR-BH4/p_550x550.jpg"
},
{
    title: "PAT McGRATH LABS Lip Fetish Balm Tin",
    description: "A hydrating tint that unleashes a sheer, balmy glow and comes in a gilded case that‘s adorned with a lavish lip hallmark.",
    price: 12.50,
    category: "makeup",
    product_image: "https://i1.wp.com/beautyvelle.com/wp-content/uploads/2020/10/Pat-Mcgrath-Holiday-Lip-Fetish-Balm-Tin-7.jpg?fit=540%2C540&ssl=1"
},
{
    title: "FENTY BEAUTY by Rihanna Pro Filtr Instant Retouch Concealer",
    description: "A creamy, long-wear, crease-proof liquid concealer with light-as-air, medium-to-full coverage that brightens under-eyes and conceals blemishes and redness.",
    price: 26.00,
    category: "makeup",
    product_image: "https://boutique.humbleandrich.com/wp-content/uploads/2019/03/002-1.jpg"
},
{
    title: "fresh Rose & Hyaluronic Acid Deep Hydration Moisturizer",
    description: "A best-selling hyaluronic acid moisturizer featuring a new clean formula with 72-hour hydration and a lightweight texture for plump, dewy skin.",
    price: 33.75,
    category: "skincare",
    product_image: "https://di2ponv0v5otw.cloudfront.net/posts/2021/06/25/60d691da7ec30c45fcf11cb8/m_60d691f0d737fd7f22aa9899.jpg"
}
])