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
  const systemLabels={research:['研究与整理','RESEARCH'],content:['内容制作','CONTENT'],workflow:['流程与知识','WORKFLOW']};
  $$('#systems .system-node').forEach(node=>{
    const d=systemLabels[node.dataset.system];if(!d)return;
    node.querySelector('strong')&&(node.querySelector('strong').textContent=d[0]);
    node.querySelector('small')&&(node.querySelector('small').textContent=d[1]);
  });
  const core=$('#systems .system-core');
  if(core)core.innerHTML='<span>AI + WORKFLOW</span><strong>日常营销</strong><small>HOW I USE IT</small>';
  const principle=$('#systems .systems-principle p');
  if(principle)principle.innerHTML='<strong>能省时间的地方我会用 AI。</strong> 但信息是不是对、语气像不像人、最后能不能用，还是要自己过一遍。';

  const systemCopy={
    research:['01 / RESEARCH','资料多的时候，先帮我整理。','市场资料、竞品页面、受众信息会先用 AI 做归纳和对比，我再回到原始信息里确认重点。',['Market Scan','Competitor Review','Audience','Search','Brief']],
    content:['02 / CONTENT','先起一版，再自己改。','文案初稿、本地化、Campaign 延展和视频前期都会用到 AI。它适合加快第一版，但最终语气和专业信息要自己收。',['Campaign Copy','Localization','Visual Brief','Video','Content Reuse']],
    workflow:['03 / WORKFLOW','重复做的事情，就尽量做成流程。','常用 Prompt、资料、模板和步骤会留成可重复使用的流程，下一次不用重新从零开始。',['Prompt','Template','Knowledge Base','Automation','Workflow']]
  };
  function rewriteSystemDetail(key){
    const d=systemCopy[key];const detail=$('#systems .system-detail');if(!d||!detail)return;
    detail.innerHTML=`<div class="system-detail-index">${d[0]}</div><h3>${d[1]}</h3><p>${d[2]}</p><div class="system-tags">${d[3].map(t=>`<span>${t}</span>`).join('')}</div>`;
  }
  rewriteSystemDetail('research');
  $$('#systems .system-node').forEach(node=>['mouseenter','focus','click'].forEach(evt=>node.addEventListener(evt,()=>queueMicrotask(()=>rewriteSystemDetail(node.dataset.system)))));

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

  const optimizeCopy={
    awareness:['01 / AWARENESS','先让目标受众知道你是谁。','B2B 的转化通常没那么快，所以第一步先把品牌和内容送到对的人面前。'],
    engagement:['02 / ENGAGEMENT','再看谁真的有兴趣。','点击、视频观看和内容互动会比单纯曝光更有用，可以帮我判断后面该重点跟哪一批人。'],
    retarget:['03 / RETARGETING','对互动过的人继续讲。','已经看过或点过内容的人，会再看到更具体的信息，而不是所有人一直看同一条广告。'],
    lead:['04 / LEAD GENERATION','最后再去接 Leads。','前面已经有认知和互动，再用更明确的 CTA 和表单承接需求，线索质量通常会更好。']
  };
  function rewriteOptimizeDetail(key){
    const d=optimizeCopy[key];const detail=$('#optimize .optimize-detail');if(!d||!detail)return;
    detail.innerHTML=`<span>${d[0]}</span><div><h4>${d[1]}</h4><p>${d[2]}</p></div>`;
  }
  rewriteOptimizeDetail('awareness');
  $$('#optimize .optimize-stage').forEach(node=>['mouseenter','focus','click'].forEach(evt=>node.addEventListener(evt,()=>queueMicrotask(()=>rewriteOptimizeDetail(node.dataset.stage)))));

  const strategy=$('#strategy');
  if(strategy){
    const title=$('.strategy-head h2',strategy);if(title)title.innerHTML='不只放成品，<br><em>也放一些项目里的做法。</em>';
    const copy=$('.strategy-head-copy',strategy);if(copy)copy.innerHTML='<p>这里放的是几份脱敏后的项目复盘和工作文档。重点不是展示一套“方法论”，而是让人看得出我在具体项目里怎么安排 Campaign、怎么看投放、怎么组织产品内容。</p><small>Selected project reviews and working documents, sanitized for interview use.</small>';
    const note=$('.strategy-note p',strategy);if(note)note.innerHTML='<strong>这些文档和前面的作品是同一批工作。</strong> 前面看最后做出来什么，这里看项目当时是怎么安排的。';
    const cards=$$('.strategy-card',strategy);
    const cardCopy=[
      ['北美 LinkedIn ABM 第二期复盘','除了 CTR 和 Leads，我还会看目标公司到底有没有被触达、哪些账户已经有互动，以及哪些更值得销售继续跟进。','查看复盘摘要'],
      ['重点产品宣发路径','把一个产品 Campaign 分成预热、Launch 和后续内容，不同阶段用不同素材，不是把一堆帖子排进日历就结束。','查看项目安排'],
      ['产品宣传框架','把产品内容拆成卖点、技术解释、使用场景、教育内容和客户案例，避免每次都只重复同一条卖点。','查看内容框架']
    ];
    cards.forEach((card,i)=>{const d=cardCopy[i];if(!d)return;card.querySelector('h3')&&(card.querySelector('h3').textContent=d[0]);card.querySelector('p')&&(card.querySelector('p').textContent=d[1]);card.querySelector('.strategy-card-footer span')&&(card.querySelector('.strategy-card-footer span').textContent=d[2]);});

    const strategyModalCopy={
      abm:{title:'北美 LinkedIn ABM 第二期复盘',intro:'这版只保留经过脱敏的项目结构和结果，不展示完整目标公司名单。',blocks:[['当时怎么看','不只看 CTR 和 Leads。','这类投放首先要确认广告有没有真正触达到目标公司，以及哪些账户已经开始互动。'],['第二期看到什么','49 家核心目标企业中，33 家已经触达，9 家产生互动。','在这个基础上继续看员工触达和互动情况，再区分哪些账户值得优先跟进。'],['后面怎么用','把投放结果和销售优先级放到一起看。','高触达、高互动的账户优先给销售；已经触达但互动弱的继续培育；表现弱的再调整受众或内容。'],['后来怎么改','不再一开始就把所有人推向表单。','后续北美 Campaign 改成 Awareness、Engagement、Retargeting，再进入 Lead Generation。']]},
      campaign:{title:'重点产品宣发路径',intro:'这是当时用来安排产品 Campaign 节奏的工作框架。',blocks:[['Campaign 怎么分','预热、Launch、后续内容三个阶段。','预热先做互动和话题，Launch 集中讲产品核心信息，后面再补更专业的教育内容和长尾素材。'],['内容怎么配','不同内容有不同作用。','互动帖负责收集观点，视频和 KV 负责抓注意力，Brochure 承载更完整的产品信息，后续内容继续补场景和证明。'],['为什么这么排','不是为了凑发布数量。','我更在意每条内容在整个 Campaign 里承担什么任务，以及前后能不能接得起来。'],['频次','当时按一个月左右的 Campaign 周期安排。','大约每月 4–5 条内容，重点放在节奏和内容分工，不追求单纯堆量。']]},
      product:{title:'产品宣传框架',intro:'这份 XMind 主要用来避免产品宣传长期只剩“重复卖点”。',blocks:[['能讲什么','产品内容不只有功能和卖点。','还可以讲技术原理、使用场景、易用性、教程、奖项认证、客户案例和文献等。'],['专业信息怎么放','有数据的地方就用数据说话。','技术和性能内容尽量带实验结果；教学类内容补教程和使用技巧；客户案例和文献用于增加可信度。'],['形式怎么选','信息复杂度不同，形式也不同。','图文、视频、PDF、文章、投票、轮播和 Banner 都可以用，关键看这一条内容到底要讲多少信息。'],['平时怎么排','日常产品内容不需要发得特别密。','当时规划里会控制频次，避免同一产品连续堆内容，把不同角度分开讲。']]}
    };
    $$('.strategy-card',strategy).forEach(card=>card.addEventListener('click',()=>setTimeout(()=>{
      const key=card.dataset.playbook,d=strategyModalCopy[key],modal=$('.strategy-modal');if(!d||!modal)return;
      const left=modal.querySelector('.strategy-view-left');const right=modal.querySelector('.strategy-view-right');
      if(left){left.querySelector('span')&&(left.querySelector('span').textContent='PROJECT REVIEW · SANITIZED');left.querySelector('h3')&&(left.querySelector('h3').textContent=d.title);left.querySelector('p')&&(left.querySelector('p').textContent=d.intro);}
      if(right){right.querySelector(':scope > small')&&(right.querySelector(':scope > small').textContent='PROJECT NOTES');right.querySelector('h2')&&(right.querySelector('h2').textContent=d.title);const blocks=[...right.querySelectorAll('.strategy-block')];d.blocks.forEach((b,i)=>{const block=blocks[i];if(!block)return;block.querySelector('label')&&(block.querySelector('label').textContent=b[0]);block.querySelector('strong')&&(block.querySelector('strong').textContent=b[1]);block.querySelector('p')&&(block.querySelector('p').textContent=b[2]);});const cap=blocks[d.blocks.length];if(cap?.querySelector('label'))cap.querySelector('label').textContent='相关工作';}
    },0)));
  }

  const about=$('#about');
  if(about){
    setText('#about .eyebrow','SOCIAL · CONTENT · PAID MEDIA · CAMPAIGN · AI');
    setHTML('#about .about-intro h2','我是从社媒运营开始的，<br><em>后来做得越来越宽。</em>');
    setText('#about .about-intro .zh-copy','最开始在 SHEIN / MOTF 做全球社媒，后来到 Vazyme 做 B2B 海外数字营销，工作慢慢扩到内容、Paid Media、Campaign 和视频。现在我也会自己搭一些 AI 工作流，主要是为了把日常工作做得更快一点。');
    setText('#about .about-intro .lede-en','I started in global social media, moved into B2B digital marketing, and gradually expanded into paid media, campaigns, video and AI-assisted workflows.');
    const points=$$('#about .about-point');
    const pcopy=[
      ['我做过很多一线执行。','社媒发什么、视频怎么拍、素材怎么改、广告怎么跑，这些不是只在方案里写过。'],
      ['后来开始负责更多规划。','除了把事情做出来，也会参与 Campaign 节奏、内容重点、受众和 Paid Media 的调整。'],
      ['现在也会自己折腾 AI。','主要用在研究、整理、起稿和重复流程里。好用就留下，不好用就不用。']
    ];
    points.forEach((point,i)=>{const d=pcopy[i];if(!d)return;point.querySelector('h3')&&(point.querySelector('h3').textContent=d[0]);point.querySelector('p')&&(point.querySelector('p').textContent=d[1]);});
    const now=$('#about .experience-row:last-child');if(now){now.querySelector('strong')&&(now.querySelector('strong').textContent='AI-assisted Marketing');now.querySelector('p')&&(now.querySelector('p').textContent='把 AI 用进研究、内容和日常营销流程');now.querySelector('small')&&(now.querySelector('small').textContent='CURRENT FOCUS');}
    const close=$('#about .about-close-copy strong');if(close)close.innerHTML='内容。Campaign。投放。<br><em>还有一点 AI。</em>';
  }
})();
