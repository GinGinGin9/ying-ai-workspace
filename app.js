const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

$('#enterBtn')?.addEventListener('click',()=>$('#workspace')?.scrollIntoView({behavior:reduce?'auto':'smooth'}));
window.addEventListener('scroll',()=>$('.topbar')?.classList.toggle('scrolled',window.scrollY>24),{passive:true});
$$('.cap-card').forEach(card=>card.addEventListener('mouseenter',()=>{$$('.cap-card').forEach(c=>c.classList.remove('active'));card.classList.add('active')}));

const modal=$('#mediaModal'),modalContent=$('#modalContent');
function openModal(html){if(!modal||!modalContent)return;modalContent.innerHTML=html;modal.showModal()}
$('.modal-close')?.addEventListener('click',()=>modal?.close());
modal?.addEventListener('click',e=>{if(e.target===modal)modal.close()});
$$('[data-img]').forEach(el=>el.addEventListener('click',()=>openModal(`<img src="${el.dataset.img}" alt="${el.dataset.title||'Portfolio work'}"><div class="modal-caption">${el.dataset.title||''}</div>`)));
$$('.video-tile').forEach(el=>el.addEventListener('click',()=>{const id=el.dataset.drive;openModal(`<iframe src="https://drive.google.com/file/d/${id}/preview" allow="autoplay" style="height:min(76vh,760px)"></iframe>`)}));
$('[data-modal="fmr"]')?.addEventListener('click',()=>openModal(`<div class="micro-label">FMR-5S · INTEGRATED CAMPAIGN</div><h2 style="font:400 clamp(48px,7vw,94px)/.95 'Instrument Serif';margin:16px 0 30px">Campaign system,<br><em>not a single post.</em></h2><div class="case-links"><a href="https://www.linkedin.com/feed/update/urn:li:activity:7478409013731401729" target="_blank" rel="noreferrer"><span>Teaser / Engagement · Quiz</span><b>↗</b></a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7482383387341807616" target="_blank" rel="noreferrer"><span>Teaser · Video</span><b>↗</b></a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7483822983317307392" target="_blank" rel="noreferrer"><span>Launch · Key Visual</span><b>↗</b></a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7485992349450305536" target="_blank" rel="noreferrer"><span>Product Education · Brochure</span><b>↗</b></a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7493586161316126720" target="_blank" rel="noreferrer"><span>Creative Extension · Video</span><b>↗</b></a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7500100034567254016" target="_blank" rel="noreferrer"><span>Launch · Hero Video</span><b>↗</b></a></div>`));

if(window.gsap&&!reduce){gsap.registerPlugin(ScrollTrigger);gsap.from('.entry-copy>*',{opacity:0,y:24,duration:.9,stagger:.08,ease:'power3.out'});$$('.workspace-intro,.cap-card,.campaign-copy,.work-strip,.archive-stage,.directed-stage,.build-transition,.about>*').forEach(el=>gsap.from(el,{opacity:0,y:32,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%',once:true}}));gsap.to('.m1',{y:-28,scrollTrigger:{trigger:'.campaign-stage',start:'top bottom',end:'bottom top',scrub:1.2}});gsap.to('.m2',{y:34,scrollTrigger:{trigger:'.campaign-stage',start:'top bottom',end:'bottom top',scrub:1.1}});gsap.to('.m3',{y:-18,scrollTrigger:{trigger:'.campaign-stage',start:'top bottom',end:'bottom top',scrub:1.4}})}

if(window.THREE&&!reduce){
  const canvas=$('#three-canvas');
  if(canvas){
    const scene=new THREE.Scene();
    scene.fog=new THREE.FogExp2(0x0d0b12,.055);
    const camera=new THREE.PerspectiveCamera(42,innerWidth/innerHeight,.1,100);
    camera.position.set(0,.35,8.2);
    const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));
    renderer.setSize(innerWidth,innerHeight);
    renderer.outputColorSpace=THREE.SRGBColorSpace;

    const ambient=new THREE.AmbientLight(0xb7a6ff,1.25);scene.add(ambient);
    const key=new THREE.PointLight(0xffc27d,15,18);key.position.set(2.8,3.2,4.5);scene.add(key);
    const fill=new THREE.PointLight(0x9476ff,13,20);fill.position.set(-4,-1,2);scene.add(fill);

    const root=new THREE.Group();scene.add(root);
    const portalData=[
      {id:'research',pos:[-3.8,1.55,-1.1],color:0x98c9ff},
      {id:'strategy',pos:[-1.85,-1.1,.25],color:0xb99cff},
      {id:'create',pos:[.65,1.15,.15],color:0xf2a65a},
      {id:'build',pos:[3.25,-.35,-.9],color:0xdf7f9f},
      {id:'optimize',pos:[4.2,1.75,-2.2],color:0x88d5c8}
    ];
    const portals=[];
    portalData.forEach((d,i)=>{
      const g=new THREE.Group();g.position.set(...d.pos);root.add(g);
      const ringMat=new THREE.MeshStandardMaterial({color:d.color,emissive:d.color,emissiveIntensity:.8,metalness:.15,roughness:.25,transparent:true,opacity:.92});
      const ring=new THREE.Mesh(new THREE.TorusGeometry(.58,.032,14,96),ringMat);ring.rotation.x=Math.PI/2.15;g.add(ring);
      const coreMat=new THREE.MeshBasicMaterial({color:d.color,transparent:true,opacity:.16,side:THREE.DoubleSide,depthWrite:false,blending:THREE.AdditiveBlending});
      const core=new THREE.Mesh(new THREE.CircleGeometry(.5,64),coreMat);core.rotation.x=Math.PI/2.15;g.add(core);
      const haloMat=new THREE.MeshBasicMaterial({color:d.color,transparent:true,opacity:.07,side:THREE.DoubleSide,depthWrite:false,blending:THREE.AdditiveBlending});
      const halo=new THREE.Mesh(new THREE.CircleGeometry(.88,64),haloMat);halo.rotation.x=Math.PI/2.15;g.add(halo);
      const shardMat=new THREE.MeshStandardMaterial({color:d.color,emissive:d.color,emissiveIntensity:.25,transparent:true,opacity:.38,roughness:.35,metalness:.25});
      for(let s=0;s<5;s++){const shard=new THREE.Mesh(new THREE.TetrahedronGeometry(.12+.04*Math.random(),0),shardMat.clone());const a=(s/5)*Math.PI*2;shard.position.set(Math.cos(a)*(.82+Math.random()*.14),(Math.random()-.5)*.5,Math.sin(a)*(.82+Math.random()*.14));g.add(shard)}
      portals.push({id:d.id,group:g,ring,core,halo,baseY:g.position.y,phase:i*.7});
    });

    const starGeo=new THREE.BufferGeometry();
    const starCount=620;const starPos=new Float32Array(starCount*3);const starSize=new Float32Array(starCount);
    for(let i=0;i<starCount;i++){starPos[i*3]=(Math.random()-.5)*20;starPos[i*3+1]=(Math.random()-.5)*12;starPos[i*3+2]=-Math.random()*14+3;starSize[i]=Math.random()*.8+.2}
    starGeo.setAttribute('position',new THREE.BufferAttribute(starPos,3));
    const starMat=new THREE.PointsMaterial({color:0xded5ff,size:.025,transparent:true,opacity:.58,depthWrite:false,blending:THREE.AdditiveBlending});
    const stars=new THREE.Points(starGeo,starMat);scene.add(stars);

    const arcMat=new THREE.LineBasicMaterial({color:0x76658f,transparent:true,opacity:.18});
    for(let i=0;i<portalData.length-1;i++){
      const a=new THREE.Vector3(...portalData[i].pos),b=new THREE.Vector3(...portalData[i+1].pos),mid=a.clone().lerp(b,.5);mid.y+=1.1+Math.random()*.8;mid.z-=.8;
      const curve=new THREE.QuadraticBezierCurve3(a,mid,b);
      const geo=new THREE.BufferGeometry().setFromPoints(curve.getPoints(72));scene.add(new THREE.Line(geo,arcMat));
    }

    const raycaster=new THREE.Raycaster();const pointer=new THREE.Vector2(99,99);let hovered=null;
    const labels=$$('.world-label');
    function labelFor(id){return labels.find(el=>el.dataset.world===id)}
    function updateLabels(){portals.forEach(p=>{const v=p.group.position.clone().project(camera);const el=labelFor(p.id);if(!el)return;el.style.left=`${(v.x*.5+.5)*innerWidth}px`;el.style.top=`${(-v.y*.5+.5)*innerHeight}px`;const visible=v.z<1&&v.z>-1&&scrollY<innerHeight*.9;el.style.visibility=visible?'visible':'hidden';el.style.opacity=visible?'':'0'})}
    function setHover(id){if(hovered===id)return;hovered=id;labels.forEach(el=>el.classList.toggle('active',el.dataset.world===id));portals.forEach(p=>{const active=p.id===id;gsap.to(p.group.scale,{x:active?1.18:1,y:active?1.18:1,z:active?1.18:1,duration:.35,ease:'power2.out'});gsap.to(p.ring.material,{emissiveIntensity:active?1.7:.8,duration:.3});gsap.to(p.core.material,{opacity:active?.32:.16,duration:.3});gsap.to(p.halo.material,{opacity:active?.15:.07,duration:.3})})}
    window.addEventListener('pointermove',e=>{pointer.x=(e.clientX/innerWidth)*2-1;pointer.y=-(e.clientY/innerHeight)*2+1;const px=(e.clientX/innerWidth-.5),py=(e.clientY/innerHeight-.5);camera.userData.tx=px*.48;camera.userData.ty=-py*.3},{passive:true});
    labels.forEach(el=>{el.addEventListener('mouseenter',()=>setHover(el.dataset.world));el.addEventListener('mouseleave',()=>setHover(null));el.addEventListener('click',()=>{const id=el.dataset.world;if(id==='create')$('#create')?.scrollIntoView({behavior:'smooth'});else $('#workspace')?.scrollIntoView({behavior:'smooth'})})});

    function tick(t=0){
      const time=t*.001;
      camera.position.x+=(camera.userData.tx||0-camera.position.x)*.025;
      camera.position.y+=((camera.userData.ty||0)+.35-camera.position.y)*.025;
      camera.lookAt(0,.25,0);
      portals.forEach((p,i)=>{p.group.position.y=p.baseY+Math.sin(time*.85+p.phase)*.12;p.group.rotation.y=Math.sin(time*.45+p.phase)*.16;p.ring.rotation.z+=.0016*(i%2?1:-1);p.core.rotation.z-=.001;p.group.children.slice(3).forEach((s,si)=>{s.rotation.x+=.003+si*.0003;s.rotation.y+=.004})});
      stars.rotation.y+=.00008;
      raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects(portals.map(p=>p.core));if(hits.length){const hit=portals.find(p=>p.core===hits[0].object);setHover(hit?.id||null)}else if(!labels.some(el=>el.matches(':hover')))setHover(null);
      updateLabels();
      renderer.render(scene,camera);requestAnimationFrame(tick)
    }
    tick();

    const worldUi=$('#worldUi');
    window.addEventListener('scroll',()=>{const f=Math.min(scrollY/innerHeight,1);root.position.z=-f*2.6;root.rotation.z=f*.08;root.scale.setScalar(1-f*.08);starMat.opacity=.58*(1-f*.58);worldUi?.classList.toggle('hidden',scrollY>innerHeight*.9)},{passive:true});
    addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);updateLabels()});
  }
}
