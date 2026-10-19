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
      'nav.method':     'método',
      'nav.cta':        'linkedin ↗',

      /* Hero */
      'hero.hint':      '← mexe o rato / clica para burst →',

      /* Services (kept as a note in section 01) */

      /* Learning showcase */
      'lp5.p': 'Grava e edita podcasts no browser, sem instalar nada, para qualquer escola produzir e partilhar áudio sem meios especiais. Pronto a gravar, com ferramentas de edição pensadas para quem não é técnico.',

      /* Ambition */

      /* Serious products showcase */
      'sp.eyebrow':     '/ 03 — PRODUTOS',

      /* CTA */

      /* Footer */
      'foot.copy':      '© 2026 MONCO.IO / DAVID FERREIRA MARQUES',

      /* About content (now on homepage) */

      /* Work page */
      'pf1.p': 'O Kanban mais simples: To Do, In Progress, Done. Sem perda de tempo nem complexidade desnecessária; uma ferramenta que trabalha para a tua produtividade.',
      'pf2.p': 'Cartões de hábitos com ciclos semanais, mensais e anuais que se renovam sozinhos. Versão Pro com sync na cloud.',
      'pf3.p': 'Gerador de wallpapers a partir de emojis, com seis padrões de composição, controlo de brilho e export até QHD+.',
      'pf4.p': 'Editor de carimbos no browser: desenha ou importa SVG e exporta um STL pronto a imprimir em 3D.',
      'pf5.p': 'Planeador de kit de emergência familiar. Calcula quantidades por pessoa e por hora, avisa validades. Em 6 idiomas.',
      'pf6.p': 'Gerador de códigos QR sem fricção: cola o link, gera, descarrega. Sem contas nem tracking.',
      'pf7.p': 'Editor de podcast no browser: grava, corta, aplica fades e crossfade, normaliza e exporta em WAV ou MP3.',
      'pf8.p': 'Converte o sinal do teu microfone num sampler e caixa de ritmos poderosos, com um fluxo pensado para improvisação em tempo real.',
      'pf9.p': 'Introduz a modelação para impressão 3D a alunos do 1.º ciclo e a quem nunca modelou: numa sessão de 2 horas, cada um chega à impressão do seu primeiro projecto. Fluxo simples de extrusão e corte, com gestão de projectos pela sala do professor.',
      'pf11.p': 'Cartões de revisão por ano e disciplina — 541 cartões do 5.º ano, com pergunta, resposta e explicação.',
      'pf12.p': 'Catálogo de atividades práticas com micro:bit: código pronto e guião do dinamizador para cada sessão.',
      'pf13.p': 'Diário pessoal privado — texto, áudio, fotos, vídeos e emoções, guardado no dispositivo.',
      /* Method teaser (home) */

      /* Method page */
      'm.eyebrow': '/ MÉTODO',
      'm.title': 'Eu dirijo.<br><em>A IA executa.</em>',
      'm.intro1': 'Esta página explica como crio produtos digitais em colaboração com inteligência artificial: quem faz o quê, onde estão as decisões e porque tudo isto é transparente.',
      'm.intro2': 'Não é um disclaimer, é uma <strong>declaração de método</strong>. Há quem use a IA para automatizar e há quem a use para substituir trabalho sem critério. Eu uso-a como ferramenta de materialização: a visão, a direcção criativa e a responsabilidade ficam do lado humano.',
      'm.s1.eyebrow': '/ 01 — CO-CRIAÇÃO',
      'm.s1.h2': 'Co-criar não é <em>gerar automaticamente</em>.',
      'm.s1.p1': 'É uma prática de trabalho em que alguém com visão e intenção dirige uma ferramenta com enorme capacidade de execução. O resultado é co-produzido, mas a autoria criativa tem uma origem clara.',
      'm.s1.p2': 'A <strong>ideia</strong> nasce em mim: o conceito, o problema, a experiência. A <strong>execução</strong> é delegada à IA: código, texto, estrutura, variantes. O <strong>julgamento</strong> é meu: o que fica, o que se rejeita, o que se itera. E a <strong>responsabilidade</strong> também: quem assina o produto, responde por ele.',
      'm.s1.p3': 'É parecido com um director criativo que trabalha com uma equipa de execução muito capaz, com uma diferença: esta equipa não tem iniciativa, nem gosto, nem visão. Trabalha dentro do espaço que eu defino.',
      'm.s2.eyebrow': '/ 02 — PAPÉIS',
      'm.s2.h2': 'Quem faz <em>o quê</em>.',
      'm.s2.desc': 'Em todos os projectos, a divisão de papéis é a mesma.',
      'm.david': 'David', 'm.ai': 'IA',
      'm.d1.h': 'Visão e conceito', 'm.d1.p': 'O que o produto é, que problema resolve, a quem se dirige, o que o diferencia. Decido isto antes de existir uma linha de código.',
      'm.d2.h': 'Direcção de produto', 'm.d2.p': 'Roadmap, prioridades, o que entra e o que fica de fora. O produto avança porque decido que avança e para porque decido que está pronto.',
      'm.d3.h': 'Direcção de arte e design', 'm.d3.p': 'Paleta, layout, tipografia, hierarquia, tom de voz, sensação geral. A IA propõe; eu decido o que fica.',
      'm.d4.h': 'Validação', 'm.d4.p': 'Em cada iteração testo, uso, critico e corrijo. Os bugs que encontro e os fluxos que rejeito ficam documentados nas interacções de trabalho.',
      'm.d5.h': 'Direcção técnica', 'm.d5.p': 'Arquitectura, tecnologias, limites e trade-offs. Quando a IA propõe uma solução, sou eu a avaliar se serve o produto a longo prazo.',
      'm.a1.h': 'Materializa', 'm.a1.p': 'Traduz uma ideia, uma descrição ou uma correcção em algo concreto: código, texto, estrutura, regras.',
      'm.a2.h': 'Acelera', 'm.a2.p': 'O que levaria dias a um programador a solo leva horas numa sessão dirigida. Mais ciclos de teste no mesmo projecto.',
      'm.a3.h': 'Propõe variantes', 'm.a3.p': 'Quando peço opções, gera alternativas. Só têm valor depois de eu as avaliar e escolher.',
      'm.a4.h': 'Documenta e formaliza', 'm.a4.p': 'Estrutura e redige o que descrevo. A substância é minha; a formalização é dela.',
      'm.a5.h': 'O que não faz', 'm.a5.p': 'Não tem visão, não sabe o que o produto deve ser, não tem gosto, não valida, não decide, não assume responsabilidade. Sem direcção humana clara, produz output genérico.',
      'm.s3.eyebrow': '/ 03 — CADEIA DE VALOR',
      'm.s3.h2': 'A IA é uma <em>alavanca</em>.',
      'm.s3.p1': 'Uma alavanca multiplica a força de quem a maneja, mas não tem força própria. O valor do produto não vem da alavanca; vem de quem a usa com uma intenção clara. <strong>Sem direcção humana forte, é ruído. Com ela, é aí que o valor aparece.</strong>',
      'm.c1a': 'Visão e conceito original', 'm.c1b': 'Velocidade de execução',
      'm.c2a': 'Identidade e direcção criativa', 'm.c2b': 'Capacidade técnica de materialização',
      'm.c3a': 'Decisões estratégicas e de produto', 'm.c3b': 'Geração de variantes e opções',
      'm.c4a': 'Validação, testes e correcção', 'm.c4b': 'Formalização e redacção estruturada',
      'm.c5a': 'Gosto, intenção e julgamento', 'm.c5b': 'Consistência e escala de output',
      'm.c6a': 'Responsabilidade sobre o produto', 'm.c6b': 'Nenhuma iniciativa autónoma',
      'm.s3.p2': 'Num projecto de jogo, por exemplo: as mecânicas, as regras, os temas, os nomes e as decisões de design são meus. O código do servidor, o cliente web, a lógica implementada e a documentação nascem da colaboração, sempre sob direcção e validação contínua.',
      'm.s4.eyebrow': '/ 04 — TRANSPARÊNCIA',
      'm.s4.h2': 'Declaro o uso de IA <em>por princípio</em>.',
      'm.t1.h': 'Honestidade sobre o processo', 'm.t1.p': 'Esconder a IA não seria honesto para com clientes, parceiros ou público. E seria contraproducente: o valor do trabalho está na qualidade da direcção, não em esconder como foi feito.',
      'm.t2.h': 'O papel humano, bem visto', 'm.t2.p': 'Declarar o uso de IA não diminui o meu papel, clarifica-o. Quando se percebe o que a IA faz e o que não faz, a visão, a direcção e a validação ficam mais evidentes.',
      'm.quote': 'Um realizador não opera a câmara. Um arquitecto não assenta tijolos. Um director criativo não escreve o código.<br><em>A autoria é a visão, não a execução.</em>',
      'm.s5.eyebrow': '/ 05 — LIMITES',
      'm.s5.h2': 'O que este modelo <em>não é</em>.',
      'm.n1.h': 'Não é geração automática', 'm.n1.p': 'Não escrevo um prompt e publico o resultado. Cada output é iterado, testado, corrigido e validado várias vezes antes de ser produto.',
      'm.n2.h': 'Não é plágio', 'm.n2.p': 'Os outputs são gerados, não copiados de terceiros. Código, textos e estruturas são originais no contexto de cada projecto.',
      'm.n3.h': 'Não é substituir trabalho alheio', 'm.n3.p': 'Não uso IA para fazer o trabalho que estaria a pagar a outra pessoa. É a minha ferramenta de produção, como o software de um designer ou o sintetizador de um músico.',
      'm.n4.h': 'Não é ausência de competência', 'm.n4.p': 'Dirigir bem uma IA exige perceber de design, código, produto e experiência de utilizador. O meu background é design industrial, engenharia de processos e desenvolvimento de produto.',
      'm.n5.h': 'Não é co-autoria legal', 'm.n5.p': 'A IA não é uma pessoa, não tem direitos e não é co-autora em sentido jurídico. O produto é meu. A IA é uma ferramenta, sofisticada, mas ferramenta.',
      'm.s6.eyebrow': '/ 06 — LEITURA',
      'm.s6.h2': 'Como ler o que <em>faço</em>.',
      'm.s6.desc': 'Qualquer produto ou documento que sai deste processo tem as mesmas quatro características.',
      'm.r1.h': '1. A ideia é minha', 'm.r1.p': 'Se um jogo tem certas mecânicas, fui eu que as defini. Se um produto tem certa identidade visual, fui eu que a escolhi. A origem é humana e documentável.',
      'm.r2.h': '2. A execução foi acelerada por IA', 'm.r2.p': 'Código, redacção e estrutura foram materializados com IA, sob a minha direcção. Isto afecta a velocidade a que foi possível produzir, não a qualidade nem a originalidade.',
      'm.r3.h': '3. A validação é humana', 'm.r3.p': 'O que chegou ao final é o que sobreviveu à minha avaliação crítica, incluindo o que rejeitei e as direcções que reverti.',
      'm.r4.h': '4. A responsabilidade é minha', 'm.r4.p': 'Qualquer questão, comercial, criativa, técnica ou ética, é respondida por mim. A IA não assina, não garante e não responde.',
      'm.end.h2': 'Dirigido, validado<br><em>e assumido.</em>',
      'm.end.p': 'Este texto pode ser citado, partilhado ou incluído na documentação dos meus projectos como declaração de método de trabalho.',

      'pj.diagramico': 'Desenha fluxos, processos e notas de reunião em minutos e partilha-os por link, com o diagrama embebido. Exporta texto compacto que a IA lê com menos tokens, e ainda Mermaid, SVG, PNG e draw.io.',
      'pj.rbac': 'Documenta roles e permissões de uma app de forma simples, editável e fácil de partilhar com a equipa. Nasceu de um reverse engineering de um RBAC sem documentação.',
      'pj.sprint': 'Um Design Sprint de 5 dias condensado em 8 horas (mais 8 opcionais), com IA e team building, para dar agilidade à equipa na resolução de problemas complexos de negócio. Traz o guião do facilitador, passo a passo.',
      'pj.warf': 'Converte o sinal do teu microfone em notas MIDI, com um fluxo áudio/MIDI pensado para improvisação em tempo real. VST3 gratuito, app desktop e app no browser.',
      'hero.tag': 'DAVID FERREIRA MARQUES · MONCO.IO',
      'hero.title': 'Crio produtos digitais<br>com <em>IA sob direcção humana.</em>',
      'about.eyebrow': '/ 01 — SOBRE MIM',
      'about.byline': 'David Ferreira Marques. <a href="https://www.linkedin.com/in/dferreiramarques/" target="_blank" rel="noopener">LinkedIn ↗</a>',
      'about.p1': 'Sou o David. Venho do <strong>design industrial, da engenharia de processos e do desenvolvimento de produto</strong>, e hoje crio produtos digitais em colaboração com inteligência artificial.',
      'about.p2': 'A monco.io é onde isso acontece: um estúdio de uma pessoa com uma equipa de execução artificial. A ideia é minha, desenho a experiência, decido o que fica e respondo pelo resultado. A IA materializa e acelera.',
      'about.p3': 'Quase tudo nasce de uma necessidade real: documentar o que ninguém documentou, pôr uma turma a gravar um podcast, ensinar uma criança a modelar em 3D, improvisar com um microfone.',
      'mt.eyebrow': '/ 02 — COMO TRABALHO',
      'mt.h2': 'Eu dirijo. <em>A IA executa.</em>',
      'mt.desc': 'Um método com regras claras, aplicado em todos os produtos abaixo e documentado em cada um.',
      'mt.s1.h': '1. Começa na visão',
      'mt.s1.p': 'Antes de existir código, escrevo a ideia, o público e o que o produto não vai ser.',
      'mt.s2.h': '2. A IA propõe, eu decido',
      'mt.s2.p': 'Perante cada escolha de design, produto ou arquitectura, vêm opções com recomendação. A decisão é minha.',
      'mt.s3.h': '3. Validação humana',
      'mt.s3.p': 'Cada iteração é testada, criticada e corrigida por mim. Só fica o que sobrevive a essa avaliação.',
      'mt.s4.h': '4. Tudo fica registado',
      'mt.s4.p': 'Decisões, rejeições e reversões ficam documentadas. A autoria é clara, e pode ser verificada.',
      'mt.cta': 'Ler o método completo →',
      'cta.eyebrow': '/ 04 — PARCERIAS',
      'cta.h2': 'Vamos construir<br><em>algo juntos.</em>',
      'cta.p': 'Tens um problema por resolver, um business case ou uma ideia que precisa de ser testada? Gosto de co-criar com quem conhece bem o problema: tu trazes o contexto, eu trago a direcção de produto e a execução com IA. Começamos por uma conversa.',
      'cta.linkedin': 'LinkedIn ↗',
      'cta.email': 'hello@monco.io',
      'cta.secondary': 'Ver portfólio →',
      'sp.h2': 'Suites de <em>produtos</em>.',
      'sp.desc': 'Cada suite junta apps que se complementam. Se alguma te interessa para usar, licenciar ou adaptar, fala comigo.',
      'wp.eyebrow': '/ PRODUTOS · 4 SUITES',
      'wp.h2': 'Coisas que <em>lancei</em>.',
      'wp.desc': 'Apps online, agrupadas por propósito. Clica para abrir.',
      'su1.h': 'Produtividade',
      'su1.p': 'Do primeiro esboço à documentação: pensar, planear, executar e registar.',
      'su2.h': 'STEAM Learning',
      'su2.p': 'Ferramentas para aprender a fazer, em ciência, tecnologia, engenharia, arte e matemática.',
      'su3.h': 'Music Production',
      'su3.p': 'Do microfone ao MIDI e ao sampler: ferramentas para improvisar e produzir.',
      'su4.h': 'Funtime',
      'su4.p': 'Jogo e diversão.',
      'r.diagramico': 'IDEAÇÃO E LÓGICA',
      'r.roadmaps': 'ESTRATÉGIA E PLANIFICAÇÃO',
      'r.taskboards': 'EXECUÇÃO · V1.0',
      'r.rbac': 'DOCUMENTAÇÃO · BETA',
      'r.3d': 'EDUCAÇÃO · BETA',
      'r.stampforge': 'IMPRESSÃO 3D · BETA',
      'r.kerf': 'SAMPLER · V1.0',
      'r.warf': 'ÁUDIO → MIDI · BETA',
      'r.bitnik': 'PLATAFORMA DE JOGOS',
      'r.sprint': 'WORKSHOP · BETA',
      'r.podcast': 'ÁUDIO · BETA',
      'r.soon': 'EM PREPARAÇÃO',
      'pj.roadmaps': 'Roadmaps Now / Next / Later, sem prometer datas. Privado por defeito, partilha-se com um link ou embed, e os dados ficam no teu Google Drive.',
      'pj.bitnik': 'Plataforma online que transforma o livro de regras de um jogo de tabuleiro numa versão jogável no browser e no telemóvel: mesas com amigos ou bots, e consola para editoras.',
      'pj.tbd': 'Descrição em breve.',
      'pf.live': 'ver ao vivo',
      'pf.soon': 'em breve',
    },

    /* ── EN ─────────────────────────────────────────────────── */
    en: {
      /* Nav */
      'nav.home':       'home',
      'nav.work':        'work',
      'nav.method':     'method',
      'nav.cta':        'linkedin ↗',

      /* Hero */
      'hero.hint':      '← move mouse to tilt / click to burst →',

      /* Services (kept as a note in section 01) */

      /* Learning showcase */
      'lp5.p': 'Record and edit podcasts in the browser, with nothing to install, so any school can produce and share audio without special equipment. Ready to record, with editing tools made for non-technical people.',

      /* Ambition */

      /* Serious products showcase */
      'sp.eyebrow':     '/ 03 — PRODUCTS',

      /* CTA */

      /* Footer */
      'foot.copy':      '© 2026 MONCO.IO / DAVID FERREIRA MARQUES',

      /* About content (now on homepage) */

      /* Work page */
      'pf1.p': 'The simplest Kanban: To Do, In Progress, Done. No wasted time or needless complexity; a tool that works for your productivity.',
      'pf2.p': 'Habit cards on weekly, monthly and annual cycles that reset themselves. Pro tier adds cloud sync.',
      'pf3.p': 'Emoji wallpaper generator with six layout patterns, glow controls and export up to QHD+.',
      'pf4.p': 'Browser-based stamp designer: draw or import SVG, export a print-ready STL for 3D printing.',
      'pf5.p': 'Family emergency kit planner. Calculates quantities per person and hour, flags expiry dates. In 6 languages.',
      'pf6.p': 'Frictionless QR code generator: paste a link, generate, download. No accounts, no tracking.',
      'pf7.p': 'Browser podcast editor: record, cut, apply fades and crossfade, normalise and export to WAV or MP3.',
      'pf8.p': 'Turns your microphone signal into a powerful sampler and drum machine, with a workflow built for real-time improvisation.',
      'pf9.p': 'Introduces 3D-print modelling to primary-school pupils and anyone who has never modelled: in a 2-hour session, each one gets their first project printed. A simple extrude-and-cut workflow, with project management through the teacher\'s room.',
      'pf11.p': 'Revision flashcards by year and subject — 541 cards for 5th grade, each with a question, answer and explanation.',
      'pf12.p': 'Catalogue of hands-on micro:bit activities: ready-to-run code and a facilitator script for each session.',
      'pf13.p': 'A private personal diary — text, audio, photos, video and moods, stored on-device.',
      /* Method teaser (home) */

      /* Method page */
      'm.eyebrow': '/ METHOD',
      'm.title': 'I direct.<br><em>AI executes.</em>',
      'm.intro1': 'This page explains how I build digital products in collaboration with artificial intelligence: who does what, where the decisions sit, and why all of it is out in the open.',
      'm.intro2': 'It\'s not a disclaimer, it\'s a <strong>statement of method</strong>. Some people use AI to automate, others to replace work without judgement. I use it as a tool for making things real: vision, creative direction and accountability stay on the human side.',
      'm.s1.eyebrow': '/ 01 — CO-CREATION',
      'm.s1.h2': 'Co-creating isn\'t <em>auto-generating</em>.',
      'm.s1.p1': 'It\'s a way of working where someone with vision and intent directs a tool with enormous capacity for execution. The result is co-produced, but creative authorship has a clear origin.',
      'm.s1.p2': 'The <strong>idea</strong> starts with me: the concept, the problem, the experience. <strong>Execution</strong> is delegated to AI: code, copy, structure, variants. <strong>Judgement</strong> is mine: what stays, what\'s rejected, what gets iterated. So is <strong>accountability</strong>: whoever signs the product answers for it.',
      'm.s1.p3': 'It\'s closer to a creative director working with a very capable execution team, with one difference: this team has no initiative, no taste and no vision. It works inside the space I define.',
      'm.s2.eyebrow': '/ 02 — ROLES',
      'm.s2.h2': 'Who does <em>what</em>.',
      'm.s2.desc': 'On every project, the split of roles is the same.',
      'm.david': 'David', 'm.ai': 'AI',
      'm.d1.h': 'Vision and concept', 'm.d1.p': 'What the product is, what problem it solves, who it\'s for, what sets it apart. I decide this before a line of code exists.',
      'm.d2.h': 'Product direction', 'm.d2.p': 'Roadmap, priorities, what goes in and what stays out. The product moves forward because I decide it does, and stops because I decide it\'s ready.',
      'm.d3.h': 'Art and design direction', 'm.d3.p': 'Palette, layout, typography, hierarchy, tone of voice, overall feel. AI proposes; I decide what stays.',
      'm.d4.h': 'Validation', 'm.d4.p': 'In every iteration I test, use, criticise and fix. The bugs I find and the flows I reject are documented in the working interactions.',
      'm.d5.h': 'Technical steering', 'm.d5.p': 'Architecture, technologies, limits and trade-offs. When AI proposes a solution, I judge whether it serves the product in the long run.',
      'm.a1.h': 'Materialises', 'm.a1.p': 'Turns an idea, a description or a correction into something concrete: code, copy, structure, rules.',
      'm.a2.h': 'Accelerates', 'm.a2.p': 'What would take a solo developer days takes hours in a directed session. More test cycles within the same project.',
      'm.a3.h': 'Proposes variants', 'm.a3.p': 'When I ask for options, it generates alternatives. They only have value once I\'ve judged and chosen.',
      'm.a4.h': 'Documents and formalises', 'm.a4.p': 'Structures and writes up what I describe. The substance is mine; the formalisation is theirs.',
      'm.a5.h': 'What it doesn\'t do', 'm.a5.p': 'No vision, no idea of what the product should be, no taste. It doesn\'t validate, decide or take responsibility. Without clear human direction it produces generic output.',
      'm.s3.eyebrow': '/ 03 — VALUE CHAIN',
      'm.s3.h2': 'AI is a <em>lever</em>.',
      'm.s3.p1': 'A lever multiplies the force of whoever uses it, but has none of its own. The value of the product doesn\'t come from the lever; it comes from the person using it with clear intent. <strong>Without strong human direction it\'s noise. With it, that\'s where value shows up.</strong>',
      'm.c1a': 'Original vision and concept', 'm.c1b': 'Speed of execution',
      'm.c2a': 'Identity and creative direction', 'm.c2b': 'Technical capacity to materialise',
      'm.c3a': 'Strategic and product decisions', 'm.c3b': 'Generating variants and options',
      'm.c4a': 'Validation, testing and correction', 'm.c4b': 'Formalisation and structured writing',
      'm.c5a': 'Taste, intent and judgement', 'm.c5b': 'Consistency and scale of output',
      'm.c6a': 'Accountability for the product', 'm.c6b': 'No autonomous initiative',
      'm.s3.p2': 'In a game project, for example: the mechanics, rules, themes, names and design decisions are mine. The server code, web client, implemented logic and documentation come out of the collaboration, always under continuous direction and validation.',
      'm.s4.eyebrow': '/ 04 — TRANSPARENCY',
      'm.s4.h2': 'I disclose AI use <em>on principle</em>.',
      'm.t1.h': 'Honest about the process', 'm.t1.p': 'Hiding AI wouldn\'t be honest with clients, partners or the public. It would also backfire: the value of the work is in the quality of the direction, not in hiding how it was made.',
      'm.t2.h': 'The human role, clearly seen', 'm.t2.p': 'Disclosing AI use doesn\'t diminish my role, it clarifies it. Once it\'s clear what AI does and doesn\'t do, the vision, direction and validation stand out more.',
      'm.quote': 'A film director doesn\'t operate the camera. An architect doesn\'t lay bricks. A creative director doesn\'t write the code.<br><em>Authorship is the vision, not the execution.</em>',
      'm.s5.eyebrow': '/ 05 — LIMITS',
      'm.s5.h2': 'What this model <em>isn\'t</em>.',
      'm.n1.h': 'Not auto-generation', 'm.n1.p': 'I don\'t write a prompt and publish the result. Every output is iterated, tested, corrected and validated several times before it counts as product.',
      'm.n2.h': 'Not plagiarism', 'm.n2.p': 'Outputs are generated, not copied from third parties. Code, copy and structures are original in the context of each project.',
      'm.n3.h': 'Not replacing other people\'s work', 'm.n3.p': 'I don\'t use AI to do work I would otherwise pay someone else for. It\'s my own production tool, like a designer\'s software or a musician\'s synthesiser.',
      'm.n4.h': 'Not a lack of skill', 'm.n4.p': 'Directing AI well takes real understanding of design, code, product and user experience. My background is industrial design, process engineering and product development.',
      'm.n5.h': 'Not legal co-authorship', 'm.n5.p': 'AI is not a person, has no rights and is not a co-author in the legal sense. The product is mine. AI is a tool, a sophisticated one, but a tool.',
      'm.s6.eyebrow': '/ 06 — READING',
      'm.s6.h2': 'How to read what I <em>make</em>.',
      'm.s6.desc': 'Anything that comes out of this process has the same four traits.',
      'm.r1.h': '1. The idea is mine', 'm.r1.p': 'If a game has certain mechanics, I defined them. If a product has a certain visual identity, I chose it. The origin is human and documentable.',
      'm.r2.h': '2. Execution was AI-accelerated', 'm.r2.p': 'Code, copy and structure were materialised with AI under my direction. That affects how fast it could be produced, not its quality or originality.',
      'm.r3.h': '3. Validation is human', 'm.r3.p': 'What reached the end is what survived my critical review, including what I rejected and the directions I reverted.',
      'm.r4.h': '4. Accountability is mine', 'm.r4.p': 'Any question, commercial, creative, technical or ethical, is answered by me. AI doesn\'t sign, guarantee or answer.',
      'm.end.h2': 'Directed, validated<br><em>and owned.</em>',
      'm.end.p': 'This text may be quoted, shared or included in my project documentation as a statement of working method.',

      'pj.diagramico': 'Draw flows, processes and meeting notes in minutes and share them by link, with the diagram embedded. Exports compact text that AI reads with fewer tokens, plus Mermaid, SVG, PNG and draw.io.',
      'pj.rbac': 'Document an app\'s roles and permissions in a simple, editable way that\'s easy to share with the team. Born from reverse-engineering an undocumented RBAC.',
      'pj.sprint': 'A 5-day Design Sprint condensed into 8 hours (plus 8 optional), with AI and team building, to make your team more agile at solving complex business problems. Comes with a step-by-step facilitator script.',
      'pj.warf': 'Turns your microphone signal into MIDI notes, with an audio/MIDI workflow built for real-time improvisation. Free VST3, desktop app and browser app.',
      'hero.tag': 'DAVID FERREIRA MARQUES · MONCO.IO',
      'hero.title': 'I build digital products<br>with <em>AI under human direction.</em>',
      'about.eyebrow': '/ 01 — ABOUT ME',
      'about.byline': 'David Ferreira Marques. <a href="https://www.linkedin.com/in/dferreiramarques/" target="_blank" rel="noopener">LinkedIn ↗</a>',
      'about.p1': 'I\'m David. I come from <strong>industrial design, process engineering and product development</strong>, and today I build digital products in collaboration with artificial intelligence.',
      'about.p2': 'monco.io is where that happens: a one-person studio with an artificial execution team. The idea is mine, I design the experience, I decide what stays and I answer for the result. AI makes it real and speeds it up.',
      'about.p3': 'Almost everything starts from a real need: documenting what nobody documented, getting a class to record a podcast, teaching a child to model in 3D, improvising with a microphone.',
      'mt.eyebrow': '/ 02 — HOW I WORK',
      'mt.h2': 'I direct. <em>AI executes.</em>',
      'mt.desc': 'A method with clear rules, applied to every product below and documented in each one.',
      'mt.s1.h': '1. It starts with vision',
      'mt.s1.p': 'Before any code exists, I write down the idea, the audience and what the product won\'t be.',
      'mt.s2.h': '2. AI proposes, I decide',
      'mt.s2.p': 'For every design, product or architecture choice, options come with a recommendation. The decision is mine.',
      'mt.s3.h': '3. Human validation',
      'mt.s3.p': 'Every iteration is tested, criticised and corrected by me. Only what survives that review stays.',
      'mt.s4.h': '4. Everything is on record',
      'mt.s4.p': 'Decisions, rejections and reverts are documented. Authorship is clear, and can be checked.',
      'mt.cta': 'Read the full method →',
      'cta.eyebrow': '/ 04 — PARTNERSHIPS',
      'cta.h2': 'Let\'s build<br><em>something together.</em>',
      'cta.p': 'Got a problem to solve, a business case or an idea that needs testing? I like co-creating with people who know the problem well: you bring the context, I bring product direction and AI-powered execution. We start with a conversation.',
      'cta.linkedin': 'LinkedIn ↗',
      'cta.email': 'hello@monco.io',
      'cta.secondary': 'View portfolio →',
      'sp.h2': 'Product <em>suites</em>.',
      'sp.desc': 'Each suite groups apps that complement each other. If one interests you to use, license or adapt, talk to me.',
      'wp.eyebrow': '/ PRODUCTS · 4 SUITES',
      'wp.h2': 'Things I\'ve <em>shipped</em>.',
      'wp.desc': 'Live apps, grouped by purpose. Click to open.',
      'su1.h': 'Productivity',
      'su1.p': 'From first sketch to documentation: think, plan, execute and record.',
      'su2.h': 'STEAM Learning',
      'su2.p': 'Tools for learning by making, across science, technology, engineering, art and maths.',
      'su3.h': 'Music Production',
      'su3.p': 'From microphone to MIDI to sampler: tools to improvise and produce.',
      'su4.h': 'Funtime',
      'su4.p': 'Play and fun.',
      'r.diagramico': 'IDEATION & LOGIC',
      'r.roadmaps': 'STRATEGY & PLANNING',
      'r.taskboards': 'EXECUTION · V1.0',
      'r.rbac': 'DOCUMENTATION · BETA',
      'r.3d': 'EDUCATION · BETA',
      'r.stampforge': '3D PRINTING · BETA',
      'r.kerf': 'SAMPLER · V1.0',
      'r.warf': 'AUDIO → MIDI · BETA',
      'r.bitnik': 'GAMES PLATFORM',
      'r.sprint': 'WORKSHOP · BETA',
      'r.podcast': 'AUDIO · BETA',
      'r.soon': 'IN PROGRESS',
      'pj.roadmaps': 'Now / Next / Later roadmaps, without promising dates. Private by default, shared with a link or embed, and the data lives in your own Google Drive.',
      'pj.bitnik': 'Online platform that turns the rulebook of a board game into a version playable in the browser and on mobile: tables with friends or bots, and a console for publishers.',
      'pj.tbd': 'Description coming soon.',
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
