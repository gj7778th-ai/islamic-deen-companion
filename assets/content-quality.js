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
    css.textContent='#deen-quality-tools{max-width:1100px;margin:12px auto 20px;padding:12px 16px;background:#f6f4e9;border:1px solid #c8d4bc;border-radius:12px;color:#163f2b}#deen-quality-tools label{display:block;font-weight:700;margin-bottom:6px}#deen-topic-search{width:100%;padding:10px 12px;border:1px solid #9eae9b;border-radius:7px;font:inherit}#deen-topic-results{max-height:260px;overflow:auto}#deen-topic-results button{display:block;text-align:left;width:100%;padding:9px;margin-top:4px;background:white;color:#163f2b;border:1px solid #d8dfd2;border-radius:6px;cursor:pointer}#deen-topic-results button:hover,#deen-topic-results button:focus{background:#e8f3e5}#deen-topic-results small{display:block;color:#526355} .deen-cross-reference{font-size:.83rem;margin:5px 0 12px;padding:5px 8px;border-left:2px solid #8ba58c;color:#365447}.deen-cross-reference button{margin:2px 4px;padding:3px 7px;border:1px solid #c3d1c1;border-radius:5px;background:#fff;color:#234c32;cursor:pointer}.deen-cross-reference button:focus-visible{outline:2px solid #234c32} .deen-added-translation{margin:5px 0;padding:6px 10px;border-left:3px solid #487a50;background:#f4f8f1}';
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

    // Canonical repeated-passage cross-references; retain every quotation in its original context.
    const canonicalPassages=[{"id":"REP-001","arabic":"مَا كَانَ مُحَمَّدٌ أَبَآ أَحَدٍ مِّنْ رِّجَالِكُمْ وَلٰكِنْ رَّسُوْلَ اللّٰهِ وَخَاتَمَ النَّبِيّٖنَ","sections":["welcome","iman"],"source":"Qur'an 33:40","verification":"verse-location-identified; translation/edition check pending"},{"id":"REP-002","arabic":"سُبُّوْحٌ قُدُّوْسٌ رَّبُّ الْمَلٰٓئِكَةِ وَالرُّوْحِ","sections":["salah","salah"],"source":null,"verification":"citation and grading pending independent source verification"},{"id":"REP-003","arabic":"لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ","sections":["moresalah","dhikrduas"],"source":null,"verification":"citation and grading pending independent source verification"},{"id":"REP-004","arabic":"أَكْمَلُ الْمُؤْمِنِيْنَ إِيْمَانًا أَحْسَنُهُمْ خُلُقًا، وَخِيَارُكُمْ خِيَارُكُمْ لِنِسَآئِهِمْ","sections":["duties","ethics"],"source":null,"verification":"citation and grading pending independent source verification"},{"id":"REP-005","arabic":"لَا يُؤْمِنُ أَحَدُكُمْ حَتّٰى يُحِبَّ لِأَخِيْهِ مَا يُحِبُّ لِنَفْسِهٖ","sections":["duties","ethics"],"source":null,"verification":"citation and grading pending independent source verification"},{"id":"REP-006","arabic":"مَنْ قَرَأَ حَرْفًا مِّنْ كِتَابِ اللّٰهِ فَلَهٗ بِهٖ حَسَنَةٌ وَّالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا","sections":["sources","quranstructure"],"source":null,"verification":"citation and grading pending independent source verification"},{"id":"REP-007","arabic":"وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ","sections":["ethics","dhikrduas"],"source":"Qur'an 113:5","verification":"verse-location-identified; translation/edition check pending"},{"id":"REP-008","arabic":"اَلْحَمْدُ لِلّٰهِ الَّذِيْ بِنِعْمَتِهٖ تَتِمُّ الصَّالِحَاتُ","sections":["dhikrduas","dhikrduas"],"source":null,"verification":"citation and grading pending independent source verification"},{"id":"REP-009","arabic":"اَلْحَمْدُ لِلّٰهِ عَلٰى كُلِّ حَالٍ","sections":["dhikrduas","dhikrduas"],"source":null,"verification":"citation and grading pending independent source verification"}];
    const normaliseArabic=value=>(value||'').normalize('NFKC').replace(/[\\u064b-\\u065f\\u0670\\u06d6-\\u06ed\\u0640]/g,'').replace(/\\s+/g,' ').trim();
    const candidates=[...document.querySelectorAll('section.panel .arabic, section.panel .arabic-sm')];
    const refs=[];
    canonicalPassages.forEach(record=>{
      const quote=normaliseArabic(record.arabic);
      const occurrences=candidates.filter(el=>normaliseArabic(el.textContent)===quote);
      if(occurrences.length<2)return;
      occurrences.forEach((el,i)=>{
        const panel=el.closest('section.panel[id]');
        if(!panel)return;
        const anchor='deen-quote-'+record.id.toLowerCase()+'-'+(i+1);
        if(!el.id)el.id=anchor;
        const note=document.createElement('div');
        note.className='deen-cross-reference';
        const lead=document.createElement('span');
        lead.textContent='Related passage · متعلقہ مقام ('+record.id+') ';
        note.appendChild(lead);
        occurrences.forEach((other,j)=>{
          if(other===el)return;
          const targetPanel=other.closest('section.panel[id]');
          if(!targetPanel)return;
          const target='deen-quote-'+record.id.toLowerCase()+'-'+(j+1);
          const link=document.createElement('button');
          link.type='button';
          link.textContent=targetPanel.id===panel.id?'Same chapter · اسی باب میں':targetPanel.id;
          link.setAttribute('aria-label','Go to matching passage in '+targetPanel.id);
          link.addEventListener('click',()=>{
            if(targetPanel.id!==panel.id)nav.querySelector('[data-tab="'+targetPanel.id+'"]')?.click();
            requestAnimationFrame(()=>document.getElementById(target)?.scrollIntoView({behavior:'smooth',block:'center'}));
          });
          note.appendChild(link);
        });
        if(record.source){
          const citation=document.createElement('small');
          citation.textContent=' '+record.source+' (reference location identified; translation check pending)';
          note.appendChild(citation);
        }
        el.insertAdjacentElement('afterend',note);
      });
      refs.push({id:record.id,count:occurrences.length});
    });
    document.documentElement.dataset.deenCrossrefs=String(refs.length);

    // Direct bilingual translations are now preserved in index.html rather than injected at runtime.
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();