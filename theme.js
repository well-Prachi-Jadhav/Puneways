const themeToggle = document.getElementById('themeToggle');
const rootElement = document.documentElement;
const savedTheme = localStorage.getItem('puneways-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(theme) {
  if (theme === 'dark') {
    rootElement.classList.add('dark-theme');
    if (themeToggle) themeToggle.textContent = '☀️';
    if (themeToggle) themeToggle.setAttribute('aria-label', 'Switch to light mode');
  } else {
    rootElement.classList.remove('dark-theme');
    if (themeToggle) themeToggle.textContent = '🌙';
    if (themeToggle) themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  }
}

function loadTheme() {
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
}

function toggleTheme() {
  const isDark = rootElement.classList.contains('dark-theme');
  const nextTheme = isDark ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem('puneways-theme', nextTheme);
}

window.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
});
