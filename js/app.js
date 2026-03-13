/* ═══════════════════════════════════════
   APP — Initialization
   ═══════════════════════════════════════
   Loads:
     products.js  → PRODUCTS data
     toast.js     → showToast()
     navigation.js → showPage()
     render.js    → renderProductCard(), showProduct()
═══════════════════════════════════════ */

function init() {
  // Featured products on home page (first 4)
  const featuredGrid = document.getElementById('featured-products');
  if (featuredGrid) {
    featuredGrid.innerHTML = PRODUCTS.slice(0, 4)
      .map(p => renderProductCard(p, `showProduct(${p.id})`))
      .join('');
  }

  // Collection page (all products)
  const collectionGrid = document.getElementById('collection-products');
  if (collectionGrid) {
    collectionGrid.innerHTML = PRODUCTS
      .map(p => renderProductCard(p, `showProduct(${p.id})`))
      .join('');
  }

  // Product count
  const countEl = document.getElementById('collection-count');
  if (countEl) {
    countEl.textContent = `${PRODUCTS.length} products`;
  }
}

init();
