/* ═══════════════════════════════════════
   RENDER — Product card & product detail templates
   ═══════════════════════════════════════
   Uses PRODUCTS array from products.js
   Uses showToast() from toast.js
   Uses showPage() from navigation.js
═══════════════════════════════════════ */

/**
 * Renders a product card HTML string.
 * @param {Object} product - A product object from PRODUCTS array.
 * @param {string} onclick - The onclick handler string for the card.
 * @returns {string} HTML string for the product card.
 */
function renderProductCard(product, onclick) {
  const p = product;
  const stars = '⭐'.repeat(Math.round(p.stars));
  const priceHtml = p.oldPrice
    ? `<span class="old">${p.oldPrice}</span> ${p.price}`
    : p.price;

  return `
    <div class="product-card" onclick="${onclick}">
      <div class="product-img-wrap">
        <img class="product-img" src="${p.img}" alt="${p.name}" onerror="this.style.background='var(--gray-200)'"/>
        <span class="product-badge ${p.badgeClass}">${p.badge}</span>
        ${p.customizable ? `<span class="product-badge badge-custom" style="top:0.75rem;right:0.75rem;left:auto;">🎨 Customise</span>` : ''}
        <div class="product-actions">
          <button class="pa-btn" onclick="event.stopPropagation();showToast('♡ Saved to wishlist!')">♡</button>
          <button class="pa-btn" onclick="event.stopPropagation();showToast('🔍 Quick view coming!')">👁</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-vendor">${p.vendor}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc-short">${p.desc}</div>
        <div class="product-price-row">
          <div class="product-price">${priceHtml}</div>
          <div class="product-stars"><span class="star">⭐</span><span class="star-count">${p.stars} (${p.reviews})</span></div>
        </div>
        <button class="product-card-atc" onclick="event.stopPropagation();showToast('🛒 ${p.name} added to cart!')">Add to Cart</button>
      </div>
    </div>`;
}

/**
 * Renders the full product detail page for a given product ID.
 * @param {number} id - The product ID to display.
 */
function showProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const colSwatches = p.colors.map(c =>
    `<div class="color-swatch ${c === p.colors[0] ? 'active' : ''}" style="background:${c}" onclick="this.parentElement.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active'));this.classList.add('active');" title="${c}"></div>`
  ).join('');

  const sizeChips = p.sizes.map(s =>
    `<div class="size-chip ${s === p.sizes[2] || s === 'One Size' ? 'active' : ''}" onclick="this.parentElement.querySelectorAll('.size-chip').forEach(x=>x.classList.remove('active'));this.classList.add('active')">${s}</div>`
  ).join('');

  const thumbs = p.imgs.map((img, i) =>
    `<div class="product-thumb ${i === 0 ? 'active' : ''}" onclick="document.getElementById('main-prod-img').src='${img}';this.parentElement.querySelectorAll('.product-thumb').forEach(t=>t.classList.remove('active'));this.classList.add('active')"><img src="${img}" alt=""/></div>`
  ).join('');

  const priceDisplay = p.oldPrice
    ? `<span class="was">${p.oldPrice}</span> ${p.price} <span class="save">You save!</span>`
    : p.price;

  document.getElementById('product-detail-content').innerHTML = `
    <div class="product-page">
      <div class="product-breadcrumb">
        <a onclick="showPage('home')">Home</a><span>›</span>
        <a onclick="showPage('collection')">All Products</a><span>›</span>
        ${p.name}
      </div>
      <div class="product-layout">
        <div class="product-images">
          <div class="product-main-img">
            <img id="main-prod-img" src="${p.imgs[0]}" alt="${p.name}"/>
          </div>
          <div class="product-thumbs">${thumbs}</div>
        </div>
        <div class="product-info-col">
          <div class="product-vendor-tag">${p.vendor}</div>
          <h1 class="product-title">${p.name}</h1>
          <div class="product-rating-row">
            <span class="star">⭐⭐⭐⭐⭐</span>
            <span class="star-count">${p.stars} · ${p.reviews} reviews</span>
          </div>
          <div class="product-price-display">${priceDisplay}</div>
          <div class="custom-badge-strip">
            <div class="custom-badge"><span class="custom-badge-icon">🎨</span> Upload your design</div>
            <div class="custom-badge"><span class="custom-badge-icon">🖨️</span> In-house DTG printing</div>
            <div class="custom-badge"><span class="custom-badge-icon">📦</span> 5-day delivery</div>
            <div class="custom-badge"><span class="custom-badge-icon">✔</span> No minimum order</div>
          </div>
          <div class="product-desc">${p.longDesc}</div>
          <div class="option-label">Colour</div>
          <div class="option-swatches">${colSwatches}</div>
          <div class="option-label">Size</div>
          <div class="size-chips">${sizeChips}</div>
          <div class="qty-atc">
            <div class="qty-input">
              <button class="qty-btn" onclick="let v=document.getElementById('qty-val');v.textContent=Math.max(1,parseInt(v.textContent)-1)">−</button>
              <div class="qty-val" id="qty-val">1</div>
              <button class="qty-btn" onclick="let v=document.getElementById('qty-val');v.textContent=parseInt(v.textContent)+1">+</button>
            </div>
            <button class="btn btn-primary" style="flex:1" onclick="showToast('🛒 ${p.name} added to cart!')">Add to Cart</button>
          </div>
          <button class="btn btn-magenta btn-full" onclick="showToast('🎨 Opening design studio for ${p.name}...')">🎨 Customise This Garment</button>
          <div class="product-guarantee">
            <div class="guarantee-title">Our Guarantee</div>
            <div class="guarantee-items">
              <div class="g-item"><span class="g-icon">✔</span> Colour-accurate print or we reprint free</div>
              <div class="g-item"><span class="g-icon">✔</span> Wash-resistant inks — tested 200+ washes</div>
              <div class="g-item"><span class="g-icon">✔</span> Easy 7-day returns on non-custom items</div>
              <div class="g-item"><span class="g-icon">✔</span> Real-time order tracking via SMS</div>
            </div>
          </div>
          <div class="customizer-cta">
            <h4>🎨 This product is fully customisable</h4>
            <p>Use the Frill Design Studio to add text, upload your art, choose clipart, or browse templates — completely free, no design skills required.</p>
            <button class="btn btn-white btn-sm" onclick="showToast('🚀 Studio opening...')">Open Design Studio →</button>
          </div>
        </div>
      </div>
    </div>`;

  showPage('product');
}
