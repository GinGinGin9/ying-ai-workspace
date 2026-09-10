(() => {
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const setText=(s,t)=>{const el=$(s);if(el)el.textContent=t;};
  const setHTML=(s,h)=>{const el=$(s);if(el)el.innerHTML=h;};

  document.documentElement.lang='en';
  document.title='Ying / Global Digital Marketing Portfolio';
  const meta=$('meta[name="description"]');
  if(meta) meta.content='Global digital marketing portfolio spanning B2C and B2B content, social, campaigns, paid media, video and AI-supported workflows.';

  setText('.brand span','YING / MARKETING PORTFOLIO');
  setText('.brand small','GLOBAL DIGITAL MARKETING');

  const navCopy={
    '#workspace':['How I Work','PROCESS'],
    '#create':['Selected Work','WORK'],
    '#systems':['AI Workflow','AI'],
    '#strategy':['Strategy','REVIEWS'],
    '#optimize':['Performance','OPTIMIZE'],
    '#about':['About','ABOUT']
  };
  $$('.topbar nav a[href^="#"]').forEach(a=>{
    const d=navCopy[a.getAttribute('href')];
    if(d)a.innerHTML=`<span>${d[0]}</span><small>${d[1]}</small>`;
  });

  const world={
    research:['Research','RESEARCH','Market, audience and competitor research'],
    strategy:['Strategy','STRATEGY','Objectives, audiences and channel choices'],
    create:['Create','CREATE','Content, video and campaign assets'],
    build:['Workflow','WORKFLOW','Templates, AI tools and repeatable processes'],
    optimize:['Optimize','OPTIMIZE','Performance review and iteration']
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

  setText('.world-instruction span','Move around the workspace');
  setText('.world-instruction small','MOVE · HOVER · EXPLORE');
  setText('.scroll-hint span','Scroll to explore');
  setText('.scroll-hint small','SCROLL DOWN');

  setText('#entry .eyebrow','GLOBAL DIGITAL MARKETING · B2C & B2B · CONTENT · PAID · CAMPAIGNS');
  setHTML('#entry h1','Global marketing,<br>from content to campaigns.<br><em>Built on hands-on execution.</em>');
  setText('#entry .lede.zh-copy','Four years across global B2C and B2B marketing, spanning social, content, video, paid media and campaign planning. I started in execution and gradually took on more strategy, performance review and cross-functional work.');
  setText('#entry .lede-en','Experience across consumer and life-science marketing, with work delivered across multiple channels and formats.');
  const steps=$$('#entry .positioning-steps > div');
  const stepCopy=[
    ['Hands-on','CONTENT & EXECUTION','Social, content, video and day-to-day channel execution.'],
    ['Campaigns','CAMPAIGN & PAID','Campaign planning, audience targeting, paid media and performance review.'],
    ['AI Workflow','AI IN PRACTICE','Research, drafting, localization and repeatable tasks where AI genuinely saves time.']
  ];
  steps.forEach((el,i)=>{
    const d=stepCopy[i];if(!d)return;
    const strong=el.querySelector('strong');
    const small=el.querySelector('small');
    const p=el.querySelector('p');
    if(strong)strong.textContent=d[0];
    if(small)small.textContent=d[1];
    if(p)p.textContent=d[2];
  });
  const enter=$('#enterBtn');
  if(enter)enter.innerHTML='<span>Explore the work</span><small>SCROLL TO START ↓</small>';

  const workspace=$('#workspace');
  if(workspace){
    setHTML('#workspace .section-kicker','01 / HOW I WORK <small>PROCESS</small>');
    setText('#workspace .workspace-intro .eyebrow','RESEARCH · STRATEGY · CREATE · WORKFLOW · OPTIMIZE');
    setHTML('#workspace .workspace-intro h2','The work usually moves<br><em>through these five areas.</em>');
    setText('#workspace .section-note','Not every project follows the same order, but these are the areas I keep coming back to: research the market, set the direction, produce the work, improve the workflow and adjust based on results.');
    const cardCopy={
      research:['Research','MARKET & AUDIENCE','Market, audience, competitor and search research.'],
      strategy:['Strategy','PLANNING','Objectives, audience, channel mix and campaign direction.'],
      create:['Create','CONTENT & CREATIVE','Content, video and campaign assets.'],
      build:['Workflow','TOOLS & PROCESS','Templates, AI tools and repeatable processes.'],
      optimize:['Optimize','PERFORMANCE','Performance review, testing and iteration.']
    };
    $$('#workspace .cap-card').forEach(card=>{
      const d=cardCopy[card.dataset.cap];if(!d)return;
      const h3=card.querySelector('.cap-copy h3');
      const p=card.querySelector('.cap-copy p');
      if(h3)h3.innerHTML=`${d[0]} <small>${d[1]}</small>`;
      if(p)p.textContent=d[2];
    });
    const explore=$('#workspace .explore-create');
    if(explore)explore.innerHTML='<span>View selected work</span><small>SELECTED WORK ↓</small>';
  }

  setHTML('#create .section-kicker','02 / SELECTED WORK <small>CAMPAIGNS · CONTENT · VIDEO</small>');
  setText('#create .create-heading .eyebrow','CAMPAIGN · CONTENT · VIDEO · CREATIVE DIRECTION');
  setHTML('#create .create-heading h2','Selected work,<br><em>across different parts of the job.</em>');
  setText('#create .create-heading .zh-copy','A mix of projects I produced myself and work delivered with agencies. My role varies by project, so the ownership is kept clear throughout.');
  setText('#create .create-heading .lede-en','Campaign planning, social content, video production and brand-side creative direction.');

  const campaign=$('#create .campaign-copy');
  if(campaign){
    const label=campaign.querySelector('.micro-label');
    if(label)label.innerHTML='INTEGRATED CAMPAIGN <small>PRODUCT LAUNCH</small>';
    const zh=campaign.querySelector('.zh-copy');
    const en=campaign.querySelector('.lede-en');
    if(zh)zh.textContent='For the FMR-5S launch, I helped plan content across teaser, launch and follow-up education. Early content focused on engagement; launch content carried the main product story; follow-up pieces added product detail and kept the campaign moving.';
    if(en)en.textContent='Content planned across teaser, launch and follow-up product education.';
    const btn=campaign.querySelector('[data-modal="fmr"]');
    if(btn)btn.innerHTML='View campaign <small>VIEW CASE ↗</small>';
  }

  const stripHead=$('#create .strip-head');
  if(stripHead){
    const label=stripHead.querySelector('.micro-label');
    const h3=stripHead.querySelector('h3');
    const p=stripHead.querySelector(':scope > p');
    if(label)label.innerHTML='HANDS-ON PRODUCTION <small>VIDEO</small>';
    if(h3)h3.textContent='Video work I took from idea to final cut.';
    if(p)p.textContent='Concept, planning, production and editing across selected in-house projects.';
  }

  const videoCopy=[
    ['Product Operation Video','Concept · Production · Editing'],
    ['World Environment Day','Creative Concept · Content · Production'],
    ['Women & Girls in Science','Concept · Production · Editing'],
    ['PANDA Mini Valentine Campaign','Concept · Video · Social']
  ];
  $$('#create .video-tile').forEach((tile,i)=>{
    const d=videoCopy[i];if(!d)return;
    const h4=tile.querySelector('.tile-meta h4');
    const p=tile.querySelector('.tile-meta p');
    const play=tile.querySelector('.video-cover span');
    if(h4)h4.textContent=d[0];
    if(p)p.textContent=d[1];
    if(play)play.textContent='PLAY ↗';
  });

  const archive=$('#create .archive-copy');
  if(archive){
    const label=archive.querySelector('.micro-label');
    const h3=archive.querySelector('h3');
    const zh=archive.querySelector('.zh-copy');
    const en=archive.querySelector('.lede-en');
    if(label)label.innerHTML='SELECTED VISUAL WORK <small>SOCIAL & PRODUCT</small>';
    if(h3)h3.textContent='Selected social and product visuals.';
    if(zh)zh.textContent='Seasonal campaigns, product communication and interactive social assets across different formats and content needs.';
    if(en)en.textContent='A selection of visual work across social and product marketing.';
  }

  const directed=$('#create .directed-head');
  if(directed){
    const label=directed.querySelector('.micro-label');
    const h3=directed.querySelector('h3');
    const zh=directed.querySelector('.zh-copy');
    const en=directed.querySelector('.lede-en');
    if(label)label.innerHTML='AGENCY COLLABORATION <small>BRAND-SIDE ROLE</small>';
    if(h3)h3.textContent='Brand-side direction for agency-produced work.';
    if(zh)zh.textContent='I handled the creative brief, core messaging, creative direction, coordination and final review, making sure the finished work stayed accurate to the brand and product story.';
    if(en)en.textContent='Brief, messaging, creative direction, coordination and final review.';
  }
  const agencyTitles=['Extraction Instrument Series','Plate Reagent Commercial','Quantification Instrument Video','Vazyme Factory Story'];
  $$('#create .agency-list a').forEach((a,i)=>{
    const strong=a.querySelector('strong');
    if(strong&&agencyTitles[i])strong.textContent=agencyTitles[i];
  });

  setHTML('#systems .section-kicker','03 / AI WORKFLOW <small>AI IN PRACTICE</small>');
  setText('#systems .systems-head .eyebrow','RESEARCH · DRAFTING · LOCALIZATION · AUTOMATION');
  setHTML('#systems .systems-head h2','Where AI actually<br><em>fits into my work.</em>');
  setText('#systems .systems-head .zh-copy','I use AI mainly to speed up research, first drafts, localization, content variants and repetitive tasks. It helps me get to a workable first version faster; final messaging, accuracy and brand fit still need review.');
  setText('#systems .systems-head .lede-en','Practical use of AI across research, content and repeatable marketing tasks.');
  const systemLabels={research:['Research','RESEARCH'],content:['Content','CONTENT'],workflow:['Workflow','WORKFLOW']};
  $$('#systems .system-node').forEach(node=>{
    const d=systemLabels[node.dataset.system];if(!d)return;
    const strong=node.querySelector('strong');
    const small=node.querySelector('small');
    if(strong)strong.textContent=d[0];
    if(small)small.textContent=d[1];
  });
  const core=$('#systems .system-core');
  if(core)core.innerHTML='<span>AI IN PRACTICE</span><strong>Daily Work</strong><small>RESEARCH · CONTENT · OPS</small>';
  const principle=$('#systems .systems-principle p');
  if(principle)principle.innerHTML='<strong>I use AI when it improves speed or consistency.</strong> If it adds more checking than value, I leave it out.';

  const systemCopy={
    research:['01 / RESEARCH','Sort the inputs before I start writing.','I use AI to compare competitor pages, summarize long source material and organize audience or market notes. I still go back to the source before using anything important.',['Market Scan','Competitor Review','Audience','Search','Brief']],
    content:['02 / CONTENT','Get to a strong first draft faster.','Useful for first-pass copy, localization, campaign extensions and video pre-production. The final version is still edited for tone, context and accuracy.',['Campaign Copy','Localization','Visual Brief','Video','Content Variants']],
    workflow:['03 / WORKFLOW','Reduce repeat work.','Recurring prompts, references, templates and task steps are kept in reusable workflows so the next project starts with a better base.',['Prompts','Templates','Knowledge Base','Automation','Workflow']]
  };
  function rewriteSystemDetail(key){
    const d=systemCopy[key];const detail=$('#systems .system-detail');if(!d||!detail)return;
    detail.innerHTML=`<div class="system-detail-index">${d[0]}</div><h3>${d[1]}</h3><p>${d[2]}</p><div class="system-tags">${d[3].map(t=>`<span>${t}</span>`).join('')}</div>`;
  }
  rewriteSystemDetail('research');
  $$('#systems .system-node').forEach(node=>['mouseenter','focus','click'].forEach(evt=>node.addEventListener(evt,()=>queueMicrotask(()=>rewriteSystemDetail(node.dataset.system)))));

  setHTML('#optimize .section-kicker','05 / PERFORMANCE <small>PAID MEDIA & OPTIMIZATION</small>');
  setText('#optimize .optimize-head .eyebrow','PAID MEDIA · TESTING · RETARGETING · LEAD GENERATION');
  setHTML('#optimize .optimize-head h2','Use the data.<br><em>Then change the plan.</em>');
  setText('#optimize .optimize-head .zh-copy','I use performance data to answer practical questions: which audience is responding, which content is worth scaling, where budget should move and whether the next campaign needs a different sequence.');
  setText('#optimize .optimize-head .lede-en','Reporting is useful when it changes what happens next.');
  const story=$('#optimize .optimize-story');
  if(story){
    const h3=story.querySelector('h3');
    const p=story.querySelector(':scope > p');
    if(h3)h3.innerHTML='We asked for leads<br>too early.';
    if(p)p.textContent='Earlier paid campaigns moved into lead generation quickly and underperformed. In the North America campaign, we changed the sequence to Awareness → Engagement → Retargeting → Lead Generation. The longer warm-up worked better.';
    const before=story.querySelector('.optimize-shift-line > div:first-child strong');
    const after=story.querySelector('.optimize-shift-line > div:last-child strong');
    if(before)before.textContent='Move into Lead Generation early';
    if(after)after.textContent='Build awareness and engagement first';
  }
  const center=$('#optimize .optimize-center');
  if(center)center.innerHTML='<div><strong>Iterate</strong><small>NEXT ROUND</small></div>';
  const optimizeNodes={awareness:'Awareness',engagement:'Engagement',retarget:'Retargeting',lead:'Lead Generation'};
  $$('#optimize .optimize-stage').forEach(node=>{
    const strong=node.querySelector('strong');
    if(strong&&optimizeNodes[node.dataset.stage])strong.textContent=optimizeNodes[node.dataset.stage];
  });
  const optimizePrinciple=$('#optimize .optimize-principle p');
  if(optimizePrinciple)optimizePrinciple.innerHTML='<strong>The point of reporting is to decide what changes next.</strong> Audience, budget, creative or sequence — whatever the data points to.';

  const optimizeCopy={
    awareness:['01 / AWARENESS','Start by reaching the right accounts.','Build familiarity with useful brand and product content before asking for a form fill.'],
    engagement:['02 / ENGAGEMENT','Use behavior to narrow the audience.','Clicks, video views and content engagement help identify the people worth continuing with.'],
    retarget:['03 / RETARGETING','Follow up with a more specific message.','People who already engaged see deeper product or campaign content instead of the same top-of-funnel ad again.'],
    lead:['04 / LEAD GENERATION','Ask for the lead when intent is clearer.','Once there is some familiarity and engagement, a stronger CTA is more likely to produce useful leads.']
  };
  function rewriteOptimizeDetail(key){
    const d=optimizeCopy[key];const detail=$('#optimize .optimize-detail');if(!d||!detail)return;
    detail.innerHTML=`<span>${d[0]}</span><div><h4>${d[1]}</h4><p>${d[2]}</p></div>`;
  }
  rewriteOptimizeDetail('awareness');
  $$('#optimize .optimize-stage').forEach(node=>['mouseenter','focus','click'].forEach(evt=>node.addEventListener(evt,()=>queueMicrotask(()=>rewriteOptimizeDetail(node.dataset.stage)))));

  const about=$('#about');
  if(about){
    setHTML('#about .section-kicker','06 / ABOUT <small>EXPERIENCE</small>');
    setText('#about .about-intro .eyebrow','GLOBAL DIGITAL MARKETING · B2C & B2B');
    setHTML('#about .about-intro h2','I started in social.<br><em>The role kept getting broader.</em>');
    setText('#about .about-intro .zh-copy','At SHEIN / MOTF, I worked in global B2C social and influencer marketing. At Vazyme, I moved into B2B and added content strategy, paid media, campaign planning, video and performance review. Today I work across both execution and strategy, with AI built into parts of the workflow where it is genuinely useful.');
    setText('#about .about-intro .lede-en','Four years across global B2C and B2B marketing, with hands-on experience and growing strategic ownership.');
    const points=$$('#about .about-point');
    const pointCopy=[
      ['HANDS-ON','I still like being close to the work.','Social posts, copy, video, paid media and campaign assets give me a practical sense of what can actually be produced and shipped.'],
      ['BROADER SCOPE','The work expanded beyond content.','Campaign planning, audience strategy, paid media and performance review gradually became a larger part of my role.'],
      ['AI IN PRACTICE','AI is part of the process, not the pitch.','I use it for research, drafting, localization and repeatable tasks when it improves speed or consistency.']
    ];
    points.forEach((point,i)=>{
      const d=pointCopy[i];if(!d)return;
      const small=point.querySelector('small');const h3=point.querySelector('h3');const p=point.querySelector('p');
      if(small)small.textContent=d[0];if(h3)h3.textContent=d[1];if(p)p.textContent=d[2];
    });
    const exp=$$('#about .experience-row');
    const expCopy=[
      ['SHEIN / MOTF','Global Social · Influencer · PR · B2C Growth','GLOBAL B2C'],
      ['Vazyme Biotech','Content · Paid Media · Campaigns · Video · B2B Brand','GLOBAL B2B'],
      ['Current Focus','Execution · Strategy · AI-supported workflow','WHAT I BUILD ON NEXT']
    ];
    exp.forEach((row,i)=>{
      const d=expCopy[i];if(!d)return;
      const strong=row.querySelector('strong');const p=row.querySelector('p');const small=row.querySelector('small');
      if(strong)strong.textContent=d[0];if(p)p.textContent=d[1];if(small)small.textContent=d[2];
    });
    const closeCopy=$('#about .about-close-copy');
    if(closeCopy)closeCopy.innerHTML='<span>CURRENT FOCUS</span><strong>Hands-on execution.<br><em>Broader strategic ownership.</em></strong>';
    const back=$('#about .about-close .primary-btn');
    if(back)back.innerHTML='<span>Back to top</span><small>BACK TO START ↑</small>';
  }

  function refreshStrategy(){
    const strategy=$('#strategy');
    if(!strategy)return false;
    setHTML('#strategy .section-kicker','04 / STRATEGY & REVIEWS <small>PLANNING · PERFORMANCE · PRODUCT MARKETING</small>');
    setText('#strategy .strategy-head .eyebrow','CAMPAIGN PLANNING · PAID MEDIA · PRODUCT MARKETING');
    const title=$('.strategy-head h2',strategy);if(title)title.innerHTML='Selected strategy<br><em>and review work.</em>';
    const copy=$('.strategy-head-copy',strategy);if(copy)copy.innerHTML='<p>Sanitized working documents from real projects: a LinkedIn ABM review, a campaign plan and a product-marketing framework. They are included to show the planning behind the final assets.</p><small>SELECTED & SANITIZED FOR INTERVIEW USE</small>';

    const cards=$$('.strategy-card',strategy);
    const cardCopy=[
      ['NORTH AMERICA · LINKEDIN ABM','From Account Reach to Sales Priority','North America LinkedIn ABM Review','Reviewed account reach, engagement and sales-ready signals to decide where follow-up should focus.','View review'],
      ['PRODUCT CAMPAIGN PLAN','Teaser → Launch → Follow-up','Product Campaign Plan','Mapped content roles across teaser, launch and follow-up instead of treating the calendar as a list of posts.','View plan'],
      ['PRODUCT MARKETING','More than a feature list','Product Marketing Content Plan','Built content angles around product benefits, technical evidence, education and customer proof.','View framework']
    ];
    cards.forEach((card,i)=>{
      const d=cardCopy[i];if(!d)return;
      const mark=card.querySelector('.doc-mark');const preview=card.querySelector('.doc-sheet strong');const h3=card.querySelector('h3');const p=card.querySelector('p');const footer=card.querySelector('.strategy-card-footer span');
      if(mark)mark.textContent=d[0];if(preview)preview.textContent=d[1];if(h3)h3.textContent=d[2];if(p)p.textContent=d[3];if(footer)footer.textContent=d[4];
    });
    const note=$('.strategy-note p',strategy);if(note)note.innerHTML='<strong>The final creative shows what shipped.</strong> These documents show the planning behind it.';
    const nav=$('.topbar nav a[href="#strategy"]');if(nav)nav.innerHTML='<span>Strategy</span><small>REVIEWS</small>';

    const playbookCopy={
      abm:{
        type:'ABM & PERFORMANCE · SANITIZED REVIEW',title:'From media performance to account priority.',intro:'Sanitized review of a North America LinkedIn ABM campaign. Company names and internal details are removed; the structure and selected results are retained.',
        blocks:[
          ['CONTEXT','CTR and lead volume were not enough.','For a named-account campaign, we also needed to know whether ads were reaching target companies and which accounts were moving from exposure to engagement.'],
          ['SIGNAL','Account penetration became the more useful view.','The review combined account reach, engagement and decision-maker coverage. Of 49 priority accounts, 33 were reached and 9 engaged, then grouped for follow-up.'],
          ['ACTION','Turn the review into a sales list.','Accounts were grouped using employee reach and engagement rates to support sales follow-up, continued nurture or content changes.'],
          ['TAKEAWAY','B2B conversion needed more time.','The later approach gave more room for awareness and engagement before lead generation, which performed better than pushing for leads too early.']
        ],chips:['LinkedIn ABM','Account Penetration','Sales Priority','Retargeting','Lead Generation']
      },
      campaign:{
        type:'CAMPAIGN PLANNING · SANITIZED DOCUMENT',title:'Plan the campaign around stages, not post count.',intro:'A product campaign framework built around teaser, launch and follow-up.',
        blocks:[
          ['STRUCTURE','Teaser, launch, follow-up.','The teaser stage created an entry point and early interaction; launch concentrated the main product message; follow-up added detail, education and proof.'],
          ['CONTENT MIX','Each format had a job.','Polls and interactive posts helped generate engagement, launch visuals carried the main message, brochures handled technical detail, and later content extended the campaign.'],
          ['MATERIALS','Choose the asset based on the message.','Short social content worked for attention and interaction; longer formats were used when the audience needed more technical information or product context.'],
          ['CADENCE','Keep the campaign moving without overposting.','The plan used a small number of well-timed posts across the month, with each piece supporting a specific stage rather than adding volume for its own sake.']
        ],chips:['Teaser','Launch','Follow-up','Content Mix','Campaign Cadence']
      },
      product:{
        type:'PRODUCT MARKETING · SANITIZED FRAMEWORK',title:'Build a content plan beyond product features.',intro:'A product marketing map used to broaden the range of topics we could cover throughout the year.',
        blocks:[
          ['CONTENT ANGLES','A product can support more than one story.','The plan covered launches, product benefits, technical principles, ease of use, awards, educational content and customer examples.'],
          ['EVIDENCE','Technical claims need support.','Performance claims were paired with data where available, while educational content used tutorials, guides and troubleshooting to make the product easier to understand.'],
          ['FORMATS','Match the format to the information.','Posts, video, downloadable PDFs, articles, polls, carousels and banners were used for different levels of detail instead of forcing every message into the same template.'],
          ['CADENCE','Plan product content across the year.','The framework also mapped frequency and timing so product communication stayed consistent without crowding the channel.']
        ],chips:['Messaging','Technical Evidence','Education','Customer Proof','Content Formats']
      }
    };

    $$('.strategy-card',strategy).forEach(card=>{
      card.addEventListener('click',()=>queueMicrotask(()=>{
        const d=playbookCopy[card.dataset.playbook];
        const modal=$('.strategy-modal');const content=$('.strategy-modal-content');if(!d||!modal||!content)return;
        content.innerHTML=`<div class="strategy-view"><aside class="strategy-view-left"><span>${d.type}</span><h3>${d.title}</h3><p>${d.intro}</p><div class="private-badge">SANITIZED · INTERVIEW VIEW</div></aside><div class="strategy-view-right"><small>PROJECT NOTES</small><h2>${d.title}</h2>${d.blocks.map(b=>`<div class="strategy-block"><label>${b[0]}</label><strong>${b[1]}</strong><p>${b[2]}</p></div>`).join('')}<div class="strategy-block"><label>TOOLS & TOPICS</label><div class="chips">${d.chips.map(c=>`<span>${c}</span>`).join('')}</div></div></div></div>`;
      }));
    });
    return true;
  }

  if(!refreshStrategy()){
    const observer=new MutationObserver(()=>{
      if($('#strategy')){
        setTimeout(refreshStrategy,0);
        observer.disconnect();
      }
    });
    observer.observe(document.body,{childList:true,subtree:true});
  }else{
    setTimeout(refreshStrategy,0);
  }

  $('[data-modal="fmr"]')?.addEventListener('click',()=>queueMicrotask(()=>{
    const content=$('#modalContent');if(!content)return;
    content.innerHTML=`<div class="micro-label">FMR-5S · INTEGRATED CAMPAIGN</div><h2 style="font-family:Arial,sans-serif;font-weight:700;font-size:clamp(44px,6vw,82px);line-height:1.08;margin:16px 0 30px">FMR-5S Campaign Timeline<br><span style="color:#eadfff">Teaser → Launch → Follow-up</span></h2><div class="case-links"><a href="https://www.linkedin.com/feed/update/urn:li:activity:7478409013731401729" target="_blank" rel="noreferrer"><span>Teaser / Engagement · Quiz</span><b>↗</b></a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7482383387341807616" target="_blank" rel="noreferrer"><span>Teaser · Video</span><b>↗</b></a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7483822983317307392" target="_blank" rel="noreferrer"><span>Launch · Key Visual</span><b>↗</b></a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7485992349450305536" target="_blank" rel="noreferrer"><span>Product Education · Brochure</span><b>↗</b></a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7493586161316126720" target="_blank" rel="noreferrer"><span>Creative Extension · Video</span><b>↗</b></a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7500100034567254016" target="_blank" rel="noreferrer"><span>Launch · Hero Video</span><b>↗</b></a></div>`;
  }));
})();
