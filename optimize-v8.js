(() => {
  const root=document.querySelector('#optimizeLoop');
  if(!root) return;
  const stages=[...root.querySelectorAll('.optimize-stage')];
  const detail=root.querySelector('.optimize-detail');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  const data={
    awareness:{
      index:'01 / AWARENESS',
      title:'先建立认知，再要求转化。',
      body:'在 B2B 场景里，先用品牌与高价值内容建立熟悉度，让后续互动与获客发生在更有信任基础的受众池里。'
    },
    engagement:{
      index:'02 / ENGAGEMENT',
      title:'用互动行为筛出真正有兴趣的人。',
      body:'不把所有触达都视为同等价值，而是看点击、观看、停留与内容互动，识别更值得继续沟通的受众。'
    },
    retarget:{
      index:'03 / RETARGETING',
      title:'让高意向受众继续往前走。',
      body:'针对已经发生有效互动的人设计更具体的信息与下一步内容，而不是反复把同一条广告展示给所有人。'
    },
    lead:{
      index:'04 / LEAD GENERATION',
      title:'把获客放在信任建立之后。',
      body:'当受众已经完成认知与互动积累，再用更明确的 CTA 与 Lead Generation 承接需求，提升线索质量而不只追求表单数量。'
    }
  };

  function activate(key){
    stages.forEach(s=>s.classList.toggle('active',s.dataset.stage===key));
    const d=data[key];
    if(!d||!detail) return;
    detail.animate?.([{opacity:.45,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:240,easing:'cubic-bezier(.2,.8,.2,1)'});
    detail.innerHTML=`<span>${d.index}</span><div><h4>${d.title}</h4><p>${d.body}</p></div>`;
  }

  stages.forEach(s=>{
    ['mouseenter','focus','click'].forEach(evt=>s.addEventListener(evt,()=>activate(s.dataset.stage)));
  });
  activate('awareness');

  if(!reduce && matchMedia('(pointer:fine)').matches){
    root.addEventListener('pointermove',e=>{
      const r=root.getBoundingClientRect();
      const nx=(e.clientX-r.left)/r.width-.5;
      const ny=(e.clientY-r.top)/r.height-.5;
      root.style.setProperty('--loop-x',`${nx*7}px`);
      root.style.setProperty('--loop-y',`${ny*5}px`);
      stages.forEach((s,i)=>{
        const d=(i+1)*.45;
        s.style.translate=`${nx*d*5}px ${ny*d*4}px`;
      });
    },{passive:true});
    root.addEventListener('pointerleave',()=>{
      stages.forEach(s=>s.style.translate='0 0');
    });
  }
})();
