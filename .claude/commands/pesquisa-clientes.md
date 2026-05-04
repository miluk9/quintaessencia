---
name: pesquisa-clientes
description: >
  Pesquisa quem são os clientes de uma empresa alvo — usando site, cases, reviews,
  LinkedIn e Google. Útil para entender o porte e perfil de um prospect antes de
  uma call ou proposta.
  Ativa com: "quem são os clientes de [empresa]", "pesquisa a carteira de [empresa]",
  "essa empresa atende quem?", "quero entender o perfil dos clientes deles".
---

# /pesquisa-clientes — Descoberta de Clientes de um Prospect

## Dependências

- **Contexto do negócio:** `_contexto/empresa.md`

---

## Workflow

### Passo 1 — Receber o alvo

Perguntar se não foi informado:
- "Qual empresa quer pesquisar?"
- "Tem um contexto específico? (entender porte, validar fit, pesquisar antes de call)"

---

### Passo 2 — Pesquisa por camadas

**Camada 1 — Site (mais rápido):**
- Página de cases, clientes ou "quem usa"
- Logos de clientes no site
- Depoimentos com nome de empresa

**Camada 2 — Reviews públicos:**
- G2, Capterra, Trustpilot, Reclame Aqui (se brasileiro)
- Buscar por nome da empresa nas plataformas
- Extrair nomes de reviewers com empresa identificada

**Camada 3 — LinkedIn:**
- Buscar pessoas com "[empresa alvo]" no histórico de trabalho que mencionam uso do produto
- Posts da empresa marcando clientes

**Camada 4 — Google:**
- `"[empresa alvo]" + "clientes" site:linkedin.com`
- `"[empresa alvo]" + case study`
- Buscar menções em blogs e press

---

### Passo 3 — Consolidar e classificar

Organizar clientes encontrados por confiança:

| Confiança | Critério |
|---|---|
| Alta | Logo no site atual, case study publicado, depoimento oficial |
| Média | Review com empresa identificada, menção em post, vídeo testimonial |
| Baixa | Menção única em rede social, referência indireta |

---

### Passo 4 — Output

```markdown
# Clientes de [Empresa] — [Data]

## Resumo
- Clientes identificados: [número]
- Confiança alta: [número]
- Setores predominantes: [lista]
- Porte típico dos clientes: [pequeno / médio / grande]

## Clientes identificados

### Alta confiança
| Empresa | Evidência | Fonte |
|---|---|---|

### Média confiança
| Empresa | Evidência | Fonte |
|---|---|---|

## Implicações para a ED
[O que o perfil de clientes diz sobre o prospect — porte, nível de maturidade, expectativas]
```

---

### Passo 5 — Salvar

`essencia-digital/clientes/[empresa]/pesquisa-clientes-[data].md`

---

## Regras

- Não incluir clientes sem fonte identificável
- Se a empresa for pequena e não tiver cases públicos, dizer isso diretamente
- Conectar os achados ao que é relevante para a ED: o porte dos clientes deles indica o porte da operação deles
