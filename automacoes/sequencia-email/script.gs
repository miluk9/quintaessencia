// ============================================================
// SEQUÊNCIA DE EMAIL — QUINTA ESSÊNCIA (versão 2)
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
const SEND_ON_DAY = [0, 1, 2, 3, 4, 5, 6, 7];

// ─── CONTEÚDO DOS EMAILS ─────────────────────────────────────
function getEmail(index) {
  const L = CONFIG.leadMagnetLink;
  const C = CONFIG.callLink;
  const A = CONFIG.appLink;

  const emails = [

    // 0 — Boas-vindas (enviado imediatamente)
    {
      subject: 'Antes de você abrir o guia, preciso te dizer uma coisa',
      body:
`Você acabou de receber o guia. Mas antes de abrí-lo, deixa eu ser direta sobre como eu cheguei até aqui.

Não comecei a Quinta Essência depois de ler um livro sobre empreendedorismo ou fazer um curso de negócios digitais. Cheguei aqui depois de 15 anos trabalhando dentro do mercado europeu, primeiro em consultorias, depois em multinacionais, em países diferentes, com equipes diferentes, em inglês, espanhol, com cliente europeu desde sempre.

Nunca vendi para brasileiros. Aprendi a vender para um mercado que tem outra lógica, outro tempo, outro critério.

Então quando comecei a observar o padrão de brasileiras com experiência real travando na entrada do mercado europeu, eu sabia o que estava acontecendo. Não era falta de competência. Era falta de sistema para traduzir essa competência num contexto diferente.

É isso que eu faço na Quinta Essência: ajudo profissionais brasileiros a transformar o que já sabem em receita real no mercado europeu, com posicionamento, processo e estrutura.

O guia que você vai ler agora nomeia as três travas mais comuns. Nos próximos 7 dias, cada email vai mais fundo em cada uma dessas travas, com o que eu vejo acontecer na prática e o que muda quando você entende o mecanismo por trás.

Curto. Sem enrolação. Um tema por dia.

Se tiver dúvida, responde esse email. Eu leio.

Michelle

p.s. ${L}. Lê antes de amanhã, porque o email do dia 1 começa de onde ele termina.`
    },

    // 1 — Dia 1
    {
      subject: 'O que acontece quando você traduz a oferta mas não o raciocínio',
      body:
`Tem uma distinção que a maioria das pessoas não faz, e que explica por que tanto esforço gera tão pouco resultado no mercado europeu.

Traduzir a oferta é pegar o que você vendia no Brasil e adaptar para o contexto europeu. Mudar o idioma, ajustar o preço para euro, talvez reformular o título do serviço. A maioria das pessoas faz isso e acha que fez a adaptação.

Não fez.

Adaptar o raciocínio é entender que o cliente europeu de alto valor tem um processo de decisão diferente. E enquanto você não entende esse processo, qualquer ajuste na oferta é cosmético.

O cliente europeu premium, seja B2B ou B2C, não compra por impulso. Não toma decisão porque você colocou "vagas limitadas" ou "só até sexta." Ele pesquisa. Compara. Volta. Pesquisa de novo. Às vezes leva semanas para decidir algo que para você parece óbvio fechar em dois dias.

Isso não é frieza. É critério.

E critério responde a coisas específicas: consistência de presença ao longo do tempo, prova de resultado no contexto dele, comunicação que demonstra raciocínio em vez de tentar criar urgência. Ele quer ver que você entende o problema dele melhor do que ele mesmo consegue articular. Não quer ser convencido. Quer ser entendido.

O que isso muda na prática?

Muda a comunicação. Em vez de falar sobre o que você entrega, você fala sobre o que o cliente está vivendo, o que está travando e como você enxerga esse problema de um ângulo que ele ainda não considerou. Você não vende o serviço, você demonstra o raciocínio.

Muda o tempo. Você para de esperar que o cliente decida rápido e começa a construir uma presença que funciona no tempo dele, não no seu.

Muda o critério de sucesso. Você para de medir pelo número de propostas enviadas e começa a medir pela qualidade das conversas que está tendo.

Isso parece mais lento no começo. E é. Mas é o que constrói carteira, indicação e receita previsível, que é o que você veio buscar.

Amanhã eu vou falar sobre a segunda trava. A que é mais difícil de admitir, porque parece que o problema está no mercado quando na verdade está na clareza.

Michelle`
    },

    // 2 — Dia 2
    {
      subject: 'A diferença entre ter autoridade e ter posicionamento (e por que confundir as duas trava tudo)',
      body:
`Deixa eu te fazer uma pergunta direta.

Se alguém que nunca ouviu falar de você encontrar seu perfil agora, em 10 segundos, ele consegue entender o que você resolve, para quem e por que do seu jeito?

Não o que você já fez. O que você resolve.

A maioria das profissionais brasileiras experientes que chegam no mercado europeu tem autoridade real. Tem histórico. Tem resultado. Tem anos de prática. O que não tem é posicionamento, e a diferença entre os dois é o que separa quem gera demanda de quem corre atrás de demanda.

Autoridade é o que você já fez. Posicionamento é o que o mercado entende que você faz agora, para quem especificamente e com qual diferencial claro.

Um exemplo concreto.

Uma consultora de RH com 12 anos de experiência em multinacionais tem autoridade real. Mas "consultora de RH" não é posicionamento. É categoria. Existem centenas de consultoras de RH em Lisboa, Barcelona, Londres. Por que ela e não outra?

Se ela reposiciona como especialista em ajudar empresas de tecnologia em expansão na Europa a estruturar processos de contratação e retenção para equipes multiculturais, o jogo muda. Agora tem um problema específico, um cliente específico e um diferencial que parte da sua experiência real em ambiente multicultural.

Mesma pessoa. Mesmo histórico. Outra clareza.

E é essa clareza que faz a diferença no mercado europeu, porque aqui o cliente premium não procura um generalista. Ele procura alguém que entenda o problema dele melhor do que os outros, que demonstre familiaridade com o contexto dele e que tenha um ponto de vista próprio sobre como resolver.

Ponto de vista é a parte que mais falta.

A maioria das pessoas tem experiência mas tem medo de ter opinião. Tem medo de dizer "eu não faço dessa forma" ou "esse caminho geralmente não funciona porque..." porque acha que isso vai afastar cliente. No mercado europeu de alto valor, é o contrário. Critério afasta cliente errado e atrai cliente certo.

A pergunta que fica para você pensar hoje: se alguém te perguntasse "o que você faz?" e você tivesse 30 segundos, a resposta que você daria agora posiciona você ou só descreve você?

Amanhã eu vou falar sobre a bolha. Que é confortável, que faz sentido usar, e que ao mesmo tempo é o maior limitador de crescimento para quem quer construir receita no mercado europeu de verdade.

Michelle`
    },

    // 3 — Dia 3
    {
      subject: 'A bolha que protege e limita ao mesmo tempo',
      body:
`Ninguém fala abertamente sobre isso. Mas quase todo mundo que morou fora sente.

Quando você chega num país novo, sem rede, sem referências, sem clareza de como o mercado funciona, vender para quem fala a mesma língua e entende de onde você vem faz todo sentido. Tem menos risco. Tem mais familiaridade. Tem mais chance de ser entendida sem precisar explicar tudo do zero.

A comunidade brasileira no exterior é real. A conexão é real. E usar essa rede para começar é inteligente.

O problema não é entrar na bolha. É quando a bolha vira o único canal e você começa a construir o negócio inteiro dentro dela, sem perceber que está criando um teto para si mesma.

O mercado brasileiro no exterior é pequeno. É concorrido, porque todo profissional brasileiro que chegou antes de você já está lá. Paga menos do que o mercado local, porque o cliente brasileiro ainda compara com o preço que pagaria no Brasil. E não é o mercado que você veio buscar quando decidiu morar na Europa.

Ao mesmo tempo, cruzar para o mercado local tem uma barreira real que vai além do idioma.

Tem a questão de como construir credibilidade do zero com um público que não te conhece, que não tem referência cultural do que você faz e que vai te avaliar por critérios diferentes dos que você está acostumada. Tem o tempo que isso leva, porque o cliente europeu não compra de quem ele acabou de conhecer. Tem a adaptação da comunicação, que não é só traduzir palavras, é mudar o tom, o ritmo, o que você destaca e o que você deixa de lado.

Essas barreiras são reais. Ignorá-las seria desonesto.

Mas existe uma diferença entre cruzar para o mercado local do zero, sem estrutura, e cruzar com posicionamento claro, presença consistente e uma oferta que faz sentido para o contexto europeu. O segundo caminho é mais lento para montar, mas uma vez que está funcionando, o mercado passa a trabalhar para você em vez de você estar sempre correndo atrás.

O que eu vejo funcionar na prática é usar a bolha brasileira como ponto de partida, não como destino. Construir os primeiros cases dentro da comunidade, validar a oferta, refinar a comunicação. E ao mesmo tempo começar a construir presença no mercado local, mesmo que pequena, mesmo que devagar, porque é uma construção que compõe ao longo do tempo.

O mercado europeu tem memória. Ele reconhece quem está lá antes. Quem começa a aparecer agora, de forma consistente, em um ano vai ter uma vantagem que quem ainda está esperando o momento certo não vai ter.

Amanhã eu vou falar sobre algo que está por trás da maioria das travas que vejo. Que não é técnico, não é de idioma e não é de mercado, embora pareça ser tudo isso ao mesmo tempo.

Michelle`
    },

    // 4 — Dia 4
    {
      subject: 'O que está por trás do "ainda não estou pronta"',
      body:
`Existe uma frase que eu ouço de formas diferentes, mas que sempre significa a mesma coisa.

"Assim que meu inglês melhorar."
"Quando eu tiver mais cases aqui."
"Depois que o site ficar pronto."
"Quando eu entender melhor como funciona o mercado local."

Cada uma dessas frases tem uma justificativa real por trás. O inglês importa. Cases europeus ajudam. Site profissional faz diferença. Entender o mercado é necessário.

Mas nenhuma dessas coisas é o problema real.

O que está por trás de quase todas elas é uma coisa: medo de se expor num mercado que ainda não te conhece e não ser levada a sério. Medo de colocar uma oferta em euro na frente de um cliente europeu e ele achar que não vale. Medo de aparecer antes de estar "boa o suficiente" para esse contexto.

Esse medo tem lógica. O mercado europeu tem uma distância que o brasileiro não tem. Leva mais tempo. Exige consistência. Não perdoa comunicação confusa. E quando você chega sem clareza de posicionamento, sem processo e sem casos concretos nesse contexto, expor parece um risco sem proteção.

Mas aqui está o problema com a lógica do "quando eu estiver pronta."

Posicionamento não aparece por estudo. Aparece por execução. Cases europeus não aparecem antes da primeira conversa. Aparecem depois da primeira conversa, depois da segunda, depois da décima. Clareza sobre o que funciona no mercado local não vem de pesquisa. Vem de colocar a primeira versão da oferta no mundo, observar como o mercado reage e ajustar.

A preparação eterna tem um custo que não aparece nos números mas aparece no tempo. Cada mês de espera é um mês sem dados reais, sem feedback, sem ajuste baseado em resultado. É um mês a mais de construção teórica sem validação prática.

O que eu recomendo na prática é separar o que precisa estar pronto antes de começar a conversar com clientes do que pode ser construído em paralelo com as conversas.

Antes de começar: ter clareza de posicionamento, mesmo que imperfeita. Saber o que você resolve, para quem e o que você cobra. Ter um canal de comunicação ativo, mesmo que pequeno.

Em paralelo com as conversas: refinar a oferta com base no que o mercado perguntar. Construir cases. Melhorar o inglês ou outro idioma local. Desenvolver presença.

A primeira versão nunca vai ser a melhor. Mas é a única que gera o dado que te leva para a segunda versão.

Amanhã eu vou mostrar o que separa quem construiu estrutura de quem ainda está se preparando para construir. Não é motivação. É uma sequência específica de decisões que faz toda a diferença.

Michelle`
    },

    // 5 — Dia 5
    {
      subject: 'Por que planejamento sem execução não é prudência, é outra coisa',
      body:
`Existe um padrão que eu vejo se repetir com profissionais experientes que chegam no mercado europeu.

Elas estudam muito. Consomem muito conteúdo. Fazem planejamento detalhado. Entendem bem o que precisaria ser feito. E ficam meses nesse ciclo sem gerar nenhuma receita, nenhuma validação, nenhum dado real.

Do lado de fora parece prudência. Por dentro, quase sempre é o medo de executar antes de estar segura.

O problema com esse ciclo é que ele não termina sozinho. A sensação de "não estar pronta" não some depois de mais um mês de preparação. Ela some quando você coloca a primeira versão do negócio no mundo e descobre que o mercado responde diferente do que você imaginava, que seus medos sobre o que o cliente iria pensar eram maiores do que a realidade, e que o ajuste que você precisava fazer não era o que você estava planejando fazer.

Aqui está o que eu observo que funciona na prática.

As profissionais que saem do ciclo de planejamento e começam a gerar receita no mercado europeu não são as que esperaram ter tudo pronto. São as que entenderam que estrutura e execução precisam acontecer ao mesmo tempo, não em sequência.

Na prática isso significa: você não precisa de funil completo para ter a primeira conversa de venda. Você precisa de posicionamento suficientemente claro para explicar o que resolve e para quem. O funil vem depois, quando você tem dados reais de como o cliente chega até você.

Você não precisa de site antes de validar a oferta. Precisa de uma proposta clara que você consiga apresentar numa conversa de 30 minutos. O site vem depois, quando você sabe o que precisa dizer.

Você não precisa de cases europeus antes de começar a conversar com clientes europeus. Precisa de uma forma de demonstrar raciocínio que faça o cliente sentir que você entende o problema dele. Os cases vêm depois, das primeiras conversas.

A sequência que funciona é essa: posicionamento primeiro, primeira venda segundo, sistema depois. Não o contrário.

O que trava a maioria é inverter essa ordem. Fica construindo sistema antes de validar posicionamento. Fica preparando site e funil antes de ter certeza do que vai dizer. Fica esperando o sistema estar pronto para começar a conversar com clientes, quando o sistema só pode ser construído com dados das conversas.

Uma pergunta para você pensar: no que você está investindo seu tempo agora? Está construindo clareza e tendo conversas? Ou está preparando estrutura para conversas que ainda não aconteceram?

Amanhã eu vou falar sobre algo que entra muito na conversa sobre negócios europeus mas que quase sempre é tratado da forma errada: inteligência artificial. Não como ferramenta técnica. Como o que ela é na prática, quando bem usada.

Michelle`
    },

    // 6 — Dia 6
    {
      subject: 'O que IA tem a ver com o seu negócio no mercado europeu (e o que não tem)',
      body:
`Quando IA entrou na conversa sobre negócios digitais, aconteceu o que sempre acontece com qualquer coisa nova: metade das pessoas começou a vender IA como solução para tudo, e a outra metade ficou com a sensação de que precisava aprender mais uma ferramenta complexa antes de poder fazer qualquer coisa.

As duas reações são o problema.

Deixa eu te dizer como eu uso e como oriento o uso nas acelerações que faço.

IA não resolve posicionamento. Não substitui o trabalho de entender quem é seu cliente, o que ele está tentando resolver e por que você é a escolha certa para esse problema específico. Se você não tem clareza disso, IA vai gerar volume de conteúdo sem direção, propostas que soam genéricas e comunicação que parece de todo mundo porque de fato poderia ser de qualquer um.

O que IA faz bem é tirar do seu prato o que consome tempo mas não exige o que é insubstituível em você: seu raciocínio, sua experiência, seu ponto de vista.

Na prática, os negócios que acompanho usam IA para coisas concretas. Qualificação de lead antes de uma conversa de venda, para que você entre na conversa sabendo o que a pessoa já tentou, onde está travando e o que está buscando. Follow-up automatizado que mantém o tom pessoal sem você precisar escrever cada mensagem individualmente. Organização de operação, desde agendamento até documentação de processo. Suporte para criação de conteúdo, não para gerar o conteúdo, mas para estruturar o raciocínio que você já tem de uma forma mais rápida.

O resultado não é trabalhar menos. É trabalhar com mais foco no que só você pode fazer.

Porque o que diferencia um negócio que escala de um que fica preso na sobrecarga não é quantidade de horas. É clareza sobre o que exige sua presença e o que pode funcionar sem você.

Uma consultora com posicionamento claro, processo de venda estruturado e sistema de follow-up funcionando converte mais com menos esforço do que uma consultora que faz tudo manualmente, mesmo que a segunda seja mais experiente.

Isso não é automação como moda. É operação inteligente.

E é especialmente relevante no mercado europeu, onde o cliente premium espera consistência de comunicação ao longo do tempo. Ele não decide na primeira conversa. Ele volta. Verifica se você ainda está lá. Lê o que você publicou no mês passado. Se o seu acompanhamento depende inteiramente da sua disponibilidade manual, você vai perder no ponto em que ele estava pronto para decidir.

Amanhã é o último email dessa sequência. Vou juntar o que falei nos últimos 6 dias e ser direta sobre o que separa quem está construindo receita no mercado europeu de quem está ainda tentando entender por onde começa.

Michelle`
    },

    // 7 — Dia 7
    {
      subject: 'O que separa quem está construindo de quem ainda está tentando começar',
      body:
`Ao longo dessa semana eu falei sobre raciocínio de mercado, posicionamento, bolha brasileira, o que está por trás do "ainda não estou pronta", sequência de construção e inteligência artificial.

Tudo isso tem um fio em comum.

O mercado europeu não é mais difícil do que o brasileiro. Ele é diferente. Tem outra lógica, outro tempo, outro critério de confiança. E enquanto você está tentando resolver um problema europeu com raciocínio brasileiro, vai parecer que o esforço não está se convertendo, que o mercado não te vê, que algo está errado com você ou com o que você oferece.

Quase sempre o que está errado não é a competência. É a falta de um sistema para traduzir essa competência no contexto certo.

O sistema tem partes específicas. Posicionamento que faz sentido para o cliente europeu, não só para você. Uma oferta com clareza de resultado, não só de entrega. Um processo comercial que funciona no tempo de decisão do cliente europeu, não no tempo que você gostaria que ele decidisse. Uma presença consistente que constrói credibilidade ao longo do tempo. E uma operação que não depende inteiramente da sua disponibilidade manual para funcionar.

Quando essas partes estão no lugar, o negócio começa a funcionar de um jeito diferente. Você para de correr atrás de cliente e começa a ter conversas com pessoas que já chegam até você com mais clareza do que querem. Você para de improvisar proposta e começa a apresentar uma oferta que você sabe que faz sentido. Você para de depender de indicação como único canal e começa a ter um sistema que gera demanda com consistência.

Isso não acontece da noite para o dia. Mas com estrutura certa, acontece muito mais rápido do que aconteceria tentando resolver cada parte isoladamente, sem método.

É esse trabalho que eu faço na Quinta Essência.

Não é um curso. Não tem módulos para assistir no seu tempo livre. É aceleração individual, com método, acompanhamento próximo e estrutura desenhada para o contexto específico de quem quer construir receita em moeda forte no mercado europeu.

Se o que você leu nessa semana fez sentido e você reconhece que o que falta não é mais estudo, mas mais estrutura e direção, tem dois caminhos:

Se você quer entender como seria trabalhar junto antes de decidir qualquer coisa: ${C}. É uma conversa de 30 minutos onde eu entendo onde você está, o que está travando e o que faria sentido como próximo passo. Sem compromisso.

Se você já sabe o que quer e quer entrar direto: ${A}. O programa tem critério de entrada porque o resultado depende de quem está dentro.

Qualquer um dos dois caminhos começa com uma conversa real.

Michelle

p.s. Se você não está pronta para esse passo agora, tudo bem. Você vai continuar recebendo emails meus quando eu tiver algo que valha a leitura. Não toda semana por obrigação. Quando fizer sentido.`
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
