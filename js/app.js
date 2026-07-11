/* ==========================================================================
   Okinawa Family Trip Guide — app.js (vanilla JS, no dependencies)
   ========================================================================== */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -----------------------------------------------------------------
     1. Navbar: blur / solid background once the page has scrolled
     ----------------------------------------------------------------- */
  var navbar = document.getElementById('navbar');

  function updateNavbarState() {
    if (!navbar) return;
    if (window.scrollY > 24) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }
  updateNavbarState();
  window.addEventListener('scroll', updateNavbarState, { passive: true });

  /* -----------------------------------------------------------------
     2. Mobile menu toggle
     ----------------------------------------------------------------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? '關閉選單' : '開啟選單');
    });

    // Close the mobile menu after tapping a link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', '開啟選單');
      });
    });
  }

  /* -----------------------------------------------------------------
     3. Scroll-reveal for elements with the `.reveal` class
     ----------------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            // small stagger for elements revealed together
            var delay = Math.min(i * 60, 240);
            setTimeout(function () {
              entry.target.classList.add('is-visible');
            }, delay);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* -----------------------------------------------------------------
     4. Dot navigation: highlight the section currently in view
     ----------------------------------------------------------------- */
  var dotItems = document.querySelectorAll('.dot-nav__item');
  var sectionIds = Array.prototype.map.call(dotItems, function (item) {
    return item.getAttribute('href').replace('#', '');
  });
  var sections = sectionIds
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function setActiveDot(id) {
    dotItems.forEach(function (item) {
      var isActive = item.getAttribute('href') === '#' + id;
      item.classList.toggle('is-active', isActive);
    });
  }

  if (sections.length && 'IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveDot(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

})();
