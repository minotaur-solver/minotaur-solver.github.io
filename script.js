/* Minotaur Solver JavaScript Interactions */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navButtons = document.querySelector('.nav-buttons');
  
  if (hamburger && navButtons) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navButtons.classList.toggle('open');
      const lines = hamburger.querySelectorAll('.line');
      if (navButtons.classList.contains('open')) {
        lines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        lines[1].style.opacity = '0';
        lines[2].style.opacity = '0';
        lines[3].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.opacity = '1';
        lines[3].style.transform = 'none';
      }
    });
    
    document.addEventListener('click', (e) => {
      if (navButtons.classList.contains('open') && !navButtons.contains(e.target) && !hamburger.contains(e.target)) {
        navButtons.classList.remove('open');
        const lines = hamburger.querySelectorAll('.line');
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.opacity = '1';
        lines[3].style.transform = 'none';
      }
    });

    navButtons.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navButtons.classList.remove('open');
        const lines = hamburger.querySelectorAll('.line');
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.opacity = '1';
        lines[3].style.transform = 'none';
      });
    });
  }
});
