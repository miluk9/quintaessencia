---
name: briefing-cliente
description: >
  Gera um briefing de pesquisa antes de uma call com cliente ou prospect.
  Para ED: pesquisa a empresa e prepara perguntas de diagnóstico.
  Para QE: levanta o contexto da empresária antes da sessão estratégica.
  Use quando pedir "pesquisa [empresa] antes da call", "briefing pré-call",
  "o que eu sei sobre [cliente]?", "prepara o contexto para a reunião com [pessoa/empresa]".
---

# /briefing-cliente — Briefing Pré-Call

## Dependências

- **Contexto do negócio:** `_contexto/empresa.md`
- **Tom de voz:** `_contexto/preferencias.md`

---

## Workflow

### Passo 1 — Identificar tipo de call

1. **Para qual empresa é?** ED ou QE
2. **Tipo de call:**
   - ED: primeira reunião de prospecção / diagnóstico / acompanhamento de projeto
   - QE: sessão estratégica CIA (mês 1-6) / call de fechamento com prospect
3. **O que a Michelle já sabe?** (pode fornecer notas ou nome + empresa)

---

### Passo 2 — Pesquisa (para ED e prospects novos)

Se for um prospect ou cliente B2B da Essência Digital:

Pesquisar usando WebSearch ou WebFetch:
- Site da empresa
- LinkedIn da empresa e do contato
- Setor, tamanho, modelo de negócio
- Conteúdo público recente (o que estão comunicando, quais dores aparentes)

Identificar antes da call:
- Principal gargalo provável dado o setor e tamanho
- Ferramentas que provavelmente usam
- O que uma empresa desse perfil geralmente trava

---

### Passo 3 — Gerar o briefing

**Formato ED (prospect ou cliente B2B):**

```markdown
# Briefing — [Nome da Empresa] | [Data da Call]

## Quem são
[Setor, tamanho, modelo de negócio, produto/serviço principal]

## Contato
[Nome, cargo, LinkedIn se encontrado]

## O que provavelmente está travado
[Diagnóstico preliminar com base no perfil — ser específico, não genérico]

## O que eles comunicam publicamente
[Tom do site/LinkedIn, o que priorizam, o que está ausente]

## Perguntas de diagnóstico para a call
01. [pergunta aberta sobre o problema principal suspeito]
02. [pergunta sobre processos e ferramentas atuais]
03. [pergunta sobre o que já tentaram e não funcionou]
04. [pergunta sobre quem toca o quê no time]
05. [pergunta sobre o que seria sucesso em 3 meses]

## Observações
[Qualquer ponto de atenção antes de entrar na call]
```

**Formato QE (cliente do programa — CIA mensal):**

```markdown
# Briefing — CIA [Mês] | [Nome da Cliente] | [Data]

## Contexto da cliente
[Negócio, onde está, o que foi trabalhado nas sessões anteriores]

## Foco do mês [X] conforme PAP
[Objetivo do mês e ações que foram acordadas]

## O que verificar no início da sessão
- O que foi feito desde a última CIA?
- O que travou? O que foi diferente do esperado?
- O número mais importante dessa semana/mês

## Pontos para aprofundar
[Com base no que a Michelle lembra da última sessão ou do PAP atual]

## Perguntas de abertura
01. [pergunta sobre progresso]
02. [pergunta sobre obstáculo específico]
03. [pergunta de calibração de energia/momento]
```

---

### Passo 4 — Salvar

- ED: `essencia-digital/clientes/[empresa]/briefing-[data].md`
- QE: `quinta-essencia/clientes/[cliente]/cia-[mes]/briefing-[data].md`

---

## Regras

- Diagnóstico preliminar: específico para o perfil da empresa, nunca "pode haver problemas de comunicação"
- Perguntas de diagnóstico: abertas, que fazem a pessoa pensar, não confirmatórias
- Para clientes da QE: não reinventar o que já está no PAP, reforçar o foco do mês
- Se não tiver informação suficiente para pesquisar, perguntar antes de gerar conteúdo vazio
