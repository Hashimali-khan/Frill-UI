/* ═══════════════════════════════════════
   NAVIGATION — SPA page routing
═══════════════════════════════════════ */

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const map = { home: 0, collection: 1, about: 2, contact: 3 };
  const links = document.querySelectorAll('.nav-link');
  if (map[page] !== undefined && links[map[page]]) {
    links[map[page]].classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
