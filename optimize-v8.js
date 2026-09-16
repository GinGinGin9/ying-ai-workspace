(() => {
  const root=document.querySelector('#optimize');
  if(!root) return;
  const stages=[...root.querySelectorAll('.optimize-stages > article')];
  if(!stages.length) return;

  function activate(key){
    stages.forEach(stage=>stage.classList.toggle('active',stage.dataset.stage===key));
  }

  stages.forEach(stage=>{
    ['mouseenter','focus','click'].forEach(evt=>stage.addEventListener(evt,()=>activate(stage.dataset.stage)));
  });

  activate('awareness');
})();
