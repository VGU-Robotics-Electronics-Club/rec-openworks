'use strict';

const root = document.documentElement;
const savedTheme = localStorage.getItem('rec-openworks-theme');
if (savedTheme) root.dataset.theme = savedTheme;

const themeToggle = document.querySelector('#themeToggle');
function labelTheme() { if (themeToggle) themeToggle.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'); }
labelTheme();
themeToggle?.addEventListener('click', () => { root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('rec-openworks-theme', root.dataset.theme); labelTheme(); });

const navToggle = document.querySelector('#mobileNavToggle');
const nav = document.querySelector('#mainNav');
navToggle?.addEventListener('click', () => { const open = navToggle.getAttribute('aria-expanded') === 'true'; navToggle.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('open', !open); });
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); navToggle?.setAttribute('aria-expanded', 'false'); }));

const search = document.querySelector('#workSearch');
const filters = document.querySelectorAll('.filter');
const rows = document.querySelectorAll('[data-work]');
const list = document.querySelector('#archiveList');
const count = document.querySelector('#resultCount');
let activeCategory = new URLSearchParams(location.search).get('category') || 'all';
function renderArchive() {
  if (!rows.length) return;
  const query = (search?.value || '').trim().toLowerCase(); let visible = 0;
  rows.forEach(row => { const show = (activeCategory === 'all' || row.dataset.category === activeCategory) && row.dataset.search.toLowerCase().includes(query); row.hidden = !show; if (show) visible += 1; });
  list?.querySelector('.archive-empty')?.remove();
  if (!visible && list) { const empty = document.createElement('p'); empty.className = 'archive-empty'; empty.textContent = 'No results found. Try another search or category.'; list.append(empty); }
  if (count) count.textContent = `${String(visible).padStart(2, '0')} ${visible === 1 ? 'work' : 'works'} in the collection`;
}
filters.forEach(button => { const selected = button.dataset.filter === activeCategory; button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected)); button.addEventListener('click', () => { activeCategory = button.dataset.filter; filters.forEach(item => { const isSelected = item === button; item.classList.toggle('active', isSelected); item.setAttribute('aria-pressed', String(isSelected)); }); renderArchive(); }); });
search?.addEventListener('input', renderArchive); renderArchive();

document.querySelectorAll('.citation-copy').forEach(button => button.addEventListener('click', async () => { const feedback = button.parentElement.querySelector('.copy-feedback'); try { await navigator.clipboard.writeText(button.dataset.citation); feedback.textContent = 'Citation copied.'; } catch { feedback.textContent = 'Copy unavailable. Select the record details to cite manually.'; } }));
