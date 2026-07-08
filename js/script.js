/* ============================================================
   Zoeh Studio — script.js  (vanilla, no dependencies)
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------------------------------------------------------
     CONTENT DATA
  ------------------------------------------------------- */
  var data = {
    stats: [
      { value: '100+', label: 'Testes de usabilidade conduzidos' },
      { value: '100+', label: 'Entrevistas com usuários e stakeholders' },
      { value: '30+', label: 'Avaliações heurísticas realizadas' },
      { value: '15+', label: 'Workshops facilitados' },
      { value: '15+', label: 'Anos em operações de serviço de alta exigência' }
    ],
    problems: [
      'Seu site tem tráfego, mas a conversão decepciona',
      'Usuários chegam no produto e saem antes de concluir o que vieram fazer',
      'Você já redesenhou a interface — e o problema voltou',
      'Sua equipe toma decisões de produto com base em opinião, não em evidência',
      'Você sente que algo trava a experiência, mas não sabe exatamente o quê'
    ],
    services: [
      { emoji: '🎙️', title: 'Entrevistas com Usuários', text: 'Para quem precisa ouvir usuários antes de decidir, mas não tem estrutura para isso. Conduzo tudo por você — roteiro, recrutamento, execução e síntese' },
      { emoji: '🔍', title: 'Pesquisa de UX', text: 'Projeto completo de pesquisa: planejamento, execução, síntese e recomendações priorizadas por impacto. Para times que querem entender o comportamento dos usuários antes de construir, redesenhar ou investir.' },
      { emoji: '👁️', title: 'Análise de Usabilidade de Sites e Landing Pages', text: 'Testes com usuários reais + análise de gravações de sessão. Você descobre exatamente onde travam, onde duvidam e por que saem — antes de investir em redesign ou em mais tráfego.' },
      { emoji: '✅', title: 'Auditoria Heurística, Leis de UX e Acessibilidade', text: 'Avaliação do seu site com base nas Heurísticas de Nielsen, Leis de UX e diretrizes de acessibilidade. Relatório com problemas encontrados, priorizados por impacto — com severidade e recomendação clara para cada item.' },
      { emoji: '🧭', title: 'Design de Serviços', text: 'Mapeamento de jornada, service blueprint e análise as-is/to-be. Identifico atritos em toda a experiência do cliente — além da tela, nos processos e nos handoffs onde as coisas realmente quebram.' },
      { emoji: '🕵️', title: 'Cliente Oculto e Análise de Atendimento', text: 'Avalio a experiência do seu cliente do primeiro contato ao pós-venda — como se fosse um cliente comum. Identifico falhas no atendimento e pontos onde a experiência quebra antes de chegar na tela.' },
      { emoji: '🎯', title: 'Facilitação de Workshops', text: 'Como facilitadora externa e neutra, crio o espaço para que as pessoas falem com honestidade — inclusive com formatos de resposta anônima quando necessário. O resultado: prioridades claras, decisões tomadas e próximos passos definidos.' },
      { emoji: '📚', title: 'Treinamento de Pesquisa para Times', text: 'Workshops e programas práticos para times que querem aprender a conduzir pesquisa e tomar decisões com base em evidência — sem precisar contratar um researcher full-time.' }
    ],
    forWho: [
      'Você tem uma startup, produto digital ou negócio online que não converte como deveria — e quer entender por quê antes de investir em mais mudanças.',
      'Você quer tomar decisões de produto com base em evidência, não em achismo ou na opinião de quem fala mais alto na sala.',
      'Você precisa entender o comportamento real dos seus usuários — o que eles fazem, onde travam e por que abandonam — antes de redesenhar qualquer coisa.',
      'Você lidera um time que precisa aprender a usar pesquisa no dia a dia do produto, sem depender de consultoria externa para cada decisão.',
      'Você busca uma especialista que domina pesquisa e entende de operação — não só de telas.'
    ],
    steps: [
      { n: '01', title: 'Conversa inicial', text: 'Me conta o desafio. Identificamos juntos o que faz mais sentido atacar primeiro — sem compromisso.' },
      { n: '02', title: 'Diagnóstico e proposta', text: 'Defino escopo, método e entregáveis com clareza. Você sabe exatamente o que vai receber e por quê.' },
      { n: '03', title: 'Pesquisa e análise', text: 'Executo com rigor metodológico: entrevistas, testes, dados comportamentais, mapeamento de fluxo.' },
      { n: '04', title: 'Entrega acionável', text: 'Recomendações priorizadas, contextualizadas e prontas para levar ao time ou implementar diretamente.' }
    ],
    workCards: [
      { image: 'images/work1.jpg', title: 'Diagnóstico de usabilidade e maturidade em produtos digitais', text: 'Identifiquei gaps de usabilidade, inconsistências de design e oportunidades de melhoria em produtos digitais. Organizei os achados por tema, severidade e impacto — ajudando os times a entender onde a experiência criava fricção e como priorizar as melhorias.' },
      { image: 'images/work2.jpg', title: 'Auditoria heurística e análise de usabilidade — URBS', text: 'Analisei o aplicativo de gestão do cartão de transporte urbano identificando problemas de usabilidade, inconsistências de interface e barreiras de navegação. Organizei os achados por severidade e impacto usando um framework próprio de análise — com recomendações priorizadas e prontas para implementação.' },
      { image: 'images/work3.jpg', title: 'Time fragmentado → direção de produto compartilhada', text: 'Uma equipe multifuncional precisava alinhar prioridades, premissas e próximos passos em um contexto complexo de produto e serviço. Facilitei um workshop estruturado que ajudou a surfacear suposições, clarificar prioridades e sair da sessão com decisões concretas — não só com post-its.' }
    ],
    testimonials: [
      { photo: 'images/photo-tais.jpg', quote: 'Kethleen se destaca em pesquisa qualitativa, mapeamento de problemas, testes de usabilidade e avaliações heurísticas. Sua dedicação em identificar e solucionar problemas por meio de pesquisas minuciosas foi constante — e ela cumpre prazos sem comprometer a qualidade. Suas contribuições impactaram significativamente nossos produtos.', name: 'Taís Lima', role: 'Digital Design Manager | UX — Braskem (cliente)' },
      { photo: 'images/photo-david.jpg', quote: 'Apesar dos desafios com terminologia complexa e processos intrincados, ela abordou o trabalho com rigor e curiosidade. Juntas, realizamos dezenas de entrevistas e traduzimos esses insights em mapas de jornada e personas claros — fundamentais para direcionar a organização rumo a decisões de design assertivas.', name: 'David Carvalho', role: 'Design Strategist — ExxonMobil' },
      { photo: 'images/photo-maia.jpg', quote: 'Kethleen possui profundo conhecimento de métodos e sabe adaptá-los a ambientes complexos — entregando um trabalho incrível, desde a análise de insights até a apresentação. Além das habilidades técnicas, é colaborativa, transparente e uma profissional genuinamente ótima para se trabalhar.', name: 'Maia Naftali', role: 'UX Professional & Software Engineer — ExxonMobil' }
    ]
  };

  /* -------------------------------------------------------
     Small helpers
  ------------------------------------------------------- */
  function el(tag, cls, attrs) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (attrs) for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }
  function $(sel) { return document.querySelector(sel); }

  /* -------------------------------------------------------
     Render content
  ------------------------------------------------------- */
  function render() {
    // Stats
    var statsGrid = $('.stats__grid');
    data.stats.forEach(function (s) {
      var card = el('div', 'stat', { 'data-anim': '' });
      var num = el('div', 'stat__num'); num.textContent = s.value;
      var lab = el('div', 'stat__label'); lab.textContent = s.label;
      card.appendChild(num); card.appendChild(lab);
      statsGrid.appendChild(card);
    });

    // Problems
    var probList = $('.problem__list');
    data.problems.forEach(function (p) {
      var li = el('li', 'problem__item', { 'data-anim': '' });
      var mark = el('div', 'problem__mark'); mark.textContent = '×';
      var txt = el('p'); txt.textContent = p;
      li.appendChild(mark); li.appendChild(txt);
      probList.appendChild(li);
    });

    // Services
    var svcGrid = $('.services__grid');
    data.services.forEach(function (sv) {
      var card = el('div', 'svc-card', { 'data-anim': '' });
      var emoji = el('div', 'svc-card__emoji'); emoji.textContent = sv.emoji;
      var title = el('div', 'svc-card__title'); title.textContent = sv.title;
      var text = el('div', 'svc-card__text'); text.textContent = sv.text;
      card.appendChild(emoji); card.appendChild(title); card.appendChild(text);
      svcGrid.appendChild(card);
    });

    // For who
    var fwList = $('.forwho__list');
    data.forWho.forEach(function (f) {
      var li = el('li', 'forwho__item', { 'data-anim': '' });
      var arrow = el('div', 'forwho__arrow'); arrow.textContent = '→';
      var txt = el('p'); txt.textContent = f;
      li.appendChild(arrow); li.appendChild(txt);
      fwList.appendChild(li);
    });

    // Steps
    var stepGrid = $('.steps__grid');
    data.steps.forEach(function (st) {
      var box = el('div', 'step', { 'data-anim': '' });
      var n = el('div', 'step__n'); n.textContent = st.n;
      var title = el('div', 'step__title'); title.textContent = st.title;
      var text = el('div', 'step__text'); text.textContent = st.text;
      box.appendChild(n); box.appendChild(title); box.appendChild(text);
      stepGrid.appendChild(box);
    });

    // Work cards
    var workGrid = $('.works__grid');
    data.workCards.forEach(function (w) {
      var card = el('div', 'case-card', { 'data-anim': '' });
      var img = el('img', 'case-img', { src: w.image, alt: w.title, loading: 'lazy', width: '460', height: '200' });
      var body = el('div', 'case-card__body');
      var title = el('div', 'case-card__title'); title.textContent = w.title;
      var text = el('div', 'case-card__text'); text.textContent = w.text;
      body.appendChild(title); body.appendChild(text);
      card.appendChild(img); card.appendChild(body);
      workGrid.appendChild(card);
    });

    // Testimonials
    var tstGrid = $('.testimonials__grid');
    data.testimonials.forEach(function (t) {
      var card = el('div', 'tst-card', { 'data-anim': '' });
      var quote = el('div', 'tst-card__quote'); quote.textContent = '"' + t.quote + '"';
      var person = el('div', 'tst-card__person');
      var photo = el('img', 'tst-card__photo', { src: t.photo, alt: t.name, loading: 'lazy', width: '44', height: '44' });
      var meta = el('div');
      var name = el('div', 'tst-card__name'); name.textContent = t.name;
      var role = el('div', 'tst-card__role'); role.textContent = t.role;
      meta.appendChild(name); meta.appendChild(role);
      person.appendChild(photo); person.appendChild(meta);
      card.appendChild(quote); card.appendChild(person);
      tstGrid.appendChild(card);
    });
  }

  /* -------------------------------------------------------
     Mobile menu (hamburger)
  ------------------------------------------------------- */
  function initMenu() {
    var toggle = $('#navToggle');
    var menu = $('#navMenu');
    if (!toggle || !menu) return;

    function close() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    }
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    // Close after clicking a link
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });
    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* -------------------------------------------------------
     Scroll reveal (fade-in with stagger)
  ------------------------------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll('[data-anim]');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (i) { i.classList.add('in-view'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (i) { io.observe(i); });
  }

  /* -------------------------------------------------------
     Animated counters (stats)
  ------------------------------------------------------- */
  function runCounters(instant) {
    document.querySelectorAll('.stat__num').forEach(function (elm) {
      if (elm.dataset.counted) return;
      elm.dataset.counted = '1';
      var raw = (elm.textContent || '').trim();
      var num = parseInt(raw.replace(/[^0-9]/g, ''), 10);
      var suffix = raw.replace(/[0-9]/g, '');
      if (isNaN(num)) return;
      if (instant) { elm.textContent = num + suffix; return; }
      var dur = 1800, startT = Date.now();
      var tick = function () {
        var t = Math.min(1, (Date.now() - startT) / dur);
        var eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
        elm.textContent = Math.round(eased * num) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  function initCounters() {
    var wrap = $('[data-counters]');
    if (!wrap) return;
    if (reduceMotion || !('IntersectionObserver' in window)) { runCounters(true); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { runCounters(false); io.disconnect(); }
      });
    }, { threshold: 0.25 });
    io.observe(wrap);
  }

  /* -------------------------------------------------------
     Boot
  ------------------------------------------------------- */
  function init() {
    render();
    initMenu();
    initReveal();
    initCounters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
