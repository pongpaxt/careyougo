// ===== CURRENT PAGE DETECTION =====
const PAGE = (() => {
  const p = location.pathname.split('/').pop() || 'index.html';
  if (p === 'index.html' || p === '') return 'home';
  return p.replace('.html', '');
})();

// ===== NAVIGATION =====
function goTo(page) {
  const map = {
    home:     'index.html',
    login:    'pages/login.html',
    register: 'pages/register.html',
    browse:   'pages/browse.html',
    profile:  'pages/profile.html',
  };
  const inPages = location.pathname.includes('/pages/');
  const base = inPages ? '../' : '';
  location.href = base + (map[page] || 'index.html');
}

// ===== TOAST =====
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2800);
}

// ===== HAMBURGER =====
function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('menu-open');
}
document.addEventListener('click', function(e) {
  if (e.target.closest('.navbar-nav a')) {
    document.querySelector('.navbar')?.classList.remove('menu-open');
  }
});

// ===== TABS =====
function switchTab(btn, paneId) {
  const wrap = btn.closest('.tab-wrap');
  wrap.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  wrap.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(paneId).classList.add('active');
}

// ===== PRICE RANGE =====
function updatePrice(val) {
  const el = document.getElementById('price-val');
  if (el) el.textContent = Number(val).toLocaleString();
}

// ===== MOCK DATA =====
const WORKERS = [
  { id:1, init:'ส', name:'สมหญิง อินทรีตี', role:'พยาบาลวิชาชีพ',   sub:'ประสบการณ์ 5 ปี', rating:4.9, rcount:46,  price:350, verified:true },
  { id:2, init:'น', name:'นารี สุโก',        role:'พี่เลี้ยงเด็ก',   sub:'ประสบการณ์ 7 ปี', rating:4.8, rcount:132, price:250, verified:true },
  { id:3, init:'ว', name:'วีโอ กาวตี',       role:'ดูแลผู้สูงอายุ',  sub:'ประสบการณ์ 3 ปี', rating:5.0, rcount:81,  price:300, verified:true },
  { id:4, init:'ส', name:'สดา เมฆใย',        role:'แม่บ้าน',         sub:'ประสบการณ์ 2 ปี', rating:4.7, rcount:137, price:200, verified:true },
  { id:5, init:'พ', name:'พิมพ์รัก วิรัตน์', role:'พี่เลี้ยงเด็ก',   sub:'ประสบการณ์ 8 ปี', rating:4.9, rcount:55,  price:380, verified:true },
  { id:6, init:'น', name:'นภา อิตี',         role:'แม่บ้านพรีเมียม', sub:'ประสบการณ์ 6 ปี', rating:4.6, rcount:70,  price:220, verified:true },
  { id:7, init:'ก', name:'กนกวรรณ อินนาก',   role:'พยาบาล',          sub:'ประสบการณ์ 9 ปี', rating:4.9, rcount:70,  price:320, verified:true },
  { id:8, init:'ร', name:'รัตน์ สงสยาน',     role:'แม่บ้านทั่วไป',   sub:'ประสบการณ์ 4 ปี', rating:4.8, rcount:162, price:340, verified:false },
  { id:9, init:'อ', name:'อรุณี ไฝดี',       role:'ดูแลผู้ป่วย',     sub:'ประสบการณ์ 5 ปี', rating:4.7, rcount:135, price:210, verified:true },
];
const COLORS = ['#C7E2FF','#D1FAE5','#FDE8CF','#EDE9FE','#FCE7F3','#DBEAFE','#D1FAE5','#FEF3C7','#E0E7FF'];

function renderHomeFeatured() {
  const el = document.getElementById('home-workers');
  if (!el) return;
  el.innerHTML = WORKERS.slice(0, 4).map((w, i) => `
    <div class="wcard" onclick="goTo('profile')">
      <div class="wcard-avatar" style="background:${COLORS[i]};">${w.init}</div>
      <div class="wcard-info">
        <div class="wcard-name">${w.name}</div>
        <div class="wcard-role">${w.role}</div>
        <div class="wcard-rating"><span class="stars">★★★★★</span> ${w.rating} (${w.rcount})</div>
        <div class="wcard-price">฿${w.price}<span>/ชม.</span></div>
      </div>
      <div class="wcard-actions">
        <button class="btn btn-outline-gray btn-sm" onclick="event.stopPropagation();goTo('profile')">โปรไฟล์</button>
        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();toast('ส่งคำขอแล้ว! 📨')">ติดต่อ</button>
      </div>
    </div>
  `).join('');
}

function renderBrowseCards() {
  const el = document.getElementById('browse-cards');
  if (!el) return;
  el.innerHTML = WORKERS.map((w, i) => `
    <div class="bcard" onclick="goTo('profile')">
      ${w.verified ? '<span class="bcard-verified">✓ ยืนยันแล้ว</span>' : ''}
      <div class="bcard-avatar" style="background:${COLORS[i]};">${w.init}</div>
      <div class="bcard-body">
        <div class="bcard-name">${w.name}</div>
        <div class="bcard-role">${w.role}</div>
        <div class="bcard-sub">${w.sub}</div>
        <div class="bcard-rating"><span class="stars">★★★★★</span> ${w.rating} (${w.rcount} รีวิว)</div>
        <div class="bcard-price">฿${w.price}<span>/ชม.</span></div>
        <div class="bcard-actions">
          <button class="btn btn-outline-gray btn-sm" onclick="event.stopPropagation();goTo('profile')">ดูโปรไฟล์</button>
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();toast('ส่งคำขอแล้ว! 📨')">ติดต่อ</button>
        </div>
      </div>
    </div>
  `).join('');
}

let regStep = 1;
const REG_TOTAL = 4;
function regNext() {
  if (regStep < REG_TOTAL) { regStep++; renderRegStep(); }
  else { toast('สมัครสมาชิกสำเร็จ! 🎉'); setTimeout(() => goTo('login'), 1400); }
}
function regPrev() { if (regStep > 1) { regStep--; renderRegStep(); } }
function renderRegStep() {
  for (let i = 1; i <= REG_TOTAL; i++) {
    const dot  = document.getElementById('si-' + i);
    const line = document.getElementById('sl-' + i);
    const lbl  = document.getElementById('slbl-' + i);
    const pane = document.getElementById('reg-step-' + i);
    if (dot)  { dot.className = 'si-dot' + (i < regStep ? ' done' : i === regStep ? ' active' : ''); dot.textContent = i < regStep ? '✓' : i; }
    if (line) line.className = 'si-line' + (i < regStep ? ' done' : '');
    if (lbl)  lbl.className  = 'si-label' + (i === regStep ? ' active' : '');
    if (pane) pane.style.display = i === regStep ? 'block' : 'none';
  }
  const prev = document.getElementById('reg-prev');
  const next = document.getElementById('reg-next');
  if (prev) prev.style.display = regStep > 1 ? 'inline-flex' : 'none';
  if (next) next.textContent = regStep === REG_TOTAL ? '✅ สมัครสมาชิก' : 'ถัดไป →';
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-nav]').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === PAGE);
  });
  renderHomeFeatured();
  renderBrowseCards();
  if (document.getElementById('si-1')) renderRegStep();
});

// ===== CLOSE NAV DROPDOWN ON OUTSIDE CLICK =====
document.addEventListener('click', function(e) {
  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
  }
});
