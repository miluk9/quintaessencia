# Módulo · Pesquisa de conteúdo

> Primeiro passo do trabalho da Kelly. Pré-requisito: CLAUDE.md lido e 3 a 5 perfis de referência.

## O que este módulo faz

Descobre **o que já funciona com o público dela**, medido contra o próprio perfil de cada referência, e **o que esse público pede** nos comentários. É daqui que saem os temas, os ganchos e as iscas da semana. Nada de pauta inventada.

A leitura acontece no **Claude no Chrome**, com o Instagram aberto e logado, **ou pelo arquivo do Creator Lab**, quando ela (ou a estrategista) já rodou os perfis lá (Passo 2b). Você lê a tela ou o arquivo; nunca preenche de memória.

---

## Passo 1 · Conferir os perfis

- **3 a 5 perfis** que falam com o mesmo público dela. Podem ser concorrentes, perfis de outro nicho com a mesma cliente, ou perfis de fora do Brasil.
- Se ela mandou menos de 3, peça mais um ou dois em uma linha. Se mandou mais de 5, pergunte quais 5 entram nesta rodada.
- Se ela também mandou **links de conteúdos que salvou**, eles entram na pesquisa como "escolhidos por ela" (registre os mesmos campos, sem a comparação com a média se o perfil não foi lido inteiro).
- **Perfil que ela combate** (alguém com uma visão oposta à dela): entra só para registrar a crença que ela quer quebrar. O gancho desse perfil nunca vira gancho dela. Pergunte se algum perfil é desse tipo quando o Diretriz Visual indicar uma tese contrária a algo do mercado.

## Passo 2 · Ler cada perfil (no Chrome)

Para cada perfil, na aba **Reels**:

1. **Abra os Reels dos últimos 60 dias** e anote as visualizações de cada um (o número que aparece na grade da aba Reels).
2. **Calcule a média de visualizações do perfil** nesse período. Registre também quantos Reels entraram na conta (a amostra).
3. **Separe os 5 Reels que mais passaram da média.** Para cada um, anote quantas vezes a média ele fez (ex.: 3,2× a média).
4. **Em cada um dos 5, registre:**
   - link;
   - visualizações (e curtidas e comentários, se visíveis);
   - **gancho falado:** a primeira frase dita, literal, entre aspas (pela legenda gravada no vídeo ou pelo áudio; se não der para ouvir, "não visível");
   - **texto da tela:** o que está escrito nos primeiros segundos, literal;
   - **tema:** do que o vídeo fala, em uma linha;
   - **isca, oferta ou só conteúdo:** se entrega um presente gratuito, se vende algo, ou nenhum dos dois;
   - **palavra-chave** pedida nos comentários ("Comente X"), se houver.
5. **Leia os comentários** desses Reels e anote, **com as palavras das pessoas, entre aspas**:
   - **dúvidas** (o que perguntam);
   - **desejos** (o que querem conseguir);
   - **problemas** (a situação que contam viver);
   - **objeções** (o que dizem que impede, o "mas e se…").
   Toda frase vem com o Reel de onde saiu e a ideia do vídeo a que ela reage. Frase solta ("sou eu", "precisava ouvir isso") sem dar para saber a que reage é descartada.
   **Comentário que só repete a palavra-chave não conta** como desejo nem como dúvida. Ele só mostra quantas pessoas pediram a isca.

### Cuidados de leitura
- **Visualização alta sozinha não prova nada.** Um Reel com 200 mil visualizações num perfil cuja média é 300 mil está abaixo da média. Só diga "acima da média" depois de comparar.
- **Amostra pequena** (menos de 8 Reels em 60 dias): registre "amostra pequena: leitura fraca" e, se ela quiser, amplie para 90 dias, avisando.
- **Um Reel fora da curva** puxa a média para cima. Se um Reel fez mais de 10 vezes os outros, registre isso ao lado da média.
- Reels **fixados** no topo e Reels **com anúncio pago** visível ("Patrocinado") ficam sinalizados: eles não comparam em pé de igualdade.
- Carrossel não mostra visualizações. Se ela quiser incluir carrosséis, compare por curtidas e comentários **dentro do próprio perfil** e diga que a régua é outra.
- Perfil estrangeiro: registre o idioma e escreva, para ela, um resumo em português de cada vídeo.
- Nunca nomeie como "viral" o que não foi comparado.

## Passo 2b · Ler pelo arquivo do Creator Lab

Use este caminho quando ela mandar o arquivo de análise do Creator Lab de um perfil (o `.json` exportado pelo app, ou a versão em `.csv` ou `.md` gerada a partir dele). Salve o arquivo em `marketing/01-pesquisa/creator-lab/[perfil]-[aaaa-mm-dd].json` e leia dele. Não peça os links nem as visualizações de novo: estão no arquivo.

**Onde está cada coisa no arquivo** (`posts`, um por Reel):

| O que o módulo pede | Onde está | Cuidado |
|---|---|---|
| Link | `url` | Use só o link do post. Nunca copie `videoUrl`, `audioUrl`, `thumbnailUrl` nem links do Apify: são links assinados e temporários |
| Visualizações | `plays` | `views` costuma vir vazio |
| Curtidas e comentários | `likes`, `comments` | São só as contagens. O texto dos comentários não vem |
| Data | `publishedAt` | Filtre os últimos 60 dias, como no Passo 2 |
| Duração | `duration` | em segundos |
| Gancho falado | `analysis.opening`, ou o trecho marcado `hook` em `analysis.anatomy` | Literal, entre aspas |
| Roteiro inteiro | `transcript.text`, ou `analysis.anatomy` em partes (gancho, contexto, problema, conselho, entrega, CTA) | Leia o roteiro antes de classificar |
| Legenda do post | `caption` | É de onde saem a isca, a oferta e a palavra-chave ("Comente X") |
| Autor | `creator` | Se for diferente do perfil analisado, é colaboração: sinalize |

**Regras desta leitura:**
1. **Média e amostra:** calcule a média de visualizações com os Reels dos últimos 60 dias que estão no arquivo, registre a amostra e calcule também a **mediana**. Se um Reel fez mais de 10 vezes os outros, registre a mediana ao lado da média e use a mediana para o "× média" daquele perfil, avisando.
2. **Reel sem fala:** se a transcrição tiver menos de 5 palavras ou vier em outro idioma num perfil brasileiro (ex.: "Thank you."), é áudio de música transcrito por engano. Marque "sem fala" e não use como gancho.
3. **Os rótulos do Creator Lab são pista, não resposta.** O tema, a estrutura e o gancho classificados pelo app (`analysis.labels`) ajudam a filtrar, mas erram em português. Escreva o tema em uma linha a partir do roteiro, classifique o tipo de conteúdo do Passo 4 você mesma e nunca use o rótulo de emoção.
4. **O que o arquivo não tem, e como completar:**
   - **Texto da tela:** o app não lê o que está escrito no vídeo. Para os 5 Reels que mais passaram da média, peça a ela um print dos primeiros segundos, ou leia no Chrome se estiver disponível. Sem isso: "texto da tela não verificado".
   - **Comentários (o texto):** o Passo 2, item 5, continua valendo. Leia no Chrome os comentários dos 5 mais fortes, ou peça que ela cole alguns. Sem isso, a seção "O que o público pede" fica "não verificada" e você avisa que é a parte mais importante da pesquisa.
   - **Carrosséis:** o app só lê Reels. Se ela quiser carrossel no padrão de conteúdo, leia no Chrome ou registre "padrão de conteúdo só de Reels".
   - **Fixados e patrocinados:** o app pula os fixados, mas não sinaliza patrocinado. Se ela souber de algum, sinalize.
5. **Como foi lida:** registre "Creator Lab, arquivo de [data]" no cabeçalho da rodada.

## Passo 3 · Se o Chrome não estiver disponível (e não houver arquivo do Creator Lab)

Diga em uma linha e ofereça o caminho alternativo:

> *"Eu não consigo abrir o Instagram daqui. Vamos assim: abra cada perfil, entre na aba Reels e me mande os links dos Reels que mais chamaram a sua atenção nos últimos 60 dias, com o número de visualizações que aparece em cada um. Se puder, cole também a legenda e alguns comentários. Eu faço a análise com o que você mandar."*

Com o que ela colar, siga os mesmos passos, e **marque em cada linha o que você não pôde verificar** (ex.: "visualizações informadas pela aluna", "média não calculada: só 4 Reels enviados", "gancho falado não verificado: sem áudio").

---

## Passo 4 · O padrão de conteúdo dos perfis e a linha de conteúdo dela

Além dos Reels que mais passaram da média, leia **o tipo de conteúdo** que cada perfil faz. Classifique **todos** os posts lidos de cada perfil (Reels e carrosséis) em um destes tipos:

| Tipo | O que é |
|---|---|
| **Ensino com isca** | ensina um passo e oferece um presente pela palavra-chave |
| **Ensino sem isca** | ensina, sem presente |
| **Polêmica ou opinião** | vai contra algo que o nicho repete; gera debate (nunca ataca uma pessoa) |
| **Conexão** | história, bastidor, por que a pessoa faz o que faz |
| **Prova** | resultado de cliente, antes e depois |
| **Oferta direta** | apresenta o produto e como comprar |

Para cada perfil, registre a **porcentagem de cada tipo** (com o número de posts lidos) e **qual tipo mais passa da média** do perfil. Depois:

1. **O que se repete entre os perfis:** ex.: "os três perfis que mais cresceram fazem a maior parte do conteúdo com isca e postam polêmica uma vez por semana; oferta direta é rara e fica abaixo da média".
2. **O perfil dela hoje:** a mesma classificação, pela análise do perfil (se ela fez na preparação) ou lendo os últimos 30 posts do @ dela.
3. **A linha de conteúdo proposta para ela:** a porcentagem de cada tipo, com o motivo de cada uma, tirada do que funciona no nicho dela e do que ela vende. A oferta direta fica sempre em **no máximo 1 a cada 5 posts**. A polêmica sai do que ela combate (Diretriz Visual) e nunca do que ela vende.

Ex. (consultora financeira): ela postava quase só oferta. A pesquisa mostrou que os perfis de finanças que mais crescem fazem ensino com isca ("comente PLANILHA") e posts polêmicos ("guardar 10% do salário não funciona para quem ganha pouco"). A linha proposta virou 60% ensino com isca, 20% polêmica, 10% conexão, 10% prova e no máximo 1 oferta a cada 5 posts.

**Honestidade:** porcentagem sempre com o número de posts lidos; tipo que você não conseguiu identificar fica "não classificado"; nunca preencha de memória.

---

## Passo 5 · Salvar a pesquisa e o Banco de Inspirações

Dois arquivos em `marketing/01-pesquisa/`. Se já existem, acrescente a rodada nova no topo, com a data, sem apagar a anterior.

**1. `pesquisa-conteudo.md`** (a análise):

```markdown
# Pesquisa de conteúdo · [Nome da marca]

## Rodada [dd/mm/aaaa]
Perfis lidos: [N] · Período: últimos 60 dias · Como foi lida: Chrome / Creator Lab (arquivo de [data]) / material enviado pela aluna

### Resumo por perfil
| Perfil | Idioma | Reels lidos | Média de visualizações | Reels com isca | Para que serve |
|---|---|---|---|---|---|

### @[perfil] · média [N] visualizações · amostra [N] Reels
| # | Link | Visualizações | × média | Gancho falado | Texto da tela | Tema | Isca / oferta / conteúdo | Palavra-chave |
|---|---|---|---|---|---|---|---|---|
| R1 | | | | "…" | "…" | | | |
Observações: [fixados, fora da curva, amostra pequena]

### O que o público pede (comentários)
**Dúvidas**
- "[frase literal]" ↳ R[n] · reage a: [ideia do vídeo]
**Desejos** · **Problemas** · **Objeções** (mesmo formato)
Palavras que o público usa: [8 a 10 expressões]

### O padrão de conteúdo dos perfis
| Perfil | Posts lidos | Ensino com isca | Ensino sem isca | Polêmica | Conexão | Prova | Oferta | Tipo que mais passa da média |
|---|---|---|---|---|---|---|---|---|
O que se repete: …
O perfil dela hoje: [mesma classificação · fonte: análise do perfil ou leitura do @]

### A linha de conteúdo proposta
| Tipo | Quanto do conteúdo | Por quê |
|---|---|---|

### Os 10 conteúdos mais fortes da rodada
| Ordem | Referência | × média | Tema | Por que pode servir para você |
|---|---|---|---|---|

### O que não pôde ser verificado
- …
```

**2. `banco-de-inspiracoes.md`** (uma linha por conteúdo que passou da média, para consultar e levar para a ferramenta):

```markdown
# Banco de Inspirações · [Nome da marca]

## Rodada [dd/mm/aaaa]
| ID | Link | Perfil | Idioma | Formato | Tipo de conteúdo | Tema | Gancho (literal) | × média | O que o público comentou | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| I01 | | @ | | Reel | Ensino com isca | | "…" | 3,2× | "…" | escolhida / não usada |
```

Nunca salve imagem, capa ou print de concorrente: só link, texto e números.

## Passo 6 · Entregar no chat

Mostre **só o resumo**, não o arquivo inteiro:
1. A tabela "Resumo por perfil".
2. Os **10 conteúdos mais fortes** (ordenados por quantas vezes passaram da média), uma linha cada: referência · × média · tema · gancho.
3. **O que o público mais pede**, em 3 a 5 linhas, com uma frase literal de exemplo em cada.
4. **O padrão de conteúdo dos perfis**, o perfil dela hoje e a **linha de conteúdo proposta**, em tabela.
5. O que não pôde ser verificado.

Feche com:
> *"Agora é com você: marque os conteúdos que fazem sentido para o seu negócio (pelo número ou pelo link) e me diga se concorda com a linha de conteúdo. Ela vai guiar o seu calendário."*

**Não siga para o banco de ganchos sem a seleção dela e sem a linha de conteúdo aprovada.**

---

## Checklist do módulo (antes de entregar)
- [ ] Cada perfil tem média, amostra e período registrados.
- [ ] Todo "acima da média" foi comparado com a média do próprio perfil.
- [ ] Ganchos e textos da tela estão literais, entre aspas.
- [ ] Toda frase de comentário tem o Reel de origem e a ideia a que reage.
- [ ] Comentários que só repetem a palavra-chave ficaram de fora dos desejos.
- [ ] O que não foi visto na tela está marcado como "não visível" ou "não verificado".
- [ ] O padrão de conteúdo de cada perfil tem a porcentagem de cada tipo e o número de posts lidos.
- [ ] A linha de conteúdo proposta tem o motivo de cada tipo e oferta em no máximo 1 a cada 5 posts.
- [ ] Os conteúdos que passaram da média estão no `banco-de-inspiracoes.md`, sem imagem de concorrente.
- [ ] Se a leitura foi pelo Creator Lab: nenhum link assinado copiado, Reels sem fala marcados, rótulos do app conferidos no roteiro, e texto da tela e comentários completados ou marcados como não verificados.
