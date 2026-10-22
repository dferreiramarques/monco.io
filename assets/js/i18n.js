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


      'nav.home': 'home',


      'nav.method': 'método',


      'nav.cta': 'linkedin ↗',





      /* Footer */


      'foot.copy': '© 2026 MONCO.IO / DAVID FERREIRA MARQUES',





      /* ── Home: hero ── */


      'hero.tag': 'MONCO · POR DAVID FERREIRA MARQUES',


      'hero.title': 'A revolução do conhecimento<br>não se comenta. <em>Pratica-se.</em>',


      'hero.sub': 'A monco é um estúdio de design de produto: metodologias de design e design thinking, aceleradas por iterações ultrarrápidas de vibe-coding e validadas com quem tem domínio especializado — para lançar produtos e criar cenários de aprendizagem para quem aprende e quem ensina.',


      'hero.hint': '← mexe o rato / clica para burst →',





      /* ── Home: 01 revolução ── */


      'rev.eyebrow': '/ 01 — A REVOLUÇÃO',


      'rev.h2': 'A IA é a <em>fundação</em> do potencial criativo.',


      'rev.byline': 'David Ferreira Marques. <a href="https://www.linkedin.com/in/dferreiramarques/" target="_blank" rel="noopener">LinkedIn ↗</a>',


      'rev.p1': 'Estamos a assistir a uma revolução na forma como o conhecimento se cria e se transmite. As instituições que ensinam e as que produzem ainda trabalham em ciclos lentos, medindo o custo de cada erro como risco. A IA mudou essa matemática.',


      'rev.p2': 'A IA não é a ferramenta — é a <strong>fundação</strong>: expande o potencial criativo porque permite <strong>iterar mais e mais depressa</strong>, e <strong>validar ou descartar a baixo custo</strong>. Onde uma ideia custava semanas, hoje custa horas. O erro deixa de ser risco e passa a ser método.',


      'rev.p3': 'É aqui que a monco atua: cada experimento é <strong>experiência acumulada</strong>. Essa experiência converte-se em <strong>cenários de aprendizagem</strong> — para alunos e professores — e, quando a maturação o justifica, em <strong>produtos</strong>: mais rápidos, melhores, mais robustos e mais valiosos para quem os usa.',





      /* ── Home: 02 o ciclo ── */


      'cyc.eyebrow': '/ 02 — O CICLO',


      'cyc.h2': 'Experimenta. Descarta. <em>Repete.</em>',


      'cyc.h3': 'Valida. <em>Ensina. Lança.</em>',


      'cyc.desc': 'O estúdio corre este loop em cada experimento — e cada volta é mais barata, mais rápida e mais informada que a anterior.',


      'cyc.1.h': 'Ideia',


      'cyc.1.p': 'Visão e conceito primeiro: o que é, para quem é, e o que não vai ser.',


      'cyc.2.h': 'Iterar ultrarrápido',


      'cyc.2.p': 'Vibe-coding dirigido: várias versões num só dia, não um release por trimestre.',


      'cyc.3.h': 'Validar · descartar',


      'cyc.3.p': 'Cada versão custa pouco — descarta-se sem drama. Experts de domínio (SME) confirmam o que vale.',


      'cyc.4.h': 'Ensinar ou lançar',


      'cyc.4.p': 'Duas saídas: cenários de aprendizagem para quem aprende e ensina, ou produto no mundo quando está maduro.',


      'cyc.5.h': 'Aprender',


      'cyc.5.p': 'Cada ciclo deixa aprendizagens que tornam o próximo mais rápido, mais robusto e mais valioso.',


      'cyc.loop': 'o ciclo nunca termina: as aprendizagens reinvestem no próximo experimento',


      'mt.cta': 'Ler o método completo →',





      /* ── Home: 03 as estações ── */


      'labs.eyebrow': '/ 03 — AS ESTAÇÕES',


      'labs.h2': 'Um estúdio, quatro <em>destinos.</em>',


      'labs.desc': 'Do estúdio partem quatro estações: quatro destinos de experimentação — e tudo o que eles ensinam. Os produtos são os artefactos: cada loop bem corrido deixa um.',


      'lab.open': 'visitar a estação →',





      'lab.spark.tag': 'Aprendizagens STEAM.',


      'lab.spark.desc': 'Atividades, ferramentas e workshops STEAM para alunos e professores: ideação, inovação, design thinking, fabricação digital e IA em formação.',


      'lab.spark.c1': 'workshops STEAM',


      'lab.spark.c2': 'design thinking',


      'lab.spark.c3': 'fabricação digital',


      'lab.spark.c4': 'IA em sala de aula',





      'lab.nimble.tag': 'Produtividade acelerada por IA.',


      'lab.nimble.desc': 'Produtividade e processos de trabalho acelerados pela IA: pensar, planear, executar e registar — do primeiro esboço à documentação.',


      'lab.nimble.c1': 'agile',


      'lab.nimble.c2': 'roadmaps',


      'lab.nimble.c3': 'sprints',


      'lab.nimble.c4': 'documentação',





      'lab.wave.tag': 'Criatividade e arte digital.',


      'lab.wave.desc': 'Ferramentas de produção musical e instrumentos performativos: do microfone ao MIDI, do sampler ao palco.',


      'lab.wave.c1': 'improviso ao vivo',


      'lab.wave.c2': 'áudio → MIDI',


      'lab.wave.c3': 'podcasts',


      'lab.wave.c4': 'performance',





      'lab.ludens.tag': 'O Homo Ludens.',


      'lab.ludens.desc': 'Jogos, game design e partilha de momentos: a estação do Homo Ludens, onde aprendemos a conhecer-nos e a conhecer os outros.',


      'lab.ludens.c1': 'jogos de tabuleiro',


      'lab.ludens.c2': 'game design',


      'lab.ludens.c3': 'team building',


      'lab.ludens.c4': 'diversão',





      /* ── Home: 04 para quem ── */


      'aud.eyebrow': '/ 04 — PARA QUEM',


      'aud.h2': 'Duas portas para o <em>mesmo estúdio.</em>',


      'aud.a1.h': 'Alunos e professores',


      'aud.a1.p': 'Cenários de aprendizagem e workshops que levam IA, fabricação digital e design thinking para dentro da sala de aula — com ferramentas que funcionam hoje, e não promessas para o próximo ano.',


      'aud.a2.h': 'Empresas e experts',


      'aud.a2.p': 'Quem tem domínio especializado encontra aqui a plataforma de validação das suas soluções: traz o contexto, o estúdio traz o ciclo — e o produto chega ao utilizador mais rápido, melhor, mais robusto e mais valioso.',





      /* ── Home: CTA ── */


      'cta.eyebrow': '/ 05 — PARCERIAS',


      'cta.h2': 'Junta-te à<br><em>revolução.</em>',


      'cta.p': 'Traz um problema por resolver, uma vontade de aprender ou um negócio para validar. Começamos por uma conversa: podes entrar como expert de validação, como parceiro de co-criação — ou abrir-nos a porta de uma sala de aula.',


      'cta.linkedin': 'LinkedIn ↗',


      'cta.email': 'hello@monco.io',





      /* ── Work page (removed — kept for safety) ── */


      'wp.eyebrow': '/ PRODUTOS',


      'wp.h2': 'Coisas que <em>lancei</em>.',





      /* ── Method page ── */


      'm.eyebrow': '/ CICLO DO ESTÚDIO',


      'm.title': 'Experimenta. Valida.<br><em>Ensina. Lança.</em>',


      'm.intro1': 'Esta página explica como o estúdio corre.',


      'm.intro2': 'Não é um disclaimer, é uma <strong>declaração de método</strong>.',


      'm.intro3': 'Mais do que um método, é uma <strong>metodologia</strong>.',


      'm.id.eyebrow': '/ QUEM ASSINA',


      'm.id.h2': 'Atrás do estúdio há <em>um percurso inteiro.</em>',


      'm.id.cap': 'DAVID FERREIRA MARQUES · DIRECTOR DO ESTÚDIO',


      'm.id.p1': 'Nada daqui nasce de um prompt solto. Nasce de anos a desenhar, a construir e a ensinar — primeiro em ciclos lentos, onde cada erro custava caro; agora numa estação onde iterar custa horas. A intuição de saber o que vale a pena descartar não se instala: aprende-se.',


      'm.id.p2': 'Design industrial, engenharia de processos e desenvolvimento de produto, com anos de sala de aula e de equipas a converter prática em aprendizagem. É essa experiência — acumulada, testada e transmitida — que dá à estação o seu critério.',


      'm.id.cv': 'Ver o percurso completo →',


      'm.s0.eyebrow': '/ 01 — O CICLO',


      'm.s0.h2': 'Iterar mais, <em>mais depressa.</em>',


      'm.s0.desc': 'Três princípios governam tudo o que o estúdio produz.',


      'm.s0.1.h': 'A IA como fundação',


      'm.s0.1.p': 'Não é acessório, é infra-estrutura: a alavanca está na cadência — mais ciclos de teste no mesmo projecto.',


      'm.s0.2.h': 'Validação em duas camadas',


      'm.s0.2.p': 'O diretor valida a entrada, rápido; o utilizador fecha a validação, no fim, com prova de uso real.',


      'm.s0.3.h': 'Converter em aprendizagem',


      'm.s0.3.p': 'Nada se registra para arquivo: a captura destila-se e optimiza o próximo output da IA.',


      'm.s0.v2.h': 'Validação em duas camadas.',


      'm.s0.v2.p1': '<strong>O SME valida a entrada.</strong> O perito de domínio decide rápido — ideação e priorização — para acelerar o ciclo sem comités.',


      'm.s0.v2.p2': '<strong>O utilizador fecha a validação.</strong> Por defeito, dois testes por ciclo: um de <strong>levantamento</strong>, antes de construir; um de <strong>validação</strong>, no fim. O contrato de ciclo pode ajustar a barra.',


      'm.s0.v2.p3': 'Quando o teste directo não é possível, o substituto é uso próprio documentado — e as hipóteses ficam marcadas para validação no lançamento, que as fecha em escala.',


      'm.s0.d2.h': 'Documentar é armar o próximo ciclo.',


      'm.s0.d2.p1': 'A fundação que dirige a execução é privada por princípio. O que se lança é o produto, aberto e documentado — a fundação não. Replicar o processo exigiria engenharia reversa ao entregável, e essa rota perde o conhecimento que foi segmentado e excluído do final: é a vantagem estrutural do estúdio, por isso é regra e não acidente.',


      'm.s1.eyebrow': '/ 02 — CO-CRIAÇÃO',


      'm.s1.h2': 'Co-criar não é <em>gerar automaticamente</em>.',


      'm.s1.p1': 'É uma prática de trabalho em que alguém com visão e intenção dirige uma ferramenta com enorme capacidade de execução. O resultado é co-producido, mas a autoria criativa tem uma origem clara.',


      'm.s1.c1': '<b>A ideia</b> nasce em mim: o conceito, o problema, a experiência.',


      'm.s1.c2': '<b>A execução</b> é delegada à IA: código, texto, estrutura, variantes.',


      'm.s1.c3': '<b>O julgamento</b> é meu: o que fica, o que se rejeita, o que se itera.',


      'm.s1.c4': '<b>A responsabilidade</b> também: quem assina o produto, responde por ele.',


      'm.s1.p3': 'É parecido com um director criativo que trabalha com uma equipa de execução muito capaz, com uma diferença: esta equipa não tem iniciativa, nem gosto, nem visão. Trabalha dentro do espaço que eu defino.',


      'm.s2.eyebrow': '/ 03 — PAPÉIS',


      'm.s2.h2': 'Quem faz <em>o quê</em>.',


      'm.s2.desc': 'Em todos os projectos, a divisão de papéis é a mesma.',


      'm.david': 'David · Direcção', 'm.ai': 'IA · Execução',


      'm.d1.h': 'Visão e conceito', 'm.d1.p': 'O que o produto é, que problema resolve, a quem se dirige, o que o diferencia — antes de existir linha de código.',


      'm.d2.h': 'Direcção de produto', 'm.d2.p': 'Roadmap, prioridades, o que entra e o que fica de fora. O produto avança porque decido que avança e para porque decido que está pronto.',


      'm.d3.h': 'Direcção de arte e design', 'm.d3.p': 'Paleta, layout, tipografia, hierarquia, tom de voz, sensação geral. A IA propõe; eu decido o que fica.',


      'm.d4.h': 'Validação', 'm.d4.p': 'Em cada iteração testo, uso, critico e corrijo. Os bugs que encontro e os fluxos que rejeito ficam documentados na captura de trabalho.',


      'm.d5.h': 'Direcção técnica', 'm.d5.p': 'Arquitectura, tecnologias, limites e trade-offs. Quando a IA propõe uma solução, sou eu a avaliar se serve o produto a longo prazo.',


      'm.a1.h': 'Materializa', 'm.a1.p': 'Traduz uma ideia, uma descrição ou uma correcção em algo concreto: código, texto, estrutura, regras.',


      'm.a2.h': 'Acelera', 'm.a2.p': 'Mais ciclos de teste no mesmo projecto — o que levaria dias a um programador a solo leva horas numa sessão dirigida.',


      'm.a3.h': 'Propõe variantes', 'm.a3.p': 'Quando peço opções, gera alternativas. Só têm valor depois de eu as avaliar e escolher.',


      'm.a4.h': 'Documenta e formaliza', 'm.a4.p': 'Estrutura e redige o que descrevo. A substância é minha; a formalização é dela.',


      'm.a5.h': 'O que não faz', 'm.a5.p': 'Não tem visão, não sabe o que o produto deve ser, não tem gosto, não valida, não decide, não assume responsabilidade. Sem direcção humana clara, produz output genérico.',


      'm.s3.eyebrow': '/ 04 — CADEIA DE VALOR',


      'm.s3.h2': 'A IA é uma <em>alavanca</em>.',


      'm.s3.p1': 'A IA é uma alavanca de cadência. O que levaria dias a um programador a solo leva horas numa sessão dirigida — e o ganho real não é só velocidade: <em>são mais ciclos de teste no mesmo projecto.</em>',


      'm.s3.p2': 'Quem dirige não reescreve: decide, testando. E os artefactos do passo de idear servem duas vezes — são pensamento para mim e especificação para a IA. Um conceito que não se deixa diagramar não está claro o suficiente para dirigir execução.',


      'm.s3.p3': 'E quanto mais o estúdio corre, mais o método serve para partilhar o conhecimento que gera.',


      'm.s3.h3': 'Como o mercado cobre o ciclo — e como a suite cobre.',


      'm.s3.intro': 'O método tem marca genética das metodologias que o convergiram — Design Thinking no idear, gestão de produto no priorizar, Scrum e Kanban no construir, Lean Startup no fechar, docs-as-code no destilar — em modo dual-track: a descoberta contínua a alimentar a entrega incremental. O mercado cobre a mesma sequência com uma ferramenta paga por etapa. A suite nimble cobre-a de outra maneira: <em>uma app por etapa, um espaço de dados, um operador.</em>',


      'm.s3.t.h1': 'Etapa', 'm.s3.t.h2': 'Metodologia', 'm.s3.t.h3': 'Na suite nimble',


      'm.s3.t.r1e': '0 · Configurar', 'm.s3.t.r1m': 'Contrato do engajamento / project charter',


      'm.s3.t.r1s': '<b>Ciclo</b> · nova — ficha de ciclo fechável + painel de gates e métricas',


      'm.s3.t.r2e': '1 · Idear', 'm.s3.t.r2m': 'Design Thinking / Double Diamond',


      'm.s3.t.r2s': '<b><a href="https://diagramico.monco.io/" target="_blank" rel="noopener">Diagramico</a></b> — cartão de conceito com non-goals obrigatório + diagrama v1',


      'm.s3.t.r3e': '2 · Priorizar', 'm.s3.t.r3m': 'Gestão de produto / priorização (RICE, WSJF, Kano) + backlog refinement',


      'm.s3.t.r3s': '<b><a href="https://roadmaps.monco.io/" target="_blank" rel="noopener">Roadmaps</a></b> — taxonomia firme do estúdio, horizontes S/M/L, matriz com eixo de alavanca, apetite',


      'm.s3.t.r4e': '3 · Construir', 'm.s3.t.r4m': 'Scrum (sprints, backlog) + Kanban (fluxo) + gestão de defeitos do XP',


      'm.s3.t.r4s': '<b><a href="https://taskboards.monco.io/" target="_blank" rel="noopener">Taskboards</a></b> — tarefa de uma frase + ficha de contexto de IA + nota de bugs',


      'm.s3.t.r5e': '4 · Validar', 'm.s3.t.r5m': 'Lean Startup (Build–Measure–Learn) + Lean UX',


      'm.s3.t.r5s': '<b>Veredicto</b> · nova — ledger de hipóteses falsificáveis: uma sessão, um sinal, um veredicto, uma acção',


      'm.s3.t.r6e': '5 · Lançar', 'm.s3.t.r6m': 'Customer Development e release management',


      'm.s3.t.r6s': '<b>Finale</b> · nova — checklist da régua do aberto + release derivado do ciclo + licenças do contrato',


      'm.s3.t.r7e': 'T · Ensina', 'm.s3.t.r7m': 'docs-as-code, ADRs, Definition of Done',


      'm.s3.t.r7s': '<b>Captura</b> · nova (CLI) + fundação privada — capturar já formaliza; o mapa alimenta o próximo ciclo',


      'm.s3.t.out': 'A premissa de desenho: uma app só existe se o seu artefacto cruza um gate do ciclo; os dados ficam com o operador, em ficheiros, com exportação por defeito.',


      'm.s4.eyebrow': '/ 05 — TRANSPARÊNCIA',


      'm.s4.h2': 'Declaro o uso de IA <em>por princípio</em>.',


      'm.t1.h': 'Honestidade sobre o processo', 'm.t1.p': 'Esconder a IA não seria honesto para com clientes, parceiros ou público. E seria contraproducente: o valor do trabalho está na qualidade da direcção, não em esconder como foi feito.',


      'm.t2.h': 'O papel humano, bem visto', 'm.t2.p': 'Declarar o uso de IA não diminui o meu papel — clarifica-o. Quando se percebe o que a IA faz e o que não faz, a visão, a direcção e a validação ficam mais evidentes.',


      'm.quote': 'Um realizador não opera a câmara. Um arquitecto não assenta tijolos. Um director criativo não escreve o código.<br><em>A autoria é a visão, não a execução.</em>',


      'm.s5.eyebrow': '/ 06 — LIMITES',


      'm.s5.h2': 'O que este modelo <em>não é</em>.',


      'm.n1.h': 'Não é geração automática', 'm.n1.p': 'Não escrevo um prompt e publico o resultado. Cada output é iterado, testado, corrigido e validado várias vezes antes de ser produto.',


      'm.n2.h': 'Não é plágio', 'm.n2.p': 'Os outputs são gerados, não copiados de terceiros. Código, textos e estruturas são originais no contexto de cada projecto.',


      'm.n3.h': 'Não é substituir trabalho alheio', 'm.n3.p': 'Não uso IA para fazer o trabalho que estaria a pagar a outra pessoa. É a minha ferramenta de produção, como o software de um designer ou o sintetizador de um músico.',


      'm.n4.h': 'Não é ausência de competência', 'm.n4.p': 'Dirigir bem uma IA exige perceber de design, código, produto e experiência de utilizador. O meu background é design industrial, engenharia de processos e desenvolvimento de produto.',


      'm.n5.h': 'Não é co-autoria legal', 'm.n5.p': 'A IA não é uma pessoa, não tem direitos e não é co-autora em sentido jurídico. O produto é meu. A IA é uma ferramenta — sofisticada, mas ferramenta.',


      'm.s6.eyebrow': '/ 07 — LEITURA',


      'm.s6.h2': 'Como ler o que <em>faço</em>.',


      'm.s6.desc': 'Qualquer produto ou documento que sai deste processo tem as mesmas quatro características.',


      'm.r1.p': '<b>A ideia é minha.</b> Se um produto tem certa identidade, fui eu que a escolhi. A origem é humana e documentável.',


      'm.r2.p': '<b>A execução foi acelerada por IA.</b> Código, redacção e estrutura foram materializados com IA, sob a minha direcção. Isto afecta a velocidade, não a qualidade nem a originalidade.',


      'm.r3.p': '<b>A validação é humana.</b> O que chegou ao final é o que sobreviveu à minha avaliação crítica — incluindo o que rejeitei e as direcções que reverti.',


      'm.r4.p': '<b>A responsabilidade é minha.</b> Qualquer questão, comercial, criativa, técnica ou ética, é respondida por mim. A IA não assina, não garante e não responde.',


      'm.s7.h3': 'A régua do aberto.',


      'm.s7.p1': 'O produto abre-se; a fundação fecha-se. Open source por defeito — <strong>MIT</strong> para o código, licença restritiva para o conteúdo autoral (música, fotografia, desenho, escrita). O que fica privado é o que faz o motor correr: os arneses, os mapas, o método em operação.',


      'm.s7.fecho': '<strong>Lançar é ficar público</strong> — porque é o lançamento que realimenta o ciclo. Dirigido, validado <em>e assumido.</em>',


      'm.end.h2': 'Dirigido, validado<br><em>e assumido.</em>',


      'm.end.p': 'Este texto pode ser citado, partilhado ou incluído na documentação dos meus projectos como declaração de método de trabalho.',


      'cta.secondary': 'Voltar ao estúdio →',





      /* ── Product cards (shared across labs & home) ── */


      'pf.live': 'ver ao vivo',


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





      /* spark */


      'pj.3d': 'Introduz a modelação para impressão 3D a alunos do 1.º ciclo e a quem nunca modelou: numa sessão de 2 horas, cada um chega à impressão do seu primeiro projecto. Fluxo simples de extrusão e corte, com gestão de projectos pela sala do professor.',


      'pj.stampforge': 'Editor de carimbos no browser: desenha ou importa SVG e exporta um STL pronto a imprimir em 3D.',


      'spark.hero.title': 'A estação das <em>aprendizagens STEAM.</em>',


      'spark.hero.sub': 'Atividades, ferramentas e workshops STEAM para alunos e professores — capacitação em ideação, inovação, design thinking, fabricação digital e uso de IA em formação e na sala de aula.',


      'spark.m.eyebrow': '/ 01 — O QUE SE APRENDE AQUI',


      'spark.m.h2': 'Um vetor de <em>conteúdo e aprendizagem.</em>',


      'spark.m.desc': 'O spark concentra a vertente educativa do estúdio: metodologias de design convertidas em experiências de sala de aula.',


      'spark.v1.h': 'Ideação e design thinking',


      'spark.v1.p': 'Métodos para transformar uma folha em branco num conceito: brainstorming estruturado, prototipagem rápida e decisão com critério.',


      'spark.v2.h': 'Fabricação digital',


      'spark.v2.p': 'Do desenho ao objeto: modelação para impressão 3D e corte, com fluxos que uma sala de aula consegue seguir numa só sessão.',


      'spark.v3.h': 'IA em formação',


      'spark.v3.p': 'Como usar IA para criar materiais, apoiar a aprendizagem e acelerar projetos escolares — com direcção humana e sentido crítico.',


      'spark.v4.h': 'Prototipagem ultrarrápida',


      'spark.v4.p': 'O ciclo experimentar → descartar → repetir ensinado na prática: é assim que se cria na era da IA.',


      'spark.art.eyebrow': '/ 02 — ARTEFACTOS',


      'spark.art.h2': 'Artefactos do <em>ciclo.</em>',


      'spark.art.desc': 'Ferramentas nascidas de experimentos com alunos e professores. Cada uma serve uma sessão completa de aprendizagem.',


      'spark.wk.eyebrow': '/ 03 — WORKSHOPS',


      'spark.wk.h2': 'Leva a estação <em>para a sala.</em>',


      'spark.wk.desc': 'Sessões formativas prontas a dinamizar — para turmas, equipas docentes ou comunidades escolares.',


      'spark.w1.h': 'Workshops STEAM',


      'spark.w1.p': 'Atividades práticas com os artefactos do estúdio: da primeira peça impressa em 3D ao primeiro protótipo testado.',


      'spark.w2.h': 'Capacitação de professores',


      'spark.w2.p': 'Formação para equipas docentes: usar IA e ferramentas digitais como fundação da prática letiva, não como enfeite.',


      'spark.w3.h': 'Design thinking em sala',


      'spark.w3.p': 'Guiões prontos para dinamizar ideação com turmas — do desafio ao protótipo testável.',


      'spark.cta.h2': 'Vamos montar<br><em>uma sessão.</em>',





      /* nimble */


      'pj.diagramico': 'Desenha fluxos, processos e notas de reunião em minutos e partilha-os por link, com o diagrama embebido. Exporta texto compacto que a IA lê com menos tokens, e ainda Mermaid, SVG, PNG e draw.io.',


      'pj.roadmaps': 'Roadmaps Now / Next / Later, sem prometer datas. Privado por defeito, partilha-se com um link ou embed, e os dados ficam no teu Google Drive.',


      'pf1.p': 'O Kanban mais simples: To Do, In Progress, Done. Sem perda de tempo nem complexidade desnecessária; uma ferramenta que trabalha para a tua produtividade.',


      'pj.rbac': 'Documenta roles e permissões de uma app de forma simples, editável e fácil de partilhar com a equipa. Nasceu de um reverse engineering de um RBAC sem documentação.',


      'pj.sprint': 'Um Design Sprint de 5 dias condensado em 8 horas (mais 8 opcionais), com IA e team building, para dar agilidade à equipa na resolução de problemas complexos de negócio. Traz o guião do facilitador, passo a passo.',


      'nimble.hero.title': 'A estação da <em>produtividade acelerada por IA.</em>',


      'nimble.hero.sub': 'Produtividade e processos de trabalho acelerados pela IA: pensar, planear, executar e registar — do primeiro esboço à documentação.',


      'nimble.m.eyebrow': '/ 01 — O QUE SE APRENDE AQUI',


      'nimble.m.h2': 'Um vetor de <em>alta-performance.</em>',


      'nimble.m.desc': 'O nimble concentra a vertente de processos do estúdio: metodologias agile condensadas em ferramentas sem fricção.',


      'nimble.v1.h': 'Pensar',


      'nimble.v1.p': 'Diagramas e lógica visual que substituem reuniões intermináveis: uma equipa alinha-se em minutos, não em horas.',


      'nimble.v2.h': 'Planear',


      'nimble.v2.p': 'Roadmaps que comunicam prioridade sem prometer datas falsas — visíveis para todos, decidos por quem decide.',


      'nimble.v3.h': 'Executar',


      'nimble.v3.p': 'Boards e fluxos simples que mantêm o trabalho visível e a entrega organizada até ao fim.',


      'nimble.v4.h': 'Acelerar',


      'nimble.v4.p': 'Sprints condensados que levam uma equipa do problema à solução testável dentro de um só dia de trabalho.',


      'nimble.art.eyebrow': '/ 02 — ARTEFACTOS',


      'nimble.art.h2': 'Artefactos do <em>ciclo.</em>',


      'nimble.art.desc': 'Ferramentas nascidas de processos reais de equipa. Cada uma cobre uma fase da entrega: pensar, planear, executar, documentar, acelerar.',


      'nimble.cta.h2': 'Vamos acelerar<br><em>a tua equipa.</em>',





      /* wave */


      'pf8.p': 'Converte o sinal do teu microfone num sampler e caixa de ritmos poderosos, com um fluxo pensado para improvisação em tempo real.',


      'pj.warf': 'Converte o sinal do teu microfone em notas MIDI, com um fluxo áudio/MIDI pensado para improvisação em tempo real. VST3 gratuito, app desktop e app no browser.',


      'lp5.p': 'Grava e edita podcasts no browser, sem instalar nada, para qualquer escola produzir e partilhar áudio sem meios especiais. Pronto a gravar, com ferramentas de edição pensadas para quem não é técnico.',


      'wave.hero.title': 'A estação da <em>criatividade e arte digital.</em>',


      'wave.hero.sub': 'Ferramentas de produção musical e instrumentos performativos: do microfone ao MIDI, do sampler ao palco — improvisar, produzir, aprender e actuar.',


      'wave.m.eyebrow': '/ 01 — O QUE SE APRENDE AQUI',


      'wave.m.h2': 'Um vetor de <em>criatividade × tecnologia.</em>',


      'wave.m.desc': 'O wave concentra a vertente criativa e multimédia do estúdio: tecnologia desmistificada para tocar, gravar e criar música mais cedo.',


      'wave.v1.h': 'Improvisar',


      'wave.v1.p': 'Fluxos áudio→MIDI e sampling em tempo real para performance sem rede de segurança: o erro é o material.',


      'wave.v2.h': 'Produzir',


      'wave.v2.p': 'Gravar, editar e publicar no browser, sem barreiras técnicas — qualquer mic, qualquer sala.',


      'wave.v3.h': 'Aprender',


      'wave.v3.p': 'A música como campo de experimentação: compreender som, ritmo e forma tocando desde a primeira sessão.',


      'wave.v4.h': 'Actuar',


      'wave.v4.p': 'Instrumentos digitais pensados para o palco e para a sala de aula — criatividade que se toca em tempo real.',


      'wave.art.eyebrow': '/ 02 — ARTEFACTOS',


      'wave.art.h2': 'Artefactos do <em>ciclo.</em>',


      'wave.art.desc': 'Ferramentas nascidas de sessões de improvisação e produção. Cada uma serve tanto o estúdio como a sala de aula.',


      'wave.cta.h2': 'Vamos tocar<br><em>com tecnologia.</em>',





      /* ludens */


      'pj.bitnik': 'Plataforma online que transforma o livro de regras de um jogo de tabuleiro numa versão jogável no browser e no telemóvel: mesas com amigos ou bots, e consola para editoras.',


      'ludens.hero.title': 'A estação do <em>Homo Ludens.</em>',


      'ludens.hero.sub': 'Jogos, game design e partilha de momentos: socialização, team building e criação de jogos — onde aprendemos a conhecer-nos e a conhecer os outros.',


      'ludens.m.eyebrow': '/ 01 — O QUE SE APRENDE AQUI',


      'ludens.m.h2': 'Um vetor de <em>jogo e criação.</em>',


      'ludens.m.desc': 'O ludens concentra a vertente de socialização do estúdio: aprender regras de design criando regras — e aprender equipa jogando.',


      'ludens.v1.h': 'Jogar',


      'ludens.v1.p': 'Plataformas que transformam o livro de regras numa mesa jogável: no browser, no telemóvel, com amigos ou bots.',


      'ludens.v2.h': 'Criar',


      'ludens.v2.p': 'Game design como disciplina: mecânicas, tensão e decisão — o design visto por dentro, do protótipo à mesa.',


      'ludens.v3.h': 'Partilhar',


      'ludens.v3.p': 'Mesas abertas a amigos ou bots, e consola para editoras levarem os seus jogos ao digital sem refazer o jogo.',


      'ludens.v4.h': 'Ligar',


      'ludens.v4.p': 'Team building com jogos de tabuleiro: coesão, decisão e comunicação treinadas à mesa, não num slide.',


      'ludens.art.eyebrow': '/ 02 — ARTEFACTOS',


      'ludens.art.h2': 'Artefactos do <em>ciclo.</em>',


      'ludens.art.desc': 'Ferramentas nascidas de mesas de jogo e protótipos de design. Cada uma serve tanto o jogador como o criador.',


      'ludens.wk.eyebrow': '/ 03 — WORKSHOPS',


      'ludens.wk.h2': 'Leva o jogo <em>para a equipa.</em>',


      'ludens.wk.desc': 'Sessões prontas a dinamizar — para empresas, turmas ou comunidades que querem aprender a jogar melhor.',


      'ludens.w1.h': 'Team building com jogos',


      'ludens.w1.p': 'Sessões de team building com jogos de tabuleiro: metodologias para treinar coesão, decisão e comunicação.',


      'ludens.w2.h': 'Game design para iniciados',


      'ludens.w2.p': 'Workshops para criar (e não só jogar): da mecânica ao protótipo testável numa só sessão.',


      'ludens.cta.h2': 'Vamos jogar<br><em>para criar.</em>',





      /* ── Página equipa ── */


      'eq.eyebrow': '/ PESSOAS',


      'eq.h2': 'Um estúdio que <em>cabe numa pessoa.</em>',


      'eq.desc': 'Por agora, um só perfil — o percurso completo por trás do método. Quando lá houver mais pessoas, é aqui que elas aparecem.',


      'eq.m.eyebrow': '/ DIRECTOR DO ESTÚDIO',


      'eq.m.name': 'David Ferreira Marques',


      'eq.m.tag': 'Construir pontes para a mudança. Criar condições para que as pessoas e as organizações trabalhem melhor. Executar quando o caminho ainda não está traçado. <strong>É assim que tem sido trabalhado, ao longo de 15+ anos, em sectores e escalas muito diferentes</strong> — e é o que distingue gerir de liderar numa altura em que as organizações precisam de ambos ao mesmo tempo. A IA não mudou esta forma de operar. Acelerou-a.',


      'eq.m.loc': 'Porto / Maia, Portugal',


      'eq.m.cv': 'CV imprimível',


      'eq.xp.eyebrow': '/ 01 — EXPERIÊNCIA',


      'eq.xp.h2': 'Onde o percurso <em>passou.</em>',


      'eq.wm.eyebrow': '/ 02 — MODELO DE TRABALHO',


      'eq.wm.h2': 'Como <em>trabalho.</em>',


      'eq.cta.h2': 'O percurso continua<br><em>no estúdio.</em>',





      'eq.j1.p': '2026 — atual',


      'eq.j1.org': 'FedEx',


      'eq.j1.t': 'Senior Industrial Engineer / Product Owner',


      'eq.j1.d': 'Product Owner num Agile Release Train europeu (SAFe), numa plataforma interna de controlo operacional de pick-up e delivery, usada na maioria dos países europeus.',


      'eq.j1.h1': 'Product ownership de uma plataforma que suporta o controlo operacional das estações locais em toda a Europa',


      'eq.j1.h2': 'O âmbito inclui também deteção de fraude e otimização do processamento de pagamentos',





      'eq.j2.p': '2025 — 2026',


      'eq.j2.org': 'CDI Portugal · Centro de Inovação Carlos Fiolhais · Maia',


      'eq.j2.t': 'Responsável de Operações & Programas',


      'eq.j2.d': 'Liderança operacional de um laboratório de inovação social co-financiado pelo Norte 2030, com gestão direta de equipa, programas, orçamento e indicadores de desempenho. Conceção, implementação e melhoria contínua de oito programas em simultâneo.',


      'eq.j2.h1': 'Definição de performance estratégica e monitorização de OKRs e KPIs trimestrais para toda a operação',


      'eq.j2.h2': 'Gestão de múltiplos processos em paralelo com recursos limitados e prazos rígidos (financiamento público)',


      'eq.j2.h3': 'Coordenação com entidades externas: Câmara Municipal da Maia, parceiros europeus, British Esports Federation',


      'eq.j2.h4': 'Recrutamento, onboarding e supervisão de equipa multidisciplinar',


      'eq.j2.h5': 'Implementação de fluxos de trabalho e ferramentas de gestão operacional próprias',





      'eq.j3.p': '2023 — 2025',


      'eq.j3.org': 'FARFETCH · Porto',


      'eq.j3.t': 'Innovation Principal',


      'eq.j3.d': 'Liderança de processos de inovação de produto em paralelo com funções operacionais. Responsável pela cadência e qualidade dos ciclos de discovery, prototipagem e validação, articulando equipas de produção de fotografia, video e 3D.',


      'eq.j3.h1': 'Montagem das bases de um processo hoje automatizado, assente em IA: definição tecnológica, criação de equipa, métodos de trabalho e resultados esperados',


      'eq.j3.h2': 'Gestão de stakeholders com prioridades divergentes e timelines apertadas',


      'eq.j3.h3': 'Definição e melhoria de processos de trabalho em equipas distribuídas globalmente',





      'eq.j4.p': '2022 — 2024',


      'eq.j4.org': 'FARFETCH · Porto',


      'eq.j4.t': 'Senior Production Manager',


      'eq.j4.d': 'Gestão de processos de produção dos estudios de fotografia (PT, BR, US, HK) em empresa cotada em bolsa com mais de 5.000 colaboradores. Coordenação de fluxos de trabalho entre equipas e parceiros distribuídos globalmente, com foco em qualidade, prazo e eficiência operacional.',


      'eq.j4.h1': 'Gestão de pipelines de produção com múltiplos fornecedores e equipas internacionais',


      'eq.j4.h2': 'Desenvolvimento e otimização de processos de entrega em contexto de alto volume',


      'eq.j4.h3': 'Reporte de métricas operacionais a gestão sénior e stakeholders executivos',


      'eq.j4.h4': 'Resolução de bloqueios e gestão de risco em projetos críticos de negócio',





      'eq.j5.p': '2024 — atual',


      'eq.j5.org': 'Creative Oscillator · Porto',


      'eq.j5.sub': 'Marcas: Monco (consultoria de gestão da mudança) · Devity Studio (design e criatividade)',


      'eq.j5.t': 'Fundador & Gestor',


      'eq.j5.d': 'Estrutura empresarial que agrega duas marcas de serviço. Responsável pela operação, posicionamento estratégico e definição de portfólio.',


      'eq.j5.h1': 'Desenvolvimento de processos replicáveis de entrega para projetos de consultoria de integração de IA na estratégia empresarial',


      'eq.j5.h2': 'Gestão de pipeline comercial e coordenação de equipa em regime remoto',





      'eq.j6.p': '2019 — 2020',


      'eq.j6.org': 'Surf & Code · Matosinhos — Londres',


      'eq.j6.t': 'Lead Designer — Platform team',


      'eq.j6.d': 'Gestão da equipa de design de produto de uma aceleradora de startups. Responsável pela cadência operacional de sprints, qualidade de entrega e alinhamento entre stakeholders internacionais.',


      'eq.j6.h1': 'Dinamização de workshops de ideação e validação de produto para financiamento',


      'eq.j6.h2': 'Liderança da equipa de protótipos e de user research',


      'eq.j6.h3': 'Definição e aplicação de framework "product-market validation"',





      'eq.j7.p': '2016 — 2019',


      'eq.j7.org': 'Namecheap · Porto (remoto)',


      'eq.j7.t': 'Scrum Master & Design Manager',


      'eq.j7.d': 'Gestão de equipas em contexto ágil. Responsável pela cadência operacional de sprints, qualidade de entrega e alinhamento entre stakeholders internacionais (PT, US, UK, UA, IN).',


      'eq.j7.h1': 'Implementação e otimização de processos Scrum adaptados ao contexto da equipa — UX Design Framework',


      'eq.j7.h2': 'Remoção de bloqueios operacionais e garantia de fluxo de entrega contínuo',


      'eq.j7.h3': 'Reporting regular de métricas de desempenho a gestão sénior',





      'eq.j8.p': '2010 — 2015',


      'eq.j8.org': 'ESAD — Escola Superior de Artes e Design · Matosinhos',


      'eq.j8.t': 'Coordenador Pedagógico',


      'eq.j8.d': 'Coordenação operacional de cursos de design. Gestão de calendários, docentes, parcerias com indústria e processos de avaliação de desempenho.',





      'eq.j9.p': '2007 — 2015',


      'eq.j9.org': 'ESAD — Escola Superior de Artes e Design · Matosinhos',


      'eq.j9.t': 'Professor Assistente',


      'eq.j9.d': 'Coordenação operacional das unidades curriculares de Projeto I, Modelos e Protótipos, Laboratório Digital. Definição de programa e learning outcomes.',





      'eq.wm1.h': 'Pontes para a mudança', 'eq.wm1.p': 'Não como consultor que optimiza o que existe, mas como alguém que entra, lê o contexto e constrói — com as pessoas, para as pessoas, com velocidade e sem desperdício.',


      'eq.wm2.h': 'Sistemas que sobrevivem ao criador', 'eq.wm2.p': 'Processos operacionais desenhados para serem independentes de quem os criou.',


      'eq.wm3.h': 'Liderança com presença individual', 'eq.wm3.p': 'Cada membro da equipa recebe atenção, justiça e exigência; as equipas ficam melhores depois de trabalhar juntas.',


      'eq.wm4.h': 'Pensamento sintético', 'eq.wm4.p': 'Desmonto problemas complexos até ao osso e traduzo conceitos radicais em linguagem acessível sem perder a profundidade.',


      'eq.wm5.h': 'IA como alavanca operacional', 'eq.wm5.p': 'Integrada nos processos do dia-a-dia; o que muda é a velocidade de execução, não o julgamento.',


      'eq.wm6.h': 'Referências transversais', 'eq.wm6.p': 'Músico, cinéfilo, leitor; perspectivas que expandem o espaço de soluções das equipas.',





      'eq.nav.link': 'CV',


      'eq.tg.ops': 'Operações', 'eq.tg.ie': 'Engenharia Industrial',


      'eq.tg.team': 'Gestão de Equipas', 'eq.tg.okr': 'OKRs / KPIs', 'eq.tg.proc': 'Processos', 'eq.tg.budg': 'Orçamento', 'eq.tg.multi': 'Multi-projecto',


      'eq.tg.innov': 'Inovação de Produto', 'eq.tg.global': 'Equipas Globais',


      'eq.tg.prod': 'Gestão de Produção', 'eq.tg.intl': 'Operações Internacionais', 'eq.tg.sup': 'Fornecedores', 'eq.tg.metrics': 'Métricas', 'eq.tg.volume': 'Alto Volume',


      'eq.tg.chang': 'Gestão da Mudança', 'eq.tg.cons': 'Consultoria', 'eq.tg.design': 'Design',


      'eq.tg.deliv': 'Métricas de Entrega', 'eq.tg.kai': 'Melhoria Contínua',


      'eq.tg.edu': 'Coordenação Pedagógica', 'eq.tg.plan': 'Planeamento',


    },





    /* ── EN ─────────────────────────────────────────────────── */


    en: {


      /* Nav */


      'nav.home': 'home',


      'nav.method': 'method',


      'nav.cta': 'linkedin ↗',





      /* Footer */


      'foot.copy': '© 2026 MONCO.IO / DAVID FERREIRA MARQUES',





      /* ── Home: hero ── */


      'hero.tag': 'MONCO · BY DAVID FERREIRA MARQUES',


      'hero.title': 'The knowledge revolution<br>isn\'t commented on. It\'s <em>practised.</em>',


      'hero.sub': 'monco is a product design studio: design methodologies and design thinking, accelerated by ultra-fast vibe-coding iterations and validated with domain experts — to launch products and create learning scenarios for those who learn and those who teach.',


      'hero.hint': '← move mouse to tilt / click to burst →',





      /* ── Home: 01 revolution ── */


      'rev.eyebrow': '/ 01 — THE REVOLUTION',


      'rev.h2': 'AI is the <em>foundation</em> of creative potential.',


      'rev.byline': 'David Ferreira Marques. <a href="https://www.linkedin.com/in/dferreiramarques/" target="_blank" rel="noopener">LinkedIn ↗</a>',


      'rev.p1': 'We are witnessing a revolution in how knowledge is created and passed on. The institutions that teach and the ones that produce still work in slow cycles, pricing every mistake as risk. AI has changed that mathematics.',


      'rev.p2': 'AI isn\'t the tool — it\'s the <strong>foundation</strong>: it expands creative potential because it enables <strong>more and faster iteration</strong>, and <strong>validation or discarding at low cost</strong>. Where an idea once cost weeks, it now costs hours. Error stops being risk and becomes method.',


      'rev.p3': 'That\'s where monco acts: every experiment is <strong>accumulated experience</strong>. That experience converts into <strong>learning scenarios</strong> — for students and teachers — and, when maturity justifies it, into <strong>products</strong>: faster, better, more robust and more valuable for the people who use them.',





      /* ── Home: 02 the cycle ── */


      'cyc.eyebrow': '/ 02 — THE CYCLE',


      'cyc.h2': 'Experiment. Discard. <em>Repeat.</em>',


      'cyc.h3': 'Validate. <em>Teach. Launch.</em>',


      'cyc.desc': 'The studio runs this loop on every experiment — and each pass is cheaper, faster and better-informed than the last.',


      'cyc.1.h': 'Idea',


      'cyc.1.p': 'Vision and concept first: what it is, who it\'s for, and what it won\'t be.',


      'cyc.2.h': 'Iterate ultra-fast',


      'cyc.2.p': 'Directed vibe-coding: several versions in a single day, not a release per quarter.',


      'cyc.3.h': 'Validate · discard',


      'cyc.3.p': 'Each version costs little — discard without drama. Domain experts (SMEs) confirm what\'s worth keeping.',


      'cyc.4.h': 'Teach or launch',


      'cyc.4.p': 'Two exits: learning scenarios for learners and teachers, or a product out in the world once it\'s mature.',


      'cyc.5.h': 'Learn',


      'cyc.5.p': 'Every cycle leaves learnings that make the next one faster, more robust and more valuable.',


      'cyc.loop': 'the loop never ends: learnings are reinvested into the next experiment',


      'mt.cta': 'Read the full method →',





      /* ── Home: 03 labs ── */


      'labs.eyebrow': '/ 03 — THE STATIONS',


      'labs.h2': 'One studio, four <em>destinations.</em>',


      'labs.desc': 'From the studio depart four stations — four destinations of experimentation, each with its own field — and everything they teach. Products are the artefacts: every well-run loop leaves one behind.',


      'lab.open': 'visit the station →',





      'lab.spark.tag': 'STEAM learning.',


      'lab.spark.desc': 'Activities, tools and STEAM workshops for students and teachers: ideation, innovation, design thinking, digital fabrication and AI in education.',


      'lab.spark.c1': 'STEAM workshops',


      'lab.spark.c2': 'design thinking',


      'lab.spark.c3': 'digital fabrication',


      'lab.spark.c4': 'AI in the classroom',





      'lab.nimble.tag': 'AI-accelerated productivity.',


      'lab.nimble.desc': 'Productivity and work processes accelerated by AI: think, plan, execute and document — from first sketch to documentation.',


      'lab.nimble.c1': 'agile',


      'lab.nimble.c2': 'roadmaps',


      'lab.nimble.c3': 'sprints',


      'lab.nimble.c4': 'documentation',





      'lab.wave.tag': 'Digital art & creativity.',


      'lab.wave.desc': 'Music production tools and performative instruments: from microphone to MIDI, from sampler to stage.',


      'lab.wave.c1': 'live improvisation',


      'lab.wave.c2': 'audio → MIDI',


      'lab.wave.c3': 'podcasts',


      'lab.wave.c4': 'performance',





      'lab.ludens.tag': 'The Homo Ludens station.',


      'lab.ludens.desc': 'Games, game design and shared moments: the Homo Ludens station, where we learn to know ourselves and each other.',


      'lab.ludens.c1': 'board games',


      'lab.ludens.c2': 'game design',


      'lab.ludens.c3': 'team building',


      'lab.ludens.c4': 'fun',





      /* ── Home: 04 audiences ── */


      'aud.eyebrow': '/ 04 — FOR WHOM',


      'aud.h2': 'Two doors into the <em>same studio.</em>',


      'aud.a1.h': 'Students and teachers',


      'aud.a1.p': 'Learning scenarios and workshops that bring AI, digital fabrication and design thinking into the classroom — with tools that work today, not promises for next year.',


      'aud.a2.h': 'Companies and experts',


      'aud.a2.p': 'Those with specialised domain knowledge find here the validation platform for their solutions: you bring the context, the studio brings the cycle — and the product reaches users faster, better, more robust and more valuable.',





      /* ── Home: CTA ── */


      'cta.eyebrow': '/ 05 — PARTNERSHIPS',


      'cta.h2': 'Join the<br><em>revolution.</em>',


      'cta.p': 'Bring a problem to solve, a will to learn or a business to validate. We start with a conversation: you can join as a validation expert, as a co-creation partner — or open the door of a classroom for us.',


      'cta.linkedin': 'LinkedIn ↗',


      'cta.email': 'hello@monco.io',





      /* ── Work page (removed — kept for safety) ── */


      'wp.eyebrow': '/ PRODUCTS',


      'wp.h2': 'Things I\'ve <em>shipped</em>.',





      /* ── Method page ── */


      'm.eyebrow': '/ THE STUDIO CYCLE',


      'm.title': 'Experiment. Validate.<br><em>Teach. Launch.</em>',


      'm.id.eyebrow': '/ THE SIGNATURE',


      'm.id.h2': 'Behind the studio there\'s a <em>whole path.</em>',


      'm.id.cap': 'DAVID FERREIRA MARQUES · STUDIO DIRECTOR',


      'm.id.p1': 'None of this starts from a loose prompt. It starts from years of designing, building and teaching — first in slow cycles where every mistake was expensive; now in a station where iterating costs hours. The intuition of what\'s worth discarding isn\'t installed: it\'s learned.',


      'm.id.p2': 'Industrial design, process engineering and product development, with years in classrooms and teams converting practice into learning. That experience — accumulated, tested and passed on — is what gives the station its judgement.',


      'm.id.cv': 'See the full path →',


      'm.s0.eyebrow': '/ 01 — THE CYCLE',


      'm.s0.h2': 'Iterate more, <em>faster.</em>',


      'm.s0.desc': 'Three principles govern everything the studio produces.',


      'm.s0.1.h': 'AI as foundation',


      'm.s0.3.h': 'Convert into learning',


      'm.s1.eyebrow': '/ 02 — CO-CREATION',


      'm.s1.h2': 'Co-creating isn\'t <em>auto-generating</em>.',


      'm.s1.p3': 'It\'s closer to a creative director working with a very capable execution team, with one difference: this team has no initiative, no taste and no vision. It works inside the space I define.',


      'm.s2.eyebrow': '/ 03 — ROLES',


      'm.s2.h2': 'Who does <em>what</em>.',


      'm.d1.h': 'Vision and concept',


      'm.d2.h': 'Product direction', 'm.d2.p': 'Roadmap, priorities, what goes in and what stays out. The product moves forward because I decide it does, and stops because I decide it\'s ready.',


      'm.d3.h': 'Art and design direction', 'm.d3.p': 'Palette, layout, typography, hierarchy, tone of voice, overall feel. AI proposes; I decide what stays.',


      'm.d4.h': 'Validation',


      'm.d5.h': 'Technical steering', 'm.d5.p': 'Architecture, technologies, limits and trade-offs. When AI proposes a solution, I judge whether it serves the product in the long run.',


      'm.a1.h': 'Materialises', 'm.a1.p': 'Turns an idea, a description or a correction into something concrete: code, copy, structure, rules.',


      'm.a2.h': 'Accelerates',


      'm.a3.h': 'Proposes variants', 'm.a3.p': 'When I ask for options, it generates alternatives. They only have value once I\'ve judged and chosen.',


      'm.a4.h': 'Documents and formalises', 'm.a4.p': 'Structures and writes up what I describe. The substance is mine; the formalisation is theirs.',


      'm.a5.h': 'What it doesn\'t do', 'm.a5.p': 'No vision, no idea of what the product should be, no taste. It doesn\'t validate, decide or take responsibility. Without clear human direction it produces generic output.',


      'm.s3.eyebrow': '/ 04 — VALUE CHAIN',


      'm.s3.h2': 'AI is a <em>lever</em>.',


      'm.s4.eyebrow': '/ 05 — TRANSPARENCY',


      'm.s4.h2': 'I disclose AI use <em>on principle</em>.',


      'm.t1.h': 'Honest about the process', 'm.t1.p': 'Hiding AI wouldn\'t be honest with clients, partners or the public. It would also backfire: the value of the work is in the quality of the direction, not in hiding how it was made.',


      'm.quote': 'A film director doesn\'t operate the camera. An architect doesn\'t lay bricks. A creative director doesn\'t write the code.<br><em>Authorship is the vision, not the execution.</em>',


      'm.s5.eyebrow': '/ 06 — LIMITS',


      'm.s5.h2': 'What this model <em>isn\'t</em>.',


      'm.n1.h': 'Not auto-generation', 'm.n1.p': 'I don\'t write a prompt and publish the result. Every output is iterated, tested, corrected and validated several times before it counts as product.',


      'm.n2.h': 'Not plagiarism', 'm.n2.p': 'Outputs are generated, not copied from third parties. Code, copy and structures are original in the context of each project.',


      'm.n3.h': 'Not replacing other people\'s work', 'm.n3.p': 'I don\'t use AI to do work I would otherwise pay someone else for. It\'s my own production tool, like a designer\'s software or a musician\'s synthesiser.',


      'm.n4.h': 'Not a lack of skill', 'm.n4.p': 'Directing AI well takes real understanding of design, code, product and user experience. My background is industrial design, process engineering and product development.',


      'm.s6.eyebrow': '/ 07 — READING',


      'm.s6.h2': 'How to read what I <em>make</em>.',


      'm.s6.desc': 'Anything that comes out of this process has the same four traits.',


      'm.end.h2': 'Directed, validated<br><em>and owned.</em>',


      'm.end.p': 'This text may be quoted, shared or included in my project documentation as a statement of working method.',


      'cta.secondary': 'Back to the studio →',





      /* ── Product cards (shared across labs & home) ── */


      'pf.live': 'view live',


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





      /* spark */


      'pj.3d': 'Introduces 3D-print modelling to primary-school pupils and anyone who has never modelled: in a 2-hour session, each one gets their first project printed. A simple extrude-and-cut workflow, with project management through the teacher\'s room.',


      'pj.stampforge': 'Browser-based stamp designer: draw or import SVG, export a print-ready STL for 3D printing.',


      'spark.hero.title': 'The station of <em>STEAM learning.</em>',


      'spark.hero.sub': 'Activities, tools and STEAM workshops for students and teachers — skill-building in ideation, innovation, design thinking, digital fabrication and the use of AI in education and the classroom.',


      'spark.m.eyebrow': '/ 01 — WHAT YOU LEARN HERE',


      'spark.m.h2': 'A vector of <em>content and learning.</em>',


      'spark.m.desc': 'spark concentrates the studio\'s educational side: design methodologies converted into classroom experiences.',


      'spark.v1.h': 'Ideation and design thinking',


      'spark.v1.p': 'Methods to turn a blank page into a concept: structured brainstorming, rapid prototyping and decision with criteria.',


      'spark.v2.h': 'Digital fabrication',


      'spark.v2.p': 'From drawing to object: modelling for 3D printing and cutting, with workflows a classroom can follow in a single session.',


      'spark.v3.h': 'AI in education',


      'spark.v3.p': 'How to use AI to create materials, support learning and accelerate school projects — with human direction and critical sense.',


      'spark.v4.h': 'Ultra-fast prototyping',


      'spark.v4.p': 'The experiment → discard → repeat cycle, taught in practice: that\'s how you create in the age of AI.',


      'spark.art.eyebrow': '/ 02 — ARTEFACTS',


      'spark.art.h2': 'Artefacts of the <em>cycle.</em>',


      'spark.art.desc': 'Tools born from experiments with students and teachers. Each one supports a complete learning session.',


      'spark.wk.eyebrow': '/ 03 — WORKSHOPS',


      'spark.wk.h2': 'Bring the station <em>into the classroom.</em>',


      'spark.wk.desc': 'Hands-on training sessions, ready to run — for classes, teaching teams or school communities.',


      'spark.w1.h': 'STEAM workshops',


      'spark.w1.p': 'Hands-on activities with the studio\'s artefacts: from the first 3D-printed piece to the first tested prototype.',


      'spark.w2.h': 'Teacher training',


      'spark.w2.p': 'Training for teaching teams: use AI and digital tools as the foundation of teaching practice, not as decoration.',


      'spark.w3.h': 'Design thinking in class',


      'spark.w3.p': 'Ready-made scripts to run ideation with classes — from challenge to testable prototype.',


      'spark.cta.h2': 'Let\'s set up<br><em>a session.</em>',





      /* nimble */


      'pj.diagramico': 'Draw flows, processes and meeting notes in minutes and share them by link, with the diagram embedded. Exports compact text that AI reads with fewer tokens, plus Mermaid, SVG, PNG and draw.io.',


      'pj.roadmaps': 'Now / Next / Later roadmaps, without promising dates. Private by default, shared with a link or embed, and the data lives in your own Google Drive.',


      'pf1.p': 'The simplest Kanban: To Do, In Progress, Done. No wasted time or needless complexity; a tool that works for your productivity.',


      'pj.rbac': 'Document an app\'s roles and permissions in a simple, editable way that\'s easy to share with the team. Born from reverse-engineering an undocumented RBAC.',


      'pj.sprint': 'A 5-day Design Sprint condensed into 8 hours (plus 8 optional), with AI and team building, to make your team more agile at solving complex business problems. Comes with a step-by-step facilitator script.',


      'nimble.hero.title': 'The station of <em>AI-accelerated productivity.</em>',


      'nimble.hero.sub': 'Productivity and work processes accelerated by AI: think, plan, execute and document — from first sketch to documentation.',


      'nimble.m.eyebrow': '/ 01 — WHAT YOU LEARN HERE',


      'nimble.m.h2': 'A vector of <em>high performance.</em>',


      'nimble.m.desc': 'nimble concentrates the studio\'s process side: agile methodologies condensed into friction-free tools.',


      'nimble.v1.h': 'Think',


      'nimble.v1.p': 'Diagrams and visual logic that replace endless meetings: a team aligns in minutes, not hours.',


      'nimble.v2.h': 'Plan',


      'nimble.v2.p': 'Roadmaps that communicate priority without promising false dates — visible to everyone, decided by whoever decides.',


      'nimble.v3.h': 'Execute',


      'nimble.v3.p': 'Simple boards and flows that keep work visible and delivery organised to the end.',


      'nimble.v4.h': 'Accelerate',


      'nimble.v4.p': 'Condensed sprints that take a team from problem to testable solution within a single working day.',


      'nimble.art.eyebrow': '/ 02 — ARTEFACTS',


      'nimble.art.h2': 'Artefacts of the <em>cycle.</em>',


      'nimble.art.desc': 'Tools born from real team processes. Each covers one phase of delivery: think, plan, execute, document, accelerate.',


      'nimble.cta.h2': 'Let\'s accelerate<br><em>your team.</em>',





      /* wave */


      'pf8.p': 'Turns your microphone signal into a powerful sampler and drum machine, with a workflow built for real-time improvisation.',


      'pj.warf': 'Turns your microphone signal into MIDI notes, with an audio/MIDI workflow built for real-time improvisation. Free VST3, desktop app and browser app.',


      'lp5.p': 'Record and edit podcasts in the browser, with nothing to install, so any school can produce and share audio without special equipment. Ready to record, with editing tools made for non-technical people.',


      'wave.hero.title': 'The station of <em>digital art & creativity.</em>',


      'wave.hero.sub': 'Music production tools and performative instruments: from microphone to MIDI, from sampler to stage — improvise, produce, learn and perform.',


      'wave.m.eyebrow': '/ 01 — WHAT YOU LEARN HERE',


      'wave.m.h2': 'A vector of <em>creativity × technology.</em>',


      'wave.m.desc': 'wave concentrates the studio\'s performative side: technology demystified so you can play, record and create music earlier.',


      'wave.v1.h': 'Improvise',


      'wave.v1.p': 'Real-time audio→MIDI and sampling workflows for performance without a safety net: the mistake is the material.',


      'wave.v2.h': 'Produce',


      'wave.v2.p': 'Record, edit and publish in the browser, without technical barriers — any mic, any room.',


      'wave.v3.h': 'Learn',


      'wave.v3.p': 'Music as a field of experimentation: understanding sound, rhythm and form by playing from the first session.',


      'wave.v4.h': 'Perform',


      'wave.v4.p': 'Digital instruments designed for the stage and the classroom — creativity you touch in real time.',


      'wave.art.eyebrow': '/ 02 — ARTEFACTS',


      'wave.art.h2': 'Artefacts of the <em>cycle.</em>',


      'wave.art.desc': 'Tools born from improvisation and production sessions. Each serves the studio and the classroom alike.',


      'wave.cta.h2': 'Let\'s play<br><em>with technology.</em>',





      /* ludens */


      'pj.bitnik': 'Online platform that turns the rulebook of a board game into a version playable in the browser and on mobile: tables with friends or bots, and a console for publishers.',


      'ludens.hero.title': 'The station of <em>Homo Ludens.</em>',


      'ludens.hero.sub': 'Games, game design and shared moments: socialisation, team building and game creation — where we learn to know ourselves and each other.',


      'ludens.m.eyebrow': '/ 01 — WHAT YOU LEARN HERE',


      'ludens.m.h2': 'A vector of <em>play and creation.</em>',


      'ludens.m.desc': 'ludens concentrates the studio\'s games side: learning the rules of design by creating rules — and learning teamwork by playing.',


      'ludens.v1.h': 'Play',


      'ludens.v1.p': 'Platforms that turn the rulebook into a playable table: in the browser, on mobile, with friends or bots.',


      'ludens.v2.h': 'Create',


      'ludens.v2.p': 'Game design as a discipline: mechanics, tension and decision — design seen from the inside, from prototype to table.',


      'ludens.v3.h': 'Share',


      'ludens.v3.p': 'Tables open to friends or bots, and a console for publishers to bring their games digital without rebuilding the game.',


      'ludens.v4.h': 'Connect',


      'ludens.v4.p': 'Team building with board games: cohesion, decision and communication trained at the table, not on a slide.',


      'ludens.art.eyebrow': '/ 02 — ARTEFACTS',


      'ludens.art.h2': 'Artefacts of the <em>cycle.</em>',


      'ludens.art.desc': 'Tools born from game tables and design prototypes. Each serves the player and the creator alike.',


      'ludens.wk.eyebrow': '/ 03 — WORKSHOPS',


      'ludens.wk.h2': 'Bring the game <em>to the team.</em>',


      'ludens.wk.desc': 'Ready-to-run sessions — for companies, classes or communities that want to learn to play better.',


      'ludens.w1.h': 'Team building with games',


      'ludens.w1.p': 'Team-building sessions with board games: methodologies to train cohesion, decision and communication.',


      'ludens.w2.h': 'Game design for beginners',


      'ludens.w2.p': 'Workshops to create (not just play): from mechanic to testable prototype in a single session.',


      'ludens.cta.h2': 'Let\'s play<br><em>to create.</em>',





      /* ── Team page ── */


      'eq.eyebrow': '/ PEOPLE',


      'eq.h2': 'A studio that <em>fits in one person.</em>',


      'eq.desc': 'One profile for now — the full path behind the method. When there are more people here, this is where they show up.',


      'eq.m.eyebrow': '/ STUDIO DIRECTOR',


      'eq.m.name': 'David Ferreira Marques',


      'eq.m.tag': 'Building bridges to change. Creating the conditions for people and organisations to work better. Executing when the way isn\'t mapped yet. <strong>That\'s how it has been done for 15+ years, across very different sectors and scales</strong> — and that\'s what separates managing from leading at a time when organisations need both at once. AI didn\'t change this way of operating. It accelerated it.',


      'eq.m.loc': 'Porto / Maia, Portugal',


      'eq.m.cv': 'Printable CV',


      'eq.xp.eyebrow': '/ 01 — EXPERIENCE',


      'eq.xp.h2': 'Where the path <em>has been.</em>',


      'eq.wm.eyebrow': '/ 02 — WORKING MODEL',


      'eq.wm.h2': 'How I <em>work.</em>',


      'eq.cta.h2': 'The path continues<br><em>in the studio.</em>',





      'eq.j1.p': '2026 — present',


      'eq.j1.org': 'FedEx',


      'eq.j1.t': 'Senior Industrial Engineer / Product Owner',


      'eq.j1.d': 'Product Owner in a European Agile Release Train (SAFe), on an internal platform for pick-up and delivery operational control, used in most European countries.',


      'eq.j1.h1': 'Product ownership of a platform supporting operational control of local stations across Europe',


      'eq.j1.h2': 'The scope also includes fraud detection and payment processing optimisation',





      'eq.j2.p': '2025 — 2026',


      'eq.j2.org': 'CDI Portugal · Carlos Fiolhais Innovation Centre · Maia',


      'eq.j2.t': 'Head of Operations & Programmes',


      'eq.j2.d': 'Operational leadership of a social innovation lab co-funded by Norte 2030, with direct management of team, programmes, budget and performance indicators. Conception, implementation and continuous improvement of eight programmes at once.',


      'eq.j2.h1': 'Definition of strategic performance and quarterly OKR/KPI monitoring for the whole operation',


      'eq.j2.h2': 'Managing multiple processes in parallel with limited resources and hard deadlines (public funding)',


      'eq.j2.h3': 'Coordination with external entities: Municipality of Maia, European partners, British Esports Federation',


      'eq.j2.h4': 'Recruitment, onboarding and supervision of a multidisciplinary team',


      'eq.j2.h5': 'Implementation of in-house workflows and operational management tools',





      'eq.j3.p': '2023 — 2025',


      'eq.j3.org': 'FARFETCH · Porto',


      'eq.j3.t': 'Innovation Principal',


      'eq.j3.d': 'Leading product innovation processes in parallel with operational functions. Responsible for the cadence and quality of discovery, prototyping and validation cycles, coordinating photography, video and 3D production teams.',


      'eq.j3.h1': 'Building the foundations of a now-automated, AI-based process: tech definition, team creation, ways of working and expected outcomes',


      'eq.j3.h2': 'Stakeholder management with diverging priorities and tight timelines',


      'eq.j3.h3': 'Definition and improvement of ways of working in globally distributed teams',





      'eq.j4.p': '2022 — 2024',


      'eq.j4.org': 'FARFETCH · Porto',


      'eq.j4.t': 'Senior Production Manager',


      'eq.j4.d': 'Managing production processes of the photography studios (PT, BR, US, HK) in a publicly listed company with over 5,000 employees. Coordination of workflows between teams and partners distributed globally, focused on quality, deadlines and operational efficiency.',


      'eq.j4.h1': 'Managing production pipelines with multiple suppliers and international teams',


      'eq.j4.h2': 'Developing and optimising delivery processes in a high-volume environment',


      'eq.j4.h3': 'Reporting operational metrics to senior management and executive stakeholders',


      'eq.j4.h4': 'Unblocking and risk management in business-critical projects',





      'eq.j5.p': '2024 — present',


      'eq.j5.org': 'Creative Oscillator · Porto',


      'eq.j5.sub': 'Brands: Monco (change management consultancy) · Devity Studio (design and creativity)',


      'eq.j5.t': 'Founder & Manager',


      'eq.j5.d': 'A company structure holding two service brands. Responsible for operations, strategic positioning and portfolio definition.',


      'eq.j5.h1': 'Developing replicable delivery processes for consultancy projects on AI integration into business strategy',


      'eq.j5.h2': 'Commercial pipeline management and remote team coordination',





      'eq.j6.p': '2019 — 2020',


      'eq.j6.org': 'Surf & Code · Matosinhos — London',


      'eq.j6.t': 'Lead Designer — Platform team',


      'eq.j6.d': 'Managing the product design team of a startup accelerator. Responsible for sprint cadence, delivery quality and alignment between international stakeholders.',


      'eq.j6.h1': 'Running ideation and product validation workshops for funding',


      'eq.j6.h2': 'Leading the prototype team and user research',


      'eq.j6.h3': 'Defining and applying a "product-market validation" framework',





      'eq.j7.p': '2016 — 2019',


      'eq.j7.org': 'Namecheap · Porto (remote)',


      'eq.j7.t': 'Scrum Master & Design Manager',


      'eq.j7.d': 'Managing teams in an agile context. Responsible for sprint cadence, delivery quality and alignment between international stakeholders (PT, US, UK, UA, IN).',


      'eq.j7.h1': 'Implementing and optimising Scrum processes adapted to the team\'s context — UX Design Framework',


      'eq.j7.h2': 'Removing operational blockers and guaranteeing continuous delivery flow',


      'eq.j7.h3': 'Regular performance metrics reporting to senior management',





      'eq.j8.p': '2010 — 2015',


      'eq.j8.org': 'ESAD — College of Art and Design · Matosinhos',


      'eq.j8.t': 'Academic Coordinator',


      'eq.j8.d': 'Operational coordination of design courses. Managing calendars, faculty, industry partnerships and performance evaluation processes.',





      'eq.j9.p': '2007 — 2015',


      'eq.j9.org': 'ESAD — College of Art and Design · Matosinhos',


      'eq.j9.t': 'Assistant Lecturer',


      'eq.j9.d': 'Operational coordination of the Project I, Models and Prototypes, and Digital Lab course units. Programme definition and learning outcomes.',





      'eq.wm1.h': 'Bridges to change', 'eq.wm1.p': 'Not the consultant who optimises what exists, but someone who walks in, reads the context and builds — with people, for people, with speed and no waste.',


      'eq.wm2.h': 'Systems that outlive their creator', 'eq.wm2.p': 'Operational processes designed to be independent of whoever created them.',


      'eq.wm3.h': 'Leadership with individual presence', 'eq.wm3.p': 'Every team member gets attention, fairness and rigour; teams come out better after working together.',


      'eq.wm4.h': 'Synthetic thinking', 'eq.wm4.p': 'Breaking complex problems down to the bone and translating radical ideas into accessible language without losing depth.',


      'eq.wm5.h': 'AI as an operational lever', 'eq.wm5.p': 'Integrated into day-to-day processes; what changes is execution speed, not judgement.',


      'eq.wm6.h': 'Cross-disciplinary references', 'eq.wm6.p': 'Musician, cinephile, reader; perspectives that expand the solution space of teams.',





      'eq.nav.link': 'CV',


      'eq.tg.ops': 'Operations', 'eq.tg.ie': 'Industrial Engineering',


      'eq.tg.team': 'Team Management', 'eq.tg.okr': 'OKRs / KPIs', 'eq.tg.proc': 'Processes', 'eq.tg.budg': 'Budget', 'eq.tg.multi': 'Multi-project',


      'eq.tg.innov': 'Product Innovation', 'eq.tg.global': 'Global Teams',


      'eq.tg.prod': 'Production Management', 'eq.tg.intl': 'International Operations', 'eq.tg.sup': 'Suppliers', 'eq.tg.metrics': 'Metrics', 'eq.tg.volume': 'High Volume',


      'eq.tg.chang': 'Change Management', 'eq.tg.cons': 'Consulting', 'eq.tg.design': 'Design',


      'eq.tg.deliv': 'Delivery Metrics', 'eq.tg.kai': 'Continuous Improvement',


      'eq.tg.edu': 'Academic Coordination', 'eq.tg.plan': 'Planning',


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


