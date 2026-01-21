// Scroll animations using Intersection Observer

document.addEventListener('DOMContentLoaded', function() {
  // Check if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all elements immediately
    const scrollElements = document.querySelectorAll('.scroll-fade');
    scrollElements.forEach(el => el.classList.add('visible'));
    return;
  }

  // Create Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-fade class
  const scrollElements = document.querySelectorAll('.scroll-fade');
  scrollElements.forEach(el => {
    observer.observe(el);
  });

  // Smooth-scrolling for hash links is handled in `js/main.js`.

  // Note: Parallax on the hero was removed to keep the page scrolling as one cohesive surface.

  // Fade in navigation on scroll (optional enhancement)
  const header = document.querySelector('.header');
  let lastScroll = 0;
  
  if (header) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
        header.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });
  }
});

// Utility: Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Disable animations for users who prefer reduced motion
  document.documentElement.style.setProperty('--transition-base', '0ms');
  document.documentElement.style.setProperty('--transition-fast', '0ms');
  document.documentElement.style.setProperty('--transition-slow', '0ms');
}
