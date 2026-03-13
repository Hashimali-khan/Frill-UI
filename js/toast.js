/* ═══════════════════════════════════════
   TOAST — Notification system
═══════════════════════════════════════ */

let toastTimer;

function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toast-msg');
  m.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}
