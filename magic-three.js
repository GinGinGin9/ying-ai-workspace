import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.186.0/build/three.module.js';
import { EffectComposer } from 'https://cdn.jsdelivr.net/npm/three@0.186.0/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://cdn.jsdelivr.net/npm/three@0.186.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.jsdelivr.net/npm/three@0.186.0/examples/jsm/postprocessing/UnrealBloomPass.js';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  const canvas = document.createElement('canvas');
  canvas.id = 'three-magic-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0b0810, 0.032);

  const camera = new THREE.PerspectiveCamera(44, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0.1, 9.2);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
  renderer.setSize(innerWidth, innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.04;

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 1.35, 0.72, 0.18);
  composer.addPass(bloom);

  const world = new THREE.Group();
  scene.add(world);

  scene.add(new THREE.AmbientLight(0x7d6aa8, 0.75));
  const violetLight = new THREE.PointLight(0xb18cff, 28, 26, 2);
  violetLight.position.set(-3.5, 2.4, 4.5);
  scene.add(violetLight);
  const warmLight = new THREE.PointLight(0xffb36b, 20, 22, 2);
  warmLight.position.set(4.2, -2, 3.8);
  scene.add(warmLight);

  function makeGlowTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 63);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.08, 'rgba(255,250,255,.95)');
    g.addColorStop(0.27, 'rgba(212,184,255,.42)');
    g.addColorStop(0.62, 'rgba(162,119,255,.10)');
    g.addColorStop(1, 'rgba(125,80,220,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }
  const glowTexture = makeGlowTexture();

  // Deep star field
  const starsGeo = new THREE.BufferGeometry();
  const starCount = 1500;
  const starPos = new Float32Array(starCount * 3);
  const starSize = new Float32Array(starCount);
  for (let i = 0; i < starCount; i++) {
    starPos[i * 3] = (Math.random() - .5) * 30;
    starPos[i * 3 + 1] = (Math.random() - .5) * 18;
    starPos[i * 3 + 2] = -Math.random() * 18 + 3;
    starSize[i] = Math.random();
  }
  starsGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starsGeo, new THREE.PointsMaterial({
    color: 0xe6dbff,
    size: 0.028,
    transparent: true,
    opacity: 0.64,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  scene.add(stars);

  // Larger breathing motes
  const motes = [];
  for (let i = 0; i < 80; i++) {
    const mat = new THREE.SpriteMaterial({
      map: glowTexture,
      color: i % 5 === 0 ? 0xffc89d : i % 3 === 0 ? 0xf2bde2 : 0xcbb8ff,
      transparent: true,
      opacity: 0.15 + Math.random() * 0.28,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const s = new THREE.Sprite(mat);
    s.position.set((Math.random() - .5) * 18, (Math.random() - .5) * 11, -Math.random() * 10 + 1);
    const base = .08 + Math.random() * .23;
    s.scale.setScalar(base);
    scene.add(s);
    motes.push({ s, base, phase: Math.random() * Math.PI * 2, speed: .22 + Math.random() * .65 });
  }

  // Five portal worlds
  const portalSpecs = [
    [-4.1, 1.75, -1.1, 0x8cc8ff],
    [-2.0, -1.25, .1, 0xb493ff],
    [.65, 1.15, .25, 0xffb067],
    [3.35, -.4, -.8, 0xee8fc1],
    [4.55, 1.95, -2.2, 0x79dbc9]
  ];
  const portals = [];
  const shardGeo = new THREE.TetrahedronGeometry(.09, 0);

  portalSpecs.forEach((spec, idx) => {
    const [x, y, z, color] = spec;
    const group = new THREE.Group();
    group.position.set(x, y, z);
    world.add(group);

    const ringMat = new THREE.MeshStandardMaterial({
      color, emissive: color, emissiveIntensity: 1.7, metalness: .28, roughness: .24,
      transparent: true, opacity: .95
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.64, .036, 20, 120), ringMat);
    ring.rotation.x = Math.PI / 2.2;
    group.add(ring);

    const outer = new THREE.Mesh(
      new THREE.TorusGeometry(.9, .012, 12, 120),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .5, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    outer.rotation.x = Math.PI / 2.2;
    group.add(outer);

    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture, color, transparent: true, opacity: .34, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.scale.setScalar(2.35);
    group.add(glow);

    const shards = [];
    for (let i = 0; i < 11; i++) {
      const sm = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: .8, transparent: true, opacity: .7, roughness: .25 });
      const shard = new THREE.Mesh(shardGeo, sm);
      const a = (i / 11) * Math.PI * 2;
      const r = .88 + Math.random() * .42;
      shard.position.set(Math.cos(a) * r, (Math.random() - .5) * .75, Math.sin(a) * r);
      shard.scale.setScalar(.65 + Math.random() * .8);
      group.add(shard);
      shards.push(shard);
    }

    portals.push({ group, ring, outer, glow, shards, baseY: y, phase: idx * 1.12, color });
  });

  // Curved connective paths
  const curveMaterial = new THREE.LineBasicMaterial({ color: 0xb9a4e9, transparent: true, opacity: .28, blending: THREE.AdditiveBlending });
  for (let i = 0; i < portalSpecs.length - 1; i++) {
    const a = new THREE.Vector3(portalSpecs[i][0], portalSpecs[i][1], portalSpecs[i][2]);
    const b = new THREE.Vector3(portalSpecs[i + 1][0], portalSpecs[i + 1][1], portalSpecs[i + 1][2]);
    const mid = a.clone().lerp(b, .5);
    mid.y += 1.3 + Math.random() * .8;
    mid.z -= 1.1;
    const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
    world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(100)), curveMaterial));
  }

  // Cursor aura + trail
  const cursor = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture, color: 0xe6d6ff, transparent: true, opacity: .32, depthWrite: false, blending: THREE.AdditiveBlending }));
  cursor.scale.setScalar(.85);
  cursor.visible = false;
  scene.add(cursor);

  const trail = [];
  for (let i = 0; i < 42; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture, color: 0xf0e4ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    s.visible = false;
    scene.add(s);
    trail.push({ s, life: 0, vx: 0, vy: 0 });
  }
  let trailCursor = 0;

  const pointer = new THREE.Vector2(99, 99);
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -1.5);
  const hit = new THREE.Vector3();
  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  let lastSpawn = 0;

  function spawnTrail() {
    const p = trail[trailCursor++ % trail.length];
    p.life = 1;
    p.s.visible = true;
    p.s.position.copy(hit);
    p.s.position.x += (Math.random() - .5) * .08;
    p.s.position.y += (Math.random() - .5) * .08;
    p.s.scale.setScalar(.035 + Math.random() * .075);
    p.s.material.opacity = .75;
    p.vx = (Math.random() - .5) * .012;
    p.vy = .008 + Math.random() * .012;
  }

  window.addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / innerHeight) * 2 + 1;
    targetX = (e.clientX / innerWidth - .5);
    targetY = (e.clientY / innerHeight - .5);
    raycaster.setFromCamera(pointer, camera);
    if (raycaster.ray.intersectPlane(plane, hit)) {
      cursor.visible = true;
      cursor.position.copy(hit);
      const now = performance.now();
      if (now - lastSpawn > 24) {
        spawnTrail();
        if (Math.random() > .55) spawnTrail();
        lastSpawn = now;
      }
    }
  }, { passive: true });
  window.addEventListener('pointerleave', () => { cursor.visible = false; });

  let scrollMix = 0;
  window.addEventListener('scroll', () => {
    scrollMix = Math.min(scrollY / Math.max(innerHeight, 1), 1.8);
  }, { passive: true });

  const clock = new THREE.Clock();
  function animate() {
    const t = clock.getElapsedTime();
    mouseX += (targetX - mouseX) * .045;
    mouseY += (targetY - mouseY) * .045;

    camera.position.x += ((mouseX * .72) - camera.position.x) * .035;
    camera.position.y += ((-.05 - mouseY * .48) - camera.position.y) * .035;
    camera.lookAt(camera.position.x * .08, 0.05, 0);

    world.rotation.y += ((mouseX * .075) - world.rotation.y) * .025;
    world.rotation.x += ((mouseY * .045) - world.rotation.x) * .025;
    world.position.y = -Math.min(scrollMix, 1.15) * .16;

    portals.forEach((p, idx) => {
      p.group.position.y = p.baseY + Math.sin(t * .62 + p.phase) * .13;
      p.ring.rotation.z += .0016 + idx * .00008;
      p.outer.rotation.z -= .0011 + idx * .00006;
      p.glow.material.opacity = .27 + Math.sin(t * 1.4 + p.phase) * .08;
      p.shards.forEach((s, si) => {
        s.rotation.x += .004 + si * .00015;
        s.rotation.y -= .003 + si * .00012;
        s.position.y += Math.sin(t * .7 + si + p.phase) * .0007;
      });
    });

    stars.rotation.y += .00008;
    stars.rotation.x = mouseY * .015;

    motes.forEach(m => {
      const pulse = 1 + Math.sin(t * m.speed + m.phase) * .38;
      m.s.scale.setScalar(m.base * pulse);
      m.s.material.opacity = .12 + (pulse - .62) * .19;
      m.s.position.y += Math.sin(t * .18 + m.phase) * .00055;
    });

    trail.forEach(p => {
      if (p.life <= 0) return;
      p.life -= .025;
      p.s.position.x += p.vx;
      p.s.position.y += p.vy;
      p.s.material.opacity = Math.max(0, p.life * .58);
      p.s.scale.multiplyScalar(.985);
      if (p.life <= 0) p.s.visible = false;
    });

    composer.render();
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    composer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
  });
}
