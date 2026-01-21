// Theme management (currently dark theme only, but structured for future expansion)

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
  // Since we're using dark theme only, we ensure the body has the correct class
  document.body.classList.add('dark-theme');
  
  // Store theme preference (for future light/dark toggle if needed)
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);
});

// Apply theme function (structured for potential light/dark toggle)
function applyTheme(theme) {
  document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  localStorage.setItem('theme', theme);
}

// Future: Toggle theme function (commented out since we're dark-only)
/*
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}
*/

// Respect system preferences (optional, currently disabled for dark-only)
// This can be enabled if you want to add light mode support later
/*
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
if (!localStorage.getItem('theme')) {
  applyTheme(prefersDark.matches ? 'dark' : 'light');
}
*/
