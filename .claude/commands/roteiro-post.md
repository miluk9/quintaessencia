---
name: roteiro-post
description: >
  Transforma uma ideia, texto, link ou arquivo em roteiro de post para redes sociais,
  vídeo curto (Reels/TikTok), thread (LinkedIn/X) ou newsletter.
  Calibrado com as regras de conteúdo da Quinta Essência.
  Use quando pedir "roteiro", "escreve um post", "transforma isso num post",
  "faz um roteiro de vídeo", "cria uma thread", "faz uma newsletter sobre isso".
---

# /roteiro-post — Roteiro de Conteúdo

## Dependências

- **Regras de conteúdo:** `marketing/conteudo/instrucoes-instagram.md` — LER pilares, anti-padrões e regras de texto
- **Tom de voz:** `_contexto/preferencias.md`
- **Contexto do negócio:** `_contexto/empresa.md`

---

## Workflow

### Passo 1 — Entender o pedido

Identificar:
1. **Conteúdo fonte:** ideia, link, texto, arquivo, transcrição ou assunto livre
2. **Formato de saída:** post Instagram/LinkedIn, vídeo curto (Reels/TikTok), thread (X ou LinkedIn), newsletter

Se for um link, usar WebFetch para buscar o conteúdo.
Se não estiver claro o formato, perguntar: "Pra qual canal é esse roteiro?"

---

### Passo 2 — Filtro de território

Antes de escrever, responder internamente:
- Qual é a crença errada que o público tem sobre esse tema?
- O ângulo conecta com venda, posicionamento ou estrutura de negócio no mercado europeu?
- O insight está uma camada abaixo do óbvio?

Se o tema não passa nesses filtros, apresentar um ângulo alternativo antes de continuar.

---

### Passo 3 — Escrever o roteiro

**Post Instagram (legenda):**
- Hook nas primeiras 2 linhas (antes do "ver mais") — específico, não genérico
- Desenvolvimento em parágrafos curtos com respiro entre eles
- Sem travessão (—), sem bullet points com •, sem jargão de guru
- Tom: conversa, não artigo
- CTA no final (pergunta, DM, salvar)
- Máximo 5 hashtags de nicho ao final (#negociosnaeuropa, #brasileirosnaeuropa)
- Salvar em `marketing/conteudo/roteiros/post-instagram-[tema]-[data].md`

**Post LinkedIn:**
- Hook forte na primeira linha — para o scroll profissional
- Tom mais direto que o Instagram, mas sem formalidade corporativa
- Parágrafos de 1-3 linhas com espaço entre eles
- Opinião clara, não só observação
- CTA no final (comentário, DM, link)
- Salvar em `marketing/conteudo/roteiros/post-linkedin-[tema]-[data].md`

**Vídeo curto (Reels/TikTok — até 60s):**
- 0-3s: hook visual + frase de abertura (para o scroll em menos de 3 segundos)
- 4-20s: o problema ou a promessa
- 21-45s: a resposta ou o conteúdo principal
- 46-60s: conclusão + CTA
- Formato: linha a linha, com marcações de tempo aproximadas
- Tom: Michelle falando — direto, sem "ei pessoal", sem "não esquece de dar like"
- Salvar em `marketing/conteudo/roteiros/roteiro-video-[tema]-[data].md`

**Thread (X ou LinkedIn):**
- Post 1: hook que para o scroll — específico, com tensão
- Posts 2-8: um ponto por post, progressão lógica, cada um puxa o próximo
- Post final: conclusão + CTA
- Nunca repetir informação entre posts
- Salvar em `marketing/conteudo/roteiros/thread-[canal]-[tema]-[data].md`

**Newsletter:**
- Assunto: 2 opções (uma direta, uma que gera curiosidade)
- Pré-header: complementa o assunto, não repete
- Abertura: pessoal, situação real ou observação concreta (2-4 linhas)
- Desenvolvimento: seções curtas com subtítulos simples, sem jargão
- Encerramento: CTA claro (DM, link, responder)
- Tom: mais íntimo que os posts, como se estivesse escrevendo pra uma pessoa
- Salvar em `marketing/conteudo/newsletters/newsletter-[tema]-[data].md`

---

## Regras

- Tom segue `_contexto/preferencias.md` estritamente
- Nunca "ei pessoal", "não esquece de dar like", "arrasta pra cima"
- Nunca usar travessão (—)
- Nunca chamar Michelle de "mentora" ou "coach"
- Nunca usar "chatbot", "agente de IA"
- O roteiro deve soar como a Michelle fala, não como conteúdo genérico de Instagram
- Conteúdo que poderia ser de qualquer perfil de negócios não serve — refazer com ângulo mais específico
- Europeus são criteriosos, não frios — usar essa distinção sempre que o tema envolver o mercado europeu
