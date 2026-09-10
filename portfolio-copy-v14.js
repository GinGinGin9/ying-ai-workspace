(() => {
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const text=(s,v,r=document)=>{const el=$(s,r);if(el)el.textContent=v;};
  const html=(s,v,r=document)=>{const el=$(s,r);if(el)el.innerHTML=v;};

  document.documentElement.lang='en';
  document.title='Ying | Global Digital Marketing Portfolio';
  const meta=$('meta[name="description"]');
  if(meta)meta.content='Global digital marketing portfolio across B2C and B2B content strategy, social media, paid media, campaigns, video and AI-enabled workflows.';

  text('.brand span','YING / MARKETING PORTFOLIO');
  text('.brand small','GLOBAL DIGITAL MARKETING');

  const navCopy={
    '#workspace':['Approach','APPROACH'],
    '#create':['Work','SELECTED WORK'],
    '#systems':['AI Workflow','WORKFLOW'],
    '#strategy':['Strategy','REVIEWS'],
    '#optimize':['Performance','OPTIMIZATION'],
    '#about':['About','EXPERIENCE']
  };
  $$('.topbar nav a[href^="#"]').forEach(a=>{
    const d=navCopy[a.getAttribute('href')];
    if(d)a.innerHTML=`<span>${d[0]}</span><small>${d[1]}</small>`;
  });

  const worldCopy={
    research:['Research','RESEARCH','Market audience competitor and search insight'],
    strategy:['Strategy','STRATEGY','Positioning audience channel and campaign planning'],
    create:['Create','CREATE','Content social video and campaign assets'],
    build:['Workflow','WORKFLOW','AI tools templates process and knowledge'],
    optimize:['Optimize','OPTIMIZE','Performance testing and iteration']
  };
  $$('.world-label').forEach(el=>{
    const d=worldCopy[el.dataset.world];if(!d)return;
    const strong=el.querySelector('strong');const em=el.querySelector('em');const small=el.querySelector('small');
    if(strong)strong.textContent=d[0];if(em)em.textContent=d[1];if(small)small.textContent=d[2];
  });
  text('.world-instruction span','Explore the workspace');
  text('.world-instruction small','MOVE · HOVER · EXPLORE');
  text('.scroll-hint span','Scroll to continue');
  text('.scroll-hint small','SCROLL DOWN');

  text('#entry .eyebrow','GLOBAL DIGITAL MARKETING · B2C & B2B · CONTENT · PAID MEDIA · CAMPAIGNS');
  html('#entry h1','Global Digital Marketing<br><em>Across Content Campaigns and Performance</em>');
  text('#entry .lede.zh-copy','Four years of experience across global B2C and B2B marketing spanning social media content strategy video paid media and integrated campaigns. My work combines hands on execution with campaign planning performance review and cross functional coordination.');
  text('#entry .lede-en','Experience across consumer and life science marketing with work delivered across multiple channels and formats.');
  const heroCards=$$('#entry .positioning-steps > div');
  const heroCardCopy=[
    ['Content Execution','CONTENT & EXECUTION','Social media content video and day to day channel delivery'],
    ['Campaign Strategy','CAMPAIGN & PAID','Audience planning channel strategy paid media and campaign execution'],
    ['AI Enabled Workflow','AI WORKFLOW','Research drafting localization and repeatable workflows supported by AI']
  ];
  heroCards.forEach((card,i)=>{
    const d=heroCardCopy[i];if(!d)return;
    const strong=card.querySelector('strong');const small=card.querySelector('small');const p=card.querySelector('p');
    if(strong)strong.textContent=d[0];if(small)small.textContent=d[1];if(p)p.textContent=d[2];
  });
  const enter=$('#enterBtn');if(enter)enter.innerHTML='<span>Explore Selected Work</span><small>VIEW PORTFOLIO ↓</small>';

  html('#workspace .section-kicker','01 / APPROACH <small>HOW I WORK</small>');
  text('#workspace .workspace-intro .eyebrow','RESEARCH · STRATEGY · CREATE · WORKFLOW · OPTIMIZE');
  html('#workspace .workspace-intro h2','A Connected Marketing Process');
  text('#workspace .section-note','Projects vary in scope but my work typically moves across five areas including research strategy content development workflow design and performance optimization. The emphasis changes based on the market objective audience and channel.');
  const workspaceCards={
    research:['Research','MARKET & AUDIENCE','Market audience competitor and search research'],
    strategy:['Strategy','PLANNING','Positioning audience channel and campaign planning'],
    create:['Create','CONTENT & CREATIVE','Content social video and campaign production'],
    build:['Workflow','TOOLS & PROCESS','AI tools templates process and knowledge management'],
    optimize:['Optimize','PERFORMANCE','Performance analysis testing and campaign iteration']
  };
  $$('#workspace .cap-card').forEach(card=>{
    const d=workspaceCards[card.dataset.cap];if(!d)return;
    const h3=card.querySelector('.cap-copy h3');const p=card.querySelector('.cap-copy p');
    if(h3)h3.innerHTML=`${d[0]} <small>${d[1]}</small>`;if(p)p.textContent=d[2];
  });
  const explore=$('#workspace .explore-create');if(explore)explore.innerHTML='<span>View Selected Work</span><small>SELECTED WORK ↓</small>';

  html('#create .section-kicker','02 / SELECTED WORK <small>CAMPAIGNS · CONTENT · VIDEO</small>');
  text('#create .create-heading .eyebrow','CAMPAIGN · CONTENT · VIDEO · CREATIVE DIRECTION');
  html('#create .create-heading h2','Selected Work Across Campaigns Content and Video');
  text('#create .create-heading .zh-copy','Selected projects spanning product launches social content video production and agency collaboration. My role is identified by project to distinguish hands on production from brand side creative direction.');
  text('#create .create-heading .lede-en','Campaign planning social content video production and brand side creative direction.');

  const campaign=$('#create .campaign-copy');
  if(campaign){
    html('.micro-label','INTEGRATED CAMPAIGN <small>PRODUCT LAUNCH</small>',campaign);
    text('.zh-copy','For the FMR 5S launch I helped shape the campaign sequence across teaser launch and product education. Interactive content and video supported early engagement launch assets carried the core product message and follow up materials extended the campaign with greater product depth.',campaign);
    text('.lede-en','Campaign content planned across teaser launch and follow up product education.',campaign);
    const btn=campaign.querySelector('[data-modal="fmr"]');if(btn)btn.innerHTML='View Campaign <small>VIEW CASE ↗</small>';
  }

  const strip=$('#create .strip-head');
  if(strip){
    html('.micro-label','HANDS ON PRODUCTION <small>VIDEO</small>',strip);
    text('h3','Video Production From Concept to Final Cut',strip);
    const p=strip.querySelector(':scope > p');if(p)p.textContent='Selected in house video projects covering concept development content planning production and editing.';
  }
  const videoCopy=[
    ['Product Operation Video','Concept · Production · Editing'],
    ['World Environment Day','Creative Concept · Content · Production'],
    ['Women and Girls in Science','Concept · Production · Editing'],
    ['PANDA Mini Valentine Campaign','Concept · Video · Social']
  ];
  $$('#create .video-tile').forEach((tile,i)=>{
    const d=videoCopy[i];if(!d)return;
    const h4=tile.querySelector('.tile-meta h4');const p=tile.querySelector('.tile-meta p');const play=tile.querySelector('.video-cover span');
    if(h4)h4.textContent=d[0];if(p)p.textContent=d[1];if(play)play.textContent='PLAY ↗';
  });

  const archive=$('#create .archive-copy');
  if(archive){
    html('.micro-label','SELECTED VISUAL WORK <small>SOCIAL & PRODUCT</small>',archive);
    text('h3','Selected Social and Product Visuals',archive);
    text('.zh-copy','A selection of seasonal campaign product communication and interactive social assets developed for different content needs and channel contexts.',archive);
    text('.lede-en','Selected visual work across social and product marketing.',archive);
  }

  const directed=$('#create .directed-head');
  if(directed){
    html('.micro-label','AGENCY COLLABORATION <small>BRAND SIDE ROLE</small>',directed);
    text('h3','Brand Side Creative Direction',directed);
    text('.zh-copy','For agency produced work I led the creative brief core messaging creative direction coordination and final review to keep execution aligned with brand objectives product information and campaign strategy.',directed);
    text('.lede-en','Brief messaging creative direction coordination and final review.',directed);
  }
  const agencyTitles=['Extraction Instrument Series','Plate Reagent Commercial','Quantification Instrument Video','Vazyme Factory Story'];
  $$('#create .agency-list a').forEach((a,i)=>{const strong=a.querySelector('strong');if(strong&&agencyTitles[i])strong.textContent=agencyTitles[i];});

  html('#systems .section-kicker','03 / AI WORKFLOW <small>AI IN PRACTICE</small>');
  text('#systems .systems-head .eyebrow','RESEARCH · CONTENT · LOCALIZATION · AUTOMATION');
  html('#systems .systems-head h2','AI Integrated Into Marketing Workflows');
  text('#systems .systems-head .zh-copy','I use AI selectively across market research competitor review first draft development localization content variation and repeatable tasks. The objective is to reduce production time while keeping messaging technical accuracy and brand standards under review.');
  text('#systems .systems-head .lede-en','Practical AI use across research content development and repeatable marketing operations.');
  const sysLabels={research:['Research and Synthesis','RESEARCH'],content:['Content Development','CONTENT'],workflow:['Workflow Design','WORKFLOW']};
  $$('#systems .system-node').forEach(node=>{const d=sysLabels[node.dataset.system];if(!d)return;const strong=node.querySelector('strong');const small=node.querySelector('small');if(strong)strong.textContent=d[0];if(small)small.textContent=d[1];});
  const core=$('#systems .system-core');if(core)core.innerHTML='<span>AI IN PRACTICE</span><strong>Marketing Workflow</strong><small>RESEARCH · CONTENT · OPERATIONS</small>';
  const sysPrinciple=$('#systems .systems-principle p');if(sysPrinciple)sysPrinciple.innerHTML='<strong>AI supports speed and consistency where it adds clear value</strong> Final messaging accuracy and brand fit remain part of the review process';

  const sysCopy={
    research:['01 / RESEARCH','Organize Research Before Strategic Review','AI helps compare competitor pages summarize long source material and structure market or audience notes before I return to the source and validate the points that matter.',['Market Scan','Competitor Review','Audience','Search','Brief']],
    content:['02 / CONTENT','Accelerate First Draft Development','I use AI for first pass copy localization campaign extensions and video pre production then refine the output for tone context technical accuracy and brand consistency.',['Campaign Copy','Localization','Visual Brief','Video','Content Variants']],
    workflow:['03 / WORKFLOW','Standardize Repeatable Marketing Tasks','Recurring prompts references templates and task steps are organized into reusable workflows to reduce setup time and improve consistency across similar projects.',['Prompts','Templates','Knowledge Base','Automation','Workflow']]
  };
  function rewriteSystem(key){
    const d=sysCopy[key];const detail=$('#systems .system-detail');if(!d||!detail)return;
    detail.innerHTML=`<div class="system-detail-index">${d[0]}</div><h3>${d[1]}</h3><p>${d[2]}</p><div class="system-tags">${d[3].map(t=>`<span>${t}</span>`).join('')}</div>`;
  }
  rewriteSystem('research');
  $$('#systems .system-node').forEach(node=>['mouseenter','focus','click'].forEach(evt=>node.addEventListener(evt,()=>queueMicrotask(()=>rewriteSystem(node.dataset.system)))));

  html('#optimize .section-kicker','05 / PERFORMANCE <small>PAID MEDIA & OPTIMIZATION</small>');
  text('#optimize .optimize-head .eyebrow','PAID MEDIA · TESTING · RETARGETING · LEAD GENERATION');
  html('#optimize .optimize-head h2','Performance Review and Campaign Optimization');
  text('#optimize .optimize-head .zh-copy','I use campaign data to assess audience response creative performance budget allocation and funnel progression. The focus is to identify what should be scaled adjusted or stopped in the next phase.');
  text('#optimize .optimize-head .lede-en','Performance analysis used to guide the next campaign decision.');
  const story=$('#optimize .optimize-story');
  if(story){
    text('h3','Reframing the North America Paid Media Funnel',story);
    const p=story.querySelector(':scope > p');if(p)p.textContent='Earlier paid campaigns moved into Lead Generation too quickly and underperformed. For the North America campaign the sequence shifted to Awareness → Engagement → Retargeting → Lead Generation which created a stronger path from initial reach to conversion.';
    const before=story.querySelector('.optimize-shift-line > div:first-child strong');const after=story.querySelector('.optimize-shift-line > div:last-child strong');
    if(before)before.textContent='Early Lead Generation';if(after)after.textContent='Awareness and Engagement Before Conversion';
  }
  const center=$('#optimize .optimize-center');if(center)center.innerHTML='<div><strong>Optimize</strong><small>NEXT PHASE</small></div>';
  const stages={awareness:'Awareness',engagement:'Engagement',retarget:'Retargeting',lead:'Lead Generation'};
  $$('#optimize .optimize-stage').forEach(node=>{const strong=node.querySelector('strong');if(strong&&stages[node.dataset.stage])strong.textContent=stages[node.dataset.stage];});
  const optPrinciple=$('#optimize .optimize-principle p');if(optPrinciple)optPrinciple.innerHTML='<strong>Reporting matters when it changes the next decision</strong> Audience budget creative and campaign sequence are adjusted according to performance';

  const optCopy={
    awareness:['01 / AWARENESS','Reach the Right Accounts','Build familiarity with relevant brand and product content before asking for conversion.'],
    engagement:['02 / ENGAGEMENT','Identify Meaningful Engagement','Use clicks video views and content interaction to narrow the audience and identify stronger interest.'],
    retarget:['03 / RETARGETING','Continue With More Specific Messaging','Retarget engaged audiences with deeper product or campaign content instead of repeating the same top of funnel message.'],
    lead:['04 / LEAD GENERATION','Capture Demand at Higher Intent','Move into stronger calls to action once awareness and engagement indicate a more qualified audience.']
  };
  function rewriteOptimize(key){
    const d=optCopy[key];const detail=$('#optimize .optimize-detail');if(!d||!detail)return;
    detail.innerHTML=`<span>${d[0]}</span><div><h4>${d[1]}</h4><p>${d[2]}</p></div>`;
  }
  rewriteOptimize('awareness');
  $$('#optimize .optimize-stage').forEach(node=>['mouseenter','focus','click'].forEach(evt=>node.addEventListener(evt,()=>queueMicrotask(()=>rewriteOptimize(node.dataset.stage)))));

  html('#about .section-kicker','06 / ABOUT <small>EXPERIENCE</small>');
  text('#about .about-intro .eyebrow','GLOBAL DIGITAL MARKETING · B2C & B2B');
  html('#about .about-intro h2','Experience Across B2C and B2B Marketing');
  text('#about .about-intro .zh-copy','At SHEIN and MOTF I worked in global B2C social and influencer marketing. At Vazyme my scope expanded into B2B content strategy paid media campaign planning video and performance analysis. This progression built both hands on delivery experience and a broader understanding of how channels work together.');
  text('#about .about-intro .lede-en','Four years across global B2C and B2B marketing with increasing ownership across strategy and execution.');
  const aboutPoints=$$('#about .about-point');
  const aboutCopy=[
    ['EXECUTION','Hands On Delivery','Social content video and paid media experience keeps planning grounded in production realities and channel requirements.'],
    ['STRATEGY','Broader Marketing Scope','Campaign planning audience strategy paid media and performance review became a larger part of my role over time.'],
    ['AI WORKFLOW','Practical AI Adoption','AI supports research drafting localization and repeatable tasks where it improves speed or consistency.']
  ];
  aboutPoints.forEach((point,i)=>{const d=aboutCopy[i];if(!d)return;const small=point.querySelector('small');const h3=point.querySelector('h3');const p=point.querySelector('p');if(small)small.textContent=d[0];if(h3)h3.textContent=d[1];if(p)p.textContent=d[2];});
  const exp=$$('#about .experience-row');
  const expCopy=[
    ['SHEIN / MOTF','Global Social · Influencer · PR · B2C Growth','GLOBAL B2C'],
    ['Vazyme Biotech','Content Strategy · Paid Media · Campaigns · Video · B2B Brand','GLOBAL B2B'],
    ['Current Focus','Global Marketing · Campaign Strategy · AI Enabled Workflow','NEXT STEP']
  ];
  exp.forEach((row,i)=>{const d=expCopy[i];if(!d)return;const strong=row.querySelector('strong');const p=row.querySelector('p');const small=row.querySelector('small');if(strong)strong.textContent=d[0];if(p)p.textContent=d[1];if(small)small.textContent=d[2];});
  const close=$('#about .about-close-copy');if(close)close.innerHTML='<span>CURRENT FOCUS</span><strong>Global Marketing<br><em>Strategy Execution and AI Enabled Workflow</em></strong>';
  const back=$('#about .about-close .primary-btn');if(back)back.innerHTML='<span>Back to Top</span><small>BACK TO START ↑</small>';

  function refreshStrategy(){
    const strategy=$('#strategy');if(!strategy)return false;
    html('.section-kicker','04 / STRATEGY & REVIEWS <small>PLANNING · PERFORMANCE · PRODUCT MARKETING</small>',strategy);
    text('.strategy-head .eyebrow','CAMPAIGN PLANNING · PAID MEDIA · PRODUCT MARKETING',strategy);
    html('.strategy-head h2','Selected Strategy and Review Work',strategy);
    html('.strategy-head-copy','<p>Sanitized examples from real projects including a LinkedIn ABM review a campaign planning document and a product marketing framework. These materials provide context for how campaign decisions were made and evaluated.</p><small>SELECTED & SANITIZED FOR INTERVIEW USE</small>',strategy);
    const cards=$$('.strategy-card',strategy);
    const cardCopy=[
      ['NORTH AMERICA · LINKEDIN ABM','Account Reach to Sales Priority','North America LinkedIn ABM Review','Reviewed account reach engagement and sales ready signals to define follow up priorities','View Review'],
      ['PRODUCT CAMPAIGN PLAN','Teaser Launch Follow Up','Product Campaign Planning','Mapped the role of content across teaser launch and follow up stages','View Plan'],
      ['PRODUCT MARKETING','Benefits Evidence Education','Product Marketing Framework','Structured product communication across benefits technical evidence education and customer proof','View Framework']
    ];
    cards.forEach((card,i)=>{const d=cardCopy[i];if(!d)return;const mark=card.querySelector('.doc-mark');const preview=card.querySelector('.doc-sheet strong');const h3=card.querySelector('h3');const p=card.querySelector('p');const footer=card.querySelector('.strategy-card-footer span');if(mark)mark.textContent=d[0];if(preview)preview.textContent=d[1];if(h3)h3.textContent=d[2];if(p)p.textContent=d[3];if(footer)footer.textContent=d[4];});
    const note=$('.strategy-note p',strategy);if(note)note.innerHTML='<strong>The final creative shows what shipped</strong> These documents provide the planning and review context behind the work';
    const nav=$('.topbar nav a[href="#strategy"]');if(nav)nav.innerHTML='<span>Strategy</span><small>REVIEWS</small>';
    return true;
  }

  if(!refreshStrategy()){
    const observer=new MutationObserver(()=>{if($('#strategy')){queueMicrotask(refreshStrategy);observer.disconnect();}});
    observer.observe(document.body,{childList:true,subtree:true});
  }else{
    queueMicrotask(refreshStrategy);
  }

  $('[data-modal="fmr"]')?.addEventListener('click',()=>queueMicrotask(()=>{
    const content=$('#modalContent');if(!content)return;
    const title=content.querySelector('h2');if(title)title.innerHTML='FMR 5S Campaign Timeline<br><span style="color:#eadfff">Teaser Launch Follow Up</span>';
  }));
})();
