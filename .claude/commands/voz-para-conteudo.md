---
name: voz-para-conteudo
description: >
  Transforma uma nota de voz, ideia falada ou pensamento bruto em conteúdo
  pronto: post, carrossel, Reels, thread ou newsletter.
  Use quando disser uma ideia em voz ou texto e quiser que vire conteúdo real.
  Ativa com: "tive uma ideia", "deixa eu pensar em voz alta", "grava isso",
  "transforma essa ideia", "isso pode virar um post?", "pega o que eu disse".
---

# /voz-para-conteudo — Ideia Bruta → Conteúdo

## Dependências

- **Tom de voz:** `_contexto/preferencias.md`
- **Contexto do negócio:** `_contexto/empresa.md`
- **Roteiro post:** `.claude/commands/roteiro-post.md`

---

## Workflow

### Passo 1 — Receber a ideia

Aceitar qualquer formato:
- Nota de voz transcrita (SuperWhisper, Whisper, qualquer transcritor)
- Texto digitado rápido, sem estrutura
- Frase solta com uma ideia
- Observação de uma conversa com cliente

Se não foi fornecido nada: "Pode falar a ideia — transcreve aqui e eu transformo."

---

### Passo 2 — Identificar o núcleo

Antes de qualquer formatação, identificar:

- **O ponto real:** o que está sendo dito de verdade? (não o que foi dito, mas o insight central)
- **Quem precisa ouvir isso:** audiência QE (brasileiras no mercado europeu) ou ED (gestores B2B) ou ambas?
- **O que essa ideia confronta:** qual crença comum ela quebra ou qual dúvida ela resolve?
- **A tensão:** o que está em jogo para quem lê?

Se a ideia for vaga demais para identificar o ponto real, perguntar: "O que você estava tentando dizer com isso? O que a pessoa precisa entender?"

---

### Passo 3 — Propor formato

Se não foi especificado, apresentar as opções com base no que a ideia suporta:

```
Esse conteúdo pode virar:

01 — Post Instagram (texto de valor)
02 — Carrossel (se tiver passos ou lista)
03 — Roteiro de Reels (se der para mostrar em 60s)
04 — Thread LinkedIn
05 — Bloco de newsletter
```

Indicar qual formato funciona melhor e por quê (1 frase).

---

### Passo 4 — Gerar o conteúdo

**Post Instagram ou LinkedIn:**
Seguir as regras de `/roteiro-post`.
- Começar com a tensão ou afirmação não-óbvia
- Desenvolvimento em blocos curtos
- CTA real, não genérico

**Carrossel:**
Seguir as regras de `/carrossel`.
- Slide 1: hook — o que para o scroll
- Slides 2-6: desenvolvimento em passos ou revelações
- Slide final: CTA

**Roteiro de Reels:**
```
[0-3s] HOOK
Frase que para o scroll.

[4-15s] PROBLEMA / PROMESSA
Por que isso importa. O que está em jogo.

[16-45s] CONTEÚDO
A ideia desenvolvida — com o jeito de Michelle falar.

[46-60s] FECHAMENTO + CTA
```

**Thread LinkedIn:**
- Fio de 5-8 tweets/posts
- Tweet 1: o insight central
- Tweets 2-6: desenvolvimento, exemplos, nuances
- Tweet final: conclusão + CTA

**Newsletter:**
Bloco de 150-300 palavras para inserir em uma edição existente.

---

### Passo 5 — Apresentar e salvar

Mostrar o conteúdo gerado e perguntar:
- "Quer ajustar algum trecho ou publicar assim?"
- "Tem data para publicar? Posso adicionar ao calendário."

Salvar em: `marketing/conteudo/roteiros/[formato]-[tema]-[data].md`

Confirmação:
```
CONTEÚDO GERADO
Formato: [tipo]
Tom: [descrição de 1 linha]
Arquivo: [caminho]

Próximo passo: [publicar / revisar / adaptar para outro formato]
```

---

## Regras

- Não suavizar — se a ideia for direta ou confrontadora, manter assim
- Não encher de hashtags nem de "comenta aqui embaixo" genérico
- Se a ideia for incompleta, perguntar antes de inventar
- Manter o jeito de Michelle falar: sem jargões, sem teoria de marketing, com exemplos reais
- Uma ideia bruta pode virar 3 formatos diferentes — se fizer sentido, oferecer
- Se a ideia vier de uma sessão com cliente (anonimizar) ou de uma observação própria (manter na primeira pessoa)
- Seguir todas as regras absolutas de `_contexto/preferencias.md` — incluindo travessão proibido, sem tom de coach, sem mecânico
- O output tem que soar como ela pensando alto numa conversa, não como conteúdo processado
