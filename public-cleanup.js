(() => {
  const INTERNAL_PATTERNS = [
    /WHAT THIS SHOWS/i,
    /SELECTED\s*&\s*SANITIZED/i,
    /INTERVIEW VIEW/i,
    /FOR INTERVIEW USE/i,
    /SANITIZED/i,
    /脱敏/,
    /公开版本/,
    /不公开目标公司/,
    /原始业务资料不直接公开/,
    /内部业务信息/,
    /这里补充项目中的策略规划与复盘内容/
  ];

  function hasInternalText(el){
    const t=(el?.textContent||'').trim();
    return INTERNAL_PATTERNS.some(re=>re.test(t));
  }

  function cleanStrategy(){
    const strategy=document.querySelector('#strategy');
    if(!strategy) return;

    strategy.querySelectorAll('.strategy-note').forEach(el=>el.remove());
    strategy.querySelectorAll('.private-badge').forEach(el=>el.remove());

    const headCopy=strategy.querySelector('.strategy-head-copy');
    if(headCopy && hasInternalText(headCopy)){
      headCopy.innerHTML='<p>包含真实项目中的策略规划、投放复盘与产品营销框架，重点呈现判断逻辑、方法结构与下一步动作。</p>';
    }

    strategy.querySelectorAll('.strategy-card-footer span').forEach(el=>{
      if(/脱敏/i.test(el.textContent||'')) el.textContent='查看策略摘要';
    });

    strategy.querySelectorAll('small,span,p,div').forEach(el=>{
      if(el.children.length===0 && hasInternalText(el)) el.remove();
    });
  }

  function cleanModal(){
    const modal=document.querySelector('.strategy-modal');
    if(!modal) return;

    modal.querySelectorAll('.private-badge').forEach(el=>el.remove());

    const type=modal.querySelector('.strategy-view-left > span');
    if(type && /SANITIZED/i.test(type.textContent||'')){
      type.textContent=(type.textContent||'')
        .replace(/\s*·\s*SANITIZED REVIEW/gi,' · REVIEW')
        .replace(/\s*·\s*SANITIZED DOCUMENT/gi,' · DOCUMENT')
        .replace(/\s*·\s*SANITIZED FRAMEWORK/gi,' · FRAMEWORK')
        .replace(/SANITIZED\s*/gi,'')
        .trim();
    }

    const intro=modal.querySelector('.strategy-view-left p');
    if(intro && hasInternalText(intro)){
      const title=(modal.querySelector('.strategy-view-left h3')?.textContent||'').trim();
      if(/投放数据|account priority/i.test(title)){
        intro.textContent='北美 LinkedIn ABM 第二期复盘，聚焦账户触达、互动信号、销售优先级与后续跟进动作。';
      } else if(/阶段目标|campaign/i.test(title)){
        intro.textContent='围绕预热、爆发与长尾三个阶段设计内容功能，并根据阶段目标决定信息与物料角色。';
      } else {
        intro.textContent='产品营销框架，覆盖卖点、技术证据、教育内容与客户案例等持续沟通角度。';
      }
    }

    modal.querySelectorAll('*').forEach(el=>{
      if(el.children.length===0 && hasInternalText(el)) el.remove();
    });
  }

  function cleanAll(){
    cleanStrategy();
    cleanModal();
  }

  cleanAll();
  const observer=new MutationObserver(()=>queueMicrotask(cleanAll));
  observer.observe(document.documentElement,{childList:true,subtree:true,characterData:true});
})();
