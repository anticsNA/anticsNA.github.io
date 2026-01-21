// Main JavaScript functionality

// Navigation active state
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const header = document.querySelector('.header');

  function getHeaderOffset() {
    if (!header) return 0;
    return header.getBoundingClientRect().height;
  }

  function setActiveNavByHash(hash) {
    const currentHash = hash || '#home';
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('#') && href === currentHash) link.classList.add('active');
      else link.classList.remove('active');
    });
  }

  function scrollToHash(hash) {
    if (!hash || hash === '#') return;
    const target = document.querySelector(hash);
    if (!target) return;

    const headerOffset = getHeaderOffset();
    const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: Math.max(0, targetTop - headerOffset - 12),
      behavior: 'smooth'
    });
  }

  // Single-page: smooth scroll for hash links + active-state updates
  document.addEventListener('click', function(e) {
    const link = e.target.closest && e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    history.pushState(null, '', href);
    setActiveNavByHash(href);
    scrollToHash(href);
  });

  window.addEventListener('hashchange', function() {
    setActiveNavByHash(window.location.hash);
  });

  // On load: if there's a hash, scroll to it (after layout)
  setActiveNavByHash(window.location.hash);
  if (window.location.hash) {
    setTimeout(() => scrollToHash(window.location.hash), 0);
  }

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // In a real application, you would send this data to a server
      // For now, we'll just show a success message
      alert('Thank you for your message! I\'ll get back to you soon.');
      this.reset();
    });
  }

  // Mobile menu toggle (if needed in future)
  // This is a placeholder for potential mobile menu functionality
});

// Utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
  // Add any resize-specific logic here if needed
}, 250));
