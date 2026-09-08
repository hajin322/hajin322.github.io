// ============================================================================
// hajin322.github.io — main.js
// Cursor blob · scroll reveal · smooth page transitions
// ============================================================================

(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --------------------------------------------------------------------------
  // 1. Cursor blob — smoothly follows pointer
  // --------------------------------------------------------------------------
  const blob = document.querySelector('.cursor-blob');
  const isCoarsePointer = window.matchMedia('(hover: none)').matches;

  if (blob && !isCoarsePointer && !prefersReduced) {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId = null;
    let active = false;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!active) {
        blob.classList.add('active');
        active = true;
      }
    };

    const onLeave = () => {
      blob.classList.remove('active');
      active = false;
    };

    const tick = () => {
      // Lerp for smoothing (the blob lags slightly behind the pointer)
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      blob.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    tick();
  }

  // --------------------------------------------------------------------------
  // 2. Scroll reveal — auto-tag common elements, fade in as they enter view
  // --------------------------------------------------------------------------
  if (!prefersReduced && 'IntersectionObserver' in window) {
    // Auto-apply .reveal to top-level content blocks on the main page
    const autoReveal = document.querySelectorAll(
      '.hero, .section, .page-head, .page-body > *, .post-head, .post-body > *, .bibliography > li, .news-item, .feature-card, .project-row, .entry-list .row'
    );
    autoReveal.forEach((el, i) => {
      el.classList.add('reveal');
      // Slight stagger based on DOM order — max 300ms so nothing feels slow
      el.style.transitionDelay = `${Math.min(i * 40, 300)}ms`;
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    // Reduced motion or no IO support: show everything immediately
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
  }

  // --------------------------------------------------------------------------
  // 3. View Transitions API — smooth cross-page fade where supported
  // --------------------------------------------------------------------------
  // Progressive enhancement: if the browser supports same-document navigation
  // with the View Transitions API, we don't need to do anything (the meta tag
  // in head.html opts in). For older browsers, we intercept same-origin nav
  // link clicks and do a quick fade-out before navigation.
  if (!prefersReduced && !('startViewTransition' in document)) {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;
      // Only intercept internal, same-window, unmodified left-clicks
      if (link.target === '_blank' || link.hasAttribute('download')) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.hash) return;

      e.preventDefault();
      document.body.style.transition = 'opacity 0.25s ease';
      document.body.style.opacity = '0';
      setTimeout(() => { window.location.href = link.href; }, 220);
    });
  }
})();
