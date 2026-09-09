(() => {
  const root=document.querySelector('#systemOrbit');
  if(!root) return;

  const nodes=[...root.querySelectorAll('.system-node')];
  const detail=root.querySelector('.system-detail');
  const paths=[...root.querySelectorAll('.system-lines path')];
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  const data={
    research:{
      index:'01 / RESEARCH & STRATEGY',
      title:'让 AI 帮我扩大信息处理能力，<br>但判断仍然由人完成。',
      body:'用于市场扫描、竞品拆解、受众与内容机会整理，并把零散信息压缩成更清晰的策略输入。',
      tags:['Market Scan','Competitor Review','Audience','Content Opportunity','Brief']
    },
    content:{
      index:'02 / CONTENT & PRODUCTION',
      title:'把一次创意，<br>扩展成可复用的内容资产。',
      body:'用于文案起草、Campaign 延展、本地化、视觉与视频前期协作，让内容生产更快，但仍保持品牌语气和信息准确性。',
      tags:['Campaign Copy','Localization','Visual Brief','Video Workflow','Content Reuse']
    },
    workflow:{
      index:'03 / WORKFLOW & KNOWLEDGE',
      title:'把个人经验，<br>沉淀成团队可以重复使用的系统。',
      body:'把常用判断、SOP、资料和执行步骤沉淀进工作流、Agent 与知识库，减少重复劳动，也让方法更容易复用和交接。',
      tags:['Agent','SOP','Knowledge Base','Automation','Reusable Workflow']
    }
  };

  function activate(key){
    nodes.forEach(n=>n.classList.toggle('active',n.dataset.system===key));
    paths.forEach(p=>p.classList.toggle('active',p.dataset.line===key));
    const d=data[key];
    if(!d||!detail) return;
    detail.animate?.([{opacity:.45,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:260,easing:'cubic-bezier(.2,.8,.2,1)'});
    detail.innerHTML=`<div class="system-detail-index">${d.index}</div><h3>${d.title}</h3><p>${d.body}</p><div class="system-tags">${d.tags.map(t=>`<span>${t}</span>`).join('')}</div>`;
  }

  nodes.forEach(n=>{
    n.addEventListener('mouseenter',()=>activate(n.dataset.system));
    n.addEventListener('focus',()=>activate(n.dataset.system));
    n.addEventListener('click',()=>activate(n.dataset.system));
  });
  activate('research');

  if(!reduce && matchMedia('(pointer:fine)').matches){
    root.addEventListener('pointermove',e=>{
      const r=root.getBoundingClientRect();
      const nx=(e.clientX-r.left)/r.width-.5;
      const ny=(e.clientY-r.top)/r.height-.5;
      root.style.setProperty('--orbit-x',`${nx*10}px`);
      root.style.setProperty('--orbit-y',`${ny*8}px`);
      nodes.forEach((n,i)=>{
        const depth=(i+1)*.7;
        n.style.setProperty('--node-x',`${nx*depth*4}px`);
        n.style.setProperty('--node-y',`${ny*depth*3}px`);
      });
    },{passive:true});
    root.addEventListener('pointerleave',()=>{
      root.style.setProperty('--orbit-x','0px');
      root.style.setProperty('--orbit-y','0px');
      nodes.forEach(n=>{n.style.setProperty('--node-x','0px');n.style.setProperty('--node-y','0px');});
    });
  }
})();
