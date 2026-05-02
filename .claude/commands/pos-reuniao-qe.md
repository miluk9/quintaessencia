---
name: pos-reuniao-qe
description: >
  Gera o Resumo da Sessão + PAP (Plano de Aceleração Personalizado) após uma CIA do Quinta Essência.
  Salva o rascunho localmente primeiro; só vai ao Notion com aprovação da Michelle.
  Use quando pedir "faz o resumo da sessão com [cliente]", "cria o PAP da [cliente]",
  "pós-reunião QE", "documenta a CIA de hoje", ou passar notas brutas de uma sessão.
---

# /pos-reuniao-qe — Pós-Reunião Quinta Essência

## Dependências

- **Contexto do negócio:** `_contexto/empresa.md`
- **Tom de voz:** `_contexto/preferencias.md`
- **Notas da sessão:** fornecidas pela Michelle (Granola, texto livre, ou arquivo)

---

## Workflow

### Passo 1 — Coletar as informações da sessão

Se não foram fornecidas, perguntar:

1. "Qual é o nome da cliente?"
2. "Qual CIA foi essa? (1 a 6)"
3. "Tem notas da sessão? (Granola, texto livre, pontos que lembra)"

Se as notas forem brutas ou fragmentadas, extrair o que der e prosseguir. Não pedir para a cliente repetir o que já foi dito.

---

### Passo 2 — Gerar o Resumo da Sessão

**Estrutura (6 seções):**

**01. Contexto atual**
Situação do negócio da cliente no momento da sessão. O que ela trouxe, onde está agora, o que mudou desde a última CIA.

**02. O que já está funcionando**
Pontos fortes identificados — o que está gerando resultado, o que ela está fazendo certo. Nomear sem exagerar.

**03. Onde está o gargalo**
O problema central diagnosticado na sessão. Específico, não genérico. Uma a três questões prioritárias.

**04. Decisão estratégica da sessão**
O que foi decidido ou redirecionado durante a conversa. O ponto de virada, se houve.

**05. Próximos passos**
Ações concretas para até a próxima CIA. Com responsável (cliente) e prazo quando possível.
Formato:
- [ ] Ação 1 — prazo
- [ ] Ação 2 — prazo
- [ ] Ação 3 — prazo

**06. Para a próxima sessão**
O que a cliente deve trazer na próxima CIA. O que a Michelle vai acompanhar.

**Tom:** direto, sem floreio. É um documento de trabalho, não um relatório corporativo. A cliente deve ler e pensar "é exatamente isso".

---

### Passo 3 — Gerar o PAP (Plano de Aceleração Personalizado)

**Identificar o mês:** CIA 1 = Mês 1, CIA 2 = Mês 2, etc.

**Estrutura do PAP:**

```
PAP — Mês [número]
[Nome da cliente]
Período: [data início] a [data fim]

Foco do mês: [1-2 frases sobre o tema central do mês]

---

ENGRENAGEM 01 — PRODUTO
Objetivo: [o que se quer atingir em produto este mês]
Ações:
  01. [ação específica]
  02. [ação específica]
Prazo: [data ou "até próxima CIA"]

ENGRENAGEM 02 — MARKETING
Objetivo: [objetivo de marketing deste mês]
Ações:
  01. [ação específica]
  02. [ação específica]
Prazo: [data ou "até próxima CIA"]

ENGRENAGEM 03 — COMERCIAL
Objetivo: [objetivo comercial deste mês]
Ações:
  01. [ação específica]
  02. [ação específica]
Prazo: [data ou "até próxima CIA"]

ENGRENAGEM 04 — GESTÃO
Objetivo: [objetivo de gestão deste mês]
Ações:
  01. [ação específica]
  02. [ação específica]
Prazo: [data ou "até próxima CIA"]
```

Preencher apenas as engrenagens que foram trabalhadas na sessão. Se uma engrenagem não foi discutida, omitir ou indicar "sem ação este mês".

---

### Passo 4 — Salvar e apresentar rascunho

Salvar ambos os documentos em:
- `quinta-essencia/clientes/[nome-cliente]/cia-[numero]-resumo-[data].md`
- `quinta-essencia/clientes/[nome-cliente]/pap-[numero]-[data].md`

Apresentar ao usuário:
```
RASCUNHO SALVO:
- cia-[número]-resumo-[data].md
- pap-[número]-[data].md

Cliente: [nome]
CIA: [número]
Gargalo identificado: [1 frase]
Próximos passos: [quantidade] ações

Quer revisar alguma seção antes de enviar para a cliente?
Se estiver tudo certo, posso salvar no Notion também.
```

Só salvar no Notion após aprovação explícita.

---

### Passo 5 — Salvar no Notion (apenas se aprovado)

Criar página no Notion na pasta da cliente correspondente.
Confirmar ao usuário: "Salvo no Notion. [link]"

---

## Regras

- O resumo deve soar como Michelle escreveu, não como um bot documentou
- Nunca usar linguagem de relatório corporativo
- Os próximos passos devem ser ações reais, não intenções vagas ("estudar o mercado" não é ação)
- PAP: só incluir o que foi de fato discutido na sessão
- Não inventar diagnóstico — se as notas não deixam claro, perguntar antes de escrever
- Nunca enviar ao Notion sem aprovação da Michelle primeiro
