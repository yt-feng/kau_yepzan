(function (root) {
  'use strict';
  const TOPICS = ['daily', 'food', 'work', 'sounds', 'culture'];
  const KEY = 'tiktalk.learning.v1';
  const DAY = 86400000;
  function day(at = Date.now()) {
    const d = new Date(at);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  function defaults() {
    return { onboarded: false, level: 1, topics: ['daily', 'food'], goal: 3, support: 'any', muted: true, rate: 1, favorites: {}, likes: {}, answers: {}, completed: {}, feedback: {}, activeId: '', lastDay: '', streak: 0 };
  }
  function normalize(raw) {
    const s = { ...defaults(), ...(raw && typeof raw === 'object' ? raw : {}) };
    s.level = [1, 2, 3].includes(Number(s.level)) ? Number(s.level) : 1;
    s.goal = [3, 5, 10].includes(Number(s.goal)) ? Number(s.goal) : 3;
    s.topics = Array.isArray(s.topics) ? s.topics.filter(t => TOPICS.includes(t)) : ['daily', 'food'];
    if (!s.topics.length) s.topics = ['daily', 'food'];
    s.support = ['any', 'english', 'arabic'].includes(s.support) ? s.support : 'any';
    s.rate = [0.75, 1, 1.25].includes(Number(s.rate)) ? Number(s.rate) : 1;
    ['favorites', 'likes', 'answers', 'completed', 'feedback'].forEach(k => { if (!s[k] || typeof s[k] !== 'object' || Array.isArray(s[k])) s[k] = {}; });
    return s;
  }
  function read(storage) {
    try {
      const raw = storage.getItem(KEY);
      if (raw) return normalize(JSON.parse(raw));
      const old = JSON.parse(storage.getItem('yepzanShortsState.v2') || '{}');
      return normalize({ favorites: old.favorites, likes: old.likes, answers: old.answers, completed: old.completed, muted: old.muted !== false, rate: old.rate });
    } catch { return defaults(); }
  }
  function write(storage, state) { try { storage.setItem(KEY, JSON.stringify(state)); return true; } catch { return false; } }
  function targetLevel(s) {
    const recent = Object.values(s.answers).filter(a => a && a.firstCorrect !== undefined && (a.firstAt || a.at) > (s.levelSetAt || 0)).sort((a,b) => (b.firstAt || b.at)-(a.firstAt || a.at)).slice(0,5);
    if (recent.length < 4) return s.level;
    const correct = recent.filter(a => a.firstCorrect).length / recent.length;
    return Math.max(1, Math.min(3, s.level + (correct >= .8 ? 1 : correct <= .4 ? -1 : 0)));
  }
  function due(item, s, at = Date.now()) {
    const a = s.answers[item.id];
    return !!a && (!a.correct || (a.dueAt || 0) <= at);
  }
  function rank(items, s, at = Date.now()) {
    const level = targetLevel(s);
    return items.filter(i => i.topic !== 'culture' || s.topics.includes('culture')).map((item, index) => {
      let score = 100 - Math.abs(item.level-level)*42 + (s.topics.includes(item.topic) ? 65 : 0);
      if (item.level > level) score -= 15;
      if (s.answers[item.id]?.correct) score -= 65;
      else if (s.completed[item.id]) score -= 12;
      if (due(item,s,at)) score += 16;
      if (s.likes[item.id]) score += 8;
      if (items.some(i => i.topic === item.topic && s.likes[i.id])) score += 18;
      if (s.feedback[item.id] === 'less') score -= 300;
      if (s.support !== 'any') score += (s.support === 'english') === (item.voice === 'Pure English') ? 24 : -12;
      return {item, score, index};
    }).sort((a,b) => b.score-a.score || a.index-b.index).map(x => x.item);
  }
  function review(items, s, at = Date.now()) {
    return items.filter(i => s.favorites[i.id] || due(i,s,at)).sort((a,b) => Number(due(b,s,at))-Number(due(a,s,at)));
  }
  function answer(s, item, selected, at = Date.now()) {
    const old = s.answers[item.id];
    const correct = Number(selected) === Number(item.correctIndex);
    const firstRecognition = correct && !old?.recognizedAt;
    // Same-day retries do not inflate progress or lengthen the review interval.
    const newReview = correct && old?.recognizedAt && (old.dueAt || 0) <= at && day(old.at) !== day(at);
    const reviews = (old?.reviews || 0) + Number(!!newReview);
    s.answers[item.id] = {
      selected: Number(selected), correct, firstCorrect: old?.firstCorrect ?? old?.correct ?? correct,
      firstAt: old?.firstAt || old?.at || at,
      at, date: day(at), recognizedAt: old?.recognizedAt || (correct ? at : null),
      recognizedDay: old?.recognizedDay || (correct ? day(at) : null), reviews,
      dueAt: correct ? (old?.correct && !newReview && old.dueAt > at ? old.dueAt : at + Math.min(7, 2 ** reviews) * DAY) : at
    };
    if (s.lastDay !== day(at)) {
      const yesterday = new Date(at); yesterday.setDate(yesterday.getDate()-1);
      s.streak = s.lastDay === day(yesterday) ? (s.streak || 0)+1 : 1;
      s.lastDay = day(at);
    }
    return {correct, firstRecognition, reviews};
  }
  function metrics(items, s, at = Date.now()) {
    const answers = items.map(i => s.answers[i.id]).filter(Boolean);
    return { today: answers.filter(a => a.recognizedDay === day(at)).length, recognized: answers.filter(a => a.recognizedAt || a.correct).length, saved: items.filter(i => s.favorites[i.id]).length, due: items.filter(i => due(i,s,at)).length };
  }
  const api = { TOPICS, KEY, day, defaults, normalize, read, write, targetLevel, rank, review, answer, metrics, due };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.LearningCore = api;
})(typeof window !== 'undefined' ? window : globalThis);
