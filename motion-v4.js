(() => {
  const gsapRef = window.gsap;
  const ST = window.ScrollTrigger;
  if (!gsapRef || !ST) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  gsapRef.registerPlugin(ST);

  /* Critical portfolio content must NEVER depend on a reveal trigger to become visible. */
  const alwaysVisible = '.cap-card,.spatial-grid,.agency-list,.agency-list a,.video-tile,.archive-card,.campaign-cloud .media-card';
  gsapRef.set(alwaysVisible, { opacity: 1, visibility: 'visible' });

  if (reduceMotion) {
    gsapRef.set('*', { clearProps: 'transform' });
    return;
  }

  const ease = 'power3.out';
  const softEase = 'power2.out';

  /* Hero can fade because it runs immediately on page entry. */
  const hero = gsapRef.timeline({ defaults: { ease } });
  hero
    .from('.entry-copy .eyebrow', { y: 10, opacity: 0, duration: .42 })
    .from('.entry-copy h1', { y: 20, opacity: 0, duration: .68 }, '-=.22')
    .from('.entry-copy .zh-copy, .entry-copy .lede-en', { y: 12, opacity: 0, duration: .48, stagger: .05 }, '-=.30')
    .from('.positioning-steps>div', { y: 14, opacity: 0, duration: .48, stagger: .06 }, '-=.24')
    .from('.entry-copy .primary-btn', { y: 9, opacity: 0, duration: .38 }, '-=.20');

  /* Section headings move into place but remain readable even if a trigger is interrupted. */
  $$('.workspace-intro, .create-heading').forEach(group => {
    gsapRef.fromTo([...group.children],
      { y: 18 },
      { y: 0, duration: .62, stagger: .065, ease, immediateRender: false,
        scrollTrigger: { trigger: group, start: 'top 84%', once: true } }
    );
  });

  /* Five Spaces: transform only — never opacity. */
  gsapRef.fromTo('.cap-card',
    { y: 22, scale: .988 },
    { y: 0, scale: 1, duration: .58, stagger: .06, ease, immediateRender: false,
      scrollTrigger: { trigger: '.spatial-grid', start: 'top 84%', once: true } }
  );

  /* Campaign copy and visual cloud. */
  gsapRef.fromTo('.campaign-copy>*',
    { x: -16 },
    { x: 0, duration: .58, stagger: .055, ease, immediateRender: false,
      scrollTrigger: { trigger: '.campaign-stage', start: 'top 80%', once: true } }
  );
  gsapRef.fromTo('.campaign-cloud .media-card',
    { y: 22, scale: .986 },
    { y: 0, scale: 1, duration: .64, stagger: .08, ease, immediateRender: false,
      scrollTrigger: { trigger: '.campaign-cloud', start: 'top 82%', once: true } }
  );

  /* Gentle depth while scrolling. */
  gsapRef.to('.m1', { y: -12, ease: 'none', scrollTrigger: { trigger: '.campaign-stage', start: 'top bottom', end: 'bottom top', scrub: .8 } });
  gsapRef.to('.m2', { y: 13, ease: 'none', scrollTrigger: { trigger: '.campaign-stage', start: 'top bottom', end: 'bottom top', scrub: .9 } });
  gsapRef.to('.m3', { y: -8, ease: 'none', scrollTrigger: { trigger: '.campaign-stage', start: 'top bottom', end: 'bottom top', scrub: 1 } });

  /* Video work: visible first, motion second. */
  gsapRef.fromTo('.work-strip .strip-head>*',
    { y: 15 },
    { y: 0, duration: .55, stagger: .06, ease, immediateRender: false,
      scrollTrigger: { trigger: '.work-strip', start: 'top 84%', once: true } }
  );
  gsapRef.fromTo('.video-tile',
    { y: 18 },
    { y: 0, duration: .58, stagger: .07, ease, immediateRender: false,
      scrollTrigger: { trigger: '.video-grid', start: 'top 86%', once: true } }
  );

  /* Archive. */
  gsapRef.fromTo('.archive-copy>*',
    { x: -14 },
    { x: 0, duration: .56, stagger: .06, ease, immediateRender: false,
      scrollTrigger: { trigger: '.archive-stage', start: 'top 82%', once: true } }
  );
  gsapRef.fromTo('.archive-card',
    { y: 16 },
    { y: 0, duration: .52, stagger: .045, ease, immediateRender: false,
      scrollTrigger: { trigger: '.archive-wall', start: 'top 86%', once: true } }
  );

  /* Agency list: scan in from the left, but NEVER become transparent. */
  gsapRef.fromTo('.directed-head>*',
    { y: 15 },
    { y: 0, duration: .56, stagger: .06, ease, immediateRender: false,
      scrollTrigger: { trigger: '.directed-stage', start: 'top 84%', once: true } }
  );
  gsapRef.fromTo('.agency-list a',
    { x: -16 },
    { x: 0, duration: .50, stagger: .065, ease, immediateRender: false,
      scrollTrigger: { trigger: '.agency-list', start: 'top 88%', once: true } }
  );

  gsapRef.fromTo('.build-transition>*',
    { y: 16 },
    { y: 0, duration: .58, stagger: .06, ease, immediateRender: false,
      scrollTrigger: { trigger: '.build-transition', start: 'top 84%', once: true } }
  );
  gsapRef.fromTo('.about>*',
    { y: 16 },
    { y: 0, duration: .58, stagger: .06, ease, immediateRender: false,
      scrollTrigger: { trigger: '.about', start: 'top 82%', once: true } }
  );

  /* Cursor light follows with inertia. */
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

  /* Subtle media parallax. */
  [...$$('.media-card'), ...$$('.video-cover'), ...$$('.archive-card')].forEach(surface => {
    const media = $('img', surface);
    if (!media) return;
    const xTo = gsapRef.quickTo(media, 'x', { duration: .52, ease: softEase });
    const yTo = gsapRef.quickTo(media, 'y', { duration: .52, ease: softEase });
    surface.addEventListener('pointermove', e => {
      const r = surface.getBoundingClientRect();
      xTo(((e.clientX - r.left) / r.width - .5) * 6);
      yTo(((e.clientY - r.top) / r.height - .5) * 4);
    }, { passive: true });
    surface.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });

  /* Tiny magnetic CTA movement. */
  $$('.primary-btn, .text-btn, .explore-create').forEach(el => {
    const xTo = gsapRef.quickTo(el, 'x', { duration: .35, ease: softEase });
    const yTo = gsapRef.quickTo(el, 'y', { duration: .35, ease: softEase });
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      xTo(((e.clientX - r.left) / r.width - .5) * 4);
      yTo(((e.clientY - r.top) / r.height - .5) * 3);
    }, { passive: true });
    el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });

  window.addEventListener('load', () => {
    gsapRef.set(alwaysVisible, { opacity: 1, visibility: 'visible' });
    ST.refresh();
  }, { once: true });
})();
