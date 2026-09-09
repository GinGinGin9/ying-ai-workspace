const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Critical content is presentation content, not animation content: force it visible immediately.
function forceCriticalVisible(){
  $$('#spatialGrid,.spatial-grid,.cap-card,.agency-list,.agency-list a').forEach(el=>{
    el.style.setProperty('opacity','1','important');
    el.style.setProperty('visibility','visible','important');
  });
}
forceCriticalVisible();
window.addEventListener('DOMContentLoaded',forceCriticalVisible,{once:true});
window.addEventListener('load',forceCriticalVisible,{once:true});

// FMR-5S case must only contain verified FMR-5S assets.
const campaignCloud=$('#campaignCloud');
if(campaignCloud){
  campaignCloud.querySelector('.m3')?.remove();
  campaignCloud.classList.add('two-up');
  if(!$('link[data-campaign-fix]')){
    const fix=document.createElement('link');
    fix.rel='stylesheet';
    fix.href='./campaign-fix-v8-2.css?v=8.2';
    fix.dataset.campaignFix='true';
    document.head.appendChild(fix);
  }
}

$('#enterBtn')?.addEventListener('click',()=>$('#workspace')?.scrollIntoView({behavior:reduce?'auto':'smooth'}));
window.addEventListener('scroll',()=>$('.topbar')?.classList.toggle('scrolled',window.scrollY>24),{passive:true});

$$('.cap-card').forEach(card=>{
  card.addEventListener('mouseenter',()=>{
    $$('.cap-card').forEach(c=>c.classList.remove('active'));
    card.classList.add('active');
  });
});

const modal=$('#mediaModal');
const modalContent=$('#modalContent');
function openModal(html){
  if(!modal||!modalContent)return;
  modalContent.innerHTML=html;
  modal.showModal();
}
$('.modal-close')?.addEventListener('click',()=>modal?.close());
modal?.addEventListener('click',e=>{if(e.target===modal)modal.close()});

$$('[data-img]').forEach(el=>el.addEventListener('click',()=>{
  openModal(`<img src="${el.dataset.img}" alt="${el.dataset.title||'Portfolio work'}"><div class="modal-caption">${el.dataset.title||''}</div>`);
}));

$$('.video-tile').forEach(el=>el.addEventListener('click',()=>{
  const id=el.dataset.drive;
  openModal(`<iframe src="https://drive.google.com/file/d/${id}/preview" allow="autoplay" style="height:min(76vh,760px)"></iframe>`);
}));

$('[data-modal="fmr"]')?.addEventListener('click',()=>openModal(`
  <div class="micro-label">FMR-5S · INTEGRATED CAMPAIGN</div>
  <h2 style="font-family:Arial,'Microsoft YaHei',sans-serif;font-weight:700;font-size:clamp(44px,6vw,82px);line-height:1.08;margin:16px 0 30px">整合传播路径<br><span style="color:#eadfff">不止一次 Launch</span></h2>
  <div class="case-links">
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7478409013731401729" target="_blank" rel="noreferrer"><span>Teaser / Engagement · Quiz</span><b>↗</b></a>
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7482383387341807616" target="_blank" rel="noreferrer"><span>Teaser · Video</span><b>↗</b></a>
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7483822983317307392" target="_blank" rel="noreferrer"><span>Launch · Key Visual</span><b>↗</b></a>
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7485992349450305536" target="_blank" rel="noreferrer"><span>Product Education · Brochure</span><b>↗</b></a>
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7493586161316126720" target="_blank" rel="noreferrer"><span>Creative Extension · Video</span><b>↗</b></a>
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7500100034567254016" target="_blank" rel="noreferrer"><span>Launch · Hero Video</span><b>↗</b></a>
  </div>`));

$$('.video-tile img,.archive-card img,.media-card img').forEach(img=>img.loading='lazy');

// Lightweight motion: transforms only. Never controls opacity/visibility of portfolio content.
if(!reduce && 'IntersectionObserver' in window){
  const items=$$('.workspace-intro,.cap-card,.campaign-copy,.video-tile,.archive-card,.directed-head,.agency-list a,.build-transition,.about>*');
  items.forEach(el=>{
    el.style.transition='transform .65s cubic-bezier(.2,.8,.2,1)';
    el.style.transform='translateY(12px)';
  });
  const io=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.transform='translateY(0)';
        io.unobserve(entry.target);
      }
    });
  },{threshold:.08,rootMargin:'0px 0px -5% 0px'});
  items.forEach(el=>io.observe(el));
}

// Persistent mouse-follow layer. Kept outside Three.js so it remains visible over light/dark sections.
if(!reduce && matchMedia('(pointer:fine)').matches){
  const aura=document.createElement('div');
  aura.className='cursor-aura';
  const core=document.createElement('div');
  core.className='cursor-core';
  document.body.append(aura,core);

  let tx=-100,ty=-100,x=-100,y=-100,lastSpark=0;
  const sparkPool=[];
  const makeSpark=()=>{
    const s=document.createElement('i');
    s.className='cursor-spark';
    document.body.appendChild(s);
    return s;
  };
  for(let i=0;i<18;i++) sparkPool.push(makeSpark());
  let sparkIndex=0;

  function emitSpark(px,py){
    const s=sparkPool[sparkIndex++%sparkPool.length];
    const angle=Math.random()*Math.PI*2;
    const dist=10+Math.random()*24;
    const size=2+Math.random()*4;
    s.style.setProperty('--sx',`${Math.cos(angle)*dist}px`);
    s.style.setProperty('--sy',`${Math.sin(angle)*dist}px`);
    s.style.width=`${size}px`;
    s.style.height=`${size}px`;
    s.style.left=`${px}px`;
    s.style.top=`${py}px`;
    s.classList.remove('is-live');
    void s.offsetWidth;
    s.classList.add('is-live');
  }

  window.addEventListener('pointermove',e=>{
    tx=e.clientX;ty=e.clientY;
    core.style.transform=`translate3d(${tx}px,${ty}px,0)`;
    const now=performance.now();
    if(now-lastSpark>34){
      emitSpark(tx,ty);
      if(Math.random()>.72) emitSpark(tx,ty);
      lastSpark=now;
    }
    aura.classList.add('is-visible');
    core.classList.add('is-visible');
  },{passive:true});
  window.addEventListener('pointerleave',()=>{
    aura.classList.remove('is-visible');
    core.classList.remove('is-visible');
  });

  function follow(){
    x+=(tx-x)*.14;
    y+=(ty-y)*.14;
    aura.style.transform=`translate3d(${x}px,${y}px,0)`;
    requestAnimationFrame(follow);
  }
  follow();
}

// Current official Three.js module build + addons. Cache-busted for Pages.
import('./magic-three.js?v=7').catch(err=>console.warn('Three.js scene unavailable:',err));

// Activate the Strategy & Playbooks layer and keep its headline compact enough for Chinese line-breaking.
import('./strategy-v11.js?v=12').then(()=>{
  const section=$('#strategy');
  if(!section) return;

  const title=$('.strategy-head h2',section);
  if(title) title.innerHTML='不只展示结果，<br><em>也展示判断过程。</em>';

  const copy=$('.strategy-head-copy',section);
  if(copy){
    copy.innerHTML=`
      <p>这部分收纳策略复盘、宣发路径与方法框架。它们不只是结果展示，更用来说明我如何拆解问题、形成判断，并把经验沉淀为可复用的方法。</p>
      <small>Beyond outcomes, this section shows how I think, decide and structure marketing work.</small>
      <small class="strategy-sanitize">SELECTED & SANITIZED FOR INTERVIEW USE</small>`;
  }

  if(!$('#strategy-v12-overrides')){
    const style=document.createElement('style');
    style.id='strategy-v12-overrides';
    style.textContent=`
      .strategy-head{max-width:1120px;grid-template-columns:minmax(0,1fr) minmax(320px,.8fr);gap:52px;align-items:end}
      .strategy-head h2{font-size:clamp(48px,4.4vw,64px);line-height:1.1;letter-spacing:-.038em;max-width:760px;text-wrap:balance}
      .strategy-head-copy p{font-size:15px;line-height:1.76}
      .strategy-head-copy small{margin-top:10px;max-width:500px}
      .strategy-head-copy .strategy-sanitize{margin-top:5px;opacity:.72}
      .strategy-library{margin-top:38px;gap:12px}
      .strategy-card{min-height:392px;padding:20px;border-radius:21px}
      .doc-preview{min-height:188px;margin:17px 0 18px}
      .strategy-card h3{font-size:19px}
      .strategy-card p{font-size:12px;line-height:1.66}
      @media(max-width:1000px){
        .strategy-head{grid-template-columns:1fr;gap:18px}
        .strategy-head h2{font-size:clamp(42px,10vw,58px);max-width:680px}
        .strategy-library{margin-top:30px}
      }
    `;
    document.head.appendChild(style);
  }
}).catch(err=>console.warn('Strategy & Playbooks unavailable:',err));
