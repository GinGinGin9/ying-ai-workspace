(() => {
  const gsapRef = window.gsap;
  const ST = window.ScrollTrigger;
  if (!gsapRef || !ST) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  gsapRef.registerPlugin(ST);

  const resetSelectors = [
    '.workspace-intro', '.cap-card', '.campaign-copy', '.work-strip',
    '.archive-stage', '.directed-stage', '.build-transition', '.about>*',
    '.m1', '.m2', '.m3'
  ];

  /* app.js already contains an older generic reveal system. Replace only that layer;
     keep Three.js, modal behaviour and content logic intact. */
  ST.getAll().forEach(trigger => trigger.kill(true));
  gsapRef.killTweensOf('.entry-copy>*');
  resetSelectors.forEach(sel => gsapRef.set(sel, { clearProps: 'opacity,transform' }));

  if (reduceMotion) {
    gsapRef.set('.entry-copy>*, .workspace-intro>*, .cap-card, .campaign-copy>*, .campaign-cloud .media-card, .video-tile, .archive-card, .directed-head>*, .agency-list a, .build-transition>*, .about>*', {
      opacity: 1,
      clearProps: 'transform'
    });
    return;
  }

  const ease = 'power3.out';
  const softEase = 'power2.out';

  /* 1. Hero: establish reading order, not decoration. */
  gsapRef.set('.entry-copy>*', { opacity: 1 });
  const hero = gsapRef.timeline({ defaults: { ease } });
  hero
    .from('.entry-copy .eyebrow', { y: 12, opacity: 0, duration: .5 })
    .from('.entry-copy h1', { y: 24, opacity: 0, duration: .78 }, '-=.28')
    .from('.entry-copy .zh-copy, .entry-copy .lede-en', { y: 16, opacity: 0, duration: .58, stagger: .06 }, '-=.38')
    .from('.positioning-steps>div', { y: 18, opacity: 0, scale: .985, duration: .55, stagger: .07 }, '-=.30')
    .from('.entry-copy .primary-btn', { y: 12, opacity: 0, duration: .45 }, '-=.24');

  /* 2. Section heading reveals. */
  $$('.workspace-intro, .create-heading').forEach(group => {
    gsapRef.from([...group.children], {
      y: 24,
      opacity: 0,
      duration: .68,
      stagger: .075,
      ease,
      scrollTrigger: { trigger: group, start: 'top 82%', once: true }
    });
  });

  /* 3. Five-space cards enter as one system. */
  gsapRef.from('.cap-card', {
    y: 30,
    opacity: 0,
    scale: .985,
    duration: .62,
    stagger: .065,
    ease,
    scrollTrigger: { trigger: '.spatial-grid', start: 'top 82%', once: true }
  });

  /* 4. Campaign: copy first, visual evidence follows. */
  gsapRef.from('.campaign-copy>*', {
    x: -20,
    opacity: 0,
    duration: .62,
    stagger: .065,
    ease,
    scrollTrigger: { trigger: '.campaign-stage', start: 'top 78%', once: true }
  });
  gsapRef.from('.campaign-cloud .media-card', {
    y: 34,
    opacity: 0,
    scale: .975,
    duration: .72,
    stagger: .09,
    ease,
    scrollTrigger: { trigger: '.campaign-cloud', start: 'top 80%', once: true }
  });

  /* gentle depth on the hero case while scrolling; no scroll hijacking */
  gsapRef.to('.m1', { y: -14, ease: 'none', scrollTrigger: { trigger: '.campaign-stage', start: 'top bottom', end: 'bottom top', scrub: .8 } });
  gsapRef.to('.m2', { y: 16, ease: 'none', scrollTrigger: { trigger: '.campaign-stage', start: 'top bottom', end: 'bottom top', scrub: .9 } });
  gsapRef.to('.m3', { y: -9, ease: 'none', scrollTrigger: { trigger: '.campaign-stage', start: 'top bottom', end: 'bottom top', scrub: 1 } });

  /* 5. Work tiles: one stagger per module, not animation on every line of text. */
  gsapRef.from('.work-strip .strip-head>*', {
    y: 20,
    opacity: 0,
    duration: .6,
    stagger: .08,
    ease,
    scrollTrigger: { trigger: '.work-strip', start: 'top 82%', once: true }
  });
  gsapRef.from('.video-tile', {
    y: 28,
    opacity: 0,
    scale: .99,
    duration: .66,
    stagger: .085,
    ease,
    scrollTrigger: { trigger: '.video-grid', start: 'top 84%', once: true }
  });

  /* 6. Visual archive: stagger in visual reading order. */
  gsapRef.from('.archive-copy>*', {
    x: -18,
    opacity: 0,
    duration: .62,
    stagger: .07,
    ease,
    scrollTrigger: { trigger: '.archive-stage', start: 'top 80%', once: true }
  });
  gsapRef.from('.archive-card', {
    y: 24,
    opacity: 0,
    duration: .58,
    stagger: .055,
    ease,
    scrollTrigger: { trigger: '.archive-wall', start: 'top 84%', once: true }
  });

  /* 7. Agency collaboration: scan like a list, not a card wall. */
  gsapRef.from('.directed-head>*', {
    y: 20,
    opacity: 0,
    duration: .62,
    stagger: .07,
    ease,
    scrollTrigger: { trigger: '.directed-stage', start: 'top 82%', once: true }
  });
  gsapRef.from('.agency-list a', {
    x: -18,
    opacity: 0,
    duration: .52,
    stagger: .07,
    ease,
    scrollTrigger: { trigger: '.agency-list', start: 'top 84%', once: true }
  });

  /* 8. Build transition and about close the narrative. */
  gsapRef.from('.build-transition>*', {
    y: 22,
    opacity: 0,
    duration: .65,
    stagger: .075,
    ease,
    scrollTrigger: { trigger: '.build-transition', start: 'top 82%', once: true }
  });
  gsapRef.from('.about>*', {
    y: 22,
    opacity: 0,
    duration: .66,
    stagger: .075,
    ease,
    scrollTrigger: { trigger: '.about', start: 'top 80%', once: true }
  });

  /* 9. Cursor light follows with inertia. CSS owns the visual; GSAP only smooths coordinates. */
  let tx = window.innerWidth * .5;
  let ty = window.innerHeight * .18;
  let cx = tx;
  let cy = ty;
  const rootStyle = document.documentElement.style;
  window.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
  gsapRef.ticker.add(() => {
    cx += (tx - cx) * .085;
    cy += (ty - cy) * .085;
    rootStyle.setProperty('--mx', `${cx}px`);
    rootStyle.setProperty('--my', `${cy}px`);
  });

  /* 10. Media micro-parallax: subtle, bounded and transform-only. */
  const depthTargets = [
    ...$$('.media-card'),
    ...$$('.video-cover'),
    ...$$('.archive-card')
  ];
  depthTargets.forEach(surface => {
    const media = $('img', surface);
    if (!media) return;
    const xTo = gsapRef.quickTo(media, 'x', { duration: .55, ease: softEase });
    const yTo = gsapRef.quickTo(media, 'y', { duration: .55, ease: softEase });
    surface.addEventListener('pointermove', e => {
      const r = surface.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - .5;
      const ny = (e.clientY - r.top) / r.height - .5;
      xTo(nx * 7);
      yTo(ny * 5);
    }, { passive: true });
    surface.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });

  /* 11. Magnetic CTA feedback — deliberately tiny to preserve usability. */
  $$('.primary-btn, .text-btn, .explore-create').forEach(el => {
    const xTo = gsapRef.quickTo(el, 'x', { duration: .38, ease: softEase });
    const yTo = gsapRef.quickTo(el, 'y', { duration: .38, ease: softEase });
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - .5;
      const ny = (e.clientY - r.top) / r.height - .5;
      xTo(nx * 5);
      yTo(ny * 4);
    }, { passive: true });
    el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });

  /* Refresh after Drive thumbnails settle so ScrollTrigger measurements stay accurate. */
  window.addEventListener('load', () => ST.refresh(), { once: true });
})();
