/* ============================================
   MUSCLE BROS UK — Main JavaScript
============================================ */

(function () {
  'use strict';

  /* ---- Sticky Nav ---- */
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Hamburger Menu ---- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open.toString());
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---- Scroll Reveal ---- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---- Count-Up Animation ---- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();
    const suffix = el.dataset.suffix || '';

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

  /* ---- Contact Form ---- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span>Sending...</span>';
      btn.disabled = true;

      try {
        const data = new FormData(form);
        const res = await fetch('/api/contact', {
          method: 'POST',
          body: data
        });
        const json = await res.json();

        if (json.success) {
          const formWrap = document.getElementById('form-wrap');
          const successMsg = document.getElementById('form-success');
          if (formWrap) formWrap.style.display = 'none';
          if (successMsg) successMsg.classList.add('visible');
        }
      } catch (err) {
        btn.innerHTML = originalText;
        btn.disabled = false;
      }
    });
  }

  /* ---- Smooth Page Transitions ---- */
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && !href.includes('#') && href !== window.location.pathname) {
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.2s ease';
        setTimeout(() => { window.location.href = href; }, 200);
      }
    });
  });

  /* ---- Fade in on load ---- */
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.35s ease';
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });
  // Fallback
  setTimeout(() => { document.body.style.opacity = '1'; }, 400);

  /* ---- Donate tier highlight ---- */
  document.querySelectorAll('.donate-tier').forEach(tier => {
    tier.addEventListener('click', () => {
      const amount = tier.querySelector('.donate-tier-amount');
      if (amount) {
        window.location.href = '#donate-form';
      }
    });
  });

})();
