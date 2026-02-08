// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.navbar-toggle');
  const menu = document.querySelector('.navbar-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  }

  // Sidebar toggle for mobile
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
  }

  // Expand/collapse sidebar sections
  const navSections = document.querySelectorAll('.nav-section > a');
  navSections.forEach(function(section) {
    section.addEventListener('click', function(e) {
      const parent = this.parentElement;
      const sublist = parent.querySelector('ul');

      if (sublist) {
        e.preventDefault();
        parent.classList.toggle('expanded');
      }
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
