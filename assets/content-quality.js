/* Islamic Deen Companion: additive quality improvements. Existing source content is retained. */
(function(){
  'use strict';
  const ready=()=>{
    const clean=s=>(s||'').replace(/\s+/g,' ').trim();
    const panels=[...document.querySelectorAll('section.panel[id]')];
    const nav=document.querySelector('#tabs');
    if(!nav||!panels.length)return;
    const toolbar=document.createElement('div');
    toolbar.id='deen-quality-tools';
    toolbar.innerHTML='<label for="deen-topic-search">Search topics · موضوع تلاش کریں</label><input id="deen-topic-search" type="search" autocomplete="off" placeholder="Search English, Urdu or Arabic..." aria-controls="deen-topic-results"><div id="deen-topic-results" role="status" aria-live="polite"></div>';
    nav.insertAdjacentElement('afterend',toolbar);
    const css=document.createElement('style');
    css.textContent='#deen-quality-tools{max-width:1100px;margin:12px auto 20px;padding:12px 16px;background:#f6f4e9;border:1px solid #c8d4bc;border-radius:12px;color:#163f2b}#deen-quality-tools label{display:block;font-weight:700;margin-bottom:6px}#deen-topic-search{width:100%;padding:10px 12px;border:1px solid #9eae9b;border-radius:7px;font:inherit}#deen-topic-results{max-height:260px;overflow:auto}#deen-topic-results button{display:block;text-align:left;width:100%;padding:9px;margin-top:4px;background:white;color:#163f2b;border:1px solid #d8dfd2;border-radius:6px;cursor:pointer}#deen-topic-results button:hover,#deen-topic-results button:focus{background:#e8f3e5}#deen-topic-results small{display:block;color:#526355} .deen-added-translation{margin:5px 0;padding:6px 10px;border-left:3px solid #487a50;background:#f4f8f1}';
    document.head.appendChild(css);
    const input=toolbar.querySelector('input'),results=toolbar.querySelector('#deen-topic-results');
    const entries=panels.map(p=>({id:p.id,text:clean(p.textContent),title:clean(nav.querySelector('[data-tab="'+p.id+'"]')?.textContent)||p.id}));
    input.addEventListener('input',()=>{
      results.replaceChildren();
      const q=clean(input.value).toLocaleLowerCase();if(q.length<2)return;
      const found=entries.filter(e=>e.title.toLocaleLowerCase().includes(q)||e.text.toLocaleLowerCase().includes(q)).slice(0,20);
      if(!found.length){results.textContent='No matching sections · کوئی نتیجہ نہیں';return;}
      found.forEach(e=>{const b=document.createElement('button');b.type='button';b.textContent=e.title;const ix=e.text.toLocaleLowerCase().indexOf(q);const snippet=document.createElement('small');snippet.textContent=ix>=0?'…'+e.text.slice(Math.max(0,ix-55),ix+q.length+95)+'…':'';b.appendChild(snippet);b.addEventListener('click',()=>{const tab=nav.querySelector('[data-tab="'+e.id+'"]');if(tab)tab.click();input.value='';results.replaceChildren();});results.appendChild(b);});
    });
    // Direct bilingual translations are now preserved in index.html rather than injected at runtime.
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();