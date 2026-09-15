window.startLearning = function (lang) {
  const root = document.getElementById('learningApp');
  if (!root) return;
  const C = window.LearningCore, c = window.LEARNING_COPY[lang];
  const e = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const $ = id => document.getElementById(id);
  const source = (window.LEARN_VIDEO_DATA?.items || []).filter(i => i.videoUrl && window.LESSON_NOTES[i.id]).map(item => {
    const [level,topic,phrase,example,zh,ar] = window.LESSON_NOTES[item.id];
    const result = {...item,level,topic,phrase,example,meaning: lang === 'zh' ? zh : lang === 'ar' ? ar : window.LESSON_MEANINGS[item.id]};
    if (item.id === 'A026') {
      result.prompt = 'What does “I feel sick” mean?';
      result.answers = ['I feel ill or nauseous.', 'I feel excited.', 'I feel hungry.', 'I feel relaxed.'];
      result.correctIndex = 0;
      if (lang === 'en') result.meaning = result.answers[0];
    }
    return result;
  });
  let storage;
  try { storage = window.localStorage; } catch { /* Private browsers may deny storage entirely. */ }
  let state = C.read(storage), mode = 'discover', ordered = [], active = 0, observer, toastTimer, dirty = false, quizItem, lastAnswer = null;
  let lessonDialog, prefDialog;
  const topicParam = new URLSearchParams(location.search).get('topic');
  if (C.TOPICS.includes(topicParam)) state.topics = [topicParam];
  let hashId = '';
  try { hashId = decodeURIComponent(location.hash.slice(1)); } catch { /* Ignore malformed shared links. */ }
  if (source.find(i => i.id === hashId)?.topic === 'culture' && !state.topics.includes('culture')) state.topics.push('culture');
  const topicName = topic => c.topics[C.TOPICS.indexOf(topic)] || c.topics[0];
  const getActive = () => ordered[active];
  const currentVideo = () => root.querySelector('.lesson-slide.is-current video');
  const persist = () => { if (!C.write(storage,state)) $('localNote').textContent = c.storageError; };
  function toast(text) {
    $('learningToast').textContent = text;
    $('learningToast').hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { $('learningToast').hidden = true; }, 2700);
  }
  root.innerHTML = `<section class="learning-header"><div><span class="editorial-kicker">${c.english} / tiktalk academy</span><h1>${c.title}</h1><p>${c.subtitle}</p></div><button class="button button-secondary" id="openPreferences">${c.preferences} <span aria-hidden="true">☷</span></button></section>
    <div class="learning-tabs"><div class="segmented" aria-label="${c.watch}"><button id="discoverTab" aria-pressed="true">${c.discover}</button><button id="reviewTab" aria-pressed="false">${c.review} <span id="reviewCount">0</span></button></div><a class="text-link" href="#learningProgress">${c.progress} ↓</a></div>
    <div class="learning-layout"><div class="watch-column"><div id="feedViewport" class="lesson-viewport" tabindex="0" aria-label="${c.watch}"><div id="feedTrack" class="lesson-track"></div></div><div class="feed-pagination"><button id="previousVideo" class="round-button" aria-label="${c.previous}">↑</button><span id="feedPosition"></span><button id="nextVideo" class="round-button" aria-label="${c.next}">↓</button></div></div>
    <aside id="learningProgress" class="progress-column"><section class="progress-card"><span class="editorial-kicker">${c.dailyWin}</span><div class="progress-value"><strong id="todayCount">0</strong><span id="todayGoal">/ 3</span><span class="progress-flower" aria-hidden="true">✳</span></div><p>${c.today}</p><div class="learning-meter" role="progressbar" aria-label="${c.today}" aria-valuemin="0" id="learningMeter"><span></span></div><p class="progress-caption" id="progressCaption"></p><div class="personal-totals"><div><strong id="recognizedCount">0</strong><small>${c.recognized}</small></div><div><strong id="savedCount">0</strong><small>${c.saved}</small></div></div></section>
    <section class="progress-card"><div class="shelf-title"><h2>${c.words}</h2><span aria-hidden="true">↗</span></div><div id="wordShelf"></div><button class="text-link" id="openReview">${c.moreWords} →</button></section>
    <section class="course-nudge"><span aria-hidden="true">一</span><h2>${c.courseTitle}</h2><p>${c.courseLead}</p><a class="text-link" href="products.html">${c.course} ↗</a></section><p class="local-note" id="localNote">${c.storage}</p></aside></div>
    <dialog class="learning-dialog" id="preferencesDialog" aria-labelledby="preferencesTitle"><div class="dialog-heading"><span class="editorial-kicker">${c.english}</span><button class="round-button" data-close="preferencesDialog" aria-label="${c.close}">×</button></div><h2 id="preferencesTitle">${c.prefTitle}</h2><p>${c.prefLead}</p><form id="preferencesForm"><fieldset><legend>${c.levelLabel}</legend><div class="choice-grid">${c.levels.map((label,i)=>`<label><input type="radio" name="level" value="${i+1}"><span>${label}</span></label>`).join('')}</div></fieldset><fieldset><legend>${c.topicLabel}</legend><div class="choice-grid topic-choices">${C.TOPICS.map((id,i)=>`<label><input type="checkbox" name="topic" value="${id}"><span>${c.topics[i]}</span></label>`).join('')}</div></fieldset><div class="pref-selects"><label>${c.goalLabel}<select name="goal">${[3,5,10].map(n=>`<option value="${n}">${n} ${c.goalUnit}</option>`).join('')}</select></label><label>${c.supportLabel}<select name="support">${['any','english','arabic'].map((x,i)=>`<option value="${x}">${c.supportOptions[i]}</option>`).join('')}</select></label></div><button type="submit" class="button button-primary button-full">${c.savePrefs} ↗</button><button id="skipPreferences" class="text-link button-full" type="button">${c.skip}</button><small>${c.storage}</small></form></dialog>
    <dialog class="learning-dialog" id="lessonDialog" aria-labelledby="lessonDialogTitle"><div class="dialog-heading"><span class="editorial-kicker">${c.checkTitle}</span><button class="round-button" data-close="lessonDialog" aria-label="${c.close}">×</button></div><h2 id="lessonDialogTitle"></h2><p id="lessonQuestion" lang="en" dir="ltr"></p><div id="lessonAnswers" class="learning-answers" lang="en" dir="ltr"></div><p id="lessonFeedback" role="status"></p><div id="lessonTakeaway" class="takeaway-card" hidden></div><div class="dialog-actions"><button id="retryQuestion" class="button button-secondary" hidden>${c.retry}</button><button id="saveFromQuiz" class="button button-secondary">${c.save}</button><button id="continueLearning" class="button button-primary">${c.finish}</button></div></dialog>
    <div id="learningToast" class="learning-toast" role="status" hidden></div>`;
  prefDialog = $('preferencesDialog'); lessonDialog = $('lessonDialog');
  function reason(i) { return mode === 'review' ? (C.due(i,state) ? c.due : c.savedButton) : i.level > C.targetLevel(state) ? c.stretch : state.topics.includes(i.topic) ? c.picked : c.explore; }
  function takeaway(i) { return `<span class="editorial-kicker">${c.takeaway}</span><strong lang="en" dir="ltr">${e(i.phrase)}</strong><p>${e(i.meaning)}</p><small>${c.example}</small><p class="example-line" lang="en" dir="ltr">${e(i.example)}</p>`; }
  function slide(i, index) {
    return `<article class="lesson-slide" data-id="${e(i.id)}" data-index="${index}" aria-label="${e(i.phrase)}"><div class="video-stage"><video playsinline loop muted preload="none" poster="${e(i.coverUrl || '')}" aria-label="${e(i.phrase)}"></video><div class="video-gradient"></div><div class="lesson-context"><span>${e(topicName(i.topic))}</span><span>${e(c.levels[i.level-1])}</span></div><div class="video-message" hidden><strong>${c.unavailable}</strong><p>${c.unavailableLead}</p><button data-action="retry" class="button button-secondary">${c.reload}</button></div><button class="video-play" data-action="play" aria-label="${c.pause}">Ⅱ</button><div class="video-caption"><small>${i.voice === 'Pure English' ? c.englishAudio : c.arabicAudio} · ${Math.round(i.durationSeconds || 0)}s</small><h2 lang="en" dir="ltr">${e(i.phrase)}</h2></div><div class="playback-bar"><button data-action="mute">${state.muted ? c.mute : c.sound}</button><button data-action="speed" aria-label="${c.speed}">${state.rate}×</button><button data-action="save" aria-pressed="${!!state.favorites[i.id]}">${state.favorites[i.id] ? '✓ '+c.savedButton : '＋ '+c.save}</button></div><div class="video-timeline"><span></span></div></div>
      <div class="lesson-action-card"><span class="recommendation-reason">✳ ${reason(i)}</span><div class="lesson-main-actions"><button data-action="quiz" class="button button-primary">${c.quiz} →</button><button data-action="notes" class="text-link">${c.seeNotes}</button></div><div class="pace-feedback"><button data-action="easy">${c.easy}</button><button data-action="hard">${c.hard}</button><button data-action="like" aria-pressed="${!!state.likes[i.id]}">${c.like}</button><button data-action="less">${c.less}</button></div></div></article>`;
  }
  function pauseAll() { root.querySelectorAll('video').forEach(v=>v.pause()); }
  function playCurrent() {
    if (document.hidden || prefDialog.open || lessonDialog.open) return;
    const v = currentVideo(); if (!v) return;
    v.muted = state.muted; v.playbackRate = state.rate;
    v.play().catch(() => { const button = v.closest('article').querySelector('[data-action="play"]'); button.textContent = '▶'; button.setAttribute('aria-label', c.play); });
  }
  function activate(index) {
    if (!ordered[index]) return;
    active = index;
    root.querySelectorAll('.lesson-slide').forEach((node,i)=> {
      node.classList.toggle('is-current', i === active);
      // Off-screen buttons must not steal the keyboard user's focus.
      node.inert = i !== active;
      const video = node.querySelector('video');
      if (i !== active) video.pause();
      if (i >= active && i <= active+1 && !video.getAttribute('src')) { video.src = ordered[i].videoUrl; video.preload = i === active ? 'auto' : 'metadata'; }
    });
    state.activeId = getActive().id;
    persist();
    history.replaceState(null,'',`${location.pathname}${location.search}#${encodeURIComponent(state.activeId)}`);
    $('feedPosition').textContent = `${active+1} ${c.number} ${ordered.length}`;
    $('previousVideo').disabled = active === 0;
    $('nextVideo').disabled = active === ordered.length-1;
    playCurrent();
  }
  function bindFeed() {
    observer?.disconnect();
    const viewport = $('feedViewport');
    observer = new IntersectionObserver(entries=> {
      const entry = entries.filter(x=>x.isIntersecting && x.intersectionRatio > .6).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if (entry && Number(entry.target.dataset.index) !== active) {
        const index = Number(entry.target.dataset.index);
        if (index > active && dirty && mode === 'discover') next(index-active);
        else activate(index);
      }
    },{root:viewport,threshold:[.6,.85]});
    root.querySelectorAll('.lesson-slide').forEach(node => {
      observer.observe(node);
      const v = node.querySelector('video');
      v.addEventListener('error',()=>{node.querySelector('.video-message').hidden=false; node.querySelector('.video-play').hidden=true;});
      v.addEventListener('playing',()=>{node.querySelector('.video-message').hidden=true; node.querySelector('.video-play').hidden=false; node.querySelector('.video-play').textContent='Ⅱ'; node.querySelector('.video-play').setAttribute('aria-label',c.pause);});
      v.addEventListener('pause',()=>{node.querySelector('.video-play').textContent='▶'; node.querySelector('.video-play').setAttribute('aria-label',c.play);});
      v.addEventListener('timeupdate',()=> {
        if (!Number.isFinite(v.duration) || !v.duration) return;
        node.querySelector('.video-timeline span').style.width = `${Math.min(100,v.currentTime/v.duration*100)}%`;
        if (v.currentTime/v.duration > .8 && node.classList.contains('is-current') && !document.hidden && !state.completed[node.dataset.id]) { state.completed[node.dataset.id]={at:Date.now(),date:C.day()}; persist(); }
      });
    });
  }
  function paintFeed() {
    pauseAll();
    $('feedTrack').innerHTML = ordered.map(slide).join('');
    $('feedViewport').scrollTop = 0;
    if (!ordered.length) {
      $('feedTrack').innerHTML = `<div class="review-empty"><span aria-hidden="true">✳</span><h2>${mode === 'review' ? c.reviewEmpty : c.unavailable}</h2><p>${mode === 'review' ? c.reviewLead : c.unavailableLead}</p><button class="button button-primary" data-action="discover">${c.back} ↗</button></div>`;
      $('feedPosition').textContent = '0'; $('previousVideo').disabled = true; $('nextVideo').disabled = true;
      return;
    }
    bindFeed();
    requestAnimationFrame(()=> { $('feedViewport').scrollTop = active * $('feedViewport').clientHeight; activate(active); });
  }
  function switchMode(value, keepId) {
    mode = value; dirty = false;
    ordered = mode === 'review' ? C.review(source,state) : C.rank(source,state);
    active = keepId ? Math.max(0,ordered.findIndex(i=>i.id === keepId)) : 0;
    $('discoverTab').setAttribute('aria-pressed',String(mode === 'discover'));
    $('reviewTab').setAttribute('aria-pressed',String(mode === 'review'));
    paintFeed(); renderProgress();
  }
  function next(delta=1) {
    let repaint = false;
    if (delta>0 && dirty && mode === 'discover') {
      const seen = ordered.slice(0,active+1), ids = new Set(seen.map(i=>i.id));
      ordered = [...seen,...C.rank(source,state).filter(i=>!ids.has(i.id))];
      dirty=false; repaint=true;
    }
    const index = active+delta;
    if (index >= ordered.length) { toast(mode === 'review' ? c.reviewDone : c.allReviewed); return; }
    if (index < 0) return;
    active=index;
    if (repaint) { paintFeed(); return; }
    $('feedViewport').scrollTo({top:index*$('feedViewport').clientHeight, behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto':'smooth'});
    activate(index);
  }
  function renderProgress() {
    const m=C.metrics(source,state);
    $('todayCount').textContent=m.today; $('todayGoal').textContent=`/ ${state.goal}`;
    $('recognizedCount').textContent=m.recognized; $('savedCount').textContent=m.saved;
    $('reviewCount').textContent=C.review(source,state).length;
    $('learningMeter').setAttribute('aria-valuemax',state.goal); $('learningMeter').setAttribute('aria-valuenow',Math.min(state.goal,m.today));
    $('learningMeter').firstElementChild.style.width=`${Math.min(100,m.today/state.goal*100)}%`;
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
    const streak = [C.day(),C.day(yesterday)].includes(state.lastDay) ? (state.streak || 0) : 0;
    $('progressCaption').textContent=m.today>=state.goal ? c.goalDone : m.recognized ? `${streak} ${c.streak}` : c.emptyProgress;
    const shelf=source.filter(i=>state.favorites[i.id] || state.answers[i.id]?.correct).sort((a,b)=>(state.answers[b.id]?.at || state.favorites[b.id]?.at || 0)-(state.answers[a.id]?.at || state.favorites[a.id]?.at || 0)).slice(0,4);
    $('wordShelf').innerHTML=shelf.length ? shelf.map(i=>`<button class="word-row" data-word="${i.id}"><span lang="en" dir="ltr">${e(i.phrase)}</span><small>${state.favorites[i.id] ? '☆' : '✓'}</small></button>`).join('') : `<p class="empty-shelf">${c.nothing}</p>`;
  }
  function syncSave(i) {
    root.querySelectorAll(`.lesson-slide[data-id="${i.id}"] [data-action="save"]`).forEach(b=> {b.textContent=state.favorites[i.id] ? '✓ '+c.savedButton : '＋ '+c.save; b.setAttribute('aria-pressed',String(!!state.favorites[i.id]));});
    if (quizItem?.id===i.id) $('saveFromQuiz').textContent=state.favorites[i.id] ? c.savedButton : c.save;
  }
  function save(i) { if(state.favorites[i.id]) delete state.favorites[i.id]; else state.favorites[i.id]={at:Date.now()}; persist(); syncSave(i); renderProgress(); if(state.favorites[i.id])toast(c.reviewLater); }
  function openLesson(i, notesOnly=false) {
    if(!i) return;
    quizItem=i; lastAnswer=null; pauseAll();
    $('lessonDialogTitle').textContent=i.phrase;
    $('lessonQuestion').textContent=notesOnly ? '' : i.prompt;
    $('lessonAnswers').innerHTML=notesOnly ? '' : i.answers.map((a,n)=>`<button class="learning-answer" data-answer="${n}"><span>${String.fromCharCode(65+n)}</span>${e(a)}</button>`).join('');
    $('lessonFeedback').textContent=''; $('retryQuestion').hidden=true;
    $('lessonTakeaway').innerHTML=takeaway(i); $('lessonTakeaway').hidden=!notesOnly;
    $('continueLearning').textContent=c.finish; $('saveFromQuiz').textContent=state.favorites[i.id] ? c.savedButton : c.save;
    if(!lessonDialog.open)lessonDialog.showModal();
  }
  function preferences() {
    pauseAll();
    const f=$('preferencesForm');
    f.querySelectorAll('[name="level"]').forEach(i=>i.checked=Number(i.value)===state.level);
    f.querySelectorAll('[name="topic"]').forEach(i=>i.checked=state.topics.includes(i.value));
    f.elements.goal.value=state.goal; f.elements.support.value=state.support;
    prefDialog.showModal();
  }
  root.addEventListener('click',event=> {
    const button=event.target.closest('button'); if(!button)return;
    if(button.dataset.close) { $(button.dataset.close).close(); return; }
    if(button.dataset.word) {openLesson(source.find(i=>i.id===button.dataset.word),true);return;}
    const action=button.dataset.action; if(!action)return;
    if(action==='discover'){switchMode('discover');return;}
    const item=ordered.find(i=>i.id===button.closest('.lesson-slide')?.dataset.id); if(!item)return;
    const video=button.closest('.lesson-slide').querySelector('video');
    if(action==='quiz' || action==='notes')openLesson(item,action==='notes');
    if(action==='save')save(item);
    if(action==='play'){if(video.paused)playCurrent();else video.pause();}
    if(action==='mute'){state.muted=!state.muted;video.muted=state.muted;root.querySelectorAll('[data-action="mute"]').forEach(b=>b.textContent=state.muted?c.mute:c.sound);persist();}
    if(action==='speed'){state.rate=[.75,1,1.25][([.75,1,1.25].indexOf(state.rate)+1)%3];video.playbackRate=state.rate;root.querySelectorAll('[data-action="speed"]').forEach(b=>b.textContent=`${state.rate}×`);persist();}
    if(action==='retry'){video.load();playCurrent();}
    if(['easy','hard'].includes(action)){state.level=Math.max(1,Math.min(3,C.targetLevel(state)+(action==='easy'?1:-1)));state.levelSetAt=Date.now();state.feedback[item.id]=action;dirty=true;persist();toast(c.tuned);next();}
    if(action==='like'){state.likes[item.id]={at:Date.now()};button.setAttribute('aria-pressed','true');dirty=true;persist();toast(c.tuned);}
    if(action==='less'){state.feedback[item.id]='less';dirty=true;persist();next();}
  });
  $('lessonAnswers').addEventListener('click',event=> {
    const b=event.target.closest('[data-answer]');if(!b || lastAnswer!==null)return;
    lastAnswer=Number(b.dataset.answer);
    const result=C.answer(state,quizItem,lastAnswer);
    persist();dirty=true;renderProgress();
    $('lessonAnswers').querySelectorAll('button').forEach((option,n)=>{option.disabled=true;option.classList.toggle('is-correct',n===quizItem.correctIndex);option.classList.toggle('is-wrong',n===lastAnswer && !result.correct);});
    $('lessonFeedback').textContent=result.correct?c.correct:c.incorrect;
    $('lessonTakeaway').hidden=false; $('retryQuestion').hidden=result.correct;
    $('continueLearning').textContent=c.continue;
  });
  $('retryQuestion').addEventListener('click',()=>{openLesson(quizItem);$('lessonAnswers').querySelector('button')?.focus();});
  $('saveFromQuiz').addEventListener('click',()=>save(quizItem));
  $('continueLearning').addEventListener('click',()=>{const move=lastAnswer!==null;lessonDialog.close();if(move)next();});
  $('openPreferences').addEventListener('click',preferences);
  $('preferencesForm').addEventListener('submit',event=> {
    event.preventDefault();const f=new FormData(event.currentTarget);
    state=C.normalize({...state,level:Number(f.get('level')),levelSetAt:Date.now(),topics:f.getAll('topic'),goal:Number(f.get('goal')),support:f.get('support'),onboarded:true});
    persist();prefDialog.close();switchMode('discover');
    history.replaceState(null,'',`${location.pathname}#${state.activeId || ''}`);
  });
  $('skipPreferences').addEventListener('click',()=>{state.onboarded=true;persist();prefDialog.close();});
  [prefDialog,lessonDialog].forEach(dialog=>{
    dialog.addEventListener('close',()=>{if(dialog===prefDialog && !state.onboarded){state.onboarded=true;persist();}playCurrent();});
    dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom)dialog.close();}});
  });
  $('discoverTab').addEventListener('click',()=>switchMode('discover'));
  const review=()=>{switchMode('review');$('feedViewport').scrollIntoView({block:'start',behavior:'smooth'});};
  $('reviewTab').addEventListener('click',review);$('openReview').addEventListener('click',review);
  $('previousVideo').addEventListener('click',()=>next(-1));$('nextVideo').addEventListener('click',()=>next());
  $('feedViewport').addEventListener('keydown',event=>{if(event.target!==$('feedViewport'))return;if(['ArrowDown','PageDown','ArrowUp','PageUp'].includes(event.key)){event.preventDefault();next(['ArrowUp','PageUp'].includes(event.key)?-1:1);}if(event.key===' '){event.preventDefault();const v=currentVideo();if(v?.paused)playCurrent();else v?.pause();}});
  document.addEventListener('visibilitychange',()=>document.hidden?pauseAll():playCurrent());
  window.addEventListener('resize',()=>{$('feedViewport').scrollTop=active*$('feedViewport').clientHeight;});
  switchMode('discover',hashId || (!topicParam && state.onboarded ? state.activeId : null));
  if(!state.onboarded && !hashId)preferences();
};
