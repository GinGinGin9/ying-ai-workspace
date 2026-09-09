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

// Current official Three.js module build + addons. Cache-busted for Pages.
import('./magic-three.js?v=6').catch(err=>console.warn('Three.js scene unavailable:',err));
