(() => {
  const head=document.head;
  if(!document.querySelector('link[href*="strategy-v11.css"]')){
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href='./strategy-v11.css?v=11';
    head.appendChild(link);
  }

  const optimize=document.querySelector('#optimize');
  if(!optimize || document.querySelector('#strategy')) return;

  const section=document.createElement('section');
  section.id='strategy';
  section.className='strategy-section';
  section.innerHTML=`
    <div class="section-kicker">04 / 策略与方法库 <small>STRATEGY & PLAYBOOKS</small></div>
    <div class="strategy-head">
      <p class="eyebrow">STRATEGY · FRAMEWORK · REVIEW · PLAYBOOK</p>
      <h2>不只展示结果，<br><em>也展示我是怎么想的。</em></h2>
      <div class="strategy-head-copy">
        <p>这里放的是我真实工作中形成的策略、复盘与方法框架。原始业务资料不直接公开，只保留经过脱敏和重新整理后的关键结构。</p>
        <small>SELECTED & SANITIZED FOR INTERVIEW USE</small>
      </div>
    </div>

    <div class="strategy-library">
      <button class="strategy-card s1" data-playbook="abm">
        <div class="strategy-card-top"><span>01 / ABM & PERFORMANCE</span><b>CASE REVIEW</b></div>
        <div class="doc-preview">
          <div class="doc-sheet">
            <div class="doc-mark">NORTH AMERICA · LINKEDIN ABM</div>
            <strong>从 Account Reach 到 Sales Priority</strong>
            <div class="doc-mini-grid"><i></i><i></i><i></i></div>
            <small>Account Penetration · Engagement · Sales-Ready · Retargeting</small>
          </div>
        </div>
        <h3>北美 LinkedIn ABM 第二期复盘</h3>
        <p>把媒体数据进一步转成账户渗透、销售优先级与下一阶段动作。</p>
        <div class="strategy-meta"><span>Account Reach</span><span>Sales-Ready</span><span>Performance</span></div>
        <div class="strategy-card-footer"><span>查看脱敏策略摘要</span><b>↗</b></div>
      </button>

      <button class="strategy-card s2" data-playbook="campaign">
        <div class="strategy-card-top"><span>02 / CAMPAIGN STRATEGY</span><b>PLAYBOOK</b></div>
        <div class="doc-preview">
          <div class="doc-sheet">
            <div class="doc-mark">PRODUCT CAMPAIGN PATH</div>
            <strong>预热 → 爆发 → 长尾</strong>
            <div class="doc-flow"><i>TEASER</i><b>→</b><i>LAUNCH</i><b>→</b><i>LONG-TAIL</i></div>
            <small>Content Matrix · Creative Interaction · Seasonal Linkage</small>
          </div>
        </div>
        <h3>重点产品宣发路径</h3>
        <p>用阶段目标决定内容与物料角色，而不是把不同素材平铺成发布清单。</p>
        <div class="strategy-meta"><span>Campaign</span><span>Content Matrix</span><span>Funnel</span></div>
        <div class="strategy-card-footer"><span>查看方法框架</span><b>↗</b></div>
      </button>

      <button class="strategy-card s3" data-playbook="product">
        <div class="strategy-card-top"><span>03 / PRODUCT MARKETING</span><b>FRAMEWORK</b></div>
        <div class="doc-preview">
          <div class="doc-sheet">
            <div class="doc-mark">2024 PRODUCT MARKETING</div>
            <strong>产品宣传，不只是一条卖点。</strong>
            <div class="doc-map"><i></i><i></i><i></i></div>
            <small>Messaging · Evidence · Education · Content Format</small>
          </div>
        </div>
        <h3>产品宣传框架</h3>
        <p>从卖点、技术解释、易用性、教育内容到客户案例，建立更完整的产品内容视角。</p>
        <div class="strategy-meta"><span>Messaging</span><span>Content Format</span><span>Education</span></div>
        <div class="strategy-card-footer"><span>查看框架摘要</span><b>↗</b></div>
      </button>
    </div>

    <div class="strategy-note">
      <span>WHAT THIS SHOWS</span>
      <p><strong>作品证明我能做出来，策略文档证明我为什么这样做。</strong> 两者放在一起，才能完整呈现从执行到判断的方法。</p>
    </div>`;
  optimize.before(section);

  // Renumber downstream sections without changing their ids.
  const optimizeKicker=optimize.querySelector('.section-kicker');
  if(optimizeKicker) optimizeKicker.innerHTML='05 / 优化 <small>PERFORMANCE & OPTIMIZATION</small>';
  const about=document.querySelector('#about');
  const aboutKicker=about?.querySelector('.section-kicker');
  if(aboutKicker) aboutKicker.innerHTML='06 / 关于我 <small>ABOUT</small>';

  // Insert nav item before Optimize.
  const nav=document.querySelector('.topbar nav');
  const optimizeLink=nav?.querySelector('a[href="#optimize"]');
  if(nav && optimizeLink && !nav.querySelector('a[href="#strategy"]')){
    const a=document.createElement('a');
    a.href='#strategy';
    a.innerHTML='<span>策略库</span><small>PLAYBOOKS</small>';
    optimizeLink.before(a);
  }

  const modal=document.createElement('dialog');
  modal.className='strategy-modal';
  modal.innerHTML='<button class="strategy-modal-close" aria-label="关闭">×</button><div class="strategy-modal-content"></div>';
  document.body.appendChild(modal);
  const modalContent=modal.querySelector('.strategy-modal-content');
  modal.querySelector('.strategy-modal-close').addEventListener('click',()=>modal.close());
  modal.addEventListener('click',e=>{if(e.target===modal) modal.close();});

  const playbooks={
    abm:{
      type:'ABM & PERFORMANCE · SANITIZED REVIEW',
      title:'从投放数据，到销售优先级。',
      intro:'北美 LinkedIn ABM 第二期复盘。公开版本只保留方法、结构和经脱敏的结果，不公开目标公司完整名单与内部业务信息。',
      blocks:[
        ['CONTEXT','不是只看 CTR 或 Leads。','面向核心目标账户进行持续触达，需要判断广告是否真正进入目标公司，以及哪些账户已经从“看见”走向“互动”。'],
        ['KEY SIGNAL','账户渗透比单次点击更重要。','第二期复盘把账户触达、账户互动、决策层覆盖和销售优先级放在一起看。49 家核心目标企业中有 33 家已触达，9 家产生互动，并进一步形成 Sales-Ready 与 Promising 分层。'],
        ['DECISION','把媒体表现转成销售动作。','通过员工触达率 × 员工互动率建立四象限，将账户区分为 Sales-Ready、Promising、Emerging 与 Disengaged，从而决定销售优先跟进、持续培育或调整内容。'],
        ['LEARNING','B2B 获客需要持续培育。','长期数据体现出账户渗透是累积过程：先建立认知和互动，再承接更明确的 Lead Generation，比一开始直接要求留资更符合 B2B 决策路径。']
      ],
      chips:['LinkedIn ABM','Account Penetration','Sales Priority','Retargeting','Lead Generation']
    },
    campaign:{
      type:'CAMPAIGN STRATEGY · PLAYBOOK',
      title:'用阶段目标决定内容角色。',
      intro:'重点产品宣发路径。不是“每月发几条内容”的排期，而是围绕预热、爆发、长尾三个阶段设计内容功能。',
      blocks:[
        ['STRUCTURE','一个 Campaign 周期分成三个阶段。','预热期负责收集用户观点、制造认知入口；爆发期集中强化核心卖点与视觉锚点；长尾期用更专业、更可信的内容深化认知并延续热度。'],
        ['CONTENT MATRIX','主线内容之外，还需要不同功能的辅助内容。','内容矩阵由主线内容、辅助内容、创意互动与节日联动构成，让“专业信息”“注意力获取”“话题延续”各自承担不同任务。'],
        ['MATERIAL ROLE','物料不是格式，而是战略用途。','投票用于收集观点和痛点；创意视频与创意海报用于激发兴趣；彩页承载 Protocol、数据和技术信息；视频展示方案流程或客户证言；长尾海报用于社交证明与热度维持。'],
        ['CADENCE','节奏优先于堆量。','框架以一个月为 Campaign 周期，每月约 4–5 条内容，重点是阶段衔接和内容角色，而不是单纯增加发布频次。']
      ],
      chips:['Teaser','Launch','Long-tail','Content Matrix','Creative Interaction']
    },
    product:{
      type:'PRODUCT MARKETING · FRAMEWORK',
      title:'把产品宣传从“卖点”扩展成内容体系。',
      intro:'2024 产品宣传 XMind 的核心价值，是把产品内容从单一功能介绍扩展到多个可持续沟通的角度。',
      blocks:[
        ['MESSAGE ANGLES','一个产品可以从多个证据维度被理解。','框架包含产品上新、优势解读、技术原理、创新性、易用性、奖项与认证、优惠/组合、教学赋能与客户案例等内容角度。'],
        ['EVIDENCE','专业产品需要证据支撑。','在优势、技术和创新性内容中，框架强调融入实验数据；在教学内容中增加教程、指南、使用技巧与问题解决方案；客户案例则通过文献引用、获奖信息或真实案例增强可信度。'],
        ['FORMAT SYSTEM','内容形式服务于信息复杂度。','可使用图文、视频、PDF 下载、文章、投票、活动贴、多图轮播与 Banner 等形式，不把所有信息压进同一种内容模板。'],
        ['CADENCE','产品内容需要持续规划。','XMind 中还包含宣传周期与发布频次规划，例如日常发布节奏控制在一周不超过两条，避免内容堆叠。']
      ],
      chips:['Messaging','Technical Evidence','Education','Customer Proof','Content Formats']
    }
  };

  function openPlaybook(key){
    const d=playbooks[key];
    if(!d) return;
    modalContent.innerHTML=`
      <div class="strategy-view">
        <aside class="strategy-view-left">
          <span>${d.type}</span>
          <h3>${d.title}</h3>
          <p>${d.intro}</p>
          <div class="private-badge">脱敏展示 · INTERVIEW VIEW</div>
        </aside>
        <div class="strategy-view-right">
          <small>STRATEGIC THINKING</small>
          <h2>${d.title}</h2>
          ${d.blocks.map(b=>`<div class="strategy-block"><label>${b[0]}</label><strong>${b[1]}</strong><p>${b[2]}</p></div>`).join('')}
          <div class="strategy-block"><label>CAPABILITIES</label><div class="chips">${d.chips.map(c=>`<span>${c}</span>`).join('')}</div></div>
        </div>
      </div>`;
    modal.showModal();
  }
  section.querySelectorAll('[data-playbook]').forEach(card=>card.addEventListener('click',()=>openPlaybook(card.dataset.playbook)));

  // Smooth nav and active-state support for the dynamically inserted section.
  nav?.querySelector('a[href="#strategy"]')?.addEventListener('click',e=>{
    e.preventDefault();
    section.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  });
  const strategyNav=nav?.querySelector('a[href="#strategy"]');
  if(strategyNav && 'IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          nav.querySelectorAll('a').forEach(a=>a.classList.remove('is-active'));
          strategyNav.classList.add('is-active');
        }
      });
    },{rootMargin:'-22% 0px -58% 0px',threshold:.08});
    io.observe(section);
  }
})();
