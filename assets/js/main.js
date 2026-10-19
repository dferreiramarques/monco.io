/* ==========================================================================
   monco.io — main.js
   GSAP-powered: cursor, magnetic buttons, parallax facade, reveals,
   scroll-driven counters, marquee, filters
   ========================================================================== */
(function(){
  'use strict';

  const $$ = (s, ctx = document) => Array.from((ctx || document).querySelectorAll(s));
  const $ = (s, ctx = document) => (ctx || document).querySelector(s);

  /* ============ CUSTOM CURSOR with GSAP quickTo ============ */
  function initCursor(){
    if (!window.gsap || matchMedia('(hover: none)').matches) return;

    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.append(cursor, trail);

    const xTo = gsap.quickTo(cursor, 'x', {duration: 0.15, ease: 'power3.out'});
    const yTo = gsap.quickTo(cursor, 'y', {duration: 0.15, ease: 'power3.out'});
    const xTrail = gsap.quickTo(trail, 'x', {duration: 0.45, ease: 'power3.out'});
    const yTrail = gsap.quickTo(trail, 'y', {duration: 0.45, ease: 'power3.out'});

    window.addEventListener('mousemove', (e) => {
      xTo(e.clientX); yTo(e.clientY);
      xTrail(e.clientX); yTrail(e.clientY);
    });

    // Hover state on interactive elements
    const hoverEls = 'a, button, [data-hover], .chip, .item, .proj, .svc, .nav-link, .nav-logo, .fw-step, .ing';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverEls)) {
        cursor.classList.add('is-hover');
        trail.classList.add('is-hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverEls)) {
        cursor.classList.remove('is-hover');
        trail.classList.remove('is-hover');
      }
    });

    // Squishy click: the ring stays a circle while pressed; it only turns elliptical in the transitions
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('mousedown', () => {
        gsap.timeline({overwrite: 'auto'})
          .to(trail, {scaleX: 1.25, scaleY: 0.8, duration: 0.09, ease: 'power2.out'})
          .to(trail, {scaleX: 0.8, scaleY: 0.8, duration: 0.45, ease: 'elastic.out(1, 0.4)'});
        gsap.to(cursor, {scale: 0.7, duration: 0.14, ease: 'power2.out', overwrite: 'auto'});
      });
      window.addEventListener('mouseup', () => {
        gsap.timeline({overwrite: 'auto'})
          .to(trail, {scaleX: 0.88, scaleY: 1.22, duration: 0.1, ease: 'power2.out'})
          .to(trail, {scaleX: 1, scaleY: 1, duration: 1.1, ease: 'elastic.out(1, 0.28)'});
        gsap.to(cursor, {scale: 1, duration: 0.7, ease: 'elastic.out(1, 0.4)', overwrite: 'auto'});
      });
    }
  }

  /* ============ MAGNETIC + quickTo BUTTONS ============ */
  function initMagnetic(){
    if (!window.gsap) return;
    $$('[data-magnetic]').forEach(el => {
      const strength = parseFloat(el.dataset.magnetic) || 0.35;
      const setX = gsap.quickTo(el, 'x', {duration: 0.5, ease: 'elastic.out(1, 0.4)'});
      const setY = gsap.quickTo(el, 'y', {duration: 0.5, ease: 'elastic.out(1, 0.4)'});
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        setX((e.clientX - cx) * strength);
        setY((e.clientY - cy) * strength);
      });
      el.addEventListener('mouseleave', () => { setX(0); setY(0); });
    });

    // Tactile hovers on all buttons + cards (non-magnetic)
    $$('.btn, [data-hover]').forEach(btn => {
      const setY = gsap.quickTo(btn, 'y', {duration: 0.4, ease: 'power3.out'});
      const setScale = gsap.quickTo(btn, 'scale', {duration: 0.4, ease: 'power3.out'});
      btn.addEventListener('mouseenter', () => { setY(-3); setScale(1.02); });
      btn.addEventListener('mouseleave', () => { setY(0); setScale(1); });
      btn.addEventListener('mousedown', () => { setScale(0.97); });
      btn.addEventListener('mouseup', () => { setScale(1.02); });
    });
  }

  /* ============ PARALLAX FACADE (GSAP ScrollTrigger) ============ */
  function initParallax(){
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    const cinema = $('.cinema');
    if (!cinema) return;

    $$('.layer', cinema).forEach(layer => {
      const depth = parseFloat(layer.dataset.depth) || 0.3;
      gsap.to(layer, {
        yPercent: -depth * 60,
        ease: 'none',
        scrollTrigger: {
          trigger: cinema,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6
        }
      });
    });

    // Hero content fades out as camera moves through facade
    const heroContent = $('.hero-content', cinema);
    if (heroContent) {
      gsap.to(heroContent, {
        opacity: 0, y: -60, ease: 'none',
        scrollTrigger: {
          trigger: cinema,
          start: 'top top',
          end: 'bottom 30%',
          scrub: 0.8
        }
      });
    }
  }

  /* ============ REVEAL ON SCROLL ============ */
  function initReveal(){
    const reveals = $$('[data-reveal]');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });
      reveals.forEach(el => io.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('is-revealed'));
    }
  }

  /* ============ SCROLL-DRIVEN NUMBER COUNTERS ============ */
  function initCounters(){
    const counters = $$('[data-count]');
    if (!counters.length) return;
    const animate = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const duration = parseFloat(el.dataset.duration || '1.6');
      const start = performance.now();
      const initial = 0;
      const tick = (now) => {
        const t = Math.min((now - start) / (duration * 1000), 1);
        const ease = 1 - Math.pow(1 - t, 3);
        const value = initial + (target - initial) * ease;
        el.textContent = value.toFixed(decimals) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(entry.target);
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      counters.forEach(el => io.observe(el));
    } else {
      counters.forEach(animate);
    }
  }

  /* ============ AUTOMATION MAP FILTERS ============ */
  function initFilters(){
    const filters = $('#filters');
    if (!filters) return;
    const chips = $$('.chip', filters);
    const areas = $$('.area');
    const counter = $('#count');
    const counts = {all:16, hr:2, tasks:2, comms:2, sales:2, marketing:2, finance:2, ops:2, cs:2};
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const filter = chip.dataset.filter;
        chips.forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        areas.forEach(area => {
          area.classList.toggle('is-hidden', filter !== 'all' && area.dataset.area !== filter);
        });
        if (counter) counter.textContent = counts[filter] !== undefined ? counts[filter] : areas.filter(a => !a.classList.contains('is-hidden')).length;
      });
    });
  }

  /* ============ NAV: smooth in-page nav + page indication ============ */
  function initNav(){
    // Mark current nav link as active based on URL
    const path = location.pathname.split('/').pop() || 'index.html';
    $$('.nav-link, .foot-links a').forEach(link => {
      const href = link.getAttribute('href') || '';
      const name = href.split('/').pop();
      if (name === path || (path === '' && name === 'index.html')) {
        link.classList.add('is-active');
      }
    });
  }

  /* ============ Init ============ */
  function init(){
    initNav();
    initCursor();
    initMagnetic();
    initParallax();
    initReveal();
    initCounters();
    initFilters();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
