---
name: radar-semanal
description: Pesquisa notícias quentes da semana nos nichos da Michelle — estratégias de negócio, IA para empreendedores e brasileiros empreendendo fora. Rodar toda quinta-feira para comparar com a curadoria manual da semana.
---

# /radar-semanal

## Contexto

Ler `_contexto/empresa.md` para entender o negócio e calibrar a relevância das notícias encontradas.

## Objetivo

Buscar o que saiu de relevante na semana nos 3 clusters de nicho da Michelle. O resultado serve para comparar com a curadoria manual que ela já fez ao longo da semana e identificar o que pode ter ficado de fora.

## Clusters de busca

### 1. Mercado europeu + brasileiros fora
Foco: empreendedorismo, expansão para Europa, brasileiros que vivem e trabalham fora, vender pro mercado europeu.

Queries sugeridas:
- `brasileiros empreendendo europa 2025`
- `brasileiros morando fora negócios site:instagram.com OR site:linkedin.com OR site:substack.com`
- `vender para europeus brasileiros mercado europeu`
- `empreendedorismo expatriados brasileiros`

### 2. Estratégias de negócio
Foco: consultoria B2B, operações, estrutura empresarial, eficiência, como fazer negócio escalar sem depender do dono.

Queries sugeridas:
- `estratégias operações consultoria B2B 2025`
- `como estruturar negócio sem depender do dono`
- `eficiência operacional pequenas empresas tendências`
- `consultoria implementação estratégica novidades`

### 3. IA para empreendedores
Foco: ferramentas de IA, automação, como solopreneurs e pequenas empresas estão usando IA no dia a dia.

Queries sugeridas:
- `inteligência artificial empreendedores 2025`
- `automação IA pequenas empresas tendências`
- `ferramentas IA solopreneur consultora`
- `AI tools entrepreneurs latest`

## Workflow

### Passo 1 — Rodar as buscas

Para cada cluster, rodar 2-3 das queries sugeridas via WebSearch. Priorizar resultados dos últimos 7 dias quando possível.

Para resultados promissores (artigos, posts, newsletters), usar WebFetch via Jina (`https://r.jina.ai/{URL}`) para extrair o conteúdo e confirmar a relevância antes de incluir.

### Passo 2 — Filtrar o que é relevante

Para cada resultado, avaliar:
- É da última semana? (prioridade)
- Tem conteúdo real ou é só manchete vazia?
- Toca em algo que a Michelle faz ou que o público dela se importa?

Descartar: conteúdo genérico demais, listas sem substância, conteúdo repetido de semanas anteriores.

### Passo 3 — Montar o relatório

Estrutura:

```
# Radar Semanal — [data]

## Mercado europeu + brasileiros fora

- **[Título do conteúdo]** — [fonte/autor]
  [1-2 linhas do que aborda]
  Link: [URL]

[repetir para cada item encontrado — mínimo 3, máximo 6 por cluster]

---

## Estratégias de negócio

- **[Título]** — [fonte]
  [resumo]
  Link: [URL]

---

## IA para empreendedores

- **[Título]** — [fonte]
  [resumo]
  Link: [URL]

---

## O que pode ter ficado de fora

[2-3 linhas: padrões ou temas recorrentes nos resultados que podem não estar na curadoria manual — sem forçar, só se algo se destacar]
```

### Passo 4 — Salvar

Salvar em: `pesquisas/radar-YYYY-MM-DD.md`

Confirmar onde salvou e perguntar se algum item merece aprofundar.

## Regras

- Não inventar links ou títulos. Só incluir o que foi de fato encontrado
- Se um cluster tiver poucos resultados relevantes, dizer quantos encontrou e por quê filtrou os outros
- A seção "O que pode ter ficado de fora" é opcional — só escrever se houver algo genuinamente relevante
- Manter resumos curtos: 1-2 linhas por item, não mais
- Rodar toda quinta-feira, mas pode ser chamada a qualquer momento
