const t=document.querySelector('#menu'),n=document.querySelector('#nav');if(t&&n){t.addEventListener('click',()=>{const open=n.classList.toggle('open');t.setAttribute('aria-expanded',String(open))});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');t.setAttribute('aria-expanded','false')}))}const y=document.querySelector('#year');if(y)y.textContent=new Date().getFullYear();const v=document.querySelector('#intro-video');if(v){const src='https://andrew-nguyen-portfolio-vercel-1.vercel.app/assets/video/andrew-introduction.m3u8';if(v.canPlayType('application/vnd.apple.mpegurl'))v.src=src;else if(window.Hls&&Hls.isSupported()){const h=new Hls();h.loadSource(src);h.attachMedia(v)}}

/* Reviewed portfolio wording, 2026-11-18: copy only, original design retained. */
(() => {
  const run = () => {
    const one = (selector, root=document) => root.querySelector(selector);
    const many = (selector, root=document) => Array.from(root.querySelectorAll(selector));
    const set = (el, txt) => { if(el) el.textContent=txt; };
    const contribute = (el, txt) => {
      if(!el) return;
      const b=document.createElement('strong');
      b.textContent='My contribution:';
      el.replaceChildren(b, document.createTextNode(' '+txt));
    };
    set(one('.hero-intro'), 'I started in chemistry, where I learned to question results, check the evidence, and understand why things happen. Now, as a Wake Forest MSBA student, I’m combining that scientific mindset with business analytics, AI, and client-facing problem-solving. I want to help people make better decisions—and keep growing with the teams I work alongside.');
    const aboutTitle=many('section h2').find(h=>/chemistry.*analytics|why i moved|why i decided|my story|about me/i.test(h.textContent));
    if(aboutTitle){
      const parent=aboutTitle.closest('.story-v2-copy, .story-copy, .about-copy')||aboutTitle.parentElement;
      const ps=many('p',parent).filter(p=>!p.classList.contains('eyebrow'));
      set(ps[0],'I started in chemistry, where I learned to question results, trust the evidence, and understand why things happen. That curiosity eventually led me to business analytics.');
      set(ps[1],'At Wake Forest, I’m building on my research background through analytics, AI, and practical client work. I’ve also led outside the lab—as ECU Student Government Association vice president and founder of its Vietnamese Student Association. I want a career where I can solve meaningful problems, work with people, and grow with an organization.');
    }
    const details=[
      {re:/ecg|build.a.thon/i,kicker:'Healthcare AI · Model evaluation · First-place team',
       intro:'Our four-person team used an ensemble of three Siamese 1D ResNet encoders to match short clinical and Apple Watch ECG recordings. We placed first overall at the Wake Forest CAIR AI Build-a-Thon with a 0.97 combined competition AUC across 1,000 pairs.',
       my:'I independently evaluated the ensemble, checked patient-level separation and leakage risks, audited checkpoints, compared ensemble settings and recording lengths, and documented our evaluation. My teammates developed and trained the models.',
       value:'0.97',result:'combined competition AUC · first-place team'},
      {re:/fraud|deacon financial/i,kicker:'Financial services · Predictive modeling · Academic simulation',
       intro:'For a simulated banking challenge, I engineered 35 application-time predictors from 12 data exports and built five fraud-classification pipelines using 190,517 resolved applications. My XGBoost model achieved 0.872 test ROC-AUC and captured 62.7% of fraud in a simulated top-10% review queue.',
       my:'I built and compared five models, checked joins and data leakage, and translated model rankings into review-capacity trade-offs. I also collaborated on separate temporal-validation experiments with the team; these used a different evaluation design.',
       value:'0.872',result:'test ROC-AUC · five-model academic comparison'},
      {re:/toyota|battery manufacturing/i,kicker:'Operations analytics · Academic client practicum',
       intro:'As client liaison for a Wake Forest practicum with Toyota Battery Manufacturing North Carolina, I help frame how battery-winding process variables and inspection data might support earlier, more useful quality decisions. The work is in client discovery and analytical scoping.',
       my:'I coordinate client questions and follow-up, clarify proposed quality outcomes and traceability needs, and contributed to Toy Yoda, our team’s agentic AI workspace for shared knowledge, modeling questions, and reviewed project decisions.',
       value:'In progress',result:'client discovery · quality analytics requirements'},
      {re:/allegacy|credit union/i,kicker:'Client discovery · Strategy · Scorecard design',
       intro:'I’m exploring how Allegacy Credit Union and Wake Forest can better understand the value of their partnership. The work brings stakeholder feedback, engagement activities, and proposed measures together to support clearer conversations and decisions.',
       my:'I synthesized client discovery notes, helped develop an AI-assisted discussion deck and proposed scorecard, and suggested a small follow-up experiment for partnership events. The measures and recommendations have not been implemented.',
       value:'Discovery',result:'academic client project · measurement design'}
    ];
    for(const card of many('article.case-card')){
      const heading=one('h3',card)?.textContent||'';
      const item=details.find(d=>d.re.test(heading)); if(!item)continue;
      const content=one('.case-content',card)||card;
      set(one('.case-kicker',content),item.kicker);
      const desc=many(':scope > p',content).find(p=>!p.classList.contains('case-kicker')&&!p.classList.contains('case-contribution'));
      set(desc,item.intro);
      contribute(one('.case-contribution',content),item.my);
      const metric=one('.case-result',content);
      if(metric){set(one('strong',metric),item.value);set(one('span',metric),item.result);}
    }
    const experience=[
      [/graduate assistant/i,'Research cultural-heritage profiles and turn public sources into outreach briefs; revise campus communications and student-interview videos in response to staff feedback.'],
      [/laboratory contractor/i,'Verified EPA research-filter measurements and maintained traceable sample and workflow records for downstream review.'],
      [/associate scientist/i,'Reviewed Agilent MassHunter chromatographic data for out-of-specification results, supported deviation investigations, and maintained chain-of-custody and laboratory records.'],
      [/chemistry tutor/i,'Tutored general and organic chemistry students in individual and group sessions, making complex technical ideas easier to understand.'],
      [/fluid dynamics/i,'Supported modeling, simulation, and experimental research on vortex-ring and falling-sphere dynamics; trained technicians on procedures and safety.']
    ];
    for(const row of many('.experience-row')){
      const heading=one('h3',row)?.textContent||'';
      const entry=experience.find(([rx])=>rx.test(heading));
      if(entry)set(many(':scope > p',row)[0],entry[1]);
      if(/chemistry tutor/i.test(heading)){const span=one(':scope > span',row);if(span&&/2019/.test(span.textContent))set(span,'2019–21');}
    }
    set(one('.resume-panel p:not(.eyebrow)'),'My background spans Wake Forest business analytics, research and laboratory science, first-place ECG AI evaluation, fraud-risk modeling, and academic client projects. I also served as ECU student government vice president, founded its Vietnamese Student Association, and earned Eagle Scout recognition.');
    set(one('.contact-copy > p:not(.eyebrow)'),'I’m pursuing full-time opportunities beginning June 2027 in business analytics, strategy, consulting, business operations, and AI-enabled business roles. I’m open to relocation and especially interested in teams where I can keep learning, take ownership, and grow over time.');
    set(one('#work .section-heading h2'),'Projects that connect rigorous analysis with business decisions.');
    set(one('#work .section-heading-row > p'),'From first-place healthcare AI evaluation to fraud modeling and client discovery, I focus on what the evidence supports, how decisions are made, and where analysis can add value.');
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();
