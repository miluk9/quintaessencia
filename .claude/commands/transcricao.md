---
name: transcricao
description: >
  Transforma uma transcrição de áudio (Whisper ou qualquer transcritor) em
  documento pós-sessão, roteiro de aula, post para Instagram ou roteiro de Reels.
  Use quando colar uma transcrição e quiser transformar em algo estruturado.
  Ativa com: "transcrição", "pega esse áudio", "transforma isso em", "tenho a transcrição de",
  "documentar essa sessão", "faz um roteiro com isso".
---

# /transcricao — Transcrição → Documento

## Dependências

- **Tom de voz:** `_contexto/preferencias.md`
- **Contexto do negócio:** `_contexto/empresa.md`
- **Roteiro post:** `.claude/commands/roteiro-post.md` (quando output for post ou Reels)
- **Pós-reunião QE:** `.claude/commands/pos-reuniao-qe.md` (quando for sessão com cliente QE)
- **Pós-reunião ED:** `.claude/commands/pos-reuniao-ed.md` (quando for sessão com cliente ED)

---

## Workflow

### Passo 1 — Receber a transcrição

Aceitar qualquer formato:
- Texto bruto do Whisper (com ou sem marcação de tempo)
- Texto colado diretamente no chat
- Arquivo .txt ou .md na pasta `dados/`

Se não foi fornecida, perguntar: "Cola a transcrição aqui ou me diz onde está o arquivo."

---

### Passo 2 — Identificar o contexto

Ler a transcrição e identificar:
- **Tipo:** sessão com cliente QE / sessão com cliente ED / gravação de aula / ideia de conteúdo / reunião interna
- **Participantes:** só Michelle, Michelle + cliente, outros
- **Duração estimada:** curta (< 15 min) / média (15-45 min) / longa (> 45 min)

Se não estiver claro, perguntar: "Essa transcrição é de qual contexto — sessão com cliente, aula ou conteúdo?"

---

### Passo 3 — Perguntar o output desejado

Se não foi especificado, apresentar:

```
Que tipo de documento quer gerar?

01 — Documento pós-sessão (QE ou ED)
02 — Roteiro de aula (slide a slide)
03 — Post para Instagram ou LinkedIn
04 — Roteiro de Reels (até 60s)
05 — Todos
```

---

### Passo 4 — Gerar o output escolhido

**OUTPUT 01 — Documento pós-sessão**

Se cliente QE → seguir estrutura de `/pos-reuniao-qe`
Se cliente ED → seguir estrutura de `/pos-reuniao-ed`
Se contexto não identificado → estrutura genérica:
- Contexto e participantes
- Pontos principais discutidos
- Decisões tomadas
- Próximos passos com prazo
- O que acompanhar até o próximo encontro

Salvar em: `quinta-essencia/clientes/[nome]/` ou `essencia-digital/clientes/[nome]/`

---

**OUTPUT 02 — Roteiro de aula**

Estrutura slide a slide:

```
SLIDE 01 — ABERTURA
Título: [título da aula]
Fala: [o que Michelle diz nesse slide]

SLIDE 02 — [título da seção]
Conceito: [o que ensinar]
Fala: [como apresentar]
Exemplo: [exemplo real da transcrição, se houver]
Exercício: [se aplicável]

[repetir para cada bloco]

SLIDE FINAL — ENCERRAMENTO
Fala: [fechamento + próximo passo para a aluna]
```

Salvar em: `quinta-essencia/aulas/roteiro-[tema]-[data].md`

---

**OUTPUT 03 — Post Instagram ou LinkedIn**

Seguir as regras de `/roteiro-post`.

Extrair da transcrição:
- O insight principal — o que Michelle disse que é não-óbvio
- Um exemplo real ou situação concreta mencionada
- O ponto de tensão que o post vai confrontar

Não resumir a transcrição — extrair o melhor e construir o post em cima disso.

Salvar em: `marketing/conteudo/roteiros/post-[canal]-[tema]-[data].md`

---

**OUTPUT 04 — Roteiro de Reels**

```
[0-3s] HOOK
Frase de abertura — o que para o scroll.
Visual sugerido: [o que aparece na tela]

[4-15s] PROBLEMA OU PROMESSA
O que está em jogo. Por que importa.
Fala: [trecho extraído ou adaptado da transcrição]

[16-45s] CONTEÚDO
O ponto principal — com clareza, sem enrolação.
Fala: [fiel ao jeito de Michelle falar]

[46-60s] FECHAMENTO + CTA
Conclusão em 1-2 frases.
CTA: [comentário, salvar, DM]
```

Salvar em: `marketing/conteudo/roteiros/roteiro-reels-[tema]-[data].md`

---

### Passo 5 — Confirmar

```
GERADO A PARTIR DA TRANSCRIÇÃO:
[lista dos arquivos gerados]

Insight principal extraído: [1 frase]
Próximo passo sugerido: [publicar / revisar com cliente / adicionar slides]
```

---

## Regras

- Fidelidade ao tom da Michelle — a transcrição tem o jeito dela falar, usar isso
- Nunca resumir e nivelar por baixo — extrair o melhor, não o médio
- Transcrições têm ruído (vícios de linguagem, repetições) — limpar sem mudar o conteúdo
- Se for sessão com cliente, proteger nome e dados da cliente no arquivo salvo
- Não inventar nada que não está na transcrição — se faltar contexto, perguntar antes de preencher
- Se for longa (> 45 min), identificar os 3-5 momentos mais relevantes antes de gerar qualquer output
