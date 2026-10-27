(function () {
  const root = document.getElementById('app');
  const packs = window.QUIZ_PACKS;
  const japanese = window.JA_QUESTIONS;
  const alphabet = ['A', 'B', 'C', 'D'];
  const answerKey = i => 'qc-part1-v2-pack-' + i;
  const orderKey = i => 'qc-part1-v2-order-' + i;
  const langKey = 'qc-part1-language';
  const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const text = {
    vi: {
      pageTitle: 'Luyện tập QC Kentei 4 · Phần I', pageDescription: 'Hai gói trắc nghiệm Phần I QC Kentei cấp 4, 20 câu mỗi gói, chấm điểm và giải thích đáp án.', brand: 'HỌC QUA PHÁN ĐOÁN', homeAria: 'Trang chủ', footer: 'Chỉ mang tính chất tham khảo, không phải đề thi chính thức.',
      eyebrow: 'LUYỆN THI QC KENTEI CẤP 4', heroA: 'Hiểu đúng.', heroB: 'Phán đoán tốt.', lead: 'Luyện tập Phần I – Thực hành quản lý chất lượng qua các tình huống gần với công việc. Chọn đáp án, nhận điểm và xem lời giải để biết mình cần ôn lại mục nào.', begin: 'Bắt đầu luyện tập', heroNote: 'Mỗi gói 20 câu · 5 điểm/câu', packsCount: 'Gói câu hỏi', questionsCount: 'Câu luyện tập', maxScore: 'Điểm tối đa / gói', sampleQuestion: 'CÂU HỎI 08 / 20', sampleCorrect: 'PHÁN ĐOÁN ĐÚNG',
      choosePack: 'Chọn gói câu hỏi', chooseSubtitle: 'Gói 1 học Mục 1–13; Gói 2 học Mục 13–26 của Phần I.', partOne: 'Phần I · Thực hành', partTwo: 'Phần II · Sắp ra mắt', partThree: 'Phần III · Sắp ra mắt', partAria: 'Các phần của giáo trình', pack: 'GÓI', part: 'PHẦN I', questionsMeta: '20 câu hỏi', pointsMeta: '100 điểm', draft: 'Có bài đang làm', startAria: 'Bắt đầu', scopeLabel: 'Phạm vi Phần I:', scope: 'Gói 1: Mục 1–13. Gói 2: Mục 13–26. Mục 13 xuất hiện ở cả hai gói để nối kiến thức về 3M với các nội dung tại hiện trường. Câu hỏi được diễn đạt mới dựa trên giáo trình.',
      backHome: 'Trở về các gói', quizIntro: 'Chọn một đáp án cho mỗi câu. Bạn có thể đổi câu trả lời trước khi nộp bài.', answered: 'đã trả lời', progress: 'Tiến độ', question: 'CÂU', topic: 'MỤC', points: '5 ĐIỂM', optionsAria: 'Lựa chọn đáp án', previous: 'Câu trước', next: 'Câu tiếp theo', submit: 'Nộp bài & xem kết quả', remainingA: 'Trả lời đủ 20 câu để nộp bài. Còn', remainingB: 'câu.', jump: 'Đi đến câu hỏi', questionAria: 'Câu', answeredAria: 'đã trả lời', sideNote: 'Ô màu xanh: đã chọn đáp án. Bạn có thể quay lại chỉnh sửa bất cứ lúc nào.',
      results: 'KẾT QUẢ', resultTitle: 'Bài làm của bạn', resultIntro: 'Xem từng câu để biết vì sao đúng hoặc sai và mục nào cần ôn lại.', completed: 'HOÀN THÀNH 20 CÂU HỎI', great: 'Làm rất tốt!', keepGoing: 'Tiếp tục luyện tập!', reviewMore: 'Hãy ôn lại từng mục.', correctCount: 'câu đúng', wrongCount: 'câu sai', perQuestion: '5 điểm mỗi câu', retry: 'Làm lại gói này', chooseAnother: 'Chọn gói khác', reviewTitle: 'Xem lại đáp án', reviewSubtitle: 'Các câu sai được đánh dấu đỏ để bạn dễ tìm.', correct: 'ĐÚNG +5', wrong: 'SAI +0', yourAnswer: 'Câu trả lời của bạn:', rightAnswer: 'Đáp án đúng:'
    },
    ja: {
      pageTitle: 'QC検定4級 練習クイズ · 第I部', pageDescription: 'QC検定4級の第I部を学ぶ2つの練習クイズ。各20問、採点と解説付き。', brand: '判断から学ぶ', homeAria: 'ホーム', footer: '参考学習用です。公式試験問題ではありません。',
      eyebrow: 'QC検定4級 練習クイズ', heroA: '正しく理解し、', heroB: '的確に判断する。', lead: '第I部「品質管理の実践」を、職場に近い場面から学びます。回答後に得点と解説を確認し、復習すべき項目を見つけましょう。', begin: '学習を始める', heroNote: '各セット20問 · 1問5点', packsCount: '問題セット', questionsCount: '練習問題', maxScore: '各セットの満点', sampleQuestion: '問題 08 / 20', sampleCorrect: '正しい判断',
      choosePack: '問題セットを選ぶ', chooseSubtitle: 'セット1は第1～13項、セット2は第13～26項です。', partOne: '第I部 · 実践', partTwo: '第II部 · 準備中', partThree: '第III部 · 準備中', partAria: '教材の構成', pack: 'セット', part: '第I部', questionsMeta: '20問', pointsMeta: '100点', draft: '回答途中', startAria: '始める', scopeLabel: '第I部の範囲：', scope: 'セット1は第1～13項、セット2は第13～26項です。第13項の3Mは両方のセットに含まれます。問題は教材の内容に基づき、新しく作成しました。',
      backHome: 'セット一覧に戻る', quizIntro: '各問題で答えを1つ選んでください。提出前なら変更できます。', answered: '問回答済み', progress: '進捗', question: '問題', topic: '第', topicSuffix: '項', points: '5点', optionsAria: '解答の選択肢', previous: '前の問題', next: '次の問題', submit: '提出して結果を見る', remainingA: '提出するには20問すべてに回答してください。残り', remainingB: '問です。', jump: '問題へ移動', questionAria: '問題', answeredAria: '回答済み', sideNote: '緑色の番号は回答済みです。提出前ならいつでも変更できます。',
      results: '結果', resultTitle: '採点結果', resultIntro: '各問題の正誤と解説を確認し、復習する項目を見つけましょう。', completed: '20問に回答しました', great: 'よくできました！', keepGoing: 'この調子で続けましょう！', reviewMore: '各項目を復習しましょう。', correctCount: '問正解', wrongCount: '問不正解', perQuestion: '1問5点', retry: 'もう一度挑戦', chooseAnother: '別のセットを選ぶ', reviewTitle: '解答を確認', reviewSubtitle: '間違えた問題は赤色で表示します。', correct: '正解 +5', wrong: '不正解 +0', yourAnswer: 'あなたの回答：', rightAnswer: '正しい答え：'
    }
  };
  const packText = {
    vi: packs.map(p => ({ title: p.title, description: p.description })),
    ja: [
      { title: 'セット01 · 品質管理と改善の基礎', description: '第1～13項 · 品質、顧客、管理、改善を学びます。' },
      { title: 'セット02 · 現場と標準', description: '第13～26項 · 3M、工程、検査、標準化を学びます。' }
    ]
  };

  let state = { view: 'home', pack: 0, index: 0, answers: [], order: [], lang: localStorage.getItem(langKey) === 'ja' ? 'ja' : 'vi' };
  const s = () => text[state.lang];
  function qAt(pack, source) {
    const vi = packs[pack].questions[source];
    if (state.lang === 'vi') return vi;
    const ja = japanese[pack][source];
    return [vi[0], ja[0], ja[1], vi[3], ja[2]];
  }
  function saved(i) {
    try {
      const value = JSON.parse(localStorage.getItem(answerKey(i)));
      return Array.isArray(value) && value.length === 20 ? value : null;
    } catch { return null; }
  }
  function persist() { localStorage.setItem(answerKey(state.pack), JSON.stringify(state.answers)); }
  function shuffledOrder(i) {
    const order = Array.from({ length: packs[i].questions.length }, (_, n) => n);
    for (let n = order.length - 1; n > 0; n--) {
      const j = Math.floor(Math.random() * (n + 1));
      [order[n], order[j]] = [order[j], order[n]];
    }
    if (localStorage.getItem(orderKey(i)) === JSON.stringify(order) && order.length > 1) {
      [order[0], order[1]] = [order[1], order[0]];
    }
    localStorage.setItem(orderKey(i), JSON.stringify(order));
    return order;
  }
  function showQuestion() {
    if (window.matchMedia('(max-width: 850px)').matches) {
      const card = root.querySelector('.question-card');
      if (card) card.scrollIntoView({ block: 'start', behavior: 'instant' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }
  function chrome() {
    const t = s();
    document.documentElement.lang = state.lang;
    document.title = t.pageTitle;
    document.querySelector('meta[name="description"]').content = t.pageDescription;
    document.querySelector('.brand').setAttribute('aria-label', t.homeAria);
    document.getElementById('brand-subtitle').textContent = t.brand;
    document.getElementById('site-footer').textContent = t.footer;
    document.querySelectorAll('[data-lang]').forEach(button => {
      const active = button.dataset.lang === state.lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute('lang', button.dataset.lang);
    });
  }
  function render() {
    chrome();
    if (state.view === 'quiz') quiz();
    else if (state.view === 'result') result();
    else home();
  }
  function home() {
    state.view = 'home';
    const t = s();
    root.innerHTML = `
      <section class="hero"><div><span class="eyebrow"><span class="dot"></span> ${esc(t.eyebrow)}</span><h1>${esc(t.heroA)}<br><em>${esc(t.heroB)}</em></h1><p class="lead">${esc(t.lead)}</p><div class="hero-actions"><a class="button" href="#goi-cau-hoi">${esc(t.begin)} <span>↗</span></a><span class="small-note">${esc(t.heroNote)}</span></div><div class="stats"><div class="stat"><strong>02</strong><span>${esc(t.packsCount)}</span></div><div class="stat"><strong>40</strong><span>${esc(t.questionsCount)}</span></div><div class="stat"><strong>100</strong><span>${esc(t.maxScore)}</span></div></div></div><div class="hero-art" aria-hidden="true"><div class="art-card"><div class="art-kicker">${esc(t.sampleQuestion)}</div><div class="art-line"></div><div class="art-line short"></div><div class="art-options"><div class="art-option"><span></span></div><div class="art-option active"><span></span></div><div class="art-option"><span></span></div></div></div><div class="art-badge">+5<small>${esc(t.sampleCorrect)}</small></div></div></section>
      <section id="goi-cau-hoi"><div class="section-head"><div><h2>${esc(t.choosePack)}</h2><p>${esc(t.chooseSubtitle)}</p></div><div class="part-tabs" aria-label="${esc(t.partAria)}"><button class="part-tab active">${esc(t.partOne)}</button><button class="part-tab locked" disabled>${esc(t.partTwo)}</button><button class="part-tab locked" disabled>${esc(t.partThree)}</button></div></div><div class="packs">${packs.map((p, i) => `<article class="pack"><div class="pack-top"><span class="pack-icon">${i ? '◇' : '✦'}</span> ${esc(t.part)} / ${esc(t.pack)} ${String(i + 1).padStart(2, '0')}</div><h3>${esc(packText[state.lang][i].title)}</h3><p>${esc(packText[state.lang][i].description)}</p><div class="pack-bottom"><span class="pack-meta">${esc(t.questionsMeta)} &nbsp;·&nbsp; ${esc(t.pointsMeta)}${saved(i) ? ' &nbsp;·&nbsp; ' + esc(t.draft) : ''}</span><button class="arrow" data-start="${i}" aria-label="${esc(t.startAria)} ${esc(packText[state.lang][i].title)}">↗</button></div></article>`).join('')}</div><div class="outline"><strong>${esc(t.scopeLabel)}</strong> ${esc(t.scope)}</div></section>`;
    root.querySelectorAll('[data-start]').forEach(button => button.addEventListener('click', () => start(Number(button.dataset.start))));
  }
  function start(i) {
    state = { ...state, view: 'quiz', pack: i, index: 0, answers: saved(i) || Array(20).fill(null), order: shuffledOrder(i) };
    render(); showQuestion();
  }
  function quiz() {
    const t = s();
    const { pack, index, answers, order } = state;
    const q = qAt(pack, order[index]);
    const done = answers.filter(value => value !== null).length;
    const topicLabel = state.lang === 'ja' ? `${t.topic}${q[0]}${t.topicSuffix}` : `${t.topic} ${q[0]}`;
    root.innerHTML = `<div class="quiz-head"><div><button class="back" id="back-home">← ${esc(t.backHome)}</button><div class="q-label">${esc(t.part)} · ${esc(t.pack)} ${String(pack + 1).padStart(2, '0')}</div><h1>${esc(packText[state.lang][pack].title)}</h1><p>${esc(t.quizIntro)}</p></div><div class="score-pill">${done} / 20 ${esc(t.answered)}</div></div><div class="progress-row"><span>${esc(t.progress)}</span><div class="progress-track"><div class="progress-fill" style="width:${done * 5}%"></div></div><span>${done * 5}%</span></div><div class="quiz-layout"><section class="question-card"><div class="q-label">${esc(t.question)} ${String(index + 1).padStart(2, '0')} / 20 &nbsp;·&nbsp; ${esc(topicLabel)} &nbsp;·&nbsp; ${esc(t.points)}</div><h2>${esc(q[1])}</h2><div class="options" role="radiogroup" aria-label="${esc(t.optionsAria)}">${q[2].map((option, n) => `<button class="option ${answers[order[index]] === n ? 'selected' : ''}" data-choice="${n}" role="radio" aria-checked="${answers[order[index]] === n}"><span class="option-letter">${alphabet[n]}</span><span>${esc(option)}</span></button>`).join('')}</div><div class="quiz-actions"><button class="button secondary" id="prev" ${index === 0 ? 'disabled' : ''}>← ${esc(t.previous)}</button>${index === 19 ? `<button class="button" id="submit" ${done < 20 ? 'disabled' : ''}>${esc(t.submit)} ↗</button>` : `<button class="button" id="next">${esc(t.next)} →</button>`}</div>${index === 19 && done < 20 ? `<p class="small-note" style="margin:17px 0 0">${esc(t.remainingA)} ${20 - done} ${esc(t.remainingB)}</p>` : ''}</section><aside class="side"><h3>${esc(t.jump)}</h3><div class="number-grid">${order.map((source, n) => `<button data-jump="${n}" class="${n === index ? 'current ' : ''}${answers[source] !== null ? 'done' : ''}" aria-label="${esc(t.questionAria)} ${n + 1}${answers[source] !== null ? ', ' + esc(t.answeredAria) : ''}">${n + 1}</button>`).join('')}</div><p class="side-note">${esc(t.sideNote)}</p></aside></div>`;
    root.querySelector('#back-home').onclick = () => { home(); scrollTo(0, 0); };
    root.querySelectorAll('[data-choice]').forEach(button => button.onclick = () => { state.answers[state.order[index]] = Number(button.dataset.choice); persist(); quiz(); });
    root.querySelectorAll('[data-jump]').forEach(button => button.onclick = () => { state.index = Number(button.dataset.jump); quiz(); showQuestion(); });
    root.querySelector('#prev').onclick = () => { if (state.index) { state.index--; quiz(); showQuestion(); } };
    const next = root.querySelector('#next');
    if (next) next.onclick = () => { state.index++; quiz(); showQuestion(); };
    const submit = root.querySelector('#submit');
    if (submit) submit.onclick = () => { if (state.answers.every(value => value !== null)) { localStorage.removeItem(answerKey(state.pack)); state.view = 'result'; render(); scrollTo(0, 0); } };
  }
  function result() {
    const t = s();
    const { pack, order, answers } = state;
    const correct = order.reduce((n, source) => n + (answers[source] === packs[pack].questions[source][3]), 0);
    const score = correct * 5;
    root.innerHTML = `<div class="quiz-head"><div><button class="back" id="back-home">← ${esc(t.backHome)}</button><div class="q-label">${esc(t.results)} · ${esc(t.part)} / ${esc(t.pack)} ${String(pack + 1).padStart(2, '0')}</div><h1>${esc(t.resultTitle)}</h1><p>${esc(t.resultIntro)}</p></div></div><section class="result-hero"><div><div class="q-label" style="color:#b4d7c1">${esc(t.completed)}</div><h1>${esc(score >= 80 ? t.great : score >= 50 ? t.keepGoing : t.reviewMore)}</h1><p>${correct} ${esc(t.correctCount)} · ${20 - correct} ${esc(t.wrongCount)} · ${esc(t.perQuestion)}</p></div><div class="result-score">${score}<small> / 100</small></div></section><div class="results-actions"><button class="button" id="retry">${esc(t.retry)} ↻</button><button class="button secondary" id="choose">${esc(t.chooseAnother)}</button></div><div class="section-head"><div><h2>${esc(t.reviewTitle)}</h2><p>${esc(t.reviewSubtitle)}</p></div></div><div class="review-list">${order.map((source, i) => {
      const q = qAt(pack, source);
      const ok = answers[source] === q[3];
      const topicLabel = state.lang === 'ja' ? `${t.topic}${q[0]}${t.topicSuffix}` : `${t.topic} ${q[0]}`;
      return `<article class="review ${ok ? '' : 'wrong'}"><div class="tag">${esc(t.question)} ${String(i + 1).padStart(2, '0')} · ${esc(topicLabel)} · ${esc(ok ? t.correct : t.wrong)}</div><h3>${esc(q[1])}</h3><p>${esc(t.yourAnswer)} <strong>${alphabet[answers[source]]}. ${esc(q[2][answers[source]])}</strong></p>${ok ? '' : `<p class="answer">${esc(t.rightAnswer)} ${alphabet[q[3]]}. ${esc(q[2][q[3]])}</p>`}<p class="explain">${esc(q[4])}</p></article>`;
    }).join('')}</div>`;
    root.querySelector('#back-home').onclick = root.querySelector('#choose').onclick = () => { home(); scrollTo(0, 0); };
    root.querySelector('#retry').onclick = () => { state.answers = Array(20).fill(null); state.index = 0; state.order = shuffledOrder(pack); state.view = 'quiz'; persist(); render(); showQuestion(); };
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
    if (button.dataset.lang === state.lang) return;
    state.lang = button.dataset.lang;
    localStorage.setItem(langKey, state.lang);
    render();
  }));
  render();
})();
