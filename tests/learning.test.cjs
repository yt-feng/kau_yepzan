const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const C = require('../learning-core.js');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync('video-data.js','utf8'),context);
vm.runInNewContext(fs.readFileSync('lesson-notes.js','utf8'),context);
const items = context.window.LEARN_VIDEO_DATA.items.map(item => {
  const note=context.window.LESSON_NOTES[item.id];
  assert.ok(note, `Missing editorial notes: ${item.id}`);
  return {...item,level:note[0],topic:note[1]};
});
test('every published video has valid learning notes and an answer',()=> {
  assert.ok(items.length>0);
  for(const item of items) {
    assert.ok([1,2,3].includes(item.level)); assert.ok(C.TOPICS.includes(item.topic));
    assert.ok(item.answers[item.correctIndex]);
    assert.ok(context.window.LESSON_MEANINGS[item.id], `Missing English meaning: ${item.id}`);
    assert.ok(context.window.LESSON_NOTES[item.id].slice(2).every(s=>typeof s==='string' && s.length));
  }
});
test('topic and learning stage materially change the leading recommendations',()=> {
  const daily=C.defaults(), food=C.normalize({...daily,topics:['food']});
  assert.equal(C.rank(items,food)[0].topic,'food');
  assert.equal(C.rank(items,daily)[0].level,1);
  const advanced=C.normalize({...daily,level:3,topics:['work']});
  assert.equal(C.rank(items,advanced)[0].id,'A020');
  assert.ok(!C.rank(items,daily).some(i=>i.topic==='culture'));
  assert.ok(C.rank(items,{...daily,topics:['culture']}).some(i=>i.topic==='culture'));
});
test('recent first attempts adapt difficulty; manual changes establish a fresh starting point',()=> {
  const s=C.defaults();const now=Date.now();
  for (let n=0;n<5;n++) C.answer(s,items[n],items[n].correctIndex,now+n);
  assert.equal(C.targetLevel(s),2);
  s.level=1;s.levelSetAt=now+10;
  assert.equal(C.targetLevel(s),1);
  for (let n=0;n<5;n++) C.answer(s,items[n],items[n].correctIndex,now+20+n);
  assert.equal(C.targetLevel(s),1, 'Reviewing old items must not undo a manual level reset');
});
test('first recognition, retry, and review do not inflate unique or daily progress',()=> {
  const s=C.defaults(),i=items[0],at=new Date(2026,8,15,12).getTime();
  C.answer(s,i,(i.correctIndex+1)%4,at);
  assert.equal(C.metrics(items,s,at).recognized,0);
  assert.ok(C.review(items,s,at).some(x=>x.id===i.id));
  C.answer(s,i,i.correctIndex,at+1);
  C.answer(s,i,i.correctIndex,at+2);
  assert.equal(C.metrics(items,s,at).today,1); assert.equal(s.answers[i.id].firstCorrect,false);
  assert.equal(s.answers[i.id].reviews,0);
  assert.equal(C.review(items,s,at+3).length,0);
  const later=at+2*86400000;
  assert.ok(C.due(i,s,later)); C.answer(s,i,i.correctIndex,later);
  assert.equal(C.metrics(items,s,later).today,0); assert.equal(C.metrics(items,s,later).recognized,1);
  assert.equal(s.answers[i.id].reviews,1);
  assert.ok(s.answers[i.id].dueAt>later+86400000);
});
test('saved phrases remain reviewable and old learner records migrate without loss',()=> {
  const old={favorites:{A000:{at:10}},answers:{A001:{correct:true,at:20}},xp:40};
  const storage={getItem:key=>key==='yepzanShortsState.v2'?JSON.stringify(old):null};
  const s=C.read(storage);assert.ok(s.favorites.A000);assert.ok(s.answers.A001.correct);
  assert.ok(C.review(items,s).some(i=>i.id==='A000'));
  assert.equal(s.onboarded,false);
});
test('unavailable storage and invalid preferences do not prevent learning',()=> {
  const storage={getItem(){throw Error('blocked');},setItem(){throw Error('blocked');}};
  assert.deepEqual(C.read(storage).topics,['daily','food']);assert.equal(C.write(storage,C.defaults()),false);
  const s=C.normalize({level:99,topics:['invalid'],goal:-1,answers:null});assert.equal(s.level,1);assert.equal(s.goal,3);assert.deepEqual(s.answers,{});
});
