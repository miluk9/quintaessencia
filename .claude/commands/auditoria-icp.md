---
name: auditoria-icp
description: >
  Analisa o site de um prospect através do olhar do ICP da Essência Digital —
  identifica se encaixa no perfil de cliente ideal, o que sinaliza dor operacional
  e o ângulo de entrada mais provável.
  Ativa com: "essa empresa é ICP?", "analisa o site de [empresa]", "essa empresa encaixa?",
  "vale ir atrás de [empresa]?", "qualifica esse prospect".
---

# /auditoria-icp — Análise de Prospect vs. ICP da ED

## Dependências

- **Contexto do negócio:** `_contexto/empresa.md`

---

## ICP da Essência Digital (referência)

- Empresa B2B com operação estabelecida mas não documentada
- 5-50 funcionários, receita em crescimento mas processos ainda manuais
- Dono/gestor que toca tudo e percebe que não consegue crescer mais sem estrutura
- Já tentou contratar "alguém para organizar" mas o problema continua
- Não precisa de consultoria estratégica — precisa de implementação

---

## Workflow

### Passo 1 — Receber o alvo

Perguntar se não foi informado:
- "Qual empresa? Pode ser nome, site ou LinkedIn."

---

### Passo 2 — Pesquisa do site e presença pública

Acessar via WebFetch e WebSearch:
- Site principal — proposta de valor, linguagem usada, o que comunicam
- LinkedIn da empresa — tamanho, tempo de existência, vagas abertas, posts recentes
- LinkedIn do fundador/CEO — cargo, trajetória, o que posta
- Google — menções, reviews, press

---

### Passo 3 — Avaliar por critério

Pontuar cada critério de 1 a 3 (1 = não encaixa, 2 = parcial, 3 = encaixa bem):

| Critério | Pontuação | Evidência |
|---|---|---|
| Modelo B2B (vende para empresas) | | |
| Tamanho (5-50 pessoas) | | |
| Operação existente (não é startup early stage) | | |
| Sinais de crescimento (contratações, expansão) | | |
| Sinais de dor operacional (vagas para "organizar", tom de caos) | | |
| Dono/gestor como decisor | | |
| Sem estrutura de operações formalizada aparente | | |

**Total: /21**

- 17-21: ICP forte — prioridade alta
- 12-16: ICP parcial — vale explorar com cautela
- Abaixo de 12: fora do ICP

---

### Passo 4 — Identificar sinais de dor operacional

Buscar especificamente:
- Vagas para "assistente", "analista", "coordenador" sem descrição clara de processos
- Linguagem no site que soa manual ou dependente de pessoas específicas
- Múltiplos serviços/produtos sem uma operação clara de entrega
- Fundador com muitos anos de empresa mas equipe pequena ainda
- Reviews de clientes mencionando inconsistência no atendimento

---

### Passo 5 — Gerar o relatório

```markdown
# Auditoria ICP — [Empresa] | [Data]

## Pontuação: [X]/21 — [ICP forte / ICP parcial / Fora do ICP]

## Perfil identificado
[2-3 frases sobre quem é a empresa e o que fazem]

## Por que encaixa (ou não)
[Lista dos critérios mais relevantes com evidência]

## Sinais de dor operacional
[O que encontrou que indica problema que a ED resolve]

## Ângulo de entrada sugerido
[Por onde começar a conversa — qual dor tocar primeiro]

## Próximo passo
[Prospectar / Pesquisar mais / Descartar]
```

---

### Passo 6 — Salvar

`essencia-digital/prospecção/auditoria-icp-[empresa]-[data].md`

---

## Regras

- Ser direta — se não encaixa no ICP, dizer sem rodeio
- Evidência para tudo — não pontuar sem fonte
- Ângulo de entrada: específico para esse prospect, não genérico
- Se o LinkedIn ou site estiver desatualizado ou vazio, indicar como risco antes de prospectar
