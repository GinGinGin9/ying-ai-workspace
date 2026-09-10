(() => {
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const text=(s,v,r=document)=>{const el=$(s,r);if(el)el.textContent=v;};
  const html=(s,v,r=document)=>{const el=$(s,r);if(el)el.innerHTML=v;};

  document.documentElement.lang='zh-CN';
  document.title='Ying | 海外数字营销作品集';
  const meta=$('meta[name="description"]');
  if(meta) meta.content='Ying 的海外数字营销作品集，涵盖 B2C 与 B2B 社媒内容、Campaign、Paid Media、视频与 AI 工作流。';

  text('.brand span','YING / 海外营销作品集');
  text('.brand small','GLOBAL DIGITAL MARKETING');

  const navCopy={
    '#workspace':['工作方式','APPROACH'],
    '#create':['代表作品','SELECTED WORK'],
    '#systems':['AI 工作流','AI WORKFLOW'],
    '#strategy':['策略与复盘','STRATEGY'],
    '#optimize':['投放与优化','PERFORMANCE'],
    '#about':['关于我','ABOUT']
  };
  $$('.topbar nav a[href^="#"]').forEach(a=>{
    const d=navCopy[a.getAttribute('href')];
    if(d)a.innerHTML=`<span>${d[0]}</span><small>${d[1]}</small>`;
  });

  const worldCopy={
    research:['研究','RESEARCH','市场 · 受众 · 竞品 · 搜索'],
    strategy:['策略','STRATEGY','定位 · 受众 · 渠道 · Campaign'],
    create:['创意','CREATE','内容 · 社媒 · 视频 · 视觉'],
    build:['流程','WORKFLOW','AI · 模板 · SOP · 知识库'],
    optimize:['优化','OPTIMIZE','数据 · 测试 · 复盘 · 迭代']
  };
  $$('.world-label').forEach(el=>{
    const d=worldCopy[el.dataset.world];if(!d)return;
    const strong=el.querySelector('strong');const em=el.querySelector('em');const small=el.querySelector('small');
    if(strong)strong.textContent=d[0];if(em)em.textContent=d[1];if(small)small.textContent=d[2];
  });
  text('.world-instruction span','移动鼠标探索工作空间');
  text('.world-instruction small','MOVE · HOVER · EXPLORE');
  text('.scroll-hint span','向下浏览');
  text('.scroll-hint small','SCROLL DOWN');

  text('#entry .eyebrow','GLOBAL DIGITAL MARKETING · B2C × B2B · CONTENT · PAID MEDIA · CAMPAIGN');
  html('#entry h1','海外数字营销<br><em>内容策略与整合营销</em>');
  text('#entry .lede.zh-copy','四年海外数字营销经验，横跨 B2C 与 B2B，工作覆盖社媒内容、视频、Paid Media 与 Campaign。除了执行，也参与策略规划、投放复盘与跨团队协作，并将 AI 应用到研究、内容与工作流程中。');
  text('#entry .lede-en','Global digital marketing across content strategy campaigns paid media video and AI supported workflows.');

  const heroCards=$$('#entry .positioning-steps > div');
  const heroCardCopy=[
    ['内容与创意','CONTENT & CREATIVE','社媒内容 · 视频 · 视觉 · Campaign Assets'],
    ['Campaign 与投放','CAMPAIGN & PAID','受众策略 · 渠道规划 · Paid Media · 复盘'],
    ['AI 工作流','AI WORKFLOW','Research · Drafting · Localization · Automation']
  ];
  heroCards.forEach((card,i)=>{
    const d=heroCardCopy[i];if(!d)return;
    const strong=card.querySelector('strong');const small=card.querySelector('small');const p=card.querySelector('p');
    if(strong)strong.textContent=d[0];if(small)small.textContent=d[1];if(p)p.textContent=d[2];
  });
  const enter=$('#enterBtn');if(enter)enter.innerHTML='<span>查看代表作品</span><small>SELECTED WORK ↓</small>';

  html('#workspace .section-kicker','01 / 工作方式 <small>HOW I WORK</small>');
  text('#workspace .workspace-intro .eyebrow','RESEARCH · STRATEGY · CREATE · WORKFLOW · OPTIMIZE');
  html('#workspace .workspace-intro h2','从研究到执行与优化');
  text('#workspace .section-note','不同项目的重点会变化，但工作通常围绕研究、策略、内容制作、流程优化与数据复盘展开。先明确市场和受众，再决定内容与渠道，最后根据结果继续调整。');
  const workspaceCards={
    research:['研究','RESEARCH','市场 · 受众 · 竞品 · 搜索'],
    strategy:['策略','STRATEGY','定位 · 受众 · 渠道 · Campaign'],
    create:['创意','CREATE','内容 · 社媒 · 视频 · Campaign Assets'],
    build:['流程','WORKFLOW','AI · 模板 · SOP · 知识库'],
    optimize:['优化','OPTIMIZE','Performance · Testing · Iteration']
  };
  $$('#workspace .cap-card').forEach(card=>{
    const d=workspaceCards[card.dataset.cap];if(!d)return;
    const h3=card.querySelector('.cap-copy h3');const p=card.querySelector('.cap-copy p');
    if(h3)h3.innerHTML=`${d[0]} <small>${d[1]}</small>`;
    if(p)p.textContent=d[2];
  });
  const explore=$('#workspace .explore-create');if(explore)explore.innerHTML='<span>查看代表作品</span><small>SELECTED WORK ↓</small>';

  html('#create .section-kicker','02 / 代表作品 <small>SELECTED WORK</small>');
  text('#create .create-heading .eyebrow','CAMPAIGN · CONTENT · VIDEO · CREATIVE DIRECTION');
  html('#create .create-heading h2','代表项目与作品');
  text('#create .create-heading .zh-copy','包括整合营销 Campaign、原创视频、社媒与产品视觉，以及与 Agency 合作完成的视频项目。不同项目中的职责范围会单独标注。');
  text('#create .create-heading .lede-en','Selected work across campaigns content video production and agency collaboration.');

  const campaign=$('#create .campaign-copy');
  if(campaign){
    html('.micro-label','整合营销案例 <small>INTEGRATED CAMPAIGN</small>',campaign);
    text('.zh-copy','围绕 FMR 5S 产品上市，参与规划 Teaser、Launch 与后续产品教育的内容节奏。前期以互动与视频建立关注，Launch 集中呈现核心产品信息，后续通过 Brochure 与延展内容继续补充产品价值。',campaign);
    text('.lede-en','Campaign planning across teaser launch and follow up product education.',campaign);
    const btn=campaign.querySelector('[data-modal="fmr"]');if(btn)btn.innerHTML='查看完整案例 <small>VIEW CASE ↗</small>';
  }

  const strip=$('#create .strip-head');
  if(strip){
    html('.micro-label','原创视频作品 <small>ORIGINAL VIDEO WORK</small>',strip);
    text('h3','原创视频作品',strip);
    const p=strip.querySelector(':scope > p');if(p)p.textContent='涵盖创意构思、内容策划、拍摄制作与剪辑等不同环节。';
  }
  const videoCopy=[
    ['产品操作视频','Product Operation Video','创意 · 制作 · 剪辑'],
    ['世界环境日','World Environment Day','创意 · 内容 · 制作'],
    ['国际妇女和女童科学日','Women and Girls in Science','创意 · 制作 · 剪辑'],
    ['PANDA Mini 情人节','Valentine Campaign','创意 · 视频 · Social']
  ];
  $$('#create .video-tile').forEach((tile,i)=>{
    const d=videoCopy[i];if(!d)return;
    const h4=tile.querySelector('.tile-meta h4');const p=tile.querySelector('.tile-meta p');const play=tile.querySelector('.video-cover span');
    if(h4)h4.innerHTML=`${d[0]} <small>${d[1]}</small>`;if(p)p.textContent=d[2];if(play)play.textContent='播放 PLAY ↗';
  });

  const archive=$('#create .archive-copy');
  if(archive){
    html('.micro-label','视觉作品 <small>VISUAL WORK</small>',archive);
    text('h3','视觉作品',archive);
    text('.zh-copy','包括节日营销、产品传播与社媒互动视觉，覆盖不同主题与内容场景。',archive);
    text('.lede-en','Selected visual work across social and product marketing.',archive);
  }

  const directed=$('#create .directed-head');
  if(directed){
    html('.micro-label','Agency 协作项目 <small>AGENCY COLLABORATION</small>',directed);
    text('h3','Agency 协作项目',directed);
    text('.zh-copy','在 Agency 制作项目中，我主要负责品牌侧 Creative Brief、核心信息、创意方向、沟通推进与 Final Review，确保最终内容与品牌及产品信息保持一致。',directed);
    text('.lede-en','Brand side brief messaging creative direction coordination and final review.',directed);
  }
  const agencyTitles=[
    ['核酸提取仪器系列','Extraction Instrument Series'],
    ['板式试剂商业视频','Plate Reagent Commercial'],
    ['定量仪器视频','Quantification Instrument Video'],
    ['Vazyme 工厂故事','Factory Story']
  ];
  $$('#create .agency-list a').forEach((a,i)=>{const d=agencyTitles[i];const strong=a.querySelector('strong');if(strong&&d)strong.innerHTML=`${d[0]} <small>${d[1]}</small>`;});

  html('#systems .section-kicker','03 / AI 工作流 <small>AI WORKFLOW</small>');
  text('#systems .systems-head .eyebrow','RESEARCH · CONTENT · LOCALIZATION · AUTOMATION');
  html('#systems .systems-head h2','AI 工作流');
  text('#systems .systems-head .zh-copy','AI 主要用于市场研究、竞品整理、文案初稿、本地化、内容延展与重复任务。使用重点是提高信息处理与生产效率，同时保留人工审核，确保专业信息与品牌表达准确。');
  text('#systems .systems-head .lede-en','Practical AI use across research content development localization and repeatable marketing tasks.');
  const sysLabels={research:['研究与整理','RESEARCH'],content:['内容生产','CONTENT'],workflow:['流程与知识','WORKFLOW']};
  $$('#systems .system-node').forEach(node=>{const d=sysLabels[node.dataset.system];if(!d)return;const strong=node.querySelector('strong');const small=node.querySelector('small');if(strong)strong.textContent=d[0];if(small)small.textContent=d[1];});
  const core=$('#systems .system-core');if(core)core.innerHTML='<span>AI WORKFLOW</span><strong>营销工作流</strong><small>RESEARCH · CONTENT · OPERATIONS</small>';
  const sysPrinciple=$('#systems .systems-principle p');if(sysPrinciple)sysPrinciple.innerHTML='<strong>AI 用于提升效率与一致性</strong> 专业信息 品牌语气与最终输出仍由人工审核';

  const sysCopy={
    research:['01 / RESEARCH','研究与信息整理','用于竞品页面对比、长资料摘要、市场与受众信息整理，再回到原始资料确认关键结论。',['Market Scan','Competitor Review','Audience','Search','Brief']],
    content:['02 / CONTENT','内容生产与本地化','用于文案初稿、本地化、Campaign 延展与视频前期，再根据品牌语气、专业信息与实际场景继续修改。',['Campaign Copy','Localization','Visual Brief','Video','Content Variants']],
    workflow:['03 / WORKFLOW','流程与知识管理','将高频 Prompt、参考资料、模板与执行步骤整理为可复用流程，减少重复准备工作。',['Prompts','Templates','Knowledge Base','Automation','Workflow']]
  };
  function rewriteSystem(key){
    const d=sysCopy[key];const detail=$('#systems .system-detail');if(!d||!detail)return;
    detail.innerHTML=`<div class="system-detail-index">${d[0]}</div><h3>${d[1]}</h3><p>${d[2]}</p><div class="system-tags">${d[3].map(t=>`<span>${t}</span>`).join('')}</div>`;
  }
  rewriteSystem('research');
  $$('#systems .system-node').forEach(node=>['mouseenter','focus','click'].forEach(evt=>node.addEventListener(evt,()=>queueMicrotask(()=>rewriteSystem(node.dataset.system)))));

  html('#optimize .section-kicker','05 / 投放与优化 <small>PAID MEDIA & OPTIMIZATION</small>');
  text('#optimize .optimize-head .eyebrow','PAID MEDIA · TESTING · RETARGETING · LEAD GENERATION');
  html('#optimize .optimize-head h2','投放与优化');
  text('#optimize .optimize-head .zh-copy','通过 Campaign 数据评估受众响应、内容表现、预算分配与漏斗推进，并据此判断下一阶段应该继续放大、调整还是停止。');
  text('#optimize .optimize-head .lede-en','Performance analysis used to guide audience budget creative and campaign decisions.');
  const story=$('#optimize .optimize-story');
  if(story){
    text('h3','北美 Paid Media 策略调整',story);
    const p=story.querySelector(':scope > p');if(p)p.textContent='早期 Campaign 较快进入 Lead Generation，整体表现不理想。后续北美投放调整为 Awareness → Engagement → Retargeting → Lead Generation，先建立认知与互动，再承接高意向需求。';
    const before=story.querySelector('.optimize-shift-line > div:first-child strong');const after=story.querySelector('.optimize-shift-line > div:last-child strong');
    if(before)before.textContent='较早进入 Lead Generation';if(after)after.textContent='先建立 Awareness 与 Engagement';
  }
  const center=$('#optimize .optimize-center');if(center)center.innerHTML='<div><strong>持续优化</strong><small>OPTIMIZATION</small></div>';
  const stages={awareness:'品牌认知',engagement:'有效互动',retarget:'再营销',lead:'线索承接'};
  $$('#optimize .optimize-stage').forEach(node=>{const strong=node.querySelector('strong');if(strong&&stages[node.dataset.stage])strong.textContent=stages[node.dataset.stage];});
  const optPrinciple=$('#optimize .optimize-principle p');if(optPrinciple)optPrinciple.innerHTML='<strong>复盘的目的不是只看结果</strong> 而是明确下一阶段的受众 内容 预算与 Campaign 调整方向';

  const optCopy={
    awareness:['01 / AWARENESS','品牌认知','先让目标账户看到品牌与核心内容，为后续互动建立基础。'],
    engagement:['02 / ENGAGEMENT','有效互动','结合点击、视频观看与内容互动识别更高兴趣受众。'],
    retarget:['03 / RETARGETING','再营销','针对已产生互动的人群继续推送更具体的产品与 Campaign 信息。'],
    lead:['04 / LEAD GENERATION','线索承接','在已有认知与互动基础上进入更明确的 CTA 与 Lead Generation。']
  };
  function rewriteOptimize(key){
    const d=optCopy[key];const detail=$('#optimize .optimize-detail');if(!d||!detail)return;
    detail.innerHTML=`<span>${d[0]}</span><div><h4>${d[1]}</h4><p>${d[2]}</p></div>`;
  }
  rewriteOptimize('awareness');
  $$('#optimize .optimize-stage').forEach(node=>['mouseenter','focus','click'].forEach(evt=>node.addEventListener(evt,()=>queueMicrotask(()=>rewriteOptimize(node.dataset.stage)))));

  html('#about .section-kicker','06 / 关于我 <small>ABOUT</small>');
  text('#about .about-intro .eyebrow','GLOBAL DIGITAL MARKETING · B2C × B2B');
  html('#about .about-intro h2','海外数字营销经验');
  text('#about .about-intro .zh-copy','从 SHEIN / MOTF 的全球 B2C 社媒与 Influencer Marketing，到 Vazyme 的 B2B 内容策略、Paid Media、Campaign、视频与数据复盘，我的工作范围逐步从单一内容执行扩展到更完整的海外数字营销。');
  text('#about .about-intro .lede-en','Four years across global B2C and B2B marketing with experience spanning execution strategy and performance.');
  const aboutPoints=$$('#about .about-point');
  const aboutCopy=[
    ['EXECUTION','内容与执行','社媒内容、视频与 Paid Media 的实际执行经验，让策略判断始终建立在真实渠道与制作条件上。'],
    ['STRATEGY','策略与 Campaign','工作范围逐步扩展到 Campaign 规划、受众策略、Paid Media 与数据复盘。'],
    ['AI WORKFLOW','AI 工作流','将 AI 应用于研究、内容、本地化与重复流程，提高信息处理和生产效率。']
  ];
  aboutPoints.forEach((point,i)=>{const d=aboutCopy[i];if(!d)return;const small=point.querySelector('small');const h3=point.querySelector('h3');const p=point.querySelector('p');if(small)small.textContent=d[0];if(h3)h3.textContent=d[1];if(p)p.textContent=d[2];});
  const exp=$$('#about .experience-row');
  const expCopy=[
    ['SHEIN / MOTF','全球社媒 · Influencer · PR · B2C Growth','GLOBAL B2C'],
    ['Vazyme Biotech','内容策略 · Paid Media · Campaign · Video · B2B Brand','GLOBAL B2B'],
    ['Current Focus','海外数字营销 · Campaign Strategy · AI Workflow','NEXT STEP']
  ];
  exp.forEach((row,i)=>{const d=expCopy[i];if(!d)return;const strong=row.querySelector('strong');const p=row.querySelector('p');const small=row.querySelector('small');if(strong)strong.textContent=d[0];if(p)p.textContent=d[1];if(small)small.textContent=d[2];});
  const close=$('#about .about-close-copy');if(close)close.innerHTML='<span>CURRENT FOCUS</span><strong>海外数字营销<br><em>Campaign Strategy 与 AI Workflow</em></strong>';
  const back=$('#about .about-close .primary-btn');if(back)back.innerHTML='<span>返回顶部</span><small>BACK TO TOP ↑</small>';

  function refreshStrategy(){
    const strategy=$('#strategy');if(!strategy)return false;
    html('.section-kicker','04 / 策略与复盘 <small>STRATEGY & REVIEWS</small>',strategy);
    text('.strategy-head .eyebrow','CAMPAIGN PLANNING · PAID MEDIA · PRODUCT MARKETING',strategy);
    html('.strategy-head h2','策略与复盘',strategy);
    html('.strategy-head-copy','<p>选取真实项目中的策略规划、投放复盘与产品营销框架，并对涉及内部业务的信息进行脱敏处理。</p><small>SELECTED & SANITIZED FOR INTERVIEW USE</small>',strategy);
    const cards=$$('.strategy-card',strategy);
    const cardCopy=[
      ['NORTH AMERICA · LINKEDIN ABM','Account Reach to Sales Priority','北美 LinkedIn ABM 复盘','围绕账户触达、互动与 Sales Ready 信号梳理销售跟进优先级','查看复盘'],
      ['PRODUCT CAMPAIGN PLAN','Teaser Launch Follow Up','产品 Campaign 规划','围绕 Teaser、Launch 与后续内容明确不同阶段的传播重点','查看规划'],
      ['PRODUCT MARKETING','Benefits Evidence Education','产品营销框架','围绕产品卖点、技术证据、教育内容与客户案例规划内容方向','查看框架']
    ];
    cards.forEach((card,i)=>{const d=cardCopy[i];if(!d)return;const mark=card.querySelector('.doc-mark');const preview=card.querySelector('.doc-sheet strong');const h3=card.querySelector('h3');const p=card.querySelector('p');const footer=card.querySelector('.strategy-card-footer span');if(mark)mark.textContent=d[0];if(preview)preview.textContent=d[1];if(h3)h3.textContent=d[2];if(p)p.textContent=d[3];if(footer)footer.textContent=d[4];});
    const note=$('.strategy-note p',strategy);if(note)note.innerHTML='<strong>前面的作品展示最终输出</strong> 这里补充项目中的策略规划与复盘内容';
    const nav=$('.topbar nav a[href="#strategy"]');if(nav)nav.innerHTML='<span>策略与复盘</span><small>STRATEGY</small>';
    return true;
  }
  if(!refreshStrategy()){
    const observer=new MutationObserver(()=>{if($('#strategy')){queueMicrotask(refreshStrategy);observer.disconnect();}});
    observer.observe(document.body,{childList:true,subtree:true});
  }else queueMicrotask(refreshStrategy);

  $('[data-modal="fmr"]')?.addEventListener('click',()=>queueMicrotask(()=>{
    const content=$('#modalContent');if(!content)return;
    const title=content.querySelector('h2');if(title)title.innerHTML='FMR 5S Campaign<br><span style="color:#eadfff">Teaser Launch Follow Up</span>';
  }));
})();
