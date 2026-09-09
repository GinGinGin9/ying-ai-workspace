(() => {
  const nav=[...document.querySelectorAll('.topbar nav a[href^="#"]')];
  const sections=nav.map(a=>({a,el:document.querySelector(a.getAttribute('href'))})).filter(x=>x.el);

  const setActive=id=>{
    nav.forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')===`#${id}`));
  };

  if(sections.length){
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible?.target?.id)setActive(visible.target.id);
    },{rootMargin:'-22% 0px -58% 0px',threshold:[0,.08,.2,.4,.65]});
    sections.forEach(({el})=>observer.observe(el));
    setActive(location.hash.replace('#','')||'workspace');
  }

  /* V10: About is a recruiter-facing positioning close, not a manifesto. */
  const about=document.querySelector('#about');
  if(about){
    const intro=about.querySelector('.about-intro');
    if(intro){
      const h2=intro.querySelector('h2');
      const zh=intro.querySelector('.zh-copy');
      const en=intro.querySelector('.lede-en');
      if(h2)h2.innerHTML='从执行走向策略，<em>再把经验系统化。</em>';
      if(zh)zh.textContent='四年海外数字营销经验，横跨 B2C 与 B2B。我的能力从社媒、内容和视频执行逐步扩展到 Paid Media、Campaign 与策略判断；现在，我正在用 AI 把研究、创意、执行与复盘连接成更高效、可复用的营销工作流。';
      if(en)en.textContent='Hands-on execution, strategic judgment, and AI-enabled systems across global B2C and B2B marketing.';
    }

    const points=[...about.querySelectorAll('.about-point')];
    const copy=[
      {
        title:'有执行深度，也理解落地边界。',
        body:'做过社媒、内容、视频与 Paid Media，能把策略放回真实的渠道、素材、资源与执行环境里判断。'
      },
      {
        title:'从完成任务，走向做营销判断。',
        body:'基于市场、受众、渠道与数据形成优先级，把品牌目标转化为 Campaign、内容与投放动作。'
      },
      {
        title:'用 AI 放大方法，而不替代判断。',
        body:'把 AI、Agent、知识与流程接入营销工作，提升研究、生产、迭代与协作的效率和复用能力。'
      }
    ];
    points.forEach((point,i)=>{
      const h3=point.querySelector('h3');
      const p=point.querySelector('p');
      if(h3&&copy[i])h3.textContent=copy[i].title;
      if(p&&copy[i])p.textContent=copy[i].body;
    });

    const close=about.querySelector('.about-close-copy strong');
    if(close)close.innerHTML='执行深度 · 策略判断 · <em>AI 系统化</em>';
  }

  /* V11: add the Strategy & Playbooks evidence layer after the AI system section. */
  import('./strategy-v11.js?v=11').catch(err=>console.warn('Strategy library unavailable:',err));
})();
