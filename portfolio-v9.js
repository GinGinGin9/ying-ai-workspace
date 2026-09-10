(() => {
  const nav=[...document.querySelectorAll('.topbar nav a[href^="#"]')];
  const sections=nav.map(a=>({a,el:document.querySelector(a.getAttribute('href'))})).filter(x=>x.el);

  const setActive=id=>{
    nav.forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')===`#${id}`));
  };

  if(sections.length){
    const observer=new IntersectionObserver(entries=>{
      const visible=entries
        .filter(e=>e.isIntersecting)
        .sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible?.target?.id)setActive(visible.target.id);
    },{
      rootMargin:'-22% 0px -58% 0px',
      threshold:[0,.08,.2,.4,.65]
    });

    sections.forEach(({el})=>observer.observe(el));
    setActive(location.hash.replace('#','')||'workspace');
  }
})();
