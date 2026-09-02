/* ==========================================================================
   monco.io — i18n.js
   Bilingual support: Portuguese (default) / English
   Usage: add data-i18n="key" to any element.
         data-i18n-html="key" for elements containing HTML (em, strong, etc.)
         data-i18n-attr="placeholder:key" for attributes.
   ========================================================================== */
(function(){
  'use strict';

  const STRINGS = {

    /* ── PT ─────────────────────────────────────────────────── */
    pt: {
      /* Nav */
      'nav.home':       'home',
      'nav.work':        'work',
      'nav.cta':        'agendar call →',

      /* Hero */
      'hero.tag':       'DAVID MARQUES · PRODUCT STUDIO, AI-ACCELERATED',
      'hero.title':     'Inteligência Artificial,<br>processos de trabalho<br>e <em>produtos customizados.</em>',
      'hero.hint':      '← mexe o rato / clica para burst →',

      /* Services (kept as a note in section 01) */
      'svc.note.label': 'Serviços que desenvolvo com parceiros',
      'svc1.h3':        'Automação de tarefas',
      'svc2.h3':        'Processos & ferramentas',
      'svc3.h3':        'Formação & mentoria',

      /* Learning showcase */
      'la.eyebrow':     '/ 02 — APRENDIZAGEM',
      'la.h2':          'Produtos que ensinam <em>a fazer</em>.',
      'la.desc':        'Ferramentas simples o suficiente para uma sala de aula, feitas com o mesmo rigor de produto.',
      'lp5.p':          'Grava e edita, no browser, o podcast da turma — sem instalar nada, pronto a publicar.',

      /* Ambition */
      'amb.h2':         'Um <em>product studio</em> na era da IA.',

      /* Serious products showcase */
      'sp.eyebrow':     '/ 03 — PRODUTOS',
      'sp.h2':          'Prova de <em>craft profissional</em>.',
      'work.cta':       'Ver todos os 12 produtos →',

      /* CTA */
      'cta.h2':         'Perde o lag.<br><em>Ganha o edge.</em>',
      'cta.p':          'Diagnóstico gratuito de 30 minutos. Sem slides, sem comissões — só uma conversa honesta sobre onde podes ganhar tempo e competitividade.',
      'cta.primary':    'Agendar diagnóstico →',
      'cta.secondary':  'Ver portfólio →',

      /* Footer */
      'foot.copy':      '© 2026 MONCO.IO / DAVID FERREIRA MARQUES',

      /* About content (now on homepage) */
      'about.eyebrow':  '/ 01 — SOBRE MIM',
      'about.h1':       'Construo com <em>velocidade</em>,<br>entrego com cuidado.',
      'about.byline':   'David Ferreira Marques — product studio. <a href="https://www.linkedin.com/in/dferreiramarques/" target="_blank" rel="noopener">LinkedIn ↗</a>',
      'about.p1':       'A monco.io é o meu product studio: nasceu de uma constatação simples — <strong>há uma geração inteira de negócios a perder o edge competitivo</strong> não por falta de talento, mas por estarem presos a ferramentas e processos de outra década.',
      'about.p2':       'Não sou uma consultora tradicional. Não faço slides bonitos com prazos de 18 meses. Sou um product studio que aplica AI, automação e vibe coding para entregar resultados em <strong>dias, não trimestres</strong>.',
      'about.p3b':      'Trabalho como recurso externo, contratado à peça ou por projeto: resolvo workflows, automação e crio produto à medida. Os meus parceiros tanto podem ser negócios que querem modernizar operações, como outros estúdios de vibe coding ou developers independentes que precisam de mais um par de mãos sénior num sprint, sem contratar a tempo inteiro.',
      'about.p3':       'Cada projeto entrega algo a correr logo na primeira semana — a tua equipa fica mais rápida, mais autónoma, mais competitiva.',
      'about.pr1.h5':   'Ship, don\'t slide.',
      'about.pr1.p':    'Entrego software a correr, não decks. Cada conversa termina com algo deployable.',
      'about.pr2.h5':   'AI as default.',
      'about.pr2.p':    'Não é featurette, é o substrato. Pensar AI desde o primeiro dia muda tudo.',
      'about.pr3.h5':   'People over process.',
      'about.pr3.p':    'A tua equipa conhece o negócio. Co-construo com eles, não para eles.',
      'about.pr4.h5':   'Days, not quarters.',
      'about.pr4.p':    'Velocidade é uma feature. Resultados em dias, não trimestres.',

      /* Work page */
      'wp.eyebrow':     '/ SELECTED WORK · 12 PRODUCTS',
      'wp.h2':          'Coisas que <em>lancei</em>.',
      'wp.desc':        'Produtos a correr, não protótipos. Clica para abrir.',
      'pf1.p': 'Gestão de tarefas em quadros Kanban com múltiplos boards, arquivo de ideias e sincronização com Google Drive.',
      'pf2.p': 'Cartões de hábitos com ciclos semanais, mensais e anuais que se renovam sozinhos. Versão Pro com sync na cloud.',
      'pf3.p': 'Gerador de wallpapers a partir de emojis, com seis padrões de composição, controlo de brilho e export até QHD+.',
      'pf4.p': 'Editor de carimbos no browser: desenha ou importa SVG e exporta um STL pronto a imprimir em 3D.',
      'pf5.p': 'Planeador de kit de emergência familiar. Calcula quantidades por pessoa e por hora, avisa validades. Em 6 idiomas.',
      'pf6.p': 'Gerador de códigos QR sem fricção: cola o link, gera, descarrega. Sem contas nem tracking.',
      'pf7.p': 'Editor de podcast no browser: grava, corta, aplica fades e crossfade, normaliza e exporta em WAV ou MP3.',
      'pf8.p': 'Sample slicer e sequenciador de 16 passos com deteção de transientes, cadeia de efeitos, suporte MIDI e instalador desktop nativo.',
      'pf9.p': 'Ferramenta educativa open-source que introduz crianças do 1.º ciclo à modelação e impressão 3D, com camadas, modo orifício, conquistas e export STL.',
      'pf11.p': 'Cartões de revisão por ano e disciplina — 541 cartões do 5.º ano, com pergunta, resposta e explicação.',
      'pf12.p': 'Catálogo de atividades práticas com micro:bit: código pronto e guião do dinamizador para cada sessão.',
      'pf13.p': 'Diário pessoal privado — texto, áudio, fotos, vídeos e emoções, guardado no dispositivo.',
      'pf.live': 'ver ao vivo',
      'pf.soon': 'em breve',
    },

    /* ── EN ─────────────────────────────────────────────────── */
    en: {
      /* Nav */
      'nav.home':       'home',
      'nav.work':        'work',
      'nav.cta':        'book a call →',

      /* Hero */
      'hero.tag':       'DAVID MARQUES · PRODUCT STUDIO, AI-ACCELERATED',
      'hero.title':     'Artificial intelligence,<br>work processes<br>and <em>custom products.</em>',
      'hero.hint':      '← move mouse to tilt / click to burst →',

      /* Services (kept as a note in section 01) */
      'svc.note.label': 'Services I develop with partners',
      'svc1.h3':        'Task automation',
      'svc2.h3':        'Processes & tools',
      'svc3.h3':        'Training & mentoring',

      /* Learning showcase */
      'la.eyebrow':     '/ 02 — LEARNING',
      'la.h2':          'Products that teach <em>by doing</em>.',
      'la.desc':        'Tools simple enough for a classroom, built with the same product rigour.',
      'lp5.p':          'Record and edit your class podcast right in the browser — nothing to install, ready to publish.',

      /* Ambition */
      'amb.h2':         'A <em>product studio</em> for the AI era.',

      /* Serious products showcase */
      'sp.eyebrow':     '/ 03 — PRODUCTS',
      'sp.h2':          'Proof of <em>professional craft</em>.',
      'work.cta':       'View all 12 products →',

      /* CTA */
      'cta.h2':         'Lose the lag.<br><em>Get the edge.</em>',
      'cta.p':          'Free 30-minute diagnostic. No slides, no commission — just an honest conversation about where you can gain time and competitiveness.',
      'cta.primary':    'Book a diagnostic →',
      'cta.secondary':  'View portfolio →',

      /* Footer */
      'foot.copy':      '© 2026 MONCO.IO / DAVID FERREIRA MARQUES',

      /* About content (now on homepage) */
      'about.eyebrow':  '/ 01 — ABOUT ME',
      'about.h1':       'I build with <em>speed</em>,<br>deliver with care.',
      'about.byline':   'David Ferreira Marques — product studio. <a href="https://www.linkedin.com/in/dferreiramarques/" target="_blank" rel="noopener">LinkedIn ↗</a>',
      'about.p1':       'monco.io is my product studio — it was born from a simple observation: <strong>a whole generation of businesses is losing its competitive edge</strong> — not for lack of talent, but because they\'re trapped in tools and processes from another decade.',
      'about.p2':       'I\'m not a traditional consultancy. I don\'t make pretty slides with 18-month timelines. I\'m a product studio that applies AI, automation and vibe coding to deliver results in <strong>days, not quarters</strong>.',
      'about.p3b':      'I work as an external resource, hired by the task or by the project: I solve workflows, automation and build custom product. My partners can be businesses looking to modernise operations, or other vibe-coding studios and independent developers who need an extra senior pair of hands for a sprint, without a full-time hire.',
      'about.p3':       'Every project delivers something running in the first week — your team ends up faster, more autonomous, more competitive.',
      'about.pr1.h5':   'Ship, don\'t slide.',
      'about.pr1.p':    'I deliver running software, not decks. Every conversation ends with something deployable.',
      'about.pr2.h5':   'AI as default.',
      'about.pr2.p':    'It\'s not a feature, it\'s the substrate. Thinking AI from day one changes everything.',
      'about.pr3.h5':   'People over process.',
      'about.pr3.p':    'Your team knows the business. I co-build with them, not for them.',
      'about.pr4.h5':   'Days, not quarters.',
      'about.pr4.p':    'Speed is a feature. Results in days, not quarters.',

      /* Work page */
      'wp.eyebrow':     '/ SELECTED WORK · 12 PRODUCTS',
      'wp.h2':          'Things I\'ve <em>shipped</em>.',
      'wp.desc':        'Live products, not prototypes. Click to open.',
      'pf1.p': 'Kanban task management with multiple boards, an idea archive and Google Drive sync.',
      'pf2.p': 'Habit cards on weekly, monthly and annual cycles that reset themselves. Pro tier adds cloud sync.',
      'pf3.p': 'Emoji wallpaper generator with six layout patterns, glow controls and export up to QHD+.',
      'pf4.p': 'Browser-based stamp designer: draw or import SVG, export a print-ready STL for 3D printing.',
      'pf5.p': 'Family emergency kit planner. Calculates quantities per person and hour, flags expiry dates. In 6 languages.',
      'pf6.p': 'Frictionless QR code generator: paste a link, generate, download. No accounts, no tracking.',
      'pf7.p': 'Browser podcast editor: record, cut, apply fades and crossfade, normalise and export to WAV or MP3.',
      'pf8.p': 'Sample slicer and 16-step sequencer with transient detection, an effects chain, MIDI support and a native desktop installer.',
      'pf9.p': 'Open-source educational tool introducing primary-school children to 3D modelling and printing, with layers, hole mode, achievements and STL export.',
      'pf11.p': 'Revision flashcards by year and subject — 541 cards for 5th grade, each with a question, answer and explanation.',
      'pf12.p': 'Catalogue of hands-on micro:bit activities: ready-to-run code and a facilitator script for each session.',
      'pf13.p': 'A private personal diary — text, audio, photos, video and moods, stored on-device.',
      'pf.live': 'view live',
      'pf.soon': 'coming soon',
    }
  };

  /* ── Engine ──────────────────────────────────────────────────────── */
  let currentLang = localStorage.getItem('monco-lang') || 'pt';

  function t(key){ return STRINGS[currentLang][key] || STRINGS.pt[key] || key; }

  function applyTranslations(){
    /* text content */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    /* innerHTML (supports em, strong, br) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    /* attributes */
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const [attr, key] = el.dataset.i18nAttr.split(':');
      el.setAttribute(attr, t(key));
    });
    /* lang toggle buttons */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.lang === currentLang);
    });
    /* html lang attribute */
    document.documentElement.lang = currentLang;
  }

  function setLang(lang){
    currentLang = lang;
    localStorage.setItem('monco-lang', lang);
    applyTranslations();
  }

  /* ── Init ────────────────────────────────────────────────────────── */
  function init(){
    /* Wire up toggle buttons */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
    applyTranslations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Expose for external use */
  window.moncoI18n = { setLang, t, currentLang: () => currentLang };
})();
