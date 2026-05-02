---
name: analisar-dados
description: >
  Analisa arquivos de dados (CSV, Excel, PDF, TXT) e gera resumo executivo com
  insights, tendências e recomendações concretas. Calibrado para os dois negócios.
  Use quando disser "analisa esse arquivo", "o que mostram esses dados",
  "resume esses resultados", "analisa essa campanha", ou ao arrastar qualquer arquivo de dados.
---

# /analisar-dados — Análise de Dados

## Dependências

- **Contexto do negócio:** `_contexto/empresa.md`
- **Tom de voz:** `_contexto/preferencias.md`

---

## Workflow

### Passo 1 — Entender o contexto

Se não estiver claro, perguntar apenas o que falta:

- "O que é esse arquivo? (Meta Ads, vendas, leads, métricas do programa, dados de cliente...)"
- "Qual é a pergunta principal que quer responder?"

Se o contexto for óbvio pelo nome do arquivo ou conteúdo, prosseguir sem perguntar.

---

### Passo 2 — Ler e processar o arquivo

Ler o arquivo fornecido ou soltar na pasta `dados/`. Tipos suportados:
- CSV / Excel (.xlsx, .xls)
- PDF (extrair tabelas e números)
- TXT / JSON exportados de ferramentas

---

### Passo 3 — Análise

Identificar e reportar por tipo de dado:

**Dados de marketing / Meta Ads:**
- CPL, CPC, CTR, ROAS, frequência, alcance
- Criativos e públicos com melhor e pior performance
- Tendência de custo ao longo do período

**Dados de vendas / programa:**
- Taxa de conversão por etapa do funil
- Ticket médio, recorrência, churn
- Períodos de pico e queda

**Dados operacionais (clientes ED):**
- Volume por processo, tempo médio, gargalos
- Comparação antes/depois de implementações

**Em qualquer análise, identificar:**
- O que está funcionando (padrões positivos, top performers)
- O que merece atenção (quedas, anomalias, desperdício)
- Comparação com período anterior se houver
- Pelo menos 1 insight não óbvio na leitura superficial

---

### Passo 4 — Output

```markdown
# Análise — [Nome do Arquivo / Campanha / Período]
[Data da análise]

## Panorama geral
[2-3 parágrafos com o que esses dados dizem de verdade]

## O que está funcionando
[lista com contexto, não só números soltos]

## O que merece atenção
[lista com contexto e impacto]

## 3 recomendações
01. [ação concreta com base nos dados]
02. [ação concreta]
03. [ação concreta]

## Números-chave
| Métrica | Valor | Contexto |
|---------|-------|---------|
```

**Salvar conforme origem dos dados:**
- Campanhas QE/ED: `marketing/dados/analise-[nome]-[data].md`
- Dados de cliente ED: `essencia-digital/clientes/[empresa]/analise-[data].md`
- Dados do programa QE: `quinta-essencia/dados/analise-[nome]-[data].md`

Perguntar ao final: "Quer exportar esse resumo em HTML para apresentar?"

---

## Regras

- Análise em prosa, não só listas — deve dar para ler e entender sem abrir o arquivo original
- Nunca inventar ou inferir dados que não estão no arquivo
- Se os dados estiverem incompletos ou com problemas de qualidade, apontar antes de analisar
- Recomendações: ações concretas e acionáveis, nunca "considere melhorar"
