---
name: carrossel
description: >
  Cria carrosséis para Instagram da Quinta Essência seguindo as regras de conteúdo da Michelle.
  Gera título, briefing, 5 opções de hook, slides formatados, legenda, direção visual,
  renderiza em PNG via Playwright e salva no Notion.
  Use quando pedir "carrossel", "carousel", "slides instagram", ou pedir pra transformar um tema em carrossel.
---

# /carrossel — Carrossel Instagram Quinta Essência

## Dependências

- **Regras de conteúdo:** `marketing/conteudo/instrucoes-instagram.md` — LER ANTES de escrever qualquer linha
- **Identidade visual:** `marca/design-guide.md`
- **Tom de voz:** `_contexto/preferencias.md`
- **Contexto do negócio:** `_contexto/empresa.md`
- **Playwright:** `npx playwright screenshot` para renderizar. Instalar se necessário: `npx playwright install chromium`
- **Notion MCP:** para salvar no database após aprovação

---

## Workflow

### Fase 0 — Ler o contexto

Antes de qualquer coisa:
1. Ler `marketing/conteudo/instrucoes-instagram.md` completo
2. Confirmar internamente: qual crença errada esse tema quebra? Qual o ângulo que está uma camada abaixo do óbvio? O tema conecta com venda, posicionamento ou estrutura de negócio?

Se o tema não passa nesses três filtros, informar Michelle antes de continuar.

---

### Fase 1 — Texto e estrutura

**Passo 1 — Identificar formato e pilar**
Com base no tema fornecido, identificar:
- Pilar: Opinião forte / Reflexão com base real / Estratégia prática
- Formato: 1 (Percepção em voz alta) / 2 (Quebra de lógica) / 3 (Caso real com virada) / 4 (Organização do caos) / 5 (Comparação invisível) / 6 (Como eu faria)

**Passo 2 — Gerar 5 opções de hook**
Escrever 5 versões do Slide 1. Depois eliminar mentalmente toda opção que poderia ser postada por qualquer outro perfil de negócios.

- Opção A — Curiosidade
- Opção B — Contrariar
- Opção C — Tensão Emocional
- Opção D — Especificidade
- Opção E — Autoridade Sutil

Máximo 15 palavras cada. Todas específicas o suficiente pra pessoa sentir "isso é comigo."

**Passo 3 — Escrever os slides**
7 a 10 slides seguindo a estrutura:
- Slide 1: hook escolhido (Michelle escolhe entre as 5 opções)
- Slide 2: Espelho emocional — o público se vê
- Slide 3: Nome do problema
- Slide 4: Tensão estratégica
- Slide 5: Consequência invisível
- Slide 6: Revelação da causa
- Slide 7: Reenquadramento ("O problema não é X, é Y")
- Slide 8: Virada de consciência
- Slide 9: Nova regra (autoridade tranquila)
- Slide 10: CTA (convite, não venda)

**Regras de texto obrigatórias:**
- Máximo 40-50 palavras por slide
- Máximo 3 blocos por slide, separados por `///`
- ZERO travessões (—). Ponto final, vírgula ou quebra de linha
- Negrito: máximo 1-2 por slide, só para o que é realmente central
- Itálico: opinião pessoal ou ênfase emocional
- Tom: conversa com amiga inteligente. Nunca guru, nunca post motivacional

**Passo 4 — Escrever a legenda**
Ângulo diferente dos slides. Tom mais íntimo. CTA no final (DM, salvar ou compartilhar). Máximo 5 hashtags de nicho ao final (#negociosnaeuropa, #brasileirosnaeuropa, etc.).

**Passo 5 — Direção visual**
Para cada slide: estilo geral (série "Insights" ou "lembrete de empresária" ou outro) + sugestão de foto/visual (Michelle busca em banco de imagens).

**ENTREGA DA FASE 1:**
```
TÍTULO: [título do carrossel]

BRIEFING: [por que esse carrossel existe + objetivo estratégico em 2-3 linhas]

HOOKS (5 opções):
A — [curiosidade]
B — [contrariar]
C — [tensão emocional]
D — [especificidade]
E — [autoridade sutil]

SLIDES:
Slide 1 — [aguardando escolha do hook]
Slide 2 — [texto com /// entre blocos]
...

LEGENDA:
[texto]
#hashtag1 #hashtag2 ...

DIREÇÃO VISUAL:
Slide 1 — [série + sugestão de foto]
...
```

**CHECKPOINT:** Apresentar tudo acima. Aguardar Michelle escolher o hook e aprovar o texto antes de seguir.

---

### Fase 2 — Visual (HTMLs + PNGs)

Após aprovação do texto:

**Passo 1 — Criar HTMLs**
Dimensões: 1080x1350px. Inline CSS. Google Fonts como única dependência externa.

Aplicar identidade visual da Quinta Essência:
- Fundo: #0A0A0A (padrão) ou #E4DDD0 (série "lembrete de empresária")
- Fonte display: Playfair Display (títulos)
- Fonte body: Raleway (texto corrido, weight 300)
- Fonte técnica: DM Mono (labels, metadados)
- Cor de destaque: #6B4629 (Terra)
- Acento: #BDA78D (Pedra)
- Texto principal: #F5F0E8
- Handle @miluk no rodapé de cada slide

**Dois padrões visuais disponíveis:**

*Série "Insights da Michelle Luk" (fundo claro):*
- Card branco arredondado centralizado sobre fundo areia (#C4A882 ou similar)
- Header: "< Insights da Michelle Luk" em terra, ícone "..." à direita
- Texto preto/escuro no card, destaques em negrito, box highlight em amarelo suave (#FFF3C4)
- @MILUK em cinza claro no rodapé, fora do card

*Série "lembrete de empresária" (fundo Linho):*
- Fundo #E4DDD0 (Linho)
- Watermark "lembrete de empresária" no topo em letras espaceadas, cor suave
- Tipografia grande misturando Playfair Display (Bosque #3E5936) e peso bold (Terra #6B4629)
- @miluk em cinza suave no rodapé

**Variação visual:** não fazer todos os slides com layout idêntico. Usar ao menos 2 layouts diferentes.

Slide final: apenas branding (@miluk) e CTA, sem texto longo.

**Passo 2 — Salvar HTMLs**
Salvar em `marketing/conteudo/carrosseis/[tema]/instagram/slide-XX.html`

**Passo 3 — Renderizar slide 1**
```bash
npx playwright screenshot --viewport-size=1080,1350 --full-page "file:///[caminho absoluto]/slide-01.html" "slide-01.png"
```

**CHECKPOINT:** Mostrar slide 1 renderizado. Se aprovado, renderizar os demais.

**Passo 4 — Renderizar todos os slides**
Salvar PNGs em `marketing/conteudo/carrosseis/[tema]/instagram/`

---

### Fase 3 — Versão TikTok (opcional)

Perguntar após finalizar Instagram:
> "Quer a versão TikTok também? (1080x1920, vertical)"

Se sim:
```bash
npx playwright screenshot --viewport-size=1080,1920 --full-page "file:///[caminho]/slide-XX.html" "slide-XX.png"
```
Salvar em `marketing/conteudo/carrosseis/[tema]/tiktok/`

---

### Fase 4 — Salvar no Notion

Após aprovação final, criar página no Notion:

**Database:** `710568bc-be92-82b7-9413-87f3d72f8bb3`

**Campos a preencher:**
- Título: [título do carrossel]
- Canal: Instagram
- Formato: Carrossel
- Linha Editorial: [selecionar a mais adequada: DPS / Posicionamento / Autoridade / Empoderamento / Entretenimento / Conexão]
- Narrativa: [selecionar conforme o tema: Conquista Pessoal / Contraintuitivo / Inimigos em Comum / Dualidade / Crença / Expectativa x Realidade / Tendência / Segredo / Passo a Passo / História da Heroína / Perguntas]
- Etapa: Copy feita
- Prioridade: Alta
- Texto/Conteúdo: marcar como preenchido

**Conteúdo da página:**
Colar o texto completo dos slides formatado, a legenda e a direção visual.

Confirmar ao usuário: "Salvo no Notion. [link da página]"

---

## Checklist de qualidade (rodar antes de entregar Fase 1)

1. Se eu tapar o nome da Michelle, alguém identificaria que é dela?
2. Tem pelo menos um momento onde a pessoa pensa "nunca tinha visto assim"?
3. Consigo identificar a crença errada que o carrossel quebra com uma frase?
4. O carrossel faz a pessoa ver algo (não ensinar)?
5. Zero travessões? Zero frases equilibradas demais?
6. O tema conecta com venda, posicionamento ou estrutura de negócio?
7. A legenda traz ângulo diferente dos slides?
8. Lendo em voz alta soa como alguém falando?

Se qualquer resposta for "não", refazer antes de apresentar.

---

## Regras

- Texto aprovado na Fase 1 não muda na Fase 2
- Sempre mostrar slide 1 antes de renderizar os demais
- Se Michelle pedir ajuste no visual, editar o HTML e re-renderizar apenas o slide alterado
- Nunca usar travessão (—) em nenhum slide
- Nunca usar "mentoria", "chatbot", "agente de IA", "coach" em nenhum contexto
- Nunca tratar o público como iniciante
- Europeus são criteriosos, não frios — usar sempre essa distinção
