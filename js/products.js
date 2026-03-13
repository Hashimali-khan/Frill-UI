/* ═══════════════════════════════════════
   PRODUCT DATA — SINGLE SOURCE OF TRUTH
   ═══════════════════════════════════════
   
   ★ TO ADD/EDIT/REMOVE PRODUCTS:
     Just modify this array. Everything else
     (home page, collection page, product detail)
     renders automatically from this data.

   ★ PRODUCT SCHEMA:
     {
       id:           Number  — Unique ID (increment for new products)
       name:         String  — Product title
       vendor:       String  — Brand/vendor name
       price:        String  — Display price (e.g. "PKR 2,499")
       oldPrice:     String|null — Strikethrough price, or null if no sale
       desc:         String  — Short description (shown on cards)
       longDesc:     String  — Full description (shown on product page)
       badge:        String  — Badge text (e.g. "BESTSELLER", "NEW", "SALE", "CUSTOM")
       badgeClass:   String  — CSS class: "badge-new", "badge-custom", or "badge-sale"
       img:          String  — Main product image URL
       imgs:         Array   — Array of image URLs for gallery/thumbs
       stars:        Number  — Rating out of 5 (e.g. 4.9)
       reviews:      Number  — Number of reviews
       colors:       Array   — Array of hex colour strings
       sizes:        Array   — Array of size strings (e.g. ["S","M","L"])
       customizable: Boolean — Whether "Customise" badge shows
     }
═══════════════════════════════════════ */

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Custom Hoodie",
    vendor: "Frill Custom Apparel",
    price: "PKR 2,499",
    oldPrice: "PKR 3,200",
    desc: "Premium 320 GSM fleece hoodie — the canvas for your greatest design yet.",
    longDesc: "Our most popular base garment. This 320 GSM fleece hoodie is pre-washed, pre-shrunk, and blank-ready for DTG printing. Available in 12 base colours with a kangaroo pocket and double-stitched hem. Upload your artwork and see it come to life on the live preview before ordering. Wash-resistant inks guaranteed for 200+ washes.",
    badge: "BESTSELLER",
    badgeClass: "badge-new",
    img: "https://images.unsplash.com/photo-1738486260590-23c954cf29b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYWluJTIwaG9vZGllfGVufDB8fDB8fHww",
    imgs: [
      "https://images.unsplash.com/photo-1738486260590-23c954cf29b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYWluJTIwaG9vZGllfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1738486260590-23c954cf29b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYWluJTIwaG9vZGllfGVufDB8fDB8fHww",
    ],
    stars: 4.9,
    reviews: 312,
    colors: ["#3B1F5E", "#1a1a1a", "#fff", "#C2185B", "#2563EB", "#16a34a"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    customizable: true
  },
  {
    id: 2,
    name: "Signature Unisex Tee",
    vendor: "Frill Custom Apparel",
    price: "PKR 1,199",
    oldPrice: null,
    desc: "180 GSM combed cotton — soft, durable, and print-ready for anything.",
    longDesc: "The foundation of any great wardrobe. Our Signature Tee uses 180 GSM combed ringspun cotton for a soft hand-feel that holds DTG ink beautifully. Available in 16 base colours. Whether you're printing a single tee for yourself or 100 for your event, every piece gets the same precision printing. Crew neck, taped shoulders, tear-away label.",
    badge: "CUSTOM",
    badgeClass: "badge-custom",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&auto=format&fit=crop&q=80",
    ],
    stars: 4.8,
    reviews: 580,
    colors: ["#fff", "#1a1a1a", "#3B1F5E", "#C2185B", "#F59E0B", "#6b7280"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    customizable: true
  },
  {
    id: 3,
    name: "Premium Polo Shirt",
    vendor: "Frill Custom Apparel",
    price: "PKR 1,799",
    oldPrice: "PKR 2,200",
    desc: "Piqué cotton polo with embroidered or printed customisation options.",
    longDesc: "Elevate your corporate uniform or team kit with our Premium Polo. Made from 220 GSM piqué cotton, it offers a clean professional look with a 3-button placket, ribbed collar, and side vents. Available for DTG full-front print or embroidered logo on the chest. Most popular for company uniforms, sports teams, and restaurant staff.",
    badge: "SALE",
    badgeClass: "badge-sale",
    img: "https://images.unsplash.com/photo-1671438118097-479e63198629?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgs: [
      "https://images.unsplash.com/photo-1671438118097-479e63198629?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    stars: 4.7,
    reviews: 198,
    colors: ["#fff", "#1a1a1a", "#2563EB", "#3B1F5E", "#16a34a"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    customizable: true
  },
  {
    id: 4,
    name: "All-Over Print Jacket",
    vendor: "Frill Custom Apparel",
    price: "PKR 4,999",
    oldPrice: "PKR 6,500",
    desc: "Sublimation-printed jacket with edge-to-edge custom design. Statement piece.",
    longDesc: "Our most dramatic canvas. This windbreaker-style jacket uses dye-sublimation printing to push your design across every centimetre of fabric — seams, zips, cuffs included. The all-over effect is possible only with sublimation on polyester, and the result is something truly unique. Lightweight, water-resistant shell. Great for event jackets, festival wear, sports teams, and brand activations.",
    badge: "CUSTOM",
    badgeClass: "badge-custom",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80",
    ],
    stars: 4.9,
    reviews: 87,
    colors: ["#3B1F5E", "#1a1a1a", "#fff", "#C2185B"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    customizable: true
  },
  {
    id: 5,
    name: "Eco Canvas Tote Bag",
    vendor: "Frill Custom Apparel",
    price: "PKR 799",
    oldPrice: null,
    desc: "12 oz natural cotton tote — perfect for printed artwork, brand logos, and gifting.",
    longDesc: "The most giftable custom product in our catalogue. Our 12 oz natural canvas tote bags are printed with our DTG machines for sharp, full-colour designs on a natural cotton base. Available in natural, black, and navy. Great for university clubs, café merchandise, event giveaways, and artist print runs. Reinforced stitched handles rated for 15 kg.",
    badge: "NEW",
    badgeClass: "badge-new",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    ],
    stars: 4.8,
    reviews: 254,
    colors: ["#d4c49a", "#1a1a1a", "#1e3a5f"],
    sizes: ["One Size"],
    customizable: true
  }
];
