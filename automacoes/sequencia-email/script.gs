// ============================================================
// SEQUÊNCIA DE EMAIL — QUINTA ESSÊNCIA
// Cole este código no Apps Script do seu Google Sheets
// Extensions > Apps Script > colar > salvar > rodar setupTriggers()
// ============================================================

// ─── CONFIGURAÇÃO — editar antes de ativar ───────────────────
const CONFIG = {
  leadMagnetLink: 'COLE_O_LINK_DO_GUIA_AQUI',
  callLink:       'COLE_O_LINK_DA_CALL_AQUI',
  appLink:        'COLE_O_LINK_DE_APLICACAO_AQUI',
  sheetName:      'Respostas ao formulário 1', // nome exato da aba no Sheets
  colTimestamp:   1, // coluna A (1-based)
  colEmail:       3, // coluna C — ajustar se o form tiver ordem diferente
  colTrackStart:  4, // coluna D em diante — controle de envio
};

const NUM_EMAILS  = 8;
const SEND_ON_DAY = [0, 1, 2, 3, 4, 5, 6, 7]; // dias após inscrição para cada email

// ─── CONTEÚDO DOS EMAILS ─────────────────────────────────────
function getEmail(index) {
  const L = CONFIG.leadMagnetLink;
  const C = CONFIG.callLink;
  const A = CONFIG.appLink;

  const emails = [

    // 0 — Boas-vindas (enviado imediatamente)
    {
      subject: 'Seu guia chegou, e tem uma coisa que preciso te dizer',
      body:
`Antes de você abrir o guia, deixa eu ser honesta sobre uma coisa.

A maioria das coisas que existem por aí sobre "como vender na Europa" foram escritas por pessoas que nunca sentiram o que é chegar num mercado que não te conhece, com 10 anos de experiência que de repente parece não valer nada.

Eu senti.

Morei em Londres. Trabalhei em Madrid. Vi de perto como brasileiras competentes, com histórico real, travavam na hora de se posicionar, cobrar em euro e construir algo que funcionasse fora da bolha.

Não era falta de capacidade. Era falta de sistema.

Então o que eu faço hoje, com a Quinta Essência, é exatamente isso: ajudo profissionais brasileiras a transformar a experiência que já têm em receita real no mercado europeu, com posicionamento, processo e estrutura.

Sem fórmula genérica. Sem curso que você não vai terminar.

Nos próximos 7 dias, você vai receber um email por dia com o que eu vejo acontecer na prática, o que trava e o que move.

Curto. Direto. Sem enrolação.

Começa amanhã.

Qualquer dúvida, responde esse email. Eu leio.

Michelle

p.s. Aqui está o guia que você pediu: ${L}. Lê antes de amanhã, porque o email do dia 1 começa de onde ele termina.`
    },

    // 1 — Dia 1
    {
      subject: 'O cansaço que não é falta de esforço',
      body:
`Tem um momento que acontece com muita gente que conheço.

Ela chegou na Europa. Tinha experiência, currículo, resultado real. Esperava que isso fosse suficiente para começar.

Não foi.

Então ela trabalhou mais. Postou mais. Fez mais networking. Atendeu mais. Cobrou menos para "entrar no mercado."

Dois anos depois, ainda irregular. Ainda cansada. Ainda se perguntando por que não está funcionando.

O problema não era esforço. Era modelo.

Ela estava aplicando a lógica do mercado brasileiro num contexto que funciona diferente. Mesma linguagem, mesmo tom, mesmos gatilhos. Traduzido, não adaptado.

O cliente europeu não compra pela mesma lógica. Ele não responde a urgência artificial. Ele não toma decisão rápida porque você colocou "vagas limitadas." Ele leva o tempo dele. E ele confia em quem demonstra raciocínio, não em quem empurra.

Isso não é crítica ao mercado brasileiro. É só um mercado diferente, com lógica diferente.

E enquanto você não entender essa diferença no nível do osso, esforço vai continuar parecendo insuficiente.

Amanhã eu vou te mostrar onde essa diferença aparece primeiro, e por que tanta gente competente fica invisível no mercado europeu.

Michelle`
    },

    // 2 — Dia 2
    {
      subject: 'Por que sua experiência não está se convertendo em receita aqui',
      body:
`Vou te contar o que eu vejo acontecer com a maioria das profissionais brasileiras que chegam na Europa com histórico real.

Elas têm experiência. Têm resultado. Às vezes têm pós-graduação, certificação, anos de mercado.

Mas não têm posicionamento.

E no mercado europeu, posicionamento não é bio do Instagram. É a resposta clara para uma pergunta que o cliente faz silenciosamente quando encontra você pela primeira vez: "por que eu deveria confiar nessa pessoa para resolver esse problema específico meu?"

Experiência não responde essa pergunta. Posicionamento responde.

A diferença na prática é assim: experiência é o que você já fez. Posicionamento é o que você resolve, para quem, e por que do seu jeito.

Uma consultora de comunicação com 12 anos de mercado não é automaticamente a escolha óbvia para uma empresa europeia. Mas uma consultora especializada em ajudar marcas internacionais a comunicar para o público latino na Europa, com método próprio e casos comprovados, é.

Mesma pessoa. Mesmo histórico. Outra clareza.

E é essa clareza que faz o mercado te encontrar, em vez de você ter que correr atrás.

Amanhã eu vou falar sobre a armadilha mais comum de quem está tentando entrar no mercado local: continuar vendendo dentro da bolha.

Michelle`
    },

    // 3 — Dia 3
    {
      subject: 'A bolha que protege e limita ao mesmo tempo',
      body:
`Tem algo que ninguém fala abertamente, mas quase todo mundo que morou fora sente.

A comunidade brasileira no exterior é um abrigo. E ao mesmo tempo é um teto.

Quando você chega num país novo, sem rede, sem referências locais, sem certeza de nada, vender para quem fala a mesma língua e entende de onde você vem faz todo sentido. Tem menos risco. Tem mais familiaridade. Tem mais chance de sim.

O problema é quando isso vira o único canal.

Porque o mercado brasileiro no exterior é pequeníssimo comparado ao mercado local ao redor de você. É concorrido. Paga menos. E não é o mercado que você veio buscar quando decidiu morar na Europa.

Então em algum momento você vai precisar cruzar.

E cruzar não é traduzir. É adaptar. Tom diferente. Prova de credibilidade diferente. Forma de construir confiança diferente.

O cliente europeu local não vai te encontrar porque você está no grupo de brasileiros em Lisboa. Ele vai te encontrar porque você está onde ele está, falando sobre problemas que ele reconhece, de um jeito que faz sentido para ele.

Esse é o trabalho que a maioria adia. E quanto mais tempo adia, mais difícil fica sair da bolha.

Amanhã eu vou falar sobre o que está por trás dessa dificuldade. Porque quase nunca é falta de vontade.

Michelle`
    },

    // 4 — Dia 4
    {
      subject: 'O que está por trás do "ainda não estou pronta"',
      body:
`Já ouvi essa frase de muitas formas diferentes.

"Ainda preciso melhorar meu inglês."
"Quando eu tiver mais cases europeus."
"Assim que o site ficar pronto."
"Quando eu entender melhor como funciona aqui."

Cada uma dessas frases é real. E nenhuma é o problema real.

O que está por trás da maioria delas é uma coisa só: medo de se expor num mercado que ainda não te conhece, e ser ignorada, ou pior, não ser levada a sério.

Esse medo faz sentido. O mercado europeu tem uma camada de distância que o brasileiro não tem. Leva mais tempo. Exige mais consistência. Não responde a impulso.

E quando você não tem clareza de posicionamento, não tem um processo de aquisição e não tem casos concretos nesse contexto, expor parece um risco sem proteção.

Só que esperar ter tudo antes de começar é a armadilha mais cara que existe.

Porque posicionamento, casos europeus e processo comercial não aparecem por estudo. Aparecem por execução. Por colocar a primeira versão no mundo, observar o que acontece e ajustar.

Você não vai estar pronta antes de começar. Você vai ficar pronta começando.

Amanhã eu vou falar sobre o que muda quando você para de se preparar para vender e começa a construir estrutura enquanto vende.

Michelle`
    },

    // 5 — Dia 5
    {
      subject: 'A diferença entre preparar para vender e vender enquanto constrói',
      body:
`Uma das coisas que me incomoda no mercado de mentoria é o quanto tempo as pessoas passam se preparando antes de gerar qualquer resultado.

Um mês definindo nicho. Um mês criando conteúdo sem oferta. Um mês ajustando proposta de valor. Três meses depois, zero caixa e a dúvida de se aquilo vai funcionar.

Estrutura importa. Mas estrutura sem movimento é planejamento eterno.

O que funciona é construir as duas coisas ao mesmo tempo.

Você não precisa de oferta perfeita para ter a primeira conversa de venda. Você precisa de oferta suficiente. E é da conversa real com cliente real que a oferta perfeita nasce.

Você não precisa de sistema completo de aquisição para gerar os primeiros leads. Você precisa de uma mensagem clara e de pelo menos um canal ativo. Sistema vem depois, com dados.

Você não precisa entender tudo sobre o mercado europeu para cobrar em euro. Você precisa de posicionamento claro e de uma prova que faça sentido para quem está do outro lado.

A diferença entre quem trava e quem avança não é conhecimento. É disposição de colocar a versão 1 no mundo enquanto constrói a versão 2.

Amanhã eu vou falar sobre o papel da inteligência artificial em tudo isso. Não como modinha. Como ferramenta que tira peso operacional e deixa você com mais energia para o que importa.

Michelle`
    },

    // 6 — Dia 6
    {
      subject: 'Como uso IA no dia a dia, sem virar especialista em ferramenta',
      body:
`Quando falo em inteligência artificial com as profissionais que acompanho, a reação mais comum é uma mistura de curiosidade e cansaço.

Curiosidade porque parece útil. Cansaço porque parece mais uma coisa para aprender.

Então vou ser direta sobre como eu uso e como oriento o uso dentro do que faço.

IA não é assunto de aula. É ferramenta de aceleração.

Nos negócios que acompanho, IA entra para coisas concretas: qualificação de lead antes de uma conversa de venda, follow-up automatizado sem perder o tom pessoal, suporte para criação de conteúdo sem perder a voz original, organização de operação, lembretes de tarefas, checkpoints de processo.

Nada disso exige que você vire técnica. Exige que você saiba o que quer resolver e tenha alguém que configure isso para o seu negócio.

A questão não é saber usar IA. É saber o que você quer tirar do operacional para ter energia para o estratégico.

Isso é o que separa quem usa IA como brinquedo de quem usa como alavanca.

Amanhã é o último email dessa sequência. E vou falar sobre o que junta tudo isso, o que diferencia as profissionais que saem desse ciclo de esforço sem resultado, e qual é o caminho que funciona.

Michelle`
    },

    // 7 — Dia 7
    {
      subject: 'Se você chegou até aqui, isso é para você',
      body:
`Nesses 7 dias, eu falei sobre modelo de negócio, posicionamento, bolha brasileira, medo de se expor, estrutura versus planejamento e inteligência artificial.

Tudo isso tem um fio em comum.

O problema central de quem tem experiência real mas não está conseguindo converter isso em receita consistente no mercado europeu não é técnico. Não é de idioma. Não é de esforço.

É de sistema.

É não ter um processo claro de como transformar o que você sabe em oferta desejável nesse mercado. De como comunicar autoridade de um jeito que o cliente europeu entende e confia. De como construir aquisição sem depender só de indicação ou de um canal que pode parar a qualquer momento.

É exatamente isso que eu faço com as profissionais que trabalho na Quinta Essência.

Não é curso. Não é conteúdo para assistir no seu tempo livre. É acompanhamento estratégico, com método, ferramenta, processo e uma estrutura que foi desenhada para o contexto específico de quem quer construir receita em moeda forte no mercado europeu.

Se o que você leu nesses 7 dias fez sentido, e se você reconhece que o que falta não é mais estudo, mas mais estrutura e direção, tem dois caminhos:

Se você quer entender se a Quinta Essência faz sentido para o seu momento: ${C}

Se você já sabe que quer e quer dar o próximo passo: ${A}

Qualquer um dos dois leva para uma conversa real. Sem pressão. Sem script de vendas agressivo.

Só uma conversa para entender onde você está e se faz sentido caminhar junto.

Michelle

p.s. Se você não está pronta para conversar agora, tudo bem. Você vai continuar recebendo emails meus. Não semanalmente por obrigação, mas quando eu tiver algo que vale a leitura.`
    }

  ];

  return emails[index];
}

// ─── ENVIO NO MOMENTO DO CADASTRO (email 0) ──────────────────
function onFormSubmit(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.sheetName);
  const row   = e.range.getRow();
  const email = sheet.getRange(row, CONFIG.colEmail).getValue();

  if (!email) return;

  ensureTrackingHeaders(sheet);
  sendEmail(email, 0);
  markAsSent(sheet, row, 0);
}

// ─── ENVIO DIÁRIO (emails 1 a 7) ─────────────────────────────
function sendDailyEmails() {
  const sheet   = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.sheetName);
  const lastRow = sheet.getLastRow();

  if (lastRow < 2) return;

  ensureTrackingHeaders(sheet);

  const now = new Date();

  for (let row = 2; row <= lastRow; row++) {
    const timestamp = sheet.getRange(row, CONFIG.colTimestamp).getValue();
    const email     = sheet.getRange(row, CONFIG.colEmail).getValue();

    if (!email || !timestamp) continue;

    const signupDate = new Date(timestamp);
    const daysSince  = Math.floor((now - signupDate) / (1000 * 60 * 60 * 24));

    for (let i = 1; i < NUM_EMAILS; i++) {
      if (daysSince >= SEND_ON_DAY[i] && !isAlreadySent(sheet, row, i)) {
        sendEmail(email, i);
        markAsSent(sheet, row, i);
        Utilities.sleep(1500);
      }
    }
  }
}

// ─── HELPERS ─────────────────────────────────────────────────
function sendEmail(email, index) {
  const content = getEmail(index);
  GmailApp.sendEmail(email, content.subject, content.body, {
    name: 'Michelle — Quinta Essência'
  });
  Logger.log('Enviado: email ' + index + ' para ' + email);
}

function markAsSent(sheet, row, index) {
  sheet.getRange(row, CONFIG.colTrackStart + index).setValue(new Date().toISOString());
}

function isAlreadySent(sheet, row, index) {
  const val = sheet.getRange(row, CONFIG.colTrackStart + index).getValue();
  return val !== '' && val !== null && val !== undefined;
}

function ensureTrackingHeaders(sheet) {
  const labels = ['email_0','email_1','email_2','email_3','email_4','email_5','email_6','email_7'];
  labels.forEach(function(label, i) {
    const col = CONFIG.colTrackStart + i;
    if (!sheet.getRange(1, col).getValue()) {
      sheet.getRange(1, col).setValue(label);
    }
  });
}

// ─── SETUP — rodar uma única vez ─────────────────────────────
function setupTriggers() {
  ScriptApp.getProjectTriggers().forEach(function(t) {
    ScriptApp.deleteTrigger(t);
  });

  ScriptApp.newTrigger('onFormSubmit')
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onFormSubmit()
    .create();

  ScriptApp.newTrigger('sendDailyEmails')
    .timeBased()
    .everyDays(1)
    .atHour(9)
    .create();

  Logger.log('Triggers ativos: onFormSubmit + sendDailyEmails diário às 9h.');
}
