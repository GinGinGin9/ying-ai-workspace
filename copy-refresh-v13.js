(() => {
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const setText=(s,t)=>{const el=$(s);if(el)el.textContent=t;};
  const setHTML=(s,h)=>{const el=$(s);if(el)el.innerHTML=h;};

  document.title='Ying / 海外数字营销作品集';
  const meta=$('meta[name="description"]');
  if(meta) meta.content='Ying 的海外数字营销作品集，涵盖 B2C 与 B2B 社媒、内容、Campaign、Paid Media、视频与 AI 工作流。';

  setText('.brand span','YING / 海外营销作品集');
  setText('.brand small','GLOBAL DIGITAL MARKETING');

  const world={
    research:['研究','RESEARCH','先看市场、受众和竞品'],
    strategy:['策略','STRATEGY','决定目标、渠道和内容重点'],
    create:['创意','CREATE','把想法做成内容和 Campaign'],
    build:['流程','WORKFLOW','用 AI 和流程减少重复工作'],
    optimize:['优化','OPTIMIZE','看数据，再改下一轮']
  };
  $$('.world-label').forEach(el=>{
    const d=world[el.dataset.world];
    if(!d)return;
    const strong=el.querySelector('strong');
    const em=el.querySelector('em');
    const small=el.querySelector('small');
    if(strong)strong.textContent=d[0];
    if(em)em.textContent=d[1];
    if(small)small.textContent=d[2];
  });

  const systemNav=$('.topbar nav a[href="#systems"]');
  if(systemNav)systemNav.innerHTML='<span>AI 工作流</span><small>AI</small>';

  setText('#entry .eyebrow','GLOBAL DIGITAL MARKETING · B2C × B2B · SOCIAL · PAID · AI');
  setHTML('#entry h1','社媒、内容、投放、Campaign。<br><em>这些我都实际做过。</em>');
  setText('#entry .lede.zh-copy','四年海外数字营销经验，做过 B2C 社媒，也做过生命科学 B2B 的内容、Paid Media、Campaign 和视频。现在 AI 也会用在研究、整理、起稿和一些重复工作里。');
  setText('#entry .lede-en','Global digital marketing across B2C and B2B, with hands-on work in social, content, paid media, video and campaigns.');
  const steps=$$('#entry .positioning-steps > div');
  const stepCopy=[
    ['内容与执行','CONTENT & EXECUTION','社媒、内容、视频和日常运营，我都实际做过。'],
    ['Campaign 与投放','CAMPAIGN & PAID','会做 Campaign 规划，也会看受众、投放和复盘。'],
    ['AI 工作流','AI WORKFLOW','研究、整理、初稿和重复流程里，AI 已经是日常工具。']
  ];
  steps.forEach((el,i)=>{
    const d=stepCopy[i];if(!d)return;
    el.querySelector('strong')&&(el.querySelector('strong').textContent=d[0]);
    el.querySelector('small')&&(el.querySelector('small').textContent=d[1]);
    el.querySelector('p')&&(el.querySelector('p').textContent=d[2]);
  });
  const enter=$('#enterBtn');
  if(enter)enter.innerHTML='<span>看看我的工作方式</span><small>HOW I WORK ↓</small>';

  const workspace=$('#workspace');
  if(workspace){
    setHTML('#workspace .section-kicker','01 / 工作方式 <small>HOW I WORK</small>');
    setText('#workspace .workspace-intro .eyebrow','RESEARCH · STRATEGY · CREATE · WORKFLOW · OPTIMIZE');
    setHTML('#workspace .workspace-intro h2','我的工作通常<br><em>会经过这五个环节。</em>');
    setText('#workspace .section-note','不是固定模板。项目不同，重点也会变，但我通常会先看市场和受众，再定策略、做内容和投放，最后根据数据继续调整。');
    const cardCopy={
      research:'先看市场、受众、竞品和搜索。',
      strategy:'定目标、受众、渠道和内容重点。',
      create:'做内容、视频和 Campaign 素材。',
      build:'把 AI、模板和流程用进日常工作。',
      optimize:'看数据，再调内容、受众和投放。'
    };
    $$('#workspace .cap-card').forEach(card=>{
      const p=card.querySelector('.cap-copy p');
      if(p&&cardCopy[card.dataset.cap])p.textContent=cardCopy[card.dataset.cap];
    });
  }

  setHTML('#create .section-kicker','02 / 代表项目 <small>SELECTED WORK</small>');
  setHTML('#create .create-heading h2','这里放的，<br><em>都是我实际参与过的项目。</em>');
  setText('#create .create-heading .zh-copy','有我自己做的视频和社媒内容，也有产品 Campaign 和 Agency 合作。不同项目里我负责的部分不完全一样，下面尽量都标清楚。');
  setText('#create .create-heading .lede-en','Selected work across campaigns, social content, video production and agency collaboration.');

  setText('#create .campaign-copy .zh-copy','FMR-5S 上市时，我参与规划了预热、Launch 和后续产品教育的内容节奏。前期用 Quiz 和视频拉互动，Launch 集中讲核心产品信息，后面再补手册和延展内容。');
  setText('#create .campaign-copy .lede-en','Launch content planned across teaser, launch and follow-up product education.');

  const stripHead=$('#create .strip-head');
  if(stripHead){
    const h3=stripHead.querySelector('h3');
    const p=stripHead.querySelector(':scope > p');
    if(h3)h3.textContent='这些视频，我从创意一路做到成片。';
    if(p)p.textContent='创意、策划、制作和剪辑都有参与，部分项目由我独立完成。';
  }

  const archive=$('#create .archive-copy');
  if(archive){
    const h3=archive.querySelector('h3');
    const zh=archive.querySelector('.zh-copy');
    const en=archive.querySelector('.lede-en');
    if(h3)h3.textContent='一些社媒和产品视觉。';
    if(zh)zh.textContent='包括节日内容、产品传播和互动型素材。不同主题会换表达，但信息要清楚，也要看得出是同一个品牌。';
    if(en)en.textContent='Selected social and product visuals across seasonal, product and interactive content.';
  }

  const directed=$('#create .directed-head');
  if(directed){
    const h3=directed.querySelector('h3');
    const zh=directed.querySelector('.zh-copy');
    const en=directed.querySelector('.lede-en');
    if(h3)h3.textContent='和 Agency 合作时，我主要负责品牌这一侧。';
    if(zh)zh.textContent='我负责 Creative Brief、核心信息、创意方向、沟通和 Final Review。制作由 Agency 完成，但要确保最后出来的内容没有偏离品牌和产品信息。';
    if(en)en.textContent='Brand-side brief, messaging, creative direction, coordination and final review.';
  }

  setHTML('#systems .section-kicker','03 / AI 工作流 <small>AI IN MY WORKFLOW</small>');
  setText('#systems .systems-head .eyebrow','RESEARCH · CONTENT · AUTOMATION · KNOWLEDGE');
  setHTML('#systems .systems-head h2','AI 对我来说，<br><em>已经是日常工具。</em>');
  setText('#systems .systems-head .zh-copy','我会把 AI 用在市场资料整理、竞品研究、文案初稿、本地化、内容延展和一些重复流程里。能省时间的地方就用，但最后的内容和信息还是要自己检查。');
  setText('#systems .systems-head .lede-en','I use AI in day-to-day marketing work: research, drafting, localization, content extension and repeatable tasks.');
  const systemLabels={
    research:['研究与整理','RESEARCH'],
    content:['内容制作','CONTENT'],
    workflow:['流程与知识','WORKFLOW']
  };
  $$('#systems .system-node').forEach(node=>{
    const d=systemLabels[node.dataset.system];if(!d)return;
    node.querySelector('strong')&&(node.querySelector('strong').textContent=d[0]);
    node.querySelector('small')&&(node.querySelector('small').textContent=d[1]);
  });
  const core=$('#systems .system-core');
  if(core)core.innerHTML='<span>AI + WORKFLOW</span><strong>日常营销</strong><small>HOW I USE IT</small>';
  const principle=$('#systems .systems-principle p');
  if(principle)principle.innerHTML='<strong>能省时间的地方我会用 AI。</strong> 但信息是不是对、语气像不像人、最后能不能用，还是要自己过一遍。';

  setText('#optimize .optimize-head .eyebrow','DATA · TESTING · RETARGETING · LEAD GENERATION');
  setHTML('#optimize .optimize-head h2','看完数据，<br><em>我会直接改下一轮。</em>');
  setText('#optimize .optimize-head .zh-copy','我主要看数据能不能回答几个实际问题：什么内容有效、哪些人真的有兴趣、预算要不要挪、下一轮该继续还是换打法。');
  setText('#optimize .optimize-head .lede-en','I use performance data to decide what to keep, what to change and where to spend next.');
  const story=$('#optimize .optimize-story');
  if(story){
    const h3=story.querySelector('h3');
    const p=story.querySelector(':scope > p');
    if(h3)h3.innerHTML='一开始直接要 Leads，<br>效果不理想。';
    if(p)p.textContent='早期投放比较快进入 Lead Generation，但效果一般。后面北美 Campaign 改成 Awareness → Engagement → Retargeting → Lead Generation，先让目标受众看到、互动，再去承接线索，表现更好。';
    const before=story.querySelector('.optimize-shift-line > div:first-child strong');
    const after=story.querySelector('.optimize-shift-line > div:last-child strong');
    if(before)before.textContent='较早进入 Lead Generation';
    if(after)after.textContent='先做 Awareness / Engagement，再接 Leads';
  }
  const optimizePrinciple=$('#optimize .optimize-principle p');
  if(optimizePrinciple)optimizePrinciple.innerHTML='<strong>我看数据主要是为了改下一轮。</strong> 预算、受众、内容和投放节奏，哪里不对就改哪里。';
})();
